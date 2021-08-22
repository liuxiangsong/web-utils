
# Array

1. **_.chunk(array, [size=1])** ：将数组以size的长度分组，并返回新的数组
2. **_.compact(array)** ： 将数组中值为false、null、0、""、undefined、NaN的值移除
3. **_.concat(array, [values])** ：将[values]拼接到array上，并返回新的数组
4. _.difference(array, [values]) ：返回array中的值不存在于[values]中的数组
5. _.differenceBy(array, [values],[iteratee=_.identity]) ：array和[values]的值经过iteratee迭代器生产新的数组，再对比两个新的数组，如果array对应的新数组不存在于后者，则保留（[参考](https://stackoverflow.com/questions/50006811/understand-lodash-differenceby-iteratee-different-array-values-greater-than-x))
6. _.differenceWith(array, [values], [comparator])：与_.difference 类似，可以自定义比较规则，[comparator(arrVal, othVal)]
7. _.drop(array, [n=1])：返回从array中删除从左起n个元素后剩余的数组
8. _.dropRight(array, [n=1])：返回从array中删除从右起n个元素后剩余的数组
9. _.dropWhile(array, [predicate=_.identity]) ：从右起，移除[predicate]返回true的元素，直到其为false为止；[predicate(value, index, array)]
10. _.dropRightWhile(array, [predicate=_.identity])
11. _.fill(array, value, [start=0], [end=array.length]) ：用value来替换array中相应位置的元素
12. _.findIndex(array, [predicate=_.identity], [fromIndex=0])
13. _.findLastIndex(array, [predicate=_.identity], [fromIndex=array.length-1])
14. _.flatten(array)：减少一级array嵌套深度
15. _.flattenDeep(array)：将array递归为一维数组
16. _.flattenDepth(array, [depth=1])：根据 depth 递归减少 array 的嵌套层级
17. _.fromPairs(pairs)： pairs为二维数组，将二维数组中元素的第一个值当作key,第二个值为value,返回新的对象；与_.toPairs相反
18. _.head(array) ：与_.first(array)一样
19. _.indexOf(array, value, [fromIndex=0])
20. _.last(array)
21. _.lastIndexOf(array, value, [fromIndex=array.length-1])
22. _.initial(array)：返回除array中除最后一个元素外的所有元素
23. _.intersection([arrays])：返回每个array中都包含的元素
24. _.intersectionBy([arrays], [iteratee=_.identity])
25. _.intersectionWith([arrays], [comparator])
26. _.join(array, [separator=','])
27. _.nth(array, [n=0])：返回第n个元素，n为负数时，则返回从后往前第n个元素
28. _.pull(array, ...value)： 移除array中元素值与value相等的元素（*会影响原数组*）
29. _.pullAll(array, values)：与pull相似，区别在于pullAll的第二个参数为数组
30. _.pullAllBy(array, values, [iteratee=_.identity])
31. _.pullAllWith(array, values, [comparator])
32. _.pullAt(array, [indexes])
33. _.remove(array, [predicate=_.identity])：[predicate(value, index, array)]（*会影响原数组*）
34. _.reverse(array)：（*会影响原数组*）
35. _.slice(array, [start=0], [end=array.length])
36. _.sortedIndex(array, value)：用二进制的方式检索value应该插入到数组中尽可能小的索引位置，以保证array的排序
37. _.sortedIndexBy(array, value, [iteratee=_.identity])
38. _.sortedIndexOf(array, value)
39. _.sortedLastIndex(array, value)
40. _.sortedLastIndexBy(array, value, [iteratee=_.identity])
41. _.sortedLastIndexOf(array, value)
42. _.sortedUniq(array)
43. _.sortedUniqBy(array, [iteratee])
44. _.tail(array)：返回除第一个元素外的所有元素
45. **_.take(array, [n=1])**
46. _.takeRight(array, [n=1])
47. _.takeRightWhile(array, [predicate=_.identity])
48. _.takeWhile(array, [predicate=_.identity])
49. _**.union([arrays])**
50. _.unionBy([arrays], [iteratee=_.identity])
51. _.unionWith([arrays], [comparator])
52. **_.uniq(array)**
53. _.uniqBy(array, [iteratee=_.identity])
54. _.uniqWith(array, [comparator])
55. _.unzip(array)
56. _.unzipWith(array, [iteratee=_.identity])
57. _.without(array, [values])：返回array中元素不存在后面参数中的所有元素
58. _.xor([arrays])：返回数组元素不存在于其它数组中的所有元素
59. _.xorBy([arrays], [iteratee=_.identity])
60. _.xorWith([arrays], [comparator])
61. _.zip([arrays])
62. _.zipObject([props=[]], [values=[]])
63. _.zipObjectDeep([props=[]], [values=[]])
64. _.zipWith([arrays], [iteratee=_.identity])

# Collection (Array|Object)

1. **_.countBy(collection, [iteratee=_.identity])**：返回一个对象，key是经过[iteratee]处理后的结果，对应的value为key的结果出现的次数_.every(collection, [predicate=_.identity])
2. _.every(collection, [predicate=_.identity])
3. _.filter(collection, [predicate=_.identity])
4. _.find(collection, [predicate=_.identity], [fromIndex=0])
5. _.findLast(collection, [predicate=_.identity], [fromIndex=collection.length-1])
6. _.flatMap(collection, [iteratee=_.identity])
7. _.flatMapDeep(collection, [iteratee=_.identity])
8. _.flatMapDepth(collection, [iteratee=_.identity], [depth=1])
9. _.forEach(collection, [iteratee=_.identity])
10. _.forEachRight(collection, [iteratee=_.identity])
11. **_.groupBy(collection, [iteratee=_.identity])**：返回一个对象，key是经过[iteratee]处理后的结果，对应的value为key组成的数组
12. _.includes(collection, value, [fromIndex=0])
13. _.invokeMap(collection, path, [args])
14. _.keyBy(collection, [iteratee=_.identity])
15. _.map(collection, [iteratee=_.identity])
16. **_.orderBy(collection, [iteratees=[_.identity]], [orders])**
17. _.partition(collection, [predicate=_.identity])：将collection分数二组，一组为predicate为true的，另一组为predicate为false的
18. _.reduce(collection, [iteratee=_.identity], [accumulator])
19. _.reduceRight(collection, [iteratee=_.identity], [accumulator])
20. _.reject(collection, [predicate=_.identity])
21. _.sample(collection)
22. _.sampleSize(collection, [n=1])
23. _.shuffle(collection)
24. _.size(collection)
25. _.some(collection, [predicate=_.identity])
26. _.sortBy(collection, [iteratees=[_.identity]])

# Function

1. **_.after(n, func)**：当该返回函数执行次数大于等于n次后，func才执行
2. _.ary(func, [n=func.length])
3. _.before(n, func) ：func调用次数不超过n次，否则返回最后一次调用func的结果
4. _.bind(func, thisArg, [partials])
5. _.bindKey(object, key, [partials])
6. _.curry(func, [arity=func.length])
7. _.curryRight(func, [arity=func.length])
8. **_.debounce(func, [wait=0], [options={}])**
9. _.defer(func, [args])
10. _.delay(func, wait, [args])
11. _.flip(func)
12. _.memoize(func, [resolver])
13. _.negate(predicate)
14. _.once(func)
15. _.overArgs(func, [transforms=[_.identity]])
16. _.partial(func, [partials])
17. _.partialRight(func, [partials])
18. _.rearg(func, indexes)
19. _.rest(func, [start=func.length-1])
20. _.spread(func, [start=0])
21. **_.throttle(func, [wait=0], [options=])**
22. _.unary(func)
23. _.wrap(value, [wrapper=identity])

# Lang

1. _.castArray(value):如果 value 不是数组, 那么强制转为数组
2. _.clone(value)
3. **_.cloneDeep(value)**
4. **_.cloneDeepWith(value, [customizer])**
5. _.cloneWith(value, [customizer])
6. _.conformsTo(object, source)
7. _.eq(value, other)
8. _.gt(value, other)
9. _.gte(value, other)
10. _.isArguments(value)
11. _.isArray(value)
12. _.isArrayBuffer(value)
13. _.isArrayLike(value)
14. _.isArrayLikeObject(value)
15. _.isBoolean(value)
16. _.isBuffer(value)
17. _.isDate(value)
18. _.isElement(value)
19. _.isEmpty(value)
20. _.isEqual(value, other)
21. _.isEqualWith(value, other, [customizer])
22. _.isError(value)
23. _.isFinite(value)
24. _.isFunction(value)
25. _.isInteger(value)
26. _.isLength(value)
27. _.isMap(value)
28. _.isMatch(object, source)
29. _.isMatchWith(object, source, [customizer])
30. _.isNaN(value)
31. _.isNative(value)
32. _.isNil(value)
33. _.isNull(value)
34. _.isNumber(value)
35. _.isObject(value)
36. _.isObjectLike(value)
37. _.isPlainObject(value)
38. _.isRegExp(value)
39. _.isSafeInteger(value)
40. _.isSet(value)
41. _.isString(value)
42. _.isSymbol(value)
43. _.isTypedArray(value)
44. _.isUndefined(value)
45. _.isWeakMap(value)
46. _.isWeakSet(value)
47. _.lt(value, other)
48. _.lte(value, other)
49. _.toArray(value)
50. _.toFinite(value)
51. _.toInteger(value)
52. _.toLength(value)
53. _.toNumber(value)
54. _.toPlainObject(value)
55. _.toSafeInteger(value)
56. _.toSafeInteger(value)

# Math

1. _.add(augend, addend)
2. _.ceil(number, [precision=0])
3. _.divide(dividend, divisor)
4. _.floor(number, [precision=0])
5. _.max(array)
6. _.maxBy(array, [iteratee=_.identity])
7. _.mean(array)
8. _.meanBy(array, [iteratee=_.identity])
9. _.min(array)
10. _.minBy(array, [iteratee=_.identity])
11. _.multiply(multiplier, multiplicand)
12. _.round(number, [precision=0])：根据 precision四舍五入
13. _.subtract(minuend, subtrahend)
14. _.sum(array)
15. _.sumBy(array, [iteratee=_.identity])
  
# Number

1. _.clamp(-10, -5, 5);
2. _.inRange(number, [start=0], end)
3. _.random([lower=0], [upper=1], [floating])

# Object

1. _.assign(object, [sources])：分配来源对象的**可枚举属性**到目标对象上（*会影响原对象*）
2. _.assignIn(object, [sources])：与_.extend相同
3. _.assignInWith(object, sources, [customizer])
4. _.assignWith(object, sources, [customizer])
5. _.at(object, [paths])
6. _.create(prototype, [properties])
7. _.defaults(object, [sources])
8. _.defaultsDeep(object, [sources])
9. **_.findKey(object, [predicate=_.identity])**
10. _.findLastKey(object, [predicate=_.identity])
11. _.forIn(object, [iteratee=_.identity])
12. _.forInRight(object, [iteratee=_.identity])
13. _.forOwn(object, [iteratee=_.identity])
14. _.forOwnRight(object, [iteratee=_.identity])
15. _.functions(object)
16. _.functionsIn(object)
17. _.get(object, path, [defaultValue])
18. _.has(object, path)
19. _.hasIn(object, path)
20. _.invert(object)：将key和value对调过来，如果value有重复，则后面的覆盖前面的
21. _.invertBy(object, [iteratee=_.identity])
22. _.invoke(object, path, [args])
23. _.keys(object)
24. _.keysIn(object)
25. _.mapKeys(object, [iteratee=_.identity])：通过iteratee改变对象中的key。[iteratee(value, key, object)]
26. _.mapValues(object, [iteratee=_.identity])
27. _.merge(object, [sources])
28. _.mergeWith(object, sources, customizer)
29. **_.omit(object, [paths])**：返回除[paths]属性外的对象
30. _.omitBy(object, [predicate=_.identity])
31. **_.pick(object, [paths])**：返回对象中[paths]属性所组成的对象
32. _.pickBy(object, [predicate=_.identity])
33. _.result(object, path, [defaultValue])
34. _.set(object, path, value)
35. _.setWith(object, path, value, [customizer])
36. _.toPairs(object)：别名_.entries
37. _.toPairsIn(object)：别名_.entriesIn
38. _.transform(object, [iteratee=_.identity], [accumulator])
39. _.unset(object, path)
40. _.update(object, path, updater)
41. _.updateWith(object, path, updater, [customizer])
42. _.values(object)
43. _.valuesIn(object)

# Seq

# String

1. **_.camelCase([string=''])**
2. **_.capitalize([string=''])**
3. _.deburr([string=''])
4. _.endsWith([string=''], [target], [position=string.length])
5. _.escape([string=''])
6. _.escapeRegExp([string=''])
7. _.kebabCase([string=''])
8. _.lowerCase([string=''])
9. _.lowerFirst([string=''])
10. _.pad([string=''], [length=0], [chars=' '])
11. **_.padEnd([string=''], [length=0], [chars=' '])**
12. _.padStart([string=''], [length=0], [chars=' '])
13. _.parseInt(string, [radix=10])
14. **_.repeat([string=''], [n=1])**
15. _.replace([string=''], pattern, replacement)
16. _.snakeCase([string=''])
17. _.split([string=''], separator, [limit])
18. _.startCase([string=''])
19. **_.startsWith([string=''], [target], [position=0])**
20. _.template([string=''], [options={}])
21. _.toLower([string=''])
22. _.toUpper([string=''])
23. _.trim([string=''], [chars=whitespace])
24. _.trimEnd([string=''], [chars=whitespace])
25. _.trimStart([string=''], [chars=whitespace])
26. _.truncate([string=''], [options={}])
27. _.unescape([string=''])
28. _.upperCase([string=''])
29. _.upperFirst([string=''])
30. _.words([string=''], [pattern])

# Util

1. **_.attempt(func, [args])**
2. _.bindAll(object, methodNames)
3. _.cond(pairs)
4. _.conforms(source)
5. _.constant(value)
6. _.defaultTo(value, defaultValue)
7. _.flow([funcs])
8. _.flowRight([funcs])
9. _.identity(value)
10. _.iteratee([func=_.identity])
11. _.matches(source)
12. _.matchesProperty(path, srcValue)
13. _.method(path, [args])
14. _.methodOf(object, [args])
15. _.mixin([object=lodash], source, [options={}])
16. _.noConflict()
17. _.noop()
18. _.nthArg([n=0])
19. _.over([iteratees=[_.identity]])
20. _.overEvery([predicates=[_.identity]])
21. _.overSome([predicates=[_.identity]])
22. _.property(path)
23. _.propertyOf(object)
24. _.range([start=0], end, [step=1])
25. _.rangeRight([start=0], end, [step=1])
26. _.stubArray()
27. _.stubFalse()
28. _.stubObject()
29. _.stubString()
30. _.stubTrue()
31. **_.times(n, [iteratee=_.identity])**
32. _.toPath(value)
33. **_.uniqueId([prefix=''])**
