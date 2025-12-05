import { Box, Typography, Button, useMediaQuery } from "@mui/material";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import { Link } from "react-router-dom";

export default function ErrorPage() {
  const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "80vh",
        width: "100%",
        px: 2,
        overflow: "hidden",
        boxSizing: "border-box",
      }}
    >
      <Box
        sx={{
          backgroundColor: "white",
          boxShadow: 4,
          borderRadius: 4,
          p: isMobile ? 3 : 5,
          width: "100%",
          maxWidth: isMobile ? 360 : 500, 
          textAlign: "center",
          boxSizing: "border-box",
        }}
      >
        <ErrorOutlineIcon
          sx={{
            fontSize: isMobile ? 60 : 90,
            color: "#1E1743",
            mb: 2,
          }}
        />

        <Typography
          variant={isMobile ? "h5" : "h4"}
          fontWeight={700}
          mb={1}
          sx={{ lineHeight: 1.2 }}
        >
          ¡Ups! Algo salió mal
        </Typography>

        <Typography
          variant="body1"
          color="text.secondary"
          mb={4}
          sx={{
            fontSize: isMobile ? "0.95rem" : "1rem",
            px: 1,
          }}
        >
          La página que buscas no existe o ha ocurrido un error inesperado.
        </Typography>

        <Button
          component={Link}
          to="/"
          variant="contained"
          fullWidth
          sx={{
            py: 1.2,
            borderRadius: 2,
            textTransform: "none",
            fontWeight: 700,
            backgroundColor: "#1E1743",
            ":hover": { backgroundColor: "#140f30" },
          }}
        >
          Volver al inicio
        </Button>
      </Box>
    </Box>
  );
}
