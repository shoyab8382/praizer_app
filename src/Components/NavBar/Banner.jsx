import React from "react";
import { Card } from "react-bootstrap";
import banner from "../../assets/banner.png";
import { NavLink } from "react-router-dom";

export default function Banner() {
  return (
    <div>
      <Card className=" position-relative" as={NavLink} to="/">
        <div>
          <span className="banner__text banner__text-left">Praiser</span>
          <span className="banner__text banner__text-right">By Gods</span>
        </div>
        <Card.Img
          variant="bottom"
          height="100"
          width="20"
          style={{ objectFit: "contain" }}
          src={banner}
          alt="Image"
        />
      </Card>
    </div>
  );
}
