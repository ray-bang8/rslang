function RandomBgColor() {
  const colors = [
    'rgb(163, 155, 133)',
    // 'rgb(96, 79, 47)',
    'rgb(86, 89, 93)',
    'rgb(242, 204, 133)',
    'rgb(163, 162, 170)',
    'rgb(163, 162, 170)'
  ]
  // @ts-ignore
  const result = colors[(Math.random() * colors.length).toFixed()]
  return result
}

export default RandomBgColor
