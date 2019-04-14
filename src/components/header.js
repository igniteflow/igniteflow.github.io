import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import typography from "../utils/typography"

const Header = ({ siteTitle }) => (
  <header>
    <style>{typography.toString()}</style>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
