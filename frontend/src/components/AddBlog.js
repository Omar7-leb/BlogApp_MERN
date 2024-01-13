import { Box, InputLabel, TextField, Typography } from '@mui/material'
import React , {useState} from 'react'


const labelStyles = {mb:1,mt:2,fontSize: '24px' , fontWeight:'bold'};
const AddBlog = () => {
  const [inputs, setInputs] = useState({
    title: "",
            description: "",
            password: ""
})
  return (
    <div>
      <form>
        <Box border={3} 
        borderColor="linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(139,52,149,1) 55%, rgba(0,212,255,1) 89%)" 
        borderRadius={10} 
        boxShadow = "10px 10px 20px #ccc" 
        padding={3} 
        margin={"auto"} 
        marginTop={3}
        display = 'flex'
        flexDirection={'column'} 
        width={"80%"} 
        >
          <Typography fontWeight={'bold'} 
          padding={3} 
          color="grey" 
          variant='h2' 
          textAlign={'center'}>Post Your Blog</Typography>
          <InputLabel sx={labelStyles}>Title</InputLabel>
          <TextField margin='normal' variant="outlined"/>
          <InputLabel sx={labelStyles}>Description</InputLabel>
          <TextField margin='normal' variant="outlined"/>
          <InputLabel sx={labelStyles}>ImageURL</InputLabel>
          <TextField margin='normal' variant="outlined"/>
        </Box>
      </form>
    </div>
  )
}

export default AddBlog