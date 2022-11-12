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

	const scrollToContact = () => {
		document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
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
								<a href="#home">
									<Typography
										variant="body1"
										textAlign="center"
										sx={{ textDecoration: "none" }}
									>
										Home
									</Typography>
								</a>
							</MenuItem>
							<MenuItem onClick={handleCloseNavMenu}>
								<Typography
									variant="body1"
									textAlign="center"
									sx={{ textDecoration: "none" }}
								>
									<a href="#projects">Projects</a>
								</Typography>
							</MenuItem>
							<MenuItem onClick={handleCloseNavMenu}>
								<Typography
									variant="body1"
									textAlign="center"
									sx={{ textDecoration: "none" }}
									onClick={scrollToContact}
								>
									{/* <a href="#contact">Contact</a> */}
									Contact
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
							<a href="#home">Home</a>
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
							<a href="#projects">Projects</a>
						</Typography>
						<Typography
							variant="h5"
							component="h5"
							onClick={() => {
								handleCloseNavMenu();
								scrollToContact();
							}}
							sx={{
								my: 2,
								color: "white",
								display: "block",
								margin: "10px",
								textDecoration: "none",
							}}
						>
							Contact
						</Typography>
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	);
};
export default Appbar;
