import React, {Component} from 'react';
import AllUserComponent from "./All User Component";
import './All User.css'


class AllUsersComponent extends Component {
    state = {users:[], classState:'one', chosenUser:null}
    flag=false

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(value=>value.json())
            .then(usersFromApi=> {
                this.setState({users: usersFromApi})
            })
    }
    changeColor = ()=>{
        if(this.flag){
            this.setState({classState:'one'})
        }else{
            this.setState({classState:'two'})
        }
        this.flag=!this.flag;
    };
    selectUser=(id)=>{
        let chosenUser=this.state.users.find(value => value.id===id);
        this.setState({chosenUser});
    };



    render() {
        let  {users, classState, chosenUser}=this.state;
        return (
            <div>
                <h2 onClick={this.changeColor} className={classState}>All users</h2>
                {users.map(value=>
                    (<AllUserComponent item={value} key={value.id} selectUser={this.selectUser}/>))
                }
                <hr/>
                {
                    chosenUser && <AllUserComponent item={chosenUser}/>
                }
            </div>
        );
    }
}

export default AllUsersComponent;