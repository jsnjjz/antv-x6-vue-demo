
/**
 * 该文件由 .my/core/build/svg.js 生成
 */
 
import Vue from 'vue'
import globalConfig from '$ui/config'

const Icon = ({props}) => {
  const attrs = {...globalConfig.svg, ...props}
  return (
    <svg {...{attrs: attrs}}>
       <path d="M685.515276 63.968765L387.260908 430.989556c-37.981454 46.77716-37.981454 114.644021 0.099951 161.421181L686.414837 959.931284H611.951196L296.905027 572.120644c-13.893216-17.091654-21.489507-38.581162-21.489507-60.470473 0-21.989263 7.596291-43.47877 21.489507-60.470474L611.551391 63.968765h73.963885m117.642557-63.968765H596.358809c-9.595315 0-18.790825 4.297901-24.787896 11.794241L247.229283 410.899366c-47.776672 58.771303-47.776672 142.93021 0 201.701512l324.641483 399.604881c6.097023 7.49634 15.192582 11.794241 24.787897 11.794241h207.398731c6.69673 0 10.494876-7.796193 6.196974-12.993655L436.936652 552.030454c-19.090678-23.488531-19.090678-57.172084 0-80.760566L809.354807 12.993655c4.19795-5.197462 0.499756-12.993655-6.196974-12.993655z"/>
    </svg>
  )
}

Vue.component('icon-bold-arrow-left', Icon)
export default Icon
