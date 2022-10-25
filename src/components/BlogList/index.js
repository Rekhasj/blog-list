import BlogItem from '../BlogItem'
import './index.css'

const BlogList = props => {
  const {blogsListDetails} = props

  return (
    <div className="blog-list-container">
      {blogsListDetails.map(eachBlog => (
        <BlogItem eachBlogList={eachBlog} key={eachBlog.id} />
      ))}
    </div>
  )
}
export default BlogList
