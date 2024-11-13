import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  useTheme,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import SideBar from "../SideBar/SideBar";
import { useSelector } from "react-redux";
import AddAccessories from "./AddAccessories";
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
function getStyles(theme) {
  return {
    color: "#6f439c",
    fontWeight: theme.typography.fontWeightRegular,
  };
}
export default function Accessories() {
  const devices = useSelector((state) => state.ReducerDevices);
  const theme = useTheme();
  const [deviceName, setDeviceName] = useState("");
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setDeviceName(value);
    console.log(deviceName);
  };
  return (
    <Box sx={{ display: "flex" }}>
      <SideBar />
      <Box
        sx={{ mt: 9, flexGrow: 1, display: "flex", flexDirection: "column" }}
      >
        <FormControl sx={{ width: 400, alignSelf: "flex-end", p: 1 }}>
          <InputLabel sx={{ color: "#6f439c" }} id="demo-simple-select-label">
            Devices Name
          </InputLabel>
          <Select
            displayEmpty
            label="deviceName"
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            sx={{ background: "white" }}
            value={deviceName}
            onChange={handleChange}
            input={<OutlinedInput />}
            renderValue={(selected) => {
              return selected;
            }}
            MenuProps={MenuProps}
            inputProps={{ "aria-label": "Without label" }}
          >
            <MenuItem sx={{ color: "#6f439c" }} disabled value="">
              <em>Please Select Device</em>
            </MenuItem>
            {devices.map((device, index) => (
              <MenuItem
                key={index}
                value={device.name}
                style={getStyles(theme)}
                sx={{ color: "#6f439c" }}
              >
                {device.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        {deviceName != "" ? <AddAccessories deviceName={deviceName} /> : ""}
      </Box>
    </Box>
  );
}
