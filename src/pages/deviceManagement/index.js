import { useCallback, useState } from "react";
import {
  Button,
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Dialog
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import {
  DataGrid,
  GridColDef,
  GridValueGetterParams
} from '@mui/x-data-grid';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styles from "../../styles/dmpage.module.css";
import DeviceManagementEdit from "./editDevice.js";
import DeviceManagementSave from "./saveDevice.js";


const columns: GridColDef[] = [
  { field: 'deviceName', headerName: 'Device Name', width: 200, headerClassName: 'super-app-theme--header', },
  { field: 'serialNumber', headerName: 'Serial Number', width: 150, headerClassName: 'super-app-theme--header', },
  { field: 'machineName', headerName: 'Machine Name', width: 200, headerClassName: 'super-app-theme--header', },
  { field: 'plantLocation', headerName: 'Plant Location', width: 200, headerClassName: 'super-app-theme--header', },
  { field: 'description', headerName: 'Description', width: 350, headerClassName: 'super-app-theme--header', },
  { field: 'status', headerName: 'Status', width: 150, headerClassName: 'super-app-theme--header', },
];

const rows = [
  { deviceName: "Oil Level Monitoring",
    serialNumber: 'SN124',
    machineName: 'Mesin CNC 10',
    plantLocation: 'Jakarta Utara',
    description: "Sensor untuk monitoring ketinggian oli",
    status: "Not Connected"
  },
];

const DeviceManagement = () => {

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
      case 'add':
        return (
          <Dialog open={open} onClose={handleClose}
            sx={{
              "& .MuiDialog-container": {
                "& .MuiPaper-root": {
                  width: "100%",
                  maxWidth: "695px",
                },
              },
            }}
          >
            <DeviceManagementSave onClose={handleClose}/>
          </Dialog>
       );
      case 'edit':
        return (
          <Dialog open={open} onClose={handleClose}
            sx={{
              "& .MuiDialog-container": {
                "& .MuiPaper-root": {
                  width: "100%",
                  maxWidth: "695px",
                },
              },
            }}
          >
            <DeviceManagementEdit onClose={handleClose}/>
          </Dialog>
        );
      default:
        return null;
    }
  };

  const navigate = useNavigate();
  const onDashboardClick = useCallback(() => {
    navigate("/")
  }, [navigate]);

  const onLogClick = useCallback(() => {
    // Please sync "Home page" to the project
  }, []);

  const onTenantClick = useCallback(() => {
    navigate("/tenantManagement")
  }, [navigate]);

  return (
    <div className={styles.deviceManagementPage}>
      <div className={styles.table}>
        <DataGrid
          sx = {{
                 "& .super-app-theme--header": {
                  color:"#FFFFFF",
                  menuIconColor: "#FFFFFF",
                  backgroundColor:"#424242"
                 }
          }}
          rows={rows}
          columns={columns}
          getRowId={(row)=> row.serialNumber}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 25 },
            },
          }}
          pageSizeOptions={[5, 10, 15, 20, 25]}
        />
      </div>
      <div className={styles.background} />
      <div className={styles.deviceManagement}>Device Management</div>
      <Button
        className={styles.editDevice}
        sx={{
                width: 239.3,
                height: 60.7,
                backgroundColor: "#424242",
		position: "absolute"
        }}
        variant="contained"
        onClick={() => handleClickOpen('edit')}
      >
        Edit Device
      </Button>
      <Button
        className={styles.addDevice}
        sx={{
                width: 239.3,
                height: 60.7,
                backgroundColor: "#424242",
		position: "absolute"
        }}
        variant="contained"
        onClick={() => handleClickOpen('add')}
      >
        Add Device
      </Button>
      <Dialog open={open} onClose={handleClose}>
        {renderDialog()}
      </Dialog>
      <TextField
        className={styles.search}
        color="primary"
        label="Search"
        sx={{ width: 1249, height: 83, position: "absolute" }}
        variant="filled"
      />
      <div className={styles.navigationBar}>
        <a
           className={styles.dashboard}
           to="/"
           onClick={onDashboardClick}
        >
          Dashboard
        </a>
        <a className={styles.log} onClick={onLogClick}>
          Log
        </a>
        <a
           className={styles.tenant}
           to="/tenantmanagement"
           onClick={onTenantClick}
        >
          Tenant
        </a>
        <a className={styles.devices}>Devices</a>
      </div>
      <div className={styles.user}>
        <div className={styles.userChild} />
        <div className={styles.admin}>Admin</div>
        <div className={styles.mangUjang}>Administrator</div>
      </div>
    </div>
  );
};
export default DeviceManagement;
