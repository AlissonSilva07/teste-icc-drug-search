interface Drug {
    generic_name: string
    labeler_name: string,
    brand_name: string,
    active_ingredients: [
        {
            name: string,
            strength: string
        },
        {
            name: string,
            strength: string
        }
    ],
    listing_expiration_date: string,
    marketing_category: string,
    dosage_form: string,
    product_type: string,
    product_id: string,
}

export type { Drug }