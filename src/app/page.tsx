import React from "react";
import { UserButton } from "@clerk/nextjs";

export default async function Home() {
  return (
    <main className="w-full flex items-end min-h-screen">
      <UserButton afterSignOutUrl="/" />
      <svg
        width="1512"
        height="801"
        viewBox="0 0 1512 801"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        // to make it responsive and scale according to viewport
        preserveAspectRatio="none"
        className="w-full h-auto"
      >
        <path
          d="M42.5824 633.403C2.15884 668.078 -13 780.773 -13 780.773V801H1514V0C1514 0 1486.21 104.026 1468.52 118.474C1450.84 132.922 1443.76 131.188 1412.94 158.929C1382.12 186.669 1377.57 208.052 1357.36 265.844C1337.15 323.636 1339.67 366.98 1314.41 413.214C1289.14 459.448 1233.56 534.578 1185.56 497.013C1137.56 459.448 1160.29 430.552 1132.5 366.98C1104.71 303.409 1044.08 231.169 965.25 231.169C886.424 231.169 914.721 265.844 854.085 265.844C793.45 265.844 778.291 231.169 707.55 231.169C636.809 231.169 631.756 265.844 563.541 265.844C495.326 265.844 478.146 231.169 434.186 231.169C390.225 231.169 386.183 231.169 345.759 265.844C305.336 300.52 320.494 366.98 282.597 413.214C244.7 459.448 221.962 390.097 176.485 445C131.009 499.903 176.485 595.838 143.641 616.065C110.797 636.292 83.006 598.727 42.5824 633.403Z"
          fill="#0A0A0A"
        />
      </svg>
    </main>
  );
}

// export const runtime = "edge";
