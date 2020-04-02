import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchVasts, toggleCreateVastForm, toggleUpdateVastForm } from '../actions/index';

import Form from './Form';

class Vasts extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    componentDidMount() {
        this.props.fetchVasts();
    }

    renderSuccess() {
        return (
            <>
                { this.props.createdStatus === 201 ? <div className="alert alert-success" role="alert">
                    { `A new vast has been created.` }
                </div> : null }
                { this.props.updatedStatus === 200 ? <div className="alert alert-success" role="alert">
                    { `Vast has been updated.` }
                </div> : null }
            </>
        );
    }

    renderCreateVastButton(){
        return (
            <button type="button" className="btn btn-link" onClick={(e) => {
                e.preventDefault();
                this.props.toggleCreateVastForm(true);
            }}>
                Create Vast
            </button>
        );
    }

    renderVastButtons(id){
        return (
            <>
                <button type="button" className="btn btn-link" onClick={(e) => {
                    e.preventDefault();
                    this.props.toggleUpdateVastForm(id);
                }}>
                    Edit
                </button> |
                <button type="button" className="btn btn-link">
                    <Link to={ `/vast/${id}` } target="_blank">View JSON</Link>
                </button>
            </>
        );
    }

    renderVastsTable(){
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
                { this.props.vasts && this.props.vasts.length ? this.props.vasts.map(({ id, url, position, width, height }, idx) => (
                    <tr key={ idx }>
                        <td>{ url }</td>
                        <td>{ position }</td>
                        <td>{ width }</td>
                        <td>{ height }</td>
                        <td>
                            { this.renderVastButtons(id) }
                        </td>
                    </tr>
                )) : null }
                </tbody>
            </table>
        );
    }

    renderVasts(){
        return (
            <>
                { this.renderSuccess() }
                { this.renderCreateVastButton() }
                { this.renderVastsTable() }
            </>
        );
    }

    renderCreateVastForm(){
        return (
            <>
                <button type="button" className="btn btn-link" onClick={e => {
                    e.preventDefault();
                    this.props.toggleCreateVastForm();
                }}>Close</button>
                <Form/>
            </>
        );
    }

    renderUpdateVastForm(vast){
        return (
            <>
                <button type="button" className="btn btn-link" onClick={e => {
                    e.preventDefault();
                    this.props.toggleUpdateVastForm();
                }}>Close</button>
                <Form vast={vast}/>
            </>
        );
    }

    render() {
        const { formEditId, formCreate } = this.props;

        if(formCreate){
            return this.renderCreateVastForm();
        }

        if(formEditId){
            const vast = this.props.vasts.find(vast => vast.id === formEditId);

            return this.renderUpdateVastForm(vast);
        }

        return this.renderVasts();
    }
}

const mapStateToProps = (state) => {
    return {
        vasts: state.vasts,
        createdStatus: state.createdStatus,
        updatedStatus: state.updatedStatus,
        formEditId: state.formEditId,
        formCreate: state.formCreate
    };
};

export default connect(
    mapStateToProps,
    { fetchVasts, toggleCreateVastForm, toggleUpdateVastForm }
)(Vasts);
