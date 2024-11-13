import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../App";
import { useContext, useEffect } from "react";
function Home() {
  const { logState } = useContext(UserContext);
  const route = useNavigate();
  function handle() {
    route("/Login");
  }
  useEffect(() => {
    console.log(logState);
  }, []);
  return (
    <Box>
      <div className="content">
        <p className="italic logo">
          <span>M</span>obi<span className="underline">le</span>
        </p>
        <img className="headerimg" src="/assest/images/background/img2.png" />
        <div>
          <p className="text-3xl font-bold title-home">Welcome To Your</p>
          <h2 className="text-5xl font-bold title-home">
            Creative Mobile Website
          </h2>
        </div>
        <Button
          className="btn"
          variant="contained"
          sx={{
            background: "transparent",
            fontSize: "20px",
            color: "white",
            fontWeight: "bold",
            border: "1px solid white",
            borderRadius: "20px",
            marginTop: "20px",
            boxShadow: "white 1px 1px 10px ,#c839f3 1px 0 10px",
            position: "absolute",
            top: "60%",
            left: "20%",
          }}
          onClick={handle}
        >
          <p
            style={{
              textShadow: "white 1px 1px 10px ,#c839f3 1px 0 10px",
              fontFamily: "monospace",
            }}
          >
            Go To Device Page
          </p>
        </Button>
      </div>
    </Box>
  );
}

export default Home;
