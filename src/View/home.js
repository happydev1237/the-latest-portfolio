import React, { Component } from "react";
import Navba from './navbar';
import './bulma.css';
import './imagehover.min.css';
import cstyles from './home.module.css';
import leaf1 from '../assets/plato.svg';
import leaf2 from '../assets/plate.svg';
import hlogo from '../assets/hexlogo.svg';
import me from '../assets/me.png';
import code from '../assets/code.svg';
import ReactCompareImage from 'react-compare-image';
import emailjs from 'emailjs-com';
import ReCAPTCHA from "react-google-recaptcha";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faArrowsAltH, faRocket } from '@fortawesome/free-solid-svg-icons'
import { faGithubAlt, faDeviantart, faDribbble } from '@fortawesome/free-brands-svg-icons'
import ReactGA from 'react-ga';


ReactGA.initialize('UA-145139004-1', {
  debug: false,
  titleCase: false,
  gaOptions: {
    userId: 145139004
  }
});

ReactGA.pageview(window.location.pathname + window.location.search);


export default class Home extends Component {
  state = {
    capvalue: null,
    sendinfo: "Send Message",
    butStyle: `${cstyles.custombtn}`,
  };


  setCaptcha = (value) => {
    this.setState({
      capvalue: value,
      sendinfo: "Send Message",
      butStyle: `${cstyles.custombtn}`
    });
  }

  showIt = (elementId) => {
    var el = document.getElementById(elementId);
    el.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
  }

  sendEmail = (e) => {
    e.preventDefault();
    if (this.state.capvalue !== null && this.state.capvalue !== "sent") {
      this.setState({
        sendinfo: "Sending Message"
      });

      emailjs.sendForm('gmail', 'contact', e.target, '')
        .then((result) => {
          this.setState({
            sendinfo: "Message Sent Successfully",
            capvalue: "sent",
            butStyle: `${cstyles.custombtnS}`
          });
        }, (error) => {
          console.log(error.text);
          if (this.state.capvalue !== "sent") {
            this.setState({
              sendinfo: "Sending Failed!",
              butStyle: `${cstyles.custombtnW}`
            });
          }
        })
    }
    else {
      if (this.state.capvalue !== "sent") {
        this.setState({
          sendinfo: "Please Verify Captcha",
          butStyle: `${cstyles.custombtnW}`
        });
      }
    }
  }


