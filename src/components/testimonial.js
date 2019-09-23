/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

const Testimonial = () => {

  return (
    <div className="testimonial-wrapper container">
      <h1>What designers are saying</h1>
      <div className="testi-box">
        <div className="testi">
          <div className="t-w">
            <div className="user-info">
              <img src="/misaac.png"/>
              <div className="txt">
                <h3><a href="https://www.instagram.com/misaac85/" target="__blank">Miriam Isaac</a></h3>
                <h5>UX Designer</h5>
              </div>
            </div>
            <p>These templates will be an invaluable resource to any UX project. Giving you the ability to quickly wireframe your ideas and produce rapid prototypes.</p>
          </div>
        </div>
        <div className="testi">
          <div className="t-w">
            <div className="user-info">
              <img src="/darshan.png"/>
              <div className="txt">
                <h3><a href="https://twitter.com/WeirdoWizard" target="__blank">Darshan Gajara</a></h3>
                <h5>Founder <strong>@ProductDisrupt</strong></h5>
              </div>
            </div>
            <p>These mockups are really helpful to quickly sketch out an idea or a wireframe and get feedback from the stakeholders. Having our sketches drawn out on in a device helps to put things in perspective.</p>
          </div>
        </div>
        <div className="testi">
          <div className="t-w">
            <div className="user-info">
              <img src="/vikas.png"/>
              <div className="txt">
                <h3><a href="https://twitter.com/Vraj247" target="__blank">Vikas Raj Yadav</a></h3>
                <h5>UX Designer <strong>@Paytm</strong></h5>
              </div>
            </div>
            <p>If a picture is worth 1000 words, a prototype is worth 1000 meetings. So what would be the worth of a predefined wireframe kit which has printed dotes and phones on. Also, you can print on any paper, are you kidding me? Hell yeah, let's bring it. Hey you young guns out there, You'll be going to start loving the first process of UX i.e paper wireframes.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonial
