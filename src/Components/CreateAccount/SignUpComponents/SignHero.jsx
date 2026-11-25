import HeroText from "./heroText";

function SignHero() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-linear-to-br from-indigo-700 to-violet-500 border flex w-[60%] items-center">
      <HeroText></HeroText>
      <svg
        viewBox="0 0 400 330"
        role="img"
        aria-label="Kanban board illustration"
        className=" w-[40%] h-fit border"
      >
        {/* absolute bottom-28 right-10 */}
        <defs>
          <linearGradient id="boardGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#2e2a6b" />
            <stop offset="1" stopColor="#1b1750" />
          </linearGradient>
          <linearGradient id="glowCard" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#4f7bff" stopOpacity=".55" />
            <stop offset="1" stopColor="#7c5cff" stopOpacity=".35" />
          </linearGradient>
        </defs>

        <g fill="none" stroke="#fff" strokeOpacity=".7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M120 92 V40 H148" />
          <path d="M252 40 H280 V86" />
          <path d="M275 80 L280 88 L285 80" />
        </g>

        <rect x="150" y="14" width="102" height="52" rx="8" fill="#fff" fillOpacity=".22" stroke="#fff" strokeOpacity=".45" />
        <rect x="164" y="34" width="50" height="5" rx="2.5" fill="#fff" fillOpacity=".8" />
        <rect x="164" y="45" width="72" height="5" rx="2.5" fill="#fff" fillOpacity=".5" />
        <circle cx="201" cy="14" r="12" fill="#34d399" />
        <path d="M195 14 l5 5 l8 -9" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="240" cy="60" r="6" fill="#60a5fa" stroke="#fff" strokeOpacity=".6" />

        <rect x="60" y="92" width="300" height="190" rx="12" fill="url(#boardGrad)" />
        <circle cx="76" cy="107" r="3.5" fill="#f87171" />
        <circle cx="88" cy="107" r="3.5" fill="#fbbf24" />
        <circle cx="100" cy="107" r="3.5" fill="#34d399" />

        <rect x="74" y="124" width="84" height="66" rx="8" fill="url(#glowCard)" stroke="#8fb0ff" strokeWidth="1.5" />
        <rect x="84" y="134" width="30" height="4" rx="2" fill="#fff" />
        <rect x="84" y="147" width="56" height="4" rx="2" fill="#fff" fillOpacity=".6" />
        <rect x="84" y="157" width="44" height="4" rx="2" fill="#fff" fillOpacity=".4" />
        <circle cx="144" cy="178" r="6" fill="#34d399" />

        <rect x="168" y="124" width="84" height="52" rx="8" fill="#3b3787" />
        <rect x="178" y="133" width="30" height="4" rx="2" fill="#34d399" />
        <rect x="178" y="145" width="58" height="4" rx="2" fill="#fff" fillOpacity=".6" />
        <rect x="178" y="155" width="40" height="4" rx="2" fill="#fff" fillOpacity=".4" />
        <rect x="168" y="186" width="84" height="56" rx="8" fill="#4b3a9c" stroke="#a78bfa" strokeOpacity=".6" />
        <rect x="178" y="196" width="50" height="4" rx="2" fill="#fff" fillOpacity=".7" />
        <rect x="178" y="207" width="34" height="4" rx="2" fill="#fff" fillOpacity=".4" />

        <rect x="262" y="124" width="84" height="62" rx="8" fill="#3b3787" />
        <rect x="272" y="133" width="30" height="4" rx="2" fill="#fb923c" />
        <rect x="272" y="145" width="58" height="4" rx="2" fill="#fff" fillOpacity=".6" />
        <rect x="272" y="155" width="44" height="4" rx="2" fill="#fff" fillOpacity=".4" />
        <circle cx="282" cy="173" r="5" fill="#fbbf24" />
        <circle cx="297" cy="173" r="5" fill="#fb7185" />

        <g transform="rotate(12 340 128)">
          <rect x="322" y="108" width="40" height="40" rx="3" fill="#fcd34d" />
          <rect x="329" y="120" width="26" height="3" rx="1.5" fill="#b45309" fillOpacity=".5" />
          <rect x="329" y="129" width="20" height="3" rx="1.5" fill="#b45309" fillOpacity=".5" />
        </g>

        <rect x="20" y="196" width="88" height="112" rx="10" fill="#312e81" stroke="#6366f1" strokeOpacity=".6" />
        <rect x="42" y="188" width="44" height="14" rx="5" fill="#93a8ff" />
        <g fill="none" stroke="#34d399" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M34 224 l4 4 l7 -8" />
          <path d="M34 246 l4 4 l7 -8" />
        </g>
        <rect x="54" y="222" width="38" height="5" rx="2.5" fill="#fff" fillOpacity=".7" />
        <rect x="54" y="244" width="30" height="5" rx="2.5" fill="#fff" fillOpacity=".7" />
        <rect x="34" y="266" width="9" height="9" rx="2" fill="none" stroke="#fff" strokeOpacity=".5" />
        <rect x="54" y="268" width="34" height="5" rx="2.5" fill="#fff" fillOpacity=".35" />
        <rect x="34" y="286" width="9" height="9" rx="2" fill="none" stroke="#fff" strokeOpacity=".5" />
        <rect x="54" y="288" width="26" height="5" rx="2.5" fill="#fff" fillOpacity=".35" />

        <rect x="132" y="262" width="86" height="40" rx="8" fill="#3b3787" />
        <circle cx="175" cy="272" r="13" fill="#60a5fa" />
        <path d="M148 296 L170 278 L192 296 Z" fill="#818cf8" />

        <g transform="rotate(-8 270 296)">
          <rect x="222" y="290" width="84" height="9" rx="2" fill="#fb923c" />
          <path d="M306 290 L320 294.500 L306 299 Z" fill="#fde68a" />
          <rect x="222" y="290" width="10" height="9" rx="2" fill="#f472b6" />
        </g>

        <rect x="322" y="244" width="62" height="60" rx="8" fill="#4338ca" stroke="#818cf8" strokeOpacity=".6" />
        <rect x="334" y="214" width="8" height="40" rx="2" fill="#fbbf24" transform="rotate(-10 338 234)" />
        <rect x="350" y="208" width="8" height="46" rx="2" fill="#38bdf8" transform="rotate(8 354 231)" />
        <rect x="364" y="220" width="8" height="34" rx="2" fill="#f472b6" transform="rotate(18 368 237)" />
        <rect x="334" y="266" width="38" height="5" rx="2.5" fill="#fff" fillOpacity=".4" />
      </svg>
    </div>
  );
}

export default SignHero;
