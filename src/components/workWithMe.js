import { Button, Container, Stack, Typography } from "@mui/material";
import React from "react";

const WorkWithMe = () => {
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
				<Typography component="h3" variant="h3">
					Interested in working with me?
				</Typography>
				<Typography component="h3" variant="h4">
					Contact me on Fiverr and we can start working together!
				</Typography>
				<Button
					variant="contained"
					sx={{
						fontSize: "18px",
						background:
							"linear-gradient(108.51deg, #F219A1 53.69%, #AD0CF8 100.22%, #FE007E 100.23%)",
					}}
					href="https://www.fiverr.com/uzairabdullah07"
					target="_blank"
				>
					Contact me!
				</Button>
			</Stack>
		</Container>
	);
};

export default WorkWithMe;
