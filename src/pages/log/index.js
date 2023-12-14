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
import styles from "../../styles/logpage.module.css";

const Log = () => {

  const navigate = useNavigate();
  const onDashboardClick = useCallback(() => {
    navigate("/")
  }, [navigate]);

  const onTenantClick = useCallback(() => {
    navigate("/tenantManagement")
  }, [navigate]);

  const onDeviceClick = useCallback(() => {
    navigate("/deviceManagement")
  }, [navigate]);

  return (
    <div className={styles.logPage}>
      <div className={styles.background} />
      <div className={styles.log}>Log Data</div>
      <div className={styles.navigationBar}>
        <a
           className={styles.dashboard}
           to="/"
           onClick={onDashboardClick}
        >
          Dashboard
        </a>
        <a className={styles.logNavigation}>Log</a>
        <a
           className={styles.tenant}
           to="/tenantmanagement"
           onClick={onTenantClick}
        >
          Tenant
        </a>
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
export default Log;
