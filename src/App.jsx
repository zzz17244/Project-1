import React, { useState, useEffect } from "react";
import BookingForm from "./BookingForm.jsx";
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
    "https://cdn.passporthealthusa.com/wp-content/uploads/2020/06/vaccines-advice-india-img-compressed.jpg?x55460",
    "https://cdn.pixabay.com/photo/2021/10/10/20/33/mehtab-bagh-6698669_1280.jpg",
    "https://cdn.pixabay.com/photo/2010/11/29/elephant-375_1280.jpg",
    "https://cdn.pixabay.com/photo/2017/09/09/12/09/india-2731817_1280.jpg",
    "https://cdn.pixabay.com/photo/2010/11/29/india-294_1280.jpg",
    "https://down-th.img.susercontent.com/file/th-11134207-7r98o-lqlhm9rr9d5waf",
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
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyOqHTfOM-VVpaEyeqSetWpda-XtBczXHjt4LEWXQj8A&s"
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
            <li>New Member Club</li>
            <li className="login-toggle" onClick={handleLoginToggle}>Member log in</li>
            <li>Other Services</li>
          </ul>
        </nav>
      </header>
      <div className="relative flex justify-center items-center h-screen">
        <div className="slider-container">
          <div
            className={`slider-image ${isSliding ? 'sliding' : ''}`}
            style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
          ></div>
          <div
            className={`slider-image next ${isSliding ? 'sliding' : ''}`}
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
        <div className="relative w-4/5 rounded-lg shadow-lg z-10 mt-[110vh]">
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
      </div>
      {showLoginForm && (
        <div className="login-form">
          <span className="close-icon" onClick={handleLoginToggle}>×</span>
          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" name="email" placeholder="Enter your email" />
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" placeholder="Enter your password" />
          <button type="submit" className="login-button">Submit</button>
          <a href="#" className="forgot-password">Forgot Password?</a>
        </div>
      )}
    </div>
  );
};

export default App;
