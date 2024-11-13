import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Avatar, Menu, MenuItem } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import { UserContext } from "../../App";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import DarkModeIcon from "@mui/icons-material/DarkMode";
const drawerWidth = 240;

function SideBar(props) {
  const { currentUser } = React.useContext(UserContext);
  const { logState } = React.useContext(UserContext);
  const { setColor } = React.useContext(UserContext);
  React.useEffect(() => {
    console.log(logState, currentUser);
  }, []);
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };
  const route = useNavigate();
  function navigateTo(page) {
    route(`/${page}`);
  }
  function handleLogOut() {
    route("/");
  }
  //DarkMode
  const { dark } = React.useContext(UserContext);
  const { setDark } = React.useContext(UserContext);
  function ListStyle() {
    if (dark) {
      return {
        background: "rgba(0,0,0,0.8)",
        color: "whitesmoke",
        height: "100%",
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        pt: 9,
      };
    }
  }
  function StyleSonIcon() {
    if (dark) {
      return {
        width: 32,
        height: 32,
      };
    } else
      return {
        width: 32,
        height: 32,
        color: "yellow",
      };
  }
  function StyleMoonIcon() {
    if (dark) {
      return {
        width: 32,
        height: 32,
        color: "yellow",
      };
    } else
      return {
        width: 32,
        height: 32,
      };
  }
  function StyleAppBar() {
    if (dark) {
      return {
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` },
        background: "#312087",
      };
    } else
      return {
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` },
        background: "#3a39cb",
      };
  }
  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List sx={ListStyle()}>
        <ListItem sx={{ my: 2 }} disablePadding>
          <ListItemButton onClick={() => navigateTo("")}>
            <ListItemIcon>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 15 15"
              >
                <path
                  fill="#3a39cb"
                  d="M7.825.12a.5.5 0 0 0-.65 0L0 6.27v7.23A1.5 1.5 0 0 0 1.5 15h4a.5.5 0 0 0 .5-.5v-3a1.5 1.5 0 0 1 3 0v3a.5.5 0 0 0 .5.5h4a1.5 1.5 0 0 0 1.5-1.5V6.27z"
                />
              </svg>
            </ListItemIcon>
            <ListItemText>
              <p className="font-bold">Home</p>
            </ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem sx={{ my: 2 }} disablePadding>
          <ListItemButton onClick={() => navigateTo("Profil")}>
            <ListItemIcon>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
              >
                <g fill="#3a39cb" fill-rule="evenodd" clip-rule="evenodd">
                  <path d="M16 9a4 4 0 1 1-8 0a4 4 0 0 1 8 0m-2 0a2 2 0 1 1-4 0a2 2 0 0 1 4 0" />
                  <path d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11s11-4.925 11-11S18.075 1 12 1M3 12c0 2.09.713 4.014 1.908 5.542A8.99 8.99 0 0 1 12.065 14a8.98 8.98 0 0 1 7.092 3.458A9 9 0 1 0 3 12m9 9a8.96 8.96 0 0 1-5.672-2.012A6.99 6.99 0 0 1 12.065 16a6.99 6.99 0 0 1 5.689 2.92A8.96 8.96 0 0 1 12 21" />
                </g>
              </svg>
            </ListItemIcon>
            <ListItemText>
              <p className="font-bold">Profil</p>
            </ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton onClick={() => navigateTo("Device")}>
            <ListItemIcon>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 20 20"
              >
                <path
                  fill="#3a39cb"
                  d="M14.004 0H5.996A1.996 1.996 0 0 0 4 1.996v16.007C4 19.106 4.894 20 5.996 20h8.007A1.997 1.997 0 0 0 16 18.004V1.996A1.996 1.996 0 0 0 14.004 0M10 19c-.69 0-1.25-.447-1.25-1s.56-1 1.25-1s1.25.447 1.25 1s-.56 1-1.25 1m4-3H6V2h8z"
                />
              </svg>
            </ListItemIcon>
            <ListItemText>
              <p className="font-bold">Devices</p>
            </ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem sx={{ my: 2 }} disablePadding>
          <ListItemButton onClick={() => navigateTo("Accessories")}>
            <ListItemIcon>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 512 512"
              >
                <path
                  fill="#3a39cb"
                  d="M189.3 16.62c-7.8 0-14 6.16-14 14s6.2 14 14 14s14-6.16 14-14s-6.2-14-14-14m28.7 5.1c.8 2.83 1.3 5.82 1.3 8.9c0 3.11-.5 6.12-1.3 8.97c6.3.37 12.8.97 19.6 1.81c-.3-1.57-.4-3.17-.4-4.81c0-4.59 1-8.95 2.8-12.91c-7.6-.93-14.9-1.58-22-1.96m53.2.87c-7.8 0-14 6.16-14 14s6.2 14 14 14s14-6.16 14-14s-6.2-14-14-14m-115.5 3.32c-10.2 2.1-19.8 4.86-28.6 8.19c3.9 4.51 6.6 10.1 7.5 16.25c7.3-2.7 15.1-4.99 23.5-6.78c-1.8-3.97-2.8-8.35-2.8-12.95c0-1.6.1-3.17.4-4.71m145.5 10.64v.1c0 6.31-1.9 12.2-5.1 17.18c4.2 1.19 8.3 2.45 12.6 3.8l.1.1h.2c1.4.39 2.8.79 4.2 1.18c.3-6.31 2.5-12.16 6-17.01c-1.7-.5-3.5-.99-5.3-1.48c-4.3-1.37-8.5-2.63-12.7-3.84zm-196.3 4.41c-7.78 0-13.94 6.16-13.94 14s6.16 14 13.94 14c7.8 0 14-6.16 14-14s-6.2-14-14-14m242.3 5.46c-7.8 0-14 6.16-14 14s6.2 14 14 14s14-6.16 14-14s-6.2-14-14-14m29.8 17.3c-.6 6.27-3.1 12.02-6.9 16.7c6.1 3.02 11.9 6.17 17.3 9.44c1.7-5.96 5.2-11.23 9.7-15.23c-6.3-3.81-13-7.45-20.1-10.91M73.5 67.39c-6.04 5.82-11.37 11.96-15.99 18.29c6.15 1.32 11.67 4.42 15.97 8.73c3.41-4.48 7.22-8.86 11.48-13.05c-5.03-3.46-9.04-8.3-11.46-13.97m346.7 17.22c-7.8 0-14 6.16-14 14c0 7.89 6.2 13.99 14 13.99s14-6.1 14-13.99c0-7.84-6.2-14-14-14m-147 4.99c-7.8 0-14 6.16-14 14c0 7.9 6.2 14 14 14s14-6.1 14-14c0-7.84-6.2-14-14-14m-32.8 5.32c-6.2 1.54-12.5 3.58-18.7 5.98c4 4.5 6.7 10.2 7.6 16.4c3.9-1.5 7.7-2.7 11.5-3.8c-1-3.1-1.6-6.4-1.6-9.9c0-3 .4-5.91 1.2-8.68m62.6 5.28c.1 1.1.2 2.3.2 3.4c0 5.3-1.3 10.3-3.6 14.7c3.3 1.2 6.7 2.4 10.1 3.8c.9-6.2 3.7-11.8 7.7-16.4c-4.8-2-9.7-3.8-14.4-5.5M52.86 103c-7.84 0-14 6.2-14 14s6.16 14 14 14s14-6.2 14-14s-6.16-14-14-14m146.84 5c-7.8 0-14 6.2-14 14s6.2 14 14 14s14-6.2 14-14s-6.2-14-14-14m141.6 5c-7.8 0-14 6.2-14 14s6.2 14 14 14s14-6.2 14-14s-6.2-14-14-14m104.4 1.9c-3.1 5.2-7.7 9.5-13.1 12.3c3.6 4.3 6.8 8.6 9.8 13.1c4.7-3.8 10.5-6.3 16.8-6.9c-3.9-6.4-8.4-12.6-13.5-18.5m-279.1 14.7c-5.8 3.6-11.5 7.2-17.1 10.9c4.6 3.9 8.1 9.1 9.9 15.1c5.4-3.5 10.8-7 16.3-10.4c-4.4-4.2-7.6-9.6-9.1-15.6m205.5 6.1c-1.7 6-5.2 11.3-9.7 15.3q4.2 3.15 8.1 6.6c3.2-5.3 7.9-9.6 13.5-12.3c-3.9-3.3-7.8-6.5-11.9-9.6m-337.96 8.5c-1.08 10.2-.57 19.9 1.67 28.7c4.3-4.9 10.04-8.4 16.52-10c-.61-4.3-.79-9-.48-13.9h-.99c-6.11 0-11.84-1.7-16.72-4.8m96.56 6.5c-7.8 0-14 6.2-14 14s6.2 14 14 14s14-6.2 14-14s-6.2-14-14-14m333.7.5c-7.8 0-14 6.2-14 14s6.2 14 14 14s14-6.2 14-14s-6.2-14-14-14m-64.5 8.9c-7.8 0-14 6.2-14 14s6.2 14 14 14s14-6.2 14-14s-6.2-14-14-14m-302 13c-3.58 2-6.99 3.8-10.21 5.3c2.59 4.7 4.08 10 4.08 15.6c0 .8 0 1.6-.1 2.4c.65-.3 1.3-.6 1.96-.9c4.44-2 8.97-4.4 13.67-7.1c-4.5-4-7.76-9.3-9.4-15.3M61.77 180c-7.84 0-14 6.2-14 14s6.16 14 14 14s14-6.2 14-14s-6.16-14-14-14m416.13 13.2c-4.6 2.5-9.9 4-15.5 4c-.8 0-1.6 0-2.3-.1c.1 6.1-.4 12.3-1.4 18.6c6.4.3 12.4 2.4 17.3 5.9c0-.3.1-.7.2-1l.1-.1v-.1c1.5-9.2 2-18.3 1.6-27.2m-59.5 5.4c-4.7 4-10.5 6.6-16.9 7.3c.9 5.6.9 11.3 0 17.4c6.3.8 12.1 3.4 16.8 7.3c2.4-11.1 2.3-21.9.1-32M49.64 224.3c.29 4.9.67 9.7 1.14 14.5c3.97-1.8 8.36-2.8 12.96-2.8c1.65 0 3.27.1 4.86.4c-.36-3.8-.67-7.6-.91-11.4c-2.54.7-5.19 1-7.92 1c-3.54 0-6.94-.6-10.13-1.7m409.86 9.4c-7.8 0-14 6.2-14 14s6.2 14 14 14s14-6.2 14-14s-6.2-14-14-14m-59.7 7.4c-7.8 0-14 6.2-14 14s6.2 14 14 14s14-6.2 14-14s-6.2-14-14-14M65.74 254c-7.84 0-14 6.2-14 14s6.16 14 14 14s14-6.2 14-14s-6.16-14-14-14m301.46 10.5c-4.8 1.6-10.1 2.9-15.8 3.9c1.6 3.9 2.5 8.1 2.5 12.5c0 1.9-.2 3.7-.5 5.5c8.6-1.5 16.9-3.5 24.5-6.3c-5-4-8.7-9.4-10.7-15.6m-43.3 2.4c-7.8 0-14 6.2-14 14s6.2 14 14 14s14-6.2 14-14s-6.2-14-14-14m111.2 3.6c-2.7 4.5-5.6 9.1-8.6 13.8l-4.8 7.2c5.9 1.7 11.2 5.1 15.2 9.7c1.6-2.4 3.2-4.7 4.7-7.1c3.3-5.1 6.5-10.1 9.4-15.1c-6.1-1.2-11.6-4.3-15.9-8.5m-144.6 4.1c-7.5.5-15.1 1.1-22.4 1.9l-2.7.3c1.7 3.8 2.6 8.1 2.6 12.5c0 1.8-.2 3.6-.5 5.4c.9-.1 1.7-.2 2.5-.3c7.1-.7 14.5-1.3 22.1-1.9c-1.4-3.6-2.2-7.5-2.2-11.6q0-3.3.6-6.3m-52.5.7c-7.8 0-14 6.2-14 14s6.2 14 14 14s14-6.2 14-14s-6.2-14-14-14M80.65 295.1c-4.92 3.1-10.72 4.9-16.91 4.9h-.4c2.55 7.6 5.52 15 8.93 22.2c3.98-4.6 9.24-8.1 15.21-9.9c-2.56-5.6-4.82-11.3-6.83-17.2m124.65 3.2c-.2.3-.5.5-.7.8c-7 8-10.3 19.1-8.8 31.5c.3 2.3.7 4.6 1.2 7c4.9-3.5 10.9-5.5 17.2-5.7c-.2-1.2-.4-2.3-.5-3.4c-.8-6.5.1-10.8 2.1-14.4c-4.9-4-8.6-9.5-10.5-15.8m209.5 9.9c-7.8 0-14 6.2-14 14s6.2 14 14 14s14-6.2 14-14s-6.2-14-14-14M98.5 329c-7.84 0-14 6.2-14 14s6.16 14 14 14c7.8 0 13.9-6.2 13.9-14s-6.1-14-13.9-14m286.5 8.9c-5 5.4-10 10.6-15.2 15.6c5 3.4 9 8.3 11.4 14c5.7-5.5 11.3-11.2 16.7-17c-5.4-2.9-9.9-7.3-12.9-12.6m-167.9 12c-7.8 0-14 6.2-14 14s6.2 14 14 14s14-6.2 14-14s-6.2-14-14-14m-92.1 10l-18.8 14.7c-3.1 10.1 17.2 101.1 37.8 120.8l4.5-5.4l-13.5-61.8l20.5 54.8c.4-.3 3.3-2.3 3.7-2.6l-8.6-25.7l13.9 21.7c8.5-5.7 17.3-8.2 34.3-9.7l-15.9-30.8l31.1 30.2c8.2 0 17.5.5 28 1.5c-23.3-28.8-84.4-98.5-117-107.7m228.7 5.9c-7.8 0-14 6.2-14 14s6.2 14 14 14s14-6.2 14-14s-6.2-14-14-14m-112.5 16.5c-3.4 4.9-8.2 8.8-13.8 11.1c5 5.4 10.3 9.9 15.8 13.5c.4-6.4 2.6-12.3 6.1-17.1c-2.7-2.2-5.4-4.6-8.1-7.5m80.1 7.3c-5.6 2.9-11 5.3-16.4 7.1c1.5 3.6 2.3 7.6 2.3 11.8c0 2.3-.2 4.5-.7 6.6c8.5-2.4 16.8-6 25.1-10.4c-4.8-3.9-8.4-9.1-10.3-15.1m-44.1 4.9c-7.8 0-14 6.2-14 14s6.2 14 14 14s14-6.2 14-14s-6.2-14-14-14"
                />
              </svg>
            </ListItemIcon>
            <ListItemText>
              <p className="font-bold">Accessories</p>
            </ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem sx={{ my: 2 }} disablePadding>
          <ListItemButton onClick={() => navigateTo("Offers")}>
            <ListItemIcon>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#3a39cb"
                  d="m20.749 12l1.104-1.908a1 1 0 0 0-.365-1.366l-1.91-1.104v-2.2a1 1 0 0 0-1-1h-2.199l-1.103-1.909a1 1 0 0 0-.607-.466a1 1 0 0 0-.759.1L12 3.251l-1.91-1.105a1 1 0 0 0-1.366.366L7.62 4.422H5.421a1 1 0 0 0-1 1v2.199l-1.91 1.104a1 1 0 0 0-.365 1.367L3.25 12l-1.104 1.908a1.004 1.004 0 0 0 .364 1.367l1.91 1.104v2.199a1 1 0 0 0 1 1h2.2l1.104 1.91a1.01 1.01 0 0 0 .866.5c.174 0 .347-.046.501-.135l1.908-1.104l1.91 1.104a1 1 0 0 0 1.366-.365l1.103-1.91h2.199a1 1 0 0 0 1-1v-2.199l1.91-1.104a1 1 0 0 0 .365-1.367zM9.499 6.99a1.5 1.5 0 1 1-.001 3.001a1.5 1.5 0 0 1 .001-3.001m.3 9.6l-1.6-1.199l6-8l1.6 1.199zm4.7.4a1.5 1.5 0 1 1 .001-3.001a1.5 1.5 0 0 1-.001 3.001"
                />
              </svg>
            </ListItemIcon>
            <ListItemText>
              <p className="font-bold">Offers</p>
            </ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem sx={{ my: 2 }} disablePadding>
          <ListItemButton onClick={() => navigateTo("Favorites")}>
            <ListItemIcon>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 512 512"
              >
                <path
                  fill="#3a39cb"
                  d="M384 29.8c-64 0-96.2 27.6-128 64c-31.8-36.4-64-64-128-64S0 72.5 0 200.5c0 64 64 192 256 298.7c192-106.7 256-234.7 256-298.7c0-128-64-170.7-128-170.7M256 450C81.7 346.6 42.7 235.7 42.7 200.5c0-58.4 14.8-128 85.3-128c44.8 0 66.6 15.9 95.9 49.4l32.1 35.9l32.1-35.9c29.3-33.5 51.1-49.4 95.9-49.4c70.5 0 85.3 69.6 85.3 128c0 35.2-39 146.1-213.3 249.5"
                />
              </svg>
            </ListItemIcon>
            <ListItemText>
              <p className="font-bold">Favorites</p>
            </ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#3a39cb"
                  d="M9.18 1h5.64l.647 3.237a8.5 8.5 0 0 1 1.52.88l3.129-1.059l2.82 4.884l-2.481 2.18a8.6 8.6 0 0 1 0 1.756l2.48 2.18l-2.819 4.884l-3.129-1.058a8.5 8.5 0 0 1-1.52.879L14.819 23H9.18l-.647-3.237a8.5 8.5 0 0 1-1.52-.88l-3.129 1.059l-2.82-4.884l2.481-2.18a8.6 8.6 0 0 1 0-1.756l-2.48-2.18l2.82-4.884l3.128 1.058a8.5 8.5 0 0 1 1.52-.879zm1.64 2l-.542 2.705l-.525.193a6.5 6.5 0 0 0-1.912 1.106l-.43.359l-2.615-.885l-1.18 2.044l2.072 1.821l-.095.551a6.6 6.6 0 0 0 0 2.212l.095.55l-2.073 1.822l1.18 2.044l2.616-.885l.43.359a6.5 6.5 0 0 0 1.912 1.106l.525.193L10.82 21h2.36l.542-2.705l.525-.193a6.5 6.5 0 0 0 1.912-1.106l.43-.359l2.616.885l1.18-2.044l-2.072-1.821l.094-.551a6.6 6.6 0 0 0 0-2.212l-.094-.55l2.072-1.822l-1.18-2.044l-2.616.885l-.43-.359a6.5 6.5 0 0 0-1.912-1.106l-.525-.193L13.18 3zM12 9a3 3 0 1 0 0 6a3 3 0 0 0 0-6m-5 3a5 5 0 1 1 10 0a5 5 0 0 1-10 0"
                />
              </svg>
            </ListItemIcon>
            <ListItemText>
              <p className="font-bold">Setting</p>
            </ListItemText>
          </ListItemButton>
        </ListItem>
      </List>
    </div>
  );

  // Remove this const when copying and pasting into your project.
  const container =
    window !== undefined ? () => window().document.body : undefined;
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" sx={StyleAppBar()} disablePadding>
        <Toolbar>
          <IconButton
            color="black"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          {dark?<Button
            onClick={() => {
              setDark(false);
              setColor("#872ca2");
            }}
          >
            <DarkModeIcon sx={StyleMoonIcon()} />
          </Button>: <Button
            onClick={() => {
              setDark(true);
              setColor("#fc5eff");
            }}
          >
            <WbSunnyIcon sx={StyleSonIcon()} />
          </Button>}
          <Typography
            variant="h6"
            Wrap
            component="div"
            className="flex justify-end items-center"
          >
            <p style={{ position: "absolute", right: "15%" }}>
              {currentUser.name}
            </p>
            <div
              style={{ height: "40px", position: "absolute", right: "20px" }}
            >
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <Avatar
                  alt="Remy Sharp"
                  src="/assest/images/avatar/girl.jpg"
                  className="icon"
                />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleLogOut}>LogOut</MenuItem>
              </Menu>
            </div>
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      {/* <Box sx={{ flexGrow: 1, width: { sm: `calc(100% - ${drawerWidth}px)` } }}>
        <Toolbar />
      </Box> */}
    </Box>
  );
}

SideBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * Remove this when copying and pasting into your project.
   */
  window: PropTypes.func,
};

export default SideBar;
