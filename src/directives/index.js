import {myrestrict} from './inputRestrict' 
import focus from './focus'
import clipboard from './clipboard'

const install = function (Vue) {
    Vue.directive('focus', focus)
    Vue.directive('myrestrict', myrestrict)
    Vue.directive('clipboard', clipboard)
}
export default install