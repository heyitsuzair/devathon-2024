import React from "react";

const getInitials = (firstName, lastName) => {
  // Take the first letter of the first name and last name
  const initials = `${firstName[0] || ""}${lastName[0] || ""}`;
  return initials.toUpperCase();
};

const Avatar = ({ firstName, lastName, backgroundColor }) => {
  const initials = getInitials(firstName, lastName);

  return (
    <div
      style={{
        backgroundColor,
        color: "#fff",
        width: "50px",
        height: "50px",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "20px",
        fontWeight: "bold",
      }}
    >
      {initials}
    </div>
  );
};

export default Avatar;
