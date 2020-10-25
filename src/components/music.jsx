import React, { Component } from 'react'

export default class Music extends Component {
  render() {
    return (
      <div>
				<section className="colorlib-work" data-section="music">
					<div className="colorlib-narrow-content">
						<div className="row">
							<div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
								<span className="heading-meta">My Music</span>
								<h2 className="colorlib-heading animate-box">Recent Music Performance</h2>
							</div>
						</div>
						<div className="row">
							<div className="col-md-4 animate-box" data-animate-effect="fadeInRight">
								<div className="project" style={{backgroundImage: 'url(images/img-2.jpg)'}}>
									<div className="desc">
										<div className="con">
											<h3>
												<a href="https://www.saxophonealliance.org/conference-competitions.asp">
													2020 NASA Competitions
												</a>
											</h3>
											<span>Link to NASA submission</span>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInTop">
								<div className="project" style={{backgroundImage: 'url(images/marching_band.jpg)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="band.html">Marching Band</a></h3>
											<span>During my junior and senior years, I am the drum major of Skyline High School Marching Band. </span>
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
