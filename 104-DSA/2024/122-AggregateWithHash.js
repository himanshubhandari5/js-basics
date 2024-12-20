// - Let’s say we have an array of objects representing sales 
//    data, where each object contains the name of a product 
//    and the corresponding sales amount.
// - Our goal is to aggregate the sales data by product and 
//    calculate the total sales for each product.
const salesData = [
  { product: 'Product A', sales: 100 },
  { product: 'Product B', sales: 200 },
  { product: 'Product A', sales: 150 },
  { product: 'Product C', sales: 300 },
  { product: 'Product B', sales: 250 },
]

function aggregateSales(data) {
  const groupedData = new Map()
  data.map(el => {
    groupedData.set(el.product, groupedData.get(el.product) + el.sales || el.sales)
  })
  return groupedData
}

console.log(aggregateSales(salesData))

