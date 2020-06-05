import React, { useState} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import PhotoIcon from '@material-ui/icons/PhotoLibrary';
import SearchIcon from '@material-ui/icons/Search';
import HeaderStyle from  "./HeaderStyle";


export default function SearchAppBar({handleSearch}) {
  
  const classes = HeaderStyle();
  
 
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="open drawer"
            >
              <PhotoIcon />
            </IconButton>
            <Typography className={classes.title} variant="h6" noWrap>
              Photo app
            </Typography>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search images by typing anything. e.g:Barcelona"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
                onChange={handleSearch}
                
              />
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  

  
}
