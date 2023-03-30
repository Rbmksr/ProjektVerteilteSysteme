import React from "react";
import { fetchAllShoeChildren } from "./RestClient";
class App extends React.Component {
    // constructor initializes component state data
    // and binds methods
    constructor(props) {
        super(props);
        this.state = {
            shoes: [],
        };
        this.fetchDisplayData = this.fetchDisplayData.bind(this);
    }

    // requests and waits for data by calling RestClient's
    // fetchAllBooks. as soon as the data is there it is set
    // as a state
    async fetchDisplayData() {
        let data = await fetchAllShoeChildren();
        this.setState({ shoes: data });
    }

    // this is displayed on the screen
    render() {
        return (
            <div>
                <div id="title">Shoestore </div>
                <button id="fetcher" onClick={this.fetchDisplayData}>
                    Check out what's in store
                </button>
                <div className="data">
                    {/* generates a div for every entry */}
                    {this.state.shoes.map((shoeChildren, key) => (
                        <div key={key}>
                            {shoeChildren.name} by {shoeChildren.name}
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default App;
