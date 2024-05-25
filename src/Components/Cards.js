import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className="cards">
      <h1>Check out these EPIC Destinations!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/img-1.jpg"
              text="Step into the bustling heart of Marrakech at Jamaa el Fena"
              label="Adventure"
              path="/services"
            />
            <CardItem
              src="images/img-4.jpg"
              text="Ride through the Sahara Desert on a guided camel tour"
              label="Adventure"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/img-3.jpg"
              text="
              Embark on a voyage to witness the magnificence of Morocco's renowned Hassan II Mosque."
              label="Mystery"
              path="/services"
            />
            <CardItem
              src="images/img-6.jpg"
              text="Sail along the Moroccan coast and uncover the hidden coves and pristine beaches"
              label="Adventure"
              path="/products"
            />
            <CardItem
              src="images/img-5.jpg"
              text="Explore the secret oases and vibrant landscapes of Morocco's Atlas Mountains" // Missing closing quote
              label="Adrenaline"
              path="/sign-up"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
