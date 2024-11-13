import { Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { UserContext } from "../../App";
export default function AddOffers(props) {
  const offers = useSelector((state) => state.ReducerOffer);
  const [offer, setoffer] = useState({
    namedevice: "",
    accessorieses: [],
    price: "",
    enddate: "",
  });
  const { color } = useContext(UserContext);
  useEffect(() => {
    setoffer(offers.find((el) => el.namedevice === props.deviceName));
    console.log(offer);
  }, [offer, props.deviceName]);
  return (
    <>
      <Typography
        gutterBottom
        variant="h5"
        component="div"
        sx={{ fontWeight: "bold" }}
      >
        {offer.namedevice}
      </Typography>
      <Typography variant="body">
        <p className="price" style={{ border: `1px solid ${color}` }}>
          {offer.price}$
        </p>
      </Typography>
      <Typography variant="body">
        <div className="text-center">
          <p className="font-extrabold" style={{ color: color }}>
            Accessories
          </p>
          <div className="flex flex-wrap">
            {offer.accessorieses.map((el) => (
              <li className="list-none font-extrabold">{el},</li>
            ))}
          </div>
        </div>
      </Typography>
      <Typography variant="body">
        <div className="text-center">
          <p className="font-extrabold" style={{ color: color }}>
            EndDate
          </p>
          <svg
            className="inline-block mr-1"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
          >
            <path
              fill={color}
              d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,20a9,9,0,1,1,9-9A9,9,0,0,1,12,21Z"
            />
            <rect width="2" height="7" x="11" y="6" fill={color} rx="1">
              <animateTransform
                attributeName="transform"
                dur="9s"
                repeatCount="indefinite"
                type="rotate"
                values="0 12 12;360 12 12"
              />
            </rect>
            <rect width="2" height="9" x="11" y="11" fill={color} rx="1">
              <animateTransform
                attributeName="transform"
                dur="0.75s"
                repeatCount="indefinite"
                type="rotate"
                values="0 12 12;360 12 12"
              />
            </rect>
          </svg>
          <span className="font-extrabold">{offer.enddate}</span>
        </div>
      </Typography>
    </>
  );
}
