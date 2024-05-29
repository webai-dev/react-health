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

import { Dimensions, Colors } from '../../../styles';

import environment from '../../../relay-environment';

const SearchUserQuery = graphql`
  query SearchUserQuery($filter: UsersFilterInput) {
    users(usersFilter: $filter) {
      _id: id
      firstName
      lastName
    }
  }
`;

const SearchRecipeQuery = graphql`
  query SearchRecipeQuery($filter: RecipesFilterInput) {
    recipes(recipesFilter: $filter) {
      _id: id
      title
    }
  }
`;

const SearchFoodQuery = graphql`
  query SearchFoodQuery($filter: FoodsFilterInput) {
    foods(foodsFilter: $filter) {
      _id: id
      label
    }
  }
`;

const SearchActivityQuery = graphql`
  query SearchActivityQuery($filter: ActivitiesFilterInput) {
    activities(activitiesFilter: $filter) {
      _id: id
      label
    }
  }
`;

const SearchDrugsQuery = graphql`
  query SearchDrugQuery($filter: DrugsFilterInput) {
    drugs(drugsFilter: $filter) {
      _id: id
      labelTitle
      labelSubTitle
    }
  }
`;

const queryMap = {
  'users': SearchUserQuery,
  'recipes': SearchRecipeQuery,
  'foods': SearchFoodQuery,
  'activities': SearchActivityQuery,
  'drugs': SearchDrugsQuery
}

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
    color: Colors.COLOR_GRAY,
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
  const [state, setState] = useState({});
  const [_, __, path, objectId] = window.location.pathname.split('/');
  const selectedMenuItem = ADMIN_MENU_ITEMS.find(menuItem => menuItem.link === path);
  const { keyword } = props;
  let filter = {};

  if (path === 'users') {
    filter = {
      where: {
        or: [
          {firstName: {like: `%${(keyword || '').trim()}%`}},
          {lastName: {like: `%${(keyword || '').trim()}%`}}
        ],
      },
    };
  } else if (path === 'recipes') {
    filter = {
      where: {
        title: {like: `%${(keyword || '').trim()}%`}
      }
    };
  } else if (path === 'foods') {
    filter = {
      where: {
        label: {like: `%${(keyword || '').trim()}%`}
      }
    };
  } else if (path === 'activities') {
    filter = {
      where: {
        label: {like: `%${(keyword || '').trim()}%`}
      }
    };
  } else if (path === 'drugs') {
    filter = {
      where: {labelTitle: {like: `%${(keyword || '').trim()}%`}}
    };
  }

  const handleChangeKeyword = (keyword) => {
    props.onChangeKeyword(keyword);
  }

  return (
    <React.Fragment>
      <LightText size="extra">{selectedMenuItem && selectedMenuItem.text}</LightText>
      <SearchInput 
        className={classes.searchInput} 
        value={keyword}
        onThrottleInput={handleChangeKeyword}
      />
      {
        keyword && keyword.length >= 3 && (
          <QueryRenderer
            environment={environment}
            query={queryMap[path]}
            variables={{
              filter
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
                const resultList = relayProps[path];

                return (
                  <List className={classes.searchList}>
                    {
                      resultList.map((item, index) => (
                        <Link to={`/administrator/${selectedMenuItem.link}/${item._id}`} key={index}>
                          <MenuItem
                            button
                            classes={{
                              root: classes.searchListItem,
                              selected: classes.searchListItemSelected,
                            }}
                            selected={objectId === item._id}
                          >
                            <ListItemIcon><img src={selectedMenuItem && selectedMenuItem.icon}/></ListItemIcon>
                            { path === 'users' && <ListItemText className={classes.searchListItemText} primary={`${item.firstName} ${item.lastName}`}/> }
                            { path === 'recipes' && <ListItemText className={classes.searchListItemText} primary={item.title}/> }
                            { path === 'foods' && <ListItemText className={classes.searchListItemText} primary={item.label}/> }
                            { path === 'activities' && <ListItemText className={classes.searchListItemText} primary={item.label}/> }
                            { path === 'drugs' && <ListItemText className={classes.searchListItemText} primary={item.labelTitle}/> }
                          </MenuItem>
                        </Link>
                      ))
                    }
                  </List>
                );
              }
            }}
          />
        )
      }
    </React.Fragment>
  );
};

export default Search;