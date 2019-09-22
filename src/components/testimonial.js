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
              <img src="/vjy.png"/>
              <div className="txt">
                <h3>Danial Verma</h3>
                <h5>Founder @uigate</h5>
              </div>
            </div>
            <p>Demo Text So smooth and simple you would like to lick it!</p>
          </div>
        </div>
        <div className="testi">
          <div className="t-w">
            <div className="user-info">
              <img src="/vjy.png"/>
              <div className="txt">
                <h3>Danial Verma</h3>
                <h5>Founder @uigate</h5>
              </div>
            </div>
            <p>Demo Text So smooth and simple you would like to lick it!</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonial
