import { Avatar, Box, Grid, Rating } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { findUserById } from "../../../State/User/Action";

const ProductReviewCard = ({data}) => {
  const dispatch=useDispatch();
  console.log(data);
  const userId=data?.user[0]
  console.log(userId);
  const {users}=useSelector(store=>store);
  console.log(users);
  useEffect(()=>{
    dispatch(findUserById(userId));
  },[])
    // Fetch user details
    // useEffect(() => {
    //   dispatch(findUserById(userId));
    // }, [dispatch, userId]);
  
    // const { users } = useSelector((store) => store);
    const user = users[userId];
  const formattedDate = new Date(data?.createdAt).toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
  return (
    <div className="pb-10 mx-10">
      <Grid container spacing={2} gap={3}>
        <Grid item xs={1}>
          <Box>
            <Avatar sx={{width:56, height:56, bgcolor:"blueviolet"}}>{users?.user?.firstName?.charAt(0)?.toUpperCase()}</Avatar>
          </Box>
        </Grid>
        <Grid>
            <div className="">
                <p className="font-bold text-lg">
                {users?.user?.firstName}
                </p>
                <p className="font-semibold opacity-65">{formattedDate}</p>
            </div>
            <Rating value={data.rating} name="half-rating" readOnly precision={0.5}></Rating>
            <p>{data?.review}</p>
        </Grid>
      </Grid>
    </div>
  );
};

export default ProductReviewCard;
