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
							<iframe title='music1'
								width="560" 
								height="315" 
								src="https://www.youtube.com/embed/N27Xowpde5g" 
								frameborder="0" 
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
								allowfullscreen>
							</iframe>
						</div>
					</div>
					<div className="row">
						<div className="col-md-4 animate-box" data-animate-effect="fadeInTop">
							<iframe title='music2'
								width="560" 
								height="315" 
								src="https://www.youtube.com/embed/w0F7J8L5kog" 
								frameborder="0" 
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
								allowfullscreen>
							</iframe>
					</div>
					<div className="row">
						</div>
						<div className="col-md-4 animate-box" data-animate-effect="fadeInTop">
							<iframe title='halftime'
								width="560" 
								height="315" 
								src="https://www.youtube.com/embed/XI27pWVG-qk" 
								frameborder="0" 
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
								allowfullscreen>
							</iframe>
						</div>
					</div>
				</div>
			</section>
      </div>
    )
  }
}
