import React from 'react';




function HomePage() {

    return (
        <>
            <div id="top-wrapper">
                {/* Carousel begins */}
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 col-md-7">
                            <div id="front-page-carousel" className="carousel slide" data-bs-ride="carousel">
                                {/* Slideshow/Carousel */}
                                <div className="carousel-inner" style={{ backgroundColor: "rgb(237, 230, 238)" }}>
                                    <div className="carousel-item active">
                                        <img
                                            src="/images/resize ref bc istockphoto-1196656165-612x612.jpg"
                                            alt="Online education"
                                            className="d-block w-100"
                                        />
                                    </div>
                                    <div className="carousel-item" >
                                        <img
                                            src="/images/resize ref bc Girl-online-learning-at-home-earphones-laptop.jpg"
                                            alt="Girl online learning"
                                            className="d-block w-100"
                                        />
                                    </div>
                                    <div className="carousel-item">
                                        <img src="/images/bedtime-stories.jpg" 
                                        alt="bedtime stories" 
                                        className="d-block w-100" />
                                    </div>
                                    <div className="carousel-item">
                                        <img
                                            src="/images/Resize ref bc IMG_6884-min-1024x768.jpg"
                                            alt="Books"
                                            className="d-block w-100"
                                        />
                                    </div>
                                </div>

                                {/* Left and right controls/icons */}
                                <button
                                    className="carousel-control-prev"
                                    type="button"
                                    data-bs-target="#front-page-carousel"
                                    data-bs-slide="prev"
                                >
                                    <span className="carousel-control-prev-icon"></span>
                                </button>
                                <button
                                    className="carousel-control-next"
                                    type="button"
                                    data-bs-target="#front-page-carousel"
                                    data-bs-slide="next"
                                >
                                    <span className="carousel-control-next-icon"></span>
                                </button>

                                <br />
                                <br />

                                {/* Indicators/dots */}
                                <div className="carousel-indicators">
                                    <button
                                        type="button"
                                        data-bs-target="#front-page-carousel"
                                        data-bs-slide-to="0"
                                        className="active"
                                        style={{ backgroundColor: "black" }}
                                    ></button>
                                    <button
                                        type="button"
                                        data-bs-target="#front-page-carousel"
                                        data-bs-slide-to="1"
                                        style={{ backgroundColor: "black" }}
                                    ></button>
                                    <button
                                        type="button"
                                        data-bs-target="#front-page-carousel"
                                        data-bs-slide-to="2"
                                        style={{ backgroundColor: "black" }}
                                    ></button>
                                    <button
                                        type="button"
                                        data-bs-target="#front-page-carousel"
                                        data-bs-slide-to="3"
                                        style={{ backgroundColor: "black" }}
                                    ></button>
                                </div>
                            </div>
                            {/* End carousel */}
                        </div>

                        <div className="col-12 col-md-5">
                            {/* Call to action */}
                            <section className="p-3" id="cta">
                                <h5 className="display-4">Hello!</h5>
                                <p>
                                    Welcome to my creative space, I'm so excited you stopped by! My experiences as a mom, teacher, and author
                                    sparked the idea to create My Little World. Rediscovering the world through my kids's eyes, and seeing the
                                    exploration of my students are my constant reminders that there is wonder all around us, and became my
                                    inspiration.
                                </p>
                            </section>
                            {/* End call to action */}
                        </div>
                    </div>
                </div>

                <div className="row gx-lg-2 m-lg-1">
                    <section className="col-12 col-lg-4">
                        <div
                            className="p-3 rounded-3 mt-1 engage"
                            style={{ backgroundColor: "rgb(183, 145, 183)" }}
                        >
                            <h1 className="text-black">What is Happy Learning Online?</h1>
                            <p className="text-black">
                                Happy Learning Online is an online learning platform that offers a range of educational resources, courses,
                                and activities for children aged 2-12 years old. This platform makes learning fun and engaging, with a focus
                                on social-emotional learning, STEM education, and character development.
                            </p>
                        </div>
                    </section>

                    <section className="col-12 col-lg-4">
                        <div
                            className="p-3 rounded-3 mt-1 engage"
                            style={{ backgroundColor: "rgb(158, 198, 234)", height: "auto" }}
                        >
                            <h1 className="text-black">Key Features:</h1>
                            <p className="text-black">
                                Each child's learning journey is tailored to their individual needs, interests, and abilities. Engaging
                                games, puzzles, and interactive activities that make learning enjoyable and challenging. Emphasis on
                                developing important life skills such as empathy, self-awareness, and problem-solving. Science, Technology,
                                Engineering, and Math (STEM) education resources that promote critical thinking and creativity. Opportunities
                                for children to interact with peers from around the world, fostering social skills and global citizenship.
                                Parents can monitor their child's progress and receive regular updates on their child's learning journey.
                            </p>
                        </div>
                    </section>

                    <section className="col-12 col-lg-4">
                        <div className="p-3 rounded-3 mt-1 engage" style={{ height: "auto" }} id="gradColor1">
                            <h1 className="text-black">Benefits:</h1>
                            <div className="text-black">
                                <ul>
                                    <li>Flexibility: Accessible from anywhere, at any time, making it perfect for busy families.</li>
                                    <li>Personalized Learning: Tailored to each child's unique needs and abilities.</li>
                                    <li>Engaging Content: Fun and interactive activities that keep children motivated and engaged.</li>
                                    <li>
                                        Builds Confidence: Develops important life skills and confidence in children as they learn and grow.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>
                </div>
            </div>


        </>
    );
}

export default HomePage;