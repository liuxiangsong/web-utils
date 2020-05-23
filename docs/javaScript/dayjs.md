- 格式化
  ```js
  dayjs().format('YYYY-MM-DD HH:mm:ss')
  ```

- 加减
  ```js
  dayjs().add(7, 'd')
  dayjs().subtract(7, 'days');
  ```

- 比较
  ```js
  dayjs().diff('2020.01.01', 'd')

  dayjs('2020-01-01 20:22:22').isSame('2020-01-01 22:11:11', 'day');     //true
  dayjs('2020-01-01 20:22:22').isSame('2020-01-08 22:11:11', 'month');   //true

  dayjs('2010-10-01').isBefore('2010-11-01', 'days');   //true
  dayjs('2010-10-01').isAfter('2010-11-01', 'days');    //false
  ```
 
- 取值、赋值
  ```js
  dayjs("2012-02", "YYYY-MM").daysInMonth() // 29
  dayjs("2012-01", "YYYY-MM").daysInMonth() // 31
  ```

  - 插件
  ```js
  import dayjs from 'dayjs' 
  import isSameOrAfter  from 'dayjs/plugin/isSameOrAfter' //isSameOrAfter、isSameOrBefore、isBetween……
  dayjs.extend(isSameOrAfter)

  console.log(dayjs('2010-10-20').isSameOrAfter('2010-10-21'))
```