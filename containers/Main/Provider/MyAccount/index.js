import React, { useState } from 'react';
import graphql from 'babel-plugin-relay/macro';
import { createFragmentContainer } from 'react-relay';
import { makeStyles } from '@material-ui/core/styles';

import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';

import ProfileItem from './ProfileItem';

import { PrimaryButton, WhiteText } from '../../../../components';

import i18n from '../../../../i18n';
import { Images } from '../../../../styles';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    padding: '70px 120px',
  },
  card: {
    padding: '2rem 2.5rem',
  },
  icon: {
    backgroundColor: '#ff6961',
    padding: '5px 5px 0 5px',
    borderRadius: '8px',
    marginRight: '1rem',
  },
  logoutButton: {
    marginTop: '2rem',
  },
  name: {
    color: '#4A7C8E',
    fontSize: 24,
    borderBottom: '1px solid #aaa',
  },
  title: {
    fontSize: 28,
  }
}));


const MyAccount = (props: Object) => {
  const classes = useStyles();
  const [state, setState] = useState();

  if (!props.viewer) {
    return null;
  }

  const { viewer } = props.viewer;

  const handleClickLogout = () => {
    localStorage.setItem('access_token', '');

    props.router.push('/provider/login');
  };

  return (
    <div className={classes.root}>
      <Box display="flex" alignItems="center" marginBottom="2rem">
        <div className={classes.icon}>
          <img src={Images.ICON_USER}/>
        </div>
        <div className={classes.title}><strong>{i18n.t('My account')}</strong></div>
      </Box>
      <Card className={classes.card}>
        <div className={classes.name}>{viewer.firstName} {viewer.lastName}</div>
        <ProfileItem
          name="email"
          title={i18n.t('E-mail')}
          value={viewer.email}
          userId={viewer._id}
        />
        <ProfileItem
          name="cellPhone"
          title={i18n.t('Telephone number')}
          value={viewer.cellPhone}
          userId={viewer._id}
        />
        <ProfileItem
          title={i18n.t('Professional role')}
          value={i18n.t('Doctor')}
          readonly
        />
        <ProfileItem
          title={i18n.t('Messages')}
          value={i18n.t('No unread messages')}
          readonly
        />
        <ProfileItem
          name="password"
          email={viewer.email}
          title={i18n.t('Password')}
          value="********"
          inputType="password"
          userId={viewer._id}
        />
        <ProfileItem
          title={i18n.t('Invitations')}
          value={viewer.sharers.filter(share => !share.dateStarted).length}
          readonly
        />
        <ProfileItem
          title={i18n.t('Active shares')}
          value={viewer.sharers.filter(share => share.dateStarted).length}
          readonly
        />
        <PrimaryButton
          className={classes.logoutButton}
          size="medium" 
          width={150}
          onClick={handleClickLogout}
        >
          <WhiteText>{i18n.t('Logout')}</WhiteText>
        </PrimaryButton>
      </Card>
    </div>
  );
};

export default createFragmentContainer(
  MyAccount, 
  {
    viewer: graphql`
      fragment MyAccount_viewer on Query {
        viewer(viewerFilter: $filter) {
          _id: id
          email
          firstName
          lastName
          cellPhone
          sharers {
            _id: id
            dateStarted
          }
        }
      }
    `,
  }
);