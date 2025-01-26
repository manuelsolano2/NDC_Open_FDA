import React from 'react'
import {Button, Card, CardContent, Grid, TextField, Typography} from '@mui/material'
import {useSignal, computed} from '@preact/signals-react'
import {dataSignal, filteredDataSignal, isLoadingSignal, limit, totalResults} from '../../signals.jsx'

export default function Filter() {
    const searchQuery = useSignal('')
    const isButtonDisabled = computed(() => searchQuery.value.trim() === '')

    const handleSearch = async () => {
        if (!searchQuery.value) {
            filteredDataSignal.value = [...dataSignal.value]
            return
        }

        isLoadingSignal.value = true

        try {
            const response = await fetch(
                `https://api.fda.gov/drug/ndc.json?search=${searchQuery.value}&limit=${limit.value}`
            )

            if (!response.ok) throw new Error('Error with search')

            const data = await response.json()

            dataSignal.value = data.results || []
            totalResults.value = data.meta.results.total

            filteredDataSignal.value = [...dataSignal.value]
        } catch (error) {
            dataSignal.value = []
            filteredDataSignal.value = []
        } finally {
            isLoadingSignal.value = false
        }
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleSearch()
        }
    }

    return <Card sx={{marginTop: 1, marginBottom: 2}}>
        <CardContent>
            <Typography variant="h6">Search on NDC Directory API</Typography>
            <Grid container spacing={1} sx={{marginTop: 2}}>
                <Grid item xs={12} md={6} sm={12}>
                    <TextField
                        label="Type to filter"
                        variant="outlined"
                        fullWidth
                        value={searchQuery.value}
                        onChange={(e) => (searchQuery.value = e.target.value)}
                        onKeyDown={handleKeyDown}
                    />
                </Grid>
                <Grid item xs={12} md={2} sm={6}>
                    <TextField
                        label="Limit"
                        variant="outlined"
                        type="number"
                        fullWidth
                        value={limit.value}
                        onChange={e => limit.value = e.target.value}
                    />
                </Grid>
                <Grid item xs={12} md={4} sm={6}>
                    <Button
                        variant="contained"
                        color="primary"
                        fullWidth
                        sx={{height: '100%'}}
                        onClick={handleSearch}
                        disabled={isButtonDisabled.value || isLoadingSignal.value}
                    >
                        Search
                    </Button>
                </Grid>
            </Grid>
        </CardContent>
    </Card>
}


