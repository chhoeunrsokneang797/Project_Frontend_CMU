import RoomImage1 from "../../assets/boy.png";
import RoomImage2 from "../../assets/girl-1.png";
import RoomImage3 from "../../assets/boys.jpg";
import { FaStar } from "react-icons/fa6";
import { CiStar } from "react-icons/ci";
import { IoMailOutline} from "react-icons/io5";
const OurGuestsSection = () => {
  // Data for the room cards to avoid repetition
  const roomData = [
    {
      image: RoomImage1,
      isBestSeller: true,
      name: "Emma Rodriguez",
      rating: "4.5",
      title:
        "I've used many booking platforms before, but none compare to the personalized experience and attention to detail that QuickStay provides. Their curated selection of hotels is unmatched.",
      price: "399",
    },
    {
      image: RoomImage2,
      isBestSeller: false,
      name: "Liam Johnson",
      title:
        "I've used many booking platforms before, but none compare to the personalized experience and attention to detail that QuickStay provides. Their curated selection of hotels is unmatched.",
      price: "299",
    },
    {
      image: RoomImage3,
      isBestSeller: true,
      name: "Sophia Lee",
      title:
        "I've used many booking platforms before, but none compare to the personalized experience and attention to detail that QuickStay provides. Their curated selection of hotels is unmatched.",
    },
  ];
  return (
    <div className="xl:mt-10 mt-0">
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-xl xl:text-3xl">What Our Guests Say</h2>
        <br />
        <div className="text-sm text-gray-600">
          <p>
            Discover why discerning travelers consistently choose QuickStay for
            <br />
            their exclusive and luxurious accommodations around the world.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 max-w-7xl mx-auto py-8 xl:px-0">
        {roomData.map((room, index) => (
          <div key={index} className="relative w-full">
            <div className="bg-white shadow-lg rounded-b-lg border border-gray-100 py-3 z-10 -mt-1 relative">
              <div className="flex items-center gap-3 mt-2 px-4">
                <img
                  className="w-10 h-10 rounded-full"
                  src={room.image}
                  alt="Location icon"
                />
                <div className="font-semibold text-lg">
                  <p>{room.name}</p>
                </div>
              </div>
              <div className="px-4 mt-3 flex">
                <FaStar className="text-amber-700 text-xl" />
                <FaStar className="text-amber-700 text-xl" />
                <FaStar className="text-amber-700 text-xl" />
                <FaStar className="text-amber-700 text-xl" />
                <FaStar className="text-amber-700 text-xl" />
                <CiStar className="text-amber-700 text-xl" />
              </div>
              <div className="flex items-center gap-2 mt-2 text-gray-600 text-sm px-4">
                <div>
                  <p>{room.title}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="xl:px-4 px-0 mx-auto max-w-6xl xl:py-12 md:py-6 py-3">
        <div className="h-96 bg-gray-800 rounded flex justify-center items-center">
          <div className="flex flex-col justify-center items-center gap-3 text-center px-4">
            <h2 className="text-xl xl:text-3xl text-white">Stay Inspired</h2>
            <p className="text-gray-300">
              Join our newsletter and be the first to discover new
              <br />
              destinations, exclusive offers, and travel inspiration.
            </p>
            <form className="flex flex-wrap justify-center items-center gap-3 mt-3">
              <input
                type="email"
                placeholder="Enter Your Email"
                className="w-52 h-10 px-3 py-2 rounded border border-gray-500 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="flex items-center justify-center gap-1 rounded-md bg-black py-2 px-4 text-white cursor-pointer"
              >
                <IoMailOutline />
                <span>Subscribe</span>
              </button>
            </form>
            <p className="text-xs text-gray-400 max-w-xs mt-2">
              By subscribing, you agree to our Privacy Policy and consent to
              receive updates.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurGuestsSection;
