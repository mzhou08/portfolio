import React, { Component } from 'react'

export default class Projects extends Component {
  render() {
    return (
      <div>
				<section className="colorlib-work" data-section="projects">
					<div className="colorlib-narrow-content">
						<div className="row">
							<div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
								<span className="heading-meta">My Work</span>
								<h2 className="colorlib-heading animate-box">Recent Projects</h2>
							</div>
						</div>
						<div className="row">
							<div className="col-md-4 animate-box" data-animate-effect="fadeInLeft">
								<div className="project" style={{backgroundImage: 'url(images/img-1.jpg)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="work.html">Bioinf-PHP: Bioinformatics Pipeline for Protein Homology and Phylogeny</a></h3>
											<span>Website</span>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInRight">
								<div className="project" style={{backgroundImage: 'url(images/nquire.jpeg)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="work.html">nquire.org</a></h3>
											<span>nquire is a website for <a href="https://docs.google.com/presentation/d/11JF-Shrd-V7SOnprIIJcjHE7XnbATnwvll9Ztp2JLKg/edit" target="_blank"> Skyline Math Club activities</a> and Q/A site for students and volunteers to ask Math-relatetd uestions</span>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInTop">
								<div className="project" style={{backgroundImage: 'url(images/portfolio.jpeg)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="work.html">My Portfolio web site</a></h3>
											<span>This web site is built with <a href="https://nodejs.org/en/" target="_blank">Node.js</a> technology, automatically tested and deployed to Github pages with <a href="https://travis-ci.org/" href="_blank">Travis CI </a></span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
      </div>
    )
  }
}
