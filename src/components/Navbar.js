import React from "react";
import Account from "./Account";

import NewPlantForm from "./NewPlantForm";
import Search from "./Search";

function Navbar() {
  return (
    <div>
<Search/>
<Account/>
<NewPlantForm/>

    </div>
  );
}

export default Navbar;