import { useNavigate } from "react-router-dom";

export default function Landing() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-100 to-blue-100">
      <div className="bg-white p-10 rounded-2xl shadow-xl text-center w-[400px]">
        <h1 className="text-3xl font-bold text-green-700 mb-4">
          Welcome to CalamitySense
        </h1>
        <p className="text-gray-600 mb-6">
          India's #1 Disaster Preparedness Platform
        </p>

        <button
          onClick={() => navigate("/login")}
          className="w-full bg-green-600 text-white py-2 rounded-lg mb-3 hover:bg-green-700"
        >
          Login
        </button>

        <button
          onClick={() => navigate("/signup")}
          className="w-full border border-green-600 text-green-600 py-2 rounded-lg hover:bg-green-50"
        >
          Sign Up
        </button>
      </div>
    </div>
  );
}
