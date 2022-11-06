import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <div>
      <section className="tm-welcome-section">
        <div className="container tm-position-relative">
          <div className="tm-lights-container">
            <img src="images/light.png" alt="Light" className="light light-1" />
            <img src="images/light.png" alt="Light" className="light light-2" />
            <img src="images/light.png" alt="Light" className="light light-3" />
          </div>
          <div className="row tm-welcome-content">
            <h2 className="white-text tm-handwriting-font tm-welcome-header">
              <img
                src="/images/header-line.png"
                alt="Line"
                className="tm-header-line"
              />
              &nbsp;Welcome To&nbsp;&nbsp;
              <img
                src="/images/header-line.png"
                alt="Line"
                className="tm-header-line"
              />
            </h2>
            <h2 className="gold-text tm-welcome-header-2">Cafe House</h2>
            <p className="gray-text tm-welcome-description">
              Cafe House template is a mobile-friendly responsive{' '}
              <span className="gold-text">Bootstrap v3.3.5</span> layout by{' '}
              <span className="gold-text">templatemo</span>. Lorem ipsum dolor
              sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget
              dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis
              parturient montes, nascetur ridiculusnec quam felis, ultricies
              nec, pellentesque eu, pretium quis, sem.
            </p>
            <a href="#main" className="tm-more-button tm-more-button-welcome">
              Details
            </a>
          </div>
          <img
            src="/images/table-set.png"
            alt="Table Set"
            className="tm-table-set img-responsive"
          />
        </div>
      </section>
    </div>
  );
};

export default Hero;
