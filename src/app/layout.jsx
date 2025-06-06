// app/layout.js
import Header from "./components/Header";
import SmoothScroll from "./components/SmoothScroll";
import Footer from "./components/footer/Footer";
import "./global.css";

export default function Layout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <link
          href="https://fonts.googleapis.com/css2?family=Sora:wght@600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
      <SmoothScroll />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
