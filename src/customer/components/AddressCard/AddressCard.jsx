import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import HomeIcon from "@mui/icons-material/Home";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import PhoneIcon from '@mui/icons-material/Phone';
const AddressCard = () => {
  return (
    <div>
      <div className="space-y-3">
        <div className="flex space-x-3">
          <PersonIcon />
          <p className="font-semibold">Abhishek Sengar</p>
        </div>
        <div className="flex space-x-3">
          <HomeIcon />
          <p>Madhya Pradesh, Gwalior, Radhapuram, 474020</p>
        </div>

        <div className="space-y-1">
          <div className="flex space-x-3">
            <ContactPageIcon />
            <p className="font-semibold">Phone Number</p>
          </div>
          <div className="flex space-x-3">
            <PhoneIcon />
            <p>9176543214</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddressCard;
