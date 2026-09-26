import React, { Fragment } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import Header from "../../components/header/Header";
import PageTitle from "../../components/pagetitle/PageTitle";
import Scrollbar from "../../components/scrollbar/scrollbar";
import Footer from "../../components/footer/Footer";
import CtaSection from "../../components/CtaSection/CtaSection";
import BlogList from "../../components/BlogList";
import SEO from "../../components/SEO/SEO";
import { getBreadcrumbSchema } from "../../utils/seoSchemas";

const BlogPage = (props) => {
  const { t: tSeo, i18n } = useTranslation("seo");
  const locale = i18n?.language || "ar";
  const isAr = locale === "ar";

  const breadcrumbs = getBreadcrumbSchema(
    [{ name: isAr ? "المدونة" : "Blog", url: "/blog" }],
    locale
  );

  return (
    <Fragment>
      <SEO
        title={tSeo("blog.title")}
        description={tSeo("blog.description")}
        keywords={tSeo("blog.keywords")}
        locale={locale}
        path="/blog"
        structuredData={breadcrumbs}
      />
      <Header />
      <main className="page_content blog-page">
        <PageTitle
          pageTitle={isAr ? "أحدث المقالات التقنية" : "Our Latest Blog"}
          pagesub={isAr ? "المدونة 😍" : "Blogs 😍"}
          pageTop={isAr ? "مقالاتنا" : "Our"}
        />
        <BlogList />
      </main>
      <CtaSection />
      <Footer />
      <Scrollbar />
    </Fragment>
  );
};

export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "seo"])),
    },
  };
}

export default BlogPage;
