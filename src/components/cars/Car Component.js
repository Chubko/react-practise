import React, {Component} from 'react';
import './Car.css'

class CarComponent extends Component {
    render() {
        let {item} = this.props;
        return (
                <h3 className={'car'}>{item.model}-{item.color}</h3>
        );
    }
}

export default CarComponent;