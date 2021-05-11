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

/*
{
    "id": 1,
    "name": "Hugh Jass",
    "email": "hugh@jass.com",
    "phoneNumber": "615-333-4444"
}
*/

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

/*
{
      "id": 1,
      "eventDescription": "Wedding",
      "eventDate": "2021-06-01",
      "hoursNeeded": 0,
      "orderPlaced": "2021-05-10",
      "customerId": 1,
      "isComplete": false
}

*/

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
        .then(() => {

        })
}

export const getProducts = () => {
    return [...applicationState.products]
}
