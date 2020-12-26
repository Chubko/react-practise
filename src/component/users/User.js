import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';

class User extends Component {
    render() {
        let{match:{url},item}=this.props;
        let color = '#' + (Math.random().toString(16) + '000000').substring(2,8).toUpperCase();
        return (
            <div style={{backgroundColor:color}}>
                {item.id}-{item.name}-<Link to={`${url}/${item.id}`}>show post</Link>
            </div>
        );
    }
}

export default withRouter(User);