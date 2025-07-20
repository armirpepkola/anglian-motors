import singleImage from "@/assets/images/blog/single4.jpg";
import {blogCategories, blogRecentPosts, blogTags} from "@/data/blog";
import Image from "next/image";

export default function BlogSidebar() {
    return (
        <div className="col-lg-4">
            <div className="right-item sub-bg">
                <h4 className="mb-30">Search</h4>
                <div className="search mb-40">
                    <input type="text" placeholder="Search here. . ."/>
                    <button><i className="fa-solid fa-search"></i></button>
                </div>
                <h4 className="mb-30">Categories</h4>
                <ul className="right_list mb-40">
                    {blogCategories.map((category) => (
                        <li><a className="d-block pb-1 mb-2" href="#0">{category}</a></li>
                    ))}
                </ul>
                <h4 className="mb-30">Recent Posts</h4>
                {blogRecentPosts.map((post) => (
                    <div key={post.id} className="recent-post p-0 bor-bottom pb-4 mb-4 sub-bg">
                        <div className="img"><Image src={post.image} alt="image" className="h-auto"/></div>
                        <div className="con">
                            <span>{post.date}</span>
                            <h5><a href="#0">{post.title}</a></h5>
                        </div>
                    </div>
                ))}

                <h4 className="mb-30 mt-40">Tags</h4>
                <div className="tags">
                    {blogTags.map((tag) => (
                        <a href="#0">{tag}</a>
                    ))}
                </div>
                <div className="image mt-40">
                    <Image src={singleImage} alt="image" className="h-auto"/>
                </div>
            </div>
        </div>
    )
}