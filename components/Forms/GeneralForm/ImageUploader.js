import React, { useState, useRef, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CircularProgress from '@material-ui/core/CircularProgress';
import TextField from '@material-ui/core/TextField';

import { OutlineButton } from '../../Buttons';
import { PrimaryText, YellowText } from '../../Texts';

import i18n from '../../../i18n';
import { Images } from '../../../styles';

const useStyles = makeStyles(theme => ({
  root: {},
  card: {
    padding: '1.5rem 2rem',
    marginTop: '1rem',
  },
  circularProgress: {
    marginRight: '0.5rem',
  },
  imageText: {
    margin: '0 3rem 0 2rem',
  },
  outlineButton: {
    padding: 0,
    marginLeft: '1rem',
  },
  outlineButtonText: {
    marginLeft: '0.5rem',
  },
}));

const ImageUploader = (props: Object) => {
  const classes = useStyles(props);
  const [state, setState] = useState({
    isLoadingSpinnerVisible: false,
  });
  const { formData } = props;
  const fileInputRef = useRef();
  const uploadFormRef = useRef();

  const handleClickUpload = () => {
    fileInputRef.current.click();
  };

  const handleChangeFile = async (e) => {
    setState((prevState) => ({
      ...prevState,
      isLoadingSpinnerVisible: true,
    }));

    const res = await fetch(process.env.REACT_APP_REST_API_URL + '/recipes/upload', {
      method: 'POST',
      body: new FormData(uploadFormRef.current),
    });
    const body = await res.json();

    setState((prevState) => ({
      ...prevState,
      isLoadingSpinnerVisible: false,
    }));
    props.onUploadFile(body);
  };

  return (
    <Card className={classes.card}>
      <Box display="flex" justifyContent="space-between">
        <Box display="flex" alignItems="center">
          <img src={Images.ICON_IMAGE}></img>
          <YellowText className={classes.imageText}>Image</YellowText>
          <TextField value={formData && formData.imgDispName}/>
          <form id="uploadForm" ref={uploadFormRef}>
            <input 
              type="file" 
              name="files"
              style={{ visibility: 'hidden' }} 
              ref={fileInputRef}
              onChange={handleChangeFile}
              accept="image/*"
            />
          </form>
          {
            state.isLoadingSpinnerVisible && (
              <Box display="flex" alignItems="center">
                <CircularProgress size={20} className={classes.circularProgress}/>
                <PrimaryText>Uploading...</PrimaryText>
              </Box>
            )
          }
        </Box>
        <OutlineButton 
          size="small" 
          width={140} 
          className={classes.outlineButton}
          onClick={handleClickUpload}
        >
          <img src={Images.ICON_UPLOAD}></img>
          <PrimaryText className={classes.outlineButtonText}>{i18n.t('Upload')}</PrimaryText>
        </OutlineButton>
      </Box>
    </Card>
  );
};

export default ImageUploader;