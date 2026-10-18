const cart = [
  // This string still works here because multiplication converts "1500" to a number.
  // If we used +, JavaScript could join text instead of adding amounts.
  { name: "Notebook", price: "1500", qty: 2 },
  { name: "Pen", price: 300, qty: 5 },
  { name: "Bag", price: 12000, qty: 1 },
]

function getSubtotal(items) {
  let subtotal = 0

  // Fix: the loop used <= and reached i = 3 even though there are only 3 items.
  // I found this with a breakpoint and Scope: i was 3; Watch showed items[i] was undefined.
  for (let i = 0; i < items.length; i++) {
    subtotal += items[i].price * items[i].qty
  }

  return subtotal
}

function getDiscount(subtotal) {
  // Fix: check the higher threshold first. Watch showed getDiscount(21000) returned
  // 0.1 because the >10000 condition ran before the >20000 condition.
  if (subtotal > 20000) return 0.2
  else if (subtotal > 10000) return 0.1
  return 0
}

function getTotal(items) {
  const subtotal = getSubtotal(items)
  const discount = getDiscount(subtotal)

  // Fix: discount is a rate (0.1 means 10%), so subtract that fraction of the subtotal.
  // Watch showed 16500 - 0.1 = 16499.9; the correct 10% total is 14850.
  const total = subtotal - subtotal * discount

  return total
}

console.log(getTotal(cart))
