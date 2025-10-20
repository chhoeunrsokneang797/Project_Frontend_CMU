import HotelCard, { hotelRoomsData } from "./HotelCard";
const Room = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 xl:px-0 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-semibold text-gray-800 mb-2">
          Hotel Rooms
        </h1>
        <p className="text-gray-600 max-w-2xl">
          Take advantage of our limited-time offers and special packages to
          enhance your stay and create unforgettable memories.
        </p>
      </div>

      {/* Main Content Area: Hotel Listings + Filters */}
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Hotel Listings (Main Content) - This is where the grid will be applied */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-6">
          {hotelRoomsData.map((room) => (
            <HotelCard key={room.id} room={room} />
          ))}
        </div>

        {/* Filters Sidebar (from your previous code) */}
        <div className="w-full lg:w-72 bg-white rounded-lg shadow-md p-6 h-fit">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-semibold text-gray-800">FILTERS</h3>
            <button className="text-sm text-blue-600 hover:text-blue-800 font-medium">
              CLEAR
            </button>
          </div>

          {/* Popular Filters */}
          <div className="mb-6">
            <h4 className="text-base font-medium text-gray-700 mb-3">
              Popular filters
            </h4>
            <div className="space-y-2">
              <label className="flex items-center text-gray-700">
                <input
                  type="checkbox"
                  className="form-checkbox text-blue-600 rounded mr-2"
                />
                Single Bed
              </label>
              <label className="flex items-center text-gray-700">
                <input
                  type="checkbox"
                  className="form-checkbox text-blue-600 rounded mr-2"
                />
                Double Bed
              </label>
              <label className="flex items-center text-gray-700">
                <input
                  type="checkbox"
                  className="form-checkbox text-blue-600 rounded mr-2"
                />
                Luxury Room
              </label>
              <label className="flex items-center text-gray-700">
                <input
                  type="checkbox"
                  className="form-checkbox text-blue-600 rounded mr-2"
                />
                Family Suite
              </label>
            </div>
          </div>

          {/* Price Range */}
          <div>
            <h4 className="text-base font-medium text-gray-700 mb-3">
              Price Range
            </h4>
            <div className="space-y-2">
              <label className="flex items-center text-gray-700">
                <input
                  type="checkbox"
                  className="form-checkbox text-blue-600 rounded mr-2"
                />
                $ 0 to 500
              </label>
              <label className="flex items-center text-gray-700">
                <input
                  type="checkbox"
                  className="form-checkbox text-blue-600 rounded mr-2"
                />
                $ 500 to 1000
              </label>
              <label className="flex items-center text-gray-700">
                <input
                  type="checkbox"
                  className="form-checkbox text-blue-600 rounded mr-2"
                />
                $ 1000 to 2000
              </label>
              <label className="flex items-center text-gray-700">
                <input
                  type="checkbox"
                  className="form-checkbox text-blue-600 rounded mr-2"
                />
                $ 2000 to 3000
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Room;
