import React from 'react';
import { makeRouteConfig, Route, Redirect } from 'found';
import graphql from 'babel-plugin-relay/macro';

import { RelayDataContainer } from './components';

import AdminLogin from './containers/Auth/Login/Admin';
import ProviderLogin from './containers/Auth/Login/Provider';
import ProviderRegister from './containers/Auth/Register/Provider';
import SendEmail from './containers/Auth/ResetPassword/SendEmail';
import ChangePassword from './containers/Auth/ResetPassword/ChangePassword';

import AdminLayout from './layouts/Admin';
import ProviderLayout from './layouts/Provider';

import UserContainer from './containers/Main/Admin/User';
import UpdateUserContainer from './containers/Main/Admin/User/UpdateUser';

import RecipeContainer from './containers/Main/Admin/Recipe';
import CreateRecipeContainer from './containers/Main/Admin/Recipe/CreateRecipe';
import UpdateRecipeContainer from './containers/Main/Admin/Recipe/UpdateRecipe';

import FoodContainer from './containers/Main/Admin/Food';
import CreateFoodContainer from './containers/Main/Admin/Food/CreateFood';
import UpdateFoodContainer from './containers/Main/Admin/Food/UpdateFood';

import ActivityContainer from './containers/Main/Admin/Activity';
import CreateActivityContainer from './containers/Main/Admin/Activity/CreateActivity';
import UpdateActivityContainer from './containers/Main/Admin/Activity/UpdateActivity';

import MedicineContainer from './containers/Main/Admin/Medicine';
import CreateMedicineContainer from './containers/Main/Admin/Medicine/CreateMedicine';
import UpdateMedicineContainer from './containers/Main/Admin/Medicine/UpdateMedicine';

import OverviewContainer from './containers/Main/Provider/Overview';
import PatientContainer from './containers/Main/Provider/Patient';
import MyAccount from './containers/Main/Provider/MyAccount';


const CreateRecipeQuery = graphql`
  query routesCreateRecipeQuery {
    ...CreateRecipe_viewer
  }
`;

const UpdateRecipeQuery = graphql`
  query routesUpdateRecipeQuery($id: Float!) {
    ...UpdateRecipe_viewer
  }
`;

//activity
const UpdateActivityQuery = graphql`
  query routesUpdateActivityQuery($id: Float!) {
    ...UpdateActivity_viewer
  }
`;

const UpdateFoodQuery = graphql`
  query routesUpdateFoodQuery($id: Float!, $filter: FoodFilterInput) {
    ...UpdateFood_viewer
  }
`;

const UpdateMedicineQuery = graphql`
  query routesUpdateMedicineQuery($id: Float!) {
    ...UpdateMedicine_viewer
  }
`;

const UpdateUserQuery = graphql`
  query routesUpdateUserQuery($id: Float!, $filter: UserFilterInput) {
    ...UpdateUser_viewer
  }
`;

const MyAccountQuery = graphql`
  query routesMyAccountQuery($filter: ViewerFilterInput) {
    ...MyAccount_viewer
  }
`;

const OverviewQuery = graphql`
  query routesMyOverviewQuery($filter: ViewerFilterInput) {
    ...Overview_viewer
  }
`;

const PatientQuery = graphql`
  query routesPatientQuery(
    $id: Float!, 
    $sharerId: Float!, 
    $sharingFilter: SharingFilterInput, 
    $healthMarkerMonitorsFilter: HealthMarkerMonitorsFilterInput,
    $healthMarkerMonitorIntervalsFilter: HealthMarkerMonitorIntervalsFilterInput,
    $drugEntriesFilter: DrugEntriesFilterInput,
    $userFilter: UserFilterInput,
    $anthropometriesFilter: AnthropometriesFilterInput,
    $diabetesFilter: DiabetesFilterInput,
    $lifestylesFilter: LifestylesFilterInput,
  ) {
    ...Patient_viewer
  }
`;

const transformQueryParams = (params, paramId) => {
  if (params[paramId] === 'new') {
    params[paramId] = '';
  } else {
    params[paramId] = parseFloat(params[paramId]);
    params.skip = false;
  }

  return params;
};

