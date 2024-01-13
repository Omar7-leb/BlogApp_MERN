import React, { useState } from 'react'
import {AppBar, Toolbar, Typography , Box , Button,Tab, Tabs} from '@mui/material'
import { Link } from 'react-router-dom';

import { useDispatch, useSelector } from "react-redux";
import { authActions } from '../store';
const Header = () => {
    const dispatch = useDispatch();
    const isLoggedIn = useSelector(state => state.isLoggedIn);
    const [value , setValue] = useState();
  return (
    <AppBar
    position='sticky'
    sx={{background:"linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(139,52,149,1) 55%, rgba(0,212,255,1) 89%);"
    }}>
        <Toolbar>
            <Typography variant='h4'>BlogsApp</Typography>
             { isLoggedIn && <Box display = "flex" margin={'auto'} marginRight='auto'>
                <Tabs textColor="inherit" value={value} onChange={(e,val)=>setValue(val)}>
                    <Tab LinkComponent={Link} to="/blogs" label="ALL BLOGS" />
                    <Tab LinkComponent={Link} to="/myBlogs" label="MY BLOGS" />
                    <Tab LinkComponent={Link} to="/blogs/add" label="ADD BLOG" />
                </Tabs>
            </Box>}
            <Box display="flex" marginLeft="auto"> 
                { !isLoggedIn && <> <Button 
                LinkComponent={Link} to="/auth"
                variant='contained'
                sx = {{margin :1, borderRadius:10 }}
                color = "warning">Login</Button>
                <Button 
                LinkComponent={Link} to="/auth"
                variant='contained'
                 sx={{margin : 1,borderRadius:10 }}
                 color = "warning">Signup</Button></>}
                { isLoggedIn && <Button 
                onClick={()=>dispatch(authActions.logout())}
                LinkComponent={Link} to="/auth"
                variant='contained' 
                sx={{margin : 1,borderRadius:10 }}
                color = "warning">Logout</Button>}
            </Box>
        </Toolbar>
    </AppBar>
  )
}

export default Header