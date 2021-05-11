import { postCustomer, saveOrderToAPI } from "./dataAccess.js"

const container = document.querySelector("#container")


// Capture user keypresses for all but date
container.addEventListener(
    "click",
    (clickEvent) => {
        if (clickEvent.target.id === "submitOrder") {
            postCustomer()
        }
    }
)

export const SubmitOrderButton = () => {
    return `
        <button id="submitOrder">Submit Order</button>
    `
}
