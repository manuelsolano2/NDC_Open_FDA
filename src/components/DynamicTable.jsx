import React from 'react'
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TablePagination,
    Paper,
    Skeleton, Alert, Grid,
} from '@mui/material'
import {useSignal} from '@preact/signals-react'
import {dataSignal, filteredDataSignal, isLoadingSignal, totalResults} from '../signals'
import Actions from './Actions'

export default function DynamicTable({columns}) {
    const page = useSignal(0)
    const rowsPerPage = useSignal(5)

    const filteredData = filteredDataSignal.value || []

    const startIndex = page.value * rowsPerPage.value
    const paginatedData = filteredData.slice(
        startIndex,
        startIndex + rowsPerPage.value
    )

    const handleChangePage = (_, newPage) => {
        page.value = newPage
    }

    const handleChangeRowsPerPage = (event) => {
        rowsPerPage.value = parseInt(event.target.value, 10)
        page.value = 0
    }

    if (isLoadingSignal.value) {
        return (
            <Skeleton
                variant="rectangular"
                width="100%"
                height={400}
                sx={{marginBottom: 2}}
            />
        )
    }

    if (!dataSignal.value.length) return <></>


    return <>
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Alert severity="info" sx={{mb: 2}}>
                    The search term can return up to {totalResults.value} results.
                </Alert>
            </Grid>

            <TableContainer component={Paper}>

                <Actions/>

                <Table>
                    <TableHead>
                        <TableRow>
                            {columns.map((col) => (
                                <TableCell
                                    key={col.key}
                                    style={{maxWidth: col.maxWidth}}
                                    align={col.headAlign || "center"}
                                >
                                    {col.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>


                    <TableBody>
                        {paginatedData.map((row, index) => (
                            <TableRow key={index}>
                                {columns.map((col) => (
                                    <TableCell
                                        key={col.key}
                                        style={{
                                            maxWidth: col.maxWidth,
                                            whiteSpace: "nowrap",
                                            overflow: "hidden",
                                            textOverflow: "ellipsis",
                                        }}
                                        align={col.columnAlign || "left"}
                                    >
                                        {col.render ? col.render(row[col.key], row) : row[col.key] || "N/A"}
                                    </TableCell>
                                ))}
                            </TableRow>
                        ))}

                        {paginatedData?.length === 0 && (
                            <TableRow>
                                <TableCell colSpan={columns.length} align="center">
                                    No found results.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>

                <TablePagination
                    rowsPerPageOptions={[5, 10, 25]}
                    component="div"
                    count={filteredData.length || 0}
                    rowsPerPage={rowsPerPage.value}
                    page={page.value}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </TableContainer>
        </Grid>
    </>
}


