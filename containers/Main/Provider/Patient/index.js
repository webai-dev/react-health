import React, { useState, useEffect } from 'react';
import graphql from 'babel-plugin-relay/macro';
import { createFragmentContainer } from 'react-relay';
import { makeStyles } from '@material-ui/core/styles';
import moment from 'moment';

import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';

import { ProviderCard, GrayText, OutlineButton, PrimaryText } from '../../../../components';
import { Images } from '../../../../styles';
import i18n from '../../../../i18n';

import UpdateSharingMutation from '../../../../mutations/UpdateSharingMutation';

import ChatComponent from './ChatComponent';
import ProfileComponent from './ProfileComponent';
import HealthMarkerListComponent from './HealthMarkerListComponent';
import CalorieComponent from './CalorieComponent';
import DrugComponent from './DrugComponent';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%'
  },
  deleteButton: {
    padding: 0,
    margin: '2rem 0',
  },
  deleteButtonText: {
    marginLeft: '0.5rem',
  }
}));

const Patient = (props: Object) => {
  const classes = useStyles();
  const [state, setState] = useState({});
  const { viewer } = props;

  const handleClickDelete = () => {
    UpdateSharingMutation(viewer.sharing._id, {
      terminated: moment().format(),
    }).then(() => {
      window.location.href = '/provider/overview';
    });
  };

  return (
    <div className={classes.root}>
      {
        viewer && (
          <Box marginBottom="2rem">
            <GrayText size="extra">{viewer.sharer.firstName} {viewer.sharer.lastName}</GrayText>
          </Box>
        )
      }
      <Grid container spacing={2}>
        <Grid item xs={5}>
          <ProviderCard height={500}>
            <ProfileComponent
              user={viewer && viewer.sharer}
              anthropometries={viewer && viewer.anthropometries}
              diabetes={viewer && viewer.diabetes}
              lifestyles={viewer && viewer.lifestyles}
            />
          </ProviderCard>
        </Grid>
        <Grid item xs={7}>
          <ProviderCard height={500}>
            <ChatComponent 
              identity={viewer && `${viewer.viewer.email} ${viewer.viewer.firstName} ${viewer.viewer.lastName}`}
              channelId={viewer && viewer.sharing.twilioChatChannel.channelId}
            />
          </ProviderCard>
        </Grid>
        <Grid item xs={12}>
          <HealthMarkerListComponent 
            viewer={props.viewer}
            sharerId={props.viewer && props.viewer.sharer._id}
            providerId={props.viewer && props.viewer.viewer._id}
          />
        </Grid>
        <Grid item xs={12}>
          <CalorieComponent sharerId={props.viewer && props.viewer.sharer._id}/>
        </Grid>
        <Grid item xs={12}>
          <DrugComponent viewer={props.viewer}/>
        </Grid>
        <OutlineButton size="small" width={280} className={classes.deleteButton} onClick={handleClickDelete}>
          <img src={Images.ICON_TIMES}></img>
          <PrimaryText className={classes.deleteButtonText}>{i18n.t('Delete from your list')}</PrimaryText>
        </OutlineButton>
      </Grid>
    </div>
  );
};

export default createFragmentContainer(
  Patient,
  {
    viewer: graphql`
      fragment Patient_viewer on Query {
        viewer {
          _id: id
          email
          firstName
          lastName
        }
        sharing(id: $id, sharingFilter: $sharingFilter) {
          _id: id
          twilioChatChannel {
            channelId
          }
        }
        sharer: user(id: $sharerId, userFilter: $userFilter) {
          _id: id
          firstName
          lastName
          email
          cellPhone
          birthDate
          userBaseline {
            sex
            useCgm
            useCgmType
            usePump
            usePumpType
            useStrips
            aimGoalWeight
            useSmartWatch
            useSmartWatchType
          }
        }
        anthropometries(anthropometriesFilter: $anthropometriesFilter) {
          weight
          height
          date
        }
        diabetes(diabetesFilter: $diabetesFilter) {
          diabetesStatus
          date
        }
        lifestyles(lifestylesFilter: $lifestylesFilter) {
          exerciseLevel
          date
          dietType
        }
        ...HealthMarkerListComponent_viewer
        ...DrugComponent_viewer
      }
    `,
  }
);