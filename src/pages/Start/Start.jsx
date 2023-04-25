import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import { InputMask } from "primereact/inputmask";
import { LoadingButton } from "@mui/lab";

import { useState } from "react";

import "./Start.css";
import { Outlet } from "react-router-dom";

let Start = () => {
  const [prevPage, setPrevPage] = useState("#");
  const [nextPage, setNextPage] = useState("#");
  const [mobile, setMobile] = useState();
  const [otp, setOtp] = useState();

  return (
    <>
      <div className="page-wrapper">
        <div className="header-wrapper">
          <AppBar
            position="inherit"
            sx={{
              borderRadius: "5px",
              width: "90vw",
              backgroundColor: "white",
              color: "inherit",
            }}
          >
            <Container maxWidth="xl">
              <Toolbar disableGutters>
                <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                  <IconButton
                    size="large"
                    disabled={prevPage == "#" ? true : false}
                    href={prevPage}
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    color="inherit"
                  >
                    <ArrowBackIosRoundedIcon />
                  </IconButton>
                </Box>
                <Typography
                  variant="h5"
                  noWrap
                  component="a"
                  href="/"
                  sx={{
                    mr: 2,
                    display: { xs: "flex", md: "none" },
                    flexGrow: 1,
                    fontFamily: "inherit",
                    fontWeight: 100,
                    placeContent: "center",
                    color: "inherit",
                    textDecoration: "none",
                  }}
                >
                  White Label
                </Typography>

                <Box sx={{ flexGrow: 0 }}>
                  <IconButton
                    size="large"
                    disabled={nextPage == "#" ? true : false}
                    href={nextPage}
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    color="inherit"
                  >
                    <ArrowForwardIosRoundedIcon />
                  </IconButton>
                </Box>
              </Toolbar>
            </Container>
          </AppBar>
        </div>
        <div className="body-wrapper">
          <div className="body">
            <Outlet
              context={{
                setPrevPage: setPrevPage,
                setNextPage: setNextPage,
                setMobile: setMobile,
                mobile: mobile,
                setOtp: setOtp,
                otp: otp,
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Start;
