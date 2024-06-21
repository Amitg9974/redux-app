import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Badge from "@mui/material/Badge";
import { NavLink } from "react-bootstrap";
import { Menu } from "@mui/material";
import "./style.css";
import { useSelector } from "react-redux";

const Header = () => {
  const getData = useSelector((state) => state.cartreducer.carts);
  console.log("getdate", getData);

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <NavLink to="/" className="text-decorate-none text-light">
            Add to Cart
          </NavLink>
          <Nav className="me-auto">
            <NavLink to="/" className="text-decorate-none text-light">
              Home
            </NavLink>
          </Nav>
          <Badge
            badgeContent={getData.length}
            color="primary"
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <i
              className="fa-solid fa-cart-shopping text-light"
              aria-hidden="true"
              style={{ fontSize: 25, cursor: "pointer" }}
            ></i>
          </Badge>
        </Container>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <div
            className="card_details d-flex justify-content-center align-items-center"
            style={{ width: "20rem", padding: 10, position: "relative" }}
          >
            <i
              className="fas fa-close smallclose"
              onClick={handleClose}
              style={{
                position: "absolute",
                top: 2,
                right: 20,
                fontSize: 23,
                cursor: "pointer",
              }}
            ></i>
            <p style={{ fontSize: 22 }}>Your Cart is Empty</p>
            <img
              src="./cart.gif"
              alt="cart.gif"
              className="emptycart_img"
              style={{ width: "5rem", padding: 10 }}
            />
          </div>
        </Menu>
      </Navbar>
    </>
  );
};

export default Header;