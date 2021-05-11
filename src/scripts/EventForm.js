import { setCustomerEmail, setCustomerName, setCustomerPhone, setEventDate, setEventDescription } from "./dataAccess.js"

const container = document.querySelector("#container")


// Capture user keypresses for all but date
container.addEventListener(
    "keyup",
    (keyEvent) => {
        if (keyEvent.target.id === "customerName") {
            setCustomerName(keyEvent.target.value)
        }
        else if (keyEvent.target.id === "customerEmail") {
            setCustomerEmail(keyEvent.target.value)
        }
        else if (keyEvent.target.id === "customerPhone") {
            setCustomerPhone(keyEvent.target.value)
        }
        else if (keyEvent.target.id === "eventDescription") {
            setEventDescription(keyEvent.target.value)
        }
    }
)


// Capture when date picker value changes
container.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "eventDate") {
            setEventDate(changeEvent.target.value)
        }
    }
)


export const EventForm = () => {
    return `
        <h2>Event Form</h2>
        <fieldset>
            <input id="customerName" placeholder="Your name" type="text" />
        </fieldset>
        <fieldset>
            <input id="customerEmail" placeholder="Your email" type="text" />
        </fieldset>
        <fieldset>
            <input id="customerPhone" placeholder="Your phone number" type="text" />
        </fieldset>
        <fieldset>
            <input id="eventDescription" placeholder="Event description" type="text" />
        </fieldset>
        <fieldset>
            <label for="eventDate">Event date</label>
            <input id="eventDate" type="date" />
        </fieldset>
    `
}
