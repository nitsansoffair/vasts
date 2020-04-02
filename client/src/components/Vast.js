import React, { Component } from 'react';
import validator from 'validator/es';
import { connect } from 'react-redux';

import { fetchVast } from '../actions';

class Vast extends Component {
    constructor(props) {
        super(props);

        this.state = {
            error: null
        };
    }

    componentDidMount() {
        const id = this.props.match.params.id;

        if(!validator.isNumeric(id) || Number(id) < 1){
            this.setState({
                error: 'invalid id.'
            });

            return;
        }

        this.props.fetchVast(id);
    }

    renderVast(){
        return (
            <div className="card">
                <div className="card-body">
                    { this.props.vast ? <>
                        <p><b>URL:</b> {this.props.vast.url}</p>
                        <p><b>Position:</b> {this.props.vast.position}</p>
                        <p><b>Height:</b> {this.props.vast.height}</p>
                        <p><b>Width:</b> {this.props.vast.width}</p>
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

const mapStateToProps = (state) => {
    return {
        vast: state.vast
    };
};

export default connect(
    mapStateToProps ,
    { fetchVast }
)(Vast);
