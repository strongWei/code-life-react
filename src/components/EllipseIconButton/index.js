import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import './index.css';

export default function EllipseIconButton(props) {
    const { startIcon, text, endIcon } = props;
    

    return (
        <Button variant="outlined" size='small' className='ellipse-icon-btn' startIcon={startIcon} 
        endIcon={endIcon} >
           <Typography component="span" variant="body2">
            {text}
           </Typography>   
        </Button>
    );
}