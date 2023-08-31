
/**
 * 该文件由 .my/core/build/svg.js 生成
 */
 
import Vue from 'vue'
import globalConfig from '$ui/config'

const Icon = ({props}) => {
  const attrs = {...globalConfig.svg, ...props}
  return (
    <svg {...{attrs: attrs}}>
       <path d="M978.161191 47.788333l-2.49939-2.49939c-61.385013-61.385013-161.960459-61.385013-223.345472 0L533.269807 264.435441c-48.688113 48.688113-58.785648 121.970222-30.292604 180.855845 5.89856 12.296998 3.499146 26.893434-6.198487 36.591067l-14.796387 14.796388c-9.597657 9.597657-24.294069 12.097047-36.591067 6.198486-58.885624-28.493044-132.167732-18.395509-180.855846 30.292605l-218.946546 218.946546c-61.385013 61.385013-61.385013 161.960459 0 223.345472l2.49939 2.49939c61.385013 61.385013 161.960459 61.385013 223.345472 0L490.480254 758.814742c48.588138-48.588138 58.785648-121.670295 30.492555-180.455943-5.89856-12.197022-3.39917-26.893434 6.198487-36.491091l14.996339-14.996339c9.597657-9.597657 24.194093-12.097047 36.491091-6.198486 58.785648 28.293093 131.867806 18.095582 180.455943-30.492556l219.146498-219.146497c61.385013-61.285038 61.385013-161.760508-0.099976-223.245497zM472.584623 647.142006c0 25.193849-9.697632 48.788089-27.293337 66.483769L226.144789 932.672297c-17.595704 17.595704-41.189944 27.293337-66.483769 27.293336-25.193849 0-48.788089-9.697632-66.483768-27.293336l-2.49939-2.49939c-17.595704-17.595704-27.293337-41.189944-27.293337-66.483769 0-25.193849 9.697632-48.788089 27.293337-66.483768l219.246473-218.946546c17.595704-17.595704 41.189944-27.293337 66.383793-27.293337 4.798828 0 9.497681 0.299927 14.096558 0.999756 13.096803 1.899536 18.395509 17.795655 9.097779 27.193361l-67.983402 67.983402c-12.296998 12.296998-13.096803 32.392092-1.099732 45.088992 12.396973 13.096803 33.191897 13.396729 45.888797 0.699829l68.183354-68.183353c9.29773-9.29773 25.293825-4.098999 27.093385 8.897827 0.699829 4.29895 0.999756 8.897828 0.999756 13.496705zM932.972224 225.944838L713.825726 444.99136c-17.595704 17.595704-41.189944 27.293337-66.383793 27.293336-4.598877 0-9.197754-0.299927-13.696656-0.999756-12.996827-1.899536-18.095582-17.895631-8.897828-27.093385l56.886112-56.886112c12.496949-12.496949 12.496949-32.791994 0-45.288943s-32.791994-12.496949-45.288943 0l-57.086063 57.086063c-9.29773 9.29773-25.193849 3.999024-27.193361-9.097779-0.699829-4.598877-0.999756-9.29773-0.999756-14.096558 0-25.193849 9.697632-48.788089 27.293337-66.483769L797.605272 90.577886C815.200976 72.982182 838.795216 63.28455 864.089041 63.28455c25.193849 0 48.788089 9.697632 66.483768 27.293336l2.49939 2.49939c17.595704 17.595704 27.293337 41.189944 27.293337 66.383793-0.099976 25.293825-9.797608 48.788089-27.393312 66.483769z"/>
    </svg>
  )
}

Vue.component('icon-link', Icon)
export default Icon
