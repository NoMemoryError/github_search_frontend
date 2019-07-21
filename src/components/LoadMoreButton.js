import React from "react"
import PropTypes from "prop-types"

import { Button, Spinner } from "reactstrap"

const PROPTYPES = {
  isLoading: PropTypes.bool,
  onClick: PropTypes.func,
}

const LoadMoreButton = ({ isLoading, onClick }) => (
  <Button className="load-more-btn" color="success" onClick={onClick} disabled={isLoading}>
    { isLoading ? <Spinner/> : "Load More" }
  </Button>
)

LoadMoreButton.propTypes = PROPTYPES
export default LoadMoreButton
