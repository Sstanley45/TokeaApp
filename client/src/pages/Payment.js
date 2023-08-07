import React, { useContext } from 'react'
import Navbar from "../components/Navbar.js"
import Footer from "../components/Footer"
import backIcon from '../assets/image/back.png'
import { Link, useParams } from 'react-router-dom'
import TicketDetails from '../components/TicketDetails.js'
import { PriceContext } from '../contexts/appContext.js'



const Payment = (props) => {
  const { hidePaymentPage, displayProcessingFee, hideProcessingFee } =
    useContext(PriceContext);

  const backLink = () => {
    hidePaymentPage()
    React.forceUpdate()
  }
  const {id} = useParams()
 
  return (
    <>
      <Navbar />
      <section className="paymentPage">
        <div>
          <h1 style={{textAlign : 'center'}}>
            <Link to={`/${id}`} onClick={() => backLink()}>
              <img src={backIcon} alt="" className="backIcon" />
            </Link>
            Complete Payment
          </h1>
          <div className="pay-form">
            <h4>
              <b>Choose payment method</b>
            </h4>

            <section className="mpesa-visa-btn">
              <div>
                <button
                  className="mpesa-visa-btn-display"
                  onClick={hideProcessingFee}
                >
                  MPESA
                </button>
              </div>
              <div>
                <button
                  className="mpesa-visa-btn-display"
                  onClick={displayProcessingFee}
                >
                  VISA/Mastercard
                </button>
              </div>
            </section>

            <label htmlFor="phone" className="pay-form-label">
              Enter Phone(required)
            </label>
            <input
              type="tel"
              placeholder="07xxxxxxxx"
              className="pay-form-input"
              required="true"
            />
            <div>
              <label htmlFor="email" className="pay-form-label">
                Enter email address(required)
              </label>
              <input
                type="email"
                placeholder="example@email.com"
                className="pay-form-input"
                required
              />
            </div>
            <br />
            <button className="btn btn-pay btn-danger">Continue</button>
          </div>
        </div>
        <div>
          <TicketDetails />
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Payment 