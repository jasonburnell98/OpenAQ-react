import React, { FC } from "react";
import { Input } from "semantic-ui-react";

type IProps = {
  firstCity: string;
  setFirstCity: (firstCity: string) => void;
  placeholder: string;
};

const InputField: FC<IProps> = ({ firstCity, setFirstCity, placeholder }) => {
  return (
    <Input
      focus
      placeholder={placeholder}
      value={firstCity}
      onChange={(e: any) => {
        setFirstCity(e.target.value);
      }}
    />
  );
};

export default InputField;
