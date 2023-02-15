import React from "react";
import { Link } from "react-router-dom";

export default function DestinationCard(props) {
  return (
    <Link to="#">
      <div className="flex text-start">
        <div className="block p-6 rounded-lg border border-gray-200 hover:border-none hover:shadow-lg bg-white max-w-sm  w-full">
          <img
            src={props.destination.image}
            className="w-16 h-14 rounded mb-2"
          />
          <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2">
            {props.destination.name}
          </h5>
          <p className="text-gray-700 text-base mb-4">
            {props.destination.destNumber} Destinations
          </p>
        </div>
      </div>
    </Link>
  );
}
