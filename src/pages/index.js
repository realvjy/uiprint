import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="All posts" />
        <section className="hero_section">
          <div className="container">
            <div className="hero_wrapper">
              <div className="text_detail">
                <h1>
                  <small>Get printable</small>
                  wireframes, mockup and sketchpads
                </h1>
                <p>
                  If you love to draw your idea on paper and want some good sketchpad templates to speed up your creative process. Grab UIPRINTS.
                </p>
                <div className="buttons">
                  <ul className="links">
                    <li className="pad-r24">
                      <a href="https://github.com/realvjy/uiprint/releases/download/v1.0/uiprint-iphone-2up-extended@A4.pdf.zip" className="btn btn-color">Download all</a>
                    </li>
                    <li>
                      <a href="https://github.com/realvjy/uiprint" className="btn btn-outline"> WIP 😀</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="hero_media">
                <img src="/uiprint-illustration.png" />
              </div>
            </div>
          </div>
        </section>

      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
