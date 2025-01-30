import React from "react"
import {IconButton} from "@mui/material"
import MedicalServicesIcon from '@mui/icons-material/MedicalServices'

export default function info(modalDataSignal) {
    return {
        key: "info",
        label: "Info",
        columnAlign: "center",
        headAlign: "center",
        render: (_, row) => (
            <IconButton
                onClick={() => {
                    modalDataSignal.value = row
                }}
                color="primary"
            >
                <MedicalServicesIcon/>
            </IconButton>
        )
    }
}


