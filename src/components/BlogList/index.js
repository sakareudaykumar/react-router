// Write your JS code here
import BlogItem from '../BlogItem'

const BlogList = props => {
  const {details} = props
  return (
    <div>
      <ul>
        {details.map(each => (
          <BlogItem information={each} key={each.id} />
        ))}
      </ul>
    </div>
  )
}

export default BlogList
