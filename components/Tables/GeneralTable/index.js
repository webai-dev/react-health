import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableFooter from '@material-ui/core/TableFooter';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import CollapsibleRow from './CollapsibleRow';
import TablePaginationActions from './TablePaginationActions';

import { PrimaryText } from '../../Texts';
import { GeneralForm } from '../../Forms';

const useStyles = makeStyles({
  card: {
    padding: '1.5rem 2rem',
  },
  table: {
    minWidth: 500,
  },
});

const GeneralTable = (props: Object) => {
  const classes = useStyles();
  const [state, setState] = useState({
    isAddFormVisible: false,
  });
  const { columns, data, title, formData, formName, formNameField, formConfig, formDependencies, createMutation, deleteMutation, updateMutation, totalCount, page: propsPage, rowsPerPage: propsRowsPerPage } = props;

  let page = propsPage || 0;
  let rowsPerPage = propsRowsPerPage || 5;

  const toggleAddForm = () => {

    setState((prevState) => ({
      ...prevState,
      isAddFormVisible: !state.isAddFormVisible,
    }));
  };

  const handleChangePage = (event, newPage) => {
    props.onChangePage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    props.onChangeRowsPerPage(parseInt(event.target.value, 10));
  };

  return (
    <Card className={classes.card}>
      <Box display="flex" justifyContent="space-between">
        <PrimaryText>{title}</PrimaryText>
        <Button onClick={toggleAddForm}>
          <PrimaryText>Add</PrimaryText>
        </Button>
      </Box>
      {
        state.isAddFormVisible && (
          <GeneralForm
            name={formName}
            nameField={formNameField}
            router={props.router}
            config={formConfig}
            formData={formData}
            dependencies={formDependencies}
            createMutation={createMutation}
            updateMutation={updateMutation}
            deleteMutation={deleteMutation}
            onCreate={props.onCreate}
            onUpdate={props.onUpdate}
            onDelete={props.onDelete}
          />
        )
      }
      <TableContainer component={Paper}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell />
              {(columns || []).map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {
              (data || []).map((row) => (
                <CollapsibleRow 
                  row={row} 
                  columns={columns}
                  formName={formName}
                  formNameField={formNameField}
                  formConfig={formConfig}
                  formDependencies={formDependencies}
                  deleteMutation={deleteMutation}
                  updateMutation={updateMutation}
                  onUpdate={props.onUpdate}
                  onDelete={props.onDelete}
                />
              ))
            }
          </TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                colSpan={3}
                count={props.totalCount}
                rowsPerPage={rowsPerPage}
                page={page}
                SelectProps={{
                  inputProps: { 'aria-label': 'rows per page' },
                  native: true,
                }}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
                ActionsComponent={TablePaginationActions}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
    </Card>
  );
};

export default GeneralTable;