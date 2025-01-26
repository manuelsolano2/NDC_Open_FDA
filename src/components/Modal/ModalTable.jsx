import React from "react"
import { Modal, Box, Grid, Typography } from "@mui/material"
import MedicalServicesIcon from "@mui/icons-material/MedicalServices"

export default function ModalTable({ modalDataSignal, onClose, children }) {
    const data = modalDataSignal.value

    if (!data) return null

    return (
        <Modal open={!!data} onClose={onClose}>
            <Box
                sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: "90%",
                    maxWidth: "1200px",
                    maxHeight: "90%",
                    overflowY: "auto",
                    bgcolor: "background.paper",
                    p: 4,
                }}
            >
                <Grid item xs={12} sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                    <MedicalServicesIcon color="primary" fontSize="large" sx={{ mr: 2 }} />
                    <Typography variant="h5">Medication Details</Typography>
                </Grid>
                <Grid container spacing={2}>
                    {children}
                </Grid>
            </Box>
        </Modal>
    )
}
