import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';

class Comment extends Component {
    render() {
        let{match:{url},item}=this.props;

        return (
            <div>
                {item.id}-{item.name}
            </div>
        )
    }
}

export default withRouter(Comment);