type ButtonProps = {
  //   handleClick: () => void; // Not have to pass any arguments and doesnot return anything
  //   handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void; //  pass event arguments and doesnot return anything
  handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void;
};

export const Button = (props: ButtonProps) => {
  return (
    <button onClick={(event) => props.handleClick(event, 1)}>Click</button>
  );
};
