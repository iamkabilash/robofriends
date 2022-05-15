import React from "react";
import CardList from "./CardList";
import SearchBox from './SearchBox';
import './App.css'
import Scroll from './Scroll'


class App extends React.Component {
    constructor(props){
        super(props);
        this.state={
            robots: [],
            searchfield: "",
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users').then(Response => Response.json()).then(users => this.setState({robots: users}));
    }

    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value});
    }

    render(){
        const filteredRobots = this.state.robots.filter(robot=>{
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        });
        return (
            <div className="tc">
                <h1>Robofriends</h1>
                <SearchBox searchChange = {this.onSearchChange}/>
                <Scroll><CardList robots={filteredRobots}/></Scroll>
            </div>
        );
    }
}

export default App;