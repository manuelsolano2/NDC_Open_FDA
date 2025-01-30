import React, {useEffect} from "react"
import {useSignal} from "@preact/signals-react"
import DynamicTable from "../../components/DynamicTable.jsx"
import {resetGeneralSignals} from "../../signals.jsx"
import NdcFilter from "./Filter.jsx"
import ModalTable from "../../components/Modal/ModalTable.jsx"
import {getModalContent} from "./ModalContent.jsx"
import {
    infoColumn,
    brandNameColumn,
    dosageFormColumn,
    finishedColumn,
    genericNameColumn,
    productNdcColumn
} from "./columns/index.js"

export default function TableSearch() {
    useEffect(() => {
        return () => resetGeneralSignals()
    }, [])
    const modalData = useSignal(null)

    const columnsConfig = [
        infoColumn(modalData),
        productNdcColumn(),
        brandNameColumn(),
        genericNameColumn(),
        dosageFormColumn(),
        finishedColumn()
    ]

    return <>
        <NdcFilter/>
        <DynamicTable columns={columnsConfig}/>
        {modalData.value && (
            <ModalTable modalDataSignal={modalData} onClose={() => (modalData.value = null)}>
                {getModalContent(modalData.value)}
            </ModalTable>
        )}
    </>
}
