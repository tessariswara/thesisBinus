import { Button } from "@mui/material";
import styles from "../../styles/popupMessage.module.css";


const MessageUpdateDevice = ({ onClose }) => {
  const submit = () => {
    window.location.reload(false);
  };

  return (
    <div className={styles.messageUpdateDevice}>
      <div className={styles.messageUpdateDeviceChild} />
      <b className={styles.pleaseConfirm}>Please Confirm</b>
      <div className={styles.areYouSure}>
        Are you sure want to delete this plant location? This action cannot be undone.
      </div>
      <div className={styles.searchButton}>
        <Button
          className={styles.update}
          sx={{ width: 160, height: 40, backgroundColor: "#FF5B5B", position: "absolute" }}
          color="primary"
          variant="contained"
          onClick={submit}
        >
          Delete
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

export default MessageUpdateDevice;
