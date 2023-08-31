
/**
 * 该文件由 .my/core/build/svg.js 生成
 */
 
import Vue from 'vue'
import globalConfig from '$ui/config'

const Icon = ({props}) => {
  const attrs = {...globalConfig.svg, ...props}
  return (
    <svg {...{attrs: attrs}}>
       <path d="M576 96V75.9c0-40.3-36.9-70.6-76.4-62.8l-448 88.7C21.6 107.7 0 134 0 164.6v694.7c0 30.6 21.7 57 51.8 62.8l448 87.1c39.5 7.7 76.2-22.6 76.2-62.8V928h416c17.7 0 32-14.3 32-32V128c0-17.7-14.3-32-32-32H576z m-83.1 846.7l-416-80.9c-7.5-1.5-12.9-8-12.9-15.7V177.7c0-7.6 5.4-14.2 12.9-15.7l416-82.3c9.9-2 19.1 5.6 19.1 15.7V927c0 10-9.2 17.6-19.1 15.7zM952 864H576v-88c0-4.4 3.6-8 8-8h304c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H584c-4.4 0-8-3.6-8-8v-32c0-4.4 3.6-8 8-8h304c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H584c-4.4 0-8-3.6-8-8V160h376c4.4 0 8 3.6 8 8v688c0 4.4-3.6 8-8 8zM219.9 584.5v89.2c0 9.8-8.7 17.3-18.4 15.8l-30.5-4.6c-7.8-1.2-13.6-7.9-13.6-15.8v-297c0-15.8 11.6-29.3 27.2-31.6l77.4-11.7c88.6-13.6 138 22.4 138 109.2 0 42.2-15.3 76-44.9 100.6-28.3 23.5-62 33.5-100.2 30.7l-18.3-0.8c-9.1-0.4-16.7 6.9-16.7 16z m0-175.9v100.8l29.3-0.1c42.2-0.2 64.4-21.2 64.4-63.2 0-41-22-59.3-63.8-55l-15.6 1.6c-8.1 0.8-14.3 7.7-14.3 15.9zM688 338.9c34.8 6.4 66.9 23.1 92.5 48.7 17.5 17.5 30.9 38.1 39.6 60.5H688V338.9M656 272h-16c-8.8 0-16 7.2-16 16v192c0 17.7 14.3 32 32 32h223.4c9.3 0 16.6-7.9 16-17.2C886.6 370.3 782.8 272 656 272z"/>
    </svg>
  )
}

Vue.component('icon-ppt', Icon)
export default Icon
