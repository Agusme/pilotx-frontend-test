import { Button } from "@mui/material";
import { Link } from "react-router-dom";

interface CustomButtonProps {
  children: React.ReactNode;
  to?: string;
  type?: "button" | "submit";
  disabled?: boolean;
  fullWidth?: boolean;
  onClick?: () => void;
}

export default function CustomButton({
  children,
  to,
  type = "button",
  disabled = false,
  fullWidth = false,
  onClick,
}: CustomButtonProps) {
  return (
    <Button
      component={to ? Link : "button"}
      to={to}
      type={type}
      disabled={disabled}
      onClick={onClick}
      fullWidth={fullWidth}
      variant="contained"
      sx={{
        px: 3,
        py: 1.2,
        borderRadius: 2,
        textTransform: "none",
        fontWeight: 700,
        backgroundColor: "#1E1743",
        ":hover": { backgroundColor: "#140f30" },
        width: fullWidth ? "100%" : "fit-content",
      }}
    >
      {children}
    </Button>
  );
}
