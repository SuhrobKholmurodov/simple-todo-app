import { useNavigate } from "react-router-dom";
import { AlertCircle } from "lucide-react"; 

export const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center items-center">
      <div className="text-center space-y-4">
        <AlertCircle className="mx-auto text-red-600" size={60} />
        <h1 className="text-4xl font-bold text-white">404 - Page Not Found</h1>
        <p className="text-slate-200 text-lg">
          Oops! The page you're looking for doesn't exist.
        </p>
        <button
          className="bg-slate-700 text-white px-6 py-2 rounded-md hover:bg-slate-800 transition-all"
          onClick={() => navigate("/")} 
        >
          Go Back Home
        </button>
      </div>
    </div>
  );
};