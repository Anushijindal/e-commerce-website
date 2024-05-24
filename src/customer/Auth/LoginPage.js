import { Button, Grid, TextField } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getUser, login } from "../../State/Auth/Action";

const LoginPage = () => {
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const jwt=localStorage.getItem("jwt");
  const { auth } = useSelector((store) => store);
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const userData={
      email:data.get('email'),
      password:data.get('password')
    }
    dispatch(login(userData))
    console.log(userData);
  };
  // useEffect(()=>{
  //   if(jwt){
  //     dispatch(getUser(jwt))
  //   }
  
  // },[jwt])
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              required
              id="email"
              name="email"
              label={"Email"}
              fullWidth
              autoComplete={"email"}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="password"
              name="password"
              label={"Password"}
              fullWidth
              autoComplete={"password"}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              size="large"
              className="bg-[#9155FD] w-full"
              type="submit"
              sx={{ padding: ".8rem 0", bgcolor: "#9155FD" }}
            >
              Login
            </Button>
          </Grid>
        </Grid>
      </form>
      <div className="flex pt-5 justify-center">
        <p className="pt-0.5">Don't have account?</p>
        <Button onClick={()=>navigate("/register")} size="small" >Register</Button>
      </div>
    </div>
  );
};

export default LoginPage;
