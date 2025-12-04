import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

type Props = {
  onOpenMenu: () => void;
};

export default function MobileHeader({ onOpenMenu }: Props) {
  return (
    <AppBar
      position="fixed"
      sx={{
        display: { xs: "flex", md: "none" },
        bgcolor: "#fff",
        color: "#000",
        boxShadow: "none",
        borderBottom: "1px solid #e6e6e6",
      }}
    >
      <Toolbar>
        <IconButton edge="start" onClick={onOpenMenu}>
          <MenuIcon />
        </IconButton>

        <Typography variant="h6" sx={{ fontWeight: 700 }}>
          PilotX
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
