import React from 'react';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            vasts: [
                {
                    url: "url_8",
                    position: "bottom_right",
                    width: 100,
                    height: 100
                }
            ]
        };
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
                { this.state.vasts.length && this.state.vasts.map(({ url, position, width, height }, idx) => (
                    <tr key={ idx }>
                        <td>{ url }</td>
                        <td>{ position }</td>
                        <td>{ width }</td>
                        <td>{ height }</td>
                        <td>buttons</td>
                    </tr>
                    )) }
                </tbody>
            </table>
        );
    }
}

export default App;
