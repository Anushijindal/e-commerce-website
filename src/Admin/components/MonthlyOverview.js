import { Avatar, Button, Card, CardContent, List, ListItem, ListItemIcon, ListItemText, ListSubheader, Typography } from '@mui/material'
import EmojiEventsTwoToneIcon from "@mui/icons-material/EmojiEventsTwoTone";
import React from 'react'
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import DevicesIcon from '@mui/icons-material/Devices';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
const salesData=[
    {name:"Sales", icon:<TrendingUpIcon/> , number:"245K",color:"#6A89CC"},
    {name:"Customers", icon:<AccountBoxIcon/> , number:"12.5K",color:"#7CEC9F"},
    {name:"Products", icon:<DevicesIcon/> , number:"1.54K",color:"#FFF222"},
    {name:"Revenue", icon:<AttachMoneyIcon/> , number:"88K",color:"#67E6DC"},
]
const MonthlyOverview = () => {
  return (
    <Card sx={{position:"",display:"flex",boxShadow:8,bgcolor:"#333945",color:"white"}}>
      <CardContent>
        <Typography variant="h6">Monthly Overview</Typography>
        <Typography variant="body">
          Total 48.5% growth <span className="w-9">😎</span> this month
        </Typography>
        <List sx={{display:"flex",textAlign:"end"}}>
        {
            salesData.map((item)=><ListItem key={item.name}>
                <Avatar sx={{bgcolor:`${item.color}`,borderRadius:2,color:"white",p:1,alignItems:"center"}}>{item.icon}</Avatar>
                <ListSubheader sx={{display:"", bgcolor:"#333945",color:"white",pl:0.5}}>
                <Typography sx={{}} variant='body'>{item.name}</Typography>
                <Typography variant='body'>({item.number})</Typography></ListSubheader>
            </ListItem>)
        }
        </List>
        </CardContent>
        {/* <CardContent>
        <EmojiEventsTwoToneIcon
        fontSize="large"
        sx={{ width: "40vw", height: "20vh", color: "yellow",position: "absolute",bottom:0, left:0 }}
      />
      </CardContent> */}
    </Card>
  )
}

export default MonthlyOverview