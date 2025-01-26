import * as React from "react"
import {Chip} from "@mui/material"

export default function finishedColumn() {
    return {
        key: "finished",
        label: "Finished",
        columnAlign: "center",
        render: (value) => (
            <Chip
                label={value ? "Finished" : "Not Finished"}
                color={value ? "success" : "default"}
            />
        )
    }
}