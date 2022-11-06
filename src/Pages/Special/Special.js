import React from 'react';
import Hero from './../../components/Hero/Hero';
import './Special.css'
import data from '../../components/Data/Data'

const Special = () => {
  console.log(data);
    return (
      <>
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
                &nbsp;Today's Special&nbsp;&nbsp;
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

        {/* popular menu  */}
        <div class="container menu">
          <section class="tm-section tm-section-margin-bottom-0 row mt-5">
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
                    <p>{data.desc}</p>
                    <div class="order-now-container">
                      <a href="#" class="order-now-link tm-handwriting-font">
                        Order Now
                      </a>
                    </div>
                  </div>
                </div>
              ))}

              {/* ============= */}
            </div>
          </section>
        </div>
      </>
    );
};

export default Special;