import React from "react";
import NavbarComponent from "./components/Navbar";
import Footer from "./components/Footer";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <NavbarComponent />

      <div className="container-fluid splash">
        <div className="asset-container">
          <video
            preload="auto"
            autoPlay="autoplay"
            muted="muted"
            loop="loop"
            playsInline=""
            className="bg-media-hero-video"
          >
            <source
              type="video/mp4"
              src="https://files.facepunch.com/paddy/20190514/rust_bgvideo_website_003_noaudio.mp4"
            />
            <source
              type="video/webm"
              src="https://files.facepunch.com/paddy/20190516/rust_bgvideo_website_003.webm"
            />
          </video>
        </div>

        <div className="row splash-inner">
          <div className="col-md-6 offset-md-6 col-sm-7 offset-sm-5 col-12 pl-sm-4 pb-5">
            <div className="splash-text">
              <h1 className="title">Survive, Adapt &amp; Conquer</h1>
              <p className="subtitle pr-3">
                Everything wants you to die. You need to find food, shelter and
                forge weapons to prevent it.
              </p>
              <a
                href="http://store.steampowered.com/app/252490/Rust/"
                target="_blank"
                className="button is-primary is-medium"
              >
                <span className="icon is-small">
                  <i className="mdi mdi-steam"></i>
                </span>
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
            <img
              src="images/discordfull.png"
              className="discord-image"
              alt="discord application"
            />
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
            <a
              href="https://discord.gg/jWvE9Acxxr"
              target="_blank"
              className="discord-holder"
            >
              <button className="discord-button">Open the Discord</button>
            </a>
          </div>
        </div>
      </div>

      <div className="container-fluid features">
        <b className="anchor" id="features"></b>
        <section className="pt-3 ss-style-zigzag">
          <h2 className="title">Features</h2>
          <div className="row pb-lg-5 p-4 features-inner">
            <div className="col-md-4 col-sm-6 pb-4">
              <img className="icon mb-3" src="images/system.svg" alt="Icon" />
              <h3 className="display-5">Fast Server</h3>
              <p className="subtext">
                Our Server runs on a Dedicated machine with the top hardware.
                State of the Art DDOS protection to ensure that you see 0
                downtime.
              </p>
            </div>

            <div className="col-md-4 col-sm-6 pb-4">
              <img className="icon mb-3" src="images/crown.svg" alt="Icon" />
              <h3 className="display-5">King / Lords</h3>
              <p className="subtext">
                Heavy lies the head that wears the crown. Ascend the throne,
                collect taxes from the peasants and defend your title!
              </p>
            </div>

            <div className="col-md-4 col-sm-6 pb-4">
              <img className="icon mb-3" src="images/roam.svg" alt="Icon" />
              <h3 className="display-5">Loot Events</h3>
              <p className="subtext">
                Treasure maps, raidable buildings, pirate ships, and more.
                Riches are within reach, but you aren't the only one
                searching...
              </p>
            </div>

            <div className="col-md-4 col-sm-6 pb-4">
              <img className="icon mb-3" src="images/archery.png" alt="Icon" />
              <h3 className="display-5">Bow / Melee</h3>
              <p className="subtext">
                Immerse yourself in the Medieval times. Draw back your bowstring
                and shoot your enemies from a distance or rush in and clobber
                them with a mace.
              </p>
            </div>

            <div className="col-md-4 col-sm-6 pb-4">
              <img className="icon mb-3" src="images/treasure.png" alt="Icon" />
              <h3 className="display-5">Improved Loot</h3>
              <p className="subtext">
                Crates, Airdrops, and barrel loot has been improved. No more
                useless blueprints or junk items. Use the kit command to receive
                rp or electric bps.
              </p>
            </div>

            <div className="col-md-4 col-sm-6 pb-3">
              <img className="icon mb-3" src="images/mountain.png" alt="Icon" />
              <h3 className="display-5">Leaderboard</h3>
              <p className="subtext">
                Track your progress in various categories and make your way to
                the top of the charts. Fame and glory await you!
              </p>
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
                Embrace the sword and bow as you battle vicious creatures,
                bandits, and other adventurers seeking glory. Visit the town of
                PrimsLanding to purchase goods, confess your sins, or simply
                drink mead with the townsfolk. Once your riches accumulate,
                construct yourself a castle with fortifications to ward off
                raiders.
              </p>
            </div>

            <div className="col-sm-6 col-12 mt-4 px-sm-3 px-5 list-holder">
              <h2 className="mods-subtitle">Extras</h2>
              <div className="pluglist" id="style-1">
                <table className="table table-hover table-striped">
                  <tbody className="tableadjust">
                    <tr>
                      <td>Automated Events</td>
                    </tr>
                    <tr>
                      <td>Backpacks</td>
                    </tr>
                    <tr>
                      <td>Improved Loot</td>
                    </tr>
                    <tr>
                      <td>Chat Filter</td>
                    </tr>
                    <tr>
                      <td>Clans / TC Share</td>
                    </tr>
                    <tr>
                      <td>Crafting Speed (2x)</td>
                    </tr>
                    <tr>
                      <td>Custom NPCs</td>
                    </tr>
                    <tr>
                      <td>Deathmatch events</td>
                    </tr>
                    <tr>
                      <td>Electric and RP Kits</td>
                    </tr>
                    <tr>
                      <td>Entity Limit</td>
                    </tr>
                    <tr>
                      <td>FireSword</td>
                    </tr>
                    <tr>
                      <td>Fishing</td>
                    </tr>
                    <tr>
                      <td>Furnace Auto-Splitter</td>
                    </tr>
                    <tr>
                      <td>Hit Marker</td>
                    </tr>
                    <tr>
                      <td>Horse HP Reduced</td>
                    </tr>
                    <tr>
                      <td>Horses Reset Daily</td>
                    </tr>
                    <tr>
                      <td>Ignore Player</td>
                    </tr>
                    <tr>
                      <td>Info Panel</td>
                    </tr>
                    <tr>
                      <td>Jackhammer Dmg Disabled</td>
                    </tr>
                    <tr>
                      <td>King / Lords</td>
                    </tr>
                    <tr>
                      <td>Knock Knock</td>
                    </tr>
                    <tr>
                      <td>Loot Bouncer</td>
                    </tr>
                    <tr>
                      <td>Melee Only Zone</td>
                    </tr>
                    <tr>
                      <td>Player Leaderboard</td>
                    </tr>
                    <tr>
                      <td>Player Rankings</td>
                    </tr>
                    <tr>
                      <td>Private Messaging</td>
                    </tr>
                    <tr>
                      <td>Quick Smelt (2x)</td>
                    </tr>
                    <tr>
                      <td>Quick Sort</td>
                    </tr>
                    <tr>
                      <td>Raidable Bases</td>
                    </tr>
                    <tr>
                      <td>Raid Block</td>
                    </tr>
                    <tr>
                      <td>Random Spawns</td>
                    </tr>
                    <tr>
                      <td>Research Block</td>
                    </tr>
                    <tr>
                      <td>Server Rewards (RP)</td>
                    </tr>
                    <tr>
                      <td>Sign Artist</td>
                    </tr>
                    <tr>
                      <td>Skinbox (Free)</td>
                    </tr>
                    <tr>
                      <td>Skip Night</td>
                    </tr>
                    <tr>
                      <td>StackSizes Increased</td>
                    </tr>
                    <tr>
                      <td>Tameable Pets</td>
                    </tr>
                    <tr>
                      <td>Skull Trophies</td>
                    </tr>
                    <tr>
                      <td>Upgradable Workbench</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <span className="help-text"></span>
            </div>

            <div className="col-sm-6 col-12 mt-4 px-sm-3 px-5 list-holder">
              <h2 className="mods-subtitle">Player Ranks</h2>
              <div className="pluglist" id="style-1">
                <table className="table table-hover table-striped">
                  <tbody className="tableadjust ranks">
                    <tr>
                      <td className="rank-hover">Caveman</td>
                      <td className="text-right">1 hour</td>
                    </tr>
                    <tr>
                      <td className="rank-hover">Forager</td>
                      <td className="text-right">10 hours</td>
                    </tr>
                    <tr>
                      <td className="rank-hover">Serf</td>
                      <td className="text-right">25 hours</td>
                    </tr>
                    <tr>
                      <td className="rank-hover">Peasant</td>
                      <td className="text-right">50 hours</td>
                    </tr>
                    <tr>
                      <td className="rank-hover">Hunter</td>
                      <td className="text-right">100 hours</td>
                    </tr>
                    <tr>
                      <td className="rank-hover">Squire</td>
                      <td className="text-right">200 hours</td>
                    </tr>
                    <tr>
                      <td className="rank-hover">Knight</td>
                      <td className="text-right">250 hours</td>
                    </tr>
                    <tr>
                      <td className="rank-hover">Sage</td>
                      <td className="text-right">375 hours</td>
                    </tr>
                    <tr>
                      <td className="rank-hover">Constable</td>
                      <td className="text-right">450 hours</td>
                    </tr>
                    <tr>
                      <td className="rank-hover">Marshal</td>
                      <td className="text-right">600 hours</td>
                    </tr>
                    <tr>
                      <td className="rank-hover">Duke</td>
                      <td className="text-right">800 hours</td>
                    </tr>
                    <tr>
                      <td className="rank-hover">Monarch</td>
                      <td className="text-right">1000 hours</td>
                    </tr>
                    <tr>
                      <td className="rank-hover">Prince</td>
                      <td className="text-right">1250 hours</td>
                    </tr>
                    <tr>
                      <td className="rank-hover">Emperor</td>
                      <td className="text-right">1500 hours</td>
                    </tr>
                    <tr>
                      <td className="rank-hover">God</td>
                      <td className="text-right">2000 hours</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="container-fluid donate">
        <b className="anchor" id="donate"></b>
        <h1 className="pt-3 title">Donator Packages</h1>

        <div className="row mx-lg-auto d-flex justify-content-evenly donate-inner">
          <section className="col-lg-4 col-md-3 col-12 card-holder">
            <a
              href="http://primrust.tebex.io/category/elite-packages"
              target="_blank"
            >
              <div className="donate-card conno">
                <h2>Connoisseur</h2>
                <span>Culture and Fine Art</span>
                <ul>
                  <li>Knock Knock</li>
                  <li>Sign Artist</li>
                  <li>Enhanced Hammer</li>
                  <li>Unbreakable Torch</li>
                </ul>
                <div className="price">Donate $5.00</div>
              </div>
            </a>
          </section>

          <section className="col-lg-4 col-md-3 col-12 card-holder">
            <a
              href="http://primrust.tebex.io/category/elite-packages"
              target="_blank"
            >
              <div className="donate-card gladiator">
                <h2>Gladiator</h2>
                <span>Better, Faster, Stronger</span>
                <ul>
                  <li>Spawn w/ Full HP</li>
                  <li>Firesword</li>
                  <li>Upgradeable WB</li>
                  <li>500 RP Points</li>
                </ul>
                <div className="price">Donate $10.00</div>
              </div>
            </a>
          </section>

          <section className="col-lg-4 col-md-3 col-12 card-holder">
            <a
              href="http://primrust.tebex.io/category/elite-packages"
              target="_blank"
            >
              <div className="donate-card king">
                <h2>King of Kings</h2>
                <span>The Boss Package</span>
                <ul>
                  <li>Backpack +12 Slots</li>
                  <li>Change Name Color</li>
                  <li>Quicksort</li>
                  <li>Pet</li>
                </ul>
                <div className="price">Donate $15.00</div>
              </div>
            </a>
          </section>

          <section className="col-12 pt-md-5 card-holder">
            <a href="http://primrust.tebex.io/category/1480119" target="_blank">
              <div className="buypoints loot">
                <h2>Sack of Coin</h2>
                <span className="d-none">Elevate Your Wealth</span>
                <li>1000 RP Points</li>
                <div className="points-price">Donate $5.00</div>
              </div>
            </a>
          </section>
          <div className="col-12 fineprint">
            *All donations are final. No refunds.
          </div>
        </div>
      </div>

      <div className="container-fluid clips">
        <section className="">
          <b className="anchor" id="clips"></b>
          <h1 className="title">Media</h1>

          <div className="row">
            <div className="col-12 col-md-6 col-lg-4 pt-3">
              <figure className="figure">
                <div className="embed-responsive embed-responsive-16by9 figure-img">
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/wEybO33-fCo"
                    title="gladiator arena"
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <figcaption className="figure-caption">
                  <h6>
                    Primitive Pvp <small>(09-28-2020)</small>
                  </h6>
                  <p>
                    Watch and experience a higher echelon of pvp skill and
                    strategy. Thousands of hours of gameplay and adaptation
                    culminated into this one video. Created by and featuring
                    Broz0.
                  </p>
                </figcaption>
              </figure>
            </div>

            <div className="col-12 col-md-6 col-lg-4 pt-3">
              <figure className="figure">
                <div className="embed-responsive embed-responsive-16by9 figure-img">
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/wYWS1FY0ZeQ"
                    title="trailer"
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <figcaption className="figure-caption">
                  <h6>
                    Primitive Trailer <small>(03-26-2020)</small>
                  </h6>
                  <p>
                    Enter a realm where King and Lords vie for control.
                    Adventure to find rare items and build your wealth. Become a
                    renowned builder, forge alliances, and rise to the top.
                  </p>
                </figcaption>
              </figure>
            </div>

            <div className="col-12 col-md-6 col-lg-4 pt-3">
              <figure className="figure">
                <div className="embed-responsive embed-responsive-16by9 figure-img">
                  <iframe
                    className="embed-responsive-item"
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/J8Ur-m2D8g4"
                    title="Goblins Ep.1"
                    frameBorder="0"
                    allowFullScreen
                  ></iframe>
                </div>
                <figcaption className="figure-caption">
                  <h6>
                    Goblins: A Scuffed Start <small>(07-21-2020)</small>
                  </h6>
                  <p>
                    Life in the shoes of a Goblin, Episode #1. The Goblins clan
                    has a rough start after encountering many enemies on this
                    fresh wipe.
                  </p>
                </figcaption>
              </figure>
            </div>

            <div className="col-12 col-md-6 col-lg-4 pt-3">
              <figure className="figure">
                <img
                  src="images/eoka_off.png"
                  className="figure-img img-fluid img-thumbnail"
                  alt="eoka battle"
                />
                <figcaption className="figure-caption">
                  <h6>
                    Eoka Roulette <small>(03-24-2020)</small>
                  </h6>
                  <p>
                    While a war raged outside, two men met face to face deep in
                    the castle cellar. Both pulled out an Eoka loaded with just
                    one shot. Only one man left that cellar alive...
                  </p>
                </figcaption>
              </figure>
            </div>

            <div className="col-12 col-md-6 col-lg-4 pt-3">
              <figure className="figure">
                <div className="embed-responsive embed-responsive-16by9 figure-img">
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/n0bbt-WeiJE"
                    title="solo raiding"
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <figcaption className="figure-caption">
                  <h6>
                    Solo Raiding <small>(12-31-2019)</small>
                  </h6>
                  <p>
                    The lone wolf hungers for riches. Seems he is not the only
                    one, as 3 more wolves come with blood on their minds. Who
                    will come out victorious...
                  </p>
                </figcaption>
              </figure>
            </div>

            <div className="col-12 col-md-6 col-lg-4 pt-3">
              <figure className="figure">
                <img
                  src="images/rust_village2.png"
                  className="figure-img img-fluid img-thumbnail"
                  alt="village of valenciaga"
                />
                <figcaption className="figure-caption">
                  <h6>
                    Town of Valenciaga <small>(10-09-2019)</small>
                  </h6>
                  <p>
                    Built within a valley, the town of Valenciaga was fully
                    encompassed by a massive wall and powered mainly by
                    windmills.
                  </p>
                </figcaption>
              </figure>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </div>
  );
}

export default App;
