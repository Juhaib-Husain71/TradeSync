
function StepsToOpen() {
  return (
    <div style={{ backgroundColor: "#F6F6F6" }}>
    <div className="container mt-5 mb-5 pt-3">
        <h3 className="text-muted text-center pt-3">Steps to open a demat account with TradeSync</h3>
        <div className="row mt-5">
            <div className="col text-end" >
                <img src="/images/steps-acop.svg" alt="steps-acop Img" style={{width: "75%"}}/>
            </div>
            <div className="col fs-5 mt-4 fw-semibold text-muted">
                <div className="d-flex">
                    <div className="acop-steps">01</div>
                    <p>Enter the requested details</p>
                </div>
                <hr style={{width: "50%"}}/>

                <div className="d-flex">
                    <div className="acop-steps">02</div>
                    <p>Complete Verification</p>
                </div>
                <hr style={{width: "50%"}}/>

                <div className="d-flex">
                    <div className="acop-steps">03</div>
                    <p>Start Investing</p>
                </div>                
            </div>
        </div>      
    </div>
    </div>
  )
}

export default StepsToOpen;
