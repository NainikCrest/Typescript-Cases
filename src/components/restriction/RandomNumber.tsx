type PositiveNumber = {
  value: number;
  isPositive: boolean;
  isNegative?: never;
  isZero?: never;
};
type NegativeNumber = {
  value: number;
  isPositive?: never;
  isNegative?: boolean;
  isZero?: never;
};
type Zero = {
  value: number;
  isPositive?: never;
  isNegative?: never;
  isZero?: boolean;
};

type RandomNumberProps = PositiveNumber | NegativeNumber | Zero;

export const RandomNumber = ({
  value,
  isPositive,
  isNegative,
  isZero,
}: RandomNumberProps) => {
  return (
    <div>
      {value} {isPositive && "Positive"} {isNegative && "Negative"}{" "}
      {isZero && "Zero"}
    </div>
  );
};
