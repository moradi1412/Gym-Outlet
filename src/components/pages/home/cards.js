import React from "react";
import CardItem from "./carditem";
import julia from "../../../assets/img/julia-ross.jpg";
import andrew from "../../../assets/img/andrew-thompson.jpg"

function Cards() {
  return (
    <div className="cards">
      <h1>Top Picks from Featured Athletes</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem 
            src={julia}
            text='“I think people forget that a happy person is one that has shed many tears. That a person that tries to lift others up, has known the struggle of being pushed down. That a person that looks like they have everything under control, has once tried to gather the broken pieces together. The pain we go through forms our character and allows us to grow. Stop fearing it and realize that your pain is your power.”'
            label="Julia Ross, Fitness Influencer"
            path="/"
            />

            <CardItem 
            src={andrew}
            text={'"Love of sport, and enthusiasm are much more powerful and healthy tools than anger and negative self-talk, so focusing on the goodness is the most potent source of energy. Reminding myself why I\'m doing what I\'m doing, \'my dreams,\' helps me to focus on the long-term reward versus the short-term pain or distraction."'}
            label="Andrew Thompson, Celebrity Trainer"
            path="/"
            />
          </ul>

          
        </div>
      </div>
    </div>
  );
}

export default Cards;
