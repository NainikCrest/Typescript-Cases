import "./App.css";
import { Private } from "./components/auth/Private";
import { Profile } from "./components/auth/Profile";
import { Button } from "./components/Button";
import Counter from "./components/class/Counter";
import { Container } from "./components/Container";
import { Box } from "./components/context/Box";
import { ThemeContextProvider } from "./components/context/ThemeContext";
import { User } from "./components/context/User";
import { UserContextProvider } from "./components/context/UserContext";
import { List } from "./components/generics/List";
import Greet from "./components/Greet";
import Heading from "./components/Heading";
import { Input } from "./components/Input";
import Oscar from "./components/Oscar";
import Person from "./components/Person";
import PersonList from "./components/PersonList";
import { MutableRef } from "./components/ref/MutableRef";
import { RandomNumber } from "./components/restriction/RandomNumber";
import Status from "./components/Status";
import { Toast } from "./components/templateliterals/Toast";

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

      <UserContextProvider>
        <User />
      </UserContextProvider>

      <MutableRef />

      <Counter message="The Count value is" />

      <Private isLoggedIn={true} component={Profile} />

      <List
        items={["Batman", "Superman", "Wonder Woman"]}
        onClick={(item) => console.log(item)}
      />

      <List items={[1, 2, 3, 4]} onClick={(item) => console.log(item)} />

      {/* <List
        items={[
          { firstName: "John", lastName: "Bruche" },
          { firstName: "John", lastName: "Bruche" },
          { firstName: "John", lastName: "Bruche" },
        ]}
        onClick={(item) => console.log(item)}
      /> */}

      <RandomNumber value={10} isPositive />
      <Toast position="center" />
    </div>
  );
}

export default App;
