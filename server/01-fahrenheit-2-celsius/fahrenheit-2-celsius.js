const fahrenheitToCelsius = (fahrenheit) => {
    let celsius = (fahrenheit - 32) * (5/9);
    return Number(celsius.toFixed(2));
 };

module.exports = { fahrenheitToCelsius };