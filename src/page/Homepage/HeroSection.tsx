import { Button } from "antd";
import HeroImage from "../../assets/heroImage.png";
import { IoSearchCircleOutline } from "react-icons/io5";
import { useState } from "react";
import Booking from "./Booking";

const CalendarIcon = () => (
  <img
    alt=""
    className="h-4"
    src="data:image/svg+xml,%3csvg%20width='14'%20height='14'%20viewBox='0%200%2014%2014'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M1%205.66667H13M3.66667%201V2.33333M10.3333%201V2.33333M3.13333%2013H10.8667C11.6134%2013%2011.9868%2013%2012.272%2012.8547C12.5229%2012.7269%2012.7269%2012.5229%2012.8547%2012.272C13%2011.9868%2013%2011.6134%2013%2010.8667V4.46667C13%203.71993%2013%203.34656%2012.8547%203.06135C12.7269%202.81046%2012.5229%202.60649%2012.272%202.47866C11.9868%202.33333%2011.6134%202.33333%2010.8667%202.33333H3.13333C2.3866%202.33333%202.01323%202.33333%201.72801%202.47866C1.47713%202.60649%201.27315%202.81046%201.14533%203.06135C1%203.34656%201%203.71993%201%204.46667V10.8667C1%2011.6134%201%2011.9868%201.14533%2012.272C1.27315%2012.5229%201.47713%2012.7269%201.72801%2012.8547C2.01323%2013%202.38659%2013%203.13333%2013Z'%20stroke='%236a7282%20'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e"
  />
);

const searchIcon = () => (
  <img
    alt="searchIcon"
    className="h-7"
    src="data:image/svg+xml,%3csvg%20width='26'%20height='26'%20viewBox='0%200%2026%2026'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M16.114%2016.1133L20.0001%2019.9999'%20stroke='white'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M14.531%2017.183C17.0779%2016.1006%2018.265%2013.1585%2017.1827%2010.6117C16.1003%208.06491%2013.1582%206.87774%2010.6114%207.96011C8.06461%209.04249%206.87744%2011.9845%207.95981%2014.5313C9.04218%2017.0782%2011.9842%2018.2653%2014.531%2017.183Z'%20stroke='white'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e"
  />
);
const HeroSection = () => {
  const [destination, setDestination] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState(0);

  const destinations = ["Dubai", "Singapore", "New York", "London"];
  const handleSubmit = (e: any) => {
    e.preventDefault(); // Prevent default form submission behavior
    console.log({
      destination,
      checkIn,
      checkOut,
      guests,
    });
    // Here you would typically send this data to an API or perform a search
    alert("Form submitted! Check console for data.");
  };
  return (
    <section>
      <div className="relative w-full h-screen">
        <img
          src={HeroImage}
          alt="Hero Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Add content here, e.g., text, buttons */}
        <div className="absolute inset-0 mx-auto max-w-7xl z-10 xl:top-30 sm:top-30 text-white xl:px-0 px-4">
          <div>
            <Button
              type="primary"
              shape="round"
              className="bg-[#49B9FF]/50  py-1 rounded-full mt-20"
            >
              The Ultimate Hotel Experience
            </Button>

            <h5 className="lg:text-5xl sm:text-4xl font-bold mt-3">
              Discover Your Perfect
              <br /> Gateway Destination
            </h5>
            <p className="mt-3">
              Unparalleled luxury and comfort await at the world's most
              exclusive
              <br />
              hotels and resorts. Start your journey today.
            </p>
          </div>
          <form
            className="bg-white text-gray-500 rounded-lg px-6 py-4 mt-8 flex flex-col md:flex-row max-md:items-start max-w-3xl  gap-4 max-md:mx-auto"
            onSubmit={handleSubmit}
          >
            {/* Destination Input */}
            <div>
              <div className="flex items-center gap-2">
                <CalendarIcon /> {/* Replaced long SVG with a component */}
                <label htmlFor="destinationInput">Destination</label>
              </div>
              <input
                list="destinations"
                id="destinationInput"
                className="rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none"
                placeholder="Type here"
                required
                type="text"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
              />
              <datalist id="destinations">
                {destinations.map((dest) => (
                  <option key={dest} value={dest} />
                ))}
              </datalist>
            </div>

            {/* Check-in Input */}
            <div>
              <div className="flex items-center gap-2">
                <CalendarIcon /> {/* Replaced long SVG with a component */}
                <label htmlFor="checkIn">Check in</label>
              </div>
              <input
                id="checkIn"
                className="rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none"
                type="date"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
              />
            </div>

            {/* Check-out Input */}
            <div>
              <div className="flex items-center gap-2">
                <CalendarIcon /> {/* Replaced long SVG with a component */}
                <label htmlFor="checkOut">Check out</label>
              </div>
              <input
                id="checkOut"
                className="rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none"
                type="date"
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
              />
            </div>

            {/* Guests Input */}
            <div className="flex md:flex-col max-md:gap-2 max-md:items-center">
              <label htmlFor="guests">Guests</label>
              <input
                min="1"
                max="10" // Changed max to 10 for more reasonable guest count
                id="guests"
                className="rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none max-w-16"
                placeholder="0"
                type="number"
                value={guests}
                onChange={(e) => setGuests(parseInt(e.target.value) || 0)} // Parse to integer
              />
            </div>

            {/* Search Button */}
            <button
              type="submit" // Important for form submission
              className="flex items-center justify-center gap-1 rounded-md bg-black py-3 px-4 text-white my-auto cursor-pointer max-md:w-full max-md:py-1"
            >
              <IoSearchCircleOutline />
              <span>Search</span>
            </button>
          </form>
        </div>
      </div>

      <Booking />
    </section>
  );
};

export default HeroSection;
