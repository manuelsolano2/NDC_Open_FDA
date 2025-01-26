import React from 'react'
import {Box, TextField, IconButton} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import {dataSignal, filteredDataSignal} from '../signals.jsx'

import {useSignal} from '@preact/signals-react'

export default function Actions() {
    const isSearchExpanded = useSignal(false)

    const handleSearch = (event) => {
        const query = event.target.value.toLowerCase()

        if (!query) {
            filteredDataSignal.value = [...dataSignal.value]
            return
        }

        filteredDataSignal.value = dataSignal.value.filter((row) =>
            Object.keys(row).some((key) =>
                row[key]?.toString().toLowerCase().includes(query)
            )
        )
    }

    return <Box
        sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
            marginBottom: 2,
        }}
    >
        <IconButton
            onClick={() => (isSearchExpanded.value = !isSearchExpanded.value)}
            sx={{
                marginRight: '8px',
            }}
        >
            <SearchIcon/>
        </IconButton>

        <Box
            sx={{
                display: 'flex',
                mr: 2,
                alignItems: 'center',
                overflow: 'hidden',
                transition: 'width 1s ease, opacity 1s ease',
                width: isSearchExpanded.value ? '250px' : '0px',
                opacity: isSearchExpanded.value ? 1 : 0,
            }}
        >
            <TextField
                variant="outlined"
                size="small"
                placeholder="Search..."
                onChange={handleSearch}
                sx={{
                    width: '100%',
                }}
                autoFocus={isSearchExpanded.value}
            />
        </Box>
    </Box>
}



