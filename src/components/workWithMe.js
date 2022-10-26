import { Container, Stack, Typography } from "@mui/material";
import React from "react";

const WorkWithMe = () => {
	return (
		<Container maxWidth="xl" sx={{ p: "30px", mt: "10px", mb: "10px" }}>
			<Stack direction="column" justifyContent="center" alignItems="center">
				<Typography component="h3" variant="h3">
					Want to work with me?
				</Typography>
			</Stack>
		</Container>
	);
};

export default WorkWithMe;
