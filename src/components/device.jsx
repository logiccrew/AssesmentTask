// src/pages/Device.jsx

import { useState, useEffect } from "react";
import {
  Menu,
  ChevronDown,
  UserCircle2,
  Check,
  Upload,
} from "lucide-react";

import { useNavigate } from "react-router-dom";
import { steps } from "./sidebar";

export default function Device() {

  const navigate = useNavigate();

  /* MOBILE MENU */
  const [mobileMenu, setMobileMenu] =
    useState(false);

  /* MOBILE STEP */
  const [selectedMobileStep, setSelectedMobileStep] =
    useState("Device");

  /* DEVICES */
/* DEVICES */


  /* UPDATE DEVICE */
  const updateDevice = (index, updated) => {

    const copy = [...devices];

    copy[index] = updated;

    setDevices(copy);
  };



const defaultDevices = [
  {
    type: "Primary GPS",
    serial: "",
    ownDevice: true,
    image: null,
  },
  {
    type: "Secondary GPS",
    serial: "",
    ownDevice: true,
    image: null,
  },
  {
    type: "Third GPS",
    serial: "",
    ownDevice: true,
    image: null,
  },
  {
    type: "Fourth GPS",
    serial: "",
    ownDevice: true,
    image: null,
  },
];


  const [devices, setDevices] = useState(() => {
    const saved = localStorage.getItem("devices");
    return saved ? JSON.parse(saved) : defaultDevices;
  });


  useEffect(() => {
    localStorage.setItem("devices", JSON.stringify(devices));
  }, [devices]);

  return (
    <div className="min-h-screen bg-[#f5f5f5]">

      {/* HEADER */}
      <header className="bg-[#00A9B5] h-16 px-4 md:px-10 flex items-center justify-between text-white">

        {/* LEFT */}
        <div className="flex items-center gap-4">

          {/* MOBILE MENU */}
          <button
            className="md:hidden"
            onClick={() =>
              setMobileMenu(!mobileMenu)
            }
          >
            <Menu size={28} />
          </button>

          {/* LOGO */}
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

        {/* DESKTOP MENU */}
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

        {/* MOBILE USER */}
        <button className="md:hidden">
          <UserCircle2 size={30} />
        </button>
      </header>

      {/* MOBILE DROPDOWN */}
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

        {/* MOBILE MENU */}
        {mobileMenu && (

          <div className="bg-white border border-gray-300 rounded-lg mt-2 overflow-hidden">

            {steps.map((step) => (

              <button
                key={step}
                onClick={() => {

                  setSelectedMobileStep(step);

                  setMobileMenu(false);

                  if (step === "Subscription") {
                    navigate("/");
                  }

                  if (step === "Device") {
                    navigate("/device");
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

      {/* MAIN */}
      <div className="max-w-[1180px] mx-auto flex flex-col md:flex-row gap-10 px-4 md:px-8 py-6 md:py-14">

        {/* SIDEBAR */}
        <aside className="hidden md:block w-[220px] pt-6 shrink-0">

          {steps.map((step, i) => (

            <button
              key={step}
              onClick={() => {

                if (step === "Subscription") {
                  navigate("/");
                }

                if (step === "Device") {
                  navigate("/device");
                }
              }}
              className={`w-full flex items-center justify-between mb-8 text-[17px] text-left transition
              
              ${
                step === "Device"
                  ? "text-[#00A9B5] font-semibold border-l-4 border-[#00A9B5] pl-4"
                  : i < 9
                  ? "text-[#006D8A]"
                  : "text-gray-400"
              }`}
            >
              <span>{step}</span>

              {i < 9 &&
                step !== "Device" && (
                  <Check
                    size={17}
                    className="text-[#006D8A]"
                  />
                )}
            </button>
          ))}
        </aside>

        {/* CONTENT */}
        <div className="flex-1">

          <div className="bg-white rounded-md border border-gray-300 overflow-hidden">

            {/* TOP HEADER */}
            <div className="px-5 md:px-8 py-6 border-b border-gray-300">

              <h2 className="text-[28px] md:text-[44px] font-bold text-[#006D8A] leading-tight">
                Device management
              </h2>

              <p className="text-gray-600 mt-2 text-[15px] md:text-[18px] leading-7">
                Add details of the device, if any already installed on your car.
                If none, then continue to next step.
              </p>
            </div>

            {/* DEVICE LIST */}
            {devices.map((device, index) => (

              <div
                key={index}
                className="border-b border-gray-300 last:border-b-0"
              >

                <div className="px-5 md:px-8 py-8">

                  {/* TITLE */}
                  <h3 className="text-[22px] md:text-[26px] font-medium text-gray-700 mb-8">
                    Device {index + 1}
                  </h3>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

                    {/* LEFT */}
                    <div>

                      <label className="block text-[14px] text-gray-500 mb-2">
                        Device type
                      </label>

                      <div className="w-full h-[54px] border border-gray-300 rounded-md px-4 flex items-center text-[16px] text-gray-700">
                        {device.type}
                      </div>

                      {/* SERIAL */}
                      <div className="mt-5">

                        <label className="block text-[14px] text-gray-500 mb-2">
                          Serial number
                        </label>

                        <input
                          value={device.serial}
                          onChange={(e) =>
                            updateDevice(index, {
                              ...device,
                              serial:
                                e.target.value,
                            })
                          }
                          placeholder="Enter the serial number"
                          className="w-full h-[54px] border border-gray-300 rounded-md px-4 text-[16px] outline-none focus:border-[#00A9B5]"
                        />
                      </div>
                    </div>

                    {/* RIGHT */}
                    <div>

                      {/* TOGGLE */}
                      <div className="flex items-start justify-between gap-5">

                        <div>

                          <h4 className="text-[18px] md:text-[20px] font-medium text-gray-700">
                            Bringing your own device?
                          </h4>

                          <p className="text-[15px] text-gray-500 mt-2 leading-6 max-w-[420px]">
                            Toggle this on if you're bringing your own device.
                            Leave it off if Drive mate is to provide the device.
                          </p>
                        </div>

                        {/* SWITCH */}
                        <button
                          onClick={() =>
                            updateDevice(index, {
                              ...device,
                              ownDevice:
                                !device.ownDevice,
                            })
                          }
                          className={`w-[50px] h-[28px] rounded-full relative transition shrink-0
                          
                          ${
                            device.ownDevice
                              ? "bg-[#00A9B5]"
                              : "bg-gray-300"
                          }`}
                        >

                          <span
                            className={`absolute top-1 w-5 h-5 bg-white rounded-full transition
                            
                            ${
                              device.ownDevice
                                ? "right-1"
                                : "left-1"
                            }`}
                          />
                        </button>
                      </div>

                      {/* IMAGE */}
                      {device.ownDevice && (

                        <div className="mt-6">

                          <p className="text-[14px] text-gray-500 mb-2">
                            Upload an image of the device
                          </p>

                          <label className="w-full md:w-[250px] h-[120px] border border-gray-300 rounded-md flex flex-col items-center justify-center cursor-pointer hover:bg-gray-50 overflow-hidden">

                            <input
                              type="file"
                              hidden
                              onChange={(e) => {

                                const file =
                                  e.target.files[0];

                                if (!file) return;

                                updateDevice(index, {
                                  ...device,
                                  image:
                                    URL.createObjectURL(
                                      file
                                    ),
                                });
                              }}
                            />

                            {device.image ? (

                              <img
                                src={device.image}
                                alt=""
                                className="w-full h-full object-cover"
                              />

                            ) : (

                              <>
                                <Upload
                                  size={20}
                                  className="text-[#006D8A] mb-2"
                                />

                                <span className="text-[#006D8A] underline text-[15px]">
                                  Click to upload
                                </span>
                              </>
                            )}
                          </label>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* NEXT BUTTON */}
          <div className="mt-8 flex justify-end">

            <button
              onClick={() =>
                console.log(devices)
              }
              className="w-full md:w-auto md:px-28 h-14 bg-[#FFD400] hover:bg-[#f2ca00] rounded-md text-[#006D8A] text-[22px] font-semibold transition"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}