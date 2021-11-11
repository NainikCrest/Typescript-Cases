type PersonPros = {
  name: {
    firstName: string;
    lastName: string;
  };
};

export default function Person(props: PersonPros) {
  return (
    <div>
      {props.name.firstName} {props.name.lastName}
    </div>
  );
}
