import { Box, Button } from '@mui/material'
import React, { useContext, useState } from 'react'
import SideBar from '../SideBar/SideBar'
import { UserContext } from '../../App';
import FavoriteDevices from './FavoriteDevices';
import FavoriteAccessories from './FavoriteAccessories';

export default function Favorites() {
    const { color } = useContext(UserContext);
    const [favDevice,setFavDevice]=useState(false);
    const [favAccessories,setFavAccessories]=useState(false);
    function handleFavDevice(){
        setFavDevice(true);
        setFavAccessories(false)
    }
    function handleFavAccessories(){
        setFavAccessories(true)
        setFavDevice(false)
    }
  return (
    <Box sx={{ display: "flex",justifyContent:'center'}}>
        <SideBar />
        <Box sx={{
            mt: 11 ,display:'flex',flexDirection:'column',alignItems:'center'}}>
       <div>
       <Button
            variant="contained"
            sx={{ background: color ,mr:2}}
            onClick={handleFavDevice}
        >
            Favorite Device
        </Button>
        <Button
            variant="contained"
            sx={{ background: color }}
            onClick={handleFavAccessories}
        >
            Favorite Accessories
        </Button>
       </div>
       <div> {favDevice?<FavoriteDevices/>:''}</div>
        {favAccessories?<FavoriteAccessories/>:''}
        </Box>
    </Box>
  )
}
