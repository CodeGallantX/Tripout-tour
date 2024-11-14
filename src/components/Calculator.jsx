import { useState } from "react";

const TripCalculator = () => {
  const [activeTab, setActiveTab] = useState("trip"); // "trip" or "conversion"
  const [tripFee, setTripFee] = useState("");
  const [savingPeriodMonths, setSavingPeriodMonths] = useState(6);
  const [currency, setCurrency] = useState("USD");
  const [conversionFrom, setConversionFrom] = useState("USD");
  const [conversionTo, setConversionTo] = useState("EUR");
  const [amount, setAmount] = useState("");
  const [conversionResult, setConversionResult] = useState(null);
  const [result, setResult] = useState({
    daily: 0,
    weekly: 0,
    monthly: 0,
    yearly: 0,
  });

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setConversionResult(null); // Reset conversion result on tab switch
  };

  // Calculate Trip Savings
  const calculateSavings = (e) => {
    e.preventDefault();
    const fee = parseFloat(tripFee) || 0;
    const totalDays = savingPeriodMonths * 30.44;
    const totalWeeks = totalDays / 7;
    const totalYears = savingPeriodMonths / 12;

    const daily = fee / totalDays;
    const weekly = fee / totalWeeks;
    const monthly = fee / savingPeriodMonths;
    const yearly = fee / totalYears;

    setResult({
      daily: isFinite(daily) ? daily.toFixed(2) : "N/A",
      weekly: isFinite(weekly) ? weekly.toFixed(2) : "N/A",
      monthly: isFinite(monthly) ? monthly.toFixed(2) : "N/A",
      yearly: isFinite(yearly) ? yearly.toFixed(2) : "N/A",
    });
  };

  // Convert Currency (Using a fixed rate for demonstration)
  const convertCurrency = (e) => {
    e.preventDefault();
    const fixedRates = {
      USD: { EUR: 0.85, GBP: 0.75, NGN: 1700 },
      EUR: { USD: 2.80, GBP: 0.88, NGN: 2100 },
      // Add more currency pairs as needed
    };
    const rate = fixedRates[conversionFrom]?.[conversionTo] || 1;
    const convertedAmount = (parseFloat(amount) || 0) * rate;
    setConversionResult(convertedAmount.toFixed(2));
  };

  return (
    <div className="p-8 bg-orange-100 rounded-lg shadow-lg">
      <div className="flex space-x-6 mb-6">
        <button
          onClick={() => handleTabChange("trip")}
          className={`px-6 py-3 rounded-md transition-all duration-300 ${activeTab === "trip" ? "bg-[#F7921E] text-white" : "bg-orange-50 text-gray-700"}`}
        >
          Trip Calculator
        </button>
        <button
          onClick={() => handleTabChange("conversion")}
          className={`px-6 py-3 rounded-md transition-all duration-300 ${activeTab === "conversion" ? "bg-[#F7921E] text-white" : "bg-orange-50 text-gray-700"}`}
        >
          Currency Conversion
        </button>
      </div>

      {activeTab === "trip" ? (
        <div>
          <h3 className="text-start mb-4 font-semibold text-xl">Trip Fee Calculator</h3>
          <form onSubmit={calculateSavings} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block font-medium" htmlFor="tripFee">
                  Trip Fee (required)
                </label>
                <input
                  type="number"
                  id="tripFee"
                  value={tripFee}
                  onChange={(e) => setTripFee(e.target.value)}
                  placeholder="0"
                  className="form-input w-full mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F7921E]"
                  required
                />
              </div>

              <div>
                <label className="block font-medium" htmlFor="currency">
                  Preferred Currency
                </label>
                <select
                  id="currency"
                  value={currency}
                  onChange={(e) => setCurrency(e.target.value)}
                  className="form-select w-full mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F7921E]"
                >
                  <option value="USD">USD - $</option>
                  <option value="EUR">EUR - €</option>
                  <option value="GBP">GBP - £</option>
                  <option value="NGN">NGN - ₦</option>
                  {/* Add more options as needed */}
                </select>
              </div>

              <div className="col-span-2">
                <label className="block font-medium" htmlFor="savingPeriodMonths">
                  Saving Period (in months): {savingPeriodMonths} months
                </label>
                <input
                  type="range"
                  id="savingPeriodMonths"
                  min="1"
                  max="48"
                  value={savingPeriodMonths}
                  onChange={(e) => setSavingPeriodMonths(Number(e.target.value))}
                  className="w-full mt-1"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full mt-6 py-3 rounded-md text-white bg-[#F7921E] hover:bg-[#e67e22] transition-all"
            >
              Calculate
            </button>
          </form>

          <div className="mt-8 p-6 bg-white rounded-lg shadow">
            <h3 className="font-semibold text-lg mb-4">Required Savings</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h5 className="font-medium mb-2">Daily Savings</h5>
                <p className="text-[#F7921E] font-semibold">{currency} {result.daily} per day</p>
              </div>
              <div>
                <h5 className="font-medium mb-2">Weekly Savings</h5>
                <p className="text-[#F7921E] font-semibold">{currency} {result.weekly} per week</p>
              </div>
              <div>
                <h5 className="font-medium mb-2">Monthly Savings</h5>
                <p className="text-[#F7921E] font-semibold">{currency} {result.monthly} per month</p>
              </div>
              <div>
                <h5 className="font-medium mb-2">Yearly Savings</h5>
                <p className="text-[#F7921E] font-semibold">{currency} {result.yearly} per year</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <h3 className="text-start mb-4 font-semibold text-xl">Currency Conversion</h3>
          <form onSubmit={convertCurrency} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block font-medium">Amount</label>
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="0"
                  className="form-input w-full mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F7921E]"
                  required
                />
              </div>
              <div>
                <label className="block font-medium">From Currency</label>
                <select
                  value={conversionFrom}
                  onChange={(e) => setConversionFrom(e.target.value)}
                  className="form-select w-full mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F7921E]"
                >
                  <option value="USD">USD</option>
                  <option value="EUR">EUR</option>
                  <option value="GBP">GBP</option>
                  <option value="NGN">NGN</option>
                  {/* Add more options as needed */}
                </select>
              </div>
              <div>
                <label className="block font-medium">To Currency</label>
                <select
                  value={conversionTo}
                  onChange={(e) => setConversionTo(e.target.value)}
                  className="form-select w-full mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F7921E]"
                >
                  <option value="USD">USD</option>
                  <option value="EUR">EUR</option>
                  <option value="GBP">GBP</option>
                  <option value="NGN">NGN</option>
                  {/* Add more options as needed */}
                </select>
              </div>
            </div>

            <button
              type="submit"
              className="w-full mt-6 py-3 rounded-md text-white bg-[#F7921E] hover:bg-[#e67e22] transition-all"
            >
              Convert
            </button>
          </form>

          {conversionResult && (
            <div className="mt-8 p-6 bg-white rounded-lg shadow">
              <h3 className="font-semibold text-lg mb-4">Converted Amount</h3>
              <p className="text-[#F7921E] font-semibold">
                {conversionFrom} {amount} is approximately {conversionTo} {conversionResult}
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default TripCalculator;
