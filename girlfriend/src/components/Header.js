import { Box, Button, Typography } from "@mui/material";
import logo from '../assets/logo.png'
import logo_white from '../assets/logo_white.png';
import { Link } from "react-router-dom";
const Header = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                maxWidth: '1200px',
                margin: '1rem auto',
                padding: '1rem 3rem',
                alignItems: 'center'
            }}
        >
            <Link to={"/home"} style={{ textDecoration: "none" }}>
            <div>
                <img style={{
                    width: '5rem ',
                    margin: '1rem 0rem',
                    padding: '0rem 1rem'
                }} src={logo_white} />
            </div> 
            </Link>           
            <Typography variant="h4" component="h2"
                sx={{margin: '0rem 1rem'}}
            >
                Bryce.ai
            </Typography>

        </Box>
    )

}
export default Header;