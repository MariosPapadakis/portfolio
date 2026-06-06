import type { ImgHTMLAttributes } from "react";

const Cplusplus = (props: ImgHTMLAttributes<HTMLImageElement>) => (
  // eslint-disable-next-line @next/next/no-img-element
  <img src="/ISO_C++_Logo.svg.png" alt="C++" {...props} />
);

export { Cplusplus };
