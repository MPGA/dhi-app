import {createMuiTheme} from '@material-ui/core/styles';
import blueGrey from '@material-ui/core/colors/blueGrey';
import { grey } from '@material-ui/core/colors';





const theme = createMuiTheme({
    palette: {
        primary:{
            main: blueGrey[500],
        },
        secondary:{ 
            main: grey[200],

        },
    },

});




export default theme;