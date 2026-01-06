import Document, { Html, Head, Main, NextScript } from 'next/document'
import { i18n } from '../next-i18next.config'

export default class MyDocument extends Document {
  render() {
    const { locale } = this.props.__NEXT_DATA__;
    const dir = locale === 'ar' ? 'rtl' : 'ltr';
    const lang = locale || i18n.defaultLocale;

    return (
      <Html dir={dir} lang={lang}>
        <Head>
          <meta name="description" content="Cloud Hub is a comprehensive IT solutions platform delivering web and mobile development, cloud infrastructure, DevOps, systems engineering, hosting, and server management." />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
          <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&family=Inter:wght@100..900&family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap" rel="stylesheet" />
          {locale === 'ar' && (
            <link href="https://fonts.googleapis.com/css2?family=Tajawal:wght@300;400;500;700;800&display=swap" rel="stylesheet" />
          )}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
