import React, {Component} from "react";
import ReactDOM from "react-dom";

class App extends Component {
    constructor() {
        super();
        this.state = {
            id: null
        }
    }
    render() {
        return (
            <div>
                <div>PROXY SERVER</div>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));