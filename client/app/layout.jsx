export const metadata = {
  title: 'TripHub',
  description:
    'Explore your world effortlessly with TripHub - Your one-stop destination for hassle-free trip booking!',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
