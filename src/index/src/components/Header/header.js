import React from 'react';
import {AppBar, Toolbar, Button, Grid} from '@material-ui/core';
import useStyles from './headerStyles';
import {Link} from 'react-router-dom';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import Dvr from '@material-ui/icons/Dvr';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
export const Header = () => {
    const classes = useStyles();
    return (
        <div>
          <AppBar position="static">
              <Toolbar>
                  <Grid container spacing={3}>
                      {/* Notification */}
                    <Grid sm={4} className={classes.gridItem}>
                      <Link to="/Notification">
                        <Button className={classes.button}>
                        <NotificationsActiveIcon/> Notifications  
                        </Button>
                      </Link>
                    </Grid>
                      {/* Live */}
                    <Grid sm={4} className={classes.gridItem}>
                    <Link to="/live">
                        <Button className={classes.button}>
                        <Dvr/> Live
                        </Button>
                      </Link>
                    </Grid>
                      {/* Channels */}
                      <Grid sm={4} className={classes.gridItem}>
                      <Link to="/channels">
                        <Button className={classes.button}>
                        <QuestionAnswerIcon/> Channels
                        </Button>
                      </Link>
                    </Grid>
                  </Grid>
              </Toolbar>
          </AppBar>
        </div>
    );
}