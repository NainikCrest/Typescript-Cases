import { PersonPros } from "./types";

export default function Person(props: PersonPros) {
  return (
    <div>
      {props.name.firstName} {props.name.lastName}
    </div>
  );
}
