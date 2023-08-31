
/**
 * 该文件由 .my/core/build/svg.js 生成
 */
 
import Vue from 'vue'
import globalConfig from '$ui/config'

const Icon = ({props}) => {
  const attrs = {...globalConfig.svg, ...props}
  return (
    <svg {...{attrs: attrs}}>
       <path d="M998.82512232 553.88815391c7.85402885 7.85402885 11.84337685 17.32873034 11.84337684 28.0501031 0 10.84603987-3.86468087 20.19607421-11.84337684 28.05010308-7.85402885 7.85402885-17.32873034 11.84337685-28.05010308 11.84337686H831.14783948c0 71.06026113-13.83805085 131.39914953-41.88815393 180.89199806l129.65380976 130.40181255c7.85402885 7.85402885 11.84337685 17.20406323 11.84337687 28.05010308 0 10.72137273-3.86468087 20.19607421-11.84337687 28.05010306-7.48002749 7.85402885-16.83006183 11.84337685-28.05010306 11.84337687-11.34470836 0-20.57007561-3.86468087-28.05010305-11.84337687l-123.29578645-123.04645218c-2.11934113 2.11934113-5.23601926 4.73735075-9.35003437 8.10336311-4.11401514 3.24134525-12.84071385 9.35003436-26.30476332 17.82739886-13.21471524 8.4773645-26.80343183 16.20672625-40.51681556 22.81408384-13.71338369 6.73202476-30.79277981 12.71604672-51.11352116 18.07673308-20.32074133 5.36068635-40.51681555 8.1033631-60.46355551 8.10336313V382.34619022h-79.91162702v558.63338617c-21.31807832 0-42.38682244-2.74267673-63.33089938-8.35269732-20.94407697-5.61002062-39.02081006-12.46671248-54.23019931-20.57007563s-28.79810581-16.33139336-41.26481828-24.18542219c-12.34204536-8.1033631-21.31807832-14.83538786-27.17743322-20.32074135l-9.35003435-8.72669873-113.82108497 128.78113993c-8.22803022 8.72669874-18.32606734 13.0900481-29.92010993 13.09004807-9.97336998 0-18.82473584-3.24134525-26.80343182-9.97336995-7.85402885-7.48002749-12.21737821-16.83006183-12.71604673-27.80076885-0.62333562-11.0953741 2.6180096-20.69474273 9.72403572-28.92277295l125.91379605-141.49718664c-24.06075508-47.3735074-36.2781333-104.34638345-36.2781333-170.91862809H53.22498076c-10.72137273 0-20.19607421-3.86468087-28.05010308-11.84337686-7.85402885-7.85402885-11.84337685-17.20406323-11.84337684-28.05010306 0-10.72137273 3.86468087-20.19607421 11.84337684-28.05010308 7.85402885-7.85402885 17.20406323-11.84337685 28.05010308-11.84337685h139.62717976V358.78410362l-107.83706294-107.83706295c-7.85402885-7.85402885-11.84337685-17.20406323-11.84337684-28.05010309 0-10.72137273 3.86468087-20.19607421 11.84337684-28.05010304s17.20406323-11.84337685 28.05010308-11.84337686c10.72137273 0 20.19607421 3.86468087 28.05010308 11.84337686l107.83706295 107.83706293h526.09526662l107.83706295-107.83706293c7.85402885-7.85402885 17.20406323-11.84337685 28.05010308-11.84337686 10.72137273 0 20.19607421 3.86468087 28.05010308 11.84337686 7.85402885 7.85402885 11.84337685 17.32873034 11.84337684 28.05010304s-3.86468087 20.19607421-11.84337684 28.05010309L831.14783948 358.78410362v183.26067343h139.62717976c10.970707-0.12466711 20.19607421 3.86468087 28.05010308 11.84337686zM711.59206678 222.7722705H312.40793322c0-55.3522034 19.44807148-102.35170945 58.3442144-141.24785242 38.77147581-38.77147581 85.89564898-58.34421441 141.24785238-58.34421438s102.35170945 19.44807148 141.24785238 58.34421438c38.77147581 38.89614294 58.34421441 85.89564898 58.3442144 141.24785242z"/>
    </svg>
  )
}

Vue.component('icon-bedbug', Icon)
export default Icon
