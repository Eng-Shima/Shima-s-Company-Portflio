import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const SecondSec = () => {
  return (
    <>
      {/* start second section */}
      <section className="homesec2">
        <Container>
          <Row>
            <Col md={6} sm={12} className="wow slideInLeft" data-wow-duration="2s" data-wow-delay="0.3s">
                <div className="secimgs">
                  <img src="images/623506fac432155edb494f48_Topology-2 (1).svg" alt="" className="waves" />
                  <img src="images/6297dd8a74746c61110b1aaa_undraw_team_collaboration_re_ow29 1 (2).svg" alt="" className="people" />
                </div>
              </Col>
              
              <Col md={6} sm={12} className="sec2text wow slideInRight" data-wow-duration="2s" data-wow-delay="0.1s">
                <button>the dream</button>
                <p>Imagine having your sales team on the job 24/7, interacting with an endless stream of ready-to-buy visitors.</p>
              </Col>
          </Row>
        </Container>
      </section>
      {/* end second section  */}
    </>
  )
}

export default SecondSec