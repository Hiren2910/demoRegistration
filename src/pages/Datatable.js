import React, { Component } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';

import axios from 'axios';
let url = 'http://localhost:3001/register/getData';
class Datatable extends Component {
    constructor(props) {
        super(props)

        this.state = {
            register: [],
            search: '',

            columns: [{
                dataField: 'id',
                text: 'Id',
                sort: true
            },
            {
                dataField: 'name',
                text: 'Name',
                sort: true,
                filter: textFilter()
            },
            {
                dataField: 'email',
                text: 'Email Id',
                sort: true,
                filter: textFilter()
            },
            {
                dataField: 'password',
                text: 'Password',
                sort: true
            },
            {
                dataField: 'createdAt',
                text: 'Created At',
                sort: true
            },
            {
                dataField: 'updatedAt',
                text: 'Updated At',
                sort: true
            },
            ]
        }

    }

    componentDidMount = () => {
        axios.get(url)
            .then(response => {
                this.setState({
                    register: response.data,
                });
            });
    }

    render() {
        return (
            <div className="FormCenter">
                <div className="FormTitle">
                    <h2>User Details</h2>
                </div>

                <BootstrapTable
                    striped
                    hover
                    keyField='id'
                    data={this.state.register}
                    columns={this.state.columns}
                    filter={filterFactory()}
                    pagination={paginationFactory()} />
            </div>
        );
    }
}

export default Datatable;

