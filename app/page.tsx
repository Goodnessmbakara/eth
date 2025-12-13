import Link from "next/link"
import { GameButton } from "@/components/game-button"
import { Volume2, Settings, ChevronDown } from "lucide-react"

export default function LandingPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-stone-dark">
      {/* Animated background with stone texture */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-[url('/dark-stone-temple-wall-texture.jpg')] bg-cover bg-center" />
      </div>

      {/* Fog overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-fog to-background/50" />

      {/* Particles/stars */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-glow-amber rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Top controls */}
      <div className="absolute top-6 right-6 flex gap-4 z-20">
        <button className="w-10 h-10 rounded-full bg-secondary/50 backdrop-blur-sm flex items-center justify-center text-foreground/70 hover:text-foreground hover:bg-secondary transition-all hover:scale-110">
          <Volume2 className="w-5 h-5" />
        </button>
        <button className="w-10 h-10 rounded-full bg-secondary/50 backdrop-blur-sm flex items-center justify-center text-foreground/70 hover:text-foreground hover:bg-secondary transition-all hover:scale-110">
          <Settings className="w-5 h-5" />
        </button>
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
        {/* Logo with glow effect */}
        <div className="mb-12 text-center animate-float">
          <h1 className="font-[family-name:var(--font-cinzel-decorative)] text-6xl md:text-8xl font-black text-glow-amber text-glow mb-4 tracking-wider">
            ETHEREUM
          </h1>
          <h2 className="font-[family-name:var(--font-cinzel-decorative)] text-5xl md:text-7xl font-black text-glow-cyan text-glow tracking-widest">
            QUEST
          </h2>
          <div className="mt-6 w-48 h-1 mx-auto bg-gradient-to-r from-transparent via-glow-amber to-transparent animate-shimmer" />
        </div>

        {/* Description */}
        <p className="font-[family-name:var(--font-cinzel)] text-center max-w-md md:max-w-lg text-foreground/80 text-lg md:text-xl leading-relaxed mb-12 text-balance">
          A mystical journey into the world of Ethereum. Learn ancient knowledge, solve cryptic puzzles, and conquer
          legendary quests.
        </p>

        <Link href="/quests">
          <GameButton size="lg" className="text-xl md:text-2xl px-12 py-6 mb-8">
            Start Adventure
          </GameButton>
        </Link>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground animate-bounce">
          <span className="text-sm font-[family-name:var(--font-cinzel)] tracking-wider">Scroll for Instructions</span>
          <ChevronDown className="w-6 h-6" />
        </div>
      </div>

      {/* Bottom instructions section (visible on scroll) */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <h3 className="font-[family-name:var(--font-cinzel-decorative)] text-4xl font-bold text-glow-amber text-glow-sm">
            How to Play
          </h3>
          <div className="space-y-6 text-foreground/80 font-[family-name:var(--font-cinzel)] text-lg leading-relaxed">
            <div className="p-6 bg-card/50 backdrop-blur-sm rounded-lg border border-border">
              <h4 className="text-xl font-bold text-glow-cyan mb-2">📜 Read the Scrolls</h4>
              <p>Ancient parchments will reveal the knowledge you seek</p>
            </div>
            <div className="p-6 bg-card/50 backdrop-blur-sm rounded-lg border border-border">
              <h4 className="text-xl font-bold text-glow-cyan mb-2">🏛️ Explore Quest Rooms</h4>
              <p>Solve rune puzzles and answer riddles to collect letters</p>
            </div>
            <div className="p-6 bg-card/50 backdrop-blur-sm rounded-lg border border-border">
              <h4 className="text-xl font-bold text-glow-cyan mb-2">❓ Answer the Riddles</h4>
              <p>Prove your wisdom by conquering the quiz challenges</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
