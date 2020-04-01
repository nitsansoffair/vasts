import React, { Component } from 'react';

import api from './api/index';

class Form extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    componentDidMount() {
        if(this.props.editId){
            this.onLoad();
        }
    }

    async onLoad(){
        const vast = await api.fetchVast(this.props.editId);

        if(vast){
            this.setState({
                id: vast.id,
                url: vast.url,
                position: vast.position,
                width: vast.width,
                height: vast.height,
                isEdit: this.state.isEdit
            });
        }
    }

    onSubmitForm = (e) => {
        e.preventDefault();

        // TODO - Add validations
        const vast = this.state;

        if(this.props.editId){
            api.updateVast(vast)
                .then(res => {
                    if(!res){
                        this.setState({
                            error: `Error update vast with id ${vast.id}`,
                            success: null
                        })
                    } else {
                        this.setState({
                            success: `Update vast with id ${vast.id} succeeded`,
                            error: null
                        })
                    }
                })
                .catch(error => {
                    this.setState({
                        error
                    });
                })
        } else {
            api.createVast(vast)
                .then(res => {
                    if (!res) {
                        this.setState({
                            error: `Error create vast`,
                            success: null
                        });
                    } else {
                        this.setState({
                            success: 'Create vast succeeded',
                            error: null
                        })
                    }
                })
                .catch(error => {
                    this.setState({
                        error
                    });
                })
        }
    };

    render() {
        return (
            <form>
                { !this.props.editId || this.state.url ? (
                    <>
                        <div className="form-group">
                            <label htmlFor="url">URL</label>
                            <input type="text" className="form-control" value={this.state.url ? this.state.url : ''}
                                   onChange={e => this.setState({
                                       url: e.target.value
                                   })}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="position">Position</label>
                            <input type="text" className="form-control" value={this.state.position ? this.state.position : ''}
                                   onChange={e => this.setState({
                                       position: e.target.value
                                   })}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="width">Width</label>
                            <input type="text" className="form-control" value={this.state.width ? this.state.width : ''}
                                   onChange={e => this.setState({
                                       width: e.target.value
                                   })}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="height">Height</label>
                            <input type="text" className="form-control" value={this.state.height ? this.state.height : ''}
                                   onChange={e => this.setState({
                                       height: e.target.value
                                   })}/>
                        </div>
                        <button type="submit" className="btn btn-primary" onClick={this.onSubmitForm}>Submit</button>
                    </>
                ) : <p>Loading...</p> }
                { this.state.error ? <div className="alert alert-danger" role="alert">{ this.state.error }</div> : null }
                { this.state.success ? <div className="alert alert-success" role="alert">{ this.state.success }</div> : null }
            </form>
        );
    }
}

export default Form;
