
/**
 * 该文件由 .my/core/build/svg.js 生成
 */
 
import Vue from 'vue'
import globalConfig from '$ui/config'

const Icon = ({props}) => {
  const attrs = {...globalConfig.svg, ...props}
  return (
    <svg {...{attrs: attrs}}>
       <path d="M815.998195 195.598839c-10.299939-2.299986-20.999875-3.599979-31.99981-3.599979s-21.699871 1.199993-31.99981 3.599979c-64.099619 14.499914-111.999335 71.899573-111.999335 140.399166 0 55.699669 31.599812 103.999383 77.899537 127.899241 21.099875 10.899935 34.099798 32.999804 34.099798 56.799662V807.995203c0 40.599759-15.799906 78.799532-44.499736 107.499361-28.999828 28.999828-68.699592 45.099732-109.599349 44.499736-39.999763-0.499997-77.49954-16.499902-105.799372-44.999733-28.499831-28.799829-44.099738-67.999596-44.099738-108.499356v-72.799567c0-26.099845 15.599907-49.799704 39.799764-59.599646 24.099857-9.799942 45.899727-24.299856 63.99962-42.399749C586.499558 596.996455 607.99943 548.99674 607.99943 495.997055V127.99924c0-35.29979-14.299915-67.2996-37.499777-90.499463C547.29979 14.299915 515.29998 0 480.00019 0c-8.799948 0-16.7999 3.599979-22.599866 9.399944-5.799966 5.799966-9.399944 13.799918-9.399944 22.599866s3.599979 16.7999 9.399944 22.599866c5.799966 5.799966 13.899917 9.399944 22.799865 9.399944 35.499789-0.099999 63.899621 29.499825 63.89962 64.999614v365.597829c0 34.699794-13.49992 68.299594-38.199773 92.599451-16.299903 16.099904-36.199785 27.199839-57.799657 32.799805-10.299939 2.699984-21.099875 3.999976-31.99981 3.999976s-21.699871-1.399992-31.99981-3.999976c-21.599872-5.499967-41.499754-16.699901-57.799656-32.799805-24.699853-24.399855-38.199773-57.899656-38.199774-92.599451V127.99924c0-17.699895 7.199957-33.6998 18.699889-45.299731S334.301055 63.99962 352.00095 63.99962c8.799948 0 16.7999-3.599979 22.599866-9.399944 5.799966-5.799966 9.399944-13.799918 9.399944-22.599866s-3.599979-16.7999-9.399944-22.599866C368.80085 3.599979 360.800898 0 352.00095 0c-70.69958 0-127.99924 57.29966-127.99924 127.99924v367.997815c0 80.599521 49.699705 149.599112 120.099287 178.098943 24.299856 9.799942 39.899763 33.6998 39.899763 59.799644v72.199572c0 119.699289 97.899419 218.798701 217.598708 217.898706 58.99965-0.399998 112.399333-24.499855 151.099103-63.299624C791.798339 921.594528 815.998195 867.594849 815.998195 807.995203V520.796908c0-23.799859 12.999923-45.899727 34.099798-56.799663 46.299725-23.999858 77.899537-72.299571 77.899537-127.99924 0-68.499593-47.899716-125.899252-111.999335-140.399166z m0 213.698731c-9.799942 4.299974-20.599878 6.69996-31.99981 6.69996s-22.199868-2.399986-31.99981-6.69996c-28.199833-12.399926-47.999715-40.599759-47.999715-73.299565s19.799882-60.999638 47.999715-73.299565c9.799942-4.299974 20.599878-6.69996 31.99981-6.69996s22.199868 2.399986 31.99981 6.69996c28.199833 12.399926 47.999715 40.599759 47.999715 73.299565s-19.799882 60.999638-47.999715 73.299565zM783.998385 303.998195c-17.699895 0-31.99981 14.299915-31.99981 31.99981s14.299915 31.99981 31.99981 31.99981 31.99981-14.299915 31.99981-31.99981-14.299915-31.99981-31.99981-31.99981z"/>
    </svg>
  )
}

Vue.component('icon-check', Icon)
export default Icon
