import Link from "next/link";
import React from "react";

const login = () => {
  return (
    <>
      <div className="m-auto w-full max-w-[496px] rounded-lg bg-white p-6 pt-9">
        <div className="mb-8">
          <h2 className="mb-3 text-3xl font-semibold uppercase leading-[48px] text-black">
            Sign In
          </h2>
          <p className="text-gray text-base leading-5">
            Welcome Back! Please enter your details
          </p>
        </div>
        <div>
          <form action="">
            <div className="mb-4 flex flex-col">
              <label className="block text-base font-bold leading-7">
                <span className="mb-1.5 block text-sm">Email</span>
                <div className="relative">
                  <input
                    type="text"
                    required
                    name="email"
                    spellCheck="true"
                    placeholder="Enter Your Email Address"
                    className="not-read-only:hover:enabled:border-gray-1000 focus:border-gray-1000 not-read-only:focus:enabled:border-gray-1000 peer block h-10 w-full rounded-md border border-gray-300 bg-transparent px-4 py-2 text-sm font-normal leading-[40px] transition duration-200 placeholder:text-gray-500 placeholder:opacity-0 read-only:border-gray-300 focus:outline-none focus:ring-[1px] focus:ring-gray-900/20 read-only:focus:ring-0 disabled:cursor-not-allowed disabled:border-gray-200 disabled:bg-gray-100 disabled:placeholder:text-gray-400 lg:h-11 lg:leading-[44px] 2xl:h-12 2xl:leading-[48px]"
                  />
                </div>
              </label>
            </div>
            <div className="mb-4 flex flex-col">
              <label className="block text-base font-bold leading-7">
                <span className="mb-1.5 block text-sm">Password</span>
                <div className="relative">
                  <input
                    type="password"
                    required
                    name="password"
                    spellCheck="true"
                    placeholder="Enter Your Password"
                    className="not-read-only:hover:enabled:border-gray-1000 focus:border-gray-1000 not-read-only:focus:enabled:border-gray-1000 peer block h-10 w-full rounded-md border border-gray-300 bg-transparent px-4 py-2 text-sm font-normal leading-[40px] transition duration-200 placeholder:text-gray-500 placeholder:opacity-0 read-only:border-gray-300 focus:outline-none focus:ring-[1px] focus:ring-gray-900/20 read-only:focus:ring-0 disabled:cursor-not-allowed disabled:border-gray-200 disabled:bg-gray-100 disabled:placeholder:text-gray-400 lg:h-11 lg:leading-[44px] 2xl:h-12 2xl:leading-[48px]"
                  />
                </div>
              </label>
            </div>
            <div className="mb-7 flex items-center justify-between">
              <div className="flex flex-col">
                <label className="flex flex-row items-center">
                  <div className="relative leading-none">
                    <input
                      type="checkbox"
                      name="remember"
                      className="text-gray checked:!bg-red-1000 checked:!border-gray-1000 hover:enabled:border-gray-1000 !text-gray-dark h-4 w-4 rounded border border-gray-300 bg-transparent focus:ring-transparent disabled:border-gray-200 disabled:bg-gray-50"
                    />
                  </div>
                  <span className="text-gray ml-2 text-sm font-bold leading-6 rtl:mr-1">
                    Remember Me
                  </span>
                </label>
              </div>
              <Link
                href={"/forgot-password"}
                className="text-black-300 text-sm font-semibold leading-6 underline"
              >
                Forget Password?
              </Link>
            </div>
            <button className="hover:enabled:bg-gray-1000 text-gray-0 mb-2 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-gray-900 px-8 py-2.5 text-base font-medium text-white transition duration-200 focus:outline-none focus:ring-gray-900/30 active:scale-90">
              Sign In
            </button>
            <p className="text-gray text-sm font-semibold leading-6">
              Not member yet?{" "}
              <a className="text-primary underline" href="/sign-up">
                Create an account
              </a>
            </p>
            <div className="relative mb-8 mt-7 text-center before:absolute before:left-0 before:top-1/2 before:h-[1px] before:w-full before:bg-gray-200">
              <span className="relative z-10 m-auto inline-flex bg-white px-5">
                Or
              </span>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default login;
