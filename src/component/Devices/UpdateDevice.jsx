import {
  Box,
  Button,
  Container,
  FormControl,
  FormHelperText,
  InputAdornment,
  OutlinedInput,
} from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import SideBar from "../SideBar/SideBar";
import { Form } from "react-bootstrap";
import { UpdateDevices } from "../../redux/Action";
import { UserContext } from "../../App";
export default function UpdateDevice() {
  const devices = useSelector((state) => state.ReducerDevices);
  const dispatch = useDispatch();
  const route = useNavigate();
  const { index } = useParams();
  const { color } = useContext(UserContext);
  const [errors, setErrors] = useState({});
  const { dark } = useContext(UserContext);
  const [device, setDevice] = useState({
    name: "",
    date: "",
    image: "",
    ramsize: "",
    storagesize: "",
  });
  useEffect(() => {
    console.log(devices);
    setDevice(devices.find((_d, i) => i === parseInt(index)));
  }, []);
  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(value);
    setDevice((prevDevice) => ({
      ...prevDevice,
      [name]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };
  function handleChangeImage(e) {
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
    if (!device.image) newErrors.image = "Image is required";
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
      dispatch(UpdateDevices(device, index));
      route("/Device");
    }
  };
  //DarkMode
  const style = () => {
    if (dark) {
      return {
        margin: "70px auto",
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
        margin: "70px auto",
        border: `2px solid ${color}`,
        boxShadow: 24,
        p: 4,
      };
  };
  return (
    <Box sx={{ display: "flex" }}>
      <SideBar />
      <Box sx={style}>
        <Container
          sx={{ width: "fit_content" }}
          className="flex flex-col justify-center items-center"
        >
          <h1 className="title" style={{ color: color }}>
            Update Device
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
              sx={{ background: color}}
            >
              Submit
            </Button>
            <Button
              variant="outlined"
              sx={{ border:`1px solid ${color}` ,color:color}}
              onClick={()=>route('/Device')}
            >
              Back
            </Button>
            </Box>
          </Form>
        </Container>
      </Box>
    </Box>
  );
}
