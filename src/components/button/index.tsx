import React, { FC } from "react";
import { Button } from "semantic-ui-react";

type ButtonProps = {
  firstCity: string;
  handleSearchCity: (firstCity: string) => void;
  placeholder: string;
};
const SerachButton: FC<ButtonProps> = ({
  firstCity,
  handleSearchCity,
  placeholder,
}) => {
  return (
    <Button secondary onClick={() => handleSearchCity(firstCity)}>
      {placeholder}
    </Button>
  );
};

export default SerachButton;
