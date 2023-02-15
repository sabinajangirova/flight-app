import React from "react";
import DestinationCard from "../components/DestinationCard";
import PictureCard from "../components/PictureCard";
import SearchForm from "../components/SearchForm";

export default function HomePage(props) {
  const destinations = [
    {
      name: "Batu, East Java",
      destNumber: 86,
      image:
        "https://upload.wikimedia.org/wikipedia/commons/2/2c/Batu_city_and_Mount_Panderman-Kawi-Butak_from_Brakseng_2019-01-12.jpg",
    },
    {
      name: "Kuta",
      destNumber: 86,
      image:
        "https://www.whereandwhen.net/site/images/illustration/oualler/bali-kuta_986.jpg",
    },
    {
      name: "Surabaya, East Java",
      destNumber: 86,
      image: "https://live.staticflickr.com/8780/28327864142_61913f988e_b.jpg",
    },
    {
      name: "Malang, East Java",
      destNumber: 186,
      image:
        "https://static.saltinourhair.com/wp-content/uploads/2018/09/23151056/things-to-do-malang-java-header.jpg",
    },
    {
      name: "Dieng, Central Java",
      destNumber: 86,
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Telaga_Warna_Dieng_Plateau_%287493145002%29.jpg/220px-Telaga_Warna_Dieng_Plateau_%287493145002%29.jpg",
    },
    {
      name: "Nusa Dua, Lombok",
      destNumber: 86,
      image:
        "https://www.indonesia.travel/content/dam/indtravelrevamp/en/destinations/bali-nusa-tenggara/bali/nusa-dua/thumb-nusa-dua.jpg",
    },
    {
      name: "Bandung, West Java",
      destNumber: 86,
      image:
        "https://media.licdn.com/dms/image/C5612AQEauiVrAV_91A/article-cover_image-shrink_720_1280/0/1645753864105?e=2147483647&v=beta&t=iL6KnCqaQqeHM12feXpm-Vv2XE1KBvQsC4mFTGGH2Eg",
    },
    {
      name: "Wakatobi, Sumatera",
      destNumber: 186,
      image:
        "http://indonesia-tourism.com/blog/wp-content/uploads/2010/11/10.jpg",
    },
  ];

  const featuredDestinations = [
    {
      name: "Barcelona Tour",
      rating: 3.5,
      activityNumber: 196,
      image:
        "https://media.cntraveler.com/photos/5a985924d41cc84048ce6db0/master/w_4348,h_3261,c_limit/Catedral-de-Barcelona-GettyImages-511874340.jpg",
    },
    {
      name: "Australia Tour",
      rating: 3.5,
      activityNumber: 196,
      image:
        "https://www.state.gov/wp-content/uploads/2022/02/shutterstock_1025960785-2560x1300.jpg",
    },
    {
      name: "London, United State",
      rating: 3.5,
      activityNumber: 196,
      image:
        "https://cdn.londonandpartners.com/-/media/images/london/visit/campaigns/international-recovery-campaign/lets-do-london-related-international-640.jpeg?mw=640&hash=477E6FF9F31F292EE017E5BA63027C7054EB39A0",
    },
    {
      name: "Australia Tour",
      rating: 3.5,
      activityNumber: 196,
      image:
        "https://kiwieducation.com/au/wp-content/uploads/sites/3/2021/05/1why-australia-1051x445.jpeg",
    },
    {
      name: "Japan Tour",
      rating: 3.5,
      activityNumber: 196,
      image:
        "https://afar.brightspotcdn.com/dims4/default/1e3e731/2147483647/strip/false/crop/1440x720+0+0/resize/1440x720!/quality/90/?url=https%3A%2F%2Fafar-media-production-web.s3.amazonaws.com%2Fbrightspot%2Fcf%2F8a%2F20b4a2c544a58be93512ad67084c%2Fbohler-japankk-4006.jpg",
    },
    {
      name: "Japan Tour",
      rating: 3.5,
      activityNumber: 196,
      image: "https://s30876.pcdn.co/wp-content/uploads/Japan.jpg.optimal.jpg",
    },
  ];
  return (
    <div className="main-home">
      <div className="banner bg-[url('https://globetrender.com/wp-content/uploads/2021/08/SEIMAGE3.png')]">
        <h1 className="w-1/2 text-6xl font-extrabold text-white mb-6">
          Amazing Flight to Switzerland
        </h1>
        <h4 className="w-1/2 text-3xl font-bold text-white">
          Find and book a great experience
        </h4>
      </div>
      <SearchForm />
      <div className="p-14 text-center">
        <h3 className="text-gray-700 text-4xl font-extrabold">
          Search a best place in the world
        </h3>
        <p className="text-gray-500 w-1/2 mx-auto mt-4">
          Whether you are looking for places for a vacation. We are here to
          Guide you about the details you need to check in and ease your trips
          in advance
        </p>
        <div className="grid grid-cols-4 gap-12 mb-4 px-24 py-8">
          {destinations.map((destination, index) => {
            return <DestinationCard key={index} destination={destination} />;
          })}
        </div>
      </div>
      <div className="text-start px-32">
        <h4 className="text-3xl font-bold text-gray-700 mb-2">
          Featured Destination
        </h4>
        <p className="text-md text-gray-500">
          Popular destinations for visitors from Indonesia
        </p>
        <div className="flex">
          <div className="w-3/4 grid grid-rows-6 grid-flow-col gap-4">
            <div className="row-span-2 col-span-3">
              <PictureCard destination={featuredDestinations[0]} />
            </div>
            <div className="row-span-4">
              <PictureCard destination={featuredDestinations[1]} />
            </div>
            <div className="row-span-4">
              <PictureCard destination={featuredDestinations[2]} />
            </div>
          </div>
          <div className="w-1/4"></div>
        </div>
      </div>
      <div>Trending cities</div>
      <div>Explore</div>
    </div>
  );
}
