export default function Header() {
    return (
        <header className="header-area header-sticky">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <nav className="main-nav">
                            {/* ***** Logo Start ***** */}
                            <a href="index.html" className="logo">
                                <img
                                    src="assets/images/logo.png"
                                    alt="SnapX Photography Template"
                                />
                            </a>
                            {/* ***** Logo End ***** */}
                            {/* ***** Menu Start ***** */}
                            <ul className="nav">
                                <li>
                                    <a href="index.html" className="active">
                                        Home
                                    </a>
                                </li>
                                <li className="has-sub">
                                    <a href="javascript:void(0)">Photos &amp; Videos</a>
                                    <ul className="sub-menu">
                                        <li>
                                            <a href="contests.html">Contests</a>
                                        </li>
                                        <li>
                                            <a href="contest-details.html">Single Contest</a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="categories.html">Categories</a>
                                </li>
                                <li>
                                    <a href="users.html">Users</a>
                                </li>
                            </ul>
                            <div className="border-button">
                                <a id="modal_trigger" href="#modal" className="sign-in-up">
                                    <i className="fa fa-user" /> Sign In/Up
                                </a>
                            </div>
                            <a className="menu-trigger">
                                <span>Menu</span>
                            </a>
                            {/* ***** Menu End ***** */}
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    );
}