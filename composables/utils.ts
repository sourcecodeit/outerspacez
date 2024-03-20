export const useUtils = () => {
  
  function randomInt(min: number, max: number) {
    return Math.floor(Math.random() * max) + min
  }

  function intToRoman(num: number) {
    // Define a map of integer values to their corresponding Roman numerals
    const romanMap = [
      { value: 1000, symbol: 'M' },
      { value: 900, symbol: 'CM' },
      { value: 500, symbol: 'D' },
      { value: 400, symbol: 'CD' },
      { value: 100, symbol: 'C' },
      { value: 90, symbol: 'XC' },
      { value: 50, symbol: 'L' },
      { value: 40, symbol: 'XL' },
      { value: 10, symbol: 'X' },
      { value: 9, symbol: 'IX' },
      { value: 5, symbol: 'V' },
      { value: 4, symbol: 'IV' },
      { value: 1, symbol: 'I' },
    ];

    let roman = '';

    romanMap.forEach((item) => {
      while (num >= item.value) {
        roman += item.symbol; // Add the Roman numeral symbol
        num -= item.value; // Decrease the number by the value's equivalent
      }
    });

    return roman;
  }
  
  return { randomInt, intToRoman }
}
