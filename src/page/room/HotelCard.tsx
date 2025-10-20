import RoomImage1 from "../../assets/roomImg1.png";
import RoomImage2 from "../../assets/roomImg2.png";
import RoomImage3 from "../../assets/roomImg3.png";
import RoomImage4 from "../../assets/roomImg4.png";

// --- Start of Data Definition ---
const hotelRoomsData = [
  {
    id: 1,
    location: "New York",
    stars: 5,
    reviews: "200+",
    name: "Urbanza Suites",
    address: "Main Road 123 Street, 23 Colony",
    image: RoomImage1, // Using the imported image variable
    amenities: ["Room Service", "Mountain View", "Pool Access"],
    price: 399,
  },
  {
    id: 2,
    location: "Los Angeles",
    stars: 4,
    reviews: "150+",
    name: "Golden Coast Inn",
    address: "Beachfront Ave 456, Ocean City",
    image: RoomImage2, // Using the imported image variable
    amenities: ["Free Wi-Fi", "Beach Access", "Gym"],
    price: 250,
  },
  {
    id: 3,
    location: "Chicago",
    stars: 3,
    reviews: "100+",
    name: "Windy City Lodge",
    address: "Downtown Blvd 789, Metro Area",
    image: RoomImage3, // Using the imported image variable
    amenities: ["Pet Friendly", "Parking", "Breakfast Included"],
    price: 180,
  },
  {
    id: 4,
    location: "Miami",
    stars: 5,
    reviews: "300+",
    name: "Sunny Palms Resort",
    address: "Ocean Drive 101, South Beach",
    image: RoomImage4, // Using the imported image variable
    amenities: ["Spa", "Private Balcony", "Ocean View"],
    price: 550,
  },
];
// --- End of Data Definition ---

