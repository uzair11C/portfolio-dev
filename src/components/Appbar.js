import { useState } from "react";
import {
	AppBar,
	Box,
	Toolbar,
	IconButton,
	Typography,
	Menu,
	Container,
	MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const Appbar = () => {
	const [anchorElNav, setAnchorElNav] = useState(null);

	const handleOpenNavMenu = (event) => {
		setAnchorElNav(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	return (
		<AppBar position="fixed" sx={{ background: "#16213E", p: "5px" }}>
			<Container maxWidth="xl">
				<Toolbar>
					{/* <Typography
						variant="h5"
						component="div"
						noWrap
						sx={{
							pr: 6,
							display: { xs: "none", md: "flex" },
							fontFamily: "monospace",
							fontWeight: 700,
							letterSpacing: ".3rem",
							color: "inherit",
							textDecoration: "none",
						}}
					>
						Blog App
					</Typography> */}
					<Box sx={{ display: { xs: "flex", md: "none" } }}>
						<IconButton
							size="large"
							aria-label="account of current user"
							aria-controls="menu-appbar"
							aria-haspopup="true"
							onClick={handleOpenNavMenu}
							color="inherit"
							sx={{ mr: "10px" }}
						>
							<MenuIcon />
						</IconButton>
						<Menu
							id="menu-appbar"
							anchorEl={anchorElNav}
							anchorOrigin={{
								vertical: "bottom",
								horizontal: "right",
							}}
							keepMounted
							transformOrigin={{
								vertical: "top",
								horizontal: "right",
							}}
							open={Boolean(anchorElNav)}
							onClose={handleCloseNavMenu}
							sx={{
								display: { xs: "block", md: "none" },
							}}
						>
							<MenuItem onClick={handleCloseNavMenu}>
								<Typography variant="body1" textAlign="center">
									Dashboard
								</Typography>
							</MenuItem>
							<MenuItem onClick={handleCloseNavMenu}>
								<Typography
									variant="body1"
									sx={{
										textDecoration: "none",
									}}
									textAlign="center"
								>
									My Posts
								</Typography>
							</MenuItem>
						</Menu>
					</Box>
					<Typography
						variant="h6"
						noWrap
						component="h6"
						sx={{
							mr: 2,
							display: { xs: "flex", md: "none" },
							flexGrow: 1,
							fontFamily: "monospace",
							fontWeight: 600,
							letterSpacing: ".2rem",
							color: "inherit",
							textDecoration: "none",
						}}
					>
						My Portfolio
					</Typography>
					<Box
						sx={{
							width: "100%",
							display: { xs: "none", md: "flex" },
							justifyContent: "center",
						}}
					>
						<Typography
							variant="h5"
							component="h5"
							onClick={handleCloseNavMenu}
							sx={{
								my: 2,
								color: "white",
								display: "block",
								margin: "10px",
								textDecoration: "none",
							}}
						>
							Dashboard
						</Typography>
						<Typography
							variant="h5"
							component="h5"
							onClick={handleCloseNavMenu}
							sx={{
								my: 2,
								color: "white",
								display: "block",
								margin: "10px",
								textDecoration: "none",
							}}
						>
							My Posts
						</Typography>
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	);
};
export default Appbar;
