import { Button } from "@mui/material";
import styles from "../../styles/popupMessage.module.css";


const MessageSaveDevice = ({ onClose }) => {
  const submit = () => {
    window.location.reload(false);
  };

  return (
    <div className={styles.messageUpdateDevice}>
      <div className={styles.messageUpdateDeviceChild} />
      <b className={styles.pleaseConfirm}>Please Confirm</b>
      <div className={styles.areYouSure}>
        Are you sure your input data is correct?
      </div>
      <div className={styles.searchButton}>
        <Button
          className={styles.update}
          sx={{ width: 160, height: 40, backgroundColor: "#424242", position: "absolute" }}
          color="primary"
          variant="contained"
          onClick={submit}
        >
          Save
        </Button>
        <Button
          className={styles.cancel}
          sx={{ width: 160, height: 40, backgroundColor: "#FFFFFF", color: "Black",  position: "absolute" }}
          color="primary"
          variant="contained"
          onClick={onClose}
        >
          Cancel
        </Button>
      </div>
    </div>
  );
};

export default MessageSaveDevice;
