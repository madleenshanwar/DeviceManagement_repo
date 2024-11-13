import { Avatar, Box, Button, Modal, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import SideBar from "../SideBar/SideBar";
import { UserContext } from "../../App";
import { useNavigate } from "react-router-dom";

export default function Profil() {
  const { currentUser } = useContext(UserContext);
  const { setLogState } = useContext(UserContext);
  const { setCurrentUser } = useContext(UserContext);
  const { logState } = useContext(UserContext);
  const { color } = useContext(UserContext);
  useEffect(() => {
    if (logState === true) {
      setCurrentUser({
        name: "",
        email: "",
        password: "",
      });
    }
  }, [logState]);
  const route = useNavigate();
  function handleLogOut() {
    setLogState(true);
    handleClose();
    setTimeout(() => {
      route("/");
    }, 2000);
  }
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => setOpen(false);
  //DarkMode
  const { dark } = useContext(UserContext);
  const style = () => {
    if (dark) {
      return {
        width: "fit-content",
        margin: "90px auto",
        bgcolor: "rgba(255,255,255,0.9)",
        border: `2px solid ${color}`,
        boxShadow: 24,
        p: 4,
      };
    } else
      return {
        width: "fit-content",
        margin: "90px auto",
        bgcolor: "background.paper",
        border: `2px solid ${color}`,
        boxShadow: 24,
        p: 4,
      };
  };
  return (
    <div>
      <Box sx={{ display: "flex" }}>
        <SideBar />
        <Box
          sx={{
            position: "absolute",
            top: "19%",
            left: { lg: "20%", md: "30%", sm: "40%" },
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 2,
          }}
        >
          <p
            style={{
              fontSize: "xx-large",
              fontWeight: "bold",
              color: color,
            }}
          >
            {logState ? "LOGOUT" : currentUser.name}
          </p>
          <Avatar
            alt="Remy Sharp"
            src="/assest/images/avatar/girl.jpg"
            sx={{ width: 170, height: 170 }}
          />
          <Button
            type="submit"
            variant="contained"
            sx={{ background: color, ml: 1 }}
            onClick={() => handleOpen()}
          >
            LogOut
          </Button>
        </Box>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Are You Sure You Won't To LogOut??
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              <Button
                type="submit"
                variant="contained"
                sx={{ background: color }}
                onClick={() => handleLogOut()}
              >
                Yes
              </Button>
              <Button
                type="submit"
                variant="contained"
                sx={{ background: color, ml: 1 }}
                onClick={handleClose}
              >
                No
              </Button>
            </Typography>
          </Box>
        </Modal>
      </Box>
    </div>
  );
}
