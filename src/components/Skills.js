import {
	Box,
	Paper,
	Container,
	Grid,
	Stack,
	Typography,
	useTheme,
	useMediaQuery,
} from "@mui/material";
import React from "react";
import {
	CodeTwoTone,
	SportsEsportsRounded,
	PhotoSizeSelectActualRounded,
} from "@mui/icons-material/";

const Skills = () => {
	const theme = useTheme();

	const isMobile = useMediaQuery(theme.breakpoints.down(425));
	return (
		<Container maxWidth="xl" sx={{ mt: "10px", mb: "20px" }}>
			<Box sx={{ p: "20px" }}>
				<Grid container spacing={4}>
					<Grid item xs={12}>
						<Box sx={{ p: "10px" }}>
							<Typography
								variant="h3"
								sx={{ textAlign: "center", color: "#fff" }}
							>
								The Services I offer
							</Typography>
						</Box>
					</Grid>
					<Grid item xs={12} md={4}>
						<Box sx={{ p: "10px" }}>
							<Paper
								sx={{
									background:
										" url(frosted-glass-texture-as-background-frosted-glass-texture-as-background-interior-design-decoration-111091129.jpg), linear-gradient(253.09deg, rgba(217, 217, 217, 0.15) -7.53%, rgba(217, 217, 217, 0) 97.04%)",
									backdropFilter: "blur(50px)",
									p: "30px",
									borderRadius: "12px",
									border: "2px solid #E2E2E21D",
									minHeight: "30vh",
									boxShadow: "6px 6px 13px 1px rgba(168,162,162,0.64)",
									// -webkit-box-shadow: 6px 6px 13px 1px rgba(168,162,162,0.64),
									// -moz-box-shadow: 6px 6px 13px 1px rgba(168,162,162,0.64),
								}}
							>
								<Stack
									direction="column"
									justifyContent="center"
									alignItems="stretch"
									spacing={isMobile ? 1 : 2}
								>
									<Stack
										direction="row"
										justifyContent="space-between"
										alignItems="center"
									>
										<Typography
											component="h3"
											variant="h5"
											sx={{ color: "#fff" }}
										>
											Web Development
										</Typography>
										<CodeTwoTone sx={{ color: "#fff" }} fontSize="large" />
									</Stack>
									<Typography sx={{ color: "#fff" }} variant="p">
										Fully responsive front-end web development using React JS,
										Next JS and Material UI, that are cross-browser compatible
										(Chrome, Firefox, Safare etc), and Search Engine Optimized
										(SEO)
									</Typography>
								</Stack>
							</Paper>
						</Box>
					</Grid>
					<Grid item xs={12} md={4}>
						<Box sx={{ p: "10px" }}>
							<Paper
								sx={{
									background:
										" url(frosted-glass-texture-as-background-frosted-glass-texture-as-background-interior-design-decoration-111091129.jpg), linear-gradient(253.09deg, rgba(217, 217, 217, 0.15) -7.53%, rgba(217, 217, 217, 0) 97.04%)",
									backdropFilter: "blur(50px)",
									p: "30px",
									borderRadius: "12px",
									border: "2px solid #E2E2E21D",
									minHeight: "30vh",
									boxShadow: "6px 6px 13px 1px rgba(168,162,162,0.64)",
								}}
							>
								<Stack
									direction="column"
									justifyContent="center"
									alignItems="stretch"
									spacing={2}
								>
									<Stack
										direction="row"
										justifyContent="space-between"
										alignItems="center"
									>
										<Typography
											component="h3"
											variant="h5"
											sx={{ color: "#fff" }}
										>
											Game Development
										</Typography>
										<SportsEsportsRounded
											sx={{ color: "#fff" }}
											fontSize="large"
										/>
									</Stack>
									<Typography sx={{ color: "#fff" }} variant="p">
										Highly engaging and exciting 2D Games using the Unity 2D
										game engine and Buildbox 2D game engine for all platforms
										including Windows, Mac, Android and iOS
									</Typography>
								</Stack>
							</Paper>
						</Box>
					</Grid>
					<Grid item xs={12} md={4}>
						<Box sx={{ p: "10px" }}>
							<Paper
								sx={{
									background:
										" url(frosted-glass-texture-as-background-frosted-glass-texture-as-background-interior-design-decoration-111091129.jpg), linear-gradient(253.09deg, rgba(217, 217, 217, 0.15) -7.53%, rgba(217, 217, 217, 0) 97.04%)",
									backdropFilter: "blur(50px)",
									p: "30px",
									borderRadius: "12px",
									border: "2px solid #E2E2E21D",
									minHeight: "30vh",
									boxShadow: "6px 6px 13px 1px rgba(168,162,162,0.64)",
								}}
							>
								<Stack
									direction="column"
									justifyContent="center"
									alignItems="stretch"
									spacing={2}
								>
									<Stack
										direction="row"
										justifyContent="space-between"
										alignItems="center"
									>
										<Typography
											component="h3"
											variant="h5"
											sx={{ color: "#fff" }}
										>
											Photo Editing
										</Typography>
										<PhotoSizeSelectActualRounded
											sx={{ color: "#fff" }}
											fontSize="large"
										/>
									</Stack>
									<Typography sx={{ color: "#fff" }} variant="p">
										Photo editing and manipulation using Adobe Photoshop, from
										background removing to re-touching, re-scaling, applying
										filters etc.
									</Typography>
								</Stack>
							</Paper>
						</Box>
					</Grid>
				</Grid>
			</Box>
		</Container>
	);
};

export default Skills;
