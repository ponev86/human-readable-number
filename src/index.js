module.exports = function toReadable (number) {
  const num = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
  const tens = ['','','twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
  
  if (number < 20) return num[number]
  
  const digit = number % 10
    
  if (number < 100) {
    return tens[Math.floor(number / 10)] + (digit ? ` ${num[digit]}` : `` )
  }
  
  return `${num[Math.floor(number / 100)]} hundred${number % 100 !== 0 ? ` ${toReadable(number % 100)}` : `` }`
}
