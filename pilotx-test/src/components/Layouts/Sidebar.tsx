import {
  Box,
  Drawer,
  Typography,
  List,
  ListItem,
  ListItemButton,
} from "@mui/material";
import { Link } from "react-router-dom";
import logoPilotX from "../../assets/pilot_x_ai_logo.jpg";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import SearchIcon from "@mui/icons-material/Search";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
type Props = {
  mobileOpen: boolean;
  onClose: () => void;
};

export default function Sidebar({ mobileOpen, onClose }: Props) {
  const sidebarContent = (
    <Box
      sx={{
        width: 220,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        py: 3,
        gap: 3,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 1,
        }}
        component={Link}
        to="/"
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <Box
          sx={{
            width: 100,
            height: 100,
            borderRadius: 2,
            overflow: "hidden",
            boxShadow: 2,
          }}
        >
          <img
            src={logoPilotX}
            alt="PilotX logo"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </Box>

        <Typography
          variant="h5"
          sx={{
            fontWeight: 700,
            textAlign: "center",
            color: "#222",
          }}
        >
          PilotX
        </Typography>
      </Box>
      <List sx={{ width: "100%", mt: 2 }}>
        <ListItem disablePadding>
          <ListItemButton component={Link} to="/" onClick={onClose}>
            <HomeOutlinedIcon sx={{ fontSize: 30 }} />
            <Typography sx={{ ml: 2 }}>Inicio</Typography>
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton component={Link} to="*" onClick={onClose}>
            <SearchIcon sx={{ fontSize: 30 }} />
            <Typography sx={{ ml: 2 }}>Buscar</Typography>
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton component={Link} to="*" onClick={onClose}>
            <MailOutlineIcon sx={{ fontSize: 30 }} />
            <Typography sx={{ ml: 2 }}>Mensajes</Typography>
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton component={Link} to="*" onClick={onClose}>
            <PermIdentityIcon sx={{ fontSize: 30 }} />
            <Typography sx={{ ml: 2 }}>Perfil</Typography>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      {/* Desktop */}
      <Box
        sx={{
          width: 220,
          borderRight: "1px solid #e6e6e6",
          height: "100vh",
          position: "fixed",
          display: { xs: "none", md: "block" },
          bgcolor: "#fff",
        }}
      >
        {sidebarContent}
      </Box>

      {/* Mobile */}
      <Drawer
        open={mobileOpen}
        onClose={onClose}
        sx={{ display: { xs: "block", md: "none" } }}
      >
        {sidebarContent}
      </Drawer>
    </>
  );
}
