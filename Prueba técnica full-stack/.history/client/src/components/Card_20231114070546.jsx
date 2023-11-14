function Card({ currency }) {
  const totalSum = 1000000;
  const paid = 700000;
  //Conversion constants
  const USD_CONVERSION_RATE = 0.057;
  const EUR_CONVERSION_RATE = 0.053;
  //currency to word
  const currencies = {
    mxn: { name: "Pesos", conversionRate: 1 },
    usd: { name: "Dólares", conversionRate: USD_CONVERSION_RATE },
    eur: { name: "Euros", conversionRate: EUR_CONVERSION_RATE },
  };
  return (
    <figure>
      <h3>{currencies[currency].name}</h3>
      <p>{totalSum * currencies[currency].conversionRate}</p>
      <div>
        <p>{(paid - totalSum) * 100}</p>
        <p>{paid * currencies[currency].conversionRate}</p>
      </div>
      <div></div>
    </figure>
  );
}

export default Card;
