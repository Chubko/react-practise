import React, {Component} from 'react';

class MarriedCouple extends Component {
    render() {
        let{item}=this.props;
        return (
            <div>
                {
                    item.map(obj => <p>{obj.name}</p>)
                }
                <hr/>
            </div>
        );
    }
}

export default MarriedCouple;