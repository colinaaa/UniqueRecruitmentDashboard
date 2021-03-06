import { Theme } from '@material-ui/core/styles/createMuiTheme';
import { createStyles, makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(({ spacing, breakpoints, zIndex }: Theme) => createStyles({
    fab: {
        position: 'fixed',
        right: spacing(5),
        bottom: spacing(5),
        [breakpoints.down('xs')]: {
            right: spacing(3),
            bottom: spacing(3),
        },
        zIndex: zIndex.modal + 1,
    },
}));

export default useStyles;
