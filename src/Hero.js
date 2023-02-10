import React from "react";
import "./styles.css";
import "./stylev2.css";
import "./custom.css";
import herowebp from "./assets/videos/Fireworks.webm";
import heromp from "./assets/videos/Fireworks.mp4";
import appstore from './assets/images/appstore.png'
import playstore from './assets/images/playstore.png'
import appscreenshot from './assets/images/appscreenshot.png'
export default function Hero() {
  return (
    <div>
      <>
        {/* <div className="top-banner-section wf-section">
         <div
            // data-poster-url="https://assets.website-files.com/636e23ecf118df495e7a2aca/6384f5628f6ff67f3b33a32d_181818-poster-00001.jpg"
            data-video-urls={herowebp}
            data-autoplay="true"
            data-loop="true"
            data-wf-ignore="true"
            className="background-video home-3 w-background-video w-background-video-atom"
          >
            <video
              id="12f3846a-c722-4d2e-501f-c59b8940beee-video"
              autoPlay=""
              loop=""
              style={
                {
                  // backgroundImage:
                  //   'url("https://assets.website-files.com/636e23ecf118df495e7a2aca/6384f5628f6ff67f3b33a32d_181818-poster-00001.jpg")',
                }
              }
              playsInline=""
              data-wf-ignore="true"
              data-object-fit="cover"
            >
              <source src={heromp} data-wf-ignore="true" />
              <source src={herowebp} data-wf-ignore="true" />
            </video>
            <p
              data-w-id="1c9cda6e-3134-5f79-77cb-35e762ae8c71"
              style={{ opacity: 0 }}
              className="max-width-580"
            />
            <div>
              <img
                className="Vitopia21"
                src="https://i.ibb.co/M7JKbgz/vitopia-white.png"
                alt="Vitpoia image"
              />
            </div>
            <div
              data-w-id="207116ee-d667-c943-61b4-25b21a5e4272"
              style={{ opacity: 0 }}
              className="button-wrapper"
            ></div>
            <a href="/contact-us" className="primary-button w-button">
              Explore Now
            </a>
          </div> 
          
          
        </div> */}
        <div className="top-banner-section wf-section">
          <div
            data-poster-url="https://i.ibb.co/N3mvRPn/Fireworks-img.png"
            data-video-urls={heromp}
            data-autoplay="true"
            data-loop="true"
            data-wf-ignore="true"
            className="background-video home-3 w-background-video w-background-video-atom"
          >
            <video
              id="12f3846a-c722-4d2e-501f-c59b8940beee-video"
              autoPlay
              loop
              style={{
                backgroundImage:
                  'url("https://i.ibb.co/N3mvRPn/Fireworks-img.png")',
              }}
              muted
              playsInline
              data-wf-ignore="true"
              data-object-fit="cover"
            >
              <source src={heromp} data-wf-ignore="true" />
              <source src={herowebp} data-wf-ignore="true" />
            </video>
            <p
              data-w-id="1c9cda6e-3134-5f79-77cb-35e762ae8c71"
              style={{ opacity: 0 }}
              className="max-width-580"
            />
            <div>
              <img
                className="Vitopia21"
                src="https://i.ibb.co/M7JKbgz/vitopia-white.png"
                alt="Vitpoia image"
              />
            </div>
            <a href="#SECTION-EXPLORE">
              <a href="/contact-us" className="primary-button w-button">
                Explore Now
              </a>
            </a>
          </div>

          <div
            data-w-id="207116ee-d667-c943-61b4-25b21a5e4272"
            style={{ opacity: 0 }}
            className="button-wrapper"
          ></div>
        </div>
        <div className="divider" />
        <div className="loop-section wf-section">
          <div className="base-container align-left w-container">
            <div
              data-w-id="7ec9c576-eb64-d0a7-d052-094a080c1486"
              className="overflow-hidden-container"
            >
              <div
                data-w-id="7ec9c576-eb64-d0a7-d052-094a080c1487"
                className="logo-loop-wrapper"
              ></div>
            </div>
          </div>
        </div>
        {/* <div class="section wf-section">
  <div class="base-container w-container">
      <div data-w-id="b03bb9b9-9103-77e5-fb61-c375ec824170" style="opacity:0" class="section-title-wrapper">
          <h3>About Vitopia</h3><a href="/works-3" class="link-with-icon">View More<span class="link-arrow-icon"> </span></a></div>
      <div class="home-3-latest-projects-wrapper">
          <div class="w-layout-grid e-1-background-videos home-3">
              <div data-poster-url="https://assets.website-files.com/636e23ecf118df495e7a2aca/6389e84badcfdbd148469028_pexels-ron-lach-10669343 (online-video-cuttercom)-poster-00001.jpg" data-video-urls="https://assets.website-files.com/636e23ecf118df495e7a2aca/6389e84badcfdbd148469028_pexels-ron-lach-10669343 (online-video-cuttercom)-transcode.mp4,https://assets.website-files.com/636e23ecf118df495e7a2aca/6389e84badcfdbd148469028_pexels-ron-lach-10669343 (online-video-cuttercom)-transcode.webm"
                  data-autoplay="true" data-loop="true" data-wf-ignore="true" id="w-node-cb2bed27-a200-0603-8d53-2dc442e557d8-05ad19d8" class="latest-works-video-item w-background-video w-background-video-atom"><video id="cb2bed27-a200-0603-8d53-2dc442e557d8-video" autoplay="" loop="" style="background-image:url(&quot;https://assets.website-files.com/636e23ecf118df495e7a2aca/6389e84badcfdbd148469028_pexels-ron-lach-10669343 (online-video-cuttercom)-poster-00001.jpg&quot;)"
                      muted="" playsinline="" data-wf-ignore="true" data-object-fit="cover"><source src="https://assets.website-files.com/636e23ecf118df495e7a2aca/6389e84badcfdbd148469028_pexels-ron-lach-10669343 (online-video-cuttercom)-transcode.mp4" data-wf-ignore="true"/><source src="https://assets.website-files.com/636e23ecf118df495e7a2aca/6389e84badcfdbd148469028_pexels-ron-lach-10669343 (online-video-cuttercom)-transcode.webm" data-wf-ignore="true"/></video></div>
              <div
                  data-poster-url="https://assets.website-files.com/636e23ecf118df495e7a2aca/6389e872ac476c9eb74d39f9_production ID_3818213 (online-video-cuttercom)-poster-00001.jpg" data-video-urls="https://assets.website-files.com/636e23ecf118df495e7a2aca/6389e872ac476c9eb74d39f9_production ID_3818213 (online-video-cuttercom)-transcode.mp4,https://assets.website-files.com/636e23ecf118df495e7a2aca/6389e872ac476c9eb74d39f9_production ID_3818213 (online-video-cuttercom)-transcode.webm"
                  data-autoplay="true" data-loop="true" data-wf-ignore="true" id="w-node-cb2bed27-a200-0603-8d53-2dc442e557d9-05ad19d8" class="latest-works-video-item w-background-video w-background-video-atom"><video id="cb2bed27-a200-0603-8d53-2dc442e557d9-video" autoplay="" loop="" style="background-image:url(&quot;https://assets.website-files.com/636e23ecf118df495e7a2aca/6389e872ac476c9eb74d39f9_production ID_3818213 (online-video-cuttercom)-poster-00001.jpg&quot;)"
                      muted="" playsinline="" data-wf-ignore="true" data-object-fit="cover"><source src="https://assets.website-files.com/636e23ecf118df495e7a2aca/6389e872ac476c9eb74d39f9_production ID_3818213 (online-video-cuttercom)-transcode.mp4" data-wf-ignore="true"/><source src="https://assets.website-files.com/636e23ecf118df495e7a2aca/6389e872ac476c9eb74d39f9_production ID_3818213 (online-video-cuttercom)-transcode.webm" data-wf-ignore="true"/></video></div>
          <div
              data-poster-url="https://assets.website-files.com/636e23ecf118df495e7a2aca/6389e8c12083d1c3be6afa59_1333333 (2)-poster-00001.jpg" data-video-urls="https://assets.website-files.com/636e23ecf118df495e7a2aca/6389e8c12083d1c3be6afa59_1333333 (2)-transcode.mp4,https://assets.website-files.com/636e23ecf118df495e7a2aca/6389e8c12083d1c3be6afa59_1333333 (2)-transcode.webm"
              data-autoplay="true" data-loop="true" data-wf-ignore="true" id="w-node-cb2bed27-a200-0603-8d53-2dc442e557da-05ad19d8" class="latest-works-video-item w-background-video w-background-video-atom"><video id="cb2bed27-a200-0603-8d53-2dc442e557da-video" autoplay="" loop="" style="background-image:url(&quot;https://assets.website-files.com/636e23ecf118df495e7a2aca/6389e8c12083d1c3be6afa59_1333333 (2)-poster-00001.jpg&quot;)" muted=""
                  playsinline="" data-wf-ignore="true" data-object-fit="cover"><source src="https://assets.website-files.com/636e23ecf118df495e7a2aca/6389e8c12083d1c3be6afa59_1333333 (2)-transcode.mp4" data-wf-ignore="true"/><source src="https://assets.website-files.com/636e23ecf118df495e7a2aca/6389e8c12083d1c3be6afa59_1333333 (2)-transcode.webm" data-wf-ignore="true"/></video></div>
      <div
          data-poster-url="https://assets.website-files.com/636e23ecf118df495e7a2aca/6389e8a28f2fdf3531a58549_pexels-ron-lach-8089122 (online-video-cuttercom)-poster-00001.jpg" data-video-urls="https://assets.website-files.com/636e23ecf118df495e7a2aca/6389e8a28f2fdf3531a58549_pexels-ron-lach-8089122 (online-video-cuttercom)-transcode.mp4,https://assets.website-files.com/636e23ecf118df495e7a2aca/6389e8a28f2fdf3531a58549_pexels-ron-lach-8089122 (online-video-cuttercom)-transcode.webm"
          data-autoplay="true" data-loop="true" data-wf-ignore="true" id="w-node-cb2bed27-a200-0603-8d53-2dc442e557db-05ad19d8" class="latest-works-video-item w-background-video w-background-video-atom"><video id="cb2bed27-a200-0603-8d53-2dc442e557db-video" autoplay="" loop="" style="background-image:url(&quot;https://assets.website-files.com/636e23ecf118df495e7a2aca/6389e8a28f2fdf3531a58549_pexels-ron-lach-8089122 (online-video-cuttercom)-poster-00001.jpg&quot;)"
              muted="" playsinline="" data-wf-ignore="true" data-object-fit="cover"><source src="https://assets.website-files.com/636e23ecf118df495e7a2aca/6389e8a28f2fdf3531a58549_pexels-ron-lach-8089122 (online-video-cuttercom)-transcode.mp4" data-wf-ignore="true"/><source src="https://assets.website-files.com/636e23ecf118df495e7a2aca/6389e8a28f2fdf3531a58549_pexels-ron-lach-8089122 (online-video-cuttercom)-transcode.webm" data-wf-ignore="true"/></video></div>
    </div>
    <div class="home-1-latest-works-collection w-dyn-list">
  <div role="list" class="home-1-latest-works-list home-3 w-dyn-items">
      <div role="listitem" class="home-3-latest-works-item w-dyn-item"><a href="/works/martimaz-fachion" class="home-projects-overlay w-inline-block"></a>
          <div class="project-title-wrapper">
              <a href="/works/martimaz-fachion" class="projects-1-latest-works-wrap w-inline-block">
                  <h4 class="projects-name">Martinaz Fachion</h4>
              </a>
          </div>
      </div>
      <div role="listitem" class="home-3-latest-works-item w-dyn-item"><a href="/works/church" class="home-projects-overlay w-inline-block"></a>
          <div class="project-title-wrapper">
              <a href="/works/church" class="projects-1-latest-works-wrap w-inline-block">
                  <h4 class="projects-name">Church</h4>
              </a>
          </div>
      </div>
      <div role="listitem" class="home-3-latest-works-item w-dyn-item"><a href="/works/rancho-presentation" class="home-projects-overlay w-inline-block"></a>
          <div
              class="project-title-wrapper">
              <a href="/works/rancho-presentation" class="projects-1-latest-works-wrap w-inline-block">
                  <h4 class="projects-name">Rancho Presentation</h4>
              </a>
      </div>
  </div>
  <div role="listitem" class="home-3-latest-works-item w-dyn-item"><a href="/works/saloni-production" class="home-projects-overlay w-inline-block"></a>
      <div class="project-title-wrapper">
          <a href="/works/saloni-production" class="projects-1-latest-works-wrap w-inline-block">
              <h4 class="projects-name">Saloni Production</h4>
          </a>
      </div>
  </div>
    </div>
    </div>
    </div>
    </div>
    </div> */}
        <div className="section wf-section">
          <div className="base-container w-container">
            <div className="w-dyn-list">
              <div
                role="list"
                className="our-clients-names-wrapper w-dyn-items"
              >
                <div
                  data-w-id="50dbf892-e80d-880a-ca7d-bfc6bb2f89ba"
                  style={{ opacity: 0 }}
                  role="listitem"
                  className="w-dyn-item"
                ></div>
                <a href="/works-categories/visual" className="w-inline-block">
                  <div
                    id="SECTION-EXPLORE"
                    className=" extra-bold-text hover-animation"
                  >
                    Events
                  </div>
                </a>
                <div
                  data-w-id="50dbf892-e80d-880a-ca7d-bfc6bb2f89ba"
                  style={{ opacity: 0 }}
                  role="listitem"
                  className="w-dyn-item"
                ></div>
                <a
                  href="/works-categories/animation"
                  className="w-inline-block"
                >
                  <div className="extra-bold-text hover-animation">
                    Pro-Show
                  </div>
                </a>
                <div
                  data-w-id="50dbf892-e80d-880a-ca7d-bfc6bb2f89ba"
                  style={{ opacity: 0 }}
                  role="listitem"
                  className="w-dyn-item"
                ></div>
                <a href="/works-categories/colors" className="w-inline-block">
                  <div className="extra-bold-text hover-animation">Venues</div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div id="SECTION-ABOUT" className="section wf-section">
          <div className="base-container w-container">
            <div className="video-info-content-wrapper">
              <div className="video-info-block-wrapper">
                {/* <div data-w-id="7b8cdea4-e2ee-261f-5d63-07e80b4d0850" style="opacity:0" class="home-video-player home-3"><img src="https://assets.website-files.com/636e23ecf118df495e7a2aca/637f5a0e5c6c040ec2493638_Rectangle%208.webp" loading="lazy" sizes="(max-width: 479px) 100vw, (max-width: 767px) 96vw, (max-width: 991px) 97vw, (max-width: 1279px) 49vw, 570px"
                  srcset="https://assets.website-files.com/636e23ecf118df495e7a2aca/637f5a0e5c6c040ec2493638_Rectangle%208-p-500.webp 500w, https://assets.website-files.com/636e23ecf118df495e7a2aca/637f5a0e5c6c040ec2493638_Rectangle%208-p-800.webp 800w, https://assets.website-files.com/636e23ecf118df495e7a2aca/637f5a0e5c6c040ec2493638_Rectangle%208-p-1080.webp 1080w, https://assets.website-files.com/636e23ecf118df495e7a2aca/637f5a0e5c6c040ec2493638_Rectangle%208.webp 1170w"
                  alt="" class="video-player-image home-3" /> */}
              </div>
            </div>

            <h3 className="about-head">About Vitopia</h3>
            <br></br>

            <p className="about-des">
              VITOPIA is the annual international cultural and sports festival
              conducted by VIT - AP University as a celebration of its endless
              enthusiasm towards various sport and art forms. VITOPIA 2023 is
              the fourth edition of this extravaganza of culture and sports,
              which is to be conducted on 4th and 5th of March 2023. The
              devotion and urge towards this event among the student population
              across the country is the distinguishing factor of VITOPIA from
              other cultural fests. VITOPIA 2023 brings eminent personalities
              including one of India’s most successful sportspersons, Ms. P V
              Sindhu, established musician Mr. Devi Sri Prasad (DSP), acclaimed
              film Director Mr. Narendra Nath, Stand up comedian Rajasekhar
              Mamidanna , as well as renowned music bands such as Indian Ocean
              and Chemmen , to the university.
            </p>
          </div>
        </div>
        {/* <div id="SECTION-SCHEDULE" class="Schedule1">
  <h3>Schedule</h3><br>
   
    </div> */}
        <div id="SECTION-COORDI" className="base-container w-container">
          <div className="video-info-content-wrapper">
            <div className="video-info-block-wrapper">
              <h3
                data-w-id="db319d20-7649-22f9-2eac-83d178790800"
                style={{ opacity: 0 }}
              />
              <h3 className="vit-team">Patrons</h3>
              <div>
                <div>
                  <div className="grid-item">
                    <div class="mention-card ">
                      <img
                        src="https://vitap.ac.in/wp-content/uploads/2020/12/Viswanthan-Sir.jpg"
                        alt="mention-card"
                      />
                      <h6>Dr. G. Viswanathan</h6>
                    </div>
                  </div>
                  <div className="grid-container">
                    
              </div>
              <div class='Co-patrons-body'>
              <div class="Co-Patrons-wrapper">
              <h3 class="vit-team">Co-Patrons</h3>
              </div>
              <div class="grid-container">
              <div className="grid-item">
                      <div class="mention-card">
                        <img
                          src="https://vitap.ac.in/wp-content/uploads/2020/12/Sankar-Sir.jpg"
                          alt="mention-card"
                        />
                        <h6>Dr.Sankar-Viswanathan</h6>                  
                      </div>
                    </div>
                    <div className="grid-item">
                      <div class="mention-card">
                        <img
                          src="https://vitap.ac.in/wp-content/uploads/2018/01/Sekhar-Sir-Resized.jpg"
                          alt="mention-card"
                        />
                        <h6>Dr. Sekar Viswanathan</h6>
                      </div>
                    </div>
                    <div className="grid-item">
                      <div class="mention-card">
                        <img
                          src="https://vitap.ac.in/wp-content/uploads/2020/12/GV-Selvam-Sir.jpg"
                          alt="mention-card"
                        />
                        <h6>Mr.G. V. Selvam</h6>
                      </div>
                    </div>

              <div className="grid-item">
                      <div class="mention-card">
                        <img
                          src="https://vitap.ac.in/wp-content/uploads/2020/11/kottareddy.jpg"
                          alt="mention-card"
                        />
                        <h6>Dr. S. V. Kota Reddy</h6>
                      </div>
                    </div>
                    <div className="grid-item">
                      <div class="mention-card">
                        <img
                          src="https://vitap.ac.in/wp-content/uploads/2019/06/Dr.-JAGADISH-CHANDRAMUDIGANTI.jpg"
                          alt="mention-card"
                        />
                        <h6>Dr. Jagadish Chandramudiganti</h6>
                      </div>
                    </div>

              </div>
              </div>
              < div class="Co-patrons-body">
              <div class="Co-Patrons-wrapper">
              <h3 class="vit-team">Event Coordinators</h3>
              </div>
              <div class="grid-container">
              <div className="grid-item">
                      <div class="mention-card">
                        <img
                          src="https://vitap.ac.in/wp-content/uploads/2019/06/Dr.-SUDHAKAR-ILANGO-1.jpg"
                          alt="mention-card"
                        />
                        <h6>Dr. Sudhakar Ilango</h6>
                      </div>
                    </div>
                    <div className="grid-item">
                      <div class="mention-card">
                        <img
                          src="https://vitap.ac.in/wp-content/uploads/2019/06/Dr.-ANUPAMA-NAMBURU.jpg"
                          alt="mention-card"
                        />
                        <h6>Dr. Anupama Namburu</h6>
                      </div>
                    </div>
                    <div className="grid-item">
                      <div class="mention-card">
                        <img
                          src="https://vitap.ac.in/wp-content/uploads/2019/06/Mr.-K.-SAMUEL-JOHNSON.jpg"
                          alt="mention-card"
                        />
                        <h6>Mr. K. Samuel Johnson!</h6>
                      </div>
                    </div>
                    <div className="grid-item">
                      <div class="mention-card">
                        <img
                          src="https://vitap.ac.in/wp-content/uploads/2021/07/Monali-Bordoloi.jpg"
                          alt="mention-card"
                        />
                        <h6>Monali Bordoloi</h6>
                      </div>
                    </div>
                    <div className="grid-item">
                      <div class="mention-card">
                        <img
                          src="https://i.im.ge/2023/01/19/sNxu8X.IMG-3659.jpg"
                          alt="mention-card"
                        />
                        <h6>Dr. Aswathy R K</h6>
                      </div>
                    </div>
                    <div className="grid-item">
                      <div class="mention-card">
                        <img
                          src="https://vitap.ac.in/wp-content/uploads/2019/06/Dr.-V.-RAVINDRAKUMAR.jpg"
                          alt="mention-card"
                        />
                        <h6>Dr. V. Manikanta Ravindra Kumar</h6>
                      </div>
                    </div>
                    <div className="grid-item">
                      <div class="mention-card">
                        <img
                          src="https://vitap.ac.in/wp-content/uploads/2022/02/Suresh-Jagannadham.jpg"
                          alt="mention-card"
                        />
                        <h6>Dr. Suresh Jagannadham</h6>
                      </div>
                    </div>
                    </div>
                  
                    

              </div>
              </div>

              

                  {/* <div class="column">
   <div class="card"> 
  <img class="ViswanthanSir" src="https://vitap.ac.in/wp-content/uploads/2020/12/Viswanthan-Sir.jpg" alt="Viswanthan-Sir">
    </div>
  </div>
  <div class="column">
    <div class="card"> 
   <img class="KotaReddySir" src="https://vitap.ac.in/wp-content/uploads/2020/11/kottareddy.jpg" alt="SV-Kota-Reddy-Sir">
    </div>
  </div>
  <div class="column">
    <div class="card"> 
   <img class="RegisterSir" src="https://vitap.ac.in/wp-content/uploads/2019/06/Dr.-JAGADISH-CHANDRAMUDIGANTI.jpg" alt="Register">
  </div>
    </div>
</div>
<div class="row">
 
  <div class="column">
    <div class="card"> 
   <img class="SudhakarSir" src="https://vitap.ac.in/wp-content/uploads/2019/06/Dr.-SUDHAKAR-ILANGO-1.jpg" alt="-SUDHAKAR-ILANGO-1">
    </div>
  </div>     
   <div class="column">
    <div class="card"> 
   <img class="AnupamaMam" src="https://vitap.ac.in/wp-content/uploads/2019/06/Dr.-ANUPAMA-NAMBURU.jpg" alt="-ANUPAMA-NAMBURU">
    </div>
  </div>      
   <div class="column">
    <div class="card"> 
   <img class="SamuelSir" src="https://vitap.ac.in/wp-content/uploads/2019/06/Mr.-K.-SAMUEL-JOHNSON.jpg" alt="-SAMUEL-JOHNSON">
    </div>
  </div>   
 <div class="column">
    <div class="card"> 
    <img class="MonaliMam" src="https://vitap.ac.in/wp-content/uploads/2021/07/Monali-Bordoloi.jpg" alt="Monali-Bordoloi">
    </div>
  </div>   
<div class="column">
    <div class="card"> 
     <img class="FaizanSir" src="https://i.im.ge/2023/01/19/sAlUpK.DSC-0017-JPG.jpg" alt="Faizan-Ali">
    </div>
  </div>                
  <div class="column">
    <div class="card"> 
     <img class="AswathyMam" src="https://i.im.ge/2023/01/19/sNxu8X.IMG-3659.jpg" alt="Aswathy">
    </div>
  </div>                  
          <div class="column">
    <div class="card"> 
     <img class="RavindraSir" src="https://vitap.ac.in/wp-content/uploads/2019/06/Dr.-V.-RAVINDRAKUMAR.jpg" alt="-RAVINDRAKUMAR">
    </div>
  </div>            
         <div class="column">
    <div class="card"> 
     <img class="SureshSir" src="https://vitap.ac.in/wp-content/uploads/2022/02/Suresh-Jagannadham.jpg" alt="Suresh-Jagannadham">
                    </div>
            </div>                     
   </div> 
 </div>                */}
                </div>
              </div>
            </div>
            

          </div>
          <div className="promo-container-wrapper">
            <div></div>
          <div class="promo-container">
            
           <div>
           <div class="promo-container-text">
              <h5 className="promo-subtitle">Grab Your Tickets</h5>
              <h6 className="promo-title">Download the App</h6>
            </div>
            <div className="promo-links">
            <div id="download" className="store-logos">
  <div className="logo-as text-center text-md-left">
    <a
      href="https://apps.apple.com/in/app/vitap-university-student-app/id6443920958"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src={appstore}
        alt="App Store Link"
        className="app-store-badge"
      />
    </a>
  </div>
  <div className="text-center text-md-left">
    <a
      href="https://play.google.com/store/apps/details?id=com.next.vitap"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src={playstore}
        alt="playstore Store Link"
        className="app-store-badge"
      />
    </a>
  </div>
</div>
            </div>
           </div>
            <div className="app-screenshot">
            <img
              src={appscreenshot}
              alt="App Store Link"
              className="app-screenshot"
              />
            </div>
          </div>
            
          </div>
          
      </>
    </div>
  );
}
