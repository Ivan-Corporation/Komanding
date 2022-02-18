import React from "react";
import profile from '../../../images/profile.png'
import spaceman from '../../../images/spaceman.png'



export const Koma = (props) => {
  return (
    <svg
      id="svg2"
      preserveAspectRatio="xMidYMin meet"
      viewBox="0 0 1024 580"
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs id="defs12">
        <clipPath id="XMLID_3_-1">
          <path
            id="use53-7"
            d="m171.82 258.25c-26.762-12.893-65.044-38.479-65.044-89.094 0-50.614 2.42-73.633 2.42-73.633h125.25s2.422 23.019 2.422 73.633c-1e-3 50.616-38.286 76.201-65.05 89.094z"
          />
        </clipPath>
        <filter id="filter8883" colorInterpolationFilters="sRGB">
          <feFlood
            id="feFlood8873"
            floodColor="rgb(0,0,0)"
            floodOpacity=".49804"
            result="flood"
          />
          <feComposite
            id="feComposite8875"
            in="flood"
            in2="SourceGraphic"
            operator="in"
            result="composite1"
          />
          <feGaussianBlur
            id="feGaussianBlur8877"
            in="composite1"
            result="blur"
            stdDeviation="3.64742"
          />
          <feOffset
            id="feOffset8879"
            dx="-12.8399"
            dy="-3.47432"
            result="offset"
          />
          <feComposite
            id="feComposite8881"
            in="SourceGraphic"
            in2="offset"
            result="composite2"
          />
        </filter>
      </defs>
      <image
        id="image8017"
        x="83.037"
        y="35.48"
        width="477.35"
        height="259.24"
        filter="url(#filter8883)"
        preserveAspectRatio="none"
        href={spaceman}
      />
      <image
        id="image8017"
        x="393.037"
        y="125.48"
        width="447.35"
        height="447.35"
        filter="url(#filter8883)"
        preserveAspectRatio="none"
        href={profile}
      />



    </svg>
  );
};
