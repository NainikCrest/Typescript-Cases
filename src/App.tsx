import "./App.css";
import { Button } from "./components/Button";
import { Container } from "./components/Container";
import { Box } from "./components/context/Box";
import { ThemeContextProvider } from "./components/context/ThemeContext";
import Greet from "./components/Greet";
import Heading from "./components/Heading";
import { Input } from "./components/Input";
import Oscar from "./components/Oscar";
import Person from "./components/Person";
import PersonList from "./components/PersonList";
import Status from "./components/Status";

function App() {
  const personName = {
    firstName: "John",
    lastName: "Bruche",
  };

  const nameList = [
    { firstName: "John", lastName: "Bruche" },
    { firstName: "John", lastName: "Bruche" },
    { firstName: "John", lastName: "Bruche" },
  ];

  return (
    <div className="App">
      <Greet name="Nainik" isLoggedIn={false} />
      <Person name={personName} />
      <PersonList names={nameList} />

      <Status status="error" />
      <Heading>Heading</Heading>
      <Oscar>
        <Heading>Oscar</Heading>
      </Oscar>

      {/* Not have to pass any arguments and doesnot return anything */}
      {/* <Button handleClick={() => console.log("Button Clicked")} /> */}

      {/* Not have to pass event arguments and doesnot return anything */}
      <Button
        handleClick={(event, id) => console.log("Button Clicked", event, id)}
      />

      <Input value="" handleChange={(event) => console.log(event)} />

      <Container style={{ border: "1px solid black", padding: "1rem" }} />

      <ThemeContextProvider>
        <Box />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
