export default function PopularItems() {
    return (
        <section className="popular-categories">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="section-heading">
                            <h6>Our Categories</h6>
                            <h4>
                                Check Out <em>Popular</em> Contest <em>Categories</em>
                            </h4>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="main-button">
                            <a href="categories.html">Discover All Categories</a>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className="popular-item">
                            <div className="top-content">
                                <div className="icon">
                                    <img src="assets/images/icon-01.png" alt="" />
                                </div>
                                <div className="right">
                                    <h4>Nature Pic Contest</h4>
                                    <span>
                                        <em>126</em> Available Contests
                                    </span>
                                </div>
                            </div>
                            <div className="thumb">
                                <img src="assets/images/popular-01.png" alt="" />
                                <span className="category">Top Contest</span>
                                <span className="likes">
                                    <i className="fa fa-heart" /> 256
                                </span>
                            </div>
                            <div className="border-button">
                                <a href="contest-details.html">Browse Nature Pic Contests</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className="popular-item">
                            <div className="top-content">
                                <div className="icon">
                                    <img src="assets/images/icon-02.png" alt="" />
                                </div>
                                <div className="right">
                                    <h4>Random Pic Contest</h4>
                                    <span>
                                        <em>116</em> Available Contests
                                    </span>
                                </div>
                            </div>
                            <div className="thumb">
                                <img src="assets/images/popular-02.png" alt="" />
                                <span className="category">Top Contest</span>
                                <span className="likes">
                                    <i className="fa fa-heart" /> 256
                                </span>
                            </div>
                            <div className="border-button">
                                <a href="contest-details.html">Browse Random Pic Contests</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className="popular-item">
                            <div className="top-content">
                                <div className="icon">
                                    <img src="assets/images/icon-03.png" alt="" />
                                </div>
                                <div className="right">
                                    <h4>Portrait Pic Contest</h4>
                                    <span>
                                        <em>164</em> Available Contests
                                    </span>
                                </div>
                            </div>
                            <div className="thumb">
                                <img src="assets/images/popular-03.png" alt="" />
                                <span className="category">Top Contest</span>
                                <span className="likes">
                                    <i className="fa fa-heart" /> 256
                                </span>
                            </div>
                            <div className="border-button">
                                <a href="contest-details.html">Browse Portrait Pic Contests</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className="popular-item">
                            <div className="top-content">
                                <div className="icon">
                                    <img src="assets/images/icon-04.png" alt="" />
                                </div>
                                <div className="right">
                                    <h4>Space Pic Contest</h4>
                                    <span>
                                        <em>135</em> Available Contests
                                    </span>
                                </div>
                            </div>
                            <div className="thumb">
                                <img src="assets/images/popular-04.png" alt="" />
                                <span className="category">Top Contest</span>
                                <span className="likes">
                                    <i className="fa fa-heart" /> 256
                                </span>
                            </div>
                            <div className="border-button">
                                <a href="contest-details.html">Browse Space Pic Contests</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}