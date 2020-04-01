import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Vasts from './Vasts';
import Vast from './Vast';
import Form from './Form';

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Route path="/" exact component={Vasts}/>
                <Route path="/new" exact component={Form}/>
                <Route path="/vast/:id" exact component={Vast}/>
                <Route path="/vast/:id/edit" component={Form}/>
            </BrowserRouter>
        );
    }
}

export default App;
