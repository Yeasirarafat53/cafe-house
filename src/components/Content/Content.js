import React from 'react';
import './Content.css';
import data from '../../components/Data/Data';


const Content = () => {
  return (
    <div class="tm-main-section light-gray-bg">
      <div class="container" id="main">
        <section class="tm-section row">
          <div class="col-lg-9 col-md-9 col-sm-8">
            <h2 class="tm-section-header gold-text tm-handwriting-font">
              The Best Coffee for you
            </h2>
            <h2>Cafe House</h2>
            <p class="tm-welcome-description">
              This is free HTML5 website template from{' '}
              <span class="blue-text">template</span>
              <span class="green-text">mo</span>. Fndimentum rhoncus, sem quam
              semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam
              nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas
              nec odio et ante tincidunt tempus. Donec vitae sapien ut libero
              venenatis faucibus. Ettiam sit amet orci eget eros faucibus
              tincidunt.
            </p>
            <a href="#" class="tm-more-button margin-top-30">
              Read More
            </a>
          </div>
          <div class="col-lg-3 col-md-3 col-sm-4 tm-welcome-img-container">
            <div class="inline-block shadow-img">
              <img
                src="images/1.jpg"
                alt="Image"
                className="img-rounded img-thumbnail"
              />
            </div>
          </div>
        </section>
        {/* popular menu  */}

        <section class="tm-section tm-section-margin-bottom-0 row">
          <div class="col-lg-12 tm-section-header-container">
            <h2 class="tm-section-header gold-text tm-handwriting-font">
              <img src="images/logo.png" alt="Logo" class="tm-site-logo" />{' '}
              Popular Items
            </h2>
            <div class="tm-hr-container">
              <hr class="tm-hr" />
            </div>
          </div>

          {/* menu card */}
          <div class="col-lg-12 tm-popular-items-container">
            {data.map((data) => (
              <div class="tm-popular-item">
                <img
                  src={data.img}
                  alt="Popular"
                  class="tm-popular-item-img"
                />
                <div class="tm-popular-item-description">
                  <h3 class="tm-handwriting-font tm-popular-item-title">
                    
                    {data.name}
                  </h3>
                  <hr class="tm-popular-item-hr" />
                  <p>
                    {data.desc}
                  </p>
                  <div class="order-now-container">
                    <a href="#" class="order-now-link tm-handwriting-font">
                      Order Now
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* daily menu */}

        <section class="tm-section">
          <div class="row">
            <div class="col-lg-12 tm-section-header-container">
              <h2 class="tm-section-header gold-text tm-handwriting-font">
                <img src="images/logo.png" alt="Logo" class="tm-site-logo" />{' '}
                Daily Menu
              </h2>
              <div class="tm-hr-container">
                <hr class="tm-hr" />
              </div>
            </div>
          </div>

          <div class="row mt-5">
            <div className="col-lg-4">
              <img
                src="images/menu-board.png"
                alt="Menu board"
                class="tm-daily-menu-img"
              />
            </div>
            <div className="col-lg-8">
              <p>
                Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum.
                Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur
                ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus.
              </p>
              <ol class="margin-top-30">
                <li>Tellus eget condimentum rhoncus.</li>
                <li>Sem quam semper libero.</li>
                <li>Sit amet adipiscing sem neque sed ipsum.</li>
                <li>Nam quam nunc, blandit vel, luctus pulvinar.</li>
                <li>Maecenas nec odio et ante tincidunt tempus.</li>
                <li>Donec vitae sapien ut libero ventenatis faucibus.</li>
              </ol>
              <a href="#" class="tm-more-button margin-top-30">
                Read More
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Content;


{/* <div class="tm-daily-menu-container margin-top-60">
  <div class="col-lg-3 col-md-4">
    <img
      src="images/menu-board.png"
      alt="Menu board"
      class="tm-daily-menu-img"
    />
  </div>
  <div class="col-lg-5 col-md-8">
    <p>
      Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean
      imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies
      nisi. Nam eget dui. Etiam rhoncus.
    </p>
    <ol class="margin-top-30">
      <li>Tellus eget condimentum rhoncus.</li>
      <li>Sem quam semper libero.</li>
      <li>Sit amet adipiscing sem neque sed ipsum.</li>
      <li>Nam quam nunc, blandit vel, luctus pulvinar.</li>
      <li>Maecenas nec odio et ante tincidunt tempus.</li>
      <li>Donec vitae sapien ut libero ventenatis faucibus.</li>
    </ol>
    <a href="#" class="tm-more-button margin-top-30">
      Read More
    </a>
  </div>
</div>; */}