import { Link } from "react-router";

export default function NavigationLink() {
  return (
    <nav className="max-w-7xl mx-auto p-3 xl:px-0 flex gap-1 z-50">
      <ul className="gap-3 md:hidden  w-full flex items-center xl:gap-3">
        <li>
          <button className="md:hidden block">
            {/* <IoMenuSharp className="text-lg lg:text-2xl" /> */}
          </button>
        </li>
        <li className="text-base lg:text-lg cursor-pointer hover:text-primary uppercase">
          hello
        </li>
      </ul>

      <div className="hidden md:flex w-full items-center overflow-x-auto">
        <ul className="flex-1 gap-2 flex xl:gap-3 mt-2">
          <li className="text-base lg:text-lg cursor-pointer text-nowrap hover:text-primary uppercase">
            {/* <DropdownCategory /> */}
          </li>
          <li>About</li>
        </ul>
        <Link to="https://solar.ametava.com" target="_blank">
          {/* <img src={LogoEnergy} alt="" className="w-20 object-fill" /> */}
        </Link>
      </div>
      <div className="">
        <div className="fixed top-0 left-0 min-w-60 max-w-5/11 lg:min-w-80 flex flex-col justify-between  min-h-dvh z-10 bg-white p-3">
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <div className="w-36 aspect-[7/2]">
                {/* <img src={Logo} alt="" className="object-fill w-full h-full" /> */}
              </div>
              <button>
                {/* <AiOutlineClose className="text-lg lg:text-3xl" /> */}
              </button>
            </div>
            <ul className="gap-2 flex flex-col font-semibold">
              <li>Home</li>
            </ul>
          </div>

          <Link to="https://solar.ametava.com" target="_blank">
            {/* <img src={LogoEnergy} alt="" className="w-20 object-fill" /> */}
          </Link>
        </div>
      </div>
    </nav>
  );
}
