/**
 * v-focus
 * @desc 当页面加载时，该元素将获得焦点
 * @example
 * ```vue
 * <div v-focus>
 * ```
 */
export default{
  inserted(el) {
      el.focus()
  }
}