import React, { Component } from 'react';

import { Grid } from 'react-bootstrap';

import './Homepage.css';

class Homepage extends Component {
    render() {
        return (
            <div>
                <Grid>
                    <p>
                        Hello! It is first page)
                    </p>
                </Grid>
            </div>
        );
    }
}

export default Homepage;
