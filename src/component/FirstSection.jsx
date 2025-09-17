
import imageWebDesktop from "../assests/images/image-web-3-desktop.jpg";
import imageWebMobile from "../assests/images/image-web-3-mobile.jpg";
import AsideArticle from "./AsideArticle";

const FirstSection = () => {

    return(
        
        <section className="first-section flex">
          <div>
            <picture>
              <source media='(min-width: 600px)' srcSet={imageWebDesktop}></source>
              <img src={imageWebMobile} alt='Web Image' />
            </picture>

            <div className="flex">
              <h1>The Bright Future of Web 3.0?</h1>
              <div>
                <p>We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. 
  But is it really fulfilling its promise?</p>
                <a href=''>Read more</a>
              </div>
            </div>
          </div>

          <aside>
            <h2>New</h2>
            <div>
              <AsideArticle
                title={"Hydrogen VS Electric Cars"}
                body={"Will hydrogen-fueled cars ever catch up to EVs?"}
              />
              <hr/>
              <AsideArticle
                title={"The Downsides of AI Artistry"}
                body={"What are the possible adverse effects of on-demand AI image generation?"}
              />
              <hr/>
              <AsideArticle
                title={"Is VC Funding Drying Up?"}
                body={"Private funding by VC firms is down 50% YOY. We take a look at what that means."}
              />
            </div>
          </aside>
        </section>

    )
}

export default FirstSection;