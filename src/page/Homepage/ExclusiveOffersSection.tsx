import { Button } from "antd";
import ArrowIcons from "../../assets/arrowIcon.svg";
import ExclusiveOfferCardImg1 from "../../assets/exclusiveOfferCardImg1.png";
import ExclusiveOfferCardImg2 from "../../assets/exclusiveOfferCardImg2.png";
import ExclusiveOfferCardImg3 from "../../assets/exclusiveOfferCardImg3.png";
import { FaArrowRightLong } from "react-icons/fa6";
import OurGuestsSection from "./OurGuestsSection";
import { Link } from "react-router-dom";
const ExclusiveOffersSection = () => {
  const roomData = [
    {
      image: ExclusiveOfferCardImg1,
      isBestSeller: true,
      title:
        "Summer Escape Package Enjoy a complimentary night and daily breakfast",
      data: "Expires Aug 31",
      description: "View Offers",
    },
    {
      image: ExclusiveOfferCardImg2,
      isBestSeller: true,
      title:
        "Summer Escape Package Enjoy a complimentary night and daily breakfast",
      data: "Expires Aug 31",
      description: "View Offers",
    },
    {
      image: ExclusiveOfferCardImg3,
      isBestSeller: true,
      title:
        "Summer Escape Package Enjoy a complimentary night and daily breakfast",
      data: "Expires Aug 31",
      description: "View Offers",
    },
  ];
  return (
    <div className="mx-auto max-w-7xl xl:px-0 px-4">
      <h2 className="xl:text-4xl text-xl text-gray-700">Exclusive Offers</h2>
      <div className="flex justify-between items-center mt-2">
        <div className="mt-3 text-gray-400">
          Take advantage of our limited-time offers and special packages to
          <br />
          enhance your stay and create unforgettable memories.
        </div>
        <div className="flex items-center gap-2">
          <div className="font-bold text-md">View All Offers</div>
          <div>
            <img
              className="text-black hover:text-gray-200"
              src={ArrowIcons}
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1  lg:grid-cols-2 xl:grid-cols-3 gap-6 max-w-7xl mx-auto py-8 xl:px-0">
        {roomData.map((room, index) => (
          <div key={index} className="relative w-full">
            <div className="w-full aspect-video relative rounded-lg overflow-hidden">
              <img
                className="absolute inset-0 w-full h-full object-cover"
                src={room.image}
                alt={room.image}
              />
            </div>
            {room.isBestSeller && (
              <div className="absolute top-3 left-3 z-20">
                <div className="flex justify-between items-center mt-3 px-4">
                  <Button
                    type="default"
                    shape="round"
                    className="bg-white hover:bg-gray-100 text-gray-800 text-sm px-4 py-1"
                  >
                    Best Seller
                  </Button>
                </div>

                <div className="py-3 z-10 -mt-1 relative">
                  <div className="flex  items-center mt-2 px-4">
                    <div>
                      <p className="font-semibold text-lg text-white">
                        {room.title}
                      </p>
                    </div>
                  </div>
                  <div className="px-4 mt-2">
                    <p className="text-gray-200">{room.data}</p>
                  </div>

                  <Link to="/homepage/room">
                    <div className="flex items-center gap-2 mt-6 px-4">
                      <div className="font-bold text-md text-white">
                        View All Offers
                      </div>
                      <div>
                        <FaArrowRightLong className="text-white" />
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      <OurGuestsSection />
    </div>
  );
};

export default ExclusiveOffersSection;
