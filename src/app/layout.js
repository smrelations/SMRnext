import { Poppins, DM_Serif_Display } from "next/font/google";
import "./globals.css";

// Body font: Poppins
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"], // pick weights you’ll use
  variable: "--font-poppins",
  display: "swap",
});

// Heading font: DM Serif Display
const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-dm-serif",
  display: "swap",
});

export const metadata = {
  title: "SMR Relations | We’re Social Media Relations But you can call us SMR.",
  description: "We’re Social Media Relations But you can call us SMR.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${dmSerif.variable} antialiased bg-white`}
      >
        {children}
      </body>
    </html>
  );
}
