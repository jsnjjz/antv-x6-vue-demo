
/**
 * 该文件由 .my/core/build/svg.js 生成
 */
 
import Vue from 'vue'
import globalConfig from '$ui/config'

const Icon = ({props}) => {
  const attrs = {...globalConfig.svg, ...props}
  return (
    <svg {...{attrs: attrs}}>
       <path d="M1009.95955 561.3H433.65955c-35.5 0-48.3-13.5-48-48V299.4c0-32-12.2-54.4-46.1-54.4h-55.1c-58.4 0-113.5 27.3-148.8 73.8C96.75955 370 48.25955 434.4 26.45955 466.2c-13.2 19-21.4 41-23.7 64C-0.64045 578.6 0.05955 673 0.05955 673v52c0 17.7 14.3 32 32 32h65c8.1 0 14.9 6.1 15.9 14.2 7 55.2 54.1 97.8 111.1 97.8s104.1-42.7 111.1-97.8c1-8.1 7.8-14.2 15.9-14.2h322c8.1 0 14.9 6.1 15.9 14.2 7 55.2 54.1 97.8 111.1 97.8s104.1-42.7 111.1-97.8c1-8.1 7.8-14.2 15.9-14.2h33c35.3 0 64-28.7 64-64V574.7c-2-6.6-7.4-11.7-14.1-13.4zM224.05955 805c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48z m576 0c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48z m144-112h-44.1c-4.9 0-9.5-2.3-12.6-6.1-20.5-25.6-52-41.9-87.4-41.9s-66.8 16.4-87.4 41.9c-3.1 3.8-7.7 6.1-12.6 6.1h-376c-4.9 0-9.5-2.3-12.6-6.1-20.5-25.6-52-41.9-87.4-41.9s-66.8 16.4-87.4 41.9c-3.1 3.8-7.7 6.1-12.6 6.1H72.05955c-4.4 0-8-3.6-8-8v-12.5c0-0.9-0.6-91 2.5-136.8 1.3-11.8 5.6-23.2 12.4-33l0.1-0.2 0.1-0.2c16.9-24.6 54-74.7 107.4-144.9 11.4-15 26.4-27.4 43.2-35.7s35.8-12.8 54.6-12.8h37.2v204c-0.1 13.3-0.3 52.7 29.1 82.3 29.7 30 69.8 30 82.9 30H960.05955V677c0 8.8-7.2 16-16 16zM960.05955 261v206H480.05955V261h480m56-64H424.05955c-4.4 0-8 3.6-8 8v294c0 17.7 14.3 32 32 32h568c4.4 0 8-3.6 8-8V205c0-4.4-3.6-8-8-8z"/>
    </svg>
  )
}

Vue.component('icon-truck', Icon)
export default Icon
