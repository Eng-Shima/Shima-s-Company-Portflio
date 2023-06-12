import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';

// Import Swiper components - fixed line 
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper modules - changeable line { FreeMode, Pagination } could be changed dependes on the selected shape.
import { FreeMode, Pagination } from "swiper";


// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
// the last 2 lines are changeable ( /free-mode , /pagination) could be changed dependes on the selected shape.


const Thirdsec = () => {

  // 1- state with an empty array [] to get the projects from the json file
  const [projects, setProject] = useState([]);

  // 2- useEffect with axios.get to update the page conetent with the projects
  useEffect (() => {
    axios.get("data.json")
    .then ((res) => {
      setProject(res.data.projects)
    })
  }, [])

  return (
    <>
      <section className="homesec3" id="latest">
      <div className="sectext wow fadeIn" data-wow-duration="2s" data-wow-delay="0.1s">
          <h3>Latest builds.</h3>
          <Link to="/Projects">View Projects</Link>
        </div>

        {/* 3- making map to update the page content inside { } in the swiper - SwiperSlide */}
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              width: 640,
              slidesPerView: 1,
            },
            768: {
              width: 768,
              slidesPerView: 2,
            },
            992: {
              width: 992,
              slidesPerView: 3,
            },
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.5s"
        >
          {projects.slice(0, 6).map((project) => (
            <SwiperSlide key={project.id}>
              <a href={project.link} target='{_blank}'>
                <img src={project.photo} alt="" />
              </a>

              <a href={project.link} target='{_blank}'>
                <h3>{project.title}</h3>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

    </>
  )
}

export default Thirdsec