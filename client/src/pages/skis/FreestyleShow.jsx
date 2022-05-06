import React from "react";

function FreestyleShow() {
  const getProfile = (_) => {
    fetch("http://localhost:3000/profile", {
      headers: {
        Authorization: `Bearer ${localStorage.token}`,
      },
    })
      .then((response) => response.json())
      .then((result) => {
        if (result.error) {
          console.error(result.error);
        } else {
          console.log(result);
        }
      });
  };

  return (
    <div>
      FreestyleShow
      <button onClick={getProfile}>Get profile</button>
    </div>
  );
}

export default FreestyleShow;
