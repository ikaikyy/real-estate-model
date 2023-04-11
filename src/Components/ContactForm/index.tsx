import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Box,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
  Textarea,
  Button,
  Stack,
  StackDivider,
} from "@chakra-ui/react";
import Image from "@/Components/Image";

const schema = z.object({
  name: z
    .string()
    .min(3, "Nome deve ter no mínimo 3 caracteres")
    .max(50, "Nome deve ter no máximo 50 caracteres")
    .nonempty("Nome é obrigatório"),
  email: z.string().email("Email inválido").nonempty("Email é obrigatório"),
  phone: z
    .string()
    .min(10, "Telefone deve ter no mínimo 10 caracteres")
    .max(11, "Telefone deve ter no máximo 11 caracteres")
    .nonempty("Telefone é obrigatório"),
  message: z
    .string()
    .min(10, "Mensagem deve ter no mínimo 10 caracteres")
    .max(500, "Mensagem deve ter no máximo 500 caracteres")
    .nonempty("Mensagem é obrigatória"),
});

type FormValues = z.infer<typeof schema>;

const ContactForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
  });

  return (
    <Box
      as="form"
      onSubmit={handleSubmit((data) => console.log(data))}
      display="flex"
      flexDirection="column"
      margin=" 20px auto"
      maxW="768px"
      w="96vw"
      fontSize="md"
    >
      <Stack divider={<StackDivider borderColor="transparent" />}>
        <Box display="flex" justifyContent="center">
          <Text fontSize={36} letterSpacing={2} textTransform="uppercase">
            / Contato /
          </Text>
        </Box>
        <Box display="flex" flexDirection="column">
          <Text letterSpacing={0.5}>Nome completo</Text>
          <InputGroup display="flex" alignItems="center">
            <InputLeftElement top={1} left={0.5}>
              <Image
                src="https://img.icons8.com/material-rounded/36/282828/user.png"
                alt="user"
              />
            </InputLeftElement>
            <Input
              placeholder="Nome..."
              border={errors.name ? "1px solid red" : "1px solid #282828"}
              borderRadius={0}
              size="lg"
              _hover={{}}
              _focusVisible={{}}
              {...register("name")}
            />
          </InputGroup>
          {errors.name && (
            <Text color="red.500" fontSize="sm" letterSpacing={0.5}>
              {errors.name.message}
            </Text>
          )}
        </Box>
        <Box display="flex" flexDirection="column">
          <Text letterSpacing={0.5}>Email para contato</Text>
          <InputGroup>
            <InputLeftElement top={1} left={0.5}>
              <Image
                src="https://img.icons8.com/material-rounded/36/282828/mail.png"
                alt="email"
              />
            </InputLeftElement>
            <Input
              placeholder="Email..."
              border={errors.email ? "1px solid red" : "1px solid #282828"}
              borderRadius={0}
              size="lg"
              _hover={{}}
              _focusVisible={{}}
              {...register("email")}
            />
          </InputGroup>
          {errors.email && (
            <Text color="red.500" fontSize="sm" letterSpacing={0.5}>
              {errors.email.message}
            </Text>
          )}
        </Box>
        <Box display="flex" flexDirection="column">
          <Text letterSpacing={0.5}>Telefone para contato</Text>
          <InputGroup>
            <InputLeftElement top={1} left={0.5}>
              <Image
                src="https://img.icons8.com/ios-filled/32/282828/phone.png"
                alt="email"
              />
            </InputLeftElement>
            <Input
              placeholder="Telefone..."
              border={errors.phone ? "1px solid red" : "1px solid #282828"}
              borderRadius={0}
              size="lg"
              _hover={{}}
              _focusVisible={{}}
              {...register("phone")}
            />
          </InputGroup>
          {errors.phone && (
            <Text color="red.500" fontSize="sm" letterSpacing={0.5}>
              {errors.phone.message}
            </Text>
          )}
        </Box>
        <Box display="flex" flexDirection="column">
          <Text letterSpacing={0.5}>Mensagem</Text>
          <Textarea
            placeholder="Mensagem..."
            border={errors.message ? "1px solid red" : "1px solid #282828"}
            borderRadius={0}
            h={120}
            size="lg"
            resize="none"
            defaultValue="Olá, gostaria de receber mais informações sobre o imóvel."
            _hover={{}}
            _focusVisible={{}}
            {...register("message")}
          />
          {errors.message && (
            <Text color="red.500" fontSize="sm" letterSpacing={0.5}>
              {errors.message.message}
            </Text>
          )}
        </Box>
        <Box>
          <Button
            type="submit"
            w="100%"
            bg="#fafafa"
            border="1px solid #282828"
            color="#282828"
            borderRadius={0}
            size="lg"
            _hover={{
              bg: "#282828",
              color: "#fafafa",
            }}
          >
            <Text fontWeight={400} textTransform="uppercase">
              Solicitar Contato
            </Text>
          </Button>
        </Box>
      </Stack>
    </Box>
  );
};

export default ContactForm;
