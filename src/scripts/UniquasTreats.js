import { ChosenProducts } from "./ChosenProducts.js"
import { EventForm } from "./EventForm.js"
import { Products } from "./Products.js"
import { SubmitOrderButton } from "./SubmitOrder.js"

export const UniquasTreats = () => {
    return `
        <h1>Uniqua's Treats and Catering</h1>

        <article>
            ${ Products() }
        </article>
        <article>
            ${ EventForm() }
        </article>
        <article>
            ${ ChosenProducts() }
        </article>
        <article>
            ${ SubmitOrderButton() }
        </article>
    `
}
