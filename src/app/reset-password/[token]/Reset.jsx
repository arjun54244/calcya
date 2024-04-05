"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { resetPassword, resetPasswordToken } from "../../../services/user";
import Image from "next/image";
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const Reset = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [isPasswordEmpty, setIsPasswordEmpty] = useState(false);
  const [IncorrectPassword, setIncorrectPassword] = useState(false);
  const [formData, setFormData] = useState({
    id: "",
    password: "",
  });
  const searchParams = useParams();
  const handleToken = async () => {
    const response = await resetPasswordToken(searchParams.token);
    setFormData({ ...formData, id: response.userId.id });
    if (response.success) {
      toast.success("User verified", {
        position: "bottom-left",
      });
    } else {
      toast.error("User Can't be verified", {
        position: "bottom-left",
      });
      router.push("/forgot-password");
    }
  };
  useEffect(() => {
    handleToken();
  });
  const handleClick = () => {
    setShowPassword(!showPassword);
  };
  const handlePassword = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (e.target.value === formData.password) {
      setIncorrectPassword(false);
    } else {
      setIncorrectPassword(true);
    }
  };
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await resetPassword(formData);
    console.log("result", result);
    if (result.success) {
      toast.success("Password Changed", {
        position: "bottom-left",
      });
      router.push("/signin");
    } else {
      toast.error("Error in changing password", {
        position: "bottom-left",
      });
    }
  };
  return (
    <section className="relative z-10 overflow-hidden pb-16 pt-36 md:pb-20 lg:pb-28 lg:pt-[180px]">
      <div className="container ">
        <div className="-mx-4 flex flex-wrap ">
          <div className="w-full px-4 lg:flex">
            <Image
              src="/images/user/reset.svg"
              alt="login image"
              width={400}
              height={400}
            />
            <div className=" mx-auto max-w-[500px] rounded-lg bg-body-color bg-opacity-20 px-6 py-10 shadow-three dark:bg-dark sm:p-[60px]">
              <h3 className="mb-3 text-center text-2xl font-bold text-black dark:text-white sm:text-3xl">
                Reset Your Password
              </h3>
              <form onSubmit={handleSubmit}>
                <div className="mb-8">
                  <label
                    htmlFor="password"
                    className="mb-3 block text-sm text-dark dark:text-white"
                  >
                    {" "}
                    Your Password{" "}
                  </label>
                  <div className="px-6 py-3 bg-[#f8f8f8] w-full rounded-sm flex">
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      placeholder="Enter New Password"
                      className="outline-none text-base w-full text-body-color bg-transparent"
                      value={formData.password}
                      onChange={handleChange}
                    />
                    {!showPassword ? (
                      <IoMdEye
                        className="mt-1 w-[30px] h-[30px] hover:cursor-pointer"
                        color="#f89b18"
                        onClick={handleClick}
                      />
                    ) : (
                      <IoMdEyeOff
                        className="mt-1 w-[30px] h-[30px] hover:cursor-pointer"
                        color="#f89b18"
                        onClick={handleClick}
                      />
                    )}
                  </div>

                  {isPasswordEmpty && (
                    <p className="text-sm text-red-600">
                      Please enter a password
                    </p>
                  )}
                </div>
                <div className="mb-8">
                  <label
                    htmlFor="confirmPassword"
                    className="mb-3 block text-sm text-dark dark:text-white"
                  >
                    {" "}
                    Confirm Password{" "}
                  </label>
                  <input
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    className={`border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 ${
                      IncorrectPassword
                        ? "focus:border-red-600"
                        : "focus:border-green-600"
                    }`}
                    value={formData.confirmPassword}
                    onChange={handlePassword}
                  />
                  {IncorrectPassword && (
                    <p className="text-sm text-red-600">
                      The password does&apos;t match
                    </p>
                  )}
                </div>

                <div className="mb-6">
                  <button
                    type="submit"
                    className="flex w-full items-center justify-center rounded-sm bg-primary px-9 py-4 text-base font-medium text-white shadow-submit duration-300 hover:bg-primary/90 dark:shadow-submit-dark"
                  >
                    Change Password
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
  );
};

export default Reset;
