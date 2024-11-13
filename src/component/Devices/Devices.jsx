import {
  Box,
  Button,
  Container,
  FormControl,
  FormHelperText,
  InputAdornment,
  Modal,
  OutlinedInput,
} from "@mui/material";
import React, { useContext, useState } from "react";
import { useDispatch } from "react-redux";
import SideBar from "../SideBar/SideBar";
import { Form } from "react-bootstrap";
import { AddDevice } from "../../redux/Action";
import DevicesList from "./DevicesList";
import AddIcon from "@mui/icons-material/Add";
import { UserContext } from "../../App";
function Devices() {
  const dispatch = useDispatch();
  const [errors, setErrors] = useState({});
  const { color } = useContext(UserContext);
  const [device, setDevice] = useState({
    image: "",
    name: "",
    date: "",
    ramsize: "",
    storagesize: "",
    isadd: false,
  });
  const { dark } = useContext(UserContext);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setDevice((prevDevice) => ({
      ...prevDevice,
      [name]: value,
    }));
    console.log(device);
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };
  //image
  function handleChangeImage(e) {
    console.log("e.target.files[0]", e.target.files[0]);
    setDevice((prevDevice) => ({
      ...prevDevice,
      image: e.target.files[0],
    }));
    console.log(device);
  }
  const validate = () => {
    const newErrors = {};
    if (!device.name) newErrors.name = "Name is required";
    if (!device.date) newErrors.date = "Date Release is required";
    if (!device.image) newErrors.image = "Image Name is required";
    if (!device.ramsize) newErrors.ramsize = "RAM Size is required";
    else if (!!isNaN(device.ramsize.trim()))
      newErrors.ramsize = "You Must Enter Value In GB";
    if (!device.storagesize) newErrors.storagesize = "Storage Size is required";
    else if (
      !(
        !isNaN(device.storagesize.trim()) &&
        (device.storagesize == 32 ||
          device.storagesize == 64 ||
          device.storagesize == 128 ||
          device.storagesize == 256)
      )
    )
      newErrors.storagesize =
        "Storage Size must be a number and and equal(32|64|128|256)GB";

    setErrors(newErrors);
    return Object.keys(newErrors).length == 0;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("device Details:", device);
      dispatch(AddDevice(device));
      setDevice({
        image: "",
        name: "",
        date: "",
        ramsize: "",
        storagesize: "",
        isadd: false,
      });
      handleClose();
    }
  };
  //Modal
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);
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
    <>
      <Box sx={{ display: "flex" }}>
        <SideBar />
        <Box
          sx={{
            flexGrow: 1,
            mt: 9,
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
            Add New Device{" "}
            <AddIcon
              sx={{ border: "1px solid white", borderRadius: "50%", ml: 1 }}
            />
          </Button>
          <DevicesList />
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Container
                sx={{ width: "fit_content" }}
                className="flex flex-col justify-center items-center"
              >
                <h1 className="title" style={{ color: color }}>
                  Add Device
                </h1>
                <Form
                  onSubmit={handleSubmit}
                  className="flex flex-col justify-center items-center"
                >
                  <FormControl sx={{ m: 1, width: 400 }} variant="outlined">
                    <OutlinedInput
                      sx={{ color: "#660e5e" }}
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
                  <FormControl sx={{ m: 1, width: 400 }} variant="outlined">
                    <OutlinedInput
                      sx={{ color: "#660e5e" }}
                      type="text"
                      id="FormName"
                      aria-describedby="FormName-helper-text"
                      value={device.name}
                      name="name"
                      onChange={handleChange}
                      placeholder="Enter Name Of Device"
                    />
                    <FormHelperText id="FormName-helper-text">
                      {errors.name}
                    </FormHelperText>
                  </FormControl>
                  <FormControl sx={{ m: 1, width: 400 }} variant="outlined">
                    <OutlinedInput
                      sx={{ color: "#660e5e" }}
                      type="date"
                      id="FormDate"
                      aria-describedby="FormDate-helper-text"
                      value={device.date}
                      name="date"
                      onChange={handleChange}
                    />
                    <FormHelperText id="FormDate-helper-text">
                      {errors.date}
                    </FormHelperText>
                  </FormControl>
                  <FormControl sx={{ m: 1, width: 400 }} variant="outlined">
                    <OutlinedInput
                      sx={{ color: "#660e5e" }}
                      id="FormRamSize"
                      endAdornment={
                        <InputAdornment position="end">GB</InputAdornment>
                      }
                      aria-describedby="FormRamSize-helper-text"
                      value={device.ramsize}
                      name="ramsize"
                      onChange={handleChange}
                      placeholder="Enter The RAM Size"
                    />
                    <FormHelperText id="FormRamSize-helper-text">
                      {errors.ramsize}
                    </FormHelperText>
                  </FormControl>

                  <FormControl sx={{ m: 1, width: 400 }} variant="outlined">
                    <OutlinedInput
                      sx={{ color: "#660e5e" }}
                      id="FormStorageSize"
                      endAdornment={
                        <InputAdornment position="end">GB</InputAdornment>
                      }
                      aria-describedby="FormStorageSize-helper-text"
                      value={device.storagesize}
                      name="storagesize"
                      onChange={handleChange}
                      placeholder="Enter The Storage Size"
                    />
                    <FormHelperText id="FormStorageSize-helper-text">
                      {errors.storagesize}
                    </FormHelperText>
                  </FormControl>
                  <Box className="flex" sx={{gap:2}}>
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
      </Box>
    </>
  );
}
export default Devices;
