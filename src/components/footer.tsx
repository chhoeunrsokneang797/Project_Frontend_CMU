// import Logo from "../assets/images/logo/logo-amtava.jpg";
import { Input } from "antd";
import { FaEnvelope, FaFacebook, FaPhone, FaTelegram } from "react-icons/fa";
import { Link, useNavigate } from "react-router";
import Logo from "../assets/logo.svg";

export default function Footer() {
  const year = new Date().getFullYear();
  const Navigation = useNavigate();
  return (
    <footer className="bg-white max-w-7xl mx-auto w-full p-3 xl:px-0 text-gray-600">
      <div className="flex flex-col sm:flex-row justify-between gap-3">
        <div className="flex flex-1 items-center gap-3">
          <FaEnvelope className="text-primary text-4xl" />
          <div>
            <h4 className="text-lg lg:text-2xl">Newsletter</h4>
            <p className="text-wrap">
              Get 10% off your first purchase when you sign up for our
              newsletter!
            </p>
          </div>
        </div>
      </div>
      <hr className="my-3 text-gray-400" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
        <div className="space-y-1">
          <h4 className="my-2">Contact Us</h4>
          <div className="flex gap-2">
            <div
              className="order-1 w-36 sm:w-44 aspect-[7/2] cursor-pointer"
              onClick={() => Navigation("/")} // Navigate to home on logo click
            >
              <img
                className="object-fill w-full h-full text-black"
                src={Logo}
                alt="Logo"
              />
            </div>
          </div>
          <div className="flex gap-2">
            <FaEnvelope className="mt-1" />
            <p className="flex-1">info@Example.com</p>
          </div>
          <div className="flex gap-2">
            <FaPhone className="mt-1" />
            <p className="flex-1">096897548</p>
          </div>
          <div className="flex gap-2">
            <FaFacebook className="text-3xl text-blue-500" />
            <FaTelegram className="text-3xl text-cyan-600" />
          </div>
        </div>
        <div>
          <h4 className="my-2">COMPANY</h4>
          <ul className="space-y-1">
            <li>
              <Link to="/customer-care/help-center">About</Link>
            </li>
            <li>
              <Link to="/customer-care/help-center">Careers</Link>
            </li>
            <li>
              <Link to="/customer-care/category/31">Press</Link>
            </li>
            <li>
              <Link to="/inteallectual-product-policy">Blog</Link>
            </li>
            <li>
              <Link to="/customer-care/help-center">Partners</Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="my-2">SUPPORT</h4>
          <ul className="space-y-1">
            <li>
              <Link to="/about-ametava">Help Center</Link>
            </li>
            <li>
              <Link to="/affilliate-program">Safety Information</Link>
            </li>
            <li>
              <Link to="/career">Cancellation Options</Link>
            </li>
            <li>
              <Link to="/terms-conditions">Contact Us</Link>
            </li>
            <li>
              <Link to="/privacy-prolicy">Accessibility</Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="my-2">STAY UPDATED</h4>
          <ul className="space-y-1">
            <li>
              <Link to="/about-ametava">
                Subscribe to our newsletter for travel inspiration and special
                offers.
              </Link>
            </li>
            <li className="mt-4">
              <Input.Search placeholder="Your Email" variant="filled" />
            </li>
          </ul>
        </div>
      </div>
      <hr className="my-3 text-gray-400" />
      <div className="text-center">
        Copyright @{year} QuickStay - AllRights Reserved
      </div>
    </footer>
  );
}
