import { Link } from "react-router";

export default function PageNotFound() {
  return <div className="w-full bg-white min-h-60 flex justify-center items-center">
    <div className="flex flex-col items-center">
      <div className="flex items-center gap-3">
        <h1 className="text-4xl font-bold">404</h1>
        <span className="font-bold">|</span>
        <p className="text-lg">Page not found</p>
      </div>
      <Link to="/" className="text-blue-500 font-semibold hover:underline">Go back to home</Link>
    </div>
  </div>;
}
