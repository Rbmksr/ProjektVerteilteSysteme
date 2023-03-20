import React from "react";
import { fetchAllShoeMen, fetchAllShoes } from "./RestClient";
class App extends React.Component {
    // constructor initializes component state data
    // and binds methods
    constructor(props) {
        super(props);
        this.state = {
            shoeMen: [],
        };
        this.fetchDisplayData = this.fetchDisplayData.bind(this);
    }

    // requests and waits for data by calling RestClient's
    // fetchAllBooks. as soon as the data is there it is set
    // as a state
    async fetchDisplayData() {
        let data = await fetchAllShoeMen();
        this.setState({ shoeMen: data });
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
                    {this.state.shoeMen.map((shoeMen, key) => (
                        <div key={key}>
                            {shoeMen.name} for {shoeMen.price}
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default App;
