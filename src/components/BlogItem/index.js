import './index.css'

const BlogItem = props => {
  const {eachBlogList} = props
  const {title, description, publishedDate} = eachBlogList
  return (
    <div className="blog-item-container">
      <div className="blog-heading-card">
        <h1 className="title">{title}</h1>
        <p className="published-date">{publishedDate}</p>
      </div>
      <p className="description">{description}</p>
    </div>
  )
}
export default BlogItem
