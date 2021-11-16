import React from 'react';
import coverImage from "../../assets/cover/gym-outfits-1583270663.png";

function About() {

  return (
    <section className="my-5">
      <h1 id="about">About Our Company</h1>
      <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
      <br>
      </br>
      <p>
      Sparta is a distributor of fine fitness clothing for every day workouts and casual wear.  We specialize in providing the right clothing that the customer requires to perform a proper workout and look stylish while performing the workout. Our products have been built with premium fabrics, innovative design and sweat wicking technology, these products are made for the toughest of workouts while providing a stylish look.
      </p>
    </section>
  );
}

export default About;