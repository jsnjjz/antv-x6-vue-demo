
/**
 * 该文件由 .my/core/build/svg.js 生成
 */
 
import Vue from 'vue'
import globalConfig from '$ui/config'

const Icon = ({props}) => {
  const attrs = {...globalConfig.svg, ...props}
  return (
    <svg {...{attrs: attrs}}>
       <path d="M768.00792 256H256.00792C256.00792 114.6 370.60792 0 512.00792 0c70.7 0 134.7 28.6 181 75 46.3 46.3 75 110.3 75 181zM1015.20792 838.5c1 3.2 1.5 6.4 1.5 9.6 0 17-13.8 31.9-32 31.9-13.9 0-26.3-9-30.5-22.3-6-19.4-16.7-37.2-31.4-52-24.3-24.5-57.7-37.8-92.1-37.8h-5.1c-12.7 62.7-43.8 118.7-87.3 162.3-41.9 41.9-95.3 72.2-155.2 85.8-20 4.5-39.1-10.7-39.1-31.2V480c0-8.8-3.6-16.8-9.4-22.6-6-6-14.2-9.6-23.4-9.4-17.5 0.4-31.3 15.1-31.3 32.6v504.2c0 20.6-19.2 35.7-39.3 31.2-121.8-27.7-217.2-125-242.2-248h-5.1c-34.5 0-67.8 13.3-92.1 37.8-14.7 14.8-25.4 32.6-31.4 52-2.1 6.7-6.2 12.2-11.6 16.1-5.4 3.9-11.9 6.2-18.9 6.2-21.6 0-37-20.9-30.6-41.5C33.20792 760.6 106.00792 704 192.00792 704v-98H32.00792c-8.8 0-16.8-3.6-22.6-9.4-6-6-9.6-14.2-9.4-23.4 0.4-17.4 15.1-31.2 32.6-31.2H192.00792V368c-86 0-158.8-56.6-183.2-134.5-1-3.2-1.5-6.4-1.5-9.6 0-17 13.8-31.9 32-31.9 13.9 0 26.3 9 30.5 22.3 6 19.4 16.7 37.2 31.4 52 24.3 24.5 57.7 37.8 92.1 37.8h637.3c34.5 0 67.8-13.3 92.1-37.8 14.7-14.8 25.4-32.6 31.4-52 2.1-6.6 6.2-12.2 11.6-16.1 5.9-4.3 13.2-6.6 20.9-6.1 20.9 1.3 34.6 22.4 28.2 42.3C990.20792 311.9 917.70792 368 832.00792 368v174h159.3c17.4 0 32.2 13.7 32.7 31.1 0.5 18.1-14 32.9-32 32.9H832.00792v98c86 0 158.8 56.6 183.2 134.5z"/>
    </svg>
  )
}

Vue.component('icon-debug-fill', Icon)
export default Icon
