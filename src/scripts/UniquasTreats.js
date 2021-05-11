import { ChosenProducts } from "./ChosenProducts.js"
import { EventForm } from "./EventForm.js"
import { Products } from "./Products.js"
import { SubmitOrderButton } from "./SubmitOrder.js"

export const UniquasTreats = () => {
    return `
        <h1>Uniqua's Treats and Catering</h1>

        <div class="topFlex">
            <article>
                ${ Products() }
            </article>
            <article>
                ${ EventForm() }
            </article>
        </div>
        <article>
            ${ ChosenProducts() }
        </article>
        <article>
            ${ SubmitOrderButton() }
        </article>
    `
}
