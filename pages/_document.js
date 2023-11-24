import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang='en'>
        <Head />
        <body>
        {/* //we can use the div as a portal for modals for example */}
          <div id = "overlays"></div> 
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;