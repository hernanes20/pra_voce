"use client"

import { useEffect, useState, useRef } from "react"
import { Volume2, VolumeX, Play, Pause } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function TributePage() {
  const [isMuted, setIsMuted] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    // set default volume when element is available
    if (audioRef.current) {
      audioRef.current.volume = 0.3
      audioRef.current.loop = true
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.pause()
        audioRef.current.src = ''
      }
    }
  }, [])

  const toggleMute = () => {
    const el = audioRef.current
    if (el) {
      el.muted = !el.muted
      setIsMuted(el.muted)
    }
  }

  const handlePlayPause = async () => {
    const el = audioRef.current
    if (!el) return

    if (isPlaying) {
      el.pause()
      setIsPlaying(false)
      return
    }

    try {
      await el.play()
      setIsPlaying(true)
    } catch (err) {
      console.error('Erro ao tentar reproduzir o áudio:', err)
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Audio Control */}
      <Button
        variant="ghost"
        size="icon"
        className="fixed top-6 right-6 z-50 bg-background/80 backdrop-blur-sm hover:bg-background/90"
        onClick={toggleMute}
      >
        {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
      </Button>

      {/* Play/Pause Control */}
      <Button
        variant="ghost"
        size="icon"
        className="fixed top-6 right-16 z-50 bg-background/80 backdrop-blur-sm hover:bg-background/90"
        onClick={handlePlayPause}
      >
        {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
      </Button>

      {/* Hidden audio element served from /public */}
      <audio ref={el => { audioRef.current = el }} src="/callmeblondie.mp3" />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h1 className="text-6xl md:text-8xl font-serif text-balance">
            Para Alguém <span className="italic text-accent">Extraordinária</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl mx-auto text-pretty">
            Existe uma energia única em pessoas que iluminam qualquer ambiente. Você é uma dessas pessoas.
          </p>
        </div>
      </section>

      {/* First Image Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-serif text-balance">
              Inteligência que <span className="italic text-accent">Inspira</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
              A verdadeira inteligência não está apenas no conhecimento, mas na forma como você usa sua mente para
              criar, resolver e transformar. Você tem esse dom raro.
            </p>
            <blockquote className="border-l-4 border-accent pl-6 italic text-lg">
              "A mente que se abre a uma nova ideia jamais voltará ao seu tamanho original."
            </blockquote>
          </div>
          <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20251023-WA0081-46I6Kn7YhP1gl1NBnDLgJaKu118JB9.jpg"
              alt="Momento especial"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-32 px-6 bg-accent/5">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <p className="text-3xl md:text-5xl font-serif text-balance leading-relaxed">
            "Determinação não é sobre nunca cair, mas sobre se levantar todas as vezes."
          </p>
          <p className="text-lg text-muted-foreground">E você sempre se levanta mais forte.</p>
        </div>
      </section>

      {/* Second Image Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl md:order-1">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20251023-WA0082-5EYjtUru1gu35yE5C49R1TyfhZyDJo.jpg"
              alt="Momento especial"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="space-y-6 md:order-2">
            <h2 className="text-4xl md:text-5xl font-serif text-balance">
              Charme <span className="italic text-accent">Natural</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
              Existe algo magnético em pessoas autênticas. Não é sobre perfeição, é sobre ser genuinamente você. E isso
              é o que torna você tão especial.
            </p>
            <blockquote className="border-l-4 border-accent pl-6 italic text-lg">
              "Seja você mesmo. Todos os outros já existem."
            </blockquote>
          </div>
        </div>
      </section>

      {/* Third Image Section */}
      <section className="py-20 px-6 bg-accent/5">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-serif text-balance">
              Determinação que <span className="italic text-accent">Move Montanhas</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
              Pessoas determinadas não esperam oportunidades, elas as criam. Sua força de vontade é admirável e
              inspiradora.
            </p>
            <blockquote className="border-l-4 border-accent pl-6 italic text-lg">
              "O sucesso é a soma de pequenos esforços repetidos dia após dia."
            </blockquote>
          </div>
          <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20251023-WA0083-D9fRq2FQjfzozmWwmBmTKz7vuCfiu6.jpg"
              alt="Momento especial"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Fourth Image Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl md:order-1">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20251023-WA0084-0khAciVNYerh4k8zjmNKpFmu5S1Kas.jpg"
              alt="Momento especial"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="space-y-6 md:order-2">
            <h2 className="text-4xl md:text-5xl font-serif text-balance">
              Brilho <span className="italic text-accent">Próprio</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
              Algumas pessoas nascem para brilhar. Não é sobre chamar atenção, é sobre ter uma luz interior que
              naturalmente atrai e inspira.
            </p>
            <blockquote className="border-l-4 border-accent pl-6 italic text-lg">
              "Não tenha medo de brilhar. O mundo precisa da sua luz."
            </blockquote>
          </div>
        </div>
      </section>

      {/* Final Message */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-5xl md:text-7xl font-serif text-balance">
            Continue <span className="italic text-accent">Sendo Você</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed text-pretty">
            O mundo precisa de mais pessoas como você: autênticas, determinadas, inteligentes e inspiradoras. Nunca
            subestime o impacto que você tem nas pessoas ao seu redor.
          </p>
          <div className="pt-8">
            <p className="text-lg text-muted-foreground italic">De alguém que admira muito você</p>
          </div>
        </div>
      </section>
    </div>
  )
}
