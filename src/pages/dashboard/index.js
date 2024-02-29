import React, { useState, useEffect } from 'react';
import { Grid, Typography,Paper, CircularProgress, Box } from '@mui/material';

const DashboardDefault = () => {
  const [serverLoad, setServerLoad] = useState({ value: 75, error: false }); // Mocked default value
  const [scheduledJobs, setScheduledJobs] = useState({ data: [], error: false });
  const [userJobs, setUserJobs] = useState({ data: [], error: false });
  const [timeTillCompletion, setTimeTillCompletion] = useState({ value: 'N/A', error: false });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        // Mock fetching data from endpoints
        // Here, we're using setTimeout to simulate asynchronous API calls
        setTimeout(() => {
          setServerLoad({ value: 60, error: false }); // Simulate successful fetch
          setScheduledJobs({ data: [{ id: 1, task: 'Job 1' }, { id: 2, task: 'Job 2' }], error: false });
          setUserJobs({ data: [{ id: 1, task: 'User Job 1' }], error: false });
          setTimeTillCompletion({ value: '24 hours', error: false });
          setLoading(false);
        }, 1000);
      } catch (err) {
        // If fetching fails, set default values
        console.error("Fetching data failed: ", err);
        setServerLoad({ ...serverLoad, error: true });
        setScheduledJobs({ ...scheduledJobs, error: true });
        setUserJobs({ ...userJobs, error: true });
        setTimeTillCompletion({ ...timeTillCompletion, error: true });
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  
  if (loading) return <Box sx={{ display: 'flex', justifyContent: 'center', mt: 5 }}><CircularProgress /></Box>;

  const renderServerLoad = () => (
    <Box sx={{ position: 'relative', display: 'inline-flex', m: 2 }}>
      <CircularProgress variant="determinate" value={serverLoad.value} size={70} />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography variant="caption" component="div" color="text.secondary">
          {`${Math.round(serverLoad.value)}%`}
        </Typography>
      </Box>
    </Box>
  );

  return (
    <Box sx={{ flexGrow: 1, p: 3 }}> {/* Add padding around the entire grid */}
      <Grid container spacing={3}> {/* Increase spacing between grid items */}
        <Grid item xs={12}>
          <Typography variant="h4" gutterBottom>Dashboard</Typography> {/* Add gutterBottom for spacing below the title */}
        </Grid>
        <Grid item xs={12} md={6} lg={4}> {/* Example of a grid item with responsive width */}
          <Paper elevation={3} sx={{ p: 2 }}> {/* Use Paper for elevation and padding */}
            <Typography variant="h6" gutterBottom>Server Load</Typography>
            {serverLoad.error ? "Error loading server load" : renderServerLoad()}
          </Paper>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>Scheduled Jobs</Typography>
            {scheduledJobs.error ? "Error loading scheduled jobs" : (
              <ul>
                {scheduledJobs.data.map((job) => (
                  <li key={job.id}>{job.task}</li>
                ))}
              </ul>
            )}
          
          </Paper>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>User Jobs</Typography>
            {userJobs.error ? "Error loading user jobs" : (
              <ul>
                {userJobs.data.map((job) => (
                  <li key={job.id}>{job.task}</li>
                ))}
              </ul>
            )}
          </Paper>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>Time Till Completion</Typography>
            {timeTillCompletion.error ? "Error loading time till completion" : timeTillCompletion.value}
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default DashboardDefault;
