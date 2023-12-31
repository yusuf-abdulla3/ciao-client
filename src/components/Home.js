import Carousel from 'react-bootstrap/Carousel'

export default function Home() {
  
  
  return (
    <>
     <div className="homebg">
      <Carousel fade>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100"
      src="images/main1.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h5>Welcome to Ciao</h5>
      <p>A virtual greeting platform that enables to send felicitations</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="images/main2.png"
      alt="Second slide"
    />
    <Carousel.Caption>
      <h5>Want to celebrate your teammate success ?</h5>
      <p>Ciao is a great platform to do that...</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="images/main3.png"
      alt="Third slide"
    />
    <Carousel.Caption>
      <h5>Want to send greeting to your loved ones ??</h5>
      <p>You're at the perfect spot !!</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    
    <div>
      <div className="thumb">
        <a href={process.env.REACT_APP_CLIENT_URL + '/createcard'}>
          <img src="images/thankyou.jpg" alt="thank you"/>
        </a>
      </div>
      
      <div className="thumb">
        <a href={process.env.REACT_APP_CLIENT_URL + '/createcard'}>
          <img src="images/con1.png" alt="goodluck"/>
        </a>
      </div>
      <div className="thumb">
      <a href={process.env.REACT_APP_CLIENT_URL + '/createcard'}>
        <img src="images/luck.jpg" alt="goodluck"/>
      </a>
      </div>
      <div className="thumb">
        <a href={process.env.REACT_APP_CLIENT_URL + '/createcard'}>
          <img src="images/getwellsoon.png" alt="get well soon"/>
        </a>
      </div>
    </div>
    <br/>
    <br/>
    <div className="howitworks">
      <div className="ciaocss">
        <img src="images/c1.jpeg" alt="how it works"/>
      </div>
      <div className="howtitle">
      <h4>How Ciao Works</h4>
      <ol>
        <li><span>Choose a recipient to celebrate with the group greeting card.</span></li>
        <li><span>Get creative. Attach messages, photos, GIFs or videos to the recipient's cards.</span></li>  
        <li><span>Invite others to add their contributions and watch the virtual group card grow.</span></li>
        <li><span>After contribution send the card to the receipent via email.</span></li>
      </ol>  
      </div>
    </div>
    <div className="footer">
      <p>&copy; 2021 Copy Rights Reserved by Akhila, Shakirat and Yusuf.  </p>
    </div>
    </div> 
    </>
      
  );
}