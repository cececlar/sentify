import React, { useState } from "react";
import { ResponsiveBullet } from "@nivo/bullet";
import "./TextData.scss";

export default function TextData({ userInput, data }) {
  const [bulletData, setBulletData] = useState([]);
  console.log(userInput);
  console.log(data);

  return (
    <>
      {/* TODO: setBulletData & customize props for ResponsiveBullet chart
    TODO: Resolve unused var warnings  */}
      {/* {textData && (
        <section className="text-data-graph">
          {" "}
          <ResponsiveBullet
            data={bulletData}
            margin={{ top: 50, right: 90, bottom: 50, left: 90 }}
            spacing={46}
            titleAlign="start"
            titleOffsetX={-70}
            measureSize={0.2}
          />
        </section>
      )} */}
      <p>{userInput}</p>
    </>
  );
}
