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
				backgroundImage: "url('/images/work_with_me.jpg')",
				backgroundRepeat: "no-repeat",
				backgroundSize: "cover",
				minHeight: "70vh",
			}}
		>
			<Stack
				direction="column"
				justifyContent="center"
				alignItems="center"
				spacing={3}
			>
				<Typography component="h3" variant="h3">
					Want to work with me?
				</Typography>
				<Typography component="h3" variant="h4">
					Contact me on Fiverr and we can start working together!
				</Typography>
				<Button variant="contained">Contact me!</Button>
			</Stack>
		</Container>
	);
};

export default WorkWithMe;
