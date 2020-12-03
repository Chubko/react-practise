import React, {Component} from 'react';
import WomanComponent from "./Woman Component";
import './Style.css'

class WomenComponent extends Component {

    render() {
        let {women}=this.props;
        return (
            <div className={'display'}>
                {women.map(value =>
                    <WomanComponent item={value} key={value.id}/>
                )}
            </div>
        );
    }
}

export default WomenComponent;