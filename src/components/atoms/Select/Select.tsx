import router from 'next/router';
import React from 'react';

function Select({ setRadius }: { setRadius: any }) {
  const handleChange = (e: any) => {
    setRadius(e.target.value);
  };
  return (
    <div className="relative">
      <select
        id="distance"
        className="min-h-55 block appearance-none rounded-lg border border-gray-300 p-4 pr-10 text-sm dark:border-gray-600 dark:text-black dark:placeholder:text-gray-700"
        onChange={handleChange}
      >
        <option value="5" defaultValue="5">
          whitin 5 Miles
        </option>
        <option value="10">10 Miles</option>
        <option value="15">15 Miles</option>
        <option value="20">20 Miles</option>
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-700">
        <img
          src={`${router.basePath}/assets/images/chevron.svg`}
          alt="chevron icon"
        />
      </div>
    </div>
  );
}

export default Select;
