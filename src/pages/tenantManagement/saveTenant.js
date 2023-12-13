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
import styles from "../../styles/dmPagesSave.module.css";
import MessageSaveDevice from "./messageSave.js";

const DeviceManagementSave = ({ onClose }) => {

  const [open, setOpen] = useState(false);
  const [dialogType, setDialogType] = useState('');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleClose();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={styles.deviceManagementSave}
    >
      <div className={styles.button}>
        <Button
          className={styles.save}
          sx={{ width: 108.4, height: 40, backgroundColor: "#424242", position: "absolute" }}
          color="primary"
          variant="contained"
          onClick={handleClickOpen}
        >
          Save
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
          <MessageSaveDevice onClose={handleClose}/>
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
        <TextField
          className={styles.serialNumberChild}
          color="primary"
          sx={{ width: 605.9, backgroundColor: "#FFFFFF" }}
          variant="outlined"
        />
      </div>
      <b className={styles.addDevice}>Add New Device</b>
    </form>
  );
};

export default DeviceManagementSave;
