

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>

        {/* 🔥 NAVBAR */}
        <div className="w-full p-4 shadow bg-white flex justify-between">
          <h1 className="font-bold text-lg">CalamitySense</h1>

          <button className="border px-4 py-1 rounded">
            My Dashboard
          </button>
        </div>

        {/* 🔽 Pages yaha render honge */}
        {children}

      </body>
    </html>
  );
}