import {
  Button,
  Checkbox,
  Container,
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  Link,
  OutlinedInput,
} from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import EmailIcon from '@mui/icons-material/Email';
import { purple} from '@mui/material/colors';
import PersonIcon from '@mui/icons-material/Person';
import { UserContext } from "../../App";
import { useNavigate } from "react-router-dom";
export default function Login() {
   
    const {user}=useContext(UserContext)
    const {setCurrentUser}=useContext(UserContext)
    const {setUser}=useContext(UserContext)
    const {setLogState}= useContext(UserContext);
    const route=useNavigate();
    const [errors,setErrors]=useState({})
    const handleChange = (e) => {
        const { name, value } = e.target;
        setChecked(e.target.checked);
        setUser((prevUser=>({
            ...prevUser,
            [name]:value
        })))
        setErrors((prevErrors) => ({
                  ...prevErrors,
                  [name]: '',
                }));
        console.log(user)
      };
    const validate = () => {
        const newErrors = {};
        if (!user.name) newErrors.name = 'Name is required';
        if (!user.email) {
          newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(user.email)) {
          newErrors.email = 'Email is invalid';
        }
       if(!user.password) newErrors.password='Password is required'
       else if(!(user.password.length>=8)) newErrors.password='password must be longer than 8 character'
       setErrors(newErrors);
       return Object.keys(newErrors).length == 0;
}
  function handleSubmit(e) {
    e.preventDefault()
    if (validate())
        {console.log(user)
        setCurrentUser({...user});
        setLogState(false)
        route('/Device')
        setUser({
            name:'',
            email:'',
            password:''
        })
        }
  }
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (event) => {
    event.preventDefault();
  };
  const {color}=React.useContext(UserContext)
  const [checked, setChecked] = React.useState(false);
  const style = {
    position:'absolute',
    top:'50%',
    left:'50%',
    transform:'translate(-50%,-50%)',
    border: `2px solid ${color}`,
    width:'600px',
    boxShadow: "0px 4px 10px rgba(0,0,0,0.25)",
    borderRadius: 8,
    backgroundColor: "rgba(255,255,255,0.8)",
    p: 2,
  };
  return (
    <div className='login'>
      <Container sx={style} className="flex flex-col justify-center items-center">
        <h1 className="title">LOG IN</h1>
        <Form
          onSubmit={handleSubmit}
          className="flex flex-col justify-center items-center"
        >
        <FormControl  sx={{ m: 1,width:{md:400}}} variant="outlined">
            <InputLabel 
            sx={{color:'#660e5e'}}htmlFor="outlined-adornment-Name">
              Name
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-Name"
              type='text'
              value={user.name}
              name='name'
              label="Name"
              onChange={handleChange}
              sx={{color:'#660e5e'}}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    edge="end"
                  >
                    <PersonIcon sx={{color:'#642490'}}/>
                  </IconButton>
                </InputAdornment>
            }
            />
            <FormHelperText id="FormImage-helper-text">{errors.name}</FormHelperText>
          </FormControl>
        <FormControl sx={{ m: 1,width:{md:400}}} variant="outlined">
            <InputLabel 
            sx={{color:'#660e5e'}}htmlFor="outlined-adornment-email">
              Email
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-email"
              type='email'
              value={user.email}
              name='email'
              label="Email"
              onChange={handleChange}
              sx={{color:'#660e5e'}}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    edge="end"
                  >
                    <EmailIcon sx={{color:'#642490'}}/>
                  </IconButton>
                </InputAdornment>
            }
            />
            <FormHelperText id="FormImage-helper-text">{errors.email}</FormHelperText>
          </FormControl>
          <FormControl sx={{ m: 1,width:{md:400}}} variant="outlined">
            <InputLabel 
            sx={{color:'#660e5e'}}
            htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              sx={{color:'#660e5e'}}
              value={user.password}
              name='password'
              id="outlined-adornment-password"
              onChange={handleChange}
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    onMouseUp={handleMouseUpPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff sx={{color:'#642490'}}/> : <Visibility sx={{color:'#642490'}}/>}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
            <FormHelperText id="FormImage-helper-text">{errors.password}</FormHelperText>
          </FormControl>
          <div className="flex items-center">
          <Checkbox
            checked={checked}
            onChange={handleChange}
            inputProps={{ 'aria-label': 'controlled' }}
            sx={{
                color: purple[800],
                '&.Mui-checked': {
                  color: purple[700],
                },
              }}
          />
          <Link sx={{textDecoration:'none',fontWeight:'bold',color:'#642490'}}>Forget Password</Link>
          </div>
          <Button
            type="submit"
            variant="contained"
            sx={{ background: "#642490", mx: 40 }}
          >
            LogIn
          </Button>
        </Form>
      </Container>
      </div>
  );
}
