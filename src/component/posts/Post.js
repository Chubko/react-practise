import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';

class Post extends Component {
    render() {
        let{match:{url},item,postId}=this.props;

        return (
            <div>
                {item.id}<Link to={`${url}/${postId}`}>show comment</Link>
            </div>
        );
    }
}

export default withRouter(Post);