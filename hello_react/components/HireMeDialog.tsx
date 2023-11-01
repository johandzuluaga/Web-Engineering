import { Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import { Dispatch, SetStateAction } from "react";
import { Button } from "./Button";

interface HireMeDialogProps {
    open: boolean,
    setOpen: Dispatch<SetStateAction<boolean>>,
}

const HireMeDialog = ({ open, setOpen }: HireMeDialogProps) => {
  return (
    <Dialog open={open} onClose={() => setOpen(false)}>
        <div className="bg-zinc-900 text-white">
        <DialogTitle>
            <span>YOU ARE ONLY ONE STEP AWAY FROM REACHING OUT!</span>
        </DialogTitle>
        <DialogContent>
            <div className="flex flex-col gap-3">
                <div className="flex flex-row gap-2">
                    <span>Article:</span>
                </div>
            </div>
        </DialogContent>
        <DialogActions>
            <Button text={"Close"} OnClick={() => setOpen(false)}/>
        </DialogActions>
        </div>
    </Dialog>

  )
}

export default HireMeDialog