import React, {Component} from 'react';
import {
    Pagination,
    Table
} from 'react-bootstrap';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';

import {
    getShopsList
} from '../actions/shops';
import TableShopsItem from './TableShopsItem'
import  './shops.css'
class Shops extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activePage: 1,
            maxItems: 10
        };
    }

    componentDidMount() {
        this.props.getShopsList();
    }

    handleSelect(eventKey) {
        this.setState({
            activePage: eventKey,
        });
    }

    render() {
        const pages = Math.ceil(this.props.list.length / this.state.maxItems);
        const start = (this.state.activePage - 1) * this.state.maxItems;
        let count = 0;
        return (
            <div className="container">
                <h1>{this.props.route.name}</h1>
                <Table striped bordered hover responsive className="table-grid">
                    <thead>
                    <tr>
                        <th>Title</th>
                        <th>Cover</th>
                        <th>Description</th>
                        <th>Shop Link</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.props.list.map((item, index) => {
                            if (index >= start && count < this.state.maxItems) {
                                count++;
                                return (
                                    <TableShopsItem key={item.id} shop={item}/>
                                )
                            }
                        })
                    }
                    </tbody>
                </Table>
                <Pagination
                    className="pull-right"
                    prev
                    next
                    items={pages}
                    maxButtons={10}
                    activePage={this.state.activePage}
                    onSelect={this.handleSelect.bind(this)}
                />
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    const {companies} = state;
    return {
        list: (companies.get('data')) ? companies.get('data') : []
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        getShopsList
    }, dispatch)
};
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Shops))
