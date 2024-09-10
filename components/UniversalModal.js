import React from 'react';
import { Dialog, DialogContent, DialogContentText, DialogActions, Button, Typography } from '@mui/material';
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
            <DialogActions>
                <Button size={"small"} onClick={handleClose}  color="primary">
                    Schließen Sie
                </Button>
            </DialogActions>
        </Dialog>
    );
});

export default UniversalModal;
