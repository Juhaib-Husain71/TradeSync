function CurrPrice({imageUrl, priceTitle, priceDescription}) {
  return (
    <div className="text-center">
      <img src={imageUrl} alt="price Image" style={{width: "60%"}}/>
      <h3>{priceTitle}</h3>
      <p className="text-muted p-3">{priceDescription}</p>
    </div>
  )
}

export default CurrPrice;
