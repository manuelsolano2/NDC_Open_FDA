import React from "react"
import { Grid, Typography } from "@mui/material"
import DescriptionIcon from '@mui/icons-material/Description'
export default function SimpleItem({ keyName, value }){
  const displayValue =
    value === null || value === undefined
      ? "N/A"
      : typeof value === "boolean"
      ? value.toString()
      : value

  return <Grid item xs={12} sm={6}>
      <Typography sx={{ display: "flex", alignItems: "center" }}>
        <DescriptionIcon sx={{ mr: 1 }} color="primary" fontSize="medium" />
        <Typography component="span" sx={{ fontWeight: "bold", mr: 1 }}>
          {keyName}:
        </Typography>
        {displayValue}
      </Typography>
    </Grid>
}