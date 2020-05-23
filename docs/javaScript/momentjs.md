- 格式化
  ```js
  moment().format('YYYY-MM-DD HH:mm:ss')
  ```

- 加减
  ```js
  moment().add(7, 'd')
  moment().subtract(7, 'days');
  ```

- 比较
  ```js
  moment().diff('2020.01.01', 'd')

  moment('2020-01-01 20:22:22').isSame('2020-01-01 22:11:11', 'day');     //true
  moment('2020-01-01 20:22:22').isSame('2020-01-08 22:11:11', 'month');   //true

  moment('2010-10-01').isBefore('2010-11-01', 'days');   //true
  moment('2010-10-01').isAfter('2010-11-01', 'days');    //false
  
  moment('2010-10-20').isSameOrBefore('2010-10-21');     //true
  moment('2010-10-20').isSameOrAfter('2010-10-20');      //true

  moment('2010-10-20').isBetween('2010-10-19', '2010-10-25');            // true
  moment('2010-10-20').isBetween('2010-01-01', '2012-01-01', 'year');    // false
  ```
 
- 取值、赋值
  ```js
  moment("2012-02", "YYYY-MM").daysInMonth() // 29
  moment("2012-01", "YYYY-MM").daysInMonth() // 31
  ```