  render() {

    this.props.history.listen((location) => {
      window.ga('set', 'page', location.pathname + location.search);
      window.ga('send', 'pageview');
    });

    return (
      <div style={{ overflow: 'Hidden' }}>
        <meta charSet="utf-8"></meta>
        <link href="https://fonts.googleapis.com/css?family=Comfortaa:300,400,500,600,700|Nunito:200,300,400,400i,600,700&display=swap" rel="stylesheet"></link>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <meta name="description" content="Hello! I am Aziz Stark, An aspiring developer and designer." />
        <section className={`hero is-fullheight ${cstyles.svgg}`}>
          <Navba></Navba>
          <div className="hero-body" >
            <div className="container" style={{ marginLeft: '3vw' }}>
              <p id={cstyles.title} >
                 <br></br>
                I AM Alexander Davis.
                </p>
              <p className={cstyles.subheading} style={{fontFamily: 'serif'}}>An a frontend developer and designer.</p>
              <br />
              <button onClick={() => this.showIt('explore')} className="button" id={cstyles.custombtn}>Explore</button>
            </div>
            <div className={cstyles.cardss}>
              <img alt="logo" className={cstyles.floating} style={{ position: 'absolute', zIndex: 2, margin: 0 }} src={leaf1} />
              <img alt="logo" className={cstyles.rotatecenter} style={{ position: 'absolute', zIndex: 1, }} src={leaf2} />
            </div>
          </div>
        </section>

        {herobar('What I built?', 'Awesome stuff')}
        <section className={`hero is-fullheight ${cstyles.svgg}`} style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }} >
          <div id="portfolio" className="columns is-desktop" style={{ padding: 20, paddingBottom: 0 }}>
            <div className={`column ${cstyles.cluster}`}>
              {box("https://res.cloudinary.com/azizcloud/image/upload/v1590315235/portfolio/d5vfhxrpvitibwnu4fqs.jpg", "Cassiopeia CMS", "A bodacious, secure, headless content management system.", ["MongoDB", "Express JS", "React JS", "Node JS"], "https://github.com/happydev1237/CassiopeiaCMS")}
            </div>
            <div className={`column ${cstyles.cluster}`}>
              {box("https://res.cloudinary.com/azizcloud/image/upload/t_equla/v1590315236/portfolio/lxx99yyawhv5evn6mmpz.jpg", "Quiva - Fancy Text Generator", "A fancy text app for android for creating stylish text based on unicode characters and glyphs.", ["JavaScript", "React Native"], "https://galaxystore.samsung.com/detail/com.quiva")}
            </div>
            <div className={`column ${cstyles.cluster}`}>
              {box("https://res.cloudinary.com/azizcloud/image/upload/v1590315235/portfolio/pqecxwjuxinwmxak7tkw.jpg", "Material Requirement Processing", "A web-app for calculating the materials and components needed to manufacture a large number of products.", ["PHP", "Oracle", "Material UI"], "https://github.com/happydev1237/Material-Requirement-Processing")}
            </div>
          </div>
          <div className="columns is-desktop cluster" style={{ padding: 20, paddingTop: 0 }}>
            <div className={`column ${cstyles.cluster}`}>
              {box("https://res.cloudinary.com/azizcloud/image/upload/v1590315233/portfolio/htnl1q9chykaheksucew.jpg", "Stash", "A web-based cryptographic text hasher and encrypter.", ["JavaScript", "Svelte JS", "Node JS"], "https://github.com/happydev1237/cryptographic-hasher")}
            </div>
            <div className={`column ${cstyles.cluster}`}>
              {box("https://res.cloudinary.com/azizcloud/image/upload/v1590315235/portfolio/agncefcs92v7duq9xwfd.jpg", "Tech Zeal", "A website for the college symposium that was used by more than 1000 students to register for the events.", ["HTML", "JavaScript", "Firebase"], "https://gennext.web.app/")}
            </div>
            <div className={`column ${cstyles.cluster}`}>
              {box("https://res.cloudinary.com/azizcloud/image/upload/v1590315234/portfolio/u021xlqihtpanv8kckoy.jpg", "Foodie", "A front-end user interface for food ordering web-app with a smooth user experience.", ["JavaScript", "React JS"], "https://github.com/happydev1237/Food")}
            </div>
          </div>
        </section>


