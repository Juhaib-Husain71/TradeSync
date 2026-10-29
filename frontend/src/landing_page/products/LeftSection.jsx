function LeftSection({
  imageUrl,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container">
      <div className="row pt-5">
        <div className="col-6">
          <img src={imageUrl} alt="kite Image" style={{height:"85%"}}/>
        </div>
        <div className="col-6 p-5">
          <h1 className="fs-3">{productName}</h1>
          <p className="pe-3 pt-3 text-muted" style={{ fontSize: "1.15rem" }}>
            {productDescription}
          </p>
          <a href={tryDemo} className="me-5">
            Try Demo <i className="fa-solid fa-arrow-right-long"></i>
          </a>
          <a href={learnMore}>
            Learn more <i className="fa-solid fa-arrow-right-long"></i>
          </a>

          <div className="mt-3">
            <a href={googlePlay} className="me-3">
              <img
                src="/images/googlePlayBadge.svg"
                alt="google play badge Image"
              />
            </a>

            <a href={appStore}>
              <img
                src="/images/appstoreBadge.svg"
                alt="app store Badge Image"
              />
            </a>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
