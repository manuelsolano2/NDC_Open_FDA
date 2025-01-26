import * as React from "react"
import {Chip} from "@mui/material"

export default function dosageFormColumn() {
    return {
        key: "dosage_form",
        label: "Dosage Form",
        columnAlign: "center",
        headAlign: "center",
        render: (value) => <Chip label={value}/>,
    }
}