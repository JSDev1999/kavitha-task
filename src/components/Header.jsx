import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

export default function Header() {
  const paths = [
    {
      path: "/",
      title: "Home",
    },
    {
      path: "/calculator",
      title: "BMI",
    },
  ];
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Task
          </Typography>
          {paths.map((item) => (
            <Typography
              key={item?.title}
              variant="body2"
              component={Link}
              to={item.path}
              sx={{ textDecoration: "none", color: "white", marginX: 2 }}
            >
              {item.title}
            </Typography>
          ))}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
