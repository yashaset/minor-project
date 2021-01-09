import React from 'react';
import './Home.css';
import image from './img/conf2.jpg';
import small from './img/small-eclipse.svg';
import medium from './img/mid-eclipse.svg';
import big from './img/big-eclipse.svg';
class Home extends React.Component{
    render(){
        return(
  
      <div>
      <main>
			<section class="presentation">
				<div class="introduction">
					<div class="intro-text">
						<h1>Online Paper Conference</h1>
						<p>
							 now organize a Conference with just a few clicks<br/>
                Click Organize NOW to create a Conference.
						</p>
					</div>
					<div class="cta">
						<button class="cta-select">Meetings</button>
						<button class="cta-add">Organize NOW</button>
					</div>
				</div>
				<div class="cover">
					<img src={image} alt="matebook" />
				</div>
          <img class="big-circle" src={big} alt="" />
        <img class="medium-circle" src={medium} alt="" />
        <img class="small-circle" src={small} alt="" />
			</section>	
		</main>
        <div className="gear"><h2>Our Features</h2></div>
        <section className="services">
        
        <div class="cen">
        
        <div class="service">
            
          <i class="fas fa-anchor"></i>
          <h2>Video Share</h2>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        </div>

        <div class="service">
          <i class="fab fa-android"></i>
          <h2>Screen Share</h2>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        </div>

        <div class="service">
          <i class="fab fa-angellist"></i>
          <h2>Organize Meetings</h2>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        </div>

        <div class="service">
          <i class="fas fa-apple-alt"></i>
          <h2>Participate</h2>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        </div>

        <div class="service">
          <i class="fas fa-archway"></i>
          <h2>Link to room</h2>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        </div>

        <div class="service">
          <i class="far fa-angry"></i>
          <h2>Paper upload</h2>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        </div>
      </div>
        </section>
        <div className="gear"><h2>Technologies</h2></div>
        <section className="services">
        <div class="cen">
        
        <div class="service">
            
          <i class="fas fa-anchor"></i>
          <h2>React</h2>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        </div>

        <div class="service">
          <i class="fab fa-android"></i>
          <h2>Node</h2>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        </div>

        <div class="service">
          <i class="fab fa-angellist"></i>
          <h2>Express.js</h2>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        </div>

        <div class="service">
          <i class="fas fa-apple-alt"></i>
          <h2>WEBRTC</h2>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        </div>

        <div class="service">
          <i class="fas fa-archway"></i>
          <h2>REDUX</h2>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        </div>

        <div class="service">
          <i class="far fa-angry"></i>
          <h2>MONGODB</h2>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        </div>
      </div>
        </section>
        <footer>
        <div className="heading-item">
            <div className="heading"><p>Podium.com</p></div>
        
            <div className="heading-item right">
            <div className="primary"><p>Podium.com</p></div>
            </div>
        </div>
        
        </footer>
    </div>
        );
    }
}
export default Home;