import { getProducts } from "./dataAccess.js"


export const Products = () => {
    const products = getProducts()

    return `
        <h2>Products</h2>

        ${
            products.map(
                (productObject) => {
                    return `
                        <div>
                            Name: ${productObject.name}
                            Price: ${productObject.price}
                        </div>
                    `
                }
            ).join("")
        }
    `
}