        {herobar('What I do?', 'Code and Design')}
        <section id="explore" className={`hero is-fullheight ${cstyles.svgg}`} style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }} >

          <div className="columns is-desktop" style={{ padding: '10%', paddingTop: '12vw' }}>
            <div className="column ">
              <p style={styles.ltext}>Clean & Optimized Code</p> <br />
              <h2 style={{ fontFamily: 'Nunito', fontWeight: 300, fontSize: "calc(12px + 0.8vh)", textAlign: 'justify' }}>Clean code reads like well-written prose. Clean code never obscures the designer’s intent but rather is full of crisp abstractions.</h2>
              <br />
              <h2 style={styles.stext}>JavaScript</h2>
              <progress style={{ height: 5, marginBottom: 10 }} className="progress is-small is-success" value="94" max="100"></progress>
              <h2 style={styles.stext}>Python</h2>
              <progress style={{ height: 5, marginBottom: 10 }} className="progress is-small is-success" value="88" max="100"></progress>
              <h2 style={styles.stext}>Java</h2>
              <progress style={{ height: 5 }} className="progress is-small is-success" value="82" max="100"></progress>
            </div>
            <div className="column is-half-desktop" style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
              <div className="container" style={{ width: '100%', display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
                <ReactCompareImage leftImage={code} rightImage={hlogo} handle={<FontAwesomeIcon icon={faArrowsAltH} style={{ backgroundColor: '#e6f2fb', color: "#45364E", borderRadius: 30, padding: 10, border: 0 }} size="3x" />} sliderLineColor={'#e6f2fb'} sliderLineWidth={8} sliderPositionPercentage={0.475} />      <br />
              </div>
            </div>
            <div className="column">
              <p style={styles.ltext}>Beautiful Design & Interface</p> <br />
              <h2 style={{ fontFamily: 'Nunito', fontWeight: 300, fontSize: "calc(12px + 0.8vh)", textAlign: 'justify' }}>I believe in simplicity, clarity and always loves minimalism. These facts allow me to create designs smoother than a baby’s bottom. </h2>
              <br />
              <h2 style={styles.stext}>Figma</h2>
              <progress style={{ height: 5, marginBottom: 10 }} className="progress is-small is-success" value="96" max="100"></progress>
              <h2 style={styles.stext}>Illustrator</h2>
              <progress style={{ height: 5, marginBottom: 10 }} className="progress is-small is-success" value="86" max="100"></progress>
              <h2 style={styles.stext}>Photoshop</h2>
              <progress style={{ height: 5 }} className="progress is-small is-success" value="92" max="100"></progress>
            </div>
          </div>
        </section>
        {herobar('Who am I?', "I'm Alex")}
        <section id="about" className={`hero is-fullheight ${cstyles.svgg}`} style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
          <div className="columns is-desktop" style={{ padding: '10%' }}>
            <div className="column  has-text-centered" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
              <img alt="AlexanderDavis" className={cstyles.rotatecenter} style={{ position: 'absolute', zIndex: 1, height: 450, marginBottom:100}} src={me} />
            </div>
            <div className="column is-three-fifths-desktop" style={{ fontFamily: 'nunito', paddingLeft: 0 }}>
              <h1 style={{ display: 'inline-block', fontSize: '2rem', color: 'rgb(28, 255, 189)', fontWeight: 500 }}>ME</h1>
              <div style={{ marginLeft: 15, display: 'inline-block', background: 'linear-gradient(91.18deg, rgb(28, 255, 189) -16.44%, rgba(46, 167, 255, 0) 107.71%)', borderRadius: 21, width: 'calc(100% - 4rem)', height: 6 }}></div>
              <div className="contents" style={{ fontSize: "calc(12px + 1vh)", fontWeight: 300, padding: 33, paddingLeft: 0, paddingRight: 0, textAlign: 'justify' }}>
                Hey! <span role="img" aria-label="wave">👋</span>I'm Alexader Davis, I love web and mobile app development and have developed a few websites and projects️. I'm also passionate about design <span role="img" aria-label="pallete">🎨</span>. I spend my free time listening to music <span role="img" aria-label="music">🎧</span>, playing video games and surfing the internet to explore the world.
              </div>
              <div className="email">
                Please send me meesage here <a href="https://mail.google.com/mail/u/0/#sent?compose=new" style={{color: "white", fontWeight: 800}}>Alexanderdavis0305@gmail.com</a>
              </div>
            </div>
          </div>
        </section>
        {herobar('Want to talk?', 'Contact me')}
        <section id="contact" className={`hero is-fullheight ${cstyles.svgg}`} style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
          <div className="columns is-desktop">
            <div className="column is-half-desktop has-text-left " style={{ fontFamily: 'Nunito', fontWeight: 500, margin: 'auto', color: '#ffffff', paddingRight: '10%', paddingLeft: '10%' }}>

              <form className="contact-form" onSubmit={this.sendEmail}>
                <div className="field">

                  <label>Name</label>
                  <div className="control">
                    <input className="input is-medium" name="user_name" type="text" style={styles.input} required />
                  </div>
                </div>

                <div className="field">
                  <label>Email</label>
                  <div className="control">
                    <input className="input is-medium" type="email" name="user_email" style={styles.input} required />
                  </div>
                </div>

                <div className="field">
                  <label >Message</label>
                  <div className="control">
                    <textarea className="textarea is-medium" name="message" style={styles.input} required></textarea>
                  </div>
                </div>
                <div className="control">
                  <button type="submit" value="Send" id={this.state.butStyle} className="button is-fullwidth has-text-weight-medium is-medium">{this.state.sendinfo}</button>
                </div>
              </form>
            </div>
          </div>
        </section>
        <footer className="footer" style={{ backgroundColor: '#152636', color: '#ffffff', padding: '2%' }}>
          <div className="columns">
            <div className="column has-text-centered">
              <p style={{ fontFamily: 'Nunito', fontWeight: 400, color: 'rgb(28, 255, 189)', fontSize: "calc(12px + 0.3vh)" }}>
                Content and Graphics © 2020 Alex
            </p>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}


//header component
function herobar(head, subhead) {
  return (<section className="hero is-primary">
    <div className="hero-body" style={{ backgroundColor: 'rgb(14, 35, 54)' }}>
      <div className="container">
        <h1 className={cstyles.subheading2} style={{ fontSize: 'calc(22px + 2.0vw)', fontWeight: 500 }}>
          {head}
        </h1>
        <h2 className={cstyles.subtitle} style={{ fontSize: 'calc(12px + 1.2vw)', fontFamily: 'Nunito', fontWeight: 300, color: 'rgb(28, 255, 189)' }}>
          {subhead}
        </h2>
      </div>
    </div>
  </section>)
}

function box(imageurl, title, subtitle, stack, link) {
  return (
    <div className="container" style={{ padding: 8, background: "#25364E", borderRadius: 6, height: '100%', display: 'flex', flexDirection: 'column' }} >
      <div className="imghvr-blur">
        <img alt="project" style={{ borderRadius: 4, objectFit: 'contain' }} src={imageurl} />
        <figcaption style={{ padding: 20, fontSize: 'calc(10px + 0.6vw)', fontFamily: 'nunito' }}>
          <a style={styles.bcolor} href={link} target="_blank" rel="noopener noreferrer" ><FontAwesomeIcon className={cstyles.iclick} icon={faRocket} size="2x" /></a>
        </figcaption>
      </div>
      <p style={{ color: "#1CFFBD", fontFamily: 'Nunito', fontWeight: 300, fontSize: "calc(12px + 0.8vh)", marginTop: 6 }}> {title} </p>
      <div style={{ borderTop: "1px dashed #109E75", marginTop: 6, marginBottom: 6 }}></div>
      <p style={{ color: "#E5F2FB", fontFamily: 'Nunito', fontWeight: 300, fontSize: "calc(0.8vh + 0.4vw * 2px)" }}>{subtitle}</p>

      <div style={{ height: '100%', display: 'flex' }}>
        <p style={{ alignSelf: 'flex-end', width: '100%', backgroundColor: "#A6B1C0", borderRadius: 4, marginTop: 6, color: "#131C2A", fontFamily: 'Nunito', fontWeight: 400, fontSize: "calc(9px + 0.8vh)", textAlign: 'justify', display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', flexWrap: 'wrap' }}>
          {stack.map((text, index) =>
            <span key={index}> {text} </span>
          )}
        </p>
      </div>
    </div>
  )
}


const styles = {
  input: { backgroundColor: '#0B1826', borderColor: '#E5F2FB', color: '#FFFFFF' },
  icon: { padding: 6 },
  bcolor: { color: 'rgb(28, 255, 189)', display: 'flex', alignItems: 'center', justifyContent: 'center' },
  stext: { fontFamily: 'Nunito', fontWeight: 400, textAlign: 'justify' },
  ltext: { fontFamily: 'Nunito', fontWeight: 500, color: '#e6f2fb', fontSize: "calc(1.8rem)" },
  flexcenter: { display: 'flex', justifyContent: 'center' }
}

