import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Fifth = () => {
  return (
    <>
      <section className="homesec5" id="service">
        <h2 className=" wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.2s">Why Webflow.</h2>
        <Container>
          <Row>
            <Col md={4} sm={12} className="divRight wow bounceInUp" data-wow-duration="2s" data-wow-delay="0.1s">
              <div>
                <h5>REASON 1</h5>
                <h3>Next-Level Storytelling</h3>
                <img src="images/62966934fc028e3715017571_undraw_mobile_development_re_wwsn 1.svg" alt="" />
                <p>Unleash the best visuals and experiences that modern web design has to offer. Webflow turns your wildest of ideas into strategic customer-experiences.</p>
              </div>
            </Col>

            <Col md={4} sm={12}>
              <div className="divRight wow bounceInUp" data-wow-duration="2s" data-wow-delay="0.3s">
                <h5>REASON 2</h5>
                <h3>Unbelievable Performance</h3>
                <img src="images/62966cbb57bfa16e79fe8406_undraw_data_re_80ws 1 (1).svg" alt="" />
                <p>Hosted on an ultra-fast global CDN, Webflow goes full steam ahead with load speed, uptime, asset optimization, and SEO. All without ever needing to install a patch or upload a server configuration.</p>
              </div>
            </Col>

            <Col md={4} sm={12}>
              <div className="divRight wow bounceInUp" data-wow-duration="2s" data-wow-delay="0.5s">
                <h5>REASON 3</h5>
                <h3>Developer-Free Tweaks</h3>
                <img src="images/62966cd0f71f4f702ab6febd_undraw_asset_selection_re_k5fj 1.svg" alt="" />
                <p>Webflow’s ‘Editor Mode’ allows any team member to update content as they please without wreaking havoc or paying people like us to fix it.</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Fifth