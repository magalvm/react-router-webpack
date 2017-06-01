import React, {Component} from 'react';
/*import {
    Image
} from 'react-bootstrap';*/


class TableShopsItem extends Component {
   /* constructor(props) {
        super(props);
    }
*/
    render() {
        const item=this.props.shop;
        return (
            <tr key={item.id}>
                <td>{item.title}</td>
                <td>[{item.cover}]</td>
                <td>{item.description}</td>
                <td>{item.link}</td>
            </tr>

        );
    }
}



export default TableShopsItem;

