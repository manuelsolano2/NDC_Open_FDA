import React from 'react'
import {
    Box,
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Drawer,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    CssBaseline,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import PageviewIcon from '@mui/icons-material/Pageview'
import {useNavigate} from "react-router-dom"

export default function SideNav({children}) {
    const drawerWidth = 200
    const [open, setOpen] = React.useState(false)
    const navigate = useNavigate()

    const toggleDrawer = () => {
        setOpen(!open)
    }

    return <Box
        sx={{
            display: 'flex',
            minHeight: '100vh',
            flexDirection: 'column',
        }}
    >
        <CssBaseline/>

        <AppBar
            position="fixed"
            sx={{
                zIndex: (theme) => theme.zIndex.drawer + 1,
            }}
        >
            <Toolbar>
                <IconButton
                    color="inherit"
                    edge="start"
                    onClick={toggleDrawer}
                    sx={{mr: 2}}
                >
                    <MenuIcon/>
                </IconButton>
                <Typography variant="h5" noWrap onClick={() => navigate("/")}>
                    OpenFDA
                </Typography>
            </Toolbar>
        </AppBar>

        <Drawer
            variant="temporary"
            anchor="left"
            open={open}
            onClose={toggleDrawer}
            sx={{
                width: open ? drawerWidth : 0,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: drawerWidth,
                    paddingTop: '64px',
                    boxSizing: 'border-box',
                },
            }}
        >
            <List>
                <ListItemButton
                    onClick={() => {
                        navigate("/table-search")
                        toggleDrawer()
                    }}
                >
                    <ListItemIcon>
                        <PageviewIcon color="primary"/>
                    </ListItemIcon>
                    <ListItemText primary="Table Search"/>
                </ListItemButton>
            </List>
        </Drawer>
        <Box
            component="main"
            sx={{
                flexGrow: 1,
                paddingTop: '64px',
                margin: 2
            }}
        >
            {children}
        </Box>
    </Box>
}
