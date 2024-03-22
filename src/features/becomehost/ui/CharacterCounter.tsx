import { useEffect, useState } from "react";
import { StyledTextField } from "../../properties/forminput/StyledTextField";
import { Stack, Typography } from "@mui/material";
import ErrorMessage from "../../../components/ErrorMessage";
import { IAction } from "../../../context/BecomeHostContext";

interface IProps {
  htmlFor: string;
  textFieldRow: number;
  maxLength: number;
  textFieldWidth: string;
  placeholder: string;
  value: string | null;
  dispatch: React.Dispatch<IAction>;
  dispatchType: string;
}
function CharacterCounter({
  htmlFor,
  textFieldRow,
  maxLength,
  textFieldWidth,
  placeholder,
  value,
  dispatch,
  dispatchType,
}: IProps) {
  //   const [inputValue, setInputValue] = useState("");
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (value === null) return;
    if (value.length > maxLength) {
      setIsError(true);
    }
  }, [value, maxLength]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // setInputValue(event.target.value);
    dispatch({ type: dispatchType, payload: event.target.value });
  };
  //   const countChars = value.length;
  const countChars = value === null ? 0 : value.length;

  return (
    <Stack spacing={1}>
      <StyledTextField
        value={value === null ? "" : value}
        id={htmlFor}
        onChange={handleChange}
        multiline
        rows={textFieldRow}
        placeholder={placeholder}
        property={textFieldWidth}
        variant="outlined"
        autoFocus
      />
      <Typography variant="body1" color="#4f4f4f">
        {countChars} / {maxLength}
      </Typography>
      {isError && (
        <ErrorMessage
          text={`The maximum number of characters allowed is ${maxLength}`}
          size="1rem"
        />
      )}
    </Stack>
  );
}

export default CharacterCounter;
