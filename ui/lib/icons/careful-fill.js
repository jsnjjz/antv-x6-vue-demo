
/**
 * 该文件由 .my/core/build/svg.js 生成
 */
 
import Vue from 'vue'
import globalConfig from '$ui/config'

const Icon = ({props}) => {
  const attrs = {...globalConfig.svg, ...props}
  return (
    <svg {...{attrs: attrs}}>
       <path d="M637.6 82.3L610.9 643c-1.6 34.1-29.8 61-63.9 61h-70c-34.2 0-62.3-26.8-63.9-61L386.4 82.3c-1.3-27.4 20.5-50.3 48-50.3h155.3c27.4 0 49.2 22.9 47.9 50.3zM640 864c0 35.3-14.3 67.3-37.5 90.5-23.2 23.2-55.2 37.5-90.5 37.5s-67.3-14.3-90.5-37.5C398.3 931.3 384 899.3 384 864c0-70.7 57.3-128 128-128 35.3 0 67.3 14.3 90.5 37.5 23.2 23.2 37.5 55.2 37.5 90.5z"/>
    </svg>
  )
}

Vue.component('icon-careful-fill', Icon)
export default Icon

