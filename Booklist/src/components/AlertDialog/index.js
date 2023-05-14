import React, { useRef } from "react";
import {
  AlertDialog,
  AlertDialogLabel,
  AlertDialogDescription,
} from "@reach/alert-dialog";
import "./index.css";

const CustomAlertDialog = ({ title, message, handleClose }) => {
  const leastDestructiveRef = useRef(null);
  return (
    <AlertDialog leastDestructiveRef={leastDestructiveRef}>
      <div className="alert-dialog-wrapper">
        <AlertDialogLabel className="alert-dialog-title">
          {title}
        </AlertDialogLabel>
        <AlertDialogDescription className="alert-dialog-message">
          {message}
        </AlertDialogDescription>
        <button
          className="alert-dialog-close-button"
          ref={leastDestructiveRef}
          onClick={handleClose}
        >
          Close
        </button>
      </div>
    </AlertDialog>
  );
};

export default CustomAlertDialog;
