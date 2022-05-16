import { FC } from "react";

const Subscribe: FC = () => {
  return (
    <form className="mt-6 flex flex-col sm:flex-row lg:mt-0 lg:justify-end hidden">
      <div>
        <label htmlFor="email-address" className="sr-only">
          Email address
        </label>
        <input
          id="email-address"
          name="email-address"
          type="email"
          autoComplete="email"
          required
          className="appearance-none w-full px-4 py-2 border border-gray-300 text-base rounded-md text-gray-900 bg-gray-300 placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 lg:max-w-xs"
          placeholder="Enter your email"
          readOnly
        />
      </div>
      <div className="mt-2 flex-shrink-0 w-full flex rounded-md shadow-sm sm:mt-0 sm:ml-3 sm:w-auto sm:inline-flex">
        <button
          type="button"
          className="w-full bg-blue-200 px-4 py-2 border border-transparent rounded-md flex items-center justify-center text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:w-auto sm:inline-flex"
          disabled
        >
          {/* Notify me */}
          Coming Soon
        </button>
      </div>
    </form>
  );
};

export default Subscribe;
