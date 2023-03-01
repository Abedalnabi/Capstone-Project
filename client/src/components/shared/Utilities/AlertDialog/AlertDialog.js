import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const AlertDialog = (props) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleAction = () => {
    props.onClickAction();
    setOpen(false);
  };

  const handleCloseCancel = () => {
    setOpen(false);
  };

  const handleUpdate = (e) => {
    props.setUpdatedPostValue(e.target.value);
  };

  return (
    <>
      <Button
        sx={{ height: props.add && props.add }}
        variant="contained"
        size="small"
        fullWidth
        onClick={handleClickOpen}
      >
        {props.service}
      </Button>
      <Dialog open={open} onClose={handleCloseCancel} fullWidth>
        {<DialogTitle>{props.service}</DialogTitle>}
        <DialogContent>
          {props.action === 'Delete' ? (
            <DialogContentText sx={{ width: '100%' }}>{props.description}</DialogContentText>
          ) : props.action === 'Edit' ? (
            <textarea
              style={{ width: '100%', minHeight: '100px' }}
              defaultValue={props.description}
              onChange={handleUpdate}
            />
          ) : (
            ''
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseCancel}>Cancel</Button>
          <Button onClick={handleAction}>{props.service}</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default AlertDialog;
