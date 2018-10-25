import React, { PureComponent } from 'react';

import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';

import ColumnContainer from '../container/Column/ColumnContainer';

class Candidates extends PureComponent<WithStyles> {
    render() {
        return <ColumnContainer />;
    }
}

export default withStyles({})(Candidates);