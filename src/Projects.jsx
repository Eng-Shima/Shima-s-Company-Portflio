import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import axios from 'axios'
import Footer from './Footer'

const Projects = () => {

  // 1- state with an empty array
  const [projects , setProjects] = useState([]);

  // 2- calling api through axios inside useEffect
  useEffect(() => {
    axios.get("data.json")
    .then ((res) => {
      setProjects(res.data.projects);
    })
  }, []);

  return (
    <>
      <section className="allprojectsec">
          <h3 className="wow fadeIn" data-wow-duration="2s" data-wow-delay="1s"> All Projects </h3>
          <img src="images/623503637e979197919c6c03_Topology-1 (1).svg" className="waves" alt="" />
          
          <Container>
              <Row>
                  {projects.map((project) => (
                      <Col md={4} sm={12} key={project.id}>
                          <div className="wow fadeInUp" data-wow-duration="2s" data-wow-delay="1s" >
                              <img src={project.photo} alt="" />
                              <h5>{project.title}</h5>
                              <p>{project.description}</p>
                              <a href={project.link} target="{_blank}"> View </a>
                          </div>
                      </Col>
                  ))}
              </Row>
          </Container>
      </section>

      <Footer />
    </>
  );
}

export default Projects