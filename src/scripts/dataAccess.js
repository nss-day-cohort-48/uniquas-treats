const applicationState = {
    products: [],
    orderBuilder: {
        name: "",
        email: "",
        phone: "",
        description: "",
        date: "",
        chosenProducts: []
    }
}

export const saveOrderToAPI = () => {
    console.log(applicationState.orderBuilder)
}

export const setEventDate = (date) => {
    applicationState.orderBuilder.date = date
}

export const setCustomerName = (name) => {
    applicationState.orderBuilder.name = name
}

export const setCustomerEmail = (email) => {
    applicationState.orderBuilder.email = email
}

export const setCustomerPhone = (phone) => {
    applicationState.orderBuilder.phone = phone
}

export const setEventDescription = (description) => {
    applicationState.orderBuilder.description = description
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
