import { Box, Container } from "@mui/material";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import MobileHeader from "./MobileHeader";
import { useState } from "react";

export default function Layout() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const openMenu = () => setMobileOpen(true);
  const closeMenu = () => setMobileOpen(false);

  return (
    <Box sx={{ bgcolor: "#f5f7fa", minHeight: "100vh" }}>
      <MobileHeader onOpenMenu={openMenu} />
      <Sidebar mobileOpen={mobileOpen} onClose={closeMenu} />
      <Container
        maxWidth="md"
      sx={{
  maxWidth: "650px",   // ancho típico de Twitter
  mx: "auto",          // centra todo
  py: 4,
  pt: { xs: 10, md: 4 },
  ml: { xs: 0, md: "240px" },
}}
      >
        <Outlet />
      </Container>
    </Box>
  );
}
