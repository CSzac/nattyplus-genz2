import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "NattyPLUS | Feel Like a Man Again",
  description:
    "Clinically dosed supplements engineered for men who are done feeling like a shell of themselves. Boost testosterone, crush low libido, and actually feel alive.",
  openGraph: {
    title: "NattyPLUS | Feel Like a Man Again",
    description:
      "Clinically dosed supplements engineered for men who are done feeling like a shell of themselves.",
    images: ["/photo_strength_bs_multi_est_test_liver_gym_bench_2026-02_1_1_da55a7a5-6888-4209-b308-a8cada2fe3dc.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={montserrat.variable}>
      <body>{children}</body>
    </html>
  );
}
