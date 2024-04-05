"use client";
import React, { useState } from "react";
import SipResult from "./SipResult";

export const metadata = {
  title: "SIP Calculator | Calcya",
  description: "This is a SIP Calculator Page",
  // other metadata
};

const SipCalc = () => {
  const [amount, setAmount] = useState(0);
  const [returnRate, setReturnRate] = useState(0);
  const [time, setTime] = useState(0);
  const [error, setError] = useState(false);
  const [errorAmount, setErrorAmount] = useState(false);
  const [errorReturn, setErrorReturn] = useState(false);
  const [errorTime, setErrorTime] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (amount && returnRate && setTime) setError(true);
  };
  const handleAmountChange = (e) => {
    const a = e.target.value;
    if (a >= 100 && a <= 100000000) {
      setErrorAmount(false);
      setAmount(a);
    } else {
      setErrorAmount(true);
    }
  };
  const handleReturnChange = (e) => {
    const rr = e.target.value;
    if (rr >= 2 && rr <= 50) {
      setErrorReturn(false);
      setReturnRate(rr);
    } else {
      setErrorReturn(true);
    }
  };
  const handleTimeChange = (e) => {
    const t = e.target.value;
    if (t >= 0 && t <= 75) {
      setErrorTime(false);
      setTime(t);
    } else {
      setErrorTime(true);
    }
  };
  return (
    <div className={`${error ? "lg:flex lg:justify-center" : ""}`}>
      <section className="relative z-10 overflow-hidden pb-16 pt-36 md:pb-20 lg:pb-28 lg:pt-[180px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[500px] rounded-lg bg-[#FF8E8F] bg-opacity-60 px-6 py-10 shadow-three sm:p-[60px]">
                <h3 className="mb-3 text-center text-2xl font-bold text-black dark:text-white sm:text-3xl">
                  Calculate SIP
                </h3>
                <p className="mb-11 text-center text-base font-medium text-body-color">
                  Do Hassle Free SIP calculations
                </p>

                <form onSubmit={handleSubmit}>
                  <div className="mb-8">
                    <label
                      htmlFor="amount"
                      className="mb-3 block text-sm text-dark dark:text-white"
                    >
                      Monthly Investment* (in Rupees)
                    </label>
                    <input
                      onChange={handleAmountChange}
                      type="number"
                      name="amount"
                      placeholder="Monthly Investment* (in Rupees)"
                      className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                    />
                    <p
                      className={`text-sm ${
                        errorAmount ? "text-red-700" : "text-body-color"
                      }`}
                    >
                      Range between ₹100 - ₹10,00,00,000
                    </p>
                  </div>
                  <div className="mb-8">
                    <label
                      htmlFor="return-rate"
                      className="mb-3 block text-sm text-dark dark:text-white"
                    >
                      Expected return rate (p.a) *
                    </label>
                    <input
                      onChange={handleReturnChange}
                      type="number"
                      name="return-rate"
                      placeholder="Expected return rate (p.a)"
                      className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                    />
                    <p
                      className={`text-sm ${
                        errorReturn ? "text-red-700" : "text-body-color"
                      }`}
                    >
                      Range between 2% - 50%
                    </p>
                  </div>
                  <div className="mb-8">
                    <label
                      htmlFor="time"
                      className="mb-3 block text-sm text-dark dark:text-white"
                    >
                      Time Period
                    </label>
                    <input
                      onChange={handleTimeChange}
                      type="number"
                      name="time"
                      placeholder="Time Period"
                      className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                    />
                    <p
                      className={`text-sm ${
                        errorTime ? "text-red-700" : "text-body-color"
                      }`}
                    >
                      Range between 0 - 75
                    </p>
                  </div>

                  <div className="mb-6">
                    <button className="flex w-full items-center justify-center rounded-sm bg-primary px-9 py-4 text-base font-medium text-white shadow-submit duration-300 hover:bg-primary/90 dark:shadow-submit-dark">
                      Calculate
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute left-0 top-0 z-[-1]">
          <svg
            width="1440"
            height="969"
            viewBox="0 0 1440 969"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <mask
              id="mask0_95:1005"
              style={{ maskType: "alpha" }}
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="1440"
              height="969"
            >
              <rect width="1440" height="969" fill="#090E34" />
            </mask>
            <g mask="url(#mask0_95:1005)">
              <path
                opacity="0.1"
                d="M1086.96 297.978L632.959 554.978L935.625 535.926L1086.96 297.978Z"
                fill="url(#paint0_linear_95:1005)"
              />
              <path
                opacity="0.1"
                d="M1324.5 755.5L1450 687V886.5L1324.5 967.5L-10 288L1324.5 755.5Z"
                fill="url(#paint1_linear_95:1005)"
              />
            </g>
            <defs>
              <linearGradient
                id="paint0_linear_95:1005"
                x1="1178.4"
                y1="151.853"
                x2="780.959"
                y2="453.581"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#f89b18" />
                <stop offset="1" stopColor="#f89b18" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_95:1005"
                x1="160.5"
                y1="220"
                x2="1099.45"
                y2="1192.04"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#f89b18" />
                <stop offset="1" stopColor="#f89b18" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </section>
      {error && (
        <SipResult amount={amount} returnRate={returnRate} time={time} />
      )}
    </div>
  );
};

export default SipCalc;
