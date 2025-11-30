"use client";
import React, { useState } from "react";

declare global {
  interface Window {
    Razorpay: any;
  }
}

const DonateButton = () => {
  const [showModal, setShowModal] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    amount: "",
  });

  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      if (window.Razorpay) {
        resolve(true);
        return;
      }

      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handleDonate = async () => {
    const { name, email, amount } = formData;

    if (!name || !email || !amount) {
      alert("Please fill all the fields.");
      return;
    }

    const isLoaded = await loadRazorpayScript();
    if (!isLoaded) {
      alert("Payment gateway failed to load.");
      return;
    }

    const options = {
       key: "rzp_live_Rm1asz5nETxQSI",
      amount: Number(amount) * 100,
      currency: "INR",
      name: "Choudhary Ram Singh Jan Utthan Trust",
      description: "Worldwide Donation",
      image: "https://razorpay.com/favicon.png",

      notes: {
        international: "enabled",
      },

      handler: function (response: any) {
        alert(
          "Donation Successful! Payment ID: " + response.razorpay_payment_id
        );
      },

      prefill: {
        name,
        email,
      },

      theme: {
        color: "#EC6B2A",
      },
    };

    try {
      const rzp = new window.Razorpay(options);
      rzp.open();
      setShowModal(false);
    } catch (error) {
      console.error("Razorpay Error:", error);
      alert("Payment initialization failed.");
    }
  };

  return (
    <>
      {/* Main Donate Button */}
      <button
        onClick={() => setShowModal(true)}
        className="px-6 py-2 bg-orange-500 text-white rounded-lg shadow-lg text-lg hover:bg-orange-600 transition"
      >
        Donate Now
      </button>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-xl w-96 shadow-lg relative">
            {/* Close Button */}
            <button
              className="absolute top-2 right-3 text-gray-500 text-xl"
              onClick={() => setShowModal(false)}
            >
              ×
            </button>

            <h2 className="text-2xl font-semibold mb-4 text-center">
              Enter Donation Details
            </h2>

            {/* FORM */}
            <div className="flex flex-col gap-3 text-black">
              <input
                type="text"
                placeholder="Full Name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="p-3 border border-gray-300 rounded-lg w-full"
              />

              <input
                type="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="p-3 border border-gray-300 rounded-lg w-full"
              />

              <input
                type="number"
                placeholder="Donation Amount (₹)"
                value={formData.amount}
                onChange={(e) =>
                  setFormData({ ...formData, amount: e.target.value })
                }
                className="p-3 border border-gray-300 rounded-lg w-full"
              />
            </div>

            {/* Donate Button */}
            <button
              onClick={handleDonate}
              className="w-full mt-5 px-6 py-3 bg-orange-500 text-white rounded-lg shadow hover:bg-orange-600 transition"
            >
              Proceed to Pay
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default DonateButton;
