import React, { useState, useEffect } from "react";
import BookingForm from "./BookingForm.jsx";
import PromotionList from "./components/PromotionList.jsx";

import "./App.css";

const App = () => {
  const [showSiteDropdown, setShowSiteDropdown] = useState(false);
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [clickedButton, setClickedButton] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [nextImageIndex, setNextImageIndex] = useState(1);
  const [isSliding, setIsSliding] = useState(false);

  const images = [
    "https://cdn.pixabay.com/photo/2021/10/10/20/33/mehtab-bagh-6698669_1280.jpg",
    "https://media.istockphoto.com/id/1681951573/th/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%96%E0%B9%88%E0%B8%B2%E0%B8%A2/%E0%B8%A7%E0%B8%B1%E0%B8%94%E0%B8%AD%E0%B8%A3%E0%B8%B8%E0%B8%93%E0%B8%A3%E0%B8%B2%E0%B8%8A%E0%B8%A7%E0%B8%A3%E0%B8%B2%E0%B8%A3%E0%B8%B2%E0%B8%A1%E0%B8%A2%E0%B8%B2%E0%B8%A1%E0%B8%AD%E0%B8%B2%E0%B8%97%E0%B8%B4%E0%B8%95%E0%B8%A2%E0%B9%8C%E0%B8%AD%E0%B8%B1%E0%B8%AA%E0%B8%94%E0%B8%87%E0%B9%83%E0%B8%99%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%9E%E0%B8%AF.jpg?s=1024x1024&w=is&k=20&c=ItF8D9FJ5GvyQiSOJawCs_AKtLrk6swRwInBMWaNS2M=",
    "https://media.istockphoto.com/id/520086374/th/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%96%E0%B9%88%E0%B8%B2%E0%B8%A2/%E0%B8%A8%E0%B8%B2%E0%B8%A5%E0%B8%AB%E0%B8%A5%E0%B8%B1%E0%B8%81%E0%B9%80%E0%B8%A1%E0%B8%B7%E0%B8%AD%E0%B8%87%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%9E-%E0%B9%81%E0%B8%A5%E0%B8%B0%E0%B8%A7%E0%B8%B1%E0%B8%94%E0%B8%9E%E0%B8%A3%E0%B8%B0%E0%B9%81%E0%B8%81%E0%B9%89%E0%B8%A7.jpg?s=612x612&w=0&k=20&c=wXU9S3x_iKZwuyD0mmDz3iG5oWiT2Qip_goA6RhIem4=",
    "https://cdn.pixabay.com/photo/2010/11/29/india-294_1280.jpg",
    "https://cdn.pixabay.com/photo/2017/08/17/11/28/phi-phi-island-2650950_1280.jpg",
    "./Banner/Nok-Air-Cabin-Crew.jpg",
    "./Banner/seat.jpg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsSliding(true);
      setTimeout(() => {
        setCurrentImageIndex(nextImageIndex);
        setNextImageIndex((nextImageIndex + 1) % images.length);
        setIsSliding(false);
      }, 1000); // Duration of the slide animation
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [nextImageIndex]);

  const handleDotClick = (index) => {
    setIsSliding(true);
    setTimeout(() => {
      setCurrentImageIndex(index);
      setNextImageIndex((index + 1) % images.length);
      setIsSliding(false);
    }, 1000); // Duration of the slide animation
  };

  const handleSiteDropdownToggle = (toggle) => {
    setShowSiteDropdown(toggle);
  };

  const handleLanguageDropdownToggle = (toggle) => {
    setShowLanguageDropdown(toggle);
  };

  const handleButtonClick = (buttonName) => {
    setClickedButton(buttonName);
  };

  const handleLoginToggle = () => {
    setShowLoginForm(!showLoginForm);
  };

  return (
    <div className="bg-[#ffd700]">
      <header className="header">
        <div className="header-left">
          <img
            src="data:image/png;base64,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"
            alt="Air Line"
            className="logo"
          />
        </div>
        <nav className="nav">
          <ul className="nav-list">
            <li>Booking</li>
            <li>Promotion</li>
            <li>Manage My Booking</li>
            <li>Travel Info</li>
            <li
              className="dropdown-toggle"
              onMouseEnter={() => handleSiteDropdownToggle(true)}
              onMouseLeave={() => handleSiteDropdownToggle(false)}
            >
              <img
                src="https://www.shutterstock.com/image-illustration/illustration-tricolor-indian-flag-background-260nw-2343485095.jpg"
                alt="Indian Flag"
                className="flag-icon"
              />
              {showSiteDropdown && (
                <ul className="dropdown">
                  <li className="dropdown-item">
                    <img
                      src="https://t3.ftcdn.net/jpg/01/08/88/60/360_F_108886037_5RMqRn0kavfVgfBFgeKWXdxlRSc6myci.jpg"
                      alt="Thai"
                      className="dropdown-image"
                    />
                  </li>
                  <li className="dropdown-item">
                    <img
                      src="https://www.shutterstock.com/image-illustration/illustration-tricolor-indian-flag-background-260nw-2343485095.jpg"
                      alt="Indian Flag"
                      className="dropdown-image"
                    />
                  </li>
                </ul>
              )}
            </li>
            <li
              className="dropdown-toggle"
              onMouseEnter={() => handleLanguageDropdownToggle(true)}
              onMouseLeave={() => handleLanguageDropdownToggle(false)}
            >
              English
              {showLanguageDropdown && (
                <ul className="dropdown">
                  <li className="dropdown-item">English</li>
                  <li className="dropdown-item">Thai</li>
                  <li className="dropdown-item">Chinese</li>
                  <li className="dropdown-item">Indian</li>
                </ul>
              )}
            </li>
            <li>New Members Club</li>
            <li className="login-toggle" onClick={handleLoginToggle}>
              Member log in
            </li>
            <li>Other Services</li>
          </ul>
        </nav>
      </header>
      <div className="relative flex flex-col items-center h-screen">
        <div className="slider-container">
          <div
            className={`slider-image ${isSliding ? "sliding" : ""}`}
            style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
          ></div>
          <div
            className={`slider-image next ${isSliding ? "sliding" : ""}`}
            style={{ backgroundImage: `url(${images[nextImageIndex]})` }}
          ></div>
        </div>
        <div className="dot-container">
          {images.map((image, index) => (
            <span
              key={index}
              className={`dot ${currentImageIndex === index ? "active" : ""}`}
              onClick={() => handleDotClick(index)}
            ></span>
          ))}
        </div>
        <div className="relative w-4/5 rounded-lg shadow-lg z-10 mt-[40vh]">
          <div className="rounded shadow-md">
            <main className="main-content">
              <div className="button-group">
                <button
                  className={`primary-button ${clickedButton === "book-flight" ? "clicked" : ""}`}
                  onClick={() => handleButtonClick("book-flight")}
                >
                  <img
                    src="https://www.svgrepo.com/show/24933/airplane-flight.svg"
                    alt="Airplane"
                    className="button-icon"
                  />
                  Book Flight
                </button>
                <button
                  className={`secondary-button ${clickedButton === "book-hotel" ? "clicked" : ""}`}
                  onClick={() => handleButtonClick("book-hotel")}
                >
                  <img
                    src="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA3L2pvYjE4OTAtMzMxLXAucG5n.png"
                    alt="Hotel"
                    className="button-icon"
                  />
                  Book Hotel
                </button>
                <button
                  className={`secondary-button ${clickedButton === "web-checkin" ? "clicked" : ""}`}
                  onClick={() => handleButtonClick("web-checkin")}
                >
                  <img
                    src="https://iconape.com/wp-content/files/nk/339266/png/339266.png"
                    alt="Web Check-in"
                    className="button-icon"
                  />
                  Check-in
                </button>
                <button
                  className={`secondary-button ${clickedButton === "manage-booking" ? "clicked" : ""}`}
                  onClick={() => handleButtonClick("manage-booking")}
                >
                  Manage Booking
                </button>
                <button
                  className={`secondary-button ${clickedButton === "other-services" ? "clicked" : ""}`}
                  onClick={() => handleButtonClick("other-services")}
                >
                  Other Services
                </button>
              </div>
              <BookingForm />
            </main>
          </div>
        </div>

        <div className="w-full mt-8 flex justify-center ">
          <PromotionList />
        </div>
      </div>
      {showLoginForm && (
        <div className="login-form">
          <span className="close-icon" onClick={handleLoginToggle}>
            ×
          </span>
          <label htmlFor="email">Your Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
          />
          <button type="submit" className="login-button">
            Submit
          </button>
          <a href="#" className="forgot-password">
            Forgot Password?
          </a>
        </div>
      )}
    </div>
  );
};

export default App;
