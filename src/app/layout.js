import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "JUUL Devices & Pods UAE | Buy Online Dubai",
  description: "Shop authentic JUUL devices and pods in UAE. Fast delivery across Dubai, Sharjah, Abu Dhabi. Age 21+ only.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${plusJakartaSans.variable} h-full antialiased`}
      suppressHydrationWarning={true}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "Is JUUL available in UAE?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, authentic JUUL devices and pod flavors are fully available for purchase online in the UAE with rapid delivery across Dubai, Sharjah, Abu Dhabi, and other emirates."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How long does one pod last?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "One authentic JUUL pod is engineered to last approximately 200 puffs, which is roughly equivalent to a standard pack of 20 traditional cigarettes, depending on your individual usage patterns."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Do you deliver outside Dubai?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes! We provide fast, reliable courier delivery to all UAE emirates, including Abu Dhabi, Sharjah, Ajman, Fujairah, Ras Al Khaimah, and Umm Al Quwain, with same-day dispatch available."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Minimum age to order?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Strictly age 21 years or older. We maintain a strict age verification compliance protocol at checkout and upon delivery to ensure responsible consumption."
                  }
                }
              ]
            })
          }}
        />
      </head>
      <body className="min-h-full flex flex-col" suppressHydrationWarning={true}>{children}</body>
    </html>
  );
}
