import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-12">
                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                <div className="col-md-12">
                    <div className="about-desc">
                    <span className="heading-meta">About Me</span>
                    <h2 className="colorlib-heading">Who Am I?</h2>
                    <p>Hi, welcome to my site! I’m Michael Zhou, a high school senior at Ann Arbor Skyline High School in Michigan. 
                        Here, I’ve documented some of the things I’ve done, from bioinformatics research to art to music. I hope this 
                        site will help you learn a little bit more about me!</p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
        <section className="colorlib-about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">What do I do?</span>
                <h2 className="colorlib-heading">Here are some of my skills:</h2>
            </div>
            </div>
            <div className="row row-pt-md">
             <div className="col-md-12 text-center animate-box">
                <div className="services color-2">
                <span className="icon">
                    <i className="icon-bulb" />
                </span>
                <div className="desc">
                    <h3>Leadership</h3>
                    <p>I am the president of Ann Arbor Math Olympiad Co-Op, a volunteer-run math education nonprofit
                        with over 300 members in all. I manage a team of 25+ high school volunteer student teachers.
                        In school, I am one of 2 drum majors for our 100-member matching band, as well as being Vice President of DECA, the schools biggest club (>120 members).
                        I am also president of Student Government and founder of Math Club and Economics Club.
                    </p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-1">
                <span className="icon">
                    <i className="icon-bulb" />
                </span>
                <div className="desc">
                    <h3>Math</h3>
                    <p>Math is one of my longtime interests, especially the problem-solving aspect. 
                        I am a four-time American Invitational Math Exam (AIME) Qualifier and finished #27 in the 
                        2019 Michigan Mathematics Prize Contest. Competing isn't everything though, as I also love 
                        teaching and creating new learning opportunities.</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-5">
                <span className="icon">
                    <i className="icon-data" />
                </span>
                <div className="desc">
                    <h3>Programming</h3>
                    <p>I taught myself Python, NodeJS, Git. I have also made projects with Amazon Web Services and Docker.
                         Recently, I took up an interest in competitive programming and I am currently in the 
                         USA Computing Olympiad Siler Division. Here is my 
                        <a target = "new"  href="https://github.com/mzhou08"> Github account:</a></p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-4">
                <span className="icon">
                    <i className="icon-layers2" />
                </span>
                <div className="desc">
                    <h3>Art</h3>
                    <p>I have been drawing since elementary school. My preferred medium is graphite pencil, but I also enjoy graphic design, too.
                        My art-related hobbies include designing and journaling new venture ideas, car design, logo design, and infographic design.
                    </p>
                </div>
                </div>
            </div>
            {
           
            /*
            <div className="col-md-4 text-center animate-box">
                <div className="services color-6">
                <span className="icon">
                    <i className="icon-phone3" />
                </span>
                <div className="desc">
                    <h3>Digital Marketing</h3>
                    <p>I use Instagram eight hours a day :) </p>
                </div>
                </div>
            </div>
            */}
            </div>
        </div>
        </section>
      </div>
    )
  }
}
