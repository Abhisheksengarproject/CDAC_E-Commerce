import React from "react";
import { Grid, Typography, Button } from "@mui/material";
import {
  MDBIcon,
  MDBBtn,
} from "mdb-react-ui-kit";
const Footer = () => {
  return (
    <div>
      <Grid
        className="bg-black text-white text-center my-10"
        container
        sx={{ bgcolor: "black", color: "white", py: 3 }}
      >
        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6">
            Company
          </Typography>
          <div>
            <Button className="pb-5" variant="h6" gutterBottom>
              About
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterBottom>
              BLOG
            </Button>
          </div>
          {/* <div>
            <Button className="pb-5" variant="h6" gutterBottom>
              PRESS
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterBottom>
              JOBS
            </Button>
          </div> */}
          <div>
            <Button className="pb-5" variant="h6" gutterBottom>
              PARTNERS
            </Button>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6">
            Solutions
          </Typography>
          <div>
            <Button className="pb-5" variant="h6" gutterBottom>
              Marketing
            </Button>
          </div>
          {/* <div>
            <Button className="pb-5" variant="h6" gutterBottom>
              Analytics
            </Button>
          </div> */}
          <div>
            <Button className="pb-5" variant="h6" gutterBottom>
              Commerce
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterBottom>
              Insights
            </Button>
          </div>
          {/* <div>
            <Button className="pb-5" variant="h6" gutterBottom>
              Supports
            </Button>
          </div> */}
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6">
            Contact us
          </Typography>
          <div>
            <MDBIcon color="secondary" icon="home" className="me-3 mb-4" />
            Plot No. 6 & 7, Hardware Park, Hyderabad
          </div>
          <div>
            <MDBIcon color="secondary" icon="envelope" className="me-3 mb-4" />
            cdac@gmail.com
          </div>
          <div>
            <MDBIcon color="secondary" icon="phone" className="me-3 mb-4" /> +91
            77 468 830 56
          </div>
          <div>
            <MDBIcon color="secondary" icon="print" className="me-3 mb-4" /> +91
            97 531 092 25
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6">
            Follow us on
          </Typography>
          <div>
            <MDBBtn
              floating
              className="m-1"
              style={{ backgroundColor: "#3b5998"  }}
              href="https://www.facebook.com/groups/cdachyd98"
              role="button"
              target="_blank" rel="noopener noreferrer"

            >
              <MDBIcon fab icon="facebook-f" />
            </MDBBtn>
          </div>
          <div>
            <MDBBtn
              floating
              className="m-1"
              style={{ backgroundColor: "#dd4b39" }}
              href="https://www.cdac.in/index.aspx?id=HY"
              role="button"
              target="_blank" rel="noopener noreferrer"

            >
              <MDBIcon fab icon="google" />
            </MDBBtn>
          </div>
          <div>
            <MDBBtn
              floating
              className="m-1"
              style={{ backgroundColor: "#0082ca" }}
              href="https://www.linkedin.com/company/actscdachyderabad/"
              role="button"
              target="_blank" rel="noopener noreferrer"

            >
              <MDBIcon fab icon="linkedin-in" />
            </MDBBtn>
          </div>
          <div>
            <MDBBtn
              floating
              className="m-1"
              style={{ backgroundColor: "#333333" }}
              href="https://github.com/Abhisheksengarproject/CDAC_E-Commerce"
              role="button"
              target="_blank" rel="noopener noreferrer"

            >
              <MDBIcon fab icon="github" />
            </MDBBtn>
          </div>
        </Grid>
        <Grid className="pt-20" item xs={12}>
          <Typography variant="body2" component="p" align="center">
            &copy; 2024 CDAC Hyderabad. All rights reserved.
          </Typography>
          <Typography variant="body2" component="p" align="center">
            Made with love by PGDAC Students
          </Typography>
          <Typography variant="body2" component="p" align="center"></Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;
