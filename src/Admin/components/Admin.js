import {
  Box,
  CssBaseline,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import DescriptionIcon from "@mui/icons-material/Description";
import PeopleIcon from "@mui/icons-material/People";
import ListAltIcon from "@mui/icons-material/ListAlt";
import AddIcon from "@mui/icons-material/Add";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import React, { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import OrderTable from "./OrderTable";
import ProductsTable from "./ProductsTable";
import CustomerTable from "./CustomerTable";
import AddProduct from "./AddProduct";
const menu = [
  { name: "Dashborad", path: "/admin", icon: <DashboardIcon /> },
  { name: "Products", path: "/admin/products", icon: <DescriptionIcon /> },
  { name: "Customers", path: "/admin/customers", icon: <PeopleIcon /> },
  { name: "Orders", path: "/admin/orders", icon: <ListAltIcon /> },
  { name: "Add Product", path: "/admin/product/create", icon: <AddIcon /> },
];
const Admin = () => {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));
  const [sideBarVisible, setSideBarVisible] = useState(false);
  const navigate = useNavigate();
  const drawer = (
    <Box
      sx={{
        overflow: "auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height:"100%"
      }}
    >
      {/* {isLargeScreen && <Toolbar />} */}
      <List>
        {menu.map((item, index) => (
          <ListItem
            key={item?.name}
            disablePadding
            onClick={() => navigate(item?.path)}
          >
            <ListItemButton>
              <ListItemIcon>{item?.icon}</ListItemIcon>
              <ListItemText>{item?.name}</ListItemText>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <AccountCircleIcon />
            </ListItemIcon>
            <ListItemText>Account</ListItemText>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
  return (
  <div>
    <div className="flex h-[100vh]">
    <CssBaseline/>
        <div className="w-[15%] border border-r-gray-400 ">
            {drawer}
        </div>
        <div className="w-[85%]">
            <Routes>
                <Route path="/" element={<Dashboard/>}></Route>
                <Route path="/orders" element={<OrderTable/>}></Route>
                <Route path="/products" element={<ProductsTable/>}></Route>
                <Route path="/customers" element={<CustomerTable/>}></Route>
                <Route path="/product/create" element={<AddProduct/>}></Route>
            </Routes>
        </div>
    </div>
    
  </div>);
};

export default Admin;
