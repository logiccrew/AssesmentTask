import { useState, useEffect } from "react";
import {
  Menu,
  ChevronDown,
  UserCircle2,
  Check,
  CreditCard,
  MapPin,
  Calculator,
  Lock,
} from "lucide-react";

import { useNavigate } from "react-router-dom";

import { steps } from "./sidebar";
import { plans } from "./plans";

export default function Subscription() {

  const navigate = useNavigate();

  const [selectedPlan, setSelectedPlan] =
    useState(3);

  const [addons, setAddons] = useState({
    gps: false,
    insurance: false,
  });

  const [mobileMenu, setMobileMenu] =
    useState(false);

  const [selectedMobileStep, setSelectedMobileStep] =
    useState("Subscription");

  const [cardData, setCardData] = useState({
    number: "",
    expiry: "",
    cvc: "",
  });

 const defaultSubscription = {
  plan: "Basic",
  price: 0,
  active: false,
};

const [subscription, setSubscription] = useState(() => {
  const saved = localStorage.getItem("subscription");
  return saved ? JSON.parse(saved) : defaultSubscription;
});

useEffect(() => {
  localStorage.setItem("subscription", JSON.stringify(subscription));
}, [subscription]);



  const handleNext = () => {

    if (
      !cardData.number ||
      !cardData.expiry ||
      !cardData.cvc
    ) {
      alert("Please fill card details");
      return;
    }

    navigate("/device");
  };

  return (
    <div className="min-h-screen bg-[#f5f5f5]">

      {/* HEADER */}
      <header className="bg-[#00A9B5] h-16 px-4 md:px-10 flex items-center justify-between text-white">

        <div className="flex items-center gap-4">

          <button
            className="md:hidden"
            onClick={() =>
              setMobileMenu(!mobileMenu)
            }
          >
            <Menu size={30} />
          </button>

          <div className="flex items-center gap-3">

            <div className="flex items-center">

              <div className="w-5 h-5 border-2 border-yellow-300 rounded-full -mr-1"></div>

              <div className="w-5 h-5 border-2 border-yellow-300 rounded-full"></div>
            </div>

            <h1 className="text-[20px] md:text-[22px] font-semibold">
              Drive lah
            </h1>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-10 text-[14px]">

          <span className="cursor-pointer">
            Learn more
          </span>

          <span className="cursor-pointer">
            List your car
          </span>

          <span className="cursor-pointer">
            Inbox
          </span>

          <img
            src="https://i.pravatar.cc/40"
            alt=""
            className="w-9 h-9 rounded-full"
          />
        </div>

        <button className="md:hidden">
          <UserCircle2 size={30} />
        </button>
      </header>

      <div className="md:hidden p-4">

        <button
          onClick={() =>
            setMobileMenu(!mobileMenu)
          }
          className="bg-white border border-gray-300 rounded-lg h-14 px-4 flex items-center justify-between w-full text-xl"
        >
          <span>{selectedMobileStep}</span>

          <ChevronDown
            size={24}
            className={`transition ${
              mobileMenu
                ? "rotate-180"
                : ""
            }`}
          />
        </button>

        {mobileMenu && (

          <div className="bg-white border border-gray-300 rounded-lg mt-2 overflow-hidden">

            {steps.map((step) => (

              <button
                key={step}
                onClick={() => {

                  setSelectedMobileStep(step);

                  setMobileMenu(false);

                  if (step === "Device") {
                    navigate("/device");
                  }

                  if (step === "Subscription") {
                    navigate("/");
                  }
                }}
                className={`w-full text-left px-4 py-4 border-b text-lg transition
                
                ${
                  step === selectedMobileStep
                    ? "bg-[#00A9B5] text-white"
                    : "text-gray-700"
                }`}
              >
                {step}
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="max-w-[1180px] mx-auto flex flex-col md:flex-row gap-10 px-4 md:px-8 py-6 md:py-14">

        <aside className="hidden md:block w-[220px] pt-6">

          {steps.map((step, index) => {

            const active =
              step === "Subscription";

            const completed = index < 8;

            return (
              <button
                key={step}
                onClick={() => {

                  if (step === "Device") {
                    navigate("/device");
                  }

                  if (step === "Subscription") {
                    navigate("/");
                  }
                }}
                className={`w-full flex items-center justify-between mb-8 text-[17px] text-left
                
                ${
                  active && step === "Subscription"
                    ? "text-[#00A9B5] font-semibold border-l-4 border-[#00A9B5] pl-4"
                    : completed
                    ? "text-[#006D8A]"
                    : "text-gray-400"
                }`}
              >
                <span>{step}</span>

                {completed &&
                  !(
                    active &&
                    step === "Subscription"
                  ) && (
                    <Check
                      size={17}
                      className="text-[#006D8A]"
                    />
                  )}
              </button>
            );
          })}
        </aside>

        <div className="flex-1">

          <div className="bg-white rounded-md overflow-hidden border border-gray-300">

            <div className="px-5 md:px-8 py-6 border-b border-gray-300">

              <h2 className="text-[26px] md:text-[44px] font-bold text-[#006D8A] leading-tight">
                Subscription plan
              </h2>

              <p className="text-gray-600 mt-2 text-[15px] md:text-[18px]">
                Select the ideal subscription plan for your listing.
              </p>
            </div>

            <div className="px-5 md:px-8 py-6 border-b border-gray-300">

              <h3 className="text-[18px] md:text-[20px] text-gray-700 mb-5">
                Select your plan
              </h3>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">

                {plans.map((plan) => (

                  <button
                    key={plan.id}
                    onClick={() =>
                      setSelectedPlan(plan.id)
                    }
                    className={`border rounded-lg p-5 text-left relative transition
                    
                    ${
                      selectedPlan === plan.id
                        ? "border-[#00A9B5] bg-[#f7fcfd]"
                        : "border-gray-300"
                    }`}
                  >

                    <h4 className="text-[18px] font-semibold text-[#006D8A] mb-4">
                      {plan.title}
                    </h4>

                    <div className="space-y-2 text-[14px] text-gray-600">

                      {plan.features.map((item, i) => (

                        <div
                          key={i}
                          className="flex gap-2 items-start"
                        >

                          {i === 0 && (
                            <MapPin
                              size={14}
                              className="mt-1 text-[#00A9B5]"
                            />
                          )}

                          {i === 1 && (
                            <Calculator
                              size={14}
                              className="mt-1 text-[#00A9B5]"
                            />
                          )}

                          {i === 2 && (
                            <Lock
                              size={14}
                              className="mt-1 text-[#00A9B5]"
                            />
                          )}

                          <span>{item}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-4 text-[16px] font-bold text-[#006D8A]">

                      {plan.price}

                      {plan.id !== 1 && (
                        <span className="text-[12px] font-normal ml-1">
                          /month
                        </span>
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div className="px-5 md:px-8 py-5 border-b border-gray-300">

              <h3 className="text-[18px] md:text-[20px] text-gray-700 mb-5">
                Select add-ons for your subscription
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                <button
                  onClick={() =>
                    setAddons({
                      ...addons,
                      gps: !addons.gps,
                    })
                  }
                  className={`border rounded-md h-[56px] px-4 flex items-center justify-between transition
                  
                  ${
                    addons.gps
                      ? "border-[#00A9B5] bg-[#f7fcfd]"
                      : "border-gray-300"
                  }`}
                >

                  <span className="text-[#006D8A] text-[16px]">
                    BYO secondary GPS - $5/month
                  </span>

                  <div
                    className={`w-4 h-4 rounded-full border
                    
                    ${
                      addons.gps
                        ? "bg-[#00A9B5] border-[#00A9B5]"
                        : "border-[#00A9B5]"
                    }`}
                  />
                </button>

                <button
                  onClick={() =>
                    setAddons({
                      ...addons,
                      insurance:
                        !addons.insurance,
                    })
                  }
                  className={`relative border rounded-md h-[56px] px-4 flex items-center justify-between transition
                  
                  ${
                    addons.insurance
                      ? "border-[#00A9B5] bg-[#f7fcfd]"
                      : "border-gray-300"
                  }`}
                >

                  <span className="absolute -top-2 left-3 bg-gray-200 text-[11px] px-2 py-[2px] rounded">
                    Coming soon
                  </span>

                  <span className="text-[#006D8A] text-[16px]">
                    Between trip insurance
                  </span>

                  <div
                    className={`w-4 h-4 rounded-full border
                    
                    ${
                      addons.insurance
                        ? "bg-[#00A9B5] border-[#00A9B5]"
                        : "border-[#00A9B5]"
                    }`}
                  />
                </button>
              </div>
            </div>

            <div className="px-5 md:px-8 py-5 border-b border-gray-300">

              <h3 className="text-[18px] md:text-[20px] text-gray-700 mb-5">
                Add card details
              </h3>

              <div className="border border-gray-300 rounded-md overflow-hidden flex flex-col md:flex-row bg-white w-120">

                <div className="flex items-center flex-1 border-b md:border-b-0 md:border-r border-gray-300 px-4 ">

                  <CreditCard
                    size={18}
                    className="text-gray-400 mr-3"
                  />

                  <input
                    type="text"
                    placeholder="1234 5678 1234 5678"
                    value={cardData.number}
                    onChange={(e) =>
                      setCardData({
                        ...cardData,
                        number:
                          e.target.value,
                      })
                    }
                    className="flex-1 h-12 outline-none text-[15px]"
                  />
                </div>

                <input
                  type="text"
                  placeholder="MM/YY"
                  value={cardData.expiry}
                  onChange={(e) =>
                    setCardData({
                      ...cardData,
                      expiry:
                        e.target.value,
                    })
                  }
                  className="md:w-[110px] h-12 px-4 outline-none border-b md:border-b-0 md:border-r border-gray-300 text-[15px]"
                />

                <input
                  type="text"
                  placeholder="CVC"
                  value={cardData.cvc}
                  onChange={(e) =>
                    setCardData({
                      ...cardData,
                      cvc:
                        e.target.value,
                    })
                  }
                  className="md:w-[90px] h-12 px-4 outline-none text-[15px]"
                />
              </div>

              <p className="text-[13px] text-gray-400 mt-3">
                You will not be charged right now.
                Subscription will only start once your listing is published and live.
              </p>
            </div>

            <div className="px-5 md:px-8 py-5">

              <p className="text-[16px] text-gray-700">

                Learn more about the plans here -

                <span className="text-[#00A9B5] font-semibold underline ml-1 cursor-pointer">
                  What is the right plan for me?
                </span>
              </p>

              <p className="text-[16px] text-gray-700 mt-3 max-w-[780px] leading-7">
                You will be able to switch between plans easily later as well.
                Speak to our host success team if you need any clarifications.
              </p>
            </div>
          </div>

          <div className="mt-6 flex justify-end">

            <button
              onClick={handleNext}
              className="w-full md:w-auto md:px-28 h-14 bg-[#FFD400] hover:bg-[#f5ca00] rounded-md text-[#006D8A] text-[22px] font-semibold transition"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}