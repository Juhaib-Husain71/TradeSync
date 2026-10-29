function RightSection({
  imageUrl,
  productName,
  productDescription,
  learnMore,
}) {
  return (
    <div className="container">
      <div className="row pt-5">
        <div className="col-6 p-5">
          <h1 className="fs-3">{productName}</h1>
          <p className="pe-3 pt-3 text-muted" style={{ fontSize: "1.15rem" }}>
            {productDescription}
          </p>
          <a href={learnMore}>
            Learn more <i className="fa-solid fa-arrow-right-long"></i>
          </a>
        </div>
        <div className="col-6">
          <img src={imageUrl} alt="kite Image" style={{height: "85%"}}/>
        </div>
      </div>
    </div>
  );
}

export default RightSection;
