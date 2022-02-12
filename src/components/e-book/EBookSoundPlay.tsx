function EBookSoundPlay(
  sound: HTMLAudioElement,
  { mainUrl, audioMeaning, audioExample }: UrlType
) {
  const audio = sound as HTMLAudioElement

  setTimeout(() => {
    (audio as HTMLAudioElement).src = `${mainUrl}${audioMeaning}`

    audio.play().then(() => {
      setTimeout(() => {
        audio.src = `${mainUrl}${audioExample}`

        audio.play()
      }, audio.duration * 1000)
    })
  }, audio.duration * 1000)
}

export default EBookSoundPlay

interface UrlType {
  mainUrl: string | undefined
  audioMeaning: string | undefined
  audioExample: string | undefined
}
