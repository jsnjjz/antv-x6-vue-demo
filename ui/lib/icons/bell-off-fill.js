
/**
 * 该文件由 .my/core/build/svg.js 生成
 */
 
import Vue from 'vue'
import globalConfig from '$ui/config'

const Icon = ({props}) => {
  const attrs = {...globalConfig.svg, ...props}
  return (
    <svg {...{attrs: attrs}}>
       <path d="M858.486567 707.912255c-2.799891-1.999922-5.399791-4.199837-7.799698-6.599745-11.499554-11.59955-18.699275-27.59893-18.699275-45.298243V384.024812c0-39.19848-7.099725-76.797023-20.199217-111.595674l66.29743-66.29743c12.499515-12.499515 12.499515-32.798728 0-45.298243-10.699585-10.699585-26.998953-12.199527-39.298476-4.699818-1.29995 2.099919-2.799891 4.099841-4.699818 5.899771l-51.598 51.598-46.698189 46.698189-518.179911 518.279907-79.496918 79.496918c-1.79993 1.79993-3.799853 3.399868-5.899771 4.699817-7.499709 12.299523-5.999767 28.698887 4.699818 39.298477 6.299756 6.299756 14.399442 9.399636 22.599124 9.399635s16.399364-3.09988 22.599124-9.399635l45.198247-45.198248c14.099453 4.599822 29.098872 7.099725 44.698267 7.099725h19.399248c13.899461 0 26.198984 9.099647 30.498818 22.299135 26.198984 79.996899 101.396069 137.694662 190.09263 137.694662 88.696561 0 163.893646-57.697763 190.09263-137.694662 4.299833-13.299484 16.599356-22.299135 30.498818-22.299135H751.990696c54.097903 0 101.296073-29.898841 125.895119-73.997131 15.699391-28.198907 6.69974-63.19755-19.399248-82.096817zM640.295026 869.405994c-6.69974 18.899267-17.499322 36.198597-32.098755 50.79803-25.699004 25.599008-59.897678 39.798457-96.196271 39.798457s-70.497267-14.199449-96.196271-39.798457c-14.599434-14.599434-25.499011-31.898763-32.098755-50.79803-0.899965-2.599899 0.999961-5.399791 3.799853-5.399791h249.090343c2.699895 0 4.599822 2.799891 3.699856 5.399791zM838.787331 156.233643c-1.29995 2.099919-2.799891 4.099841-4.699818 5.899771l-51.598 51.598-46.698189 46.698189-518.179911 518.179911-79.496918 79.496918c-1.79993 1.79993-3.799853 3.399868-5.899771 4.699817 1.29995-2.099919 2.799891-4.099841 4.699818-5.899771l695.973017-695.973017c1.79993-1.899926 3.799853-3.399868 5.899772-4.699818zM742.791052 162.933383L138.814468 767.009963c-2.499903-22.299135 7.399713-45.098252 26.698965-59.097708 16.099376-11.59955 26.498973-30.498818 26.498973-51.897988V386.224726c0-153.294057 109.295763-283.98899 253.890157-315.18778 10.699585-2.299911 18.199294-11.799543 18.099298-22.799116V48.037838c0-27.198946 22.599124-49.098096 49.998061-47.99814 24.899035 0.999961 45.198248 21.39917 45.998217 46.398202v1.699934c0 10.899577 7.299717 20.499205 17.999302 22.799116 61.697608 12.999496 116.895468 43.998294 159.993797 87.096623 1.599938 1.599938 3.199876 3.299872 4.799814 4.89981z"/>
    </svg>
  )
}

Vue.component('icon-bell-off-fill', Icon)
export default Icon
