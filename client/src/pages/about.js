import React from 'react';
import coverImage from "../assets/about.jpg";
import founder from '../assets/founder.jpg'

function About() {

  return (
    <section className="about-company">
      <div className='about-company'>
        <h1 className="about-header">About Our Company</h1>
        <img src={coverImage} className="about-img" alt="cover" />
        <br>
        </br>
        <p className='about-text'>
          Sparta is a distributor of fine fitness clothing for every day workouts and casual wear.  We specialize in providing the right clothing that the customer requires to perform a proper workout and look stylish while performing the workout. Our products have been built with premium fabrics, innovative design and sweat wicking technology, these products are made for the toughest of workouts while providing a stylish look.
        </p>
      </div>
      <div className='about-company'>
        <h1 className="about-header">Our Founder</h1>
        <img src={founder} className="about-img" alt="cover" />
        <br>
        </br>
        <p className='about-text'>
        Anthony Carey, MA, CSCS, ACE-MES, holds a Master’s degree in biomechanics and athletic training and is Personal Fitness Professional Magazine’s 2009 Personal Trainer of the Year and 2017 Finalist for IDEA World’s Personal Trainer of the Year.  Since 1994 he has been the owner of Function First in San Diego, California which was voted San Diego’s “Best Of” Personal Trainers/Studio for 2010, 2011, 2012 and 2014. Anthony has authored two bestselling books; The Pain-Free Program: A Proven Method to Relieve Back, Neck, Shoulder and Joint Pain and Relationships and Referrals: A Personal Trainer’s Guide to Doing Business with the Medical Community
        </p>
      </div>

    </section>

  );
}

export default About;