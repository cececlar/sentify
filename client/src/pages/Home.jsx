import React from "react";
import TextForm from "../components/TextForm/TextForm";
import Hero from "../components/Hero/Hero";
import { Container } from "@material-ui/core";

export default function Home() {
  return (
    <div>
      <Hero />
      <Container>
        <TextForm />
      </Container>
    </div>
  );
}
