import React, { Component, Fragment } from "react"

import api from "api"
import debounce from "debounce"

import { ListGroup, Spinner } from "reactstrap"
import SearchBar from "components/SearchBar"
import LoadMoreButton from "components/LoadMoreButton"
import RepositoryItem from "components/RepositoryItem"

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL

class RepositoriesList extends Component {
  state = {
    totalCount: 0,
    repositories: [],
    isLoading: false,
  }

  componentDidMount() {
    this.setDefaults()
  }

  setDefaults = () => {
    this.page = 1
  }

  queryRepositories = () => {
    api({
      href: `${API_BASE_URL}/repositories`,
      method: "GET",
      data: { query: this.query, page: this.page },
    }).then(({ data: { total_count, items } }) => {
      this.setState({
        totalCount: total_count,
        repositories: this.page > 1 ? [...this.state.repositories, ...items ] : items,
        isLoading: false,
      })
    }).catch(() => {
      this.setState({ isLoading: false })
    })
  }

  onSearchInputChange = debounce(query => {
    this.setState({ isLoading: true })
    this.query = query.trim()
    this.setDefaults()
    this.queryRepositories()
  }, 1000)

  onLoadMore = () => {
    this.setState({ isLoading: true })
    this.page++
    this.queryRepositories()
  }
  
  render() {
    const { repositories, totalCount, isLoading } = this.state

    return <Fragment>
      <SearchBar onChange={this.onSearchInputChange}/>
      <ListGroup>
        {
          repositories.map(({ id, name, description, language, stars, license }) => (
            <RepositoryItem
              key={id}
              id={id}
              name={name}
              stars={stars}
              language={language}
              license={license}
              description={description}/>
          ))
        }
      </ListGroup>
      { totalCount > repositories.length &&
        <div className="text-center">
          <LoadMoreButton onClick={this.onLoadMore} isLoading={isLoading}/>
        </div> }
      { isLoading && totalCount === 0 && <div className="text-center"><Spinner color="primary"/></div> }
    </Fragment>
  }
}

export default RepositoriesList
