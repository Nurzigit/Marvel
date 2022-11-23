import { Box, Typography } from "@mui/material";
import heroes from "../../photos/heroes.jpg";
export const MainPage = () => {
    return (
        <Box>
            <Typography sx={{
                position:'relative',
                fontFamily:'serif',
                fontSize:'30px',
                display: 'flex',
                justifyContent:'center',
                alignItems:'center',
                padding:'10px 10px 10px'
            }}>Main page</Typography>
            <img src={heroes} alt={"heroes"} style={{ width: "100%"}} />
        </Box>
    );
};