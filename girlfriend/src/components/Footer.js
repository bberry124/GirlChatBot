import { Box, Grid, Typography } from "@mui/material";
import logo_white from '../assets/logo_white.png';


const Footer = () => {
    return (
        <Box
            sx={{
                maxWidth: '1300px',
                margin: '0px auto',
                padding: '20px 0px'
            }}
        >
            <hr />
            <Box sx={{display: 'flex'}}>
                <div>
                    <img style={{
                        height: 'auto',
                        margin: '1rem 0rem',
                        padding: '0rem 1rem'
                    }} src={logo_white} />
                </div>
                <Typography variant="h4" component="h2"
                    sx={{ margin: '0rem 1rem'}}
                >
                    Bryce.ai
                </Typography>
                <Box sx={{ flexGrow: 1 }} />
                <Typography variant="h6" component="h2">
                    powered by TLK.com
                </Typography>
            </Box>
        </Box>
    )
}
export default Footer;