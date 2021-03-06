import { Name } from "./types";

type PersonListProps = {
  names: Name[];
};

export default function PersonList(props: PersonListProps) {
  return (
    <div>
      {props.names.map((name, i) => {
        return (
          <h2 key={i}>
            {name.firstName} {name.lastName}
          </h2>
        );
      })}
    </div>
  );
}
