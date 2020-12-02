import React, {Component} from 'react';
import './Pets.css'

class PetComponent extends Component {
    render() {
        let {item}=this.props;
        return (
            <h3 className={'pet'}>{item.animal}-{item.name}</h3>
        );
    }
}

export default PetComponent;