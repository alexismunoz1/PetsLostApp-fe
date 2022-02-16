import React from "react";
import { MainButton } from "ui/buttons";
import { Link } from "react-router-dom";

function VerifyEmail() {
   return (
      <div>
         <h1>My Data</h1>
         <Link to={`/user-data`}>
            <MainButton>User-data</MainButton>
         </Link>
      </div>
   );
}

export { VerifyEmail };
