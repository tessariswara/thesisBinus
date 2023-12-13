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
import styles from "../../styles/dmPagesEdit.module.css";
import MessageUpdateDevice from "./messageUpdate.js";
import MessageDeleteDevice from "./messageDelete.js";

const DeviceManagementEdit = ({ onClose }) => {

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
      className={styles.deviceManagementEdit}
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
        <div className={styles.plantLocation}>Description</div>
        <TextField
          className={styles.descriptionChild}
          color="primary"
          sx={{ width: 605.9, backgroundColor: "#FFFFFF" }}
          variant="outlined"
        />
      </div>
      <div className={styles.plantLocaton}>
        <div className={styles.plantLocation}>Plant Location</div>
        <FormControl
          className={styles.parent}
          sx={{ width: 605.9, backgroundColor: "#FFFFFF" }}
          variant="outlined"
        >
          <InputLabel color="primary" />
          <Select color="primary" size="2x" />
          <FormHelperText />
        </FormControl>
      </div>
      <div className={styles.machine}>
        <div className={styles.plantLocation}>Machine</div>
        <TextField
          className={styles.machineChild}
          color="primary"
          sx={{ width: 605.9, backgroundColor: "#FFFFFF" }}
          variant="outlined"
        />
      </div>
      <div className={styles.deviceName}>
        <div className={styles.deviceName1}>Device Name</div>
        <TextField
          className={styles.deviceNameChild}
          color="primary"
          sx={{ width: 605.9, backgroundColor: "#FFFFFF" }}
          variant="outlined"
        />
      </div>
      <div className={styles.serialNumber}>
        <div className={styles.plantLocation}>Serial Number</div>
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
      <b className={styles.editDevice}>Edit Device</b>
    </form>
  );
};

export default DeviceManagementEdit;

