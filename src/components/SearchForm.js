import React from "react";
import { useState } from "react";
import { PaperAirplaneIcon } from "@heroicons/react/outline";
import PassengerDropdown from "../components/PassengerDropdown";
export default function SearchForm(props) {
  const [searchMode, setSearchMode] = useState("hotel");
  return (
    <>
      <div className="rounded-md bg-white mx-16 p-8 -mt-6 shadow-lg flex flex-col gap-4">
        <div className="border-b-2 border-gray-100 flex justify-between">
          <div className="flex w-1/2 flex-start text-gray-500">
            <a
              className={
                searchMode === "hotel" ? "text-gray-700 font-bold" : ""
              }
              onClick={() => {
                setSearchMode("hotel");
              }}
            >
              Hotel
            </a>
            <a
              className={
                searchMode === "flight"
                  ? "text-gray-700 font-bold flex"
                  : "flex"
              }
              onClick={() => {
                setSearchMode("flight");
              }}
            >
              <PaperAirplaneIcon className="w-4 h-4" />
              Flight
            </a>
            <a
              className={searchMode === "car" ? "text-gray-700 font-bold" : ""}
              onClick={() => {
                setSearchMode("car");
              }}
            >
              Car rental
            </a>
          </div>
          <div className="flex w-1/2 flex-end">
            <div>Round trip</div>
            <PassengerDropdown />
          </div>
        </div>
        <div>row2</div>
      </div>
    </>
  );
}
