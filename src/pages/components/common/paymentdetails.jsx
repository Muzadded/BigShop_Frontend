import React, { useState, useEffect } from "react";
import AppURL from "../../../api/AppURL";
import axios from "axios";
import { Link } from "react-router-dom";

const PaymentDetails = () => {
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLatestOrder = async () => {
      try {
        const response = await axios.get(AppURL.GET_ALL_ORDERS);

        if (Array.isArray(response.data) && response.data.length > 0) {
          // Get the oldest (first created) order from the list
          const oldestOrder = response.data[response.data.length - 1]; 
          setOrder(oldestOrder);
        } else {
          console.error("No orders found");
        }

        setLoading(false);
      } catch (error) {
        console.error("Error fetching orders:", error);
        setLoading(false);
      }
    };

    fetchLatestOrder();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen text-gray-600">
        Loading payment details...
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-2xl bg-white p-8 rounded-xl shadow-md">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-extrabold text-gray-800">Thank You!</h1>
          <p className="text-lg text-gray-500 mt-2">
            Your payment has been successfully. <br /> Here is your order details.
          </p>
        </div>

        {order ? (
          <div className="overflow-x-auto">
            <table className="table-auto mx-auto w-full max-w-md bg-secondary rounded-lg shadow-sm">
              <tbody>
                <tr className="border-b">
                  <td className="px-4 py-3 text-4xl font-bold text-gray-700">Order ID :</td>
                  <td className="px-4 py-3 text-gray-600">{order.id}</td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-3 font-bold text-gray-700">Status :</td>
                  <td className="px-4 py-3 text-gray-600">{order.status}</td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-3 font-bold text-gray-700">Total Amount :</td>
                  <td className="px-4 py-3 text-gray-600">${order.total_amount}</td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-3 font-bold text-gray-700">Transaction ID :</td>
                  <td className="px-4 py-3 text-gray-600">{order.transaction_id}</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-bold text-gray-700">Payment Method :</td>
                  <td className="px-4 py-3 text-gray-600">{order.payment_gateway}</td>
                </tr>
              </tbody>
            </table>
          </div>
        ) : (
          <p className="text-center text-gray-600 text-lg">No orders found</p>
        )}

        <div className="mt-8 text-center">
          <Link
            to="/"
            className="inline-block bg-blue-600 text-black px-8 py-3 rounded-lg font-bold shadow-md hover:bg-blue-700 transition duration-300"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PaymentDetails;
