import React, {Component} from 'react';
import MarriedCouple from "./Married Couple";

class MarriedCouples extends Component {

    render() {
        let {couples}=this.props;
        return (
            <div className={'display'}>
                {couples.map(value =>
                    <MarriedCouple item={value} key={value.id}/>
                )}
            </div>
        );
    }
}

export default MarriedCouples;