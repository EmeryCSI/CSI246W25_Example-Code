/**
 * Root Layout Component - The main layout wrapper for the entire Next.js application
 * This component provides the basic HTML structure and any global UI elements
 * that should appear on all pages. It wraps around all page content using the
 * children prop.
 */
function RootLayout(props) {
  return (
    <html lang="en">
      <body>
        {/* Global header that appears on every page */}
        <h1>This is a global Layout, this will appear on all pages</h1>
        {/* Renders the page-specific content passed as children */}
        <div>{props.children}</div>
      </body>
    </html>
  );
}

export default RootLayout;
