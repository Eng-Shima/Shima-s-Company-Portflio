import React from 'react'

const FourthSec = () => {
  return (
    <>
      <section className='homesec4' id='process' >
          <img src="images/623506fac432155edb494f48_Topology-2%20(1).svg" alt="" className="waves" />
          <h3>How it's done.</h3>

          {/* نكرر الديف ده 4 مرات لان فيه 4 مستطيلات في الشاشة */}
          <div className='divLeft wow fadeInUp' data-wow-duration="2s" data-wow-delay="0.1s" >
            <img src="images/6232406724bd9b36622aed48_image 3 (Traced).svg" alt="" />
            <div>
              <h5>UX/UI Design</h5>
              <p>Where concepts turn into a strategic user-experience.</p>
            </div>
          </div>

          <div className="divRight wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.5s">
              <img src="images/623240674411e07510215b6f_image 2 (Traced).svg" alt="" />
              <div>
                <h5>Webflow Development</h5>
                <p>Where design turns into code.</p>
              </div>
          </div>

          <div className="divLeft wow fadeInUp" data-wow-duration="2s" data-wow-delay="1s">
            <img src="images/6296648937731de4e98d9a5a_zapier-seeklogo.com 2.svg" alt="" />
            <div>
              <h5>System Automation</h5>
              <p>Where busywork gets delegated.</p>
            </div>
          </div>

          <div className="divRight wow fadeInUp" data-wow-duration="2s" data-wow-delay="1.5s">
            <img src="images/62324067d42bfc263ee547ff_image 4 (Traced).svg" alt="" />
            <div>
              <h5>SEO</h5>
              <p>Where customers come flooding in.</p>
            </div>
            
          </div>
      </section>

    </>
  )
}

export default FourthSec