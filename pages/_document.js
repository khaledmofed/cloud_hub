import Document, { Html, Head, Main, NextScript } from "next/document";
import { i18n } from "../next-i18next.config";

export default class MyDocument extends Document {
  render() {
    const { locale } = this.props.__NEXT_DATA__;
    const dir = locale === "ar" ? "rtl" : "ltr";
    const lang = locale || i18n.defaultLocale;

    return (
      <Html dir={dir} lang={lang}>
        <Head>
          <meta
            name="description"
            content="Cloud Hub is a comprehensive IT solutions platform delivering web and mobile development, cloud infrastructure, DevOps, systems engineering, hosting, and server management."
          />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&family=Inter:wght@100..900&family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap"
            rel="stylesheet"
          />
          {locale === "ar" && (
            <link
              href="https://fonts.googleapis.com/css2?family=Tajawal:wght@300;400;500;700;800&display=swap"
              rel="stylesheet"
            />
          )}
        </Head>
        <body>
          <Main />
          <NextScript />
          {/* LiveChat */}
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window._lc = window._lc || {};
                window.__lc = window.__lc || {};
                window.__lc.license = 19497346;
                window.__lc.integration_name = "manual_onboarding";
                window.__lc.product_name = "livechat";
                ;(function(n,t,c){function i(n){return e.h?e._h.apply(null,n):e._q.push(n)}var e={_q:[],_h:null,_v:"2.0",on:function(){i(["on",c.call(arguments)])},once:function(){i(["once",c.call(arguments)])},off:function(){i(["off",c.call(arguments)])},get:function(){if(!e._h)throw new Error("[LiveChatWidget] You can't use getters before load.");return i(["get",c.call(arguments)])},call:function(){i(["call",c.call(arguments)])},init:function(){var n=t.createElement("script");n.async=!0,n.type="text/javascript",n.src="https://cdn.livechatinc.com/tracking.js",t.head.appendChild(n)}};!n._lc.asyncInit&&e.init(),n.LiveChatWidget=n.LiveChatWidget||e}(window,document,[].slice));
              `,
            }}
          />
          <noscript>
            <a
              href="https://www.livechat.com/chat-with/19497346/"
              rel="nofollow"
            >
              Chat with us
            </a>
            , powered by{" "}
            <a
              href="https://www.livechat.com/?welcome"
              rel="noopener nofollow"
              target="_blank"
            >
              LiveChat
            </a>
          </noscript>
        </body>
      </Html>
    );
  }
}
