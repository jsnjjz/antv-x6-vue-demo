
/**
 * 该文件由 .my/core/build/svg.js 生成
 */
 
import Vue from 'vue'
import globalConfig from '$ui/config'

const Icon = ({props}) => {
  const attrs = {...globalConfig.svg, ...props}
  return (
    <svg {...{attrs: attrs}}>
       <path d="M672 64h-0.9c-43 0-83.9-17.2-115.3-46.7C544.3 6.6 528.9 0 512 0s-32.3 6.6-43.8 17.3C436.8 46.8 396 64 352.9 64h-0.9c-88.4 0-160 71.6-160 160v496c0 97.2 78.8 176 176 176h48c17.7 0 32 14.3 32 32v16c0 8.8 7.2 16 16 16h8c4.4 0 8 3.6 8 8v48c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-48c0-4.4 3.6-8 8-8h8c8.8 0 16-7.2 16-16v-16c0-17.7 14.3-32 32-32h48c97.2 0 176-78.8 176-176V224c0-88.4-71.6-160-160-160zM512 32c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32z m256 688c0 29.9-11.7 58-32.8 79.2C714 820.3 685.9 832 656 832H368c-29.9 0-58-11.7-79.2-32.8C267.7 778 256 749.9 256 720v-33.7c0-22 11.3-42.5 29.9-54.2 27.7-17.5 54.6-25.6 80.4-24.2 35 1.9 58.9 21.1 89.2 45.5 29.2 23.5 62.3 50.1 111.1 65.1 23.9 7.4 49 11 75.3 11 38 0 78.3-7.7 120.8-23 2.6-0.9 5.3 1 5.3 3.8v9.7z m0-128.7c0 28.1-18.3 52.9-45.1 61.2-51.2 15.7-97.2 17.4-137.5 5-37.1-11.4-62.7-32-89.8-53.8C461 575.8 425.3 547 369.7 544c-13-0.7-26.1 0.1-39.1 2.3-39 6.8-74.6-23.8-74.6-63.4V224c0-53 43-96 96-96h320c53 0 96 43 96 96v367.3zM612 256c-2.2 0-4 1.8-4 4v56c0 2.2 1.8 4 4 4h104c2.2 0 4-1.8 4-4v-56c0-2.2-1.8-4-4-4H612zM612 384c-2.2 0-4 1.8-4 4v56c0 2.2 1.8 4 4 4h104c2.2 0 4-1.8 4-4v-56c0-2.2-1.8-4-4-4H612zM612 512c-2.2 0-4 1.8-4 4v56c0 2.2 1.8 4 4 4h104c2.2 0 4-1.8 4-4v-56c0-2.2-1.8-4-4-4H612z"/>
    </svg>
  )
}

Vue.component('icon-plasma', Icon)
export default Icon
