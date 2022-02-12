export default function getRandomWord(data: Object[]) {
  const index = (Math.random() * data.length).toFixed()
  return data[+index]
}
