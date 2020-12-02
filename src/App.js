import React, {Component} from 'react';
import CitiesComponent from "./components/cities/Cities Component";
import CarsComponent from "./components/cars/Cars Component";
import UsersComponent from "./components/users/Users Component";
import CountriesComponent from "./components/countries/Countries Component";
import PetsComponent from "./components/pets/Pets Component";

class App extends Component {

    render() {
        return(
            <div>
                <CarsComponent/>
                <CitiesComponent/>
                <UsersComponent/>
                <CountriesComponent/>
                <PetsComponent/>
            </div>
    )
    }
}

export default App;