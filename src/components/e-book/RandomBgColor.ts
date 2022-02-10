function RandomBgColor() {
  const colors = [
    'rgb(163, 155, 133)',
    'rgb(86, 89, 93)',
    'rgb(242, 204, 133)',
    'rgb(163, 162, 170)',
    'rgb(163, 162, 170)'
  ]

  const index = (Math.random() * colors.length).toFixed()
  const result = colors[+index]
  return result
}

export default RandomBgColor
