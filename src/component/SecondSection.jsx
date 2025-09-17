import BlogArticle from "./BlogArticle"

import retroImg from "../assests/images/image-retro-pcs.jpg";
import laptopsImg from "../assests/images/image-top-laptops.jpg";
import growthImg from "../assests/images/image-gaming-growth.jpg";

const SecondSection = () => {

    return(
        
        <section className="flex second-section">
            <BlogArticle 
            image={retroImg}
            num={"01"}
            title={"Reviving Retro PCs"}
            body={"What happens when old PCs are given modern upgrades?"}
            />
            <BlogArticle 
            image={laptopsImg}
            num={"02"}
            title={"Top 10 Laptops of 2022"}
            body={"Our best picks for various needs and budgets."}
            />
            <BlogArticle 
            image={growthImg}
            num={"03"}
            title={"The Growth of Gaming"}
            body={"How the pandemic has sparked fresh opportunities."}
            />
        </section>
    )
}

export default SecondSection;