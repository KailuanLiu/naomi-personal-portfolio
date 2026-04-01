import "./globals.css";

export const metadata = {
  title: {
    default: "Naomi's Website",
    template: "%s | Naomi",
  },
  icons: {
    icon: "/Witch1.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}