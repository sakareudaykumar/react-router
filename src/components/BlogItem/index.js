// Write your JS code here
import './index.css'

const BlogItem = props => {
  const {information} = props
  const {title, description, publishedDate} = information
  return (
    <div className="blogItem">
      <div className="titleContainer">
        <h1 className="blogTitle">{title}</h1>
        <p className="blogDate">{publishedDate}</p>
      </div>
      <p className="blogDescription">{description}</p>
    </div>
  )
}
export default BlogItem
