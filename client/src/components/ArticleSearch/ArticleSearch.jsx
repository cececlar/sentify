import React, { useState, useContext } from "react";
import { FormLabel, TextField, Button, Box } from "@material-ui/core";

export default function ArticleSearch({ handleSearch }) {
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(e.target.text.value);
    handleSearch(e.target.text.value);
    e.target.reset();
  };

  return (
    <>
      <Box mt={4} mb={2}>
        <form onSubmit={handleSubmit} className="verbalyze-form">
          <FormLabel htmlFor="text">Search news</FormLabel>
          <Box mt={2} mb={2}>
            <TextField
              name="text"
              id="text"
              type="text"
              variant="outlined"
              multiline
              rows="1"
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
    </>
  );
}
