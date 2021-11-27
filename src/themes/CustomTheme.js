import { createTheme } from '@material-ui/core/styles';

const CustomTheme = createTheme({      
  typography: {
    button: {
      //button text always uppercase
      textTransform: 'none'
    }
  }
});

export default CustomTheme;