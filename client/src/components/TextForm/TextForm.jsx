import React, { useState, useEffect } from "react";
import { FormLabel, TextField, Button } from "@material-ui/core";
import axios from "axios";

export default function TextForm() {
  const [text, setText] = useState("");

  const verbalyzeText = async (string) => {
    const textData = await axios.post("/api/verbalyze", {
      text: text,
    });
    console.log(textData.data);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setText(e.target.text.value);
    verbalyzeText(text);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
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
    </>
  );
}
