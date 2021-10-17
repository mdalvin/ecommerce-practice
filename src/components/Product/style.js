import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
    root: {
        maxWidth: '100%',
    },
    media: {
        height: 0,
        paddingTop: '56.25%'
    },
    cardActions: {
        display: 'flex',
        justifyContent: 'flex-end'
    },
    cardContent: {
        display: 'flex',
        justifyContent: 'space-between',
        fontFamily: 'PT Sans',
    },
    text: {
        fontFamily: 'PT Sans',
        overflow: 'hidden',
        textOverflow: 'hidden',
    },
    bookTitle: {
        fontFamily: 'PT Sans',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
    }
}))