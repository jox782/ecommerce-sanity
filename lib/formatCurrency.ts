export function formateCurrencey(
  amount: number,
  currencyCode: string = "EGP"
): string {
  try {
    return new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: currencyCode.toUpperCase(),
    }).format(amount);
  } catch (err) {
    console.error("Invalid currency code:", currencyCode, err);
    return `${currencyCode.toUpperCase()} ${amount.toFixed(2)}`;
  }
}
