import {
	Button,
	Container,
	Stack,
	Typography,
	useTheme,
	useMediaQuery,
} from "@mui/material";
import React from "react";

const WorkWithMe = () => {
	const theme = useTheme();

	const isMobile = useMediaQuery(theme.breakpoints.down(425));
	return (
		<Container
			maxWidth="xl"
			sx={{
				p: "30px",
				mt: "10px",
				mb: "10px",
				//background: 'rgb(11,12,24)',
				background:
					"linear-gradient(90deg, rgba(11,12,24,1) 14%, rgba(1,29,70,1) 53%, rgba(52,65,121,1) 81%)",
				//minHeight: "60vh",
			}}
		>
			<Stack
				direction="column"
				justifyContent="center"
				alignItems="center"
				spacing={3}
				sx={{ p: "10px" }}
			>
				<Typography
					component="h3"
					variant={isMobile ? "h5" : "h4"}
					sx={{ textAlign: "center" }}
				>
					Interested in working with me?
				</Typography>
				<Typography
					component="h3"
					variant={isMobile ? "h6" : "h5"}
					sx={{ textAlign: "center" }}
				>
					Contact me on Fiverr or Upwork and we can start working together!
				</Typography>
				<Stack
					direction="row"
					justifyContent={"center"}
					alignItems="center"
					spacing={5}
				>
					<Button
						variant="contained"
						sx={{
							pt: 0,
							pb: 0,
							background:
								"linear-gradient(108.51deg, #F219A1 53.69%, #AD0CF8 100.22%, #FE007E 100.23%)",
							width: isMobile ? "30vw" : "15vw",
							height: "7vh",
						}}
						href="https://www.fiverr.com/uzairabdullah07"
						target="_blank"
					>
						<img src="/images/fiverr.png" alt="fiverr" width={"100vw"} />
					</Button>
					<Button
						variant="contained"
						sx={{
							pt: 0,
							pb: 0,
							background:
								"linear-gradient(108.51deg, #F219A1 53.69%, #AD0CF8 100.22%, #FE007E 100.23%)",
							width: isMobile ? "30vw" : "15vw",
							height: "7vh",
						}}
						href="https://www.upwork.com/freelancers/~014279899a34ac61da?viewMode=1"
						target="_blank"
					>
						<img src="/images/upwork.png" alt="upwork" width={"100vw"} />
					</Button>
				</Stack>
			</Stack>
		</Container>
	);
};

export default WorkWithMe;
