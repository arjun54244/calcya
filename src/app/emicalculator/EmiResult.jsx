import React from "react";
import { NumericFormat } from "react-number-format";
import { Chart } from "react-google-charts";

export const options = {
  is3D: true,
  chartArea: { left: "100", top: "40", width: "100%", height: "100%" },
  backgroundColor: "transparent",
};
const EmiResult = ({ amount, returnRate, time }) => {
  const monthlyRate = returnRate / 12 / 100;
  const months = time * 12;
  let EMI =
    (amount * monthlyRate * Math.pow(1 + monthlyRate, months)) /
    (Math.pow(1 + monthlyRate, months) - 1);
  const total_interest = EMI * months - amount;
  const totalPayment = total_interest + parseFloat(amount);
  const data = [
    ["Parameter", "Value"],
    ["Principal Amount", parseFloat(amount)],
    ["Total Interest", total_interest],
  ];

  return (
    <div>
      <div className="relative mt-[180px] max-w-[500px] rounded-lg bg-[#FF8E8F] bg-opacity-60 px-6 py-10 shadow-three sm:p-[60px]">
        <table className="text-left text-sm text-gray-500 rtl:text-right">
          <tbody>
            <tr className="border-b bg-white">
              <th
                scope="row"
                className="whitespace-nowrap px-6 py-4 font-medium text-gray-900"
              >
                EMI Amount
              </th>
              <td className="px-6 py-4">
                <NumericFormat
                  value={EMI.toFixed(0)}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"₹"}
                />
              </td>
            </tr>
            <tr className="border-b bg-white">
              <th
                scope="row"
                className="whitespace-nowrap px-6 py-4 font-medium text-gray-900"
              >
                Loan Amount
              </th>
              <td className="px-6 py-4">
                <NumericFormat
                  value={parseFloat(amount).toFixed(0)}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"₹"}
                />
              </td>
            </tr>
            <tr className="border-b bg-white">
              <th
                scope="row"
                className="whitespace-nowrap px-6 py-4 font-medium text-gray-900"
              >
                Total Interest
              </th>
              <td className="px-6 py-4">
                <NumericFormat
                  value={total_interest.toFixed(0)}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"₹"}
                />
              </td>
            </tr>
            <tr className="bg-white">
              <th
                scope="row"
                className="whitespace-nowrap px-6 py-4 font-medium text-gray-900"
              >
                Total Payment
              </th>
              <td className="px-6 py-4">
                <NumericFormat
                  value={totalPayment.toFixed(0)}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"₹"}
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="mt-3 items-center rounded-lg bg-[#FF8E8F] bg-opacity-60">
        <Chart
          className="w-full"
          chartType="PieChart"
          data={data}
          options={options}
          width={"100%"}
          height={"374px"}
        />
      </div>
    </div>
  );
};

export default EmiResult;
