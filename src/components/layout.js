import React from "react"
import { Link } from "gatsby"

import "./layout.scss"

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header = (
      <nav className="container">
        <Link to={`/`} >
          {title}
        </Link>
        <ul className="links">
          <li className="btn btn-color">
            <Link to={`/`}>Download all</Link>
          </li>
          <li className="btn btn-outline">
            <Link to={`/`}>Explore all</Link>
          </li>
        </ul>
      </nav>
    )
    return (
      <div className="uiprint_main">
        <header>{header}</header>
        <main className="container">{children}</main>
        <footer className="container">
          <h3>Design and dev <a href="https://vijayverma.co">vijay verma.</a></h3>
        </footer>
      </div>
    )
  }
}

export default Layout
