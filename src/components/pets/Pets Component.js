import React, {Component} from 'react';
import PetComponent from "./Pet Component";

class PetsComponent extends Component {
    pets = [
        {animal: 'dog', name: 'MyKhtar'},
        {animal: 'cat', name: 'Tom'},
        {animal: 'hamster', name: 'Vaska'}
    ]
    render() {
        return (
            <div>
                {
                    this.pets.map(((value, index) => {
                        return (<PetComponent item={value} key={index}/>)
                    }))
                }
            </div>
        );
    }
}

export default PetsComponent;