import React from 'react';

import {
    Row,
    Grid
} from 'react-bootstrap';

import './Common.css';

const TitleComponent = (props) => {
    return (
        <div className="title-component">
             <Grid>
                 <Row>
                     <h1 className="page-title">{props.title}</h1>
                 </Row>
             </Grid>
        </div>
    );
}

export default TitleComponent;