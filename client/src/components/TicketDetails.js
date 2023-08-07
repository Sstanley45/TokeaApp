import React, { useContext } from "react";
import { PriceContext } from "../contexts/appContext";

const TicketDetails = () => {
  const { totalCost, ticketToPay, ProcessingFee, masterCard } = useContext(PriceContext);

  return (
    <>
      <table className="show-on-large-screen payment-table">
        <tr>
          <th>Ticket details</th>
          <th></th>
          <th></th>
          <th></th>
        </tr>
        <tr>
          <td>Ticket</td>
          <td>Cost</td>
          <td>Quantity</td>
          <td>Sub Total</td>
        </tr>

        {ticketToPay.map((ticket) => {
          return (
            <>
              <tr>
                <td>{ticket.name}</td>
                <td>{ticket.cost}</td>
                <td>{ticket.quantity}</td>
                <td>{ticket.subTotal}</td>
              </tr>
            </>
          );
        })}

        <tr>
          <td>
            <h5>Discount</h5>
          </td>
          <td></td>
          <td></td>
          <td>
            <b>KES 0</b>
          </td>
        </tr>
        {masterCard && (
          <tr>
            <td>
              <h5>Processing Fee</h5>
            </td>
            <td></td>
            <td></td>
            <td>{ProcessingFee}</td>
          </tr>
        )}                  
        <tr>
          <td>
            <h5>Total</h5>
          </td>
          <td></td>
          <td></td>
          <td>
            <b>KES {Number(totalCost + ProcessingFee).toLocaleString("en")}</b>
          </td>
        </tr>
      </table>
    </>
  );
};

export default TicketDetails;
