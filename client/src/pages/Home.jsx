import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import TextForm from "../components/TextForm/TextForm";
import Nav from "../components/Nav/Nav";

export default function Home() {
  const { message } = useContext(AppContext);
  return (
    <div>
      <Nav />
      <h2>I am the home component. {message}</h2>
      <TextForm />
    </div>
  );
}
