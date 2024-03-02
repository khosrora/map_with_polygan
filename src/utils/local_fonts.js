import localFont from "next/font/local";

export const estedad = localFont({
  src: [
    {
      path: "../../public/fonts/Estedad-ExtraLight.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "../../public/fonts/Estedad-Light.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "../../public/fonts/Estedad-Regular.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/Estedad-Medium.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Estedad-Bold.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/Estedad-ExtraBold.woff2",
      weight: "600",
      style: "normal",
    },
  ],
  variable: '--font-estedad'
});
