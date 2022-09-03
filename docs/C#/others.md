```C#
  /// <summary>
  /// 获得字符串中开始和结束字符串中间得值
  /// </summary>
  /// <param name="text">字符串</param>
  /// <param name="startWords">开始</param>
  /// <param name="endWords">结束</param>
  /// <returns></returns> 
  public static string GetBetweenText(string text, string startWords, string endWords)
  {
      Regex rg = new Regex("(?<=(" + startWords + "))[.\\s\\S]*?(?=(" + endWords + "))", RegexOptions.Multiline | RegexOptions.Singleline);
      return rg.Match(text).Value.Trim(' ', '\r', '\n');
  }
```