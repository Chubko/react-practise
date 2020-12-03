import React, {Component} from 'react';
import CitiesComponent from "./components/cities/Cities Component";
import CarsComponent from "./components/cars/Cars Component";
import UsersComponent from "./components/users/Users Component";
import CountriesComponent from "./components/countries/Countries Component";
import PetsComponent from "./components/pets/Pets Component";
import AllUsersComponent from "./components/All Users Component/All Users Component";
import AllPeople from "./components/people/All people";

class App extends Component {

    render() {
        return(
            <div>
                {/*<CarsComponent/>*/}
                {/*<CitiesComponent/>*/}
                {/*<UsersComponent/>*/}
                {/*<CountriesComponent/>*/}
                {/*<PetsComponent/>*/}
                {/*<AllUsersComponent/>*/}
                <AllPeople/>
            </div>
    )
    }
}

export default App;