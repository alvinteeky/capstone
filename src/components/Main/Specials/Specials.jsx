import React from "react";
import { MdDeliveryDining } from "react-icons/md";
import { images } from "../../../constants";
import { AppWrap } from "../../../wrapper";
import "./Specials.css";

const foodItems = [
  {
    name: "Caprese Salad",
    price: "$10.99",
    description:
      "Fresh mozzarella, ripe tomatoes, and basil, drizzled with balsamic glaze for the perfect bite of Italy.",
    image: images.greekSalad,
  },
  {
    name: "Margherita Pizza",
    price: "$14.99",
    description:
      "Classic pizza with a crispy crust, topped with fresh tomatoes, mozzarella, and basil leaves.",
    image: images.bruchetta,
  },
  {
    name: "Tiramisu",
    price: "$7.50",
    description:
      "An Italian dessert made with layers of coffee-soaked ladyfingers and a creamy mascarpone filling.",
    image: images.lemonDessert,
  },
  {
    name: "Spaghetti Carbonara",
    price: "$13.50",
    description:
      "A traditional Roman pasta dish made with eggs, cheese, pancetta, and pepper, tossed with spaghetti.",
    image: images.lemonDessert,
  },
];

const FoodCard = ({ name, price, description, image }) => {
  return (
    <div className="specials-item">
      <div
        className="specials-image"
        style={{ backgroundImage: `url(${image})` }}
      >
        {/* <img src={image} alt={name} /> */}
      </div>
      <div className="specials-details">
        <div className="specials-name-price">
          <h3 className="specials-name">{name}</h3>
          <p className="specials-price">{price}</p>
        </div>
        <p className="specials-description">{description}</p>
        <button className="specials-order">
          Order
          <MdDeliveryDining className="specials-delivery" />
        </button>
      </div>
    </div>
  );
};

const Specials = () => {
  return (
    <div className="specials">
      <div className="specials-title-and-btn">
        <h1 className="specials-title">Specials</h1>
        <button className="specials-btn-menu">Online Menu</button>
      </div>
      <div className="specials-food-card-holder">
        <div className="specials-food">
          {foodItems.map((item, index) => (
            <FoodCard
              key={index}
              name={item.name}
              price={item.price}
              description={item.description}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AppWrap(Specials, "Menu", "specials");
