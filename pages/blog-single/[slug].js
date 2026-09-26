import React, { Fragment } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import blogs from "../../api/blogs";
import Header from "../../components/header/Header";
import PageTitle from "../../components/pagetitle/PageTitle";
import Scrollbar from "../../components/scrollbar/scrollbar";
import Footer from "../../components/footer/Footer";
import CtaSection from "../../components/CtaSection/CtaSection";
import BlogSingle from "../../components/BlogDetails/BlogDetails";
import SEO from "../../components/SEO/SEO";
import { getArticleSchema, getBreadcrumbSchema } from "../../utils/seoSchemas";

const BlogDetailsPage = ({ blogItem, locale = "ar" }) => {
  const isAr = locale === "ar";
  const siteName = isAr ? "محور الحوسبة" : "Cloud Hub";

  const schemas = [
    getArticleSchema(
      {
        title: blogItem.title,
        description: blogItem.description,
        slug: blogItem.slug,
        author: blogItem.author,
        create_at: blogItem.create_at,
        image: blogItem.imageSrc,
      },
      locale
    ),
    getBreadcrumbSchema(
      [
        { name: isAr ? "المدونة" : "Blog", url: "/blog" },
        { name: blogItem.title, url: `/blog-single/${blogItem.slug}` },
      ],
      locale
    ),
  ];

  return (
    <Fragment>
      <SEO
        title={`${blogItem.title} | ${siteName}`}
        description={blogItem.description}
        keywords={`${blogItem.thumb || ""}, ${
          isAr
            ? "مقالات استضافة، الحوسبة السحابية، أمن المعلومات"
            : "cloud hosting articles, cyber security, IT blog"
        }`}
        locale={locale}
        path={`/blog-single/${blogItem.slug}`}
        ogImage={blogItem.imageSrc}
        ogType="article"
        structuredData={schemas}
      />
      <Header />
      <main className="page_content about-page">
        <PageTitle
          pageTitle={blogItem.title}
          pagesub={isAr ? "التفاصيل 😍" : "Details 😍"}
          pageTop={isAr ? "المدونة" : "Blog"}
        />
        <BlogSingle blog={blogItem} />
      </main>
      <CtaSection />
      <Footer />
      <Scrollbar />
    </Fragment>
  );
};

export async function getServerSideProps({ params, locale }) {
  const { slug } = params;
  const blogItem = blogs.find((item) => item.slug === slug);

  if (!blogItem) {
    return {
      notFound: true,
    };
  }

  const serializedBlog = {
    id: blogItem.id || null,
    title: blogItem.title || "",
    slug: blogItem.slug || "",
    description: blogItem.description || "",
    author: blogItem.author || "",
    authorTitle: blogItem.authorTitle || "",
    create_at: blogItem.create_at || "",
    comment: blogItem.comment || "",
    thumb: blogItem.thumb || "",
    blClass: blogItem.blClass || "",
    imageSrc:
      blogItem.screens?.src ||
      (typeof blogItem.screens === "string" ? blogItem.screens : null),
  };

  return {
    props: {
      blogItem: serializedBlog,
      locale,
      ...(await serverSideTranslations(locale, ["common", "seo"])),
    },
  };
}

export default BlogDetailsPage;