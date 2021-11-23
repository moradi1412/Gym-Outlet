import React from "react";
import CardItem from "./carditem";
import julia from "../../../assets/img/julia-rekamie.jpg";
import philip from "../../../assets/img/philip-myrtorp.jpg"

function Cards() {
  return (
    <div className="cards">
      <h1>Top Picks from Featured Athletes</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem 
            src={julia}
            text='“I think people forget that a happy person is one that has shed many tears. That a person that tries to lift others up, has known the struggle of being pushed down. That a person that looks like they have everything under control, has once tried to gather the broken pieces together. The pain we go through forms our character and allows us to grow. Stop fearing it and realize that your pain is your power.” - Julia Rekamie, Fitness Influencer'
            label="Julia Rekamie"
            path="/"
            />

            <CardItem 
            src={philip}
            text=''
            label="Philip Myrtorp"
            path="/"
            />
          </ul>

          
        </div>
      </div>
    </div>
  );
}

export default Cards;
