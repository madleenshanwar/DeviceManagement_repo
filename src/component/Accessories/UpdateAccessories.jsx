import {
  Box,
  Button,
  Container,
  FormControl,
  FormHelperText,
  OutlinedInput,
} from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { UpdateAccessor } from "../../redux/Action";
import SideBar from "../SideBar/SideBar";
import { UserContext } from "../../App";

function UpdateAccessories() {
  const { index } = useParams();
  const accessorieses = useSelector((state) => state.ReducerAccessoreis);
  const dispatch = useDispatch();
  const route = useNavigate();
  const [errors, setErrors] = useState([]);
  const [accessories, setAccessories] = useState({
    namedevice: "",
    image: "",
    name: "",
  });
  const { color } = useContext(UserContext);
  useEffect(() => {
    setAccessories(accessorieses.find((_e, i) => i === parseInt(index)));
    console.log(accessories);
  }, []);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setAccessories((prevAccessories) => ({
      ...prevAccessories,
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
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      dispatch(UpdateAccessor(accessories, index));
      route("/Accessories");
    }
  };
  //DarkMode
  const { dark } = useContext(UserContext);
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
            Update Accessories
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
                variant="outlined"
                sx={{ border: `1px solid ${color}`, color: color }}
                onClick={() => route("/Accessories")}
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
export default UpdateAccessories;
