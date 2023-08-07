import React, { useEffect, useContext } from "react";
import { useNavigate, Link, useParams } from "react-router-dom";
import minus from "../assets/image/minus.png";
import add from "../assets/image/add.png";
import { PriceContext } from "../contexts/appContext";
import Alert from "./Alert";

const Prices = () => {
  const {
    advance,
    advancePriceInput,
    isLoading,
    showAlert,
    group,
    groupPriceInput,
    advanceTotal,
    groupTotal,
    totalCost,
    calcAdvanceTotal,
    calcGroupTotal,
    calcTotalCost,
    getAdvancePriceInputValue,
    getGroupPriceInputValue,
    incrementAdvanceInput,
    decrementAdvanceInput,
    incrementGroupPrice,
    decrementGroupPrice,
    handlebtnPay,
    toggleNavigate,
  } = useContext(PriceContext);

  useEffect(() => {
    calcAdvanceTotal();
  }, [advancePriceInput]);

  useEffect(() => {
    calcGroupTotal();
  }, [groupPriceInput]);

  useEffect(() => {
    calcTotalCost();
  }, [advanceTotal, groupTotal]);

  const { id } = useParams();
  const navigate = useNavigate();

  //  const handlePurchasebtn = () => {
  //    if (totalCost > 0) {
  //      navigate(`/Payment/${id}`);
  //    } else {
  //      oneTicketAlert()
  //    }
  //  };

  useEffect(() => {
    setTimeout(() => {
      {
        toggleNavigate && navigate(`/Payment/${id}`); 
      }
    }, 2000);
  }, [handlebtnPay]);

  return (
    <>
      <div className="moreInfoPriceDiv">
        <table className="priceTable">
          <tr>
            <td>
              <h5>Ticket</h5>
            </td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>
              <h5>Advance</h5>
            </td>
            <td>
              <p>{Number(advance).toLocaleString("en")}</p>
            </td>

            <td>
              <div className="td-style">
                <div>
                  <img
                    className="addminus-icon"
                    onClick={() => incrementAdvanceInput()}
                    src={add}
                    alt=""
                  />
                </div>

                <div>
                  <input
                    className="priceInput"
                    type="text"
                    pattern="[0-9]*"
                    name="advanceInput"
                    value={advancePriceInput}
                    onChange={(e) => getAdvancePriceInputValue(e)}
                  />
                </div>
                <div>
                  <img
                    className="addminus-icon"
                    src={minus}
                    onClick={() => decrementAdvanceInput()}
                    alt=""
                  />
                </div>
              </div>
            </td>
            <td>{Number(advanceTotal).toLocaleString("en")}</td>
          </tr>

          <tr className="gaterow">
            <td>
              <p>Gate</p>
            </td>
            <td>
              <p>1,500</p>
            </td>
            <td>
              <div className="td-style">
                <div>
                  <img src={add} className="addminus-icon" alt="" />
                </div>
                <div>
                  <input className="priceInput" type="text" disabled />{" "}
                </div>
                <div>
                  <img src={minus} className="addminus-icon" alt="" />
                </div>
              </div>
            </td>
            <td></td>
          </tr>

          <tr>
            <td>
              <p>Group of 5</p>
            </td>
            <td>
              <p>{Number(group).toLocaleString("en")}</p>
            </td>
            <td>
              <div className="td-style">
                <div>
                  <img
                    className="addminus-icon"
                    onClick={() => incrementGroupPrice()}
                    src={add}
                    alt=""
                  />
                </div>
                <div>
                  <input
                    className="priceInput"
                    type="text"
                    pattern="[0-9]*"
                    value={groupPriceInput}
                    onChange={(e) => getGroupPriceInputValue(e)}
                  />
                </div>
                <div>
                  <img
                    src={minus}
                    className="addminus-icon"
                    onClick={() => decrementGroupPrice()}
                    alt=""
                  />
                </div>
              </div>
            </td>
            <td>{Number(groupTotal).toLocaleString("en")}</td>
          </tr>
          <tr>
            <td>
              <h5>Discount</h5>    
            </td>
            <td></td>
            <td>
              <p> KES. 0</p>
            </td>
            <td></td>
          </tr>
          <tr>
            <td>
              <b>Total</b>
            </td>
            <td></td>
            <td>
              <b>KES. {Number(totalCost).toLocaleString("en")} </b>
            </td>
            <td></td>
          </tr>
        </table>
        <div>
          <p className="policyText">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
            <Link to="/TermsConditions"> Terms and Conditions</Link> Quibusdam
            natus iste atque alias sunt animi optio repellat odit repellendus,
            dignissimos, autem quisquam tenetur ipsa molestias minus, corrupti
            numquam quo eligendi.
          </p>

          {/* set up Logic to check if atleast one ticket is selected */}
         
         {showAlert && <Alert />} 
          <button className=" btnPurchaseTicket" onClick={() => handlebtnPay()}>
            <p className="btnPurchaseTicket-text">
              {isLoading ? "please wait ..." : "Purchase Ticket"}
            </p>
            <p
              className={`btnPurchaseTicket-text ${
                totalCost === 0 ? "displayPay" : ""
              } `}
            >
              Pay {Number(totalCost).toLocaleString("en")} /-
            </p>
          </button>
        </div>
      </div>
      <div></div>
    </>
  );
};

export default Prices;
