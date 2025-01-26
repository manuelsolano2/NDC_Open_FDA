import React from "react"
import {Grid, Typography, List, ListItem, ListItemIcon, ListItemText} from "@mui/material"
import SummarizeIcon from "@mui/icons-material/Summarize"
import CircleIcon from "@mui/icons-material/Circle"

export default function ObjectItem({keyName, value}){
    if (!value || typeof value !== "object" || Object.keys(value).length === 0) {
        return null
    }

    return <Grid item xs={12}>
            <Typography sx={{display: "flex", alignItems: "center", mb: 1, mt: 1}}>
                <SummarizeIcon sx={{mr: 1}} color="primary" fontSize="medium"/>
                <Typography component="span" sx={{fontWeight: "bold"}}>
                    {keyName}:
                </Typography>
            </Typography>
            <List>
                {Object.entries(value).map(([subKey, subValue]) => (
                    <ListItem key={subKey}>
                        <ListItemIcon>
                            <CircleIcon fontSize="small" color="primary"/>
                        </ListItemIcon>
                        <ListItemText
                            primary={
                                <Typography>
                                    <Typography component="span" sx={{fontWeight: "bold"}}>
                                        {subKey}:
                                    </Typography>{" "}
                                    {subValue || "N/A"}
                                </Typography>
                            }
                        />
                    </ListItem>
                ))}
            </List>
        </Grid>
}

