import { getProducts, setChosenProduct } from "./dataAccess.js"

const container = document.querySelector("#container")

// Listen for checkbox "change" events and store selected product in app state
container.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id.startsWith("product--")) {
            const [, productId] = changeEvent.target.id.split("--")

            setChosenProduct(parseInt(productId))
        }
    }
)


export const Products = () => {
    const products = getProducts()

    return `
        <h2>Products</h2>

        ${
            products.map(
                (productObject) => {
                    return `
                        <div>
                            <input type="checkbox" id="product--${productObject.id}" />
                            Name: ${productObject.name}
                            Price: ${productObject.price}
                        </div>
                    `
                }
            ).join("")
        }
    `
}