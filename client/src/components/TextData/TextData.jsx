import React, { useState, useEffect } from "react";
import { ResponsiveScatterPlot } from "@nivo/scatterplot";
import "./TextData.scss";

export default function TextData({ userInput, data }) {
  const [bulletData, setBulletData] = useState([]);
  console.log(userInput);
  console.log(data);

  useEffect(() => {
    setBulletData([
      {
        id: `${userInput}`,
        data: [
          {
            x: data[0].documentSentiment.score,
            y: data[0].documentSentiment.magnitude,
          },
        ],
      },
    ]);
  }, [data]);

  return (
    <>
      <p>{userInput}</p>
      {bulletData && (
        <section className="text-data-graph">
          {" "}
          <ResponsiveScatterPlot
            data={bulletData}
            margin={{ top: 60, right: 140, bottom: 70, left: 90 }}
            xScale={{ type: "linear", min: -1, max: 1 }}
            xFormat={function (e) {
              return e;
            }}
            yScale={{ type: "linear", min: -1, max: 1 }}
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
          />
        </section>
      )}
    </>
  );
}
