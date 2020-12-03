import React, {Component} from 'react';

class ManComponent extends Component {
    render() {
        let {item}=this.props;
        return (
            <div>
                {item.id}-{item.name}-{item.age}-{item.wife_id}
            </div>
        );
    }
}

export default ManComponent;