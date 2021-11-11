import "./App.css";
import Greet from "./components/Greet";
import Person from "./components/Person";
import PersonList from "./components/PersonList";

function App() {
  const personName = {
    firstName: "John",
    lastName: "Bruche",
  };

  const nameList = [{ firstName: "John", lastName: "Bruche" }];
  return (
    <div className="App">
      <Greet name="Nainik" messageCount={20} isLoggedIn={false} />
      <Person name={personName} />
      <PersonList />
    </div>
  );
}

export default App;
