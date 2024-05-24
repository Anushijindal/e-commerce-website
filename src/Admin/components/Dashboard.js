import React from "react";
import { Box, Grid } from "@mui/material";
import Achievements from "./Achievements";
import MonthlyOverview from "./MonthlyOverview";
import OrderTableView from "../View/OrderTableView";
import ProductsTableView from "../View/ProductTableView";
import CustomerTableView from "../View/CustomerTableView";

const Dashboard = () => {
  return (
    <Box p={5} sx={{ bgcolor: "#333945" }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Box
            sx={{
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
              bgcolor: '#A4B0BD',
              borderRadius: 2,
              p: 0.5,
              overflow: 'hidden',
              color: 'white',
            }}
          >
            <Achievements />
          </Box>
        </Grid>
        <Grid item xs={12} md={8}>
          <Box
            sx={{
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
              bgcolor: '#A4B0BD',
              borderRadius: 2,
              p: 0.5,
              overflow: 'hidden',
              color: 'white',
              height: '100%',
            }}
          >
            <MonthlyOverview />
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
              bgcolor: '#A4B0BD',
              borderRadius: 2,
              p: 0.5,
              height: '100%',
            }}
          >
            <OrderTableView />
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
              bgcolor: '#A4B0BD',
              borderRadius: 2,
              p: 0.5,
              overflowY: 'auto',
              color: 'white',
              height:"100%"
            }}
          >
            <ProductsTableView />
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box
            sx={{
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
              bgcolor: '#A4B0BD',
              borderRadius: 2,
              p: 0.5,
              overflowY: 'auto',
              color: 'white',
              '::-webkit-scrollbar': {
                display: 'none',
              },
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            <CustomerTableView />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
