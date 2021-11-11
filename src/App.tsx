import "./App.css";
import Greet from "./components/Greet";
import Heading from "./components/Heading";
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
    </div>
  );
}

export default App;
