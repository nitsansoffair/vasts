import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Form from './Form';
import api from './api';

class Vasts extends Component {
    constructor(props) {
        super(props);

        this.state = {
            vasts: []
        };

        this.onLoad();
    }

    async onLoad(){
        const vasts = await api.fetchVasts();

        this.setState({
            vasts
        });
    }

    renderVasts(){
        return (
            <>
                <button type="button" className="btn btn-link" onClick={(e) => {
                    e.preventDefault();
                    this.setState({
                        isCreate: true,
                        editId: null,
                    })
                }}>
                    Create Vast
                </button>
                <table className="table">
                    <thead>
                    <tr>
                        <th scope="col">vast url</th>
                        <th scope="col">position</th>
                        <th scope="col">width</th>
                        <th scope="col">height</th>
                        <th scope="col">buttons</th>
                    </tr>
                    </thead>
                    <tbody>
                    { this.state.vasts.length ? this.state.vasts.map(({ id, url, position, width, height }, idx) => (
                        <tr key={ idx }>
                            <td>{ url }</td>
                            <td>{ position }</td>
                            <td>{ width }</td>
                            <td>{ height }</td>
                            <td>
                                <button type="button" className="btn btn-link" onClick={(e) => {
                                    e.preventDefault();
                                    this.setState({
                                        isCreate: false,
                                        editId: id,
                                    })
                                }}>
                                    Edit
                                </button> |
                                <button type="button" className="btn btn-link">
                                    <Link to={ `/vast/${id}` } target="_blank">View JSON</Link>
                                </button>
                            </td>
                        </tr>
                    )) : null }
                    </tbody>
                </table>
            </>
        );
    }

    render() {
        const { editId, isCreate } = this.state;

        if(isCreate){
            return (
                <>
                    <button type="button" className="btn btn-link" onClick={e => {
                        e.preventDefault();
                        this.setState({
                            editId: false,
                            isCreate: false
                        })
                    }}>Close</button>
                    <Form/>
                </>
                );
        }

        if(editId){
            return (
                <>
                    <button type="button" className="btn btn-link" onClick={e => {
                        e.preventDefault();
                        this.setState({
                            ...this.state,
                            editId: false,
                            isCreate: false
                        })
                    }}>Close</button>
                    <Form editId={editId}/>
                </>
                );
        }

        return this.renderVasts();
    }
}

export default Vasts;
