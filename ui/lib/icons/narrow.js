
/**
 * 该文件由 .my/core/build/svg.js 生成
 */
 
import Vue from 'vue'
import globalConfig from '$ui/config'

const Icon = ({props}) => {
  const attrs = {...globalConfig.svg, ...props}
  return (
    <svg {...{attrs: attrs}}>
       <path d="M1013.501025 968.305439l-70.093155-64.293721c2.399766-18.998145-3.699639-38.796211-18.198223-53.394786l-63.99375-63.993751c-2.199785-2.199785-4.599551-4.29958-6.999317-6.099404C920.310126 698.331804 959.906259 593.742017 959.906259 479.95313 959.906259 214.879016 745.027243 0 479.95313 0S0 214.879016 0 479.95313s214.879016 479.95313 479.95313 479.953129c105.789669 0 203.580119-34.19666 282.872375-92.190997 2.299775 3.299678 4.899522 6.499365 7.799239 9.499073l63.99375 63.99375c12.498779 12.498779 28.897178 18.798164 45.295577 18.798164 8.29919 0 16.598379-1.599844 24.497608-4.799531l65.893565 60.394102c6.099404 5.599453 13.898643 8.39918 21.59789 8.39918 8.69915 0 17.298311-3.499658 23.597696-10.398984 11.898838-13.098721 11.098916-33.396739-1.999805-45.295577zM479.95313 895.912509c-56.194512 0-110.689191-10.998926-161.884191-32.696807-49.495166-20.897959-93.990821-50.99502-132.287082-89.19129-38.19627-38.19627-68.19334-82.691925-89.19129-132.287082C74.992676 590.64232 63.993751 536.147642 63.993751 479.95313s10.998926-110.689191 32.696807-161.884191c20.897959-49.495166 50.89503-93.990821 89.191289-132.287082 38.19627-38.19627 82.691925-68.19334 132.287082-89.19129C369.263939 74.992676 423.758617 63.993751 479.95313 63.993751s110.689191 10.998926 161.884191 32.696807c49.495166 20.897959 93.990821 50.99502 132.287081 89.191289 38.19627 38.19627 68.19334 82.691925 89.19129 132.287082C884.913583 369.263939 895.912509 423.758617 895.912509 479.95313s-10.998926 110.689191-32.696807 161.884191c-20.897959 49.495166-50.99502 93.990821-89.19129 132.287081-38.19627 38.19627-82.691925 68.19334-132.287082 89.19129C590.64232 884.913583 536.147642 895.912509 479.95313 895.912509zM671.934381 508.950298H287.971878c-17.698272 0-31.996875-14.298604-31.996876-31.996875s14.298604-31.996875 31.996876-31.996876h383.962503c17.698272 0 31.996875 14.298604 31.996876 31.996876s-14.298604 31.996875-31.996876 31.996875z"/>
    </svg>
  )
}

Vue.component('icon-narrow', Icon)
export default Icon
