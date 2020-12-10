import React, {Component} from 'react';
import AllUsers from "./component/users/AllUsers";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import AllPosts from "./component/posts/AllPosts";
import AllComments from "./component/comments/AllComments";
import AllUserPosts from "./component/posts/AllUserPosts";


class App extends Component {

    render() {
        return(
                <Router>
                    <div>
                        <div>
                            <Link to={'/users'}>
                                users
                            </Link>
                        </div>
                        <div>
                            <Link to={'/posts'}>
                            posts
                        </Link>
                        </div>
                        <div>
                            <Link to={'/comments'}>
                                comments
                            </Link>
                        </div>

                        <Switch>
                            <Route path={'/users'} render={()=>{return <AllUsers/>}}/>
                            <Route path={'/posts'} render={()=>{return <AllUserPosts/>}}/>
                            <Route path={'/comments'} render={()=>{return <AllComments/>}}/>
                        </Switch>
                    </div>
                </Router>
    )
    }
}

export default App;