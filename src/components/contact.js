import {
	Container,
	Stack,
	Typography,
	useTheme,
	useMediaQuery,
} from "@mui/material";
import React from "react";

const Contact = () => {
	const theme = useTheme();

	const isMobile = useMediaQuery(theme.breakpoints.down(425));
	return (
		<Container maxWidth="xl" sx={{ p: "30px" }}>
			<div id="contact"></div>
			<Stack
				direction="column"
				justifyContent="center"
				alignItems="center"
				spacing={2}
			>
				<Typography
					component="h3"
					variant={isMobile ? "h5" : "h4"}
					sx={{ textAlign: "center" }}
				>
					Want to contact me?
				</Typography>
				<Typography
					component="h3"
					variant={isMobile ? "h6" : "h5"}
					sx={{ textAlign: "center" }}
				>
					Here's how!
				</Typography>
			</Stack>
			<Typography
				sx={{ mt: "20px", ml: isMobile ? "0px" : "50px" }}
				component="p"
				variant={isMobile ? "h6" : "h5"}
			>
				Reach me on LinkedIn:{" "}
				<a
					style={{ textDecoration: "none" }}
					href="https://www.linkedin.com/in/uzair-abdullah07/"
					target="_blank"
					rel="noreferrer"
				>
					https://www.linkedin.com/in/uzair-abdullah07
				</a>
			</Typography>
			<Typography
				sx={{ mt: "20px", ml: isMobile ? "0px" : "50px" }}
				component="p"
				variant={isMobile ? "h6" : "h5"}
			>
				Email me: uzairabdullah973@gmail.com
			</Typography>
		</Container>
	);
};

export default Contact;
