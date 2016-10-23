const renderEach = (array, templateId) => {
  return array.reduce((previous, item) => {
    return previous + render(templateId,item)
  },'')
}
const render = (templateId, data) => {
  let template = document.getElementById(templateId).innerHTML
  const regex = /{{(.+)}}/g
  while(match = regex.exec(template)) {
    template = template.replace(match[0], data[match[1]])
  }
  const regex_func = /{%(.+)%}/g
  while(match = regex_func.exec(template)) {
    template = template.replace(match[0], eval(match[1]))
  }
  return template;
}
