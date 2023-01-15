import {
	Box,
	Container,
	Stack,
	useTheme,
	Avatar,
	useMediaQuery,
	Typography,
} from "@mui/material";
import React from "react";

const HomeBanner = () => {
	const theme = useTheme();

	const isMobile = useMediaQuery(theme.breakpoints.down(425));

	return (
		<Container
			maxWidth="xl"
			sx={{
				minHeight: "75vh",
				backgroundImage: "url('/images/portfolioBanner.jpg')",
				backgroundRepeat: "no-repeat",
				backgroundSize: isMobile ? "cover" : "100% 100%",
				p: "30px",
				mt: "74px",
			}}
		>
			{/* <div id="home"></div> */}
			<Stack direction={isMobile ? "column" : "row"} spacing={5}>
				<Box
					sx={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						height: isMobile ? "" : "65vh",
						ml: isMobile ? "" : "70px",
					}}
				>
					<Avatar
						src="/images/me half.jpg"
						alt="me"
						sx={{
							width: isMobile ? "40vw" : "25vw",
							height: isMobile ? "40vw" : "25vw",
							border: "5px solid white",
						}}
					/>
				</Box>
				<Stack
					direction="column"
					justifyContent="center"
					alignItems={isMobile ? "stretch" : "flex-start"}
					sx={{
						height: isMobile ? "" : "65vh",
					}}
				>
					<Typography component="h2" variant="h4">
						Hello there, I am
					</Typography>
					<Typography component="h3" variant="h2" sx={{ fontFamily: "Oxygen" }}>
						Uzair Abdullah
					</Typography>
					<Typography
						component="p"
						variant="h5"
						sx={{ textAlign: isMobile ? "center" : "none" }}
					>
						I am a self-taught front-end web developer and 2D game developer.{" "}
						<br />I am a student and a free-lancer.
					</Typography>
				</Stack>
			</Stack>
		</Container>
	);
};

export default HomeBanner;
