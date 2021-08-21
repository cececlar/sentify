import React, { useState, useContext } from "react";
import { FormLabel, TextField, Button, Box } from "@material-ui/core";
import axios from "axios";
import TextData from "../TextData/TextData";
import useEffectUpdate from "../../hooks/useEffectUpdate";
import { AppContext } from "../../context/AppContext";

export default function TextForm() {
  const [text, setText] = useState("");
  const [textData, setTextData] = useState(null);
  const { allEntries, setAllEntries } = useContext(AppContext);

  // useEffectUpdate(() => {
  //   console.log(textData);
  // }, [textData]);

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
      <Box mt={4} mb={2}>
        <form onSubmit={handleSubmit} className="verbalyze-form">
          <FormLabel htmlFor="text">Verbalyze Text</FormLabel>
          <Box mt={2} mb={2}>
            <TextField
              name="text"
              id="text"
              type="text"
              variant="outlined"
              multiline
              rows="4"
              fullWidth
              autoFocus
              required
            />
          </Box>
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </form>
      </Box>
      {textData && text && <TextData data={textData} userInput={text} />}
    </>
  );
}
