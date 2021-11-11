type GreetProps = {
  name: string;
  messageCount: number;
  isLoggedIn: boolean;
};

export default function Greet(props: GreetProps) {
  return (
    <div>
      <h2>
        {props.isLoggedIn
          ? `Welcome ${props.name}! To the World of Typescript ${props.messageCount}`
          : `Welcome Buddy`}
      </h2>
    </div>
  );
}
