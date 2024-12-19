import logo from './logo.svg';
import './App.css';
import { Typography, Autocomplete, TextField, Grid, } from '@mui/material';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3';
import { DateTimePicker, DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { useEffect, useState } from 'react';



function App() {
  const [meetingId, setMeetingId] = useState('test')
  const [dateMeeting, setDate] = useState('')
  const [dataMeeting, setMeeting] = useState({})

  useEffect(() => {
    fetch(`/meeting/${meetingId}`)
      .then(x => x.json())
      .then(x => setMeeting(x))
  }, [meetingId])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <body>
        <Typography variant='h1'>Create Note</Typography>
        <Autocomplete
          id="meetingTitle"
          freeSolo
          value={meetingId}
          options={['test', 'test', 'hahaha', 'hahahha']}
          onChange={(event, newVal) => { console.log(event, newVal); setMeetingId(newVal) }}
          renderInput={(params) => <TextField {...params} label="meetingTitle" />}
        />

        <Grid container spacing={2}>
          <Grid item xs={6}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                label="Date/Time"
                value={dateMeeting}
                onChange={(newValue) => {
                  setDate(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
          </Grid>
          <Grid item xs={6}>
            <TextField label='Note Taker'> </TextField>
          </Grid>

          <Grid item xs={6}>
            <TextField label='Location'> </TextField>
          </Grid>

          <Grid item xs={6}>
            <TextField label='Meeting Called By'> </TextField>
          </Grid>
        </Grid>

      </body>
    </div>
  );
}

export default App;
