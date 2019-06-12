
import React from 'react';
import { Link } from 'react-router-dom'
import { Label } from './Label'

export default class Posts extends React.Component {

  state = {
    posts: []
  }

  render() {
    const { posts } = this.state
    return (
      <div className="post">
        <Label />
        <div className="about">
          {posts.map((item, index) => {
            const { id, data: { title, date } } = item
            const postTitle = title[0].text
            const postDate = date
           return (
             <div key={index}>
                <Link to={`post/${id}`}><h2>{postTitle}<span>{postDate}</span></h2></Link>
             </div>
           )
          })}
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
      this.setState({
        posts: results
      })
    });
  }
}