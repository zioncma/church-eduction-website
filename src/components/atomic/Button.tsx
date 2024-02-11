/* eslint-disable @typescript-eslint/ban-ts-comment */

/**
 *
 */
export const Button = ((props, ref) => {
  const { className,  ...rest } = props;
  return (
    <>
      <button className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${className}`} ref={ref} {...rest} />
    </>
  );
})
