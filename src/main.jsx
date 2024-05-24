
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ChakraProvider, extendTheme, ColorModeScript } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import { BrowserRouter } from "react-router-dom";
const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  styles: {
    global: (props) => ({
      body: {
        bg: mode("gray.800", "gray.800")(props),
        color: mode("white", "white")(props),
        backgroundImage: "url('https://i.pinimg.com/originals/53/18/3e/53183edd3a8cba0b1eae7b679c67fc56.gif')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      },
    }),
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider theme={theme}>
  <ColorModeScript initialColorMode={theme.config.initialColorMode} />
 <BrowserRouter>
 <App/>
 </BrowserRouter>
</ChakraProvider>,
)
