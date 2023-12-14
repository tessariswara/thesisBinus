import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { DateRangePicker } from '@mui/x-date-pickers-pro';
import Popover from '@mui/material/Popover';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';

function DateTimeRangePicker() {
  const [value, setValue] = useState([null, null]);

  const handleDateChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <PopupState variant="popover" popupId="demo-popup-popover">
      {(popupState) => (
        <div>
          <Button variant="contained" {...bindTrigger(popupState)}>
            Open Date Range Picker
          </Button>
          <Popover
            {...bindPopover(popupState)}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}
          >
            <Box p={2}>
              <Typography>Date Range Picker</Typography>
              <DateRangePicker
                calendars={2}
                value={value}
                onChange={handleDateChange}
                renderInput={(startProps, endProps) => (
                  <>
                    <input {...startProps.input} placeholder="Start Date" />
                    <input {...endProps.input} placeholder="End Date" />
                  </>
                )}
              />
            </Box>
          </Popover>
        </div>
      )}
    </PopupState>
  );
}

export default DateTimeRangePicker;
