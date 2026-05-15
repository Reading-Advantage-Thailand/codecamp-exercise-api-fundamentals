export const metadata = {
  title: "Data Dashboard",
  description: "Codecamp API Fundamentals Exercise",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ fontFamily: "system-ui, sans-serif", padding: "2rem", maxWidth: "960px", margin: "0 auto" }}>
        <header style={{ marginBottom: "2rem" }}>
          <h1>Data Dashboard</h1>
        </header>
        {children}
      </body>
    </html>
  );
}
