import React, {Component} from 'react';
import {UserService} from "../services/UserService";
import User from "./User";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Post from "../posts/Post";
import AllUserPosts from "../posts/AllUserPosts";

class AllUsers extends Component {
    userService = new UserService();
    state = {users:[]}

    async componentDidMount() {
        let users = await this.userService.getAllComments();
        this.setState({users});
    }

    render() {
        let {users}=this.state;


        return (
            <div>
                {users.map(value =>
                <User item={value} key={value.id}/>)}

                <div>
                    <Switch>
                        <Route path={'/users/:id'} render={({match}) => {
                            const {id} = match.params;
                            console.log(id)
                            return <Post postId={id}/>;
                        }                        }/>

                    </Switch>
                </div>
            </div>
        );
    }
}

export default AllUsers;