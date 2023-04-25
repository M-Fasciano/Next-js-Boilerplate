/* eslint-disable import/no-extraneous-dependencies */
import { useRouter } from 'next/router';
import React from 'react';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';

import Button from '@/components/atoms/Button';

type Inputs = {
  example: string;
};

function SearchBox() {
  const router = useRouter();
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => data;
  // console.log(data);

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}

      <label
        htmlFor="search"
        className="sr-only mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        Search
      </label>
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <img
            src={`${router.basePath}/assets/images/map-marker-alt.svg`}
            alt="location marker icon"
          />
        </div>
        <input
          type="search"
          id="search"
          className="block w-full rounded-lg border border-gray-300 p-4 pl-10 text-sm dark:border-gray-600 dark:text-black dark:placeholder:text-gray-700"
          placeholder="Search for trainers by postcode, town, city"
          required
          {...register('example')}
        />

        <div className="absolute bottom-2.5 right-2.5">
          <Button color="success" size="sm" submit>
            Search
          </Button>
        </div>
      </div>
    </form>
  );
}

export default SearchBox;
