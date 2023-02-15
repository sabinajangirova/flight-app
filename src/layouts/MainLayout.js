import React from "react";
import { Link, Outlet } from "react-router-dom";
import AccountDropdown from "../components/AccountDropdown";
import { BellIcon } from "@heroicons/react/outline";

export default function MainLayout(props) {
  return (
    <>
      <nav>
        <div className="header-logo">
          <img src="https://www.edigitalagency.com.au/wp-content/uploads/tripadvisor-logo-png-icon-owl-black-png-transparent-858x551.png" />
          <span className="header-logo-title">TripAdvisor</span>
        </div>
        <div className="header-account">
          <div className="header-account-left border-r-2 border-gray-300">
            <div className="currency">USD</div>
            {/* <span className="currency">
              <img className="map" src="" />
            </span> */}
            <Link to={"#"}>
              <BellIcon
                className="h-6 w-6 text-gray-500 m-1.5"
                aria-hidden="true"
              />
            </Link>
          </div>
          <div className="header-account-right">
            <img className="user-avatar" src="" />
            <AccountDropdown />
          </div>
        </div>
      </nav>

      <Outlet />

      <footer className="absolute bottom-0 inset-x-0 bg-gray-50 dark:bg-gray-900">
        <div className="grid grid-cols-2 gap-8 px-6 py-8 md:grid-cols-4">
          <div>
            <div className="header-logo">
              <img src="https://www.edigitalagency.com.au/wp-content/uploads/tripadvisor-logo-png-icon-owl-black-png-transparent-858x551.png" />
              <span className="header-logo-title">TripAdvisor</span>
            </div>
            <p className="text-sm text-gray-500 mt-2 pr-16">
              This is the team that specializes in making sure in the find it a
              your interior looks cool
            </p>
          </div>
          <div>
            <h2 className="mb-6 text-lg font-semibold text-gray-700 uppercase dark:text-gray-800">
              Services
            </h2>
            <ul className="text-gray-500 dark:text-gray-400">
              <li className="mb-4">
                <a href="#" className=" hover:underline">
                  Travel Booking
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Flight Booking
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Car Booking
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Fivestar Hotel
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Traveling
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-lg font-semibold text-gray-700 uppercase dark:text-gray-800">
              Support
            </h2>
            <ul className="text-gray-500 dark:text-gray-400">
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Account
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Legal
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Contact
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Terms & Conditions
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-lg font-semibold text-gray-700 uppercase dark:text-gray-800">
              Business
            </h2>
            <ul className="text-gray-500 dark:text-gray-400">
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Success
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  About Locato
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Blog
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Information
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Travel Guide
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}