const HotelCard = ({ room }: { room: any }) => {
  // Helper to render stars (you could use an icon library for this)
  const renderStars = (numStars: any) => {
    return Array(numStars)
      .fill(null)
      .map((_, i) => (
        <span key={i} className="text-yellow-500">
          &#9733;
        </span>
      ));
  };

  // Helper to get an icon based on amenity (simplified for this example)
  const getAmenityIcon = (amenity: any) => {
    switch (amenity) {
      case "Room Service":
        return (
          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 2a2 2 0 00-2 2v1H5a2 2 0 00-2 2v7a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-3V4a2 2 0 00-2-2zM9 4a1 1 0 011-1h0a1 1 0 011 1v1H9V4zm6 6a1 1 0 11-2 0 1 1 0 012 0zm-7 0a1 1 0 11-2 0 1 1 0 012 0zm-2 4a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path>
          </svg>
        );
      case "Mountain View":
        return (
          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M4 16h12V8H4v8zm-2 0a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2v-2zM4 6a2 2 0 012-2h8a2 2 0 012 2v1H4V6zm-2 0a2 2 0 012-2h12a2 2 0 012 2v1H2V6z"
              clipRule="evenodd"
            ></path>
          </svg>
        );
      case "Pool Access":
        return (
          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2H6zm0 2h8v12H6V4zm2 2a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1zm1 4a1 1 0 00-1 1v2a1 1 0 102 0v-2a1 1 0 00-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
        );
      case "Free Wi-Fi":
        return (
          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
            <path d="M17.293 8.707A1 1 0 0017 8H3a1 1 0 00-.707 1.707l7 7a1 1 0 001.414 0l7-7a1 1 0 000-1.414z"></path>
          </svg>
        ); // Placeholder for Wi-Fi
      case "Beach Access":
        return (
          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
            <path d="M12 2a2 2 0 00-2 2v3H8a2 2 0 00-2 2v7a2 2 0 002 2h4a2 2 0 002-2v-7a2 2 0 00-2-2h-2V4a2 2 0 00-2-2z"></path>
          </svg>
        ); // Placeholder for Beach
      case "Gym":
        return (
          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
            <path d="M14 10H6a2 2 0 00-2 2v4a2 2 0 002 2h8a2 2 0 002-2v-4a2 2 0 00-2-2zm-2-7h-4a2 2 0 00-2 2v1h8V5a2 2 0 00-2-2z"></path>
          </svg>
        ); // Placeholder for Gym
      case "Pet Friendly":
        return (
          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
            <path d="M12 12a2 2 0 100-4 2 2 0 000 4z"></path>
            <path
              fillRule="evenodd"
              d="M1.588 5.433C3.21 2.873 6.337 1 10 1s6.79 1.873 8.412 4.433A.999.999 0 0118.9 6.516L18 7.3a1 1 0 01-.707.293h-1.077c-.524 0-.964.382-1.054.9l-.612 2.45a1 1 0 00.108.893l.38.381A.999.999 0 0115.5 13H17a1 1 0 01.707 1.707l-2 2a1 1 0 01-1.414 0l-2-2a1 1 0 010-1.414l.707-.707a1 1 0 000-1.414L14 9a1 1 0 00-1-1h-2a1 1 0 00-1 1l-.707.707a1 1 0 000 1.414l.707.707a1 1 0 010 1.414l-2 2a1 1 0 01-1.414 0l-2-2a1 1 0 010-1.414l.707-.707a1 1 0 000-1.414L6 9a1 1 0 00-1-1H3.707a1 1 0 01-.707-.293L2.1 6.516a.999.999 0 01-.512-1.083zM10 17a3 3 0 100-6 3 3 0 000 6z"
              clipRule="evenodd"
            ></path>
          </svg>
        ); // Placeholder for Pet Friendly
      case "Parking":
        return (
          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 110-12 6 6 0 010 12zm0-10a1 1 0 00-1 1v4a1 1 0 102 0V7a1 1 0 00-1-1z"></path>
          </svg>
        ); // Placeholder for Parking
      case "Breakfast Included":
        return (
          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V5zm12 1H5v2h10V6zM5 9h10v2H5V9zm0 3h10v2H5v-2z"
              clipRule="evenodd"
            ></path>
          </svg>
        ); // Placeholder for Breakfast
      case "Spa":
        return (
          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
            <path d="M12 10a2 2 0 100-4 2 2 0 000 4z"></path>
            <path
              fillRule="evenodd"
              d="M12 2a8 8 0 100 16 8 8 0 000-16zM10 18a6 6 0 100-12 6 6 0 000 12z"
              clipRule="evenodd"
            ></path>
          </svg>
        ); // Placeholder for Spa
      case "Private Balcony":
        return (
          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M16 12a4 4 0 11-8 0 4 4 0 018 0z"
              clipRule="evenodd"
            ></path>
            <path
              fillRule="evenodd"
              d="M2 10a8 8 0 1116 0A8 8 0 012 10zm8-6a6 6 0 100 12 6 6 0 000-12z"
              clipRule="evenodd"
            ></path>
          </svg>
        ); // Placeholder for Balcony
      case "Ocean View":
        return (
          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M10 2a8 8 0 100 16 8 8 0 000-16zm-4 7a1 1 0 011-1h6a1 1 0 011 1v2a1 1 0 01-1 1h-6a1 1 0 01-1-1V9z"
              clipRule="evenodd"
            ></path>
          </svg>
        ); // Placeholder for Ocean View
      default:
        return null;
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row">
      {/* Image Section */}
      <div className="md:w-2/5">
        <img
          src={room.image}
          alt={room.name}
          className="w-full h-full object-cover"
        />
      </div>
      {/* Content Section */}
      <div className="p-6 md:w-3/5">
        <div className="flex justify-between items-start mb-2">
          <span className="text-sm text-gray-500">{room.location}</span>
          <div className="flex items-center text-yellow-500">
            {renderStars(room.stars)}
            <span className="ml-2 text-gray-700 text-sm">
              {room.reviews} reviews
            </span>
          </div>
        </div>
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">
          {room.name}
        </h2>
        <p className="text-gray-600 mb-4 flex items-center">
          {/* Replace with actual location icon if available */}
          <svg
            className="w-4 h-4 mr-2 text-gray-500"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
              clipRule="evenodd"
            ></path>
          </svg>
          {room.address}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {room.amenities.map((amenity: any, index: any) => (
            <span
              key={index}
              className="flex items-center bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
            >
              {getAmenityIcon(amenity)}
              {amenity}
            </span>
          ))}
        </div>

        <div className="text-xl font-bold text-gray-900">
          ${room.price}
          <span className="text-base font-normal text-gray-500">/night</span>
        </div>
      </div>
    </div>
  );
};

// Export the data as well, so other components can import it
export { hotelRoomsData };
export default HotelCard;
