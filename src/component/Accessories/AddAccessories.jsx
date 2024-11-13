import {
  Box,
  Button,
  Container,
  FormControl,
  FormHelperText,
  Modal,
  OutlinedInput,
} from "@mui/material";
import React, { useContext, useState } from "react";
import { Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import AddIcon from "@mui/icons-material/Add";
import { AddAccessor } from "../../redux/Action";
import AccessoriesList from "./AccessoriesList";
import { UserContext } from "../../App";
export default function AddAccessories(props) {
  const [accessories, setAccessories] = useState({
    namedevice: "",
    image: "",
    name: "",
  });
  const [errors, setErrors] = useState([]);
  const dispatch = useDispatch();
  const { color } = useContext(UserContext);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setAccessories((prevAccessories) => ({
      ...prevAccessories,
      namedevice: props.deviceName,
      [name]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };
  //image
  function handleChangeImage(e) {
    setAccessories((prevAccessories) => ({
      ...prevAccessories,
      image: e.target.files[0],
    }));
    console.log(accessories);
  }
  const validate = () => {
    const newErrors = {};
    if (!accessories.name) newErrors.name = "Name is required";
    if (!accessories.image) newErrors.image = "Image Name is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length == 0;
  };
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Accessories Details:", accessories);
      dispatch(AddAccessor(accessories));
      setAccessories(() => ({
        namedevice: "",
        image: "",
        name: "",
      }));
      console.log(accessories);
      handleClose();
    }
  };
  //DarkMode
  const { dark } = useContext(UserContext);
  const style = () => {
    if (dark) {
      return {
        margin: "50px auto",
        width: "600px",
        borderRadius: 8,
        backgroundColor: "rgba(255,255,255,0.8)",
        border: `2px solid ${color}`,
        boxShadow: 24,
        p: 4,
      };
    } else
      return {
        width: "600px",
        borderRadius: 8,
        backgroundColor: "rgba(255,255,255,0.8)",
        margin: "50px auto",
        border: `2px solid ${color}`,
        boxShadow: 24,
        p: 4,
      };
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        p: 2,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Button
        variant="contained"
        sx={{ background: color, alignSelf: "flex-end" }}
        onClick={handleOpen}
      >
        Add New Accessories{" "}
        <AddIcon
          sx={{ border: "1px solid white", borderRadius: "50%", ml: 1 }}
        />
      </Button>
      <AccessoriesList deviceName={props.deviceName} />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Container className="flex flex-col justify-center items-center">
            <h1 className="title" style={{ color: color }}>
              Add Accessories
            </h1>
            <Form
              onSubmit={handleSubmit}
              className="flex flex-col justify-center items-center"
            >
              <FormControl sx={{ m: 1, width: 400 }} variant="outlined">
                <OutlinedInput
                  type="text"
                  id="FormName"
                  aria-describedby="FormName-helper-text"
                  value={accessories.name}
                  name="name"
                  onChange={handleChange}
                  placeholder="Enter Name Of Accessories"
                />
                <FormHelperText id="FormName-helper-text">
                  {errors.name}
                </FormHelperText>
              </FormControl>

              <FormControl sx={{ m: 1, width: 400 }} variant="outlined">
                <OutlinedInput
                  type="file"
                  id="FormImage"
                  aria-describedby="FormImage-helper-text"
                  name="image"
                  onChange={handleChangeImage}
                />
                <FormHelperText id="FormImage-helper-text">
                  {errors.image}
                </FormHelperText>
              </FormControl>
              <Box className="flex" sx={{ gap: 2 }}>
                <Button
                  type="submit"
                  variant="contained"
                  sx={{ background: color }}
                >
                  Submit
                </Button>
                <Button
                  onClick={handleClose}
                  variant="outlined"
                  sx={{
                    border: `1px solid ${color}`,
                    color: color,
                  }}
                >
                  Back
                </Button>
              </Box>
            </Form>
          </Container>
        </Box>
      </Modal>
    </Box>
  );
}
