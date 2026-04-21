import { Alert, Snackbar } from "@mui/material";
import { useToast } from "../context/ToastContext";

export function ToastBar() {
  const { toast, hideToast } = useToast();

  return (
    <Snackbar
      open={toast.open}
      autoHideDuration={2600}
      onClose={hideToast}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
    >
      <Alert
        onClose={hideToast}
        severity={toast.severity}
        variant="filled"
        sx={{
          minWidth: 280,
          borderRadius: "18px",
          background: "linear-gradient(135deg, rgba(12, 26, 24, 0.98), rgba(23, 42, 38, 0.98))",
          color: "#fff",
          border: "1px solid rgba(199,154,92,0.28)",
          boxShadow: "0 20px 60px rgba(0,0,0,0.35)",
          "& .MuiAlert-icon": {
            color: "#C79A5C",
          },
        }}
      >
        {toast.message}
      </Alert>
    </Snackbar>
  );
}
