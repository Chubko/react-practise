import React, {Component} from 'react';
import CityComponent from "./City Component";

class CitiesComponent extends Component {
    cities = [
        {name: 'Lviv', population: 1000000, country: 'Ukraine', region:
    'Lvivska  obl.'},
        {name: 'Kyiv', population: 4000000, country: 'Ukraine', region:
    'Kyivska obl.'},
        {name: 'Luck', population: 270000, country: 'Ukraine', region:
    'Volynska obl.'},
        {name: 'Rivne', population: 290000, country: 'Ukraine', region:
    'Rivnenska obl.'},
        {name: 'Ternopil', population: 250000, country: 'Ukraine', region:
    'Ternopilska obl.'}
    ];
    render() {
        return (
            <div>
                {
                    this.cities.map(((value, index) => {
                        return <CityComponent item = {value} key = {index}/>
                    }))
                }
            </div>
        );
    }
}

export default CitiesComponent;