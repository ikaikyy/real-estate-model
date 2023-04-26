# Real Estate Model Pilot

## Technologies

This is a NextJs project created as a model of a real estate site. I am developing it to showcase my skills on my portfolio, and it utilizes the following technologies:

- TypeScript:
  - Promises
  - Types
  - ES6
  - Array Methods(map, filter, etc.)
- NextJs:
  - Serverless APIs
  - Next Router
- ReactJs:
  - Hooks:
    - useSate
    - useEffect
    - useContext
    - useRouter(from NextJs)
    - useStyleConfig(from Chakra UI)
    - useForm(from react-hook-form)
  - Props
  - Context API
  - React memo
  - ReactDOM createPortal
  - React Swiper Component
  - React Icons
- Chakra UI:
  - Pre-built Components
  - Theme configuration
  - Inline CSS
  - defineStyleConfig for Components Styling(like a superset of Styled Components)
  - StyledSystem
- CSS:
  - FlexBox
  - Animations
  - Responsive design
  - Breakpoints
  - ::After/::Before
- Zod for form validations
- Axios
- NodeMailer
- Gmail API - OAuth 2.0

## About

I created this site to demonstrate my skills and experience, and it is no intended for actual real estate listings.

All of the image content on the site is generic.

### Properties:

- To obtain the property content, I used a public third-party API called Real Estate USA. However, due to instability, the API requests only work sporadically and may cause a small loop of page reloads until the request returns without an error. To mitigate this issue, I made a request to the API, filtered the results I wanted to use, and created a mock of the response. Now, I still have an API route that returns the content, but without instability, as the API just returns the mock content.

### /home Banner images:

- I obtained the banner images by searching on Google for images with a resolution of 1920 x 1080, and I included them in the Mock in form of an array.

## Access

The project is deployed on [Vercel Platform](https://real-estate-model.vercel.app/) if you want to see how it's coming along.
