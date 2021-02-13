import React, { Component } from 'react'

export default class Arts extends Component {
  render() {
    return (
      <div>
				<section className="colorlib-work" data-section="arts">
					<div className="colorlib-narrow-content">
						<div className="row">
							<div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
								<span className="heading-meta">My Artwork</span>
								<h2 className="colorlib-heading animate-box">Recent Artwork: Mouse Over for a Description!</h2>
							</div>
						</div>
						<div className="row">
							<div className="col-md-4 animate-box" data-animate-effect="fadeInRight">
								<div className="project" style={{backgroundImage: 'url(images/hugs.jpeg)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="work.html">Embrace: Graphite</a></h3>
											<span>This drawing recentely received a Scholastic Art &amp; Writing Awards Honorable Mention. 
											My work, Embrace, celebrates friendship across ethnicities and cultures. The greyscale drawing further emphasizes 
											that we are not divided by color, but rather united and empowered by our different shades.</span>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInLeft">
								<div className="project" style={{backgroundImage: 'url(images/Michael-Zhou_International_Award.jpg)'}}>
									<div className="desc">
										<div className="con">
											<h3>Handicap-Friendly Cleaning Car: Watercolor + Acrylic Paint</h3>
											<span>Here is the <a target = "new"  href="https://tfsinthecommunity.com/michael-zhou/">press coverage link</a>. 
											For the 9th Toyota Dream Car Art Contest 2015, more than 875,000 entries were submitted from over 81 countries around the world. 
											From those submissions, the top 700-plus artworks were forwarded to Japan for the World Contest judging. 
											In the U.S. contest, I earned the Gold Award for youth, ages 8-11 and was ultimately selected as one of the World Winners, 
											later also winning Best Finalist for my age category globally.</span>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInTop">
								<div className="project" style={{backgroundImage: 'url(images/lion.jpg)'}}>
									<div className="desc">
										<div className="con">
											<h3>Lion: Oil Pastel</h3>
											<span>A lion portrait.</span>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-md-4 animate-box" data-animate-effect="fadeInRight">
								<div className="project" style={{backgroundImage: 'url(images/flight.jpg)'}}>
									<div className="desc">
										<div className="con">
											<h3>Flight: Color Pencil and Graphite</h3>
											<span>This drawing of a hyacinth macaw is one of my favorite works with mixed media. I used colored pencil to draw the vibrant body, 
												and detailed the wings with graphite. The minimalistic approach to thisdrawing is supposed to show a blank canvas, with the macaw 
												being the painter.</span>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInRight">
								<div className="project" style={{backgroundImage: 'url(images/cupid.jpg)'}}>
									<div className="desc">
										<div className="con">
											<h3>Lost in Thought: Graphite</h3>
											<span>Done as a graphite study, the portrait is of a small statue where anangelic boy sits atop a seashell.</span>
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
