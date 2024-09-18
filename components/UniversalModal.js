import React from 'react';
import {Dialog, DialogContent, DialogContentText, DialogActions, Button, Typography, Box} from '@mui/material';
import { observer } from 'mobx-react-lite';
import store from '../stores/userStore'; // Импортируйте ваш MobX-стор

const UniversalModal = observer(() => {
    const handleClose = () => {
        store.isModalOpen = false;
        if(store.reloadPage){
            location.reload();
        }
    };

    return (
        <Dialog open={store.isModalOpen} onClose={handleClose} aria-labelledby="modal-title">
            <DialogContent>
                <Typography variant="h5" gutterBottom>
                    {store.modalText}
                </Typography>
            </DialogContent>
           <Box display="flex" justifyContent="space-between">
               <DialogActions>
                   <Button size={"small"} onClick={handleClose}  color="primary">
                       Schließen Sie
                   </Button>
               </DialogActions>

               {store.userInfo && ( <DialogActions>
                   <Button size={"small"} onClick={handleClose}  color="primary">
                       In Ordnung, ich besorge einen neuen Pass.
                   </Button>
               </DialogActions>)}
           </Box>
        </Dialog>
    );
});

export default UniversalModal;
