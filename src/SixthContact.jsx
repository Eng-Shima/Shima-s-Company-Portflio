// sixth section - send email - contact us

import React, { useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import emailjs from '@emailjs/browser';


// const الكونست الاصليه
const SixthContact = () => {

  // دي بتكون في الاسطمبه الجاهزه من المكتبه - بتتحط بين الكونست و الريترن عشان مربوطه تحت بالفورم
  const form = useRef();

  // دي برضو اسطمبه جاهزه و بتتحط بين الكونست والريترن الاصليين
  const sendEmail = (e) => {
    alert("message sent successfully")
    e.preventDefault();

    emailjs.sendForm('service_2oahwdb', 'template_la5j18d', form.current, 'WakufP5k37Pn20Hkz')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
      e.target.reset()
  };

  return (
    <>
      <section className="homesec6" id="contact">
        <Container>
          <h3 className="wow fadeIn" data-wow-duration="2s" data-wow-delay="0.1s">Contact Us</h3>
          
          <Row className="align-items-center">
              {/* اول عمود من ع الشمال */}
              <Col md={6} sm={12} className="wow slideInLeft" data-wow-duration="2s" data-wow-delay="0.1s">
                <div>
                  <p><span>Email:</span> info@gmail.com</p>
                  <p><span>Phone:</span> 0121133133131</p>
                  <p><span>Address:</span> 23 street newyork</p>
                </div>
              </Col>

              {/*  ثاني عمود من ع الشمال - بحط فيه الفورم جاهزه من الاسطمبة الجاهزه من المكتيه*/}
              <Col md={6} sm={12} className="wow bounceInRight" data-wow-duration="2s" data-wow-delay="0.3s">
                <div>
                  <form ref={form} onSubmit={sendEmail}>
                      {/* اول ديف فيه 2 انبون واخد كلاس دي فليكس عشان يجيب ال 2 انبوت جنب بعض بدل ما يجو تحت بعض عشان ده ديف */}
                      <div className="d-flex">
                        <input type="text" name="name" placeholder="Name" />
                        <input type="text" name="company" placeholder="Company" />
                      </div>

                      {/* ثاني ديف داخل الفورم زي الاولاني بالضبط */}
                      <div className="d-flex">
                        <input type="text" name="mail" placeholder="Email" />
                        <input type="phone" name="phonee" placeholder="Phone" />
                      </div>

                      <textarea name="message" placeholder="Message"></textarea>

                      <button type="submit">Send Message</button>
                  </form>
                </div>
              </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default SixthContact