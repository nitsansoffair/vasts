import React, { Component } from 'react';

import api from './api/index';

class Vast extends Component {
    constructor(props) {
        super(props);

        this.state = {
            vast: null
        };

        this.onLoad();
    }

    async onLoad(){
        const vast = await api.fetchVast(this.props.match.params.id);

        if(vast){
            this.setState({
                vast
            });
        }
    }

    render() {
        return (
            <div className="card">
                <div className="card-body">
                    { this.state.vast ? <>
                        <p><b>URL:</b> {this.state.vast.url}</p>
                        <p><b>Position:</b> {this.state.vast.position}</p>
                        <p><b>Height:</b> {this.state.vast.height}</p>
                        <p><b>Width:</b> {this.state.vast.width}</p>
                    </> : <p>Loading...</p> }
                </div>
            </div>
        );
    }
}

export default Vast;
