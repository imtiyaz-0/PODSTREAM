import {useState} from "react";
import styled, { ThemeProvider } from "styled-components";
import {lightTheme , darkTheme} from "./utils/Themes";
import "./index.css";
import Sidebar from "./components/Sidebar";
import { BrowserRouter } from "react-router-dom";


const Container  = styled.div`
display: flex;
background: ${({ theme })=> theme.bgLight};
width: 100%;
height: 100vh;
overfloe-x:hidden;
overflow-y:hidden;
`;

const Frame = styled.div`
display: flex;
flex-direction: column;
flex:3;
`;


function App() {
  const [darkMode , setDardMode] = useState(true);
  const [menuOpen , setMenuOpen] = useState(true);
  return  (
  
  <ThemeProvider theme  = {darkMode ? darkTheme : lightTheme}>
    <BrowserRouter>
    <Container > 
    <Sidebar 
    setMenuOpen={setMenuOpen} 
    setDardMode ={setDardMode}
     darkMode={darkMode}
      />
    <Frame>PodStream</Frame>  
     </Container>
     </BrowserRouter>
  
  </ThemeProvider>
  )
  
}

export default App;
