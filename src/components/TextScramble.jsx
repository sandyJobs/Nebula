import React from 'react'

const CHARS = '!<>-_\/[]{}—=+*^?#________'

const TextScramble = ({ text, duration = 1000, className = '' }) => {
  const [output, setOutput] = React.useState(text)
  const ref = React.useRef({ frame: 0, queue: [] })

  React.useEffect(() => {
    const from = output
    const length = Math.max(from.length, text.length)
    const queue = []
    for (let i = 0; i < length; i++) {
      const fromChar = from[i] || ''
      const toChar = text[i] || ''
      const start = Math.floor(Math.random() * 20)
      const end = start + Math.floor((duration / 16) * (0.3 + Math.random() * 0.7))
      queue.push({ fromChar, toChar, start, end, char: '' })
    }
    ref.current = { frame: 0, queue }

    const update = () => {
      let out = ''
      let complete = 0
      for (let i = 0; i < queue.length; i++) {
        const q = queue[i]
        if (ref.current.frame >= q.end) { complete++; out += q.toChar }
        else if (ref.current.frame >= q.start) {
          if (!q.char || Math.random() < 0.28) q.char = CHARS[Math.floor(Math.random() * CHARS.length)]
          out += q.char
        } else out += q.fromChar
      }
      setOutput(out)
      ref.current.frame++
      if (complete < queue.length) requestAnimationFrame(update)
    }
    update()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text])

  return <span className={className}>{output}</span>
}

export default TextScramble


