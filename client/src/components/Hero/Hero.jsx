import React, { useState, useEffect, useContext } from "react";
import TextData from "../TextData/TextData";
import axios from "axios";
import { AppContext } from "../../context/AppContext";

export default function Hero() {
  const [allEntriesData, setAllEntriesData] = useState(null);
  const [bulletData, setBulletData] = useState([]);

  const getEntries = async () => {
    const entries = await axios.get("/api/entries");
    console.log(entries.data);
    setAllEntriesData(entries.data);
    return entries;
  };

  // const extractBulletData = (array) => {
  //   let convertedData = array.map((item) => {
  //     return {
  //       id: `${item.text}`,
  //       data: [
  //         {
  //           x: item.documentSentiment.score,
  //           y: item.documentSentiment.magnitude,
  //         },
  //       ],
  //     };
  //   });

  //   setBulletData(convertedData);
  // };

  useEffect(() => {
    getEntries();
    // extractBulletData(allEntriesData);
    // console.log(bulletData);
  }, []);
  return <div>{/* <TextData data={bulletData} /> */}</div>;
}
