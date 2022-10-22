import React, { useState } from "react";
import { markerStyles } from "./MarkerStyles";
import Tooltip from "./Tooltip";

const Marker = (props) => {
  const [tooltipStatus, setTooltipStatus] = useState(0);
  return (
    <div>
      {/* <div
        style={{
          ...markerStyles,
          ...(props.status === "Normal"
            ? { backgroundColor: "Green" }
            : props.status === "MDG_on"
            ? { backgroundColor: "Red" }
            : props.status === "BDG_on"
            ? { backgroundColor: "Blue" }
            : { backgroundColor: "Black" }),
        }}
      ></div> */}
      <div
        className="relative mt-20 md:mt-0"
        onMouseEnter={() => setTooltipStatus(1)}
        onMouseLeave={() => setTooltipStatus(0)}
      >
        <div
          className="cursor-pointer"
          style={{
            ...markerStyles,
            ...(props.status === "Normal - EB"
              ? { backgroundColor: "Green" }
              : props.status === "Normal - BDG"
              ? { backgroundColor: "Purple" }
              : props.status === "MDG On"
              ? { backgroundColor: "Blue" }
              : props.status === "BDG On"
              ? { backgroundColor: "#f0f" } //Pink
              : props.status === "Power Down"
              ? { backgroundColor: "Orange" }
              : { backgroundColor: "Red" }),
          }}
        >
          <svg
            aria-haspopup="true"
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-info-circle"
            width={25}
            height={25}
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#A0AEC0"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {/* <path stroke="none" d="M0 0h24v24H0z" />
            <circle cx={12} cy={12} r={9} />
            <line x1={12} y1={8} x2="12.01" y2={8} />
            <polyline points="11 12 12 12 12 16 13 16" /> */}
          </svg>
        </div>
        {tooltipStatus === 1 ? (
          <Tooltip {...props} />
        ) : (
          " "
        )}
      </div>
    </div>
  );
};

export default Marker;
