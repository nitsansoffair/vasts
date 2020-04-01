import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Vasts from './Vasts';
import Vast from './Vast';

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Route path="/" exact component={Vasts}/>
                <Route path="/vast/:id" exact component={Vast}/>
            </BrowserRouter>
        );
    }
}

export default App;
