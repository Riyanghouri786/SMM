"use client";
import React, { useState } from "react";

export default function OrderForm() {
  const [amount, setAmount] = useState(10);
  const [service, setService] = useState("12886");
  const [link, setLink] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false); // To handle submission state

  const handleAmountChange = (e) => {
    const value = Math.max(10, Math.min(e.target.value, 100000000));
    setAmount(value);
  };

  const handleServiceChange = (e) => {
    setService(e.target.value);
  };

  const handleLinkChange = (e) => {
    setLink(e.target.value); // Update the link state
  };

  const handleSubmit = async () => {
    if (!link) {
      alert("Please enter a valid link.");
      return;
    }

    setIsSubmitting(true);

    const data = {
      key: "c004e22e832c4fd8c7e73847e15734fd", // Replace with your actual API key
      action: "add",
      service: service,
      link: link,
      quantity: amount,
    };

    try {
      const response = await fetch("https://fortunesmm.com/api/v2", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        alert("Order created successfully!");
        console.log("API Response:", result); // Log the full API response for debugging
      } else {
        console.log("Error Response:", result); // Log error message from API
        alert("Error creating order: " + (result.message || "Unknown error"));
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to create order. Please try again.");
    }

    setIsSubmitting(false);
  };

  return (
    <div className="max-w-md p-5 mx-auto mt-10 border border-gray-200 rounded-lg shadow-lg">
      <div className="mb-4">
        <label
          htmlFor="service"
          className="block mb-2 font-medium text-gray-700"
        >
          Service
        </label>
        <select
          id="service"
          value={service}
          onChange={handleServiceChange}
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <option value="12886">
            TikTok Likes [Instant] [Real] [30-45k/day]
          </option>
          <option value="210">
            ⭐️ TikTok Views [Instant] [Non-Drop] [500M/Day] [Always Stable]
          </option>
        </select>
      </div>

      <div className="mb-4">
        <label htmlFor="link" className="block font-medium text-gray-700">
          Link
        </label>
        <input
          type="text"
          id="link"
          value={link}
          onChange={handleLinkChange}
          className="w-full p-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Enter TikTok link"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="amount" className="block font-medium text-gray-700">
          Amount
        </label>
        <input
          type="number"
          id="amount"
          value={amount}
          onChange={handleAmountChange}
          className="w-full p-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <small className="text-gray-500">min 10 | max 100000000</small>
      </div>

      <button
        type="button"
        onClick={handleSubmit} // Add the submit handler
        className="w-full py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700"
        disabled={isSubmitting} // Disable the button during submission
      >
        {isSubmitting ? "Submitting..." : "Create Order"}
      </button>
    </div>
  );
}
