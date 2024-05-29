import React, { useState, useEffect } from 'react';
import graphql from 'babel-plugin-relay/macro';
import { QueryRenderer } from 'react-relay';
import { makeStyles } from '@material-ui/core/styles';

import List from '@material-ui/core/List';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuItem from '@material-ui/core/MenuItem';
import Skeleton from '@material-ui/lab/Skeleton';

import Link from '../../../components/Link';

import LightText from '../../../components/Texts/LightText';
import SearchInput from '../../../components/Inputs/SearchInput';
import { ADMIN_MENU_ITEMS } from '../../../config/menu';

import { Dimensions, Colors, Images } from '../../../styles';

import environment from '../../../relay-environment';

const SearchPeopleQuery = graphql`
  query SearchPeopleQuery($filter: SharingsFilterInput) {
    viewer {
      _id: id
    }
    sharings(sharingsFilter: $filter) {
      _id: id
      user {
        firstName
        lastName
        email
      }
      terminated
      userId
    }
  }
`;



const useStyles = makeStyles(theme => ({
  root: {},
  searchInput: {
    margin: '2rem 0',
  },
  searchList: {
    width: '100%',
    marginTop: '2rem',
  },
  searchListItem: {
    display: 'flex',
    alignItems: 'center',
    height: 44,
    borderRadius: 22,
    padding: '0 3rem',
    margin: '0.5rem 0',
    backgroundColor: 'rgba(56, 46, 98, 0.04) !important',
  },
  searchListItemSelected: {
    backgroundColor: 'rgba(56, 46, 98, 0.13) !important',
  },
  searchListItemText: {
    color: Colors.COLOR_WHITE,
  },
  skeleton: {
    width: '100%',
    height: 44,
    borderRadius: 22,
    transform: 'none',
    margin: '0.5rem 0',
  },
}));

const Search = (props: Object) => {
  const classes = useStyles();
  const [state, setState] = useState({
    sharings: null,
  });
  const { keyword } = props;
  const [_, __, path, objectId] = window.location.pathname.split('/');
  const token = localStorage.getItem('access_token');
  const decodedToken = JSON.parse(atob(token.split('.')[1]));

  const handleChangeKeyword = (keyword) => {
    props.onChangeKeyword(keyword);
  }

  return (
    <React.Fragment>
      <SearchInput 
        className={classes.searchInput} 
        value={keyword}
        onThrottleInput={handleChangeKeyword}
      />
      {
        <QueryRenderer
          environment={environment}
          query={SearchPeopleQuery}
          variables={{
            filter: {
              where: {
                providerId: decodedToken.id,
              },
              include: [{relation: 'user'}]
            }
          }}
          render={({error, props: relayProps}) => {
            if (!error && !relayProps) {
              return (
                <List className={classes.searchList}>
                  {
                    [1, 2, 3].map((v, i) => (
                      <Skeleton className={classes.skeleton} key={i}/>
                    ))
                  }
                </List>
              );
            }

            if (relayProps) {
              if (!state.sharings) {
                state.sharings = relayProps.sharings.map(sharing => ({
                  ...sharing,
                  user: {
                    ...sharing.user,
                    name: `${sharing.user.firstName} ${sharing.user.lastName}`
                  }
                }));
              }

              return (
                <List className={classes.searchList}>
                  {
                    (state.sharings || []).filter(sharing => !sharing.terminated && sharing.user.name.toLowerCase().includes(keyword.toLowerCase())).map((sharing, index) => (
                      <Link to={`/provider/patient/${sharing._id}?sharer=${sharing.userId}&&sharee=${relayProps.viewer._id}`} key={index}>
                        <MenuItem
                          button
                          classes={{
                            root: classes.searchListItem,
                            selected: classes.searchListItemSelected,
                          }}
                          selected={objectId === sharing._id}
                        >
                          <ListItemIcon><img src={Images.ICON_USER}/></ListItemIcon>
                          <ListItemText className={classes.searchListItemText} primary={`${sharing.user.name}`}/>
                        </MenuItem>
                      </Link>
                    ))
                  }
                </List>
              );
            }
          }}
        />
      }
    </React.Fragment>
  );
};

export default Search;