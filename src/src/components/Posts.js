
import React from 'react'
import ReactPaginate from 'react-paginate'
import Prismic from 'prismic-javascript'
import { Link } from 'react-router-dom'
import { Label } from './Label'
import { formatDate } from '../utils'

export default class Posts extends React.Component {

  state = {
    posts: [],
    pageCount: 0,
    perPages: 0,
    offset: 0
  }

  render() {
    const { posts } = this.state
    return (
      <div className="post">
        <Label />
        <div className="about">
          <ul className="post__blog-list">
            {posts.map((item, index) => {
              const { id, data: { title, date } } = item
              const postTitle = title[0].text
              const postDate = date ? formatDate(date) : ''
              return (
                <li key={index}>
                  <Link to={`post/${id}`}><h2>{postTitle}<span>{postDate}</span></h2></Link>
                </li>
              )
            })}
          </ul>
        </div>
        <ReactPaginate
          previousLabel={''}
          nextLabel={''}
          breakLabel={'...'}
          breakClassName={'break-me'}
          pageCount={this.state.pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={this.handlePageClick}
          containerClassName={'pagination'}
          subContainerClassName={'pages pagination'}
          activeClassName={'active'}
        />
      </div>
    )
  }

  handlePageClick = data => {
    let selected = data.selected
    let offset = Math.ceil(selected / this.state.perPages) + 1
    this.setState({ offset }, () => {
      this.loadCommentsFromServer()
    })
  }

  loadCommentsFromServer() {
    const apiEndpoint = 'https://kiwako-kaneda.prismic.io/api/v2';
    Prismic.api(apiEndpoint).then(api => {
      api.query(
        Prismic.Predicates.at('document.type', 'posts'),
        {
          pageSize : 10,
          page : this.state.offset,
          orderings : '[document.last_publication_date desc]'
        }
      ).then(response => {
        if (response) {
          const { results, total_pages, results_per_page } = response
          this.setState({
            posts: results,
            pageCount: total_pages,
            perPages: results_per_page
          })
        }
      })
    })
  }

  componentDidMount() {
    this.loadCommentsFromServer()
  }
}