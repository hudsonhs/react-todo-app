import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Todo App",
  description: "Hudson's todo app for learning React",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
