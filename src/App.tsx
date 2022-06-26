import "bootstrap/dist/css/bootstrap.min.css";
import { UseContextProvider, userContext } from "./context/userContext";
import { ContainerApp } from "./global/styles";
import { useContext } from "react";
function App() {

  const {isAdmin,setIsAdmin}=useContext(userContext)
  return (
    <UseContextProvider>
      <ContainerApp fluid>
        <h1>OS MAGNATAS</h1>
      </ContainerApp>
    </UseContextProvider>
  );
}

export default App;
