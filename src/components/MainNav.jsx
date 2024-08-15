import MyNaviLink from "./MyNaviLink.jsx";

function MainNavigation() {
    return (
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container">
                <a class="navbar-brand" href="#">Navbar</a>
                <div id="navbarSupportedContent">
                    <ul class="nav navbar-nav me-auto mb-2 mb-lg-0">
                        <MyNaviLink goto={"/"} text={"All Blogs"}></MyNaviLink>
                        <MyNaviLink goto={"/new-blog"} text={"New Blog"}></MyNaviLink>
                    </ul>
                </div>
            </div>
        </nav>
    )
};

export default MainNavigation;