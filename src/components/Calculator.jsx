import { useState } from "react";

const TripCalculator = () => {
  const [activeTab, setActiveTab] = useState("trip");
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
    setConversionResult(null);
  };

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

  const convertCurrency = (e) => {
    e.preventDefault();
    const fixedRates = {
      USD: { EUR: 0.85, GBP: 0.75, NGN: 1700 },
      EUR: { USD: 2.80, GBP: 0.88, NGN: 2100 },
    };
    const rate = fixedRates[conversionFrom]?.[conversionTo] || 1;
    const convertedAmount = (parseFloat(amount) || 0) * rate;
    setConversionResult(convertedAmount.toFixed(2));
  };

  return (
    <div className="mx-6 md:mx-10 xl:mx-36 p-10 md:p-14 bg-orange-100 ring ring-orange-50 rounded-2xl shadow-lg my-24">
      <div className="flex space-x-6 mb-16">
        <button
          onClick={() => handleTabChange("trip")}
          className={`px-6 py-3 rounded-t-2xl rounded-b-lg transition-all text-sm duration-300 ${activeTab === "trip" ? "bg-[#F7921E] text-white" : "bg-gray-50 text-gray-700"}`}
        >
          Trip Calculator
        </button>
        <button
          onClick={() => handleTabChange("conversion")}
          className={`px-6 py-3 rounded-t-2xl rounded-b-lg transition-all text-sm duration-300 ${activeTab === "conversion" ? "bg-[#F7921E] text-white" : "bg-gray-50 text-gray-700"}`}
        >
          Currency Conversion
        </button>
      </div>

      {activeTab === "trip" ? (
        <div>
          <h3 className="text-start mb-4 font-semibold text-xl lg:text-3xl">Trip Fee Calculator</h3>
          <form onSubmit={calculateSavings} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block font-medium" htmlFor="tripFee">
                  Trip Fee 
                  <span className="text-red-500 ml-4">*</span>
                </label>
                <input
                  type="number"
                  id="tripFee"
                  value={tripFee}
                  onChange={(e) => setTripFee(e.target.value)}
                  placeholder="0"
                  className="form-input w-full mt-1 py-2 px-4 h-14 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#F7921E]"
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
                  className="form-select w-full mt-1 h-14 py-2 px-4 border rounded-full"
                >
                  <option value="USD">USD - $</option>
                  <option value="EUR">EUR - €</option>
                  <option value="GBP">GBP - £</option>
                  <option value="NGN">NGN - ₦</option>
                  <option value="ZAR">ZAR - R (South African Rand)</option>
                  <option value="KES">KES - KSh (Kenyan Shilling)</option>
                  <option value="EGP">EGP - E£ (Egyptian Pound)</option>
                  <option value="GHS">GHS - ₵ (Ghanaian Cedi)</option>
                  <option value="TZS">TZS - TSh (Tanzanian Shilling)</option>
                  <option value="UGX">UGX - UGX (Ugandan Shilling)</option>
                  <option value="DZD">DZD - د.ج (Algerian Dinar)</option>
                  <option value="MAD">MAD - د.م. (Moroccan Dirham)</option>
                  <option value="XOF">XOF - CFA (West African CFA Franc)</option>
                  <option value="XAF">XAF - CFA (Central African CFA Franc)</option>
                  <option value="ETB">ETB - Br (Ethiopian Birr)</option>
                  <option value="ZMW">ZMW - ZK (Zambian Kwacha)</option>
                  <option value="BWP">BWP - P (Botswana Pula)</option>
                  <option value="MUR">MUR - ₨ (Mauritian Rupee)</option>
                  <option value="SCR">SCR - ₨ (Seychellois Rupee)</option>
                  <option value="NAD">NAD - $ (Namibian Dollar)</option>
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
              className="w-full mt-6 py-3 rounded-full text-white bg-[#F7921E] hover:bg-[#e67e22] transition-all"
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
                  className="form-input w-full mt-1 py-2 px-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#F7921E]"
                  required
                />
              </div>
              <div>
                <label className="block font-medium">From Currency</label>
                <select
                  id="currency"
                  value={conversionFrom}
                  onChange={(e) => setConversionFrom(e.target.value)}
                  className="form-select w-full mt-1 py-2 px-3 h-14 border rounded-full"
                >
                  <option value="USD">USD - $</option>
                  <option value="EUR">EUR - €</option>
                  <option value="GBP">GBP - £</option>
                  <option value="NGN">NGN - ₦</option>
                  <option value="ZAR">ZAR - R (South African Rand)</option>
                  <option value="KES">KES - KSh (Kenyan Shilling)</option>
                  <option value="EGP">EGP - E£ (Egyptian Pound)</option>
                  <option value="GHS">GHS - ₵ (Ghanaian Cedi)</option>
                  <option value="TZS">TZS - TSh (Tanzanian Shilling)</option>
                  <option value="UGX">UGX - UGX (Ugandan Shilling)</option>
                  <option value="DZD">DZD - د.ج (Algerian Dinar)</option>
                  <option value="MAD">MAD - د.م. (Moroccan Dirham)</option>
                  <option value="XOF">XOF - CFA (West African CFA Franc)</option>
                  <option value="XAF">XAF - CFA (Central African CFA Franc)</option>
                  <option value="ETB">ETB - Br (Ethiopian Birr)</option>
                  <option value="ZMW">ZMW - ZK (Zambian Kwacha)</option>
                  <option value="BWP">BWP - P (Botswana Pula)</option>
                  <option value="MUR">MUR - ₨ (Mauritian Rupee)</option>
                  <option value="SCR">SCR - ₨ (Seychellois Rupee)</option>
                  <option value="NAD">NAD - $ (Namibian Dollar)</option>
                </select>

              </div>
              <div>
                <label className="block font-medium">To Currency</label>
                <select
                  id="currency"
                  value={conversionTo}
                  onChange={(e) => setConversionTo(e.target.value)}
                  className="form-select w-full mt-1 py-2 px-3 h-14 border rounded-full"
                >
                  <option value="USD">USD - $</option>
                  <option value="EUR">EUR - €</option>
                  <option value="GBP">GBP - £</option>
                  <option value="NGN">NGN - ₦</option>
                  <option value="ZAR">ZAR - R (South African Rand)</option>
                  <option value="KES">KES - KSh (Kenyan Shilling)</option>
                  <option value="EGP">EGP - E£ (Egyptian Pound)</option>
                  <option value="GHS">GHS - ₵ (Ghanaian Cedi)</option>
                  <option value="TZS">TZS - TSh (Tanzanian Shilling)</option>
                  <option value="UGX">UGX - UGX (Ugandan Shilling)</option>
                  <option value="DZD">DZD - د.ج (Algerian Dinar)</option>
                  <option value="MAD">MAD - د.م. (Moroccan Dirham)</option>
                  <option value="XOF">XOF - CFA (West African CFA Franc)</option>
                  <option value="XAF">XAF - CFA (Central African CFA Franc)</option>
                  <option value="ETB">ETB - Br (Ethiopian Birr)</option>
                  <option value="ZMW">ZMW - ZK (Zambian Kwacha)</option>
                  <option value="BWP">BWP - P (Botswana Pula)</option>
                  <option value="MUR">MUR - ₨ (Mauritian Rupee)</option>
                  <option value="SCR">SCR - ₨ (Seychellois Rupee)</option>
                  <option value="NAD">NAD - $ (Namibian Dollar)</option>
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
                {conversionFrom} {amount} <span className="text-gray-700">is approximately</span> {conversionTo} {conversionResult}
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default TripCalculator;
