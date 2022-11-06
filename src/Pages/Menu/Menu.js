import React from 'react';
import "./Menu.css";

const Menu = () => {
    return (
      <div class="light-gray-bg">
        <section className="tm-welcome-section">
          <div className="container tm-position-relative">
            <div className="tm-lights-container">
              <img
                src="images/light.png"
                alt="Light"
                className="light light-1"
              />
              <img
                src="images/light.png"
                alt="Light"
                className="light light-2"
              />
              <img
                src="images/light.png"
                alt="Light"
                className="light light-3"
              />
            </div>
            <div className="row tm-welcome-content">
              <h2 className="white-text tm-handwriting-font tm-welcome-header">
                <img
                  src="/images/header-line.png"
                  alt="Line"
                  className="tm-header-line"
                />
                &nbsp;Our Menus&nbsp;&nbsp;
                <img
                  src="/images/header-line.png"
                  alt="Line"
                  className="tm-header-line"
                />
              </h2>
              <h2 className="gold-text tm-welcome-header-2">Cafe House</h2>
              <p className="gray-text tm-welcome-description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
                porro iste officiis exercitationem. Eveniet obcaecati eaque
                alias reiciendis cupiditate debitis adipisci expedita
                praesentium facilis similique porro, deserunt rerum consequuntur
                eos ducimus laborum temporibus culpa quae provident! Culpa
                corrupti, itaque fugiat laborum harum sunt doloribus nihil
                officiis debitis nulla! Quos ipsum quisquam fugit quia commodi,
                corrupti magnam, mollitia numquam error illum velit sed. Vitae
                labore voluptatum reiciendis illo aperiam dolorum perferendis
                tempore maiores, laudantium quae, iure tempora officiis sapiente
                reprehenderit ad, quos fugiat suscipit impedit assumenda sunt
                laboriosam consectetur pariatur incidunt? Modi, illo aliquam
                error ullam quis voluptate sunt sed reprehenderit!
              </p>
              <a href="#main" className="tm-more-button tm-more-button-welcome">
                Read More
              </a>
            </div>
            <img
              src="/images/table-set.png"
              alt="Table Set"
              className="tm-table-set img-responsive"
            />
          </div>
            </section>
            
            
        <div class="container menus ">
          <section class="tm-section row">
            <div class="col-lg-9 col-md-9 col-sm-8">
              <h2 class="tm-section-header gold-text tm-handwriting-font">
                Variety of Menus
              </h2>
              <h2>Cafe House</h2>
              <p class="tm-welcome-description">
                This is free HTML5 website template from{' '}
                <span class="blue-text">template</span>
                <span class="green-text">mo</span>. Fndimentum rhoncus, sem quam
                semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam
                nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.
                Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien
                ut libero venenatis faucibus. Ettiam sit amet orci eget eros
                faucibus tincidunt.
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

          {/* ===========our menu=============== */}
          <section class="tm-section row">
            <div class="col-lg-12 tm-section-header-container margin-bottom-30">
              <h2 class="tm-section-header gold-text tm-handwriting-font">
                <img src="images/logo.png" alt="Logo" class="tm-site-logo" />{' '}
                Our Menus
              </h2>
              <div class="tm-hr-container">
                <hr class="tm-hr" />
              </div>
            </div>
            <div class="row">
              <div class="col-lg-3 col-md-3">
                <div class="tm-position-relative margin-bottom-30">
                  <nav class="tm-side-menu">
                    <ul>
                      <li>
                        <a href="#" class="active">
                          Affogato
                        </a>
                      </li>
                      <li>
                        <a href="#">Caffè Americano</a>
                      </li>
                      <li>
                        <a href="#">Caffè latte</a>
                      </li>
                      <li>
                        <a href="#">Coffee milk</a>
                      </li>
                      <li>
                        <a href="#">Café mocha</a>
                      </li>
                      <li>
                        <a href="#">Cappuccino</a>
                      </li>
                      <li>
                        <a href="#">Espresso</a>
                      </li>
                      <li>
                        <a href="#">Iced coffee</a>
                      </li>
                      <li>
                        <a href="#">Instant coffee</a>
                      </li>
                      <li>
                        <a href="#">Mocha</a>
                      </li>
                      <li>
                        <a href="#">black coffee</a>
                      </li>
                    </ul>
                  </nav>
                  <img
                    src="/images/vertical-menu-bg.png"
                    alt="Menu bg"
                    class="tm-side-menu-bg"
                  />
                </div>
              </div>
              <div class="tm-menu-product-content col-lg-9 col-md-9">
                <div class="tm-product">
                  <img src="images/menu-1.jpg" alt="Product" />
                  <div class="tm-product-text">
                    <h3 class="tm-product-title">Americano 1</h3>
                    <p class="tm-product-description">
                      Maecenas tempus, tellus eget condimentum rhoncus, sem quam
                      semper libero, sit amet adipiscing sem neque. Red ipsum.
                    </p>
                  </div>
                  <div class="tm-product-price">
                    <a
                      href="#"
                      class="tm-product-price-link tm-handwriting-font"
                    >
                      <span class="tm-product-price-currency">$</span>30
                    </a>
                  </div>
                </div>
                <div class="tm-product">
                  <img src="images/menu-2.jpg" alt="Product" />
                  <div class="tm-product-text">
                    <h3 class="tm-product-title">Americano 2</h3>
                    <p class="tm-product-description">
                      Maecenas tempus, tellus eget condimentum rhoncus, sem quam
                      semper libero, sit amet adipiscing sem neque. Red ipsum.
                    </p>
                  </div>
                  <div class="tm-product-price">
                    <a
                      href="#"
                      class="tm-product-price-link tm-handwriting-font"
                    >
                      <span class="tm-product-price-currency">$</span>20
                    </a>
                  </div>
                </div>
                <div class="tm-product">
                  <img src="images/menu-3.jpg" alt="Product" />
                  <div class="tm-product-text">
                    <h3 class="tm-product-title">Americano 3</h3>
                    <p class="tm-product-description">
                      Maecenas tempus, tellus eget condimentum rhoncus, sem quam
                      semper libero, sit amet adipiscing sem neque. Red ipsum.
                    </p>
                  </div>
                  <div class="tm-product-price">
                    <a
                      href="#"
                      class="tm-product-price-link tm-handwriting-font"
                    >
                      <span class="tm-product-price-currency">$</span>15
                    </a>
                  </div>
                </div>
                <div class="tm-product">
                  <img src="images/menu-4.jpg" alt="Product" />
                  <div class="tm-product-text">
                    <h3 class="tm-product-title">Americano 4</h3>
                    <p class="tm-product-description">
                      Maecenas tempus, tellus eget condimentum rhoncus, sem quam
                      semper libero, sit amet adipiscing sem neque. Red ipsum.
                    </p>
                  </div>
                  <div class="tm-product-price">
                    <a
                      href="#"
                      class="tm-product-price-link tm-handwriting-font"
                    >
                      <span class="tm-product-price-currency">$</span>25
                    </a>
                  </div>
                </div>
                <div class="tm-product">
                  <img src="images/menu-5.jpg" alt="Product" />
                  <div class="tm-product-text">
                    <h3 class="tm-product-title">Americano 5</h3>
                    <p class="tm-product-description">
                      Maecenas tempus, tellus eget condimentum rhoncus, sem quam
                      semper libero, sit amet adipiscing sem neque. Red ipsum.
                    </p>
                  </div>
                  <div class="tm-product-price">
                    <a
                      href="#"
                      class="tm-product-price-link tm-handwriting-font"
                    >
                      <span class="tm-product-price-currency">$</span>45
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
};

export default Menu;