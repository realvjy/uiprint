/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"


const Featured = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
      allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: DESC }
        filter: { frontmatter: { featured: { eq: true } } }
        limit: 2
      ) {
        edges {
          node {
            excerpt(format: HTML)
            html
            fields {
              slug
            }
            frontmatter {
              date(formatString: "MMMM DD, YYYY")
              title
              description
              author
              category
              image{
                childImageSharp {
                  fluid {
                    src
                  }
                }
              }
            }
          }
        }
      }
    }
  `)
  const posts = data.allMarkdownRemark.edges
  return (
    <div className="featured-wrapper container">
    {posts.map(({ node }) => {
      const title = node.frontmatter.title || node.fields.slug
      return (
        <article key={node.fields.slug} className="featured-mock">
        <div className="mockup-thumb-wrap">
          <div className="thumb">
            <img src={node.frontmatter.image.childImageSharp.fluid.src} />
          </div>
        </div>
        <div className="mockup-detail-wrap">
          <div className="mockup-detail">
            <h2>
            {title}
            </h2>
            <p>{node.frontmatter.description}</p>
            <div className="dwn-links">
              <button className="download_button">
                Download
              </button>
              <ul dangerouslySetInnerHTML={{ __html: node.excerpt }} className="dwn-list"/>
            </div>
          </div>
        </div>
        </article>
      )
    })}
      <div className="explore-all">
        <h2>More than 10+ printable wireframes and sketchpads</h2>
        <a href="/all-printable" className="btn btn-line">Explore all</a>
      </div>

    </div>
  )
}

export default Featured
