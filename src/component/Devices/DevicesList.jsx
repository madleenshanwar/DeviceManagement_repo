import {
  Box,
  Button,
  Divider,
  Modal,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import Paper from "@mui/material/Paper";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useContext, useEffect, useState } from "react";
import { AddFavDevice, RemoveDevice, RemoveFavDevice } from "../../redux/Action";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../App";
export default function DevicesList() {
  const devices = useSelector((state) => state.ReducerDevices);
  const dispatch = useDispatch();
  const { dark } = useContext(UserContext);
  const { color } = useContext(UserContext);
  useEffect(()=>{
    console.log(devices)
  },[])
  //delete
  const style = () => {
    if (dark) {
      return {
        width: 600,
        margin: "70px auto",
        bgcolor: "rgba(255,255,255,0.9)",
        border: `2px solid ${color}`,
        boxShadow: 24,
        p: 4,
      };
    } else
      return {
        width: 600,
        margin: "70px auto",
        bgcolor: "background.paper",
        border: `2px solid ${color}`,
        boxShadow: 24,
        p: 4,
      };
  };
  const [indexDelete, setIndexDelete] = useState(0);
  const [openDelete, setOpenDelete] = useState(false);
  const handleOpenDelete = (index) => {
    setOpenDelete(true);
    setIndexDelete(index);
  };
  const handleCloseDelete = () => setOpenDelete(false);
  function handleDelete() {
    dispatch(RemoveDevice(indexDelete));
    handleCloseDelete();
  }
  //update
  const route = useNavigate();
  function handleUpdate(index) {
    route(`/UpdateDevice/${index}`);
  }
  //DarkMode
  function TableStyle() {
    if (dark) {
      return {
        minWidth: 650,
        background: "#eac9eea9",
      };
    } else
      return {
        minWidth: 650,
        background: "#eae0eea6",
      };
  }
  function StyleTitle() {
    if (dark) {
      return {
        padding: "20px",
        color: color,
      };
    } else
      return {
        padding: "20px",
        color: color,
      };
  }
  function StyleTableCell() {
    if (dark) {
      return {
        fontWeight: "bold",
        color: color,
        fontSize: "large",
      };
    } else
      return {
        fontWeight: "bold",
        color: color,
        fontSize: "large",
      };
  }
  function StyleIcon() {
    if (dark) {
      return {
        color: color,
        fontSize: 30,
      };
    } else
      return {
        color: color,
        fontSize: 30,
      };
  }
  //Add To Favorite device
  const favDevices=useSelector(state=>state.ReducerFavDevice);
  console.log(favDevices,"fav")
  const {setAddFavD}=useContext(UserContext)
  function handleAddFav(device,index){
    if(!favDevices.some((el)=>el.name===device.name))
    {
      device.isadd=true
      dispatch(AddFavDevice(device))
    }
    else{
      device.isadd=false
      dispatch(RemoveFavDevice(index))
    }
    setAddFavD((add)=>!add);
   }
  return (
    <>
      <Typography gutterBottom variant="h5" component="div" sx={StyleTitle}>
        Devices List
      </Typography>
      <Divider />
      <TableContainer component={Paper}>
        {devices.length > 0 ? (
          <Table sx={TableStyle} aria-label="simple table">
            <TableHead>
              <TableRow sx={{ borderBottom: "3px solid white" }}>
                <TableCell align="center" sx={StyleTableCell}>
                  Image
                </TableCell>
                <TableCell align="center" sx={StyleTableCell}>
                  Name
                </TableCell>
                <TableCell align="center" sx={StyleTableCell}>
                  Date Of Release
                </TableCell>
                <TableCell align="center" sx={StyleTableCell}>
                  RAM Size
                </TableCell>
                <TableCell align="center" sx={StyleTableCell}>
                  Storage Size
                </TableCell>
                <TableCell align="center" sx={StyleTableCell}>
                  Action
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {devices.map((device, index) => {
                return (
                  <TableRow
                    key={index}
                    sx={{
                      "&:last-child td, &:last-child th": { border: 0 },
                      borderBottom: "2px solid white",
                    }}
                  >
                    <TableCell component="th" scope="row" align="center">
                      <img
                        style={{ width: "80px", height: "120px" }}
                        src={URL.createObjectURL(device.image)}
                      ></img>
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{ fontWeight: "bold", fontSize: "large" }}
                    >
                      {device.name}
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{ fontWeight: "bold", fontSize: "large" }}
                    >
                      {device.date}
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{ fontWeight: "bold", fontSize: "large" }}
                    >
                      {device.ramsize}
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{ fontWeight: "bold", fontSize: "large" }}
                    >
                      {device.storagesize}
                    </TableCell>
                    <TableCell align="center">
                      <Button title="Delete Device" onClick={() => handleOpenDelete(index)}>
                        <DeleteIcon sx={StyleIcon} />
                      </Button>
                      <Modal
                        open={openDelete}
                        onClose={handleCloseDelete}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                      >
                        <Box sx={style}>
                          <Typography
                            id="modal-modal-title"
                            variant="h6"
                            component="h2"
                          >
                            Are You Sure You Won't To Delete This Device??
                          </Typography>
                          <Typography
                            id="modal-modal-description"
                            sx={{ mt: 2 }}
                          >
                            <Button
                              type="submit"
                              variant="contained"
                              sx={{ background: color }}
                              onClick={() => handleDelete()}
                            >
                              Yes
                            </Button>
                            <Button
                              type="submit"
                              variant="contained"
                              sx={{ background: color, ml: 1 }}
                              onClick={handleCloseDelete}
                            >
                              No
                            </Button>
                          </Typography>
                        </Box>
                      </Modal>
                      <Button title="update Device" onClick={() => handleUpdate(index)}>
                        <EditIcon sx={StyleIcon} />
                      </Button>
                      <Button title="Add To Favorite" onClick={()=>handleAddFav(device,index)}>
                        {!device.isadd?<FavoriteBorderIcon sx={StyleIcon}/>:<FavoriteIcon sx={StyleIcon}/>}
                      </Button>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        ) : (
          ""
        )}
      </TableContainer>
    </>
  );
}
