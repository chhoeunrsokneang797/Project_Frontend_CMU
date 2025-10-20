import { Button } from "antd";
import RoomImage1 from "../../assets/roomImg1.png";
import RoomImage2 from "../../assets/roomImg2.png";
import RoomImage3 from "../../assets/roomImg3.png";
import RoomImage4 from "../../assets/roomImg4.png";
import IconUrl from "../../assets/starIconFilled.svg";
import IconLocationUrl from "../../assets/locationFilledIcon.svg";
import ExclusiveOffersSection from "./ExclusiveOffersSection";
import { Link, useNavigate } from "react-router-dom";

// Data for the room cards to avoid repetition
const roomData = [
  {
    image: RoomImage1,
    isBestSeller: true,
    name: "Urbanza Suites",
    rating: "4.5",
    location: "Main Road 123 Street , 23 Colony",
    price: "399",
  },
  {
    image: RoomImage2,
    isBestSeller: false, // Assuming not all are best sellers
    name: "Urbanza Suites",
    rating: "4.5",
    location: "Main Road 123 Street , 23 Colony",
    price: "299",
  },
  {
    image: RoomImage3,
    isBestSeller: true,
    name: "Urbanza Suites",
    rating: "4.5",
    location: "Main Road 123 Street , 23 Colony",
    price: "249",
  },
  {
    image: RoomImage4,
    isBestSeller: false,
    name: "Urbanza Suites",
    rating: "4.5",
    location: "Main Road 123 Street , 23 Colony",
    price: "199",
  },
];

const Booking = () => {
  const navigate  = useNavigate();
  return (
    <section>
      <div className="flex flex-col items-center justify-center mt-6 mx-auto bg-gray-50">
        <h2 className="text-center xl:text-3xl sm:text-2xl font-semibold">
          Featured Destination
        </h2>
        <p className="mt-3 text-center max-w-2xl">
          Discover our handpicked selection of exceptional properties around
          <br />
          the world, offering unparalleled luxury and unforgettable experiences.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto py-8 xl:px-0 px-4">
        {roomData.map((room, index) => (
          <div key={index} className="relative w-full">
            <div className="w-full aspect-video relative rounded-lg overflow-hidden">
              <img
                className="absolute inset-0 w-full h-full object-cover"
                src={room.image}
                alt={room.name}
              />
            </div>
            {room.isBestSeller && (
              <div className="absolute top-3 left-3 z-20">
                <Button
                  type="default"
                  shape="round"
                  className="bg-white hover:bg-gray-100 text-gray-800 text-sm px-3 py-1" // Smaller button for "Best Seller"
                >
                  Best Seller
                </Button>
              </div>
            )}
            <div className="bg-white shadow-lg rounded-b-lg  py-3 z-10 -mt-1 relative">
              <div className="flex justify-between items-center mt-2 px-4">
                <div>
                  <p className="font-semibold text-lg">{room.name}</p>
                </div>
                <div className="flex items-center gap-1">
                  <img
                    className="w-5 h-5"
                    src={IconUrl}
                    alt="Star rating icon"
                    style={{
                      filter:
                        "invert(50%) sepia(90%) saturate(2000%) hue-rotate(350deg) brightness(100%) contrast(100%)",
                    }}
                  />
                  <div>
                    <p className="text-gray-700">{room.rating}</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2 mt-2 text-gray-600 text-sm px-4">
                <img
                  className="w-4 h-4"
                  src={IconLocationUrl}
                  alt="Location icon"
                  style={{ filter: "grayscale(100%) brightness(50%)" }}
                />
                <div>
                  <p>{room.location}</p>
                </div>
              </div>
              <div className="flex justify-between items-center mt-3 px-4">
                <div>
                  <p>
                    <span className="font-bold text-xl">${room.price}</span>{" "}
                    /night
                  </p>
                </div>
                <div>
                  <Button onClick={() => navigate("/order")}
                    type="default"
                    shape="round"
                    className="bg-gray-400 hover:bg-blue-600 text-white"
                  >
                    Book Now
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Button at the bottom, kept as is */}
      <div className="flex justify-center xl:mt-20 mt-10 mb-12">
        <Link to="/room">
          <Button type="default">View All Destinations</Button>
        </Link>
      </div>

      <ExclusiveOffersSection />
    </section>
  );
};

export default Booking;
