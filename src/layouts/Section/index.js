import React, { Component } from "react";
import Typography from "@mui/material/Typography";
import Pagination from "@mui/material/Pagination";
import IconButton from "@mui/material/IconButton";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import CheckBox from "@mui/material/Checkbox";
import Drawer from "@mui/material/Drawer";
import TextField from "@mui/material/TextField";
import DateRangePicker from '@mui/lab/DateRangePicker';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';

import WbSunnyIcon from '@mui/icons-material/WbSunny';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Box } from "@mui/system";
import { FormControl } from "@mui/material";


function isLeapYear(year) {
  if (year % 100 === 0) {
    return year % 400 === 0;
  } else {
    return year % 4 === 0;
  }
}

function getDaysOfMonth(year, month) {
  switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      return 31;
    case 2:
      return isLeapYear(year) ? 29 : 28;
    default:
      return 30;
  }
}

class DateFilter extends Component {

  render() {
    const curDate = new Date();
    const day = curDate.getDate();
    const month = curDate.getMonth();
    const year = curDate.getFullYear();
    const dayString = curDate.toLocaleDateString();

    return (
      <div className='date-filter'>
        <div className='date-pagination'>
          <Pagination count={getDaysOfMonth(year, month)} color="primary" size='small' defaultPage={day}
          />
          <Typography variant='caption'>
            {dayString}
          </Typography>
        </div>
        <IconButton aria-label='Today'>
          <WbSunnyIcon fontSize='small' />
        </IconButton>
      </div>

    );
  }

}

function AddEventBox(props) {
  return (
    <form className='add-event-box'>
      <input type='text' name='event-name' placeholder='add event, press enter' />
      <IconButton aria-label='status filter'>
        <MoreVertIcon fontSize='small' />
      </IconButton>
    </form>
  );
}

function DrawConcent(props) {
  let values = [null, null];
  let setValue = (value) => {
    values = value;
  };

  return (
    <div className='draw-main'>
      <div className='draw-header'>
        <div className='header-left'>
          <MoreVertIcon fontSize='small' />
          <Typography variant='subtitle1'>Event Detail</Typography>
        </div>
        <MoreVertIcon fontSize='small' className='header-right' />
      </div>
      <div className='draw-content'>
        <FormControl size='small'>
          <Typography variant='subtitle2' className='form-item'>Test 1</Typography>
          <TextField id="event-description" label="Description" name='description'
          variant='standard' className='form-item form-text'/>
          <div className='btn-group form-item'>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DateRangePicker
                startText="Start-date"
                endText="End-date"
                value={values}
                onChange={setValue}
                renderInput={(startProps, endProps) => (
                  <React.Fragment>
                    <TextField {...startProps} size='small' variant='standard' className='form-text'/>
                    <Typography variant='body2' className='date-between-text'>to</Typography>
                    <TextField {...endProps} size='small' variant='standard' className='form-text'/>
                  </React.Fragment>
                )}
              />
            </LocalizationProvider>
          </div>
        </FormControl>
      </div>
      <div className='draw-footer'>
        <IconButton size='small' aria-label='save' className='save-btn'>
          <MoreVertIcon fontSize='small' />
        </IconButton>
        <div className='btn-group'>
          <IconButton size='small' aria-label='delete'>
            <MoreVertIcon fontSize='small' />
          </IconButton>
          <IconButton size='small'aria-label='menu'>
            <MoreVertIcon fontSize='small' />
          </IconButton>
        </div>
      </div>
    </div>

  );
}

function Main(props) {
  const drawerWidth = 240;
  return (
    <main className='section-main'>
      <div className='main-left'>
        <DateFilter />
        <AddEventBox />
        <EventList />
      </div>
      <Drawer
        className='main-right'
        anchor='right'
        open={false}
        variant="permanent"
        ModalProps={{ container: 'main', }}
      >
        <DrawConcent />
      </Drawer>
    </main>
  )
}

function Footer(props) {
  return (
    <footer className='section-footer'>

    </footer>
  )
}


function EventList(props) {
  const rows = [
    {
      event: '1', id: 1,
    },
    {
      event: '2', id: 2,
    }
  ];


  return (
    <div className='event-list'>
      <TableContainer component='div' >
        <Table aria-label="event table">
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id} hover={true}>
                <TableCell size="small" width='40px' padding='normal'>
                  <CheckBox size="small" />
                </TableCell>
                <TableCell size='small' align='left' padding='none'>
                  <Typography variant='caption' component='span'>
                    {row.event}
                  </Typography>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

    </div>
  )
}

export default function Section(props) {
  return (
    <section className='layout-section'>
      <Main />
      <Footer />
    </section>
  );
}