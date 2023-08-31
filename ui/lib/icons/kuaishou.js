
/**
 * 该文件由 .my/core/build/svg.js 生成
 */
 
import Vue from 'vue'
import globalConfig from '$ui/config'

const Icon = ({props}) => {
  const attrs = {...globalConfig.svg, ...props}
  return (
    <svg {...{attrs: attrs}}>
       <path d="M445.7 562c4.6-0.3 329.5-26.8 351.1-23.4 21.6 3.5 108.1 0.9 112.4 34.6 4.3 33.3 0 65.7 0 65.7s-192 33.7-196.3 38.1c-4.3 4.3-19.9 19.9-19 43.2 0.9 23.4 0.9 114.2 1.7 116.8 0.9 2.6 5.2 19.9 38.1 16.4 25.9-2.7 51.7-11.9 61.6-15.6 2.5-1 4.1-3.4 3.8-6.1l-1.8-23.4c-0.3-3.6-3.7-6.2-7.2-5.5l-49.5 9.9v-93.4l160.4-29c3.4-0.6 6.6 1.9 6.7 5.4l5.3 158.2s9.1 39.3-58.3 53.2-229.1 54.5-244.7 55.3c-15.6 0.9-41.5 0.9-68.3-6.1-18.9-4.9-42.2-13.7-54.2-18.4-4.1-1.6-5.5-6.7-2.9-10.2l59-80.2c2.2-2.9 3.3-6.5 3.3-10.1V749c0-4.6-1.8-8.9-4.9-12.2L415.7 604c-3.4-3.6-4.9-8.5-4.2-13.4 1.5-10.5 8.2-27.1 34.2-28.6zM360.2 616.3c-2.2-2.3-5.1-3.7-8.2-4.2l-226.9-33.3c-3.2-0.6-6.5-0.3-9.4 1.1-9.9 4.6-31.5 18.2-38.5 51.9v266.6s3.2 53.2 76.5 77.8c73.3 24.6 162.8 46.7 162.8 46.7s49.9 9.7 70.1-31.1c20.1-40.9 116.1-157.6 116.1-157.6v-70.7L360.2 616.3zM301 934.1c-23.4-0.6-118.5-13.7-148.5-40.9-27.2-24.6-13.6-218.6-13.6-218.6s0.5-22.5 13.6-20.1l151.1 27.2s18.8 11 18.8 26.6v209.5c0 0.1 2 17-21.4 16.3zM946.8 314c0-103.5-79.9-187.5-178.5-187.5-56.2 0-106.4 27.3-139.1 70C603 83.6 509.3 0 397.7 0 265.9 0 159 116.6 159 260.4s106.9 260.4 238.7 260.4c6.9 0 13.8-0.4 20.6-1.1L775 501.3c1.6-0.1 3.1-0.1 4.7-0.2l5-0.3-0.1-0.1c90.9-8.7 162.2-89 162.2-186.7z m-503.5 92.7c-66.7 0-120.8-62.2-120.8-139s54.1-139 120.8-139 120.8 62.2 120.8 139-54.1 139-120.8 139z m353.3-6.4c-44 0-79.7-41-79.7-91.7s35.7-91.7 79.7-91.7 79.7 41 79.7 91.7-35.7 91.7-79.7 91.7z"/>
    </svg>
  )
}

Vue.component('icon-kuaishou', Icon)
export default Icon
