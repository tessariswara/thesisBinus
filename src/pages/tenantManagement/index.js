import { useCallback } from "react";
import {
  Button,
  TextField,
  InputAdornment,
  Icon,
  IconButton,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import {
  DataGrid,
  GridColDef,
  GridValueGetterParams
} from '@mui/x-data-grid';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styles from "../../styles/tmpage.module.css";

const columns: GridColDef[] = [
  { field: 'plantLocation', headerName: 'Plant Location', width: 250, headerClassName: 'super-app-theme--header', },
  { field: 'address', headerName: 'Address', width: 550, headerClassName: 'super-app-theme--header', },
  { field: 'description', headerName: 'Description', width: 450, headerClassName: 'super-app-theme--header', },
];

const rows = [
  { plantLocation: 'Jakarta Utara',
    address: "Jln. industri x no.123",
    description: "Plant XYZ berlokasi di jln. industri X no.123, Jakarta Utara"
  },
];


const TenantManagement = () => {
  const navigate = useNavigate();
  const onDashboardClick = useCallback(() => {
    navigate("/")
  }, [navigate]);

  const onLogClick = useCallback(() => {
    // Please sync "Home page" to the project
  }, []);

  const onDeviceClick = useCallback(() => {
    navigate("/devicemanagement");
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
          getRowId={(row)=> row.plantLocation}
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
      >
        Add Device
      </Button>
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
        <a className={styles.tenant}>Tenant </a>
        <a
           className={styles.devices}
           to="/devicemanagement"
           onClick={onDeviceClick}
        >
          Devices
        </a>
      </div>
      <div className={styles.user}>
        <div className={styles.userChild} />
        <div className={styles.admin}>Admin</div>
        <div className={styles.mangUjang}>Administrator</div>
      </div>
    </div>
  );
};

export default TenantManagement;
