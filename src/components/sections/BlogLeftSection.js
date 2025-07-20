import BlogSidebar from "@/components/blog/BlogSidebar";
import BlogPostList from "@/components/blog/BlogPostList";

export default function BlogLeftSection() {
    return (
        <section className="blog-slingle blog-area pt-130 pb-130">
            <div className="container">
                <div className="row g-4">
                    <BlogSidebar />
                    <BlogPostList />
                </div>
            </div>
        </section>
    )
}