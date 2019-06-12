
import React from 'react';

export default class Post extends React.Component {

  state = {
    post: {
      title: '',
      date: '',
      contents: ''
    }
  }

  render() {
    const { post: { title, date, contents } } = this.state
    const postTitle = title && title[0].text
    const postDate = date
    const postContents = contents && contents[0].text
    return (
      <div className="post">
        <div className="about">
          <h2>{postTitle}</h2>
        </div>
      </div>
    )
  }

  componentDidMount() {
    fetch('https://kiwako-kaneda.prismic.io/api/v2/documents/search?ref=XQAzAhIAAFM7imjV#format=json')
    .then(response => {
      return response.json();
    })
    .then(myJson => {
      const { results } = myJson
      const blogId = window.location.pathname.replace('/post/', '')
      const currentBlog = myJson && results.find(item => item.id === blogId)
      const { data: { title, date, contents } } = currentBlog
      this.setState({
        post: {
          title,
          date,
          contents
        }
      })
    });
  }
}