import React from 'react'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

type CustomDialogProps = {
    title: string,
    open: boolean,
    handleClose: () => void,
}

const CustomDialog: React.FC<CustomDialogProps> = ({title, open, handleClose, children}) => {

    return (
        <div>
        <Dialog open={open} onClose={handleClose} maxWidth="xl">
            <DialogTitle>{title}</DialogTitle>
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
