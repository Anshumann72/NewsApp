import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Badge from "react-bootstrap/Badge";

export const NewsSite = ({ setCategory }) => {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark" className="mb-2  p-3 ml-2">
        <Navbar.Brand href="#home">
          News<Badge bg="danger">Wala</Badge>
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link
            onClick={() => {
              setCategory("technology");
            }}
          >
            Technology
          </Nav.Link>
          <Nav.Link
            onClick={() => {
              setCategory("health");
            }}
          >
            Health
          </Nav.Link>
          <Nav.Link
            onClick={() => {
              setCategory("business");
            }}
          >
            Business
          </Nav.Link>
          <Nav.Link
            onClick={() => {
              setCategory("sports");
            }}
          >
            Sports
          </Nav.Link>
          <Nav.Link
            onClick={() => {
              setCategory("entertainment");
            }}
          >
            Entertainment
          </Nav.Link>
        </Nav>
      </Navbar>
    </>
  );
};
