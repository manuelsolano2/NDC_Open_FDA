import {signal, batch} from '@preact/signals-react'

export const dataSignal = signal([])
export const filteredDataSignal = signal([])
export const totalResults = signal([])
export const limit = signal(10)
export const isLoadingSignal = signal(false)

export const resetGeneralSignals = () => batch(() => {
    dataSignal.value = []
    filteredDataSignal.value = []
    totalResults.value = []
    limit.value = 10
    isLoadingSignal.value = false
})