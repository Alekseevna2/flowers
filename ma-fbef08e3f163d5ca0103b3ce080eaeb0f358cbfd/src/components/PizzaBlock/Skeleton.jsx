import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = () => (
  <ContentLoader 
  className="pizza-block"
  speed={2}
  width={260}
  height={500}
  viewBox="0 0 260 500"
  backgroundColor="#f3f3f3"
  foregroundColor="#ecebeb"
>
  <rect x="0" y="292" rx="9" ry="9" width="260" height="22" /> 
  <rect x="0" y="335" rx="10" ry="10" width="260" height="88" /> 
  <rect x="114" y="447" rx="20" ry="20" width="145" height="45" /> 
  <rect x="3" y="455" rx="10" ry="10" width="85" height="30" /> 
  <circle cx="124" cy="147" r="120" />
</ContentLoader>
)

export default Skeleton;