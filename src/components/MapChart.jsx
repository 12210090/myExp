import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Annotation,
  ZoomableGroup,
} from "react-simple-maps";

const MapChart = () => {
  return (
    <ComposableMap
      projection="geoAzimuthalEqualArea"
      projectionConfig={{
        rotate: [-50.0, -10.0, 0],
        center: [30, 10],
        scale: 900,
      }}
      style={{ width: "100%", height: "100%" }}
    >
      <Geographies
        geography="/features.json"
        fill="#D6D6DA"
        stroke="#000000"
        strokeWidth={0.5}
      >
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography
              key={geo.rsmKey}
              geography={geo}

            />
          ))
        }
      </Geographies>
      <Annotation
        subject={[90.4336, 27.5142]}
        dx={-90}
        dy={-30}
        connectorProps={{
          stroke: "black",
          strokeWidth: 3,
          strokeLinecap: "round",
        }}
      >
        <text x="-8" textAnchor="end" alignmentBaseline="middle" fill="black">
          {"Bhutan"}
        </text>
      </Annotation>

    </ComposableMap>
  );
};

export default MapChart;
