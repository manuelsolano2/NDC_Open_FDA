import React from "react"
import {Grid, Typography, List, ListItem, ListItemIcon, ListItemText} from "@mui/material"
import FeedIcon from "@mui/icons-material/Feed"
import RemoveIcon from "@mui/icons-material/Remove"

export default function ArrayItem({keyName, value}) {
    if (!value || !Array.isArray(value) || value.length === 0) {
        return null
    }

    return (
        <Grid item xs={12}>
            <Typography sx={{display: "flex", alignItems: "center", mb: 1, mt:1}}>
                <FeedIcon sx={{mr: 1}} color="primary" fontSize="medium"/>
                <Typography component="span" sx={{fontWeight: "bold"}}>
                    {keyName}:
                </Typography>
            </Typography>
            <List>
                {value.map((item, index) =>
                    typeof item === "object" ? (
                        <ListItem key={index}>
                            <ListItemText
                                primary={
                                    <Typography variant="h7" sx={{fontWeight: "bold"}}>
                                        {keyName} {index + 1}
                                    </Typography>
                                }
                                secondary={
                                    <List dense>
                                        {Object.entries(item).map(([subKey, subValue]) => (
                                            <ListItem key={subKey}>
                                                <ListItemIcon>
                                                    <RemoveIcon fontSize="small"/>
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
                                }
                            />
                        </ListItem>
                    ) : (
                        <ListItem key={index}>
                            <ListItemIcon>
                                <RemoveIcon fontSize="small"/>
                            </ListItemIcon>
                            <ListItemText
                                primary={
                                    <Typography>
                                        <Typography component="span" sx={{fontWeight: "bold"}}>
                                            {keyName}:
                                        </Typography>{" "}
                                        {item || "N/A"}
                                    </Typography>
                                }
                            />
                        </ListItem>
                    )
                )}
            </List>
        </Grid>
    )
}