import React, { Component } from 'react';
import { HashLoader } from 'react-spinners';

class Spinner extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div className="Spinner-Container">
                <HashLoader color="#20a8d8" size={120} />
            </div>
        )
    }
}

export default Spinner;
