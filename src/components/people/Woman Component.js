import React, {Component} from 'react';


class WomanComponent extends Component {

    render() {
let {item}=this.props;
        return (
            <div>
                {item.id}-{item.name}-{item.age}-{item.husband_id}
            </div>
        );
    }
}

export default WomanComponent;