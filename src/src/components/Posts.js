
import React from 'react';
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
            const { data: { title, date, contents } } = item
            const postTitle = title[0].text
            const postDate = date
            const postText = contents[0].text
           return (
             <div key={index}>
                <h2>{postTitle}<span>{postDate}</span></h2>
                <p>{postText}</p>
             </div>
           )
          })}
        </div>
      </div>
    )
  }

  componentDidMount() {
    fetch('https://kiwako-kaneda.prismic.io/api/v2/documents/search?ref=XQAzAhIAAFM7imjV#format=html')
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