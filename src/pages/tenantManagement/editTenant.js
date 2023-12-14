import {useState} from "react";
import {
  Button,
  TextField,
  Select,
  InputLabel,
  FormHelperText,
  FormControl,
  Dialog
} from "@mui/material";
import styles from "../../styles/tmPagesEdit.module.css";
import MessageUpdateDevice from "./messageUpdate.js";
import MessageDeleteDevice from "./messageDelete.js";

const TenantManagementEdit = ({ onClose }) => {

  const [open, setOpen] = useState(false);
  const [dialogType, setDialogType] = useState('');

  const handleClickOpen = (type) => {
    setDialogType(type);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setDialogType('');
  };

  const renderDialog = () => {
    switch (dialogType) {
      case 'delete':
        return (
        <Dialog open={open} onClose={handleClose}
          sx={{
            "& .MuiDialog-container": {
              "& .MuiPaper-root": {
                width: "100%",
                maxWidth: "606px",
              },
            },
          }}
        >
          <MessageDeleteDevice onClose={handleClose}/>
        </Dialog>
       );
      case 'update':
        return (
        <Dialog open={open} onClose={handleClose}
          sx={{
            "& .MuiDialog-container": {
              "& .MuiPaper-root": {
                width: "100%",
                maxWidth: "606px",
              },
            },
          }}
        >
          <MessageUpdateDevice onClose={handleClose}/>
        </Dialog>
        );
      default:
        return null;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleClose();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={styles.tenantManagementEdit}
    >
      <div className={styles.button}>
        <Button
          className={styles.delete}
          sx={{ width: 108.4, height: 40, backgroundColor: "#FF5B5B", position: "absolute" }}
          color="primary"
          variant="contained"
          onClick={() => handleClickOpen('delete')}
        >
          Delete
        </Button>
        <Button
          className={styles.update}
          sx={{ width: 108.4, height: 40, backgroundColor: "#424242", position: "absolute" }}
          color="primary"
          variant="contained"
          onClick={() => handleClickOpen('update')}
        >
          Update
        </Button>
        <Button
          className={styles.cancel}
          sx={{ width: 108.4, height: 40, backgroundColor: "#FFFFFF", position: "absolute", color: "Black" }}
          color="primary"
          variant="contained"
          onClick={onClose}
        >
          Cancel
        </Button>
        <Dialog open={open} onClose={handleClose}>
          {renderDialog()}
        </Dialog>
      </div>
      <div className={styles.description}>
        <div className={styles.description1}>Description</div>
        <TextField
          className={styles.descriptionChild}
          color="primary"
          sx={{ width: 605.9, backgroundColor: "#FFFFFF" }}
          variant="outlined"
        />
      </div>
      <div className={styles.address}>
        <div className={styles.address1}>Address</div>
        <TextField
          className={styles.addressChild}
          color="primary"
          sx={{ width: 605.9, backgroundColor: "#FFFFFF" }}
          variant="outlined"
        />
      </div>
      <div className={styles.plantLocation}>
        <div className={styles.plantLocation1}>Plant Location</div>
        <FormControl
          className={styles.group}
          sx={{ width: 607.6, backgroundColor: "#FFFFFF" }}
          variant="outlined"
        >
          <InputLabel color="primary" />
          <Select color="primary" size="2x" />
          <FormHelperText />
        </FormControl>
      </div>
      <b className={styles.editTenant}>Edit Tenant</b>
    </form>
  );
};

export default TenantManagementEdit;
