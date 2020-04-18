import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">

      <nav aria-label="main navigation" className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <a href="/" className="navbar-brand">
        <img src="https://files.facepunch.com/s/c0444ba57c9a.svg" alt="Rust" width="112" height="28"/>
      </a>

      <button className="navbar-toggler" 
              type="button" 
              data-toggle="collapse" 
              data-target="#navbarSupportedContent" 
              aria-controls="navbarSupportedContent" 
              aria-expanded="false" 
              aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse"
           id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <a href="/blog/" className="nav-link">Features</a>
          </li>
          <li className="nav-item">
            <a href="https://store.facepunch.com/" className="nav-link">Discord</a>
          </li>
          <li className="nav-item">
            <a href="/console" className="nav-link">Donate</a>
          </li>
          <li className="nav-item">
            <a href="/changes/" className="nav-link">Changelist</a>
          </li>
        </ul>
      </div>

    </nav>


      <div className="splash container-fluid vh-100">

        <div className="asset-container video-overlay">
          <video preload="auto" autoPlay="autoplay" muted="muted" loop="loop" playsInline="" className="bg-media-hero-video">
              <source type="video/mp4" src="https://files.facepunch.com/paddy/20190514/rust_bgvideo_website_003_noaudio.mp4"/>
              <source type="video/webm" src="https://files.facepunch.com/paddy/20190516/rust_bgvideo_website_003.webm"/>
          </video>
        </div>

        <div className="row h-75 d-flex flex-wrap align-content-end">
          <div className="col-lg-6 offset-lg-6">

            <h1 className="title is-size-1-desktop is-size-2-tablet is-size-2-mobile text-uppercase hero-title is-spaced">
              Survive, Cooperate <br/> &amp; Raid
            </h1>
            <p className="subtitle pr-3">Everything wants you to die. You need to find food, shelter and weapons to prevent it.</p>
            <a href="http://store.steampowered.com/app/252490/Rust/" className="button is-primary is-medium">
              <span className="icon is-small">
                <i className="mdi mdi-steam"></i></span>
              <span>View Rust on Steam</span>
            </a>

          </div>
        </div>

      </div>

      <div className="discord container-fluid vh-100 bg-dark">
        <div className="row pt-3">
          <div className="col-lg-12 p-2">
            <h1 className="text-center title text-white">Discord</h1>
          </div>
          <div className="row p-3">
            <div className="col-lg-3">
              <h2 className="">Come & meet the largest Primitive Community!</h2>
              
              <ul>
                <li>Wipe Info</li>
                <li>Find a Group</li>
                <li>Vote on Changes</li>
                <li>View the Map</li>
                <li>Gameplay Clips</li>
                <li>Talk to Admins</li>
                <li>Latest Updates</li>
                <li>and so much more...</li>
              </ul>

              <a href="http://bit.do/primrust">
                <button className="fieldButtonClosed-2vtDnY fieldButton-1JS8q_ fieldButtonBrand-XGxhle">
                  <span className="fieldWrapClosed-2LtmRz fieldWrap-FPKPdL fieldWrapClosedBrand-1jWc-T">Join the Discord</span>
                </button>
              </a>
            </div>
            
            <div className="col-lg-9">
              <img src="/images/discordfull.png" className="w-100 h-100 shadow" />
            </div>

          </div>
        </div>


      </div>

      <div className="generalinfo container-fluid">
          <h2 className="display-3 text-center">Features</h2>
          <div className="row p-5 text-center">
            <section className="col-sm-6 col-md-4 pb-5">
              <img className="icon mb-3" src="images/system.svg" alt="Icon"/>
              <h3 className="display-5">Dedicated System</h3>
              <p className="subtext">Our Server runs on a Dedicated machine with the top hardware. State of the Art DDOS protection to ensure that you see 0 downtime.</p>
            </section>

            <section className="col-sm-6 col-md-4 pb-5">
              <img className="icon mb-3" src="images/crown.svg" alt="Icon"/>
              <h3 className="display-5">King & Lords</h3>
              <p className="subtext">Heavy lies the head that wears the crown. Ascend the throne, collect taxes from the peasants and defend your title!</p>
            </section>

            <section className="col-sm-6 col-md-4 pb-5">
              <img className="icon mb-3" src="images/roam.svg" alt="Icon"/>
              <h3 className="display-5">Group Limit</h3>
              <p className="subtext">When roaming outside of your base, the max group limit is 4. This rule does not apply when you are within TC radius of your base.</p>
            </section>

            <section className="col-sm-6 col-md-4 pb-5">
              <img className="icon mb-3" src="images/archery.png" alt="Icon"/>
              <h3 className="display-5">Bow/Melee Combat</h3>
              <p className="subtext">Immerse yourself in the Medieval times. Draw back your bowstring and shoot your enemies from a distance or rush in and clobber them with a mace.</p>
            </section>

            <section className="col-sm-6 col-md-4 pb-5">
              <img className="icon mb-3" src="images/treasure.png" alt="Icon"/>
              <h3 className="display-5">Improved Loot</h3>
              <p className="subtext">Crates, Airdrops, and barrel loot has been improved. No more useless blueprints or junk items. Use the kit command to receive rp or electric bps.</p>
            </section>

            <section className="col-sm-6 col-md-4 pb-5">
              <img className="icon mb-3" src="images/mountain.png" alt="Icon"/>
              <h3 className="display-5">Player Leaderboard</h3>
              <p className="subtext">Track your progress in various categories and make your way to the top of the charts. Fame and glory await you!</p>
            </section>   
          </div>
      </div>


      <div className="donate container-fluid vh-100">

        <div className="row justify-content-md-center pt-3">
          <h1 className="col-lg-12 text-center display-3">Donator Packages</h1><br/>
          <p className="fineprint">*all donations go towards improving the server</p>
        </div>

        <div className="row justify-content-md-center h-50 mt-5">

          <section className="col-lg-3">
          <div className="p-4 border bg-light shadow h-100">
            <h3>D5: Connoisseur</h3>
            <p> The Starter Package</p>
            <ul>
              <li>CustomRock</li>
              <li>Sign Artist</li>
              <li>Queue Bypass</li>
              <li>EnhancedHammer</li>
              <li>Unbreakable Torch</li>
            </ul>
            <div className="text-center price">$5.00 Donation</div>
          </div>
          </section>

          <section className="col-lg-3">
          <div className="p-4 border bg-light shadow h-100">
            <h3>D10: Gladiator</h3>
            <p>Better, Faster, Stronger</p>
            <ul>
              <li>Spawn at Full HP</li>
              <li>Colored Name</li>
              <li>Knock Knock</li>
            </ul>
            <div className="text-center price">$10.00 Donation</div>
          </div>
          </section>

          <section className="col-lg-3">
          <div className="p-4 border bg-light shadow h-100">
            <h3>D15: King of Kings</h3>
            <p> The Boss Package</p>
            <ul>
              <li>FireSword</li>
              <li>Backpack (2 rows)</li>
              <li>Quicksort</li>
              <li>Pet</li>
            </ul>
            <div className="text-center price">$15.00 Donation</div>
          </div>
          </section>

        </div>

        <div className="row justify-content-center h-25 p-5 mt-4">
          <div className="sociallinks col-lg-12">
            <a className="link youtube" href="https://www.youtube.com/channel/UC0vL7CHL6UOgkEA0ygbkOzA" title="Primitive on youtube" target="_blank" rel="noopener noreferrer"><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 576 512" className="icon" height="1em" width="1em"><path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path></svg>
            </a>

            <a className="link twitter" href="https://twitter.com/PrimitiveRust" title="Primitive on twitter" target="_blank" rel="noopener noreferrer"><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="icon" height="1em" width="1em"><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path></svg>
            </a>

            <a className="link twitch" href="https://primrust.com/twitch" title="Primitive on twitch" target="_blank" rel="noopener noreferrer"><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" className="icon" height="1em" width="1em"><path d="M40.1 32L10 108.9v314.3h107V480h60.2l56.8-56.8h87l117-117V32H40.1zm357.8 254.1L331 353H224l-56.8 56.8V353H76.9V72.1h321v214zM331 149v116.9h-40.1V149H331zm-107 0v116.9h-40.1V149H224z"></path></svg>
            </a>

            <a className="link discord" href="http://bit.do/primrust" title="Primitive on discord" target="_blank" rel="noopener noreferrer"><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" className="icon" height="1em" width="1em"><path d="M297.216 243.2c0 15.616-11.52 28.416-26.112 28.416-14.336 0-26.112-12.8-26.112-28.416s11.52-28.416 26.112-28.416c14.592 0 26.112 12.8 26.112 28.416zm-119.552-28.416c-14.592 0-26.112 12.8-26.112 28.416s11.776 28.416 26.112 28.416c14.592 0 26.112-12.8 26.112-28.416.256-15.616-11.52-28.416-26.112-28.416zM448 52.736V512c-64.494-56.994-43.868-38.128-118.784-107.776l13.568 47.36H52.48C23.552 451.584 0 428.032 0 398.848V52.736C0 23.552 23.552 0 52.48 0h343.04C424.448 0 448 23.552 448 52.736zm-72.96 242.688c0-82.432-36.864-149.248-36.864-149.248-36.864-27.648-71.936-26.88-71.936-26.88l-3.584 4.096c43.52 13.312 63.744 32.512 63.744 32.512-60.811-33.329-132.244-33.335-191.232-7.424-9.472 4.352-15.104 7.424-15.104 7.424s21.248-20.224 67.328-33.536l-2.56-3.072s-35.072-.768-71.936 26.88c0 0-36.864 66.816-36.864 149.248 0 0 21.504 37.12 78.08 38.912 0 0 9.472-11.52 17.152-21.248-32.512-9.728-44.8-30.208-44.8-30.208 3.766 2.636 9.976 6.053 10.496 6.4 43.21 24.198 104.588 32.126 159.744 8.96 8.96-3.328 18.944-8.192 29.44-15.104 0 0-12.8 20.992-46.336 30.464 7.68 9.728 16.896 20.736 16.896 20.736 56.576-1.792 78.336-38.912 78.336-38.912z"></path></svg>
            </a>

            <a className="link steam" href="https://primrust.com/steam" title="Primitive on steam" target="_blank" rel="noopener noreferrer"><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" className="icon" height="1em" width="1em"><path d="M395.5 177.5c0 33.8-27.5 61-61 61-33.8 0-61-27.3-61-61s27.3-61 61-61c33.5 0 61 27.2 61 61zm52.5.2c0 63-51 113.8-113.7 113.8L225 371.3c-4 43-40.5 76.8-84.5 76.8-40.5 0-74.7-28.8-83-67L0 358V250.7L97.2 290c15.1-9.2 32.2-13.3 52-11.5l71-101.7c.5-62.3 51.5-112.8 114-112.8C397 64 448 115 448 177.7zM203 363c0-34.7-27.8-62.5-62.5-62.5-4.5 0-9 .5-13.5 1.5l26 10.5c25.5 10.2 38 39 27.7 64.5-10.2 25.5-39.2 38-64.7 27.5-10.2-4-20.5-8.3-30.7-12.2 10.5 19.7 31.2 33.2 55.2 33.2 34.7 0 62.5-27.8 62.5-62.5zm207.5-185.3c0-42-34.3-76.2-76.2-76.2-42.3 0-76.5 34.2-76.5 76.2 0 42.2 34.3 76.2 76.5 76.2 41.9.1 76.2-33.9 76.2-76.2z"></path></svg>
            </a>
          </div>


          <hr/>
          <p className="copyright col-lg-12 text-center mt-0">Created with &hearts; by LionCoded &copy; 2020 </p>
          
        </div>


      </div>




  </div>
  );
}

export default App;
