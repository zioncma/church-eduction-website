/* eslint-disable @typescript-eslint/ban-ts-comment */
import { forwardRef, type ButtonHTMLAttributes } from 'react';

/**
 *
 */
export const Button = forwardRef<HTMLButtonElement, ButtonHTMLAttributes<HTMLButtonElement>>((props, ref) => {
  const { className, ...rest } = props;
  return (
    <>
      <button className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${className}`} ref={ref} {...rest} />
    </>
  );
});
