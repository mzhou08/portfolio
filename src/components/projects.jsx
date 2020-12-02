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
											<h3><a href="http://www.bioinformaticspipeline.net:8000">Bioinf-PHP: Bioinformatics Pipeline for Protein Homology and Phylogeny</a></h3>
											<span>I created a bioinformatics pipeline, BioInf-PHP, to 
												automate the gene/protein/DNA sequence analysis process. My first-author paper was published by the <a href="http://www.thecloudcomputing.org/2020/" target="_blank" rel="noopener noreferrer">
													CLOUD 2020 International Conference on Cloud Computing</a>, where I also presented my research. My paper can be found 
													<a href="https://drive.google.com/file/d/1t-pJpMZM1Hx2YxAmRkxXHsXeZxSrahny/view?usp=sharing"> here</a>.
											</span>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInRight">
								<div className="project" style={{backgroundImage: 'url(images/nquire.jpg)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="https://www.nquire.org/">nquire.org</a></h3>
											<span>See how many students were falling behind in math because they weren't asking questions,
												I created nquire. 
												<a href="https://www.nquire.org/" target="_blank" rel="noopener noreferrer"> nquire</a> is a website for
												students to ask all the math questions that they were too nervous to ask in class. I've also organized 20+ 
												colunteer tutors to help answer these questions.</span>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInTop">
								<div className="project" style={{backgroundImage: 'url(images/travis-ci.png)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="https://mzhou08.github.io/portfolio/">My Portfolio web site</a></h3>
											<span>This web site is built with <a href="https://nodejs.org/en/" target="_blank" rel="noopener noreferrer">Node.js</a> technology, automatically tested and deployed to Github pages with <a href="https://travis-ci.org/" target="_blank" rel="noopener noreferrer">Travis CI </a></span>
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
