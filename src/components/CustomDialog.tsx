import React from 'react'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

type CustomDialogProps = {
    open: boolean,
    handleClose: () => void,
}

const CustomDialog: React.FC<CustomDialogProps> = ({open, handleClose, children}) => {

    return (
        <div>
        <Dialog open={open} onClose={handleClose} maxWidth="xl">
            <DialogTitle>Inserez un nouveau bien</DialogTitle>
            <DialogContent>
                {children}
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary">
                    Fermer
                </Button>
            </DialogActions>
      </Dialog>
        </div>
    )
}

export default CustomDialog
