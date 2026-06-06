import type { SVGProps } from "react";

const Expo = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 256 256" preserveAspectRatio="xMidYMid">
    <rect width="256" height="256" rx="56" fill="#000020" />
    <path
      d="M61.5 184.4c-4.2 6.7 4.2 13.6 10.1 8.4 28.6-25.4 48.5-58.7 55.6-70.8 1.4-2.5 4.9-2.5 6.4 0 7.1 12.1 27 45.4 55.6 70.8 5.9 5.2 14.3-1.7 10.1-8.4L143.6 94.2c-6.2-10.1-20.9-10.1-27.1 0L61.5 184.4Z"
      fill="#fff"
    />
  </svg>
);

export { Expo };
