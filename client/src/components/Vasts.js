import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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

    render() {
        return (
            <>
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
                                <button type="button" className="btn btn-link">
                                    <Link to={ `/vast/${id}/edit` }>Edit</Link>
                                </button> |
                                <button type="button" className="btn btn-link">
                                    <Link to={ `/vast/${id}` }>View JSON</Link>
                                </button>
                            </td>
                        </tr>
                    )) : null }
                    </tbody>
                </table>
                <button type="button" className="btn btn-link">
                    <Link to="/vast/new">Create Vast</Link>
                </button>
            </>
        );
    }
}

export default Vasts;
