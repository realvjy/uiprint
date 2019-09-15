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
                  Get printable grids, wireframes & sketchpads.
                </h1>
                <p>
                  If you love to draw your idea on paper and want some good sketchpad templates to speed up your creative process. Grab UIPRINTS.
                </p>
                <div className="buttons">
                  <ul className="links">
                    <li className="btn btn-color">
                      <Link to={`/`}>Download all</Link>
                    </li>
                    <li className="btn btn-outline">
                      <Link to={`/`}>Explore all</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <article key={node.fields.slug}>
            <div>
                <header>
                  <h3>
                    <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                      {title}
                    </Link>
                  </h3>
                  <small>{node.frontmatter.date}</small>
                </header>
                <section>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: node.frontmatter.description || node.excerpt,
                    }}
                  />
                </section>
              </div>
            </article>
          )
        })}
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
