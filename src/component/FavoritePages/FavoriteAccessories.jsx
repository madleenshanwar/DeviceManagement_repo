import React, { useContext ,useState} from "react";
import { UserContext} from "../../App";
import { useDispatch, useSelector } from "react-redux";
import { Box, Button, Card, CardContent, CardMedia, Modal, Typography } from "@mui/material";
import { RemoveFavAccessories, UpdateAccessor } from "../../redux/Action";
import DeleteIcon from "@mui/icons-material/Delete";
export default function FavoriteAccessories() {
  const { color } = useContext(UserContext);
  const favAccessories = useSelector((state) => state.ReducerFavAccessories);
  const { setAddFavA } = useContext(UserContext);
  //remove
  const dispatch=useDispatch()
  const [delIndex,setDelIndex]=useState('')
  const [open, setOpen] = useState(false);
  const handleOpen = (index) =>{
    console.log(index);
    setDelIndex(index);
    setOpen(true);
  }
  function handleRemove(){
    console.log(delIndex)
    dispatch(RemoveFavAccessories(delIndex));
    setAddFavA(false);
    favAccessories[delIndex].isadd=false
    dispatch(UpdateAccessor(favAccessories[delIndex],delIndex))
    handleClose()
}
  const handleClose = () => setOpen(false);
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
  //DarkMode
  const { dark } = useContext(UserContext);
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
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: 2,
        justifyContent: "center",
        mt: 3,
      }}
    >
      {favAccessories.length > 0 ? (
        favAccessories.map((accessories, index) => {
          return (
            <Card
              sx={{
                display: "flex",
                gap: 3,
                p: 2,
                border: `1px solid ${color}`,
                flexBasis: "500px",
              }}
            >
              <CardMedia
                className="img"
                image={URL.createObjectURL(accessories.image)}
                alt="green iguana"
              />
              <CardContent sx={{ height: "170px", p: 0 }}>
                <Typography gutterBottom variant="h6" component="div">
                  <span
                    style={{
                      fontWeight: "bold",
                      fontSize: "large",
                      color: color,
                    }}
                  >
                    Name Accessories:
                  </span>
                  {accessories.name}
                </Typography>
                <Typography gutterBottom variant="h6" component="div">
                  <span
                    style={{
                      fontWeight: "bold",
                      fontSize: "large",
                      color: color,
                    }}
                  >
                    Name Device:
                  </span>
                  {accessories.namedevice}
                </Typography>
                <Typography gutterBottom variant="h6" component="div">
                  <Button
                    title="Remove Device"
                    sx={{ border: `1px solid ${color}` }}
                    onClick={() => handleOpen(index)}
                  >
                    <DeleteIcon sx={StyleIcon} />
                  </Button>
                  <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                  >
                    <Box sx={style}>
                      <Typography
                        id="modal-modal-title"
                        variant="h6"
                        component="h2"
                      >
                        Are You Sure You Won't Remove Accsessories from Favorite??
                      </Typography>
                      <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        <Button
                          type="submit"
                          variant="contained"
                          sx={{ background: color }}
                          onClick={() => handleRemove()}
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
                </Typography>
              </CardContent>
            </Card>
          );
        })
      ) : (
        <h1
          style={{
            color: color,
            fontWeight: "bold",
            fontSize: "xx-large",
            marginTop: "20px",
          }}
        >
          You Don't Have Any Favorite Accsessories Yet
        </h1>
      )}
    </Box>
  );
}