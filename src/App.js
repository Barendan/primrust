import React from 'react'
import NavbarComponent from './components/Navbar'

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {

  

  return (
    <div className="App">
      <NavbarComponent />

      <div className="container-fluid vh-100 splash">

        <div className="asset-container">
          <video preload="auto" autoPlay="autoplay" muted="muted" loop="loop" playsInline="" className="bg-media-hero-video">
              <source type="video/mp4" src="https://files.facepunch.com/paddy/20190514/rust_bgvideo_website_003_noaudio.mp4"/>
              <source type="video/webm" src="https://files.facepunch.com/paddy/20190516/rust_bgvideo_website_003.webm"/>
          </video>
        </div>

        <div className="row h-100 d-flex align-content-end pb-5">
          <div className="col-md-6 offset-md-6 col-sm-7 offset-sm-5 col-12 pl-sm-4">
            <div className="splash-text">
              <h1 className="title">
                Survive, Adapt &amp; Conquer
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
      </div>

      <div className="container-fluid bg-dark discord">
        <b className="anchor" id="discord"></b>
        <div className="row flex-md-row-reverse px-md-3 discord-inner">
          
          <div className="col-12 py-lg-2 py-4">
            <h1 className="title">Discord</h1>
          </div>

          <div className="col-lg-9 col-md-8 col-12 py-md-4 p-1">
            <img src="/images/discordfull.png" className="discord-image" alt="discord application"/>
          </div>

          <div className="col-lg-3 col-md-4 col-12 py-md-4 p-1">
            <h3 className="subtitle d-none">Come and Chat</h3>
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
          </div>

          <div className="col-12 d-flex justify-content-center">
            <a href="http://bit.do/primrust" className="discord-holder">
              <button className="discord-button">
                Open the Discord
              </button>
            </a>
          </div>

        </div>
      </div>

      <div className="container-fluid features">
          <b className="anchor" id="features"></b>
          <section className="pt-3 ss-style-zigzag">
            <h2 className="title">Features</h2>
            <div className="row pb-lg-5 p-4">

              <div className="col-md-4 col-sm-6 pb-4">
                <img className="icon mb-3" src="images/system.svg" alt="Icon"/>
                <h3 className="display-5">Fast Server</h3>
                <p className="subtext">Our Server runs on a Dedicated machine with the top hardware. State of the Art DDOS protection to ensure that you see 0 downtime.</p>
              </div>

              <div className="col-md-4 col-sm-6 pb-4">
                <img className="icon mb-3" src="images/crown.svg" alt="Icon"/>
                <h3 className="display-5">King / Lords</h3>
                <p className="subtext">Heavy lies the head that wears the crown. Ascend the throne, collect taxes from the peasants and defend your title!</p>
              </div>

              <div className="col-md-4 col-sm-6 pb-4">
                <img className="icon mb-3" src="images/roam.svg" alt="Icon"/>
                <h3 className="display-5">Group Limit</h3>
                <p className="subtext">When roaming outside of your base, the max group limit is 4. This rule does not apply when you are within TC radius of your base.</p>
              </div>

              <div className="col-md-4 col-sm-6 pb-4">
                <img className="icon mb-3" src="images/archery.png" alt="Icon"/>
                <h3 className="display-5">Bow / Melee</h3>
                <p className="subtext">Immerse yourself in the Medieval times. Draw back your bowstring and shoot your enemies from a distance or rush in and clobber them with a mace.</p>
              </div>

              <div className="col-md-4 col-sm-6 pb-4">
                <img className="icon mb-3" src="images/treasure.png" alt="Icon"/>
                <h3 className="display-5">Improved Loot</h3>
                <p className="subtext">Crates, Airdrops, and barrel loot has been improved. No more useless blueprints or junk items. Use the kit command to receive rp or electric bps.</p>
              </div>

              <div className="col-md-4 col-sm-6 pb-3">
                <img className="icon mb-3" src="images/mountain.png" alt="Icon"/>
                <h3 className="display-5">Leaderboard</h3>
                <p className="subtext">Track your progress in various categories and make your way to the top of the charts. Fame and glory await you!</p>
              </div>

            </div>
          </section>
      </div>

      <div className="container-fluid mods" id="modified">
          <section>
            <h2 className="title">Modified</h2>
            <div className="row pt-4 pb-5 mods-holder">

              <div className="col-12 mx-lg-auto my-3 px-4 info-container">
                  <p className="info">
                    The Primitive world is tailored to bring you the most optimal gaming experience. We make dynamic changes that encourage balanced gameplay, including many quality of life upgrades. 
                  </p>
              </div>

              <div className="col-sm-6 col-12 mt-4 px-sm-3 px-5 list-holder">
                <h2 className="mods-subtitle">Extras</h2>
                <div className="pluglist" id="style-1">
                  <table className="table table-hover table-striped">
                    <tbody className="tableadjust">
                      <tr><td>Automated Events</td></tr>
                      <tr><td>Backpack</td></tr>
                      <tr><td>Better Loot</td></tr>
                      <tr><td>Bypass Queue</td></tr>
                      <tr><td>Chat Filter</td></tr>
                      <tr><td>Clans / TC Share</td></tr>
                      <tr><td>Crafting Speed</td></tr>
                      <tr><td>Custom NPCs</td></tr>
                      <tr><td>Eletrical / RP Kits</td></tr>
                      <tr><td>Enhanced Hammer</td></tr>
                      <tr><td>Entity Limit</td></tr>
                      <tr><td>FireSword</td></tr>
                      <tr><td>Fishing</td></tr>
                      <tr><td>Finish Me</td></tr>
                      <tr><td>Furnace Auto-Splitter</td></tr>
                      <tr><td>Gather Rate 2x</td></tr>
                      <tr><td>Heli Spawn</td></tr>
                      <tr><td>Horse hp reduced</td></tr>
                      <tr><td>Horse reset daily</td></tr>
                      <tr><td>Ignore Player</td></tr>
                      <tr><td>Info Panel</td></tr>
                      <tr><td>Jackhammer dmg removed</td></tr>
                      <tr><td>King / Lords</td></tr>
                      <tr><td>Knock Knock</td></tr>
                      <tr><td>Loot Bouncer</td></tr>
                      <tr><td>Metabolism Improved</td></tr>
                      <tr><td>Never wear</td></tr>
                      <tr><td>Night Lantern</td></tr>
                      <tr><td>No Escape</td></tr>
                      <tr><td>Player Leaderboard</td></tr>
                      <tr><td>Player Rankings</td></tr>
                      <tr><td>Private Messages</td></tr>
                      <tr><td>Quick Smelt</td></tr>
                      <tr><td>Quick Sort</td></tr>
                      <tr><td>Raid Notice</td></tr>
                      <tr><td>Random Spawns</td></tr>
                      <tr><td>Research Block</td></tr>
                      <tr><td>Server Rewards (RP)</td></tr>
                      <tr><td>Shorter Night</td></tr>
                      <tr><td>Sign Artist</td></tr>
                      <tr><td>Skinbox (free)</td></tr>
                      <tr><td>StackSizes Boosted</td></tr>
                      <tr><td>Tamable Pets</td></tr>
                      <tr><td>Trophy Signs</td></tr>
                      <tr><td>Upgrade Workbenches</td></tr>
                    </tbody>
                  </table>
                </div>
                <span className="help-text"></span>
              </div>

              <div className="col-sm-6 col-12 mt-4 px-sm-3 px-5 list-holder">
                  <h2 className="mods-subtitle">Player Ranks</h2>
                  <div className="pluglist" id="style-1">
                    <table className="table table-hover table-striped">
                      <tbody className="tableadjust">
                            <tr> 
                              <td>Caveman</td> 
                              <td className="text-right">1 hour</td> 
                            </tr>
                            <tr> 
                              <td>Forager</td> 
                              <td className="text-right">10 hours</td> 
                            </tr>
                            <tr> 
                              <td>Serf</td>
                              <td className="text-right">25 hours</td>
                            </tr>
                            <tr> 
                              <td>Peasant</td>
                              <td className="text-right">50 hours</td>
                            </tr>
                            <tr> 
                              <td>Hunter</td>
                              <td className="text-right">100 hours</td>
                            </tr>
                            <tr> 
                              <td>Squire</td>
                              <td className="text-right">200 hours</td>
                            </tr>
                            <tr> 
                              <td>Knight</td>
                              <td className="text-right">300 hours</td>
                            </tr>
                            <tr>
                              <td>Constable</td>
                              <td className="text-right">500 hours</td>
                            </tr>
                            <tr>
                              <td>Duke</td>
                              <td className="text-right">650 hours</td>
                            </tr>
                            <tr>
                              <td>Sage</td>
                              <td className="text-right">800 hours</td>
                            </tr>
                            <tr>
                              <td>Monarch</td>
                              <td className="text-right">1000 hours</td>
                            </tr>
                            <tr>
                              <td>Prince</td>
                              <td className="text-right">1300 hours</td>
                            </tr>
                            <tr>
                              <td>Emperor</td>
                              <td className="text-right">1500 hours</td>
                            </tr>
                            <tr>
                              <td>God</td>
                              <td className="text-right">2000 hours</td>
                            </tr>
                      </tbody>
                    </table>
                  </div>
              </div>

            </div>
          </section>
      </div>

      <div className="container-fluid clips">

        <section className="ss-style-boxes">

          <b className="anchor" id="clips"></b>
          <h1 className="title">Media</h1>

          <div className="row">
              <div className="col-12 col-md-6 col-lg-4 pt-4">
                  <figure className="figure">
                      <img src="/images/rust_village2.png" className="figure-img img-fluid img-thumbnail" alt="Figure image"/>
                      <figcaption className="figure-caption">
                          <h6>Town of Valenciaga <small>(10-09-2019)</small></h6>
                          <p>Built within a valley, the town of Valenciaga was fully encompassed by a massive wall and powered mainly by windmills.</p>
                      </figcaption>
                  </figure>
              </div>

              <div className="col-12 col-md-6 col-lg-4 pt-4">
                  <figure className="figure">
                      <div className="embed-responsive embed-responsive-16by9 figure-img">
                          <iframe width="560" height="315" src="https://www.youtube.com/embed/wYWS1FY0ZeQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                      </div>
                      <figcaption className="figure-caption">
                        <h6>Primitive Trailer <small>(03-26-2020)</small></h6>
                        <p>Enter a realm where King and Lords vie for control. Adventure to find rare items and build your wealth. Become a renowned builder, forge alliances, and rise to the top.</p>
                      </figcaption>
                  </figure>
              </div>

              <div className="col-12 col-md-6 col-lg-4 pt-4">
                  <figure className="figure">
                      <div className="embed-responsive embed-responsive-16by9 figure-img">
                          <iframe className="embed-responsive-item" width="560" height="315" src="https://www.youtube.com/embed/-xk9EcROMbw" frameBorder="0" allowFullScreen></iframe>
                      </div>
                      <figcaption className="figure-caption">
                          <h6>Castle Under Siege <small>(06-09-2020)</small></h6>
                          <p>Castle Starlord was bombarded with a surprise attack by DOGs clan. Few Knights were available to alleviate the seige and so the sleeper Kashmar was activated. </p>
                      </figcaption>
                  </figure>
              </div>

              <div className="col-12 col-md-6 col-lg-4 pt-4">
                <figure className="figure">
                  <a href="#"><img src="/images/eoka_off.png" className="figure-img img-fluid img-thumbnail" alt="Figure image"/></a>
                  <figcaption className="figure-caption">
                    <h6>Eoka Roulette <small>(03-24-2020)</small></h6>
                    <p>While a war raged outside, two men met face to face deep in the castle cellar. Both pulled out an Eoka loaded with just one shot. Only one man left that cellar alive...</p>
                  </figcaption>
                </figure>
              </div>

              <div className="col-12 col-md-6 col-lg-4 pt-4">
                  <figure className="figure">
                      <div className="embed-responsive embed-responsive-4by3 figure-img">
                          <iframe width="560" height="315" src="https://www.youtube.com/embed/-aUmdtZyOI8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                      </div>
                      <figcaption className="figure-caption">
                          <h6>Gladiator Arena <small>(06-17-2020)</small></h6>
                          <p>A place for the top warriors to prove themselves. Everyone is welcome to participate but there can only be one victor.</p>
                      </figcaption>
                  </figure>
              </div>

              <div className="col-12 col-md-6 col-lg-4 pt-4">
                  <figure className="figure">
                      <div className="embed-responsive embed-responsive-4by3 figure-img">
                          <iframe width="560" height="315" src="https://www.youtube.com/embed/n0bbt-WeiJE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                      </div>
                      <figcaption className="figure-caption">
                          <h6>Solo Raiding <small>(12-31-2019)</small></h6>
                          <p>The lone wolf hungers for treasure. Seems he is not the only one, as 3 more wolves come with blood on their minds. Who will come out victorious..</p>
                      </figcaption>
                  </figure>
              </div>
          </div>

        </section>

      </div>

      <div className="container-fluid donate">
        <b className="anchor" id="donate"></b>
        <h1 className="title pt-3">Donator Packages</h1>

        <div className="row my-5 d-flex justify-content-around">
          <section className="col-lg-3 col-md-3 col-12 card-holder">
            <div className="donate-card conno">
              <h2>Connoisseur</h2>
              <span> The Starter Package</span>
              <ul>
                <li>CustomRock</li>
                <li>Sign Artist</li>
                <li>Queue Bypass</li>
                <li>EnhancedHammer</li>
                <li>Unbreakable Torch</li>
              </ul>
              <a href="http://primrust.tebex.io"><div className="price">Donate $5.00</div></a>
            </div>
          </section>

          <section className="col-lg-3 col-md-3 col-12 card-holder">
            <div className="donate-card gladiator">
              <h2>Gladiator</h2>
              <span>Better, Faster, Stronger</span>
              <ul>
                <li>Spawn at Full HP</li>
                <li>Colored Name</li>
                <li>Knock Knock</li>
              </ul>
              <a href="http://primrust.tebex.io"><div className="price">Donate $10.00</div></a>
            </div>
          </section>

          <section className="col-lg-3 col-md-3 col-12 card-holder">
            <div className="donate-card king">
              <h2>King of Kings</h2>
              <span> The Boss Package</span>
              <ul>
                <li>FireSword</li>
                <li>Backpack (2 rows)</li>
                <li>Quicksort</li>
                <li>Pet</li>
              </ul>
              <a href="http://primrust.tebex.io">
                <div className="price">Donate $15.00</div>
              </a>
            </div>
          </section>

          <section className="col-12 card-holder">
              <div className="buypoints loot">
                  <h2>Sack of Coin</h2>
                  <span className="d-none">Elevate Your Wealth</span>
                  <li>1000RP Points</li>
                  <a href="http://primrust.tebex.io">
                    <div className="points-price">
                      Donate $5.00
                    </div>
                  </a>
              </div>
          </section>
          <div className="col-12 fineprint">
              *All donations are final. No refunds.
          </div>
        </div>

        <div className="row px-md-5 pb-md-2 mt-5">
          <div className="col-12 sociallinks">

            <a className="link youtube" href="https://www.youtube.com/channel/UC0vL7CHL6UOgkEA0ygbkOzA" title="Primitive on youtube" target="_blank" rel="noopener noreferrer"><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 576 512" className="icon" height="1em" width="1em"><path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path></svg>
            </a>

            <a className="link twitter" href="https://twitter.com/PrimitiveRust" title="Primitive on twitter" target="_blank" rel="noopener noreferrer"><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="icon" height="1em" width="1em"><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path></svg>
            </a>

            <a className="link twitch" href="https://primrust.com/twitch" title="Primitive on twitch" target="_blank" rel="noopener noreferrer"><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" className="icon" height="1em" width="1em"><path d="M40.1 32L10 108.9v314.3h107V480h60.2l56.8-56.8h87l117-117V32H40.1zm357.8 254.1L331 353H224l-56.8 56.8V353H76.9V72.1h321v214zM331 149v116.9h-40.1V149H331zm-107 0v116.9h-40.1V149H224z"></path></svg>
            </a>

            <a className="link discord-link" href="http://bit.do/primrust" title="Primitive on discord" target="_blank" rel="noopener noreferrer"><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" className="icon" height="1em" width="1em"><path d="M297.216 243.2c0 15.616-11.52 28.416-26.112 28.416-14.336 0-26.112-12.8-26.112-28.416s11.52-28.416 26.112-28.416c14.592 0 26.112 12.8 26.112 28.416zm-119.552-28.416c-14.592 0-26.112 12.8-26.112 28.416s11.776 28.416 26.112 28.416c14.592 0 26.112-12.8 26.112-28.416.256-15.616-11.52-28.416-26.112-28.416zM448 52.736V512c-64.494-56.994-43.868-38.128-118.784-107.776l13.568 47.36H52.48C23.552 451.584 0 428.032 0 398.848V52.736C0 23.552 23.552 0 52.48 0h343.04C424.448 0 448 23.552 448 52.736zm-72.96 242.688c0-82.432-36.864-149.248-36.864-149.248-36.864-27.648-71.936-26.88-71.936-26.88l-3.584 4.096c43.52 13.312 63.744 32.512 63.744 32.512-60.811-33.329-132.244-33.335-191.232-7.424-9.472 4.352-15.104 7.424-15.104 7.424s21.248-20.224 67.328-33.536l-2.56-3.072s-35.072-.768-71.936 26.88c0 0-36.864 66.816-36.864 149.248 0 0 21.504 37.12 78.08 38.912 0 0 9.472-11.52 17.152-21.248-32.512-9.728-44.8-30.208-44.8-30.208 3.766 2.636 9.976 6.053 10.496 6.4 43.21 24.198 104.588 32.126 159.744 8.96 8.96-3.328 18.944-8.192 29.44-15.104 0 0-12.8 20.992-46.336 30.464 7.68 9.728 16.896 20.736 16.896 20.736 56.576-1.792 78.336-38.912 78.336-38.912z"></path></svg>
            </a>

            <a className="link steam" href="https://primrust.com/steam" title="Primitive on steam" target="_blank" rel="noopener noreferrer"><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" className="icon" height="1em" width="1em"><path d="M395.5 177.5c0 33.8-27.5 61-61 61-33.8 0-61-27.3-61-61s27.3-61 61-61c33.5 0 61 27.2 61 61zm52.5.2c0 63-51 113.8-113.7 113.8L225 371.3c-4 43-40.5 76.8-84.5 76.8-40.5 0-74.7-28.8-83-67L0 358V250.7L97.2 290c15.1-9.2 32.2-13.3 52-11.5l71-101.7c.5-62.3 51.5-112.8 114-112.8C397 64 448 115 448 177.7zM203 363c0-34.7-27.8-62.5-62.5-62.5-4.5 0-9 .5-13.5 1.5l26 10.5c25.5 10.2 38 39 27.7 64.5-10.2 25.5-39.2 38-64.7 27.5-10.2-4-20.5-8.3-30.7-12.2 10.5 19.7 31.2 33.2 55.2 33.2 34.7 0 62.5-27.8 62.5-62.5zm207.5-185.3c0-42-34.3-76.2-76.2-76.2-42.3 0-76.5 34.2-76.5 76.2 0 42.2 34.3 76.2 76.5 76.2 41.9.1 76.2-33.9 76.2-76.2z"></path></svg>
            </a>

          </div>

          <hr/>
          <p className="copyright">
            Created with &hearts; by LionCoded &copy; 2020 
          </p>
          
        </div>

      </div>

  </div>
  );
}

export default App;
