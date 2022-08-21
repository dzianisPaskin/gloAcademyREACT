export const totalPriceItems = (order) => order.price * order.count;

export function FormatCurrency(total) {
  return total.toFixed() + ",..\u20bd";
}
