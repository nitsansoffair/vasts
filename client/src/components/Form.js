import React, { Component } from 'react';

import api from './api/index';

class Form extends Component {
    constructor(props) {
        super(props);

        this.state = {};

        this.onLoad();
    }

    async onLoad(){
        const vast = await api.fetchVast(this.props.match.params.id);

        if(vast){
            this.setState({
                id: vast.id,
                url: vast.url,
                position: vast.position,
                width: vast.width,
                height: vast.height
            });
        }
    }

    onSubmitForm = (e) => {
        e.preventDefault();

        // TODO - Add validations
        const vast = this.state;

        api.updateVast(vast);
    };

    render() {
        return (
            <form>
                { this.state.url ? (
                    <>
                        <div className="form-group">
                            <label htmlFor="url">URL</label>
                            <input type="text" className="form-control" value={this.state.url}
                                   onChange={e => this.setState({
                                       url: e.target.value
                                   })}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="position">Position</label>
                            <input type="text" className="form-control" value={this.state.position}
                                   onChange={e => this.setState({
                                       position: e.target.value
                                   })}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="width">Width</label>
                            <input type="text" className="form-control" value={this.state.width}
                                   onChange={e => this.setState({
                                       width: e.target.value
                                   })}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="height">Height</label>
                            <input type="text" className="form-control" value={this.state.height}
                                   onChange={e => this.setState({
                                       height: e.target.value
                                   })}/>
                        </div>
                        <button type="submit" className="btn btn-primary" onClick={this.onSubmitForm}>Submit</button>
                    </>
                ) : <p>Loading...</p> }
            </form>
        );
    }
}

export default Form;
