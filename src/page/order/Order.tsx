import { useState, useRef, useEffect } from "react";
import { CiStar } from "react-icons/ci";
import RoomImage1 from "../../assets/roomImg1.png";
import RoomImage2 from "../../assets/roomImg2.png";
import RoomImage3 from "../../assets/roomImg3.png";
import RoomImage4 from "../../assets/roomImg4.png";
import { FaChevronLeft, FaChevronRight, FaStar } from "react-icons/fa";
import IconLocationUrl from "../../assets/locationFilledIcon.svg";
import ReactImageMagnify from "react-image-magnify";

// Placeholder data for the images.
const images = [RoomImage1, RoomImage2, RoomImage3, RoomImage4];

const Order = () => {
  const [currentImage, setCurrentImage] = useState(images[0]);
  const thumbnailsContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  // This function is now correctly defined within the component's scope.
  const checkScrollability = () => {
    if (thumbnailsContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = thumbnailsContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 1);
    }
  };

  useEffect(() => {
    checkScrollability();
    window.addEventListener("resize", checkScrollability);

    const observer = new ResizeObserver(checkScrollability);
    if (thumbnailsContainerRef.current) {
      observer.observe(thumbnailsContainerRef.current);
    }

    return () => {
      window.removeEventListener("resize", checkScrollability);
      observer.disconnect();
    };
  }, []);

  const scrollThumbnails = (direction: "left" | "right") => {
    if (thumbnailsContainerRef.current) {
      // Use clientWidth for a responsive scroll amount.
      const scrollAmount = thumbnailsContainerRef.current.clientWidth;
      const currentScroll = thumbnailsContainerRef.current.scrollLeft;

      const newScrollPosition =
        direction === "left" ? currentScroll - scrollAmount : currentScroll + scrollAmount;

      thumbnailsContainerRef.current.scrollTo({
        left: newScrollPosition,
        behavior: "smooth",
      });

      setTimeout(checkScrollability, 300);
    }
  };
  
  // These functions handle the navigation for the large image
  const goToNextImage = () => {
    const currentIndex = images.indexOf(currentImage);
    const nextIndex = (currentIndex + 1) % images.length;
    setCurrentImage(images[nextIndex]);
  };

  const goToPreviousImage = () => {
    const currentIndex = images.indexOf(currentImage);
    const previousIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentImage(images[previousIndex]);
  };

  return (
    <div className="max-w-7xl mx-auto px-3 xl:px-0 mt-3 xl:mt-12 md:mt-6">
      {/* Product/Suite Details Section */}
      <div className="flex md:flex-row flex-col items-center">
        <h2 className="text-xl xl:text-2xl">
          Urbanza Suites <span className="text-sm">(Double Bed)</span>
          <div className="py-1">
            <button
              type="button"
              className="text-gray-900 bg-[#F7BE38] hover:bg-[#F7BE38]/90 focus:ring-4 focus:outline-none focus:ring-[#F7BE38]/50 font-medium rounded-lg text-sm px-5 py-1 text-center inline-flex items-center dark:focus:ring-[#F7BE38]/50 me-2 mb-2"
            >
              20% OFF
            </button>
          </div>
          <div className="flex md:flex-row flex-col items-center py-1">
            <div className="flex">
              <FaStar className="text-amber-700 text-xl" />
              <FaStar className="text-amber-700 text-xl" />
              <FaStar className="text-amber-700 text-xl" />
              <FaStar className="text-amber-700 text-xl" />
              <FaStar className="text-amber-700 text-xl" />
              <CiStar className="text-amber-700 text-xl" />
              <span className="text-lg">200+ reviews</span>
            </div>
          </div>
          <div className="flex items-center gap-2 text-gray-600 text-sm">
            <img
              className="w-4 h-4"
              src={IconLocationUrl}
              alt="Location icon"
              style={{ filter: "grayscale(100%) brightness(50%)" }}
            />
            <div>
              <p>Main Road 123 Street , 23 Colony</p>
            </div>
          </div>
        </h2>
      </div>

      {/* Image Gallery and Thumbnails Section */}
      <div className="p-3">
        {/* Main image section with responsive arrows */}
        {/* The `relative` class is key here to position the arrows on top. */}
        <div className="w-full max-w-3xs sm:max-w-2xs md:max-w-xs mx-auto relative">
          <div className="md:hidden">
            <img
              src={currentImage}
              alt=""
              className="w-full aspect-square object-fill"
            />
          </div>
          <div className="md:block hidden">
            <ReactImageMagnify
              {...{
                smallImage: {
                  alt: "Product Image",
                  isFluidWidth: true,
                  src: currentImage,
                },
                largeImage: {
                  src: currentImage,
                  width: 960,
                  height: 1200,
                },
                enlargedImageContainerStyle: { zIndex: 9 },
                enlargedImageContainerDimensions: {
                  width: "300%",
                  height: "100%",
                },
                enlargedImageContainerClassName: "max-w-xl lg:max-w-3xl xl:max-w-4xl",
                imageClassName: "aspect-7/8 object-fill",
              }}
            />
          </div>

          {/* Left arrow on the main image */}
          {/* The `absolute`, `top-1/2`, and `transform` classes center the button. */}
          <button
            className="absolute left-3 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-white/70 text-gray-800 hover:bg-white transition-colors z-10"
            onClick={goToPreviousImage}
          >
            <FaChevronLeft size={20} />
          </button>
          
          {/* Right arrow on the main image */}
          <button
            className="absolute right-3 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-white/70 text-gray-800 hover:bg-white transition-colors z-10"
            onClick={goToNextImage}
          >
            <FaChevronRight size={20} />
          </button>
        </div>

        {/* Thumbnails section (unchanged) */}
        <div className="w-full h-24 px-3 flex items-center gap-3">
          {/* Left scroll button for thumbnails */}
          <button
            className={`h-full transition-colors ${
              canScrollLeft
                ? "text-black/30 hover:text-black/70 cursor-pointer"
                : "text-black/10 cursor-not-allowed"
            }`}
            title="Previous Images"
            onClick={() => canScrollLeft && scrollThumbnails("left")}
            disabled={!canScrollLeft}
          >
            <FaChevronLeft size={26} />
          </button>

          {/* Thumbnails container with a ref */}
          <div
            ref={thumbnailsContainerRef}
            className="flex-1 flex items-center gap-3 overflow-x-hidden scroll-smooth"
            onScroll={checkScrollability}
          >
            {images.map((image, index) => (
              <button
                key={index}
                className={`min-w-20 max-w-20 aspect-square rounded-md overflow-hidden flex-shrink-0 ${
                  currentImage === image ? "border border-primary" : ""
                }`}
                onClick={() => setCurrentImage(image)}
                onMouseOver={() => setCurrentImage(image)}
              >
                <img src={image} alt="" className="w-full" />
              </button>
            ))}
          </div>

          {/* Right scroll button for thumbnails */}
          <button
            className={`h-full transition-colors ${
              canScrollRight
                ? "text-black/30 hover:text-black/70 cursor-pointer"
                : "text-black/10 cursor-not-allowed"
            }`}
            title="Next Images"
            onClick={() => canScrollRight && scrollThumbnails("right")}
            disabled={!canScrollRight}
          >
            <FaChevronRight size={26} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Order;