import React from "react"
import {SimpleItem, ArrayItem, ObjectItem} from "../../components/Modal/items/index.js"

export const getModalContent = (data) => {
    return <>
        <SimpleItem keyName="Product ID" value={data.product_id}/>
        <SimpleItem keyName="Product Type" value={data.product_ndc}/>
        <SimpleItem keyName="Product Type" value={data.product_type}/>
        <SimpleItem keyName="Brand Name" value={data.brand_name}/>
        <SimpleItem keyName="Brand Name Vase" value={data.brand_name_vase}/>
        <SimpleItem keyName="Dosage Form" value={data.dosage_form}/>
        <SimpleItem keyName="Finished" value={data.finished}/>
        <SimpleItem keyName="Generic Name" value={data.generic_name}/>
        <SimpleItem keyName="Labeler Name" value={data.labeler_name}/>
        <SimpleItem keyName="Listing Expiration Date" value={data.listing_expiration_date}/>
        <SimpleItem keyName="Marketing Category" value={data.marketing_category}/>
        <SimpleItem keyName="Marketing Start Date" value={data.marketing_start_date}/>
        <SimpleItem keyName="SPL ID" value={data.spl_id}/>

        <ObjectItem keyName="Open FDA" value={data.openfda}/>
        <ArrayItem keyName="Packaging" value={data.packaging}/>
    </>
}