export default makeRouteConfig(
  <Route>
    <Route path='administrator'>
      <Route path='login' Component={AdminLogin}/>
      <Route path='send-email' Component={SendEmail}/>
      <Route path='reset-password' Component={ChangePassword}/>
      <Route Component={props => <AdminLayout {...props}/>}>
        <Route path='users'>
          <Route path='' render={() => <UserContainer/>}/>
          <Route
            path=':id'
            render={relay => <RelayDataContainer relay={relay} Component={UpdateUserContainer}/>}
            query={UpdateUserQuery}
            prepareVariables={params => ({
              ...transformQueryParams(params, 'id'),
              filter: {
                include: [
                  {relation: 'userBaseline'},
                ],
              }
            })}
          />
        </Route>
        <Route path='recipes'>
          <Route path='' render={() => <RecipeContainer/>}/>
          <Route 
            path='new'
            render={relay => <RelayDataContainer relay={relay} Component={CreateRecipeContainer}/>} 
            query={CreateRecipeQuery}
          />
          <Route 
            path=':id'
            render={relay => <RelayDataContainer relay={relay} Component={UpdateRecipeContainer}/>} 
            query={UpdateRecipeQuery} 
            prepareVariables={params => transformQueryParams(params, 'id')}
          />
        </Route>
        <Route path='foods'>
            <Route path='' render={() => <FoodContainer />}/>
            <Route 
              path='new'
              render={relay => <RelayDataContainer relay={relay} Component={CreateFoodContainer}/>}
            />
            <Route 
              path=':id'
              render={relay => <RelayDataContainer relay={relay} Component={UpdateFoodContainer}/>} 
              query={UpdateFoodQuery} 
              prepareVariables={(params, route) => {
                return {
                  ...transformQueryParams(params, 'id'),
                  filter: {
                    include: [
                      {relation: 'foodVariants'},
                    ],
                  }
                };
              }}
            />
        </Route>
        <Route path='activities'>
          <Route path='' render={() => <ActivityContainer/>}/>
          <Route 
            path='new'
            render={relay => <RelayDataContainer relay={relay} Component={CreateActivityContainer}/>}
          />
          <Route 
            path=':id'
            render={relay => <RelayDataContainer relay={relay} Component={UpdateActivityContainer}/>} 
            query={UpdateActivityQuery} 
            prepareVariables={params => transformQueryParams(params, 'id')}
          />
        </Route>
        <Route path='drugs'>
            <Route path=''  render={relay => <MedicineContainer/>} />
            <Route 
              path='new'
              render={relay => <RelayDataContainer relay={relay} Component={CreateMedicineContainer}/>}
            />
            <Route 
              path=':id'
              render={relay => <RelayDataContainer relay={relay} Component={UpdateMedicineContainer}/>} 
              query={UpdateMedicineQuery} 
              prepareVariables={params => transformQueryParams(params, 'id')}
            />
        </Route>
      </Route>
    </Route>
    <Route path='provider'>
      <Route path='login' Component={ProviderLogin}/>
      <Route path='register' Component={ProviderRegister}/>
      <Route path='send-email' Component={SendEmail}/>
      <Route path='reset-password' Component={ChangePassword}/>
      <Route Component={props => <ProviderLayout {...props}/>}>
        <Route path='overview'>
          <Route 
            path=''
            render={relay => <RelayDataContainer relay={relay} Component={OverviewContainer}/>}
            query={OverviewQuery} 
            prepareVariables={params => ({
              filter: {
                include: [
                  {relation: 'sharers'},
                ],
              }
            })}
          />
        </Route>
        <Route path='patient'>
          <Route
            path=':id'
            render={relay => <RelayDataContainer relay={relay} Component={PatientContainer}/>}
            query={PatientQuery}
            prepareVariables={(params, route) => {
              const sharerId = parseFloat(route.location.query.sharer || 0);
              const shareeId = parseFloat(route.location.query.sharee || 0);

              return {
                ...transformQueryParams(params, 'id'),
                sharerId,
                sharingFilter: {
                  include: [
                    {relation: 'twilioChatChannel'},
                  ],
                },
                userFilter: {
                  include: [
                    {relation: 'userBaseline'},
                  ],
                },
                healthMarkerMonitorsFilter: {
                  where: {
                    userId: sharerId,
                    providerId: shareeId,
                  },
                  include: [
                    {relation: 'healthMarker'},
                  ],
                },
                healthMarkerMonitorIntervalsFilter: {
                  where: {
                    userId: sharerId,
                    providerId: shareeId,
                  },
                },
                anthropometriesFilter: {
                  where: {
                    userId: sharerId,
                  },
                  order: [
                    'date desc'
                  ]
                },
                diabetesFilter: {
                  where: {
                    userId: sharerId,
                  },
                  order: [
                    'date desc'
                  ]
                },
                lifestylesFilter: {
                  where: {
                    userId: sharerId,
                  },
                  order: [
                    'date desc'
                  ]
                },
                drugEntriesFilter: {
                  where: {
                    userId: sharerId,
                  },
                  include: [
                    {relation: 'drug'},
                  ],
                },
              };
            }}
          />
        </Route>
        <Route 
          path='account' 
          render={relay => <RelayDataContainer relay={relay} Component={MyAccount}/>} 
          query={MyAccountQuery} 
          prepareVariables={params => ({
            filter: {
              include: [
                {relation: 'sharers'},
              ],
            }
          })}
        />
      </Route>
    </Route>
    <Route path='/'>
      <Redirect to="/provider/login"/>
    </Route>
  </Route>
);