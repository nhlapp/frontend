import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { Fragment, useState } from 'react';

export default function InfoBar({ msg, open, setCloseInfoBar }) {

    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return
      }
  
      // setOpen(false)
      setCloseInfoBar()
    }
  
    const action = (
      <Fragment>
        <Button color="secondary" size="small" onClick={handleClose}>
          UNDO
        </Button>
        <IconButton
          size="small"
          aria-label="close"
          color="inherit"
          onClick={handleClose}
        >
          <CloseIcon fontSize="small" />
        </IconButton>
      </Fragment>
    );
  
    return (
      <>
        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={handleClose}
          message={msg}
          action={action}
        />
      </>
    );

}