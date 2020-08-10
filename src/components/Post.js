import React, { Component } from 'react'

import { connect } from 'react-redux';
import { deletePost } from '../actions/postActions'

class Post extends Component {
         
  handleClick = () => {
    // alert('abcd')
    this.props.deletePost(this.props.posts.id);
    this.props.history.push('/')
  }
  render() {

    console.log("this.props.post ->",this.props )
    const posts = this.props.posts ? (
      
        <div className='post'>
            <h4 className='center'>{this.props.posts.title}</h4>
                                  <p>{this.props.posts.body}</p>
            <button className='btn grey' onClick={() => this.handleClick()}>
              Delete Post
            </button>
        </div>
    ) : (
        <div className='center'> Loading post.. </div>
    )

    return (
      <div className='container home'>
        {posts}
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  let id = ownProps.match.params.post_id;
  console.log("this.TYPEOF.post ->",typeof id )

  return {
      posts: state.posts.find(posts => posts.id === Number(id))
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deletePost: (id) => {dispatch(deletePost(id))}
  }  
}

export default connect(mapStateToProps,mapDispatchToProps)(Post);