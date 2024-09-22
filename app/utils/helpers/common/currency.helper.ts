export class CurrencyHelper {
  static currency = {
    cedi: {
      name: "Cedi",
      unit: "Pesewa",
      code: "GH₵",
      symbol: "₵",
      verbose: "Ghanaian cedi",
    },
    dollar: {
      name: "Dollar",
      unit: "Cent",
      code: "USD",
      symbol: "$",
      verbose: "United States dollar",
    },    			
    euro: {
      name: "Euro",
      unit: "Cent",
      code: "EUR",
      symbol: "€",
      verbose: "Euro",
    },
    naira: {
      name: "Naira",
      unit: "Kobo",
      code: "NGN",
      symbol: "₦",
      verbose: "Nigerian naira",
    },
    pound: {
      name: "Pound/Sterling",
      unit: "Penny",
      code: "GBP",
      symbol: "£",
      verbose: "British pound-sterling",
    },
    rand: {
      name: "Rand",
      unit: "Cent",
      code: "ZAR",
      symbol: "R",
      verbose: "South African rand",
    },
  };

  static convertNaira(n: number) {}
}
