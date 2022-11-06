import React from 'react';
import './Contact.css'

const Contact = () => {
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
                &nbsp;Contact Us&nbsp;&nbsp;
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
                Message us
              </a>
            </div>
            <img
              src="/images/table-set.png"
              alt="Table Set"
              className="tm-table-set img-responsive"
            />
          </div>
        </section>

        <div class="menu">
          <div class="tm-main-section light-gray-bg">
            <div class="container" id="main">
              <section class="tm-section ">
                <h2 class="col-lg-12 margin-bottom-30">Send us a message</h2>
                <form action="#" method="post" class="tm-contact-form">
                  <div class="row">
                    <div class="col-lg-6 col-md-6">
                      <div class="form-group">
                        <input
                          type="text"
                          id="contact_name"
                          class="form-control"
                          placeholder="NAME"
                        />
                      </div>
                      <div class="form-group">
                        <input
                          type="email"
                          id="contact_email"
                          class="form-control"
                          placeholder="EMAIL"
                        />
                      </div>
                      <div class="form-group">
                        <input
                          type="text"
                          id="contact_subject"
                          class="form-control"
                          placeholder="SUBJECT"
                        />
                      </div>
                      <div class="form-group">
                        <textarea
                          id="contact_message"
                          class="form-control"
                          rows="6"
                          placeholder="MESSAGE"
                        ></textarea>
                      </div>
                      <div class="form-group">
                        <button
                          class="tm-more-button"
                          type="submit"
                          name="submit"
                        >
                          Send message
                        </button>
                      </div>
                    </div>
                    <div class="col-lg-6 col-md-6">
                      <div id="google-map">
                       
                        <iframe
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9914406082125!2d2.292292615902954!3d48.85837360866151!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca9ee380ef7e0!2sEiffel%20Tower!5e0!3m2!1sen!2sbd!4v1659181450358!5m2!1sen!2sbd"
                          width="100%"
                          height="350"
                          style={{border:0}}
                          allowfullscreen=""
                          loading="lazy"
                          referrerpolicy="no-referrer-when-downgrade"
                        ></iframe>
                      </div>
                    </div>
                  </div>
                </form>
              </section>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Contact;