import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

import { GeneralForm } from '../../Forms';
import { cloneObject } from '../../../utils';

const useStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset',
    },
  },
});

const CollapsibleRow = (props) => {
  const { row, columns, formName, formNameField, formConfig, formDependencies, deleteMutation, updateMutation } = props;
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();

  return (
    <React.Fragment>
      <TableRow className={classes.root}>
        <TableCell>
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        {(columns || []).map((column) => (
          <TableCell
            key={column.id}
            align={column.align}
            style={{ minWidth: column.minWidth }}
          >
            {
              column.type === 'boolean' && (row[column.id] ? 'Yes' : 'No')
            }
            {
              column.type !== 'boolean' && row[column.id]
            }
          </TableCell>
        ))}
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <GeneralForm
                name={formName}
                nameField={formNameField}
                router={props.router}
                config={formConfig}
                objectId={row._id}
                formData={cloneObject(row)}
                dependencies={formDependencies}
                updateMutation={updateMutation}
                deleteMutation={deleteMutation}
                onUpdate={props.onUpdate}
                onDelete={props.onDelete}
              />
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

export default CollapsibleRow;