export const menuItems = [
    {
        title: "Home",
        icon: "fas fa-chevron-down",
        subMenu: [
            { title: "Home 01", link: "/" },
            { title: "Home 02", link: "/home-2" },
            { title: "Home 03", link: "/home-3" },
            { title: "Home 04", link: "/home-4" },
        ],
    },
    {
        title: "About Us",
        icon: "fas fa-chevron-down",
        subMenu: [
            { title: "About One", link: "/about" },
            { title: "About Two", link: "/about-2" },
        ],
    },
    {
        title: "Services",
        icon: "fas fa-chevron-down",
        subMenu: [
            { title: "Service", link: "/services" },
            { title: "Service Details", link: "/services/single" },
        ],
    },
    {
        title: "Pages",
        icon: "fas fa-chevron-down",
        subMenu: [
            { title: "Our Project 01", link: "/project" },
            { title: "Our Project 02", link: "/project-2" },
            { title: "Project Details", link: "/project/single" },
            { title: "Our Teams", link: "/team" },
            { title: "Our Teams Details", link: "/team/single" },
            { title: "FAQ", link: "/faq" },
            { title: "Login / Register", link: "/login" },
            { title: "404 Error", link: "/error" },
        ],
    },
    {
        title: "Blog",
        icon: "fas fa-chevron-down",
        subMenu: [
            {
                title: "Blog Grid",
                subMenu: [
                    { title: "2 Columns", link: "/blog-2" },
                    { title: "3 Columns", link: "/blog-3" },
                ],
            },
            { title: "Blog Grid One", link: "/blog-2" },
            { title: "Blog Grid Two", link: "/blog-3" },
            {
                title: "Blog Standard",
                subMenu: [
                    { title: "Left SideBar", link: "/blog-left" },
                    { title: "Right SideBar", link: "/blog" },
                ],
            },
            { title: "Blog Standard One", link: "/blog" },
            { title: "Blog Standard Two", link: "/blog-left" },
            {
                title: "Blog Details",
                subMenu: [
                    { title: "Left SideBar", link: "/blog-single-left" },
                    { title: "Right SideBar", link: "/blog/single" },
                ],
            },
            { title: "Blog Details", link: "/blog/single" },

        ],
    },
    { title: "Contact Us", link: "/contact" },
];