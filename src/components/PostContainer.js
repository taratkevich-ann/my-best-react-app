import React from 'react'
import {connect} from 'react-redux'

import {getPosts} from "../actions/post";

class Post extends React.Component {

    render() {
        const {isLoading, posts, getPosts} = this.props
        return (
            <div>
                <h2>Homework</h2>
                <button onClick={getPosts}>Click to get posts</button>
                {
                    isLoading ? (
                        <h2>Loading...</h2>
                    ) : (
                        posts.map((item) => (
                            <div key={item.id}>
                                <h2>{item.title}</h2>
                                <p>{item.body}</p>
                            </div>
                        ))
                    )
                }
            </div>
        )
    }
}


const mapStateToProps = (state) => ({
    isLoading: state.postReducer.isLoading,
    posts: state.postReducer.posts
})

const mapDispatchToProps = {
    getPosts: getPosts
}

export const PostContainer = connect(mapStateToProps, mapDispatchToProps)(Post)