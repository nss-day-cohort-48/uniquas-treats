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

