import React, {Component} from 'react';
import './City.css'

class CityComponent extends Component {
    render() {
        const {item} = this.props;
        return (
            <h4 className={'city'}>{item.name}-{item.population}</h4>
        );
    }
}

export default CityComponent;