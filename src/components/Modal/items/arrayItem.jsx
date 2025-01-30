import React from "react"
import {Grid, List, ListItem, ListItemIcon, Box} from "@mui/material"
import FeedIcon from "@mui/icons-material/Feed"
import RemoveIcon from "@mui/icons-material/Remove"

export default function ArrayItem({keyName, value}) {
    if (!value || !Array.isArray(value) || value.length === 0) {
        return null
    }

    return <Grid item xs={12}>
        <Box sx={{display: "flex", alignItems: "center", mb: 1, mt: 1, fontWeight: "bold"}}>
            <FeedIcon sx={{mr: 1}} color="primary" fontSize="medium"/>
            {keyName}:
        </Box>
        <List>
            {value.map((item, index) =>
                typeof item === "object" ? (
                    <ListItem key={index} alignItems="flex-start">
                        <Box sx={{fontWeight: "bold", mb: 1}}>{keyName} {index + 1}</Box>
                        <Box>
                            <List dense>
                                {Object.entries(item).map(([subKey, subValue]) => (
                                    <ListItem key={subKey} alignItems="flex-start">
                                        <ListItemIcon>
                                            <RemoveIcon fontSize="small"/>
                                        </ListItemIcon>
                                        <Box>
                                            <strong>{subKey}:</strong> {String(subValue) || "N/A"}
                                        </Box>
                                    </ListItem>
                                ))}
                            </List>
                        </Box>
                    </ListItem>
                ) : (
                    <ListItem key={index} alignItems="flex-start">
                        <ListItemIcon>
                            <RemoveIcon fontSize="small"/>
                        </ListItemIcon>
                        <Box>
                            <strong>{keyName}:</strong> {String(item) || "N/A"}
                        </Box>
                    </ListItem>
                )
            )}
        </List>
    </Grid>
}
