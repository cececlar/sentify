import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import TextForm from "../components/TextForm/TextForm";
import Nav from "../components/Nav/Nav";
import { Container } from "@material-ui/core";

export default function Home() {
  const { message } = useContext(AppContext);
  return (
    <div>
      <Nav />
      <Container>
        <TextForm />
      </Container>
    </div>
  );
}
