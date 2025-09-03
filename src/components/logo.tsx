import type { SVGProps } from 'react';

export function Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="150"
      height="30"
      viewBox="0 0 150 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Gurleen Singh"
      {...props}
    >
      <text
        x="25"
        y="22"
        fontFamily="'Space Grotesk', sans-serif"
        fontSize="22"
        fontWeight="bold"
        className="fill-foreground"
      >
        Gurleen S
      </text>
    </svg>
  );
}
