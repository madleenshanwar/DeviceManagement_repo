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
import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Paper from "@mui/material/Paper";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { AddFavAccessories, RemoveAccessories, RemoveFavAccessories } from "../../redux/Action";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../App";
import { REMOVE_FAV_ACCESSORIES } from "../../redux/ActionTypes";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
function AccessoriesList(props) {
  const accessorieses = useSelector((state) => state.ReducerAccessoreis);
  const [currentAccessories, setCurrentAccessories] = useState([]);
  const dispatch = useDispatch();
  const { color } = useContext(UserContext);
  useEffect(() => {
    setCurrentAccessories(
      accessorieses.filter((access) => {
        return access.namedevice === props.deviceName;
      })
    );
  }, [props.deviceName, accessorieses]);
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
    dispatch(RemoveAccessories(indexDelete));
    handleCloseDelete();
  }
  //update
  const route = useNavigate();
  function hundleUpdate(index) {
    route(`/UpdateAccessories/${index}`);
  }
  //DarkMode
  const { dark } = useContext(UserContext);
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
    const favAccessories=useSelector(state=>state.ReducerFavAccessories);
    console.log(favAccessories,"fav")
    const {setAddFavA}=useContext(UserContext)
    function handleAddFav(accessories,index){
      if(!favAccessories.some((el)=>el.name===accessories.name))
      {
        accessories.isadd=true
        dispatch(AddFavAccessories(accessories))
      }
      else{
        accessories.isadd=false
        dispatch(RemoveFavAccessories(index))
      }
      setAddFavA((add)=>!add);
     }
  return (
    <>
      <Typography gutterBottom variant="h5" component="div" sx={StyleTitle}>
        Accessories List
      </Typography>
      <Divider />
      <TableContainer component={Paper}>
        {currentAccessories.length > 0 ? (
          <Table sx={TableStyle} aria-label="simple table">
            <TableHead>
              <TableRow sx={{ borderBottom: "3px solid white" }}>
                <TableCell align="center" sx={StyleTableCell}>
                  Image
                </TableCell>
                <TableCell align="center" sx={StyleTableCell}>
                  NameDevice
                </TableCell>
                <TableCell align="center" sx={StyleTableCell}>
                  Name
                </TableCell>
                <TableCell align="center" sx={StyleTableCell}>
                  Action
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {currentAccessories.map((accessories, index) => {
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
                        src={URL.createObjectURL(accessories.image)}
                      ></img>
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{ fontWeight: "bold", fontSize: "large" }}
                    >
                      {accessories.namedevice}
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{ fontWeight: "bold", fontSize: "large" }}
                    >
                      {accessories.name}
                    </TableCell>
                    <TableCell align="center">
                      <Button onClick={() => handleOpenDelete(index)}>
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
                            Are You Sure You Won't To Delete This Accessories??
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
                      <Button onClick={() => hundleUpdate(index)}>
                        <EditIcon sx={StyleIcon} />
                      </Button>
                      <Button title="Add To Favorite" onClick={()=>handleAddFav(accessories,index)}>
                        {!accessories.isadd?<FavoriteBorderIcon sx={StyleIcon}/>:<FavoriteIcon sx={StyleIcon}/>}
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
export default AccessoriesList;
