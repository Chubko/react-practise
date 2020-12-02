import React, {Component} from 'react';
import CountryComponent from "./Country Component";

class CountriesComponent extends Component {
    countries = [
        {country: 'Ukraine', capital:'Kyiv'},
        {country: 'Poland', capital:'Warshaw'},
        {country: 'Hungary', capital:'Budapesht'},
        {country: 'Bilorus', capital:'Minsk'}
    ]
    render() {
        return (
            <div>
                {
                    this.countries.map(((value, index) => {
                    return(<CountryComponent item = {value} key = {index}/>)
                }))
                }
            </div>
        );
    }
}

export default CountriesComponent;