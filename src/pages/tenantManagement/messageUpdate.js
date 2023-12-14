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
        Are you sure want to update this plant location?
      </div>
      <div className={styles.searchButton}>
        <Button
          className={styles.update}
          sx={{ width: 160, height: 40, backgroundColor: "#424242", position: "absolute" }}
          color="primary"
          variant="contained"
	  onClick={submit}
        >
          Update
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
