import {
	Container,
	useTheme,
	useMediaQuery,
	Stack,
	Typography,
} from "@mui/material";
import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import KeyboardDoubleArrowRightRoundedIcon from "@mui/icons-material/KeyboardDoubleArrowRightRounded";
import KeyboardDoubleArrowLeftRoundedIcon from "@mui/icons-material/KeyboardDoubleArrowLeftRounded";
const Projects = () => {
	const theme = useTheme();

	const isMobile = useMediaQuery(theme.breakpoints.down(425));
	return (
		<Container maxWidth="xl" sx={{ p: "30px", mb: "10px" }}>
			<div id="projects"></div>
			<Stack
				direction="column"
				justifyContent="center"
				alignItems={"center"}
				spacing={2}
			>
				<Typography
					component="div"
					variant={isMobile ? "h4" : "h3"}
					sx={{ textAlign: "center" }}
				>
					Want to see my work?
				</Typography>
				<Typography
					component="div"
					variant={isMobile ? "h5" : "h4"}
					sx={{ textAlign: "center" }}
				>
					View my repositories on GitHub! {<GitHubIcon fontSize="large" />}
				</Typography>
				<Stack
					direction="row"
					justifyContent="cente"
					alignItems={"center"}
					spacing={isMobile ? 0 : 2}
				>
					<KeyboardDoubleArrowRightRoundedIcon sx={{ fontSize: "80px" }} />
					<a
						href="https://github.com/uzair11C"
						target="_blank"
						rel="noreferrer"
					>
						<img src="/images/Octocat.png" alt="github-logo" width={"170vw"} />
					</a>
					<KeyboardDoubleArrowLeftRoundedIcon sx={{ fontSize: "80px" }} />
				</Stack>
			</Stack>
		</Container>
	);
};

export default Projects;
