import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import img from "../assets/img.jpg";

export const NewsBoard = ({ title, description, src, url }) => {
  function goTosite() {
    window.open(url, "_blank");
  }
  const limitedTitle = title ? title.slice(0, 50) : "";
  const limitedDescription = description ? description.slice(0, 90) : "";
  return (
    <Card
      className="bg-dark text-light mb-3 d-inline-block my-3 mx-2 p-2"
      style={{ width: "345px" }}
    >
      <Card.Img
        variant="top"
        src={src ? src : img}
        style={{ maxHeight: "200px", objectFit: "cover" }}
      />
      <Card.Body style={{ height: "200px", width: "360px" }}>
        <Card.Title>{limitedTitle}</Card.Title>
        <Card.Text>{limitedDescription}</Card.Text>
        <Button
          variant="primary"
          onClick={() => {
            goTosite;
          }}
        >
          <a
            href={url}
            className="text-dark fw-bold"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            Read More
          </a>
        </Button>
      </Card.Body>
    </Card>
  );
};
