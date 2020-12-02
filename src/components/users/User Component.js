import React, {Component} from 'react';
import './User.css'

class UserComponent extends Component {
    render() {
        let {item} = this.props;
        return (
            <h4 className={'user'}>{item.name}-{item.age}-{item.status.toString()}</h4>
        );
    }
}

export default UserComponent;