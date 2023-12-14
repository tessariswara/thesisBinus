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
import styles from "../../styles/tmPagesSave.module.css";
import MessageSaveDevice from "./messageSave.js";

const TenantManagementSave = ({ onClose }) => {

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
      className={styles.tenantManagementSave}
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
        <TextField
          className={styles.plantLocationChild}
          color="primary"
          sx={{ width: 605.9, backgroundColor: "#FFFFFF" }}
          variant="outlined"
        />
      </div>
      <b className={styles.addTenant}>Add New Plant Location</b>
    </form>
  );
};

export default TenantManagementSave;
