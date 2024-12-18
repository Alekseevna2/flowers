import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = () => (
  <ContentLoader 
  className="pizza-block"
  speed={2}
  width={260}
  height={550}
  viewBox="0 0 260 550"
  backgroundColor="#f3f3f3"
  foregroundColor="#ecebeb"

>
  <rect x="0" y="1" rx="20" ry="20" width="260" height="260" /> 
  <rect x="0" y="278" rx="0" ry="0" width="260" height="48" /> 
  <rect x="0" y="347" rx="10" ry="10" width="260" height="47" /> 
  <rect x="0" y="422" rx="0" ry="0" width="79" height="32" /> 
  <rect x="156" y="417" rx="15" ry="15" width="100" height="46" />
</ContentLoader>
)

export default Skeleton;