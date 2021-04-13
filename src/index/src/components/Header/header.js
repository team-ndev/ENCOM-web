import React from 'react';
import {AppBar, Toolbar, Button, Grid} from '@material-ui/core';
import useStyles from './headerStyles';
import {Link} from 'react-router-dom';

export const Header = () => {
    const classes = useStyles();
    return (
        <div>
          <AppBar position="static">
              <Toolbar>
                  <Grid container spacing={3}>
                      {/* Notification */}
                    <Grid sm={4} className={classes.gridItem}>
                      <Link to="/">
                        <Button className={classes.button}>
                            Notifications
                        </Button>
                      </Link>
                    </Grid>
                      {/* Live */}
                    <Grid sm={4} className={classes.gridItem}>
                    <Link to="/live">
                        <Button className={classes.button}>
                            Live
                        </Button>
                      </Link>
                    </Grid>
                      {/* Channels */}
                      <Grid sm={4} className={classes.gridItem}>
                      <Link to="/channels">
                        <Button className={classes.button}>
                            Channels
                        </Button>
                      </Link>
                    </Grid>
                  </Grid>
              </Toolbar>
          </AppBar>
        </div>
    );
}