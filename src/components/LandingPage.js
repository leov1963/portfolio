import { Header, Grid } from "semantic-ui-react";
import React, { Fragment } from 'react';


const LandingPage = () => {

    return (
        <div>
            <div className="landing-header">
                test
                <br />
                test
                <br />
                test
            </div>
            <Grid textAlign='center' style={{ height: '60vh' }} verticalAlign='middle'>
                <Grid.Column style={{ maxWidth: 450 }}>
                    <Fragment>
                        <h1>Welcome</h1>
                        <p></p>
                    </Fragment>
                </Grid.Column>
            </Grid>
        </div>
    );
}

export default LandingPage;