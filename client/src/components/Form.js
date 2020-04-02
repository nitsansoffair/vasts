import React, { Component } from 'react';
import validator from 'validator/es';
import { connect } from 'react-redux';

import { createVast, updateVast } from '../actions';

class Form extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    componentDidMount() {
        const { vast } = this.props;

        this.setState({
            vast: vast ? vast : {},
            error: null
        });
    }

    validate(vast){
        if(!vast.url){
            this.setState({
                error: 'Vast url is required.'
            });

            return false;
        }

        if(!validator.isURL(vast.url)){
            this.setState({
                error: 'Vast url is not valid.'
            });

            return false;
        }

        if(vast.position && !validator.isIn(vast.position, [
            'top_left', 'top_middle', 'top_right', 'middle_left', 'middle_right', 'bottom_left', 'bottom_middle', 'bottom_right'
        ])){
            this.setState({
                error: 'Vast position is not valid.'
            });

            return false;
        }

        if(vast.width && (!validator.isNumeric(vast.width.toString()) || Number(vast.width) < 100 || Number(vast.width) > 1000)){
            this.setState({
                error: 'Vast width is not valid.'
            });

            return false;
        }

        if(vast.height && (!validator.isNumeric(vast.height.toString()) || Number(vast.height) < 100 || Number(vast.height) > 1000)){
            this.setState({
                error: 'Vast height is not valid.'
            });

            return false;
        }

        return true;
    }

    onSubmitForm = (e) => {
        e.preventDefault();

        const { vast } = this.state;
        const { formCreate, createVast, updateVast } = this.props;

        if(!this.validate(vast)){
            return;
        }

        if(!formCreate){
            updateVast(vast);
        } else {
            createVast(vast);
        }
    };

    renderInputs(vast){
        return (
            <>
                <div className="form-group">
                    <label htmlFor="url">URL</label>
                    <input type="text" className="form-control" value={vast.url ? vast.url : ''}
                           onChange={e => this.setState({
                               vast: {
                                   ...vast,
                                   url: e.target.value,
                               }
                           })}/>
                </div>
                <div className="form-group">
                    <label htmlFor="position">Position</label>
                    <input type="text" className="form-control" value={vast.position ? vast.position : ''}
                           onChange={e => this.setState({
                               vast: {
                                   ...vast,
                                   position: e.target.value,
                               }
                           })}/>
                </div>
                <div className="form-group">
                    <label htmlFor="width">Width</label>
                    <input type="text" className="form-control" value={vast.width ? vast.width : ''}
                           onChange={e => this.setState({
                               vast: {
                                   ...vast,
                                   width: e.target.value,
                               }
                           })}/>
                </div>
                <div className="form-group">
                    <label htmlFor="height">Height</label>
                    <input type="text" className="form-control" value={vast.height ? vast.height : ''}
                           onChange={e => this.setState({
                               vast: {
                                   ...vast,
                                   height: e.target.value
                               }
                           })}/>
                </div>
                <button type="submit" className="btn btn-primary" onClick={this.onSubmitForm}>Submit</button>
            </>
        );
    }

    renderError(){
        return this.state.error ? (
            <>
                <hr/>
                <div className="alert alert-danger" role="alert">
                    { this.state.error }
                </div>
            </>
        ) : null;
    }

    render() {
        const { vast } = this.state;

        return (
            <form>
                { vast ? this.renderInputs(vast) : <p>Loading...</p> }
                { this.renderError() }
            </form>
        );
    }
}

const mapStateToProps = (state, prevProps) => {
    return {
        vast: state.vast ? state.vast : prevProps.vast,
        formCreate: state.formCreate
    };
};

export default connect(
    mapStateToProps,
    { createVast, updateVast }
)(Form);
