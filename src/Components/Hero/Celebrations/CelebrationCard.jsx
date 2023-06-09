import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import BirthdayCard from "./BirthdayCard";
import { fetchUsersData } from "../../../_services/UserService";
import placeholder from "../../../assets/profile_placeholder.jpg";

export default function CelebrationCard() {
  const [userData, setUserData] = useState([]);

  const DateFormater = (dob) => {
    // Create a Date object using the DOB string
    const dateObj = new Date(dob);

    // Format the date in a readable format
    const formattedDOB = dateObj.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    return formattedDOB;
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    try {
      fetchUsersData()
        .then((data) => {
          setUserData(data);
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {}
  };

  return (
    <div className="mt-1 mx-1">
      <Card className="hero-cards">
        <Card.Header as={"h5"}>Celebrations</Card.Header>
        <Card.Body>
          {userData?.map((item) => (
            <BirthdayCard
              img={item.photoUrl === null ? placeholder : item.photoUrl}
              name={item.firstName + " " + item.lastName}
              dob={DateFormater(item.dateOfBirth)}
              message={"Happy Birthday"}
              key={item.id}
            />
          ))}
        </Card.Body>
      </Card>
    </div>
  );
}
