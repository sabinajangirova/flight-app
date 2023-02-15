import React from "react";

export default function PictureCard(props) {
  return (
    <div
      style={{
        backgroundImage: `url("${props.destination.image}")`,
      }}
      className="w-full h-full rounded-lg text-white"
    >
      <h4 className="text-2xl font-semibold">{props.destination.name}</h4>
      <div className="text-md">
        {props.destination.activityNumber} Activities
      </div>
    </div>
  );
}
