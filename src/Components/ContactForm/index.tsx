import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Box,
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
  Textarea,
  Select,
  Spinner,
  Stack,
  StackDivider,
  defineStyleConfig,
  useStyleConfig,
} from "@chakra-ui/react";
import InputMask from "react-input-mask";
import Image from "@/Components/Image";

const schema = z.object({
  option: z
    .string()
    .nonempty("Selecione uma opção")
    .refine((value) => value !== "none", {
      message: "Selecione uma opção",
    }),
  name: z
    .string()
    .min(3, "Nome deve ter no mínimo 3 caracteres")
    .max(50, "Nome deve ter no máximo 50 caracteres")
    .nonempty("Nome é obrigatório"),
  email: z.string().email("Email inválido").nonempty("Email é obrigatório"),
  phone: z
    .string()
    .regex(
      /^\(?([1-9][1-9])\)?\s*\d{4,5}\-?\d{4}$/,
      "Telefone inválido. Use o formato '(11) 99999-9999'."
    )
    .default(""),
  message: z
    .string()
    .min(10, "Mensagem deve ter no mínimo 10 caracteres")
    .max(500, "Mensagem deve ter no máximo 500 caracteres")
    .nonempty("Mensagem é obrigatória"),
});

type FormValues = z.infer<typeof schema>;

export const ContactFormStyle = defineStyleConfig({
  baseStyle: {
    display: "flex",
    flexDirection: "column",
    margin: "20px auto",
    maxW: "768px",
    w: "80vw",
    fontSize: "md",
    ".form-title": {
      display: "flex",
      justifyContent: "center",
      fontSize: 36,
      letterSpacing: 2,
      textTransform: "uppercase",
    },
    ".form__input-container": {
      display: "flex",
      flexDirection: "column",
      ".form__input-label": {
        letterSpacing: 0.5,
      },
      ".form__input-group": {
        display: "flex",
        alignItems: "center",
        ".form__input-icon": {
          top: 1,
          left: 0.5,
        },
        ".form__input": {
          border: "1px solid #282828",
          borderRadius: 0,
          h: 12,
          w: "100%",
          paddingRight: 4,
          _hover: {},
          _focusVisible: {
            outline: "none",
          },
        },
        ".form__input-mask": {
          paddingInlineStart: 10,
        },
        ".error__border": {
          border: "1px solid red",
        },
      },
      ".form__select": {
        border: "1px solid #282828",
        borderRadius: 0,
        h: 12,
        w: "100%",
        pl: 2,
      },
      ".error__border": {
        border: "1px solid red",
      },
      ".error__label": {
        color: "red.500",
        fontSize: "sm",
        letterSpacing: 0.5,
      },
    },
    ".form__textarea": {
      border: "1px solid #282828",
      borderRadius: 0,
      h: 120,
      resize: "none",
      padding: 2,
    },
    ".error__border": {
      border: "1px solid red",
    },
    ".form__button": {
      w: "100%",
      h: 12,
      bg: "#fafafa",
      border: "1px solid #282828",
      color: "#282828",
      borderRadius: 0,
      _hover: {
        bg: "#282828",
        color: "#fafafa",
      },
      ".form__button-text": {
        fontWeight: 400,
        textTransform: "uppercase",
      },
    },
  },
});

const ContactForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
  });
  const styles = useStyleConfig("ContactForm");
  const [isSending, setIsSending] = React.useState(false);
  const [isSent, setIsSent] = React.useState(false);

  const sendEmail = async (data: FormValues) => {
    setIsSending(true);
    try {
      await axios.post("/api/email", data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsSent(true);
      setIsSending(false);
    }
  };

  return (
    <Box as="section" id="contact-form">
      <Stack
        __css={styles}
        as="form"
        action="/api/email"
        method="POST"
        onSubmit={handleSubmit((data) => {
          sendEmail(data);
        })}
        divider={<StackDivider borderColor="#282828" />}
      >
        <Box className="form-title">Contato</Box>
        <Stack divider={<StackDivider borderColor="transparent" />}>
          <Box></Box>
          <Box className="form__input-container">
            <Text className="form__input-label">
              Qual meio de comunicação devemos usar?
            </Text>
            <Select
              className={
                errors.option ? "form__select error__border" : "form__select"
              }
              defaultValue="none"
              variant="unstyled"
              {...register("option")}
            >
              <option value="none" disabled>
                Selecione uma opção de contato
              </option>
              <option value="email">Email</option>
              <option value="phone">Telefone</option>
              <option value="whatsapp">WhatsApp</option>
            </Select>
            {errors.option && (
              <Text className="error__label">{errors.option.message}</Text>
            )}
          </Box>
          <Box className="form__input-container">
            <Text className="form__input-label">Nome completo</Text>
            <InputGroup className="form__input-group">
              <InputLeftElement className="form__input-icon">
                <Image
                  src="https://img.icons8.com/material-rounded/36/282828/user.png"
                  alt="user"
                />
              </InputLeftElement>
              <Input
                className={
                  errors.name ? "form__input error__border" : "form__input"
                }
                variant="unstyled"
                {...register("name")}
              />
            </InputGroup>
            {errors.name && (
              <Text className="error__label">{errors.name.message}</Text>
            )}
          </Box>
          <Box className="form__input-container">
            <Text className="form__input-label">Email para contato</Text>
            <InputGroup className="form__input-group">
              <InputLeftElement className="form__input-icon">
                <Image
                  src="https://img.icons8.com/material-rounded/36/282828/mail.png"
                  alt="email"
                />
              </InputLeftElement>
              <Input
                className={
                  errors.email ? "form__input error__border" : "form__input"
                }
                variant="unstyled"
                {...register("email")}
              />
            </InputGroup>
            {errors.email && (
              <Text className="error__label">{errors.email.message}</Text>
            )}
          </Box>
          <Box className="form__input-container">
            <Text className="form__input-label">Telefone para contato</Text>
            <InputGroup className="form__input-group">
              <InputLeftElement className="form__input-icon">
                <Image
                  src="https://img.icons8.com/ios-filled/32/282828/phone.png"
                  alt="email"
                />
              </InputLeftElement>
              <InputMask
                mask="(99) 99999-9999"
                className={
                  errors.phone
                    ? "form__input form__input-mask error__border"
                    : "form__input form__input-mask"
                }
                {...register("phone")}
              />
            </InputGroup>
            {errors.phone && (
              <Text className="error__label">{errors.phone.message}</Text>
            )}
          </Box>
          <Box className="form__input-container">
            <Text className="form__input-label">Mensagem</Text>
            <Textarea
              className={
                errors.message
                  ? "form__textarea error__border"
                  : "form__textarea"
              }
              defaultValue="Olá, gostaria de receber mais informações sobre o imóvel."
              variant="unstyled"
              {...register("message")}
            />
            {errors.message && (
              <Text className="error__label">{errors.message.message}</Text>
            )}
          </Box>
          <Button type="submit" className="form__button">
            {isSending ? (
              <Spinner
                thickness="4px"
                speed="0.65s"
                emptyColor="gray.200"
                color="#282828"
                size="md"
              />
            ) : (
              <Text className="form__button-text">Solicitar Contato</Text>
            )}
          </Button>
          {isSent && (
            <Text color="green" margin="auto">
              Email enviado!
            </Text>
          )}
        </Stack>
      </Stack>
    </Box>
  );
};

export default ContactForm;
