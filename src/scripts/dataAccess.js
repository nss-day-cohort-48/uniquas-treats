const applicationState = {
    products: []
}

export const fetchProducts = () => {
    return fetch("http://localhost:8088/products")
        .then(
            response => response.json()
        )
        .then(
            (data) => {
                applicationState.products = data
            }
        )
}

export const getProducts = () => {
    return [...applicationState.products]
}
