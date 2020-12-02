import React, {Component} from 'react';
import CarComponent from "./Car Component";

class CarsComponent extends Component {
    cars = [
        {model: 'Audi', yearOfManufacture: 2018, power: '2.0', color: 'gray'},
        {model: 'BMV', yearOfManufacture: 2019, power: '2.2', color: 'red'},
        {model: 'Citroen', yearOfManufacture: 2015, power: '1.6', color: 'white'},
        {model: 'Reno', yearOfManufacture: 2010, power: '2.0', color: 'blue'},
        {model: 'Seat', yearOfManufacture: 2018, power: '1.2', color: 'gray'},
        {model: 'Jeep', yearOfManufacture: 2020, power: '2.5', color: 'black'},
        {model: 'Mercedes', yearOfManufacture: 2018, power: '2.0', color: 'brown'},
        {model: 'Ford', yearOfManufacture: 2028, power: '1.4', color: 'green'},
        {model: 'Lanos', yearOfManufacture: 2008, power: '1.2', color: 'gray'},
        {model: 'Skoda', yearOfManufacture: 2018, power: '2.0', color: 'red'}];
    render() {
        return (
            <div>
                {
                    this.cars.map((value, index) => {
                        return (<CarComponent item = {value} key = {index}/>)
                    })
                }
            </div>
        );
    }
}

export default CarsComponent;