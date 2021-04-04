import React from "react";
import TextForm from "../components/TextForm/TextForm";
import Nav from "../components/Nav/Nav";
import { Container } from "@material-ui/core";

export default function Home() {
  return (
    <div>
      <Nav />
      <Container>
        <TextForm />
      </Container>
    </div>
  );
}
