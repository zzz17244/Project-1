import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './BookingForm.css';

const BookingForm = () => {
  const [tripType, setTripType] = useState('round-trip');
  const [currency, setCurrency] = useState('INR');
  const [selectedPromo, setSelectedPromo] = useState(null);
  const [departDate, setDepartDate] = useState(null);
  const [returnDate, setReturnDate] = useState(null);

  const handleTripTypeChange = (event) => {
    setTripType(event.target.value);
  };

  const handleCurrencyChange = (event) => {
    setCurrency(event.target.value);
  };

  const handlePromoClick = (promo) => {
    setSelectedPromo(selectedPromo === promo ? null : promo);
  };

  const handleCloseClick = () => {
    setSelectedPromo(null);
  };

  return (
    <form className="booking-form">
      <div className="trip-options">
        <div className="trip-type">
          <label>
            <input
              type="radio"
              value="round-trip"
              checked={tripType === 'round-trip'}
              onChange={handleTripTypeChange}
            />
            Round Trip
          </label>
          <label>
            <input
              type="radio"
              value="one-way"
              checked={tripType === 'one-way'}
              onChange={handleTripTypeChange}
            />
            One Way
          </label>
          <label>
            <input
              type="radio"
              value="multi-city"
              checked={tripType === 'multi-city'}
              onChange={handleTripTypeChange}
            />
            Multi City
          </label>
        </div>
        <div className="currency-dropdown-container">
          <label htmlFor="currency">Currency</label>
          <select id="currency" name="currency" value={currency} onChange={handleCurrencyChange} className="currency-dropdown">
            <option value="INR">Indian-Rupee</option>
            <option value="THB">Thai-Baht</option>
            <option value="USD">US-Dollar</option>
            <option value="CNY">China-Yuan</option>
          </select>
        </div>
      </div>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="from">From</label>
          <input type="text" id="from" name="from" placeholder="Select Origin" list="from-options" />
          <datalist id="from-options">
            <option value="HYD - Hyderabad" />
            <option value="BLR - Bangalore" />
            <option value="DEL - Delhi" />
          </datalist>
        </div>
        <div className="form-group">
          <label htmlFor="to">To</label>
          <input type="text" id="to" name="to" placeholder="Select Destination" list="to-options" />
          <datalist id="to-options">
            <option value="DMK - Don Mueang" />
            <option value="CNX - Chiang Mai" />
            <option value="CEI - Chiang Rai" />
            <option value="HKT - Phuket" />
            <option value="KBV - Krabi" />
          </datalist>
        </div>
      </div>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="depart">Depart</label>
          <DatePicker
            selected={departDate}
            onChange={(date) => setDepartDate(date)}
            dateFormat="yyyy-MM-dd"
            placeholderText="Select Depart Date"
            className="date-picker"
          />
        </div>
        <div className="form-group">
          <label htmlFor="return">Return</label>
          <DatePicker
            selected={returnDate}
            onChange={(date) => setReturnDate(date)}
            dateFormat="yyyy-MM-dd"
            placeholderText="Select Return Date"
            className="date-picker"
          />
        </div>
        <div className="form-group">
          <label htmlFor="passengers">Passengers</label>
          <select id="passengers" name="passengers">
            <option>1 adult</option>
            <option>2 adults</option>
            <option>3 adults</option>
            <option>4 adults</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="promoCode">Promo Code</label>
          <input type="text" id="promoCode" name="promoCode" placeholder="Promo Code" />
        </div>
      </div>
      <div className="form-row form-row-bottom">
        <div className="form-group">
          <label htmlFor="lowestFare">Lowest fare</label>
          <input type="checkbox" id="lowestFare" name="lowestFare" className="small-checkbox" />
        </div>
        <button type="submit" className="search-button">Search</button>
      </div>
      <div className="image-row">
        <div className="promo-item">
          <p>To Chiang Mai 40,000 INR</p>
          <img
            src="https://assets.airtrfx.com/cdn-cgi/image/height=500,width=800,quality=80,fit=crop,format=auto,opt=true/https://media.jtdwjcwq6f4wp4ce.com/tg/ChiangMai_Thailand.jpg"
            alt="Chiang Mai"
            className="promo-image"
            onClick={() => handlePromoClick('chiang-mai')}
          />
          {selectedPromo === 'chiang-mai' && (
            <div className="promo-book-box">
              <span className="close-icon" onClick={handleCloseClick}>×</span>
              <button>Review</button>
              <label>Depart: <DatePicker selected={departDate} onChange={(date) => setDepartDate(date)} dateFormat="yyyy-MM-dd" placeholderText="Select Date" /></label>
              <label>Return: <DatePicker selected={returnDate} onChange={(date) => setReturnDate(date)} dateFormat="yyyy-MM-dd" placeholderText="Select Date" /></label>
              <label>Passengers:
                <select>
                  <option>1 adult</option>
                  <option>2 adults</option>
                  <option>3 adults</option>
                  <option>4 adults</option>
                </select>
              </label>
              <div className="checkbox-group">
                <label><input type="checkbox" /> Hotel</label>
                <label><input type="checkbox" /> Transport</label>
                <label><input type="checkbox" /> Travel Insurance</label>
                <label><input type="checkbox" /> Extra Bags</label>
                <label><input type="checkbox" /> Spa</label>
              </div>
              <label>Promo Code: <input type="text" /></label>
              <button>Purchase</button>
            </div>
          )}
        </div>
        <div className="promo-item">
          <p>To Bangkok 35,000 INR</p>
          <img
            src="https://assets.airtrfx.com/media-em/tg/65572ced07a8f_Bangkok_Temple.jpg?height=500&width=800&quality=80&fit=crop&format=auto&opt=true"
            alt="Bangkok Temple"
            className="promo-image"
            onClick={() => handlePromoClick('bangkok')}
          />
          {selectedPromo === 'bangkok' && (
            <div className="promo-book-box">
              <span className="close-icon" onClick={handleCloseClick}>×</span>
              <button>Review</button>
              <label>Depart: <DatePicker selected={departDate} onChange={(date) => setDepartDate(date)} dateFormat="yyyy-MM-dd" placeholderText="Select Date" /></label>
              <label>Return: <DatePicker selected={returnDate} onChange={(date) => setReturnDate(date)} dateFormat="yyyy-MM-dd" placeholderText="Select Date" /></label>
              <label>Passengers:
                <select>
                  <option>1 adult</option>
                  <option>2 adults</option>
                  <option>3 adults</option>
                  <option>4 adults</option>
                </select>
              </label>
              <div className="checkbox-group">
                <label><input type="checkbox" /> Hotel</label>
                <label><input type="checkbox" /> Transport</label>
                <label><input type="checkbox" /> Insurance</label>
                <label><input type="checkbox" /> Extra Bag</label>
                <label><input type="checkbox" /> Spa</label>
              </div>
              <label>Promo Code: <input type="text" /></label>
              <button>Purchase</button>
            </div>
          )}
        </div>
        <div className="promo-item">
          <p>To Phuket 40,000 INR</p>
          <img
            src="https://assets.airtrfx.com/cdn-cgi/image/height=500,width=800,quality=80,fit=crop,format=auto,opt=true/https://media.jtdwjcwq6f4wp4ce.com/tg/Phuket_Thailand.jpg"
            alt="Phuket"
            className="promo-image"
            onClick={() => handlePromoClick('phuket')}
          />
          {selectedPromo === 'phuket' && (
            <div className="promo-book-box">
              <span className="close-icon" onClick={handleCloseClick}>×</span>
              <button>Review</button>
              <label>Depart: <DatePicker selected={departDate} onChange={(date) => setDepartDate(date)} dateFormat="yyyy-MM-dd" placeholderText="Select Date" /></label>
              <label>Return: <DatePicker selected={returnDate} onChange={(date) => setReturnDate(date)} dateFormat="yyyy-MM-dd" placeholderText="Select Date" /></label>
              <label>Passengers:
                <select>
                  <option>1 adult</option>
                  <option>2 adults</option>
                  <option>3 adults</option>
                  <option>4 adults</option>
                </select>
              </label>
              <div className="checkbox-group">
                <label><input type="checkbox" /> Hotel</label>
                <label><input type="checkbox" /> Transport</label>
                <label><input type="checkbox" /> Travel Insurance</label>
                <label><input type="checkbox" /> Extra Bags</label>
                <label><input type="checkbox" /> Spa</label>
              </div>
              <label>Promo Code: <input type="text" /></label>
              <button>Purchase</button>
            </div>
          )}
        </div>
        <div className="promo-item">
          <p>To Krabi 40,000 INR</p>
          <img
            src="https://content.r9cdn.net/rimg/dimg/d7/d3/e9304e90-city-44862-164ae46b3a9.jpg?crop=true&width=1020&height=498"
            alt="Krabi"
            className="promo-image"
            onClick={() => handlePromoClick('krabi')}
          />
          {selectedPromo === 'krabi' && (
            <div className="promo-book-box">
              <span className="close-icon" onClick={handleCloseClick}>×</span>
              <button>Review</button>
              <label>Depart: <DatePicker selected={departDate} onChange={(date) => setDepartDate(date)} dateFormat="yyyy-MM-dd" placeholderText="Select Date" /></label>
              <label>Return: <DatePicker selected={returnDate} onChange={(date) => setReturnDate(date)} dateFormat="yyyy-MM-dd" placeholderText="Select Date" /></label>
              <label>Passengers:
                <select>
                  <option>1 adult</option>
                  <option>2 adults</option>
                  <option>3 adults</option>
                  <option>4 adults</option>
                </select>
              </label>
              <div className="checkbox-group">
                <label><input type="checkbox" /> Hotel</label>
                <label><input type="checkbox" /> Transport</label>
                <label><input type="checkbox" /> Travel Insurance</label>
                <label><input type="checkbox" /> Extra Bag</label>
                <label><input type="checkbox" /> Spa</label>
              </div>
              <label>Promo Code: <input type="text" /></label>
              <button>Purchase</button>
            </div>
          )}
        </div>
      </div>
    </form>
  );
};

export default BookingForm;
