import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

class AllPrintable extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="UIPrint > All Mockups " />
        <section className="all-wrapper">
          <div className="mock-section container">
            {posts.map(({ node }) => {
              const title = node.frontmatter.title || node.fields.slug
              return (
                <div className="mock-wrap">
                  <article key={node.fields.slug} className="mocks">
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
                </div>
              )
            })}

          </div>

        </section>
        <section className="download-all">
        <div className="explore-all">
          <h2>Download all 10+ printable wireframes and sketchpads</h2>
          <a href="https://github.com/realvjy/uiprint/releases/download/v1.0/final-realease-v1-pdf.zip" className="btn btn-color">Download all</a>
        </div>
        </section>
      </Layout>
    )
  }
}
export default AllPrintable

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
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
`
