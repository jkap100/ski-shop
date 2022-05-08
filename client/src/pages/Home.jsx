import "bulma/css/bulma.min.css";
import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container my-6">
      <div class="columns is-centered ">
        <div class="column is-half">
          <div className="box has-text-centered mx-6">
            <h1 className="title">
              <strong>Ski Shop</strong>
            </h1>
          </div>
          <div class="columns is-mobile">
            <div class="column">
              <div className="box has-text-centered mx-6">
                <p>
                  <Link to="/login">
                    <button className="button is-black is-large mx-6 is-hovered">
                      Log In
                    </button>
                  </Link>

                  <Link to="/skis">
                    <button className="button is-black is-large mx-6 is-hoveredd">
                      Shop
                    </button>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

// {
//  <div className="columns is-centered">
// <div className="column is-half">
//   <div className="box has-text-centered mx-6">
//     <h1 className="title">Ski Shop </h1>
//   </div>
// </div>
// <div>
//   <div className="columns is-centered">
//     <div className="column">
//       <div className="box has-text-centered mx-6">
//         <p>
//           <Link to="/login">
//             <button className="button is-black is-large mx-4">
//               Log In
//             </button>
//           </Link>

//           <Link to="/skis">
//             <button className="button is-black is-large">Shop</button>
//           </Link>
//         </p>
//       </div>
//     </div>
//   </div>
// </div>
// </div>
// }
