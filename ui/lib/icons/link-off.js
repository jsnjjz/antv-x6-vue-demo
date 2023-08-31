
/**
 * 该文件由 .my/core/build/svg.js 生成
 */
 
import Vue from 'vue'
import globalConfig from '$ui/config'

const Icon = ({props}) => {
  const attrs = {...globalConfig.svg, ...props}
  return (
    <svg {...{attrs: attrs}}>
       <path d="M310.151335 578.579548c17.583044-17.583044 41.160306-27.273698 66.435931-27.273698 25.175721 0 48.752984 9.690655 66.435932 27.273698l2.497591 2.497591c17.583044 17.583044 27.273698 41.160306 27.273698 66.435932 0 25.175721-9.690655 48.752984-27.273698 66.435931l-219.088718 218.789008c-17.583044 17.583044-41.160306 27.273698-66.435932 27.273698s-48.752984-9.690655-66.435931-27.273698l-2.497592-2.497592c-17.583044-17.583044-27.273698-41.160306-27.273698-66.435931 0-25.175721 9.690655-48.752984 27.273698-66.435932l219.088719-218.789007m-45.256357-45.256356L46.006067 752.312006c-61.340845 61.340845-61.340845 161.843923 0 223.184769l2.497592 2.497591c61.340845 61.340845 161.843923 61.340845 223.184768 0L490.577338 759.005551c61.340845-61.340845 61.340845-161.843923 0-223.184768l-2.497591-2.497591c-61.340845-61.340845-161.843923-61.340845-223.184769 0zM797.481371 91.249512C815.064414 73.666469 838.641677 63.975814 863.917302 63.975814c25.175721 0 48.752984 9.690655 66.435932 27.273698l2.497591 2.497592c17.583044 17.583044 27.273698 41.160306 27.273698 66.435931s-9.690655 48.752984-27.273698 66.435932L713.762107 445.407974c-17.583044 17.583044-41.160306 27.273698-66.435932 27.273698-25.175721 0-48.752984-9.690655-66.435931-27.273698l-2.497592-2.497591c-17.583044-17.583044-27.273698-41.160306-27.273698-66.435932 0-25.175721 9.690655-48.752984 27.273698-66.435931l219.088719-218.789008m-45.256357-45.256356L533.336103 264.981971c-61.340845 61.340845-61.340845 161.843923 0 223.184768l2.497592 2.497591c61.340845 61.340845 161.843923 61.340845 223.184768 0l218.888911-218.888911c61.340845-61.340845 61.340845-161.843923 0-223.184768l-2.497591-2.497592c-61.340845-61.440749-161.74402-61.440749-223.184769-0.099903zM448.018381 416.33601l0.999036-238.769739-96.906547-32.968206zM384.080041 432.320595l-207.799606-79.922925 47.953755 95.90751zM575.895061 577.180897l32.468688 240.268293L671.802571 736.02771zM607.864231 593.165482l191.81502 110.893058-47.953755-95.90751zM368.095456 368.382255l-79.922926-111.892095-15.984585 79.922925z"/>
    </svg>
  )
}

Vue.component('icon-link-off', Icon)
export default Icon
