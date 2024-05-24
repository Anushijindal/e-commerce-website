import React from "react";
import EmojiEventsTwoToneIcon from "@mui/icons-material/EmojiEventsTwoTone";
import { Button, Card, CardContent, Typography } from "@mui/material";
const Achievements = () => {
  return (
    <Card sx={{position:"relative",display:"flex",boxShadow:8,bgcolor:"#333945",color:"white"}}>
      <CardContent>
        <Typography variant="h5">Anushi Jindal</Typography>
        <Typography variant="body">
          Congratulations <span className="w-9">🥳</span>
        </Typography>
        <Typography className="h6" sx={{ py: 2 }}>420.8K</Typography>
        <Button size="small" variant="contained" sx={{}}>
          View Sales
        </Button></CardContent>
        <CardContent>
        <EmojiEventsTwoToneIcon
        fontSize="large"
        sx={{ width: "40vw", height: "20vh", color: "yellow",position: "absolute",bottom:0, left:0 }}
      />
      </CardContent>
    </Card>
  );
};

export default Achievements;
