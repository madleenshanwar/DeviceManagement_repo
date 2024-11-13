import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Modal,
  OutlinedInput,
  Select,
  Typography,
} from "@mui/material";
import React, { useContext, useState } from "react";
import SideBar from "../SideBar/SideBar";
import { useDispatch, useSelector } from "react-redux";
import AddIcon from "@mui/icons-material/Add";
import { AddOffer, RemoveOffer, UpdateOffer } from "../../redux/Action";
import AddOffers from "./AddOffers";
import { Form } from "react-bootstrap";
import { UserContext } from "../../App";
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};
export default function Offers() {
  const Devices = useSelector((state) => state.ReducerDevices);
  const allaccessories = useSelector((state) => state.ReducerAccessoreis);
  const offers = useSelector((state) => state.ReducerOffer);
  const devicesName = Devices.map((device) => device.name);
  const [deviceName, setDeviceName] = useState("");
  const [accessories, setAccessories] = useState([]);
  const [accessoriesName, setAccessoriesName] = useState([]);
  const { color } = useContext(UserContext);
  //handleChangeNameDevice
  const handleChangeName = (event) => {
    setDeviceName(event.target.value);
    console.log(event.target.value);
    setAccessoriesName(
      allaccessories
        .filter((el) => el.namedevice == event.target.value)
        .map((el) => el.name)
    );
    console.log(
      allaccessories
        .filter((el) => el.namedevice == event.target.value)
        .map((el) => el.name)
    );
    if (offers.length > 0) {
      if (!offers.some((offer) => offer.namedevice === event.target.value)) {
        setTest(false);
      } else {
        setOffer(
          offers.find((offer) => offer.namedevice === event.target.value)
        );
        setTest(true);
      }
    }
  };
  //test if the device have offer remove addbutton
  function handle() {
    if (offers.some((offer) => offer.namedevice === deviceName)) {
      console.log(
        offers.some((offer) => offer.namedevice === deviceName),
        "jjjjjjjjjjjjjjjjj"
      );
      return false;
    }
    return true;
  }
  //Add
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const dispatch = useDispatch();
  const [errors, setErrors] = useState({});
  const [offer, setOffer] = useState({
    namedevice: "",
    accessorieses: [],
    price: "",
    enddate: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setOffer((prevOffer) => ({
      ...prevOffer,
      namedevice: deviceName,
      [name]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };
  const handleChangeSelect = (event) => {
    const {
      target: { value },
    } = event;
    setAccessories(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
    console.log(typeof value === "string" ? value.split(",") : value);
    setOffer((prevOffer) => ({
      ...prevOffer,
      accessorieses: value === "string" ? value.split(",") : value,
    }));
  };
  const validate = () => {
    const newErrors = {};
    if (!offer.accessorieses)
      newErrors.accessorieses = "Accessorieses is required";
    if (!offer.price) newErrors.price = "Price is required";
    else if (!!isNaN(offer.price))
      newErrors.price = "Invalid value you must enter a number";
    if (!offer.enddate) newErrors.enddate = "Enddate is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length == 0;
  };
  const [test, setTest] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("offer Details:", offer);
      dispatch(AddOffer(offer));
      setOffer({
        namedevice: "",
        accessorieses: [],
        price: "",
        enddate: "",
      });
      setAccessories([]);
      console.log(offer);
      handleClose();
      setTest(true);
      console.log(test);
    }
  };
  //Modal
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

  //delete
  const [indexDelete, setIndexDelete] = useState(0);
  const [openDelete, setOpenDelete] = useState(false);
  const handleOpenDelete = (index) => {
    setOpenDelete(true);
    console.log(index);
    setIndexDelete(index);
  };
  const handleCloseDelete = () => setOpenDelete(false);
  function handleDelete() {
    dispatch(RemoveOffer(indexDelete));
    setTest(false);
    handleCloseDelete();
    console.log(offers);
  }
  //update
  const [openUpdate, setOpenUpdate] = useState(false);
  const handleOpenUpdate = () => {
    setOpenUpdate(true);
    setTest(false);
    setOffer(offers.find((el) => el.namedevice === deviceName));
  };
  const handleCloseUpdate = () => setOpenUpdate(false);
  function handleSubmitUpdate(e) {
    e.preventDefault();
    if (validate()) {
      console.log("offer Details:", offer);
      dispatch(UpdateOffer(offer));
      setOffer(offers.find((el) => el.namedevice === deviceName));
      handleCloseUpdate();
      setTest(true);
    }
  }
  //DarkMode
  const { dark } = React.useContext(UserContext);
  function CardStyle() {
    if (dark)
      return {
        maxWidth: 600,
        alignSelf: "center",
        background: "rgba(255,255,255,0.9)",
      };
    else
      return {
        maxWidth: 600,
        alignSelf: "center",
        background: "#eae0eea6",
      };
  }
  return (
    <div>
      <Box sx={{ display: "flex" }}>
        <SideBar />
        <Box
          sx={{
            mt: 9,
            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <FormControl className="select" sx={{ width: 400, p: 1 }}>
            <InputLabel sx={{ color: "#6f439c" }} id="demo-simple-select-label">
              Devices Name
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={deviceName}
              label="deviceName"
              sx={{ background: "white" }}
              onChange={handleChangeName}
            >
              <MenuItem sx={{ color: "#6f439c" }} disabled value="">
                <em>Please Select Device</em>
              </MenuItem>
              {devicesName.map((device) => (
                <MenuItem sx={{ color: "#6f439c" }} value={device}>
                  {device}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          {deviceName != "" ? (
            <Card sx={CardStyle}>
              <CardContent
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 3,
                }}
              >
                {test ? <AddOffers deviceName={deviceName} /> : ""}
                <Typography
                  variant="body2"
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  {handle() ? (
                    <>
                      <p className="mb-3 text-2xl font-bold tracking-wider">
                        No offer on this device
                      </p>
                      <Button
                        variant="contained"
                        sx={{ background: color }}
                        onClick={handleOpen}
                      >
                        Add New Offer
                        <AddIcon
                          sx={{
                            border: "1px solid white",
                            borderRadius: "50%",
                            ml: 1,
                          }}
                        />
                      </Button>
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
                              Add Offer
                            </h1>
                            <Form
                              onSubmit={handleSubmit}
                              className="flex flex-col justify-center items-center"
                            >
                              <FormControl
                                sx={{ m: 1, width: 400 }}
                                variant="outlined"
                              >
                                <InputLabel id="demo-simple-select-label">
                                  Accessories
                                </InputLabel>
                                <Select
                                  multiple
                                  labelId="demo-multiple-name-label"
                                  id="demo-multiple-name"
                                  value={accessories}
                                  onChange={handleChangeSelect}
                                  input={<OutlinedInput label="Accessories" />}
                                  MenuProps={MenuProps}
                                >
                                  <MenuItem
                                    sx={{ color: "#6f439c" }}
                                    disabled
                                    value=""
                                  >
                                    <em>Please Select Accessories</em>
                                  </MenuItem>
                                  {accessoriesName.map((name, index) => (
                                    <MenuItem
                                      key={index}
                                      value={name}
                                      sx={{ color: "#6f439c" }}
                                    >
                                      {name}
                                    </MenuItem>
                                  ))}
                                </Select>
                                <FormHelperText id="FormImage-helper-text">
                                  {errors.accessorieses}
                                </FormHelperText>
                              </FormControl>
                              <FormControl
                                sx={{ m: 1, width: 400 }}
                                variant="outlined"
                              >
                                <OutlinedInput
                                  sx={{ color: "#660e5e" }}
                                  type="text"
                                  id="FormPrice"
                                  aria-describedby="FormPrice-helper-text"
                                  value={offer.price}
                                  name="price"
                                  onChange={handleChange}
                                  placeholder="Enter Price Of Device"
                                />
                                <FormHelperText id="FormPrice-helper-text">
                                  {errors.price}
                                </FormHelperText>
                              </FormControl>
                              <FormControl
                                sx={{ m: 1, width: 400 }}
                                variant="outlined"
                              >
                                <OutlinedInput
                                  sx={{ color: "#660e5e" }}
                                  type="date"
                                  id="FormDate"
                                  aria-describedby="FormDate-helper-text"
                                  value={offer.enddate}
                                  name="enddate"
                                  onChange={handleChange}
                                />
                                <FormHelperText id="FormDate-helper-text">
                                  {errors.enddate}
                                </FormHelperText>
                              </FormControl>
                              <Box
                                sx={{
                                  display: "flex",
                                  justifyContent: "center",
                                  gap: 2,
                                }}
                              >
                                <Button
                                  type="submit"
                                  variant="contained"
                                  sx={{ background: color}}
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
                    </>
                  ) : (
                    <div>
                      <Button
                        variant="contained"
                        sx={{ background: color, mr: 2 }}
                        onClick={() => handleOpenDelete(deviceName)}
                      >
                        Delete Offer
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
                            Are You Sure You Won't To Delete This Offer??
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
                      <Button
                        variant="contained"
                        sx={{ background: color }}
                        onClick={handleOpenUpdate}
                      >
                        Update Offer
                      </Button>
                      <Modal
                        open={openUpdate}
                        onClose={handleCloseUpdate}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                      >
                        <Box sx={style}>
                          <Container className="flex flex-col justify-center items-center">
                            <h1 className="title" style={{ color: color }}>
                              Update Offer
                            </h1>
                            <Form
                              onSubmit={handleSubmitUpdate}
                              className="flex flex-col justify-center items-center"
                            >
                              <FormControl
                                sx={{ m: 1, width: 400 }}
                                variant="outlined"
                              >
                                <InputLabel id="demo-simple-select-label">
                                  Accessories
                                </InputLabel>
                                <Select
                                  multiple
                                  labelId="demo-multiple-name-label"
                                  id="demo-multiple-name"
                                  value={accessories}
                                  onChange={handleChangeSelect}
                                  input={<OutlinedInput label="Accessories" />}
                                  MenuProps={MenuProps}
                                >
                                  <MenuItem
                                    sx={{ color: "#6f439c" }}
                                    disabled
                                    value=""
                                  >
                                    <em>Please Select Accessories</em>
                                  </MenuItem>
                                  {accessoriesName.map((name, index) => (
                                    <MenuItem key={index} value={name}>
                                      {name}
                                    </MenuItem>
                                  ))}
                                </Select>
                                <FormHelperText id="FormImage-helper-text">
                                  {errors.accessorieses}
                                </FormHelperText>
                              </FormControl>
                              <FormControl
                                sx={{ m: 1, width: 400 }}
                                variant="outlined"
                              >
                                <OutlinedInput
                                  sx={{ color: "#660e5e" }}
                                  type="text"
                                  id="FormPrice"
                                  aria-describedby="FormPrice-helper-text"
                                  value={offer.price}
                                  name="price"
                                  onChange={handleChange}
                                  placeholder="Enter Price Of Device"
                                />
                                <FormHelperText id="FormPrice-helper-text">
                                  {errors.price}
                                </FormHelperText>
                              </FormControl>
                              <FormControl
                                sx={{ m: 1, width: 400 }}
                                variant="outlined"
                              >
                                <OutlinedInput
                                  sx={{ color: "#660e5e" }}
                                  type="date"
                                  id="FormDate"
                                  aria-describedby="FormDate-helper-text"
                                  value={offer.enddate}
                                  name="enddate"
                                  onChange={handleChange}
                                />
                                <FormHelperText id="FormDate-helper-text">
                                  {errors.enddate}
                                </FormHelperText>
                              </FormControl>
                              <Box sx={{ display: "flex", gap: 2 }}>
                                <Button
                                  type="submit"
                                  variant="contained"
                                  sx={{ background: color, mx: 40 }}
                                >
                                  Submit
                                </Button>
                                <Button
                                  variant="outlined"
                                  sx={{
                                    border: `1px solid ${color}`,
                                    color: color,
                                    mx: 40,
                                  }}
                                  onClick={handleCloseUpdate}
                                >
                                  Back
                                </Button>
                              </Box>
                            </Form>
                          </Container>
                        </Box>
                      </Modal>
                    </div>
                  )}
                </Typography>
              </CardContent>
            </Card>
          ) : (
            ""
          )}
        </Box>
      </Box>
    </div>
  );
}
