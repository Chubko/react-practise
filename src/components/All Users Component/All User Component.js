import React, {Component} from 'react';

class AllUserComponent extends Component {
    render() {
        let {item, selectUser} = this.props
        return (
            <div>
                {item.id}-{item.name}
                <button onClick={()=>selectUser(item.id)}>Chose me</button>
            </div>
        );
    }
}

export default AllUserComponent;