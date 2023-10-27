export default function ClosedItems() {
    return (
        <section className="closed-contests">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-heading text-center">
                            <h6>Closed Photography Contests</h6>
                            <h4>
                                <em>Previous Contests</em> With Handpicked <em>Winners</em>
                            </h4>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div
                            className="owl-features owl-carousel"
                            style={{ position: "relative", zIndex: 5 }}
                        >
                            <div className="item">
                                <div className="closed-item">
                                    <div className="thumb">
                                        <img src="assets/images/closed-01.jpg" alt="" />
                                        <span className="winner">
                                            <em>Winner:</em> Anthony Soft
                                        </span>
                                        <span className="price">
                                            <em>Award :</em> $1,600
                                        </span>
                                    </div>
                                    <div className="down-content">
                                        <div className="row">
                                            <div className="col-7">
                                                <h4>
                                                    88 Participants <br />
                                                    <span>Number Of Artists</span>
                                                </h4>
                                            </div>
                                            <div className="col-5">
                                                <h4 className="pics">
                                                    320 Pictures <br />
                                                    <span>Submited Pics</span>
                                                </h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="closed-item">
                                    <div className="thumb">
                                        <img src="assets/images/closed-02.jpg" alt="" />
                                        <span className="winner">
                                            <em>Winner:</em> Anthony Soft
                                        </span>
                                        <span className="price">
                                            <em>Award :</em> $4,200
                                        </span>
                                    </div>
                                    <div className="down-content">
                                        <div className="row">
                                            <div className="col-7">
                                                <h4>
                                                    96 Participants <br />
                                                    <span>Number Of Artists</span>
                                                </h4>
                                            </div>
                                            <div className="col-5">
                                                <h4 className="pics">
                                                    410 Pictures <br />
                                                    <span>Submited Pics</span>
                                                </h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="closed-item">
                                    <div className="thumb">
                                        <img src="assets/images/closed-03.jpg" alt="" />
                                        <span className="winner">
                                            <em>Winner:</em> Anthony Soft
                                        </span>
                                        <span className="price">
                                            <em>Award :</em> $3,200
                                        </span>
                                    </div>
                                    <div className="down-content">
                                        <div className="row">
                                            <div className="col-7">
                                                <h4>
                                                    74 Participants <br />
                                                    <span>Number Of Artists</span>
                                                </h4>
                                            </div>
                                            <div className="col-5">
                                                <h4 className="pics">
                                                    284 Pictures <br />
                                                    <span>Submited Pics</span>
                                                </h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="border-button text-center">
                            <a href="contests.html">Browse Open Contests</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}