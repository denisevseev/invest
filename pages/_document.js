// pages/_document.js
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head />
                <body>
                <Main />
                <NextScript />
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
                document.addEventListener('DOMContentLoaded', function() {
                  const mainHeader = document.querySelector('.mainHeader');
                  if (mainHeader) {
                    mainHeader.style.display = 'none';
                  }
                });
              `,
                    }}
                />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
