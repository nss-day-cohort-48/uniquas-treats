import { fetchProducts } from "./dataAccess.js"
import { UniquasTreats } from "./UniquasTreats.js"


const mainContainer = document.querySelector("#container")

const renderHTML = () => {
    fetchProducts()
        .then(
            () => {
                mainContainer.innerHTML = UniquasTreats()
            }
        )
}

renderHTML()

mainContainer.addEventListener(
    "stateChanged",
    () => {
        console.log("*** API state has changed, I will now generate all of the HTML again")
        renderHTML()
    }
)
