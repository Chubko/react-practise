import React, {Component} from 'react';
import './Country.css'

class CountryComponent extends Component {
    render() {
        let {item} = this.props;
        return (
            <h3 className={'country'}>{item.country}-{item.capital}</h3>
        );
    }
}

export default CountryComponent;