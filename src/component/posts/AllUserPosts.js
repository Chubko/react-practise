import React, {Component} from 'react';
import {PostService} from "../services/PostService";
import Post from "./Post";


class AllUserPosts extends Component {
    postService = new PostService();

    state = {
        posts:[], selectedPost:null
    }
    async componentDidMount() {
        let posts = await this.postService.getAllPosts();
        this.setState({posts});
    }

    showPost=(id)=>{
        this.postService.getAllUserPosts(id)
            .then(value => this.setState({selectedPost:value}))
    }

    // async componentDidMount() {
    //     const { id } = this.props.match.params;
    //
    //     let posts = await this.postService.getAllUserPosts(id);
    //
    //     this.setState({
    //         posts
    //     });
    // }

    render() {
        let { posts }=this.state;
        const { id } = this.props.match.params;
        console.log(posts)

        return (
            <div>
                {
                    posts.map(value => <Post item={value} key={value.id} showPost={this.showPost}/>)
                }
            </div>
        );
    }
}

export default AllUserPosts;