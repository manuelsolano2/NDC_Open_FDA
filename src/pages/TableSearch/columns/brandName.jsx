import * as React from "react"

export default function brandNameColumn() {
    return {
        key: "brand_name",
        label: "Brand Name",
        columnAlign: "center",
        headAlign: "center",
        maxWidth: 200,
        render: (value) => <strong>{value}</strong>,
    }
}