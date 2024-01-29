import React, { useRef, useState } from "react";
import Loader from "../../components/Loader";
import { FaLocationDot } from "react-icons/fa6";
import { info_toaster } from "../../utilities/Toaster";
import { useJsApiLoader, Autocomplete } from "@react-google-maps/api";

export default function Home() {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "Your google maps API key here",
    libraries: ["places"],
  });
  const autocompleteRef = useRef(null);
  const [coordinates, setCoordinates] = useState({
    lat: "",
    lng: "",
  });
  const calculateRoute = () => {
    if (!autocompleteRef.current) {
      return;
    }
    const place = autocompleteRef.current.getPlace();
    if (!place || !place.geometry || !place.geometry.location) {
      info_toaster("Please select an Address");
      return;
    }
    const latLng = {
      lat: place.geometry.location.lat(),
      lng: place.geometry.location.lng(),
    };
    setCoordinates({ ...coordinates, lat: latLng.lat, lng: latLng.lng });
  };
  if (!isLoaded) {
    return <Loader />;
  }
  return (
    <section className="min-h-screen bg-gray-800 flex flex-col justify-center items-center gap-y-12 relative">
      <button
        onClick={() =>
          setCoordinates({
            lat: "",
            lng: "",
          })
        }
        className="font-medium text-lg underline text-white absolute top-5 right-5"
      >
        Reset
      </button>
      <h1 className="text-center text-white font-bold sm:text-4xl text-3xl">
        Google Autocomplete
      </h1>
      <div className="flex sm:flex-row flex-col items-center gap-2">
        <div className="relative">
          <div className="absolute top-1/2 left-3 -translate-y-[50%]">
            <FaLocationDot className="text-theme-green-2" />
          </div>
          <Autocomplete
            onLoad={(autocomplete) => (autocompleteRef.current = autocomplete)}
          >
            <input
              type="text"
              className="py-2 px-10 rounded w-[320px] font-normal text-base placeholder:text-black placeholder:text-opacity-40 focus:outline-none"
              placeholder="Choose a delivery address"
            />
          </Autocomplete>
        </div>
        <button
          className="py-2 px-5 bg-[#E13743] text-white rounded sm:w-auto w-full"
          onClick={calculateRoute}
        >
          Search
        </button>
      </div>
      <div className="text-white flex flex-col justify-center items-center gap-x-32">
        <h4 className="font-medium text-xl min-w-[100px]">
          Lat: {coordinates.lat}
        </h4>
        <h4 className="font-medium text-xl min-w-[100px]">
          Lng: {coordinates.lng}
        </h4>
      </div>
    </section>
  );
}
