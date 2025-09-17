
const BlogArticle = ({image, num, title, body}) => {

    return(
        
        <article className="flex">
            <img src={image} alt="" />
            <div>
                <h2>{num}</h2>
                <h3>{title}</h3>
                <p>{body}</p>
            </div>
        </article>
    )
}

export default BlogArticle;