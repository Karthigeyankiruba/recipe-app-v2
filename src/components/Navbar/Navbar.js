import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { Icon } from "@iconify/react";
import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Stack,
  useTheme,
} from "@mui/material";
import InputBase from "@mui/material/InputBase";
import { createTheme } from "@mui/material/styles";
import Profile from "../../assets/profile.jpeg";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AutocompleteComponent from "../../views/layout/components/CustomSearchbar";

const pages = [
  { name: "Recipes", link: "/recipes" },
  { name: "Popular", link: "/popular" },
  { name: "Healthy", link: "/healthy" },
];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function ResponsiveAppBar(props) {
  const { window } = props;
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [showSearchInput, setShowSearchInput] = useState(false);

  const isAuthenticated = localStorage.getItem("token");
  const isStaticTokenValid = isAuthenticated === "9876543210";

  const navigate = useNavigate();

  const handleSearchIconClick = () => {
    setShowSearchInput(!showSearchInput);
  };

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const initialTheme = useTheme();
  const [theme, setTheme] = useState(initialTheme);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleModeToggler = () => {
    const updatedTheme = createTheme({
      ...theme,
      palette: {
        ...theme.palette,
        mode: theme.palette.mode === "dark" ? "light" : "dark",
      },
    });
    // Apply the updated theme
    setTheme(updatedTheme);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        U<span style={{ color: theme.palette.error.main }}>Chef</span>
      </Typography>
      <Divider />
      <List>
        {pages.map((item) => (
          <ListItem key={item.name}>
            <Link to={item.link}>
              <ListItemButton sx={{ textAlign: "center" }}>
                <ListItemText primary={item.name} />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          backgroundColor: theme.palette.mode === "dark" ? "black" : "white",
          color: theme.palette.mode === "dark" ? "white" : "black",
        }}
      >
        <Container maxWidth={false}>
          <Toolbar disableGutters>
            <Stack direction="row" gap={1}>
              <Icon icon="solar:chef-hat-bold-duotone" fontSize={30} />
              <Typography
                variant="h6"
                noWrap
                component="a"
                href="/"
                sx={{
                  mr: 2,
                  display: { xs: "none", md: "flex" },
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                UChef
              </Typography>
            </Stack>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleDrawerToggle}
                color="inherit"
              >
                <Icon icon="majesticons:menu-line" fontSize={40} />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <Link to={page.link}>
                    <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                      <Typography color="inherit" textAlign="center">
                        {page.name}
                      </Typography>
                    </MenuItem>
                  </Link>
                ))}
              </Menu>
            </Box>

            <Typography
              variant="h5"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              UChef
            </Typography>
            {isStaticTokenValid ? (
              <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                {pages.map((page) => (
                  <Link to={page.link}>
                    <Button
                      key={page.name}
                      onClick={handleCloseNavMenu}
                      sx={{
                        my: 2,
                        color:
                          theme.palette.mode === "dark" ? "white" : "black",
                        display: "block",
                      }}
                    >
                      {page.name}
                    </Button>
                  </Link>
                ))}
              </Box>
            ) : (
              <Box
                sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
              ></Box>
            )}

            <Box sx={{ flexGrow: 0 }}>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="open drawer"
                sx={{
                  ...(showSearchInput
                    ? { marginRight: 0 }
                    : { marginRight: 2 }),
                }}
                onClick={handleSearchIconClick}
              >
                <Icon
                  icon="heroicons:magnifying-glass-16-solid"
                  fontSize={30}
                />
              </IconButton>

              {/* Conditional rendering for search input */}
              {showSearchInput && (
                <InputBase
                  placeholder="Search..."
                  color="inherit"
                  sx={{
                    width: "300px",
                    // transform: "scaleX(2)", // Corrected transform property
                    transition: "all 0.3s cubic-bezier(0, 0.105, 0.035, 1.57)",
                    border: `1px solid ${
                      theme.palette.mode === "dark" ? "white" : "white"
                    }`,
                    px: 1.5,
                    py: 0.2,
                    borderRadius: 3,
                    mr: 2,
                    color: "inherit",
                  }}
                />
              )}

              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="open drawer"
                sx={{ mr: 2 }}
                onClick={handleModeToggler}
              >
                <Icon
                  color={
                    theme.palette.mode === "dark"
                      ? theme.palette.warning.main
                      : "black"
                  }
                  icon={
                    theme.palette.mode === "dark"
                      ? "line-md:moon-filled-to-sunny-filled-loop-transition"
                      : "line-md:moon-filled-loop"
                  }
                  fontSize={30}
                />
              </IconButton>
              {isStaticTokenValid ? (
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar alt="Remy Sharp" src={Profile} />
                  </IconButton>
                </Tooltip>
              ) : (
                <Button
                  variant="outlined"
                  color="inherit"
                  onClick={() => navigate("/auth/signin")}
                >
                  Sign In
                </Button>
              )}

              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: 240,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </>
  );
}
export default ResponsiveAppBar;
