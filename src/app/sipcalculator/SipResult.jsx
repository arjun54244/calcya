import React from "react";
import { NumericFormat } from "react-number-format";
import { Chart } from "react-google-charts";

export const options = {
  is3D: true,
  chartArea: { left: "100", top: "40", width: "100%", height: "100%" },
  backgroundColor: "transparent",
};
const SipResult = ({ amount, returnRate, time }) => {
  const monthlyRate = returnRate / 12 / 100;
  const months = time * 12;
  let futureValue = 0;
  futureValue =
    amount *
    ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) *
    (1 + monthlyRate);
  let investment_amonut = amount * 12 * time;
  let est_rtn = futureValue - investment_amonut;
  const data = [
    ["Parameter", "Value"],
    ["Est return", est_rtn],
    ["Invested Amount", investment_amonut],
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
                Monthly Investment
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
                Invested Amount
              </th>
              <td className="px-6 py-4">
                <NumericFormat
                  value={(amount * time * returnRate).toFixed(0)}
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
                Est. Return
              </th>
              <td className="px-6 py-4">
                <NumericFormat
                  value={est_rtn.toFixed(0)}
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
                Total Value
              </th>
              <td className="px-6 py-4">
                <NumericFormat
                  value={(amount * time * returnRate + est_rtn).toFixed(0)}
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

export default SipResult;
