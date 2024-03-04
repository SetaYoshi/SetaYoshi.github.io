import { Row, Col } from 'react-grid';
import { useEffect } from "react"
import ContactButton from "components/ContactButton/ContactButton";

const About = () => {
  useEffect(() => {
    document.title = "SetAbout"
  })

  return (
    <center>
    <section className="card">
      <p style={{"font-size":24}}>
        This website was made because I learned you can host a site using <a href="https://pages.github.com/" style={{"color": "#ffffff"}}>Github Pages</a>.
        <br/>
          <i>Hope you enjoy browsing around!</i>
      </p>
      
      <br/>
      <br/>

      <div style={{ width: "80%", height: "4px", background: "#fff" }}></div>

      <br/>

      <p style={{ "font-size": 36, "letter-spacing": "3px" }}>YOU CAN YELL AT ME AT:</p>

      <br/>
      <br/>
      <br/>

      <Row>
      <Col><ContactButton text="Discord | setayoshi" link= "https://discord.com/channels/@me" /> </Col>
          <Col><ContactButton text="Telegram | @SetaYoshi" link= "https://t.me/SetaYoshi" /> </Col>
      </Row><Row>
      <Col><ContactButton text="Twitter | @Seta_Yoshi" link= "https://twitter.com/Seta_Yoshi" /> </Col>
      <Col><ContactButton text="Github | SetaYoshi" link= "https://github.com/SetaYoshi" />  </Col>
      </Row><Row>
          <Col><ContactButton text="Youtube | @SetaYoshi" link= "https://www.youtube.com/@SetaYoshi" /></Col>
      <Col><ContactButton text="Twitch | SetaYoshi" link= "https://www.twitch.tv/setayoshi" /></Col>
      </Row><Row>
      <Col><ContactButton text="Instagram | @Seta_Yoshi" link= "https://www.instagram.com/seta_yoshi/" />        </Col>
      <Col><ContactButton text="Reddit | u/SetaYoshi" link= "https://www.reddit.com/user/SetaYoshi" /> </Col>
      </Row><Row>
      <Col><ContactButton text="TikTok | @setayoshi" link= "https://www.tiktok.com/@setayoshi" />  </Col>
      <Col><ContactButton text="Snapchat | setayoshi" link="https://www.snapchat.com/add/setayoshi" /></Col>
      </Row><Row>
      <Col><ContactButton text="Tumblr | SetaYoshi" link= "https://www.tumblr.com/setayoshi" />  </Col>
      <Col><ContactButton text="Facebook | Seta Yoshi" link= "https://www.facebook.com/profile.php?id=100080014239409" />  </Col>
      </Row><Row>
      <Col><ContactButton text="DeviantArt | SetaYoshi" link= "https://www.deviantart.com/setayoshi" /></Col>
      <Col><ContactButton text="LinkedIn | Seta Yoshi" link="https://www.linkedin.com/in/setayoshi/" /></Col>
      </Row><Row>
      <Col><ContactButton text="itch.io | setayoshi" link="https://itch.io/profile/setayoshi" /></Col>
      <Col><ContactButton text="Chess.com | setayoshi" link="https://www.chess.com/member/setayoshi" /></Col>
      </Row><Row>
      <Col><ContactButton text="speedrun.com | SetaYoshi" link="https://www.speedrun.com/users/SetaYoshi" /></Col>
      <Col><ContactButton text="Carrd | setayoshi" link="https://setayoshi.carrd.co/" /></Col>
      </Row><Row>
      <Col><ContactButton text="Steam | SetaYoshi (yoshi3201)" link= "https://steamcommunity.com/id/SetaYoshi/" /> </Col>
      <Col><ContactButton text="Epic Games | SetaYoshi" link= "https://store.epicgames.com/" />  </Col>
      </Row><Row>
      <Col><ContactButton text="Pinterest | Seta Yoshi" link= "https://www.pinterest.com/SetaYoshi/" />  </Col>
      <Col><ContactButton text="Imgur | SetaYoshi" link="https://imgur.com/user/SetaYoshi/posts" />  </Col>
      </Row><Row>
      <Col><ContactButton text="Pornhub 🔞 | SetaYoshi" link= "https://www.pornhub.com/users/setayoshi" />  </Col>
      <Col><ContactButton text="Onlyfans 🔞 | SetaYoshi" link= "https://onlyfans.com/setayoshi" /></Col>
      </Row><Row>
      <Col><ContactButton text="Wordpress | setayoshi" link= "https://setayoshi.wordpress.com/" /> </Col>
      <Col><ContactButton text="Quora | SetaYoshi" link= "https://www.quora.com/profile/SetaYoshi" />  </Col>
      </Row><Row>
      <Col><ContactButton text="Showdown | SetaYoshi" link= "https://pokemonshowdown.com/users/setayoshi" /> </Col>
      <Col><ContactButton text="Roblox | @Setayoshi" link= "https://www.roblox.com/users/4382229547/profile" />  </Col>
      </Row><Row>
      <Col><ContactButton text="Wikipedia | User:SetaYoshi" link= "https://en.wikipedia.org/wiki/User:SetaYoshi" />  </Col>
      <Col><ContactButton text="Fandom | User:SetaYoshi" link="https://community.fandom.com/wiki/User:SetaYoshi" />  </Col>
      </Row><Row>
      <Col><ContactButton text="Pastebin | SetaYoshi" link="https://pastebin.com/u/SetaYoshi" /> </Col>
      <Col><ContactButton text="TruthSocial | @setayoshi" link= "https://truthsocial.com/@SetaYoshi" />  </Col>
      </Row><Row>
      <Col><ContactButton text="osu! | SetaYoshi" link="https://osu.ppy.sh/users/25152356" />  </Col>
      <Col><ContactButton text="start.gg | SetaYoshi" link="https://www.start.gg/user/042286cc" /></Col>
      </Row>

    </section>
    </center>
  )
};

export default About;