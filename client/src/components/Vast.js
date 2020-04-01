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
                vast,
                error: null
            });
        } else {
            this.setState({
                error: `Error fetching vast with id ${this.props.match.params.id}`
            });
        }
    }

    renderVast(){
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

    render() {
        return (
            <>
                { this.state.error ? <div className="alert alert-danger" role="alert">{ this.state.error }</div> : this.renderVast() }
            </>
        );
    }
}

export default Vast;
