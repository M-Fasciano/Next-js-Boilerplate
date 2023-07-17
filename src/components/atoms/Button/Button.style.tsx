/* eslint-disable no-nested-ternary */
export const style = {
  rounded: `rounded-full`,
  block: `flex justify-center w-full`,
  default: `border-2 focus:outline-none shadow font-medium transition ease-in duration-150`,
  disabled: `opacity-60 cursor-not-allowed`,
  sizes: {
    sm: 'px-6 py-1 text-sm',
    md: 'px-6 py-2',
    lg: 'px-6 py-3 text-lg',
  },
  color: {
    primary: {
      bg: `text-white border-blue-700 bg-blue-700`,
      outline: `border-blue-700 border-2 text-blue-700 hover:bg-blue-700 hover:text-white`,
      disabled: `text-white border-blue-700 bg-blue-700`,
    },
    success: {
      bg: `text-white border-primary-dark-0 bg-primary-dark-0`,
      outline: `border-primary-dark-0 border-2 text-primary-dark-0 hover:bg-primary-dark-0 hover:text-white`,
      disabled: `text-white border-primary-dark-0 bg-primary-dark-0`,
    },
    danger: {
      bg: `text-white border-red-600 bg-red-600`,
      outline: `border-red-600 border-2 text-red-600 hover:bg-red-600 hover:text-white`,
      disabled: `text-white border-red-600 bg-red-600`,
    },
    dark: {
      bg: `text-white border-black bg-black`,
      outline: `border-black border-2 text-gray-900 hover:bg-black hover:text-white`,
      disabled: `text-white border-black bg-black`,
    },
    warning: {
      bg: `text-white border-yellow-500 bg-yellow-500`,
      outline: `border-yellow-500 border-2 text-yellow-500 hover:bg-yellow-500 hover:text-white`,
      disabled: `text-white border-yellow-500 bg-yellow-500`,
    },
    indigo: {
      bg: `text-white border-indigo-900 bg-indigo-900`,
      outline: `border-indigo-900 border-2 text-indigo-900 hover:bg-indigo-900 hover:text-white`,
      disabled: `text-white border-indigo-900 bg-indigo-900`,
    },
  },
};

export const colors = (outline: boolean | undefined, disabled: boolean) => ({
  primary: outline
    ? style.color.primary.outline
    : disabled
    ? style.color.primary.disabled
    : style.color.primary.bg,
  success: outline
    ? style.color.success.outline
    : disabled
    ? style.color.success.disabled
    : style.color.success.bg,
  danger: outline
    ? style.color.danger.outline
    : disabled
    ? style.color.danger.disabled
    : style.color.danger.bg,
  dark: outline
    ? style.color.dark.outline
    : disabled
    ? style.color.dark.disabled
    : style.color.dark.bg,
  warning: outline
    ? style.color.warning.outline
    : disabled
    ? style.color.warning.disabled
    : style.color.warning.bg,
  indigo: outline
    ? style.color.indigo.outline
    : disabled
    ? style.color.indigo.disabled
    : style.color.indigo.bg,
});
