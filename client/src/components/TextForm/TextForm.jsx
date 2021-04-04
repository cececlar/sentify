import React, { useState } from "react";
import { FormLabel, TextField, Button } from "@material-ui/core";
import axios from "axios";
import "./TextForm.scss";
import TextData from "../TextData/TextData";
import useEffectUpdate from "../../hooks/useEffectUpdate";

export default function TextForm() {
  const [text, setText] = useState("");
  const [textData, setTextData] = useState(null);

  useEffectUpdate(() => {}, [textData]);

  const verbalyzeText = async (string) => {
    const apiData = await axios.post("/api/verbalyze", {
      text: string,
    });
    setTextData([apiData.data]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userInput = e.target.text.value;
    verbalyzeText(userInput);
    setText(userInput);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="verbalyze-form">
        <FormLabel htmlFor="text" required>
          Verbalyze Text
        </FormLabel>
        <TextField
          name="text"
          id="text"
          type="text"
          variant="outlined"
          multiline
          rows="4"
          fullWidth
          autoFocus
        />
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </form>
      {textData && text && <TextData data={textData} userInput={text} />}
    </>
  );
}
