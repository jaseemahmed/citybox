import React from "react";
import { Fab } from "@material-ui/core";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import useStyles from "./FabBtnStyles";

const FabBtn = () => {
  const classes = useStyles();

  const openWhatsapp = () => {
    window.open('https://api.whatsapp.com/send?phone=+971 505683891', "blank")
  }
  
  return (
    <Fab size="small" color="primary" aria-label="add" className={classes.whatsAppBtn} onClick={openWhatsapp}>
      <WhatsAppIcon />
    </Fab>
  );
};

export default FabBtn;
