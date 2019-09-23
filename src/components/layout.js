import React from "react"
import { Link } from "gatsby"

import "./layout.scss"


class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header = (
      <nav className="container">
        <Link to={`/`} className="brand">
          <img src="/logo.svg" className="logo" />
        </Link>
        <ul className="buttons links">
          <li className="pad-r24">
            <a href="https://github.com/realvjy/uiprint/releases/download/v1.0.1/uiprint-co-v1.0.1.zip" className="btn btn-color">Download all</a>
          </li>
          <li>
            <Link to={`/all-printable`} className="btn btn-outline">Explore all</Link>
          </li>
        </ul>
      </nav>
    )
    return (
      <div className="uiprint_main">
        <header>{header}</header>
        <main className="up_i">{children}</main>
        <footer className="container footer">
          <div className="dev-credit">
          <h3>Design and dev. <a href="https://vijayverma.co">vijay verma.</a> </h3>
          <ul className="scl-lnk">
            <li><a href="https://dribbble.com/realvjy" target="__blank"><img src="/dribbble.svg"/></a></li>
            <li><a href="https://twitter.com/realvjy" target="__blank"><img src="/twitter.svg"/></a></li>
            <li><a href="https://instagram.com/realvjy" target="__blank"><img src="/insta.svg"/></a></li>
          </ul>
          </div>
          <div className="company">
           <h3>Project by <a href="https://dribbble.com/uigate">uigate</a></h3>
          </div>
        </footer>
      </div>
    )
  }
}

export default Layout
