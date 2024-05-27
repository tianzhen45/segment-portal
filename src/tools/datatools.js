// 将json array对象转换为csv的文本，默认分隔符：\t，换行符 \r\n
export function JsonToCsvText (data, separator = '\t', lf = '\r\n') {
  let res = ''
  data.forEach(element => {
    for (let i in element) {
      res = res + element[i] + separator
    }
    res = res.substring(0, res.lastIndexOf(separator))
    res = res + lf
  })
  return res
}

// 将csv的文本转换为json array对象，默认分隔符：\t，换行符 \r\n , array对象格式：[{f0: '',f1: '',f3: ''...},...]
export function CsvTextToJson (data, separator = '\t', lf = '\r\n', fieldPrefix = 'f') {
  let res = []
  data = data + ''
  data.split(lf).forEach(element => {
    if (element !== '') {
      let obj = {}
      element.split(separator).forEach((e, index) => {
        obj[fieldPrefix + index] = e
      })
      res.push(obj)
    }
  })
  return res
}
