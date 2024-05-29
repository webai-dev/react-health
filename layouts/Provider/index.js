import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import { PrimaryText, LightText, Link } from '../../components';

import { PROVIDER_MENU_ITEMS } from '../../config/menu';
import { Dimensions, Images, Colors } from '../../styles';
import i18n from '../../i18n';

import Search from './Search';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    width: '100%',
    height: '100%',
  },
  appBar: {
    width: `calc(100% - ${Dimensions.DIMENSION_LEFT_MENU_WIDTH}px)`,
    marginLeft: Dimensions.DIMENSION_LEFT_MENU_WIDTH,
  },
  content: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#F5F6FA',
    width: `calc(100% - ${Dimensions.DIMENSION_LEFT_MENU_WIDTH}px)`,
    height: '100%',
    padding: '3rem',
  },
  drawer: {
    width: Dimensions.DIMENSION_LEFT_MENU_WIDTH,
    flexShrink: 0,
  },
  drawerPaper: {
    width: Dimensions.DIMENSION_LEFT_MENU_WIDTH,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '2rem',
    backgroundColor: Colors.COLOR_PRIMARY_TEXT,
  },
  menuList: {
    width: '100%',
    marginTop: '2rem',
  },
  menuListItem: {
    display: 'flex',
    alignItems: 'center',
    height: 44,
    borderRadius: 22,
    padding: '0 3rem',
    margin: '0.5rem 0',
  },
  menuListItemSelected: {
    backgroundColor: 'rgba(255, 255, 255, 0.11) !important',
  },
  menuListItemText: {
    color: Colors.COLOR_WHITE,
  },
  searchMenu: {
    padding: '3rem',
    width: Dimensions.DIMENSION_LEFT_MENU_WIDTH,
  },
}));

const ProviderLayout = (props: Object) => {
  const classes = useStyles();
  const [state, setState] = useState({
    searchKeyword: '',
  });
  const [_, __, path] = window.location.pathname.split('/');

  const handleClickMenuItem = () => {
    handleChangeSearchKeyword('');
  };

  const handleChangeSearchKeyword = (searchKeyword) => {
    setState((prevState) => ({
      ...prevState,
      searchKeyword,
    }));
  };

  const handleClickLogout = () => {
    localStorage.setItem('access_token', '');
    props.router.push('/provider/login');
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <img className={classes.logo} src={Images.IMAGE_LOGO}/>
        <List className={classes.menuList}>
          {
            PROVIDER_MENU_ITEMS.map((menuItem, index) => (
              <Link to={`/provider/${menuItem.link}`} key={index}>
                <MenuItem
                  button
                  classes={{
                    root: classes.menuListItem,
                    selected: classes.menuListItemSelected,
                  }}
                  selected={path === menuItem.link}
                  onClick={handleClickMenuItem}
                >
                  <ListItemIcon><img src={menuItem.icon}/></ListItemIcon>
                  <ListItemText className={classes.menuListItemText} primary={menuItem.text}/>
                </MenuItem>
              </Link>
            ))
          }
          <ListItem button className={classes.menuListItem} onClick={handleClickLogout}>
            <ListItemText className={classes.menuListItemText} primary={i18n.t('Log out')}/>
          </ListItem>
        </List>

        <Box marginTop="3rem" textAlign="left" width="100%">
          <LightText size="title">{i18n.t('People')}</LightText>
        </Box>

        <Search 
          keyword={state.searchKeyword}
          onChangeKeyword={handleChangeSearchKeyword}
        />
      </Drawer>

      <main className={classes.content}>
        {props.children}
      </main>
    </div>
  );
};

export default ProviderLayout;