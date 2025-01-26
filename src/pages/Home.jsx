import React from "react"
import {Box, Typography} from "@mui/material"

export default function HomePage() {
    return <Box
        sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            padding: 5,
        }}
    >
        <Typography variant="h4" gutterBottom>
            Welcome to the Home Page
        </Typography>
        <Typography variant="body1">
            Please use the sidebar to navigate to the table search.
        </Typography>
    </Box>
}
