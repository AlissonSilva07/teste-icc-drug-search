import { useState } from "react"
import { ModalProductDetails } from "../../../shared/components/modalProductDetails"
import { Drug } from "../interfaces/drug"

function useProductDetails() {
    const [isOpenProductDetails, setIsOpenProductDetails] = useState<boolean>(false)

    function renderModal(drug: Drug): JSX.Element {
        return <ModalProductDetails drug={drug} onClose={() => setIsOpenProductDetails(false)} />
    }

    return {
        isOpenProductDetails: {
            value: isOpenProductDetails,
            set: setIsOpenProductDetails
        },
        renderModal
    }
}

export { useProductDetails }