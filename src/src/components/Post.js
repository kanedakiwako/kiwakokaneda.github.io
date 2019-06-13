
import React from 'react';
import Prismic from 'prismic-javascript';
import { RichText } from 'prismic-reactjs';
import { formatDate } from '../utils'

export default class Post extends React.Component {

  state = {
    data: {}
  }

  render() {
    const { data: { title, date, contents } } = this.state
    const postDate = date ? formatDate(date) : ''
    return (
      <div className="post">
        <div className="post__blog">
          {RichText.render(title)}
          <p>{postDate}</p>
          {RichText.render(contents)}
        </div>
      </div>
    )
  }

  componentDidMount() {

    const apiEndpoint = 'https://kiwako-kaneda.prismic.io/api/v2';
    Prismic.api(apiEndpoint).then(api => {
      api.query(
        Prismic.Predicates.at('document.type', 'posts'),
        { orderings : '[document.last_publication_date desc]' }
      ).then(response => {
        if (response) {
          const { results } = response
          const blogId = window.location.pathname.replace('/post/', '')
          const currentBlog = response && results.find(item => item.id === blogId)
          const { data: { title, date, contents } } = currentBlog
          this.setState({
            data: {
              title,
              date,
              contents
            }
          })
        }
      });
    });
  }
}