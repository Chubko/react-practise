import React, {Component} from 'react';
import ManComponent from "./Man Component";
import './Style.css'

class MenComponent extends Component {

    render() {
        let {men}=this.props;
        return (
            <div className={'display'}>
                {men.map(value =>
                    <ManComponent item={value} key={value.id}/>
                )}
            </div>
        );
    }
}

export default MenComponent;