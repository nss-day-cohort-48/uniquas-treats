const mainContainer = document.querySelector("#container")


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

export const setChosenProduct = (id) => {
    const doesExist = applicationState.orderBuilder.chosenProducts.indexOf(id)  // -1 if not found, 0+ if it is

    // id not in array
    if (doesExist < 0) {
        applicationState.orderBuilder.chosenProducts.push(id)
    }
    // id is in array
    else {
        applicationState.orderBuilder.chosenProducts.splice(doesExist, 1)
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

const apiURL = "http://localhost:8088"

export const fetchProducts = () => {
    return fetch(`${apiURL}/products`)
        .then(
            response => response.json()
        )
        .then(
            (data) => {
                applicationState.products = data
            }
        )
}

export const postCustomer = () => {
    const newCustomerToBeCreated = {
        name: applicationState.orderBuilder.name,
        email: applicationState.orderBuilder.email,
        phoneNumber: applicationState.orderBuilder.phone
    }

    return fetch(`${apiURL}/customers`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newCustomerToBeCreated)
    })
        .then(response => response.json())
        .then((customer) => {
            postOrder(customer)
        })
}

export const postOrder = (customerObject) => {
    const newDate = new Date()

    const newOrderToBeCreated = {
        eventDescription: applicationState.orderBuilder.description,
        eventDate: applicationState.orderBuilder.date,
        hoursNeeded: 0,
        isComplete: false,
        orderPlaced: newDate.toISOString().split("T")[0],
        customerId: customerObject.id
    }


    return fetch(`${apiURL}/orders`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newOrderToBeCreated)
    })
        .then(response => response.json())
        .then(
            (orderObject) => {
                for (const productId of applicationState.orderBuilder.chosenProducts) {
                    postOrderProductRelationship(orderObject.id, productId)
                }
            }
        )
}

const postOrderProductRelationship = (orderId, productId) => {
    const relationship = { orderId, productId }

    return fetch(`${apiURL}/orderProducts`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(relationship)
    })
        .then(response => response.json())
        .then(
            () => {
                mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
            }
        )
}

export const getProducts = () => {
    return [...applicationState.products]
}
