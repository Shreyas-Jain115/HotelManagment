import React, { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { userDao } = useContext(UserContext);
  const navigate = useNavigate();

  const imageUrls = [
    "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg",
    "https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/6130060/pexels-photo-6130060.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg",
    "https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg",
    "https://images.pexels.com/photos/2291624/pexels-photo-2291624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  ];

  return (
    <div className="relative">
      {/* Main content */}
      <div className="container mx-auto px-2 sm:px-4 py-6 sm:py-8 w-full">
        <header className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 font-barlow">
            Welcome to CheckinGo
          </h1>
          <p className="mt-3 sm:mt-4 text-base sm:text-lg text-cyan-600">
            Effortless hotel management and seamless guest experiences.
          </p>
        </header>

        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8">
          {imageUrls.map((url, index) => (
            <div key={index}>
              <img
                className="w-full h-40 sm:h-48 md:h-56 object-cover rounded-lg shadow-2xl"
                src={url}
                alt={`Hotel view ${index + 1}`}
                loading="lazy"
              />
            </div>
          ))}
        </section>

        <section className="mt-8 sm:mt-12 text-center pb-0">
          <h2 className="text-2xl sm:text-3xl font-semibold text-cyan-600 font-barlow">
            About CheckinGo
          </h2>
          <p className="mt-3 sm:mt-4 text-gray-600 pt-0 pb-5 text-base sm:text-lg">
             CheckinGo is a cutting-edge hotel management platform designed for modern hospitality needs. 
            We empower multiple hotels to register and manage their operations under one smart ecosystem. 
            With features like AI-powered facial recognition for secure self check-in and check-out, 
            CheckinGo redefines convenience for both hotel owners and guests. Our focus is on delivering 
            frictionless travel experiences—streamlining operations, enhancing safety, and making every 
            stay more efficient. Whether you're managing a boutique inn or a full-scale resort, 
            CheckinGo is your trusted partner in elevating hospitality through technology.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Home;
