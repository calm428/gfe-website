import BlogsSection from "@/components/blogs-and-news/blogs"
import HeroSection from "@/components/blogs-and-news/hero"
import NewsSection from "@/components/blogs-and-news/news"
// import PaginationSection from "@/components/blogs-and-news/pagination"
import UpcomingSection from "@/components/blogs-and-news/upcoming"
import ContactUs from "@/components/common/contact-us"
import ScrollToTop from "@/components/common/scroll-to-top"

const BlogAndNewsPage = () => {
  return (
    <>
      <HeroSection />
      <BlogsSection />
      <NewsSection />
      <UpcomingSection />
      {/* <PaginationSection /> */}
      <div className="container pb-[300px] md:pb-[150px]">
        <ContactUs />
      </div>
      <ScrollToTop />
    </>
  )
}

export default BlogAndNewsPage
