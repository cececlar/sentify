import React, { useState, useEffect } from "react";
import { ResponsiveScatterPlot } from "@nivo/scatterplot";
import "./TextData.scss";
import { Paper, Box, Typography } from "@material-ui/core";

export default function TextData({ userInput, data }) {
  const [bulletData, setBulletData] = useState([]);
  console.log(userInput);
  console.log(data);

  const convertedData = data.map((item) => {
    return {
      id: `${userInput}`,
      data: [
        {
          x: data[0].documentSentiment.score,
          y: data[0].documentSentiment.magnitude,
        },
      ],
    };
  });

  useEffect(() => {
    setBulletData(convertedData);
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
              margin={{ right: 140, bottom: 70, left: 90 }}
              xScale={{ type: "linear", min: -1, max: 1 }}
              xFormat={function (e) {
                return e;
              }}
              yScale={{ type: "linear", min: -1, max: 5 }}
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
