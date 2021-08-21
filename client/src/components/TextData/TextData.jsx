import React, { useState, useEffect, useContext } from "react";
import { ResponsiveScatterPlot } from "@nivo/scatterplot";
import "./TextData.scss";
import { Paper, Box, Typography } from "@material-ui/core";
import axios from "axios";
import { AppContext } from "../../context/AppContext";

export default function TextData({ userInput, data }) {
  const [bulletData, setBulletData] = useState([]);
  const [maxMagnitude, setMaxMagnitude] = useState(0);
  const { allEntries, setAllEntries } = useContext(AppContext);

  const singleEntryData = data.map((item) => {
    return {
      id: `${userInput}`,
      data: [
        {
          x: item.documentSentiment.score,
          y: item.documentSentiment.magnitude,
        },
      ],
    };
  });

  const getMaxMagnitude = async () => {
    const max = await axios.get("/api/entries/maxmagnitude");
    setMaxMagnitude(max.data);
  };

  useEffect(() => {
    setBulletData(singleEntryData);
    getMaxMagnitude();

    // let allEntriesData = allEntries.map((item) => {
    //   return {
    //     id: `${item.text}`,
    //     data: [
    //       {
    //         x: item.documentSentiment.score,
    //         y: item.documentSentiment.magnitude,
    //       },
    //     ],
    //   };
    // });

    // allEntriesData = allEntries.push(singleEntryData);

    // setAllEntries(allEntriesData);
    console.log("hello from useEffect");
  }, [data]);

  return (
    <>
      <Paper elevation={3}>
        <Typography component="div">
          <Box
            textAlign="center"
            fontWeight="fontWeightBold"
            lineHeight={2}
            p={1}
          >
            Sentiment analysis for {`"${userInput}"`}
          </Box>
        </Typography>
        {bulletData && (
          <section className="text-data-graph">
            {" "}
            <ResponsiveScatterPlot
              data={bulletData}
              margin={{ right: 140, bottom: 70, left: 90, top: 10 }}
              xScale={{ type: "linear", min: -1, max: 1 }}
              xFormat={function (e) {
                return e;
              }}
              yScale={{ type: "linear", min: 0, max: maxMagnitude }}
              yFormat={function (e) {
                return e;
              }}
              axisTop={null}
              axisRight={null}
              axisBottom={{
                orient: "bottom",
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: "sentiment",
                legendPosition: "middle",
                legendOffset: 46,
              }}
              axisLeft={{
                orient: "left",
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: "magnitude",
                legendPosition: "middle",
                legendOffset: -60,
              }}
              legends={[
                {
                  anchor: "bottom-right",
                  direction: "column",
                  justify: false,
                  translateX: 130,
                  translateY: 0,
                  itemWidth: 100,
                  itemHeight: 12,
                  itemsSpacing: 5,
                  itemDirection: "left-to-right",
                  symbolSize: 12,
                  symbolShape: "circle",
                  effects: [
                    {
                      on: "hover",
                      style: {
                        itemOpacity: 1,
                      },
                    },
                  ],
                },
              ]}
              colors={{ scheme: "red_yellow_green" }}
            />
          </section>
        )}
      </Paper>
    </>
  );
}
