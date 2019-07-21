import React from "react"
import PropTypes from "prop-types"

import { ListGroupItem, ListGroupItemHeading, ListGroupItemText, Badge } from "reactstrap"

const PROPTYPES = {
  name: PropTypes.string,
  description: PropTypes.string,
  stars: PropTypes.number,
  license: PropTypes.object,
  language: PropTypes.string,
}

const RepositoryItem = ({ name, language, stars, description, license }) => (
  <ListGroupItem>
    <ListGroupItemHeading className="btn-link">
      { name}
    </ListGroupItemHeading>
    <ListGroupItemText>
      { description }
    </ListGroupItemText>
    <ListGroupItemText className="item-footer">
      <div className="footer-badges">
        <Badge color="info" pill>{stars} ★</Badge>
        <Badge color="info" pill>{language}</Badge>
      </div>
      <small className="text-muted">{license && license.name}</small>
    </ListGroupItemText>
  </ListGroupItem>
)

RepositoryItem.propTypes = PROPTYPES
export default RepositoryItem
