import React, { useEffect, useState } from "react";
import ApparelAll from "../../components/ApparelAll";

function AllApparelsShow({ apparels, setApparels, setErrors }) {
  useEffect(() => {
    fetch("http://localhost:3000/apparels").then((r) => {
      if (r.ok) {
        r.json().then(setApparels);
      } else {
        r.json().then((error) => setErrors(error.errors));
      }
    });
  }, []);

  const fetchApparel = () => {
    fetch("http://localhost:3000/apparels").then((r) =>
      r.json().then(setApparels)
    );
  };

  const allApperals = apparels.map((apparel) => (
    <ApparelAll key={apparel.id} allApparelObj={apparel} />
  ));

  return (
    <div>
      AllApparelsShow
      <button onClick={fetchApparel}>get apparell</button>
    </div>
  );
}

export default AllApparelsShow;
