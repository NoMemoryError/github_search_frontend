import React from "react"
import PropTypes from "prop-types"

import { Input } from "reactstrap"

const PROPTYPES = {
  onChange: PropTypes.func,
}

const SearchBar = ({ onChange }) => (
  <Input
    className="text-center"
    placeholder="Github repositories search 🕵🏻‍♂️"
    onChange={event => onChange(event.target.value)}/>
)

SearchBar.propTypes = PROPTYPES

export default SearchBar
