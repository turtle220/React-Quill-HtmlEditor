import React, {useState, useEffect} from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function AlertDialog({isOpen, close, contentHTML, getValue}) {

    const [content, setContent] = useState('');

    useEffect(()=>{

        setContent(contentHTML);

    },[contentHTML])

    const handleClose = () => {
        close();
    };
    
    const saveChange = () => {
        getValue(content);
        close();
    }
    
  return (
    <div>
    
      <Dialog
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"HTML Editor"}</DialogTitle>
        <DialogContent>
        
        <textarea style={{width:'550px', height:'270px'}} defaultValue={contentHTML} onChange={(event) => setContent(event.target.value)}></textarea>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={saveChange} color="primary" autoFocus>
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}