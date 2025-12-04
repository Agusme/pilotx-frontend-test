import {
  Box,
  Drawer,
  Typography,
  List,
  ListItem,
  ListItemButton,
} from "@mui/material";
import { Link } from "react-router-dom";

type Props = {
  mobileOpen: boolean;
  onClose: () => void;
};

export default function Sidebar({ mobileOpen, onClose }: Props) {
  const sidebarContent = (
    <Box sx={{ width: 250, px: 2, py: 3 }}>
      <Typography
        variant="h5"
        sx={{ fontWeight: 700, mb: 4 }}
        component={Link}
        to="/"
        style={{ textDecoration: "none", color: "inherit" }}
      >
        PilotX
      </Typography>
      <List>
        <ListItem>
          <ListItemButton component={Link} to="/" onClick={onClose}>
            Home
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      <Box
        sx={{
          width: 250,
          borderRight: "1px solid #e6e6e6",
          height: "100vh",
          position: "fixed",
          display: { xs: "none", md: "block" },
          bgcolor: "#fff",
        }}
      >
        {sidebarContent}
      </Box>
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
