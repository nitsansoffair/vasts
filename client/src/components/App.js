import React from 'react';

import api from './api/index';

class App extends React.Component {
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
                { this.state.vasts.length ? this.state.vasts.map(({ url, position, width, height }, idx) => (
                    <tr key={ idx }>
                        <td>{ url }</td>
                        <td>{ position }</td>
                        <td>{ width }</td>
                        <td>{ height }</td>
                        <td>
                            <button type="button" className="btn btn-warning">Edit</button> |
                            <button type="button" className="btn btn-primary">View JSON</button>
                        </td>
                    </tr>
                    )) : null }
                </tbody>
            </table>
        );
    }
}

export default App;
