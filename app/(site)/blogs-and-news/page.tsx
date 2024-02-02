import ContactUs from "@/components/NFT/contact-us"
import BlogsSection from "@/components/blogs-and-news/blogs"
import HeroSection from "@/components/blogs-and-news/hero"
import NewsSection from "@/components/blogs-and-news/news"
// import PaginationSection from "@/components/blogs-and-news/pagination"
import UpcomingSection from "@/components/blogs-and-news/upcoming"

const BlogAndNewsPage = () => {
  return (
    <div className="mb-40">
      <HeroSection />
      <BlogsSection />
      <NewsSection />
      <UpcomingSection />
      {/* <PaginationSection /> */}
      <div className=" container lg:px-24">
        <ContactUs />
      </div>
    </div>
  )
}

export default BlogAndNewsPage
