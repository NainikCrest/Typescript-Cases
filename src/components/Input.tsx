import React from "react";

type InputProps = {
  value: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Input = (props: InputProps) => {
  // If Not Passing as Props

  //   const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //     console.log(event);
  //   };
  //   return <input type="text" value={props.value} onChange={handleInputChange} />;

  return (
    <input type="text" value={props.value} onChange={props.handleChange} />
  );
};
