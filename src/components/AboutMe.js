import { Header, Grid } from "semantic-ui-react";
import React, { Fragment } from 'react';


const AboutMe = () => {

    return (
        <div>
            <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
                <Grid.Column style={{ maxWidth: 450 }}>
                    <Fragment>
                        <h1>About Me:</h1>
                        <p></p>
                    </Fragment>
                </Grid.Column>
            </Grid>
        </div>
    );
}

export default AboutMe;