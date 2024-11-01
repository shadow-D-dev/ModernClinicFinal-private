import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import { Plus_Jakarta_Sans } from "next/font/google";

const Jakarata = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
  variable: "--font-plus-jakarta",
});
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Shree Balaji Clinic",
  description: "Expert Dental Care",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased  ${Jakarata.variable}`}
      >
        {children}
      </body>
    </html>
  );
}

// // app/layout.tsx
// "use client"; // Client component
//
// import localFont from "next/font/local";
// import "./globals.css";
// import { Plus_Jakarta_Sans } from "next/font/google";
// import { useEffect, useState } from "react"; // Import hooks
// import LoadingScreen from "./components/LoadingScreen"; // Import loading component
//
// const Jakarata = Plus_Jakarta_Sans({
//   subsets: ["latin"],
//   weight: ["400", "500", "700"],
//   display: "swap",
//   variable: "--font-plus-jakarta",
// });
// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });
//
// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   const [loading, setLoading] = useState(true); // Loading state
//
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setLoading(false); // Set loading to false after 3 seconds
//     }, 3000);
//
//     return () => clearTimeout(timer); // Cleanup timer
//   }, []);
//
//   return (
//     <html lang="en">
//       <body
//         className={`${geistSans.variable} ${geistMono.variable} antialiased  ${Jakarata.variable}`}
//       >
//         {loading ? <LoadingScreen /> : children} {/* Conditional rendering */}
//       </body>
//     </html>
//   );
