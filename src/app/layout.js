import '../styles/globals.css';

export const metadata = {
  title: 'Tirupati Construction | Industrial & Commercial Building Solutions',
  description: 'Leading construction contractor in D&NH region. Delivering iconic projects across industrial, commercial, and residential sectors since 2012.',
  keywords: 'construction, industrial construction, warehouse building, commercial projects, construction company, Silvassa, Gujarat',
  robots: 'index, follow',
  openGraph: {
    title: 'Tirupati Construction',
    description: 'Leading Construction Contractor in D&NH Region',
    type: 'website',
  }
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect fill='%231a3a3a' width='100' height='100'/><text x='50' y='70' font-size='70' font-weight='bold' fill='%230891b2' text-anchor='middle'>T</text></svg>" />
      </head>
      <body className="bg-white text-slate-dark">
        {children}
      </body>
    </html>
  );
}