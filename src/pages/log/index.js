import { useCallback, useState, Fragment } from "react";
import {
  Button,
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Dialog,
  Menu,
  MenuItem
} from "@mui/material";
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import {KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material';
import { Link, useNavigate } from "react-router-dom";
import { LineChart } from '@mui/x-charts/LineChart';
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

  const data = [
    { x: 1, y: 30 },
    { x: 2, y: 40 },
    { x: 3, y: 5 },
    { x: 4, y: 2 },
    { x: 5, y: 21 },
  ];

  const sortedData = [...data].sort((a, b) => a.y - b.y);
  const xValues = sortedData.map(item => item.x);
  const yValues = sortedData.map(item => item.y);
  const download = () => {
    //api download
  };

  return (
    <div className={styles.logPage}>
      <div className={styles.chart}>
        <LineChart
          width={1270}
          height={513}
          series={[{ data: xValues}]}
          xAxis={[{ scaleType: 'point', data: yValues }]}
        />
      </div>
      <div className={styles.background} />
      <div className={styles.log}>Log Data</div>
      <PopupState variant="popover" popupId="demo-popup-menu">
        {(popupState) => (
          <Fragment>
            <Button
              className={styles.list}
              sx={{
                      width: 239.3,
                      height: 60.7,
                      backgroundColor: "#424242",
                      position: "absolute"
              }}
              variant="contained"
              endIcon={ popupState.isOpen ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
              {...bindTrigger(popupState)}
            >
              List Device
            </Button>
            <Menu {...bindMenu(popupState)} PaperProps={{ sx: { width: 239.3}}}>
              <MenuItem onClick={popupState.close}>Profile</MenuItem>
              <MenuItem onClick={popupState.close}>My account</MenuItem>
              <MenuItem onClick={popupState.close}>Logout</MenuItem>
            </Menu>
          </Fragment>
        )}
      </PopupState>
      <Button
        className={styles.buttonDownload}
        sx={{
                width: 239.3,
                height: 60.7,
                backgroundColor: "#424242",
                position: "absolute"
        }}
        variant="contained"
        onClick={download}
      >
        Download
      </Button>
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
