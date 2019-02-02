import React, { PureComponent } from 'react';

import LinearProgress from '@material-ui/core/LinearProgress';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';

import styles from '../../styles/progress';

class Progress extends PureComponent<WithStyles> {

    render() {
        const { classes } = this.props;
        return (
            <LinearProgress className={classes.progress} color='primary' />
        );
    }
}

export default withStyles(styles)(Progress);