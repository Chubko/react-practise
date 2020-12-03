import React, {Component} from 'react';
import MenComponent from "./Men Component";
import WomenComponent from "./Women Component";
import MarriedCouples from "./Married Couples";

class AllPeople extends Component {
    state = {
        men: [
            {id: 1, name: 'Ivan', age: 30, wife_id: 5},
            {id: 2, name: 'Dima', age: 28, wife_id: 10},
            {id: 3, name: 'Kolya', age: 30, wife_id: 6},
            {id: 4, name: 'Vasya', age: 34, wife_id: 1},
            {id: 5, name: 'Igor', age: 30, wife_id: 3},
            {id: 6, name: 'Maks', age: 32, wife_id: 8},
            {id: 7, name: 'Nazar', age: 25, wife_id: 9},
            {id: 8, name: 'Vova', age: 20, wife_id: 2},
            {id: 9, name: 'Taras', age: 21, wife_id: 4},
            {id: 10, name: 'Petro', age: 27, wife_id: 7},
        ],
        women: [
            {id: 1, name: 'Ira', age: 21, husband_id: 3},
            {id: 2, name: 'Nastya', age: 28, husband_id: 10},
            {id: 3, name: 'Galya', age: 30, husband_id: 6},
            {id: 4, name: 'Marta', age: 31, husband_id: 1},
            {id: 5, name: 'Inna', age: 32, husband_id: 5},
            {id: 6, name: 'Anna', age: 22, husband_id: 2},
            {id: 7, name: 'Olena', age: 25, husband_id: 9},
            {id: 8, name: 'Katya', age: 20, husband_id: 8},
            {id: 9, name: 'Tanya', age: 21, husband_id: 7},
            {id: 10, name: 'Toma', age: 27, husband_id: 4},
        ],
        couples: []
    }

    showCouples = () => {
        const array = [];

        this.state.men.forEach(m => {
            this.state.women.forEach(w => {
                if(m.wife_id === w.id && m.id === w.husband_id) {
                    array.push([m,w])
                }
            })
        })

        this.setState({couples: array})
    }
    render() {
        return (
            <div>
                <MenComponent men={this.state.men}/>
                <WomenComponent women={this.state.women}/>
                <MarriedCouples couples={this.state.couples}/>
                <button onClick={this.showCouples}>Show couples</button>
            </div>
        );
    }
}

export default AllPeople;