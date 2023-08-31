
/**
 * 该文件由 .my/core/build/svg.js 生成
 */
 
import Vue from 'vue'
import globalConfig from '$ui/config'

const Icon = ({props}) => {
  const attrs = {...globalConfig.svg, ...props}
  return (
    <svg {...{attrs: attrs}}>
       <path d="M121.63361 197.7c2.5 0.2 6.1 1.9 9.5 4.5l1.8 1.4 1.9 1.2 128.4 84.6c6.1 4 12.3 8.1 18.4 12.1l2.5 1.6c3.1 2.9 5.7 6.1 7.9 9.4 5.5 8.4 7.7 17.8 7.4 31.2-0.4 16.9-5 36.7-9.8 57.6-7.3 32-15.7 68.3-11.2 105.6 7.4 61.5 48.2 116.7 121.2 164.1 3.3 2.3 6.8 4.4 10.4 6 48.7 24.8 92.1 36.9 132.8 36.9 24.8 0 48.4-4.7 70-13.9 34.5-14.7 61.8-40.1 85.8-62.4 15.2-14.2 29.6-27.6 43.6-36.4 11.1-7 20.2-10.2 29.6-10.2 0.8 0 1.7 0 2.5 0.1 4 0.2 8.1 0.9 12.2 2.2l9.1 4.6 13.2 6.6c45.8 23 91.7 45.9 137.5 68.9l2 1 2.1 0.9c4 1.7 7.3 3.9 8.7 6 0.5 1.4 1.1 3.5 1.2 4.9 1.2 18.2-10.3 38-20.2 51.4-15.8 21.4-35.7 38.1-43.2 44.4-13.5 11.4-32.5 20.4-56.4 26.8-26.2 7.1-57.1 10.7-91.7 10.7-54 0-115-8.9-176.4-25.9-63.7-17.6-127.3-43.8-183.7-75.6-49.1-27.7-96-61.3-139.5-99.9-41.7-37-78.2-76.6-108.3-117.8-28.8-39.2-50.7-78.8-63.6-114.5-11.7-32.5-15.7-61.5-11.8-83.8 2.9-16.4 12.5-40 25.7-63.2 12.1-21.2 23.1-35 28.5-40.6 0.6-0.2 1.3-0.4 1.9-0.5m-0.5-64c-1.1 0-2.1 0-3.2 0.1 0 0-14.7 0.7-29.4 7.9C64.53361 153.5 12.63361 233 2.43361 290.8-21.96639 429.2 140.03361 651 357.23361 773.7 483.33361 844.9 629.43361 883.5 748.93361 883.5c79.2 0 146.8-16.9 189.2-52.5 23.1-19.4 90.9-78.5 86.1-149.2-1.1-16.3-7.9-29.4-7.9-29.4-11.5-22.3-32.2-32.5-41.2-36.2-45.8-23-91.7-46-137.5-68.9l-26.4-13.2c-6.4-2.3-18.3-6-33.3-6.8-2-0.1-4-0.2-5.9-0.2-79.6 0-122.5 87.9-184.2 114.1-12.3 5.2-27 8.8-44.9 8.8-27.3 0-61.8-8.2-106.1-31.1-69.5-44.5-90.8-86.1-94.8-119.6-8.2-68.1 49.3-151.6 3.7-221.6-8.2-12.6-17.4-21.1-22.6-25.5L298.53361 236l-128.4-84.6c-7.6-5.7-25.4-17.7-49-17.7z"/>
    </svg>
  )
}

Vue.component('icon-call', Icon)
export default Icon
