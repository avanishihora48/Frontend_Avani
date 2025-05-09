import React from 'react'

export default function InputBox({
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = 'usdi',
  amountDisable = false,
  currencyDisable = false,
}) {
  const amountInputId = useId()
  return (
    <>
      <div className="flex items-center justify-center min-h-screen">
        <div className="relative w-full max-w-xl">
          <div className="bg-white p-8 rounded text-sm flex w-full shadow-md mb-4">
            <div className="w-1/2 pr-2">
              <label
                htmlFor={amountInputId}
                className="text-black/40 mb-2 inline-block"
              >
                Amount
              </label>
              <input
                id={amountInputId}
                className="bg-transparent py-1.5 w-full border border-gray-300 rounded px-2"
                type="number"
                placeholder="Enter amount"
                disabled={amountDisable}
                value={amount}
                onChange={(e) =>
                  onAmountChange && onAmountChange(Number(e.target.value))
                }
              />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right pl-2">
              <label htmlFor="currency" className="text-black/40 mb-2 w-full">
                Currency Type
              </label>
              <select
                id="currency"
                className="rounded-lg px-2 py-1 w-full bg-gray-100 cursor-pointer outline-none"
                value={selectCurrency}
                onChange={(e) =>
                  onCurrencyChange && onCurrencyChange(e.target.value)
                }
                disabled={currencyDisable}
              >
                {currencyOptions.map((currency) => (
                  <option value={currency} key={currency}>
                    {currency}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
            <button className="bg-blue-800 text-white px-4 py-2 rounded hover:bg-blue-700 transition border-2">
              Swap
            </button>
          </div>

          <div className="bg-white p-8 rounded text-sm flex w-full shadow-md mt-4 z-0">
            <div className="w-1/2 pr-2">
              <label
                htmlFor="amount"
                className="text-black/40 mb-2 inline-block"
              >
                Amount
              </label>
              <input
                id="amount"
                className="bg-transparent py-1.5 w-full border border-gray-300 rounded px-2"
                type="number"
                placeholder="Enter amount"
              />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right pl-2">
              <label htmlFor="currency" className="text-black/40 mb-2 w-full">
                Currency Type
              </label>
              <select
                id="currency"
                className="rounded-lg px-2 py-1 w-full bg-gray-100 cursor-pointer outline-none"
              >
                <option value="inr">INR</option>
              </select>
            </div>
          </div>
        </div>
        <button></button>
      </div>
    </>
  )
}
