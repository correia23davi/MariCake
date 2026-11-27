import { useEffect, useRef, useState } from 'react';

function Icon({ type = 'heart', className = '' }: { type?: 'heart' | 'arrow' | 'spark' | 'cake' | 'down'; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className={`h-5 w-5 shrink-0 ${className}`} aria-hidden="true">
      {type === 'heart' && <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z" />}
      {type === 'arrow' && <path d="M4 12h15m-5-5 5 5-5 5" />}
      {type === 'down' && <path d="M12 4v16m-5-5 5 5 5-5" />}
      {type === 'spark' && <path d="m12 2 2.5 7.5L22 12l-7.5 2.5L12 22l-2.5-7.5L2 12l7.5-2.5Z" />}
      {type === 'cake' && <><path d="M4 11h16v9H4zM4 14q2 4 4 0 2 4 4 0 2 4 4 0 2 4 4 0M8 11V7m8 4V7M3 20h18" /><path d="M8 4v1m8-1v1" /></>}
    </svg>
  );
}

function Photo({ src, alt, className = '' }: { src: string; alt: string; className?: string }) {
  const [failed, setFailed] = useState(false);
  return failed ? (
    <div className={`flex items-center justify-center bg-[#f2e7d4] text-[#DC143C] ${className}`} role="img" aria-label={alt}>
      <svg viewBox="0 0 120 100" className="h-28 w-32" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <ellipse cx="60" cy="78" rx="49" ry="10" /><path d="M23 42v30c0 12 74 12 74 0V42M23 45c8 20 13-3 21 8s13 13 19-1 15 14 20 0 9-2 14-7" /><ellipse cx="60" cy="41" rx="37" ry="12" /><path d="M60 26S37 13 48 7c8-5 12 5 12 5s7-10 13-5c10 7-13 19-13 19Z" />
      </svg>
    </div>
  ) : <img src={src} alt={alt} onError={() => setFailed(true)} className={className} />;
}

const cakes = [
  { name: 'Cenoura com chocolate', note: 'O abraço mais doce da infância.', description: 'Massa fofinha de cenoura com aquela cobertura generosa de chocolate. Um clássico que nunca deixa de encantar.', image: '/images/bolo-caseiro.png', tag: 'O queridinho' },
  { name: 'Chocolate', note: 'Para quem ama um carinho intenso.', description: 'Chocolate na massa e na cobertura. Macio, cheio de sabor e perfeito para acompanhar os melhores momentos.', image: '/images/chocolate.webp', tag: 'Puro aconchego' },
  { name: 'Laranja', note: 'Um pedacinho de tarde ensolarada.', description: 'Leve, perfumado e preparado com laranja. O sabor cítrico e delicado que combina com um café passado na hora.', image: '/images/bolo_de_laranja.webp', tag: 'Feito com carinho' },
  { name: 'Fubá', note: 'Com gostinho de casa de vó.', description: 'Douradinho por fora e macio por dentro. A simplicidade do fubá em uma receita cheia de boas lembranças.', image: '/images/bolo_de_fuba.webp', tag: 'Receita de afeto' },
  { name: 'Coco', note: 'Delicado em cada pedacinho.', description: 'Massa macia, coco e uma textura deliciosa. Um encontro de doçura e delicadeza para compartilhar.', image: '/images/bolo_de_coco.webp', tag: 'Doce delicadeza' },
  { name: 'Limão', note: 'Frescor que faz sorrir.', description: 'O equilíbrio entre o doce e o cítrico, com massa fofinha e cobertura de limão. Uma pausa gostosa no seu dia.', image: '/images/bolo_de_limao.webp', tag: 'Leve e especial' },
  { name: 'Formigueiro', note: 'Pequenas alegrias em cada fatia.', description: 'Massa de baunilha com pedacinhos de chocolate por toda parte. Uma receita divertida, simples e irresistível.', image: '/images/bolo_formiga.webp', tag: 'Memória de infância' },
  { name: 'Banana com canela', note: 'O perfume de uma boa lembrança.', description: 'Banana e o toque acolhedor da canela em um bolo caseiro cheio de personalidade. Feito para saborear sem pressa.', image: '/images/bolo_de_canela.webp', tag: 'Carinho de verdade' },
];

const story = [
  'A Mari Cake nasceu de uma lembrança muito especial, daquelas que aquecem o coração e permanecem vivas mesmo com o passar dos anos. Tudo começou na minha infância, ao lado da minha querida vó Marilucia, com quem eu passava horas na cozinha preparando bolos, misturando ingredientes, experimentando sabores e, acima de tudo, compartilhando momentos que se tornariam algumas das minhas melhores memórias.',
  'Tenho um carinho enorme por aquelas tardes em que a cozinha se enchia com o cheirinho de bolo recém-assado e, ao final do dia, nos sentávamos para tomar um café acompanhado de um delicioso bolo caseiro. Eram momentos simples, mas cheios de amor, afeto e significado. Foi ali que aprendi que um bolo vai muito além de uma receita: ele carrega histórias, desperta sentimentos, aproxima pessoas e transforma pequenos momentos em lembranças inesquecíveis.',
  'É desse sentimento que nasceu a Mari Cake. Mais do que uma confeitaria, ela representa uma forma de manter viva essa memória tão bonita e compartilhar um pouquinho desse carinho com outras pessoas.',
  'Por isso, cada bolo é preparado com muito amor, cuidado e dedicação, respeitando a essência daquilo que me inspirou desde o início. Queremos que cada fatia desperte aquela sensação gostosa de aconchego, que remete à casa de vó, ao café passado na hora e às tardes tranquilas em família.',
  'Afinal, acreditamos que os melhores momentos da vida muitas vezes acontecem ao redor de uma mesa, acompanhados de um bom café e de um bolo feito com carinho.',
];

const linkStyle = 'inline-flex min-h-11 items-center justify-center gap-3 rounded-full px-7 py-3.5 text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#DC143C] focus-visible:ring-offset-4';

function CakeCard({ cake }: { cake: typeof cakes[number] }) {
  const [flipped, setFlipped] = useState(false);
  return (
    <button type="button" aria-label={`${flipped ? 'Ver foto' : 'Conhecer sabor'}: ${cake.name}`} aria-pressed={flipped}
      onClick={() => setFlipped(!flipped)}
      className="group min-w-0 rounded-t-[90px] rounded-b-2xl text-left outline-none [perspective:1200px] focus-visible:ring-2 focus-visible:ring-[#DC143C] focus-visible:ring-offset-4">
      <div className={`relative h-[380px] w-full rounded-t-[90px] rounded-b-2xl shadow-[0_8px_30px_#5d302010] transition-transform duration-700 [transform-style:preserve-3d] motion-reduce:transition-none ${flipped ? '[transform:rotateY(180deg)]' : '[@media(hover:hover)]:group-hover:[transform:rotateY(180deg)]'}`}>
        <div className="absolute inset-0 flex flex-col overflow-hidden rounded-[inherit] bg-[#f4eadb] [backface-visibility:hidden]">
          <Photo src={cake.image} alt={`Bolo caseiro — ${cake.name}`} className="h-[260px] w-full shrink-0 object-cover" />
          <div className="flex min-h-0 flex-1 items-center justify-between gap-2 px-4 py-4">
            <div className="min-w-0 flex-1"><span className="block text-xs tracking-[0.08em] text-[#795d50]">FEITO COM AMOR</span><span className="mt-2 flex min-h-12 items-center break-words font-serif text-xl leading-6">{cake.name}</span></div>
            <span className="shrink-0 text-[#DC143C]"><Icon type="arrow" /></span>
          </div>
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center overflow-hidden rounded-[inherit] bg-[#DC143C] px-5 pt-12 pb-6 text-center break-words text-[#FFFFF0] [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <Icon type="heart" className="mb-3 h-5 w-5" />
          <span className="text-xs uppercase leading-5 tracking-[0.08em]">{cake.tag}</span>
          <h3 className="mt-2 w-full font-serif text-2xl leading-7">{cake.name}</h3>
          <p className="mt-3 w-full text-sm leading-5">{cake.description.split('. ')[0].replace(/\.$/, '')}.</p>
          <span className="mt-3 w-full font-serif text-base leading-5 italic">{cake.note}</span>
        </div>
      </div>
    </button>
  );
}

export default function App() {
  const hero = useRef<HTMLElement>(null);
  const [fade, setFade] = useState(1);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const update = () => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
      const height = hero.current?.offsetHeight || 800;
      setFade(Math.max(0, 1 - window.scrollY / (height * 0.9)));
    };
    window.addEventListener('scroll', update, { passive: true });
    update();
    return () => window.removeEventListener('scroll', update);
  }, []);

  return (
    <div className="overflow-x-hidden bg-[#FFFFF0] font-sans text-[#443129] selection:bg-[#DC143C] selection:text-white">
      <header className="relative z-20 mx-auto flex h-28 max-w-[1320px] items-center justify-between border-b border-[#785440]/15 px-6 md:px-12">
        <a href="#inicio" aria-label="MariCake — início" className="focus-visible:ring-2 focus-visible:ring-[#DC143C]">
          <Photo src="/images/maricake-logo-transparent.png" alt="MariCake" className="h-[106px] w-[136px] object-contain" />
        </a>
        <nav aria-label="Navegação principal" className="hidden items-center gap-10 md:flex">
          <a href="#inicio" className="flex min-h-11 items-center text-sm text-[#DC143C]">Início</a>
          <a href="#historia" className="flex min-h-11 items-center text-sm transition-colors hover:text-[#DC143C]">Nossa história</a>
          <a href="#bolos" className="flex min-h-11 items-center text-sm transition-colors hover:text-[#DC143C]">Nossos bolos</a>
        </nav>
        <button aria-label="Abrir navegação" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)} className="flex min-h-11 min-w-11 items-center justify-center rounded-full border border-[#DC143C]/30 text-[#DC143C] focus-visible:ring-2 md:hidden">{menuOpen ? '✕' : '☰'}</button>
        {menuOpen && <nav aria-label="Navegação móvel" className="absolute top-28 right-0 left-0 flex flex-col border-b border-[#DC143C]/20 bg-[#FFFFF0] px-8 py-5 shadow-lg md:hidden">{[['Início', '#inicio'], ['Nossa história', '#historia'], ['Nossos bolos', '#bolos']].map(([label, href]) => <a key={href} href={href} onClick={() => setMenuOpen(false)} className="flex min-h-11 items-center">{label}</a>)}</nav>}
      </header>

      <main>
        <section id="inicio" ref={hero} className="relative mx-auto max-w-[1440px] scroll-mt-5 px-6 pt-12 pb-10 md:px-12 md:pt-14 lg:px-20">
          <div style={{ opacity: fade }} className="grid items-center gap-3 md:grid-cols-[1fr_1.05fr]">
            <div className="relative z-10 py-6 md:pb-16">
              <div className="mb-6 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.21em] text-[#a52740]"><span className="h-px w-8 bg-[#DC143C]" /> Feito à mão. Feito com afeto.</div>
              <h1 className="max-w-[620px] font-serif text-[58px] leading-[1.07] font-normal tracking-[-0.045em] md:text-[66px] lg:text-[84px]">Mais que um bolo,<br />um pedaço de<br /><em className="font-normal text-[#DC143C]">boa lembrança.</em></h1>
              <p className="mt-7 max-w-[470px] text-[15px] leading-[1.95] text-[#715b4e]">Todo bolo carrega uma história, um sentimento e uma dose de carinho. Na MariCake, tudo isso se transforma em sabores especiais, feitos para despertar boas lembranças e tornar os pequenos momentos ainda mais doces. Mais do que bolos, queremos compartilhar afeto em cada pedaço.</p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a href="#bolos" className={`${linkStyle} bg-[#DC143C] text-[#FFFFF0] shadow-[0_6px_18px_#dc143c20] hover:bg-[#b91032]`}>Conheça nossos bolos <Icon type="arrow" /></a>
                <a href="#historia" className={`${linkStyle} px-2 text-[#755148] hover:text-[#DC143C]`}>Nossa história <Icon type="down" className="h-4 w-4" /></a>
              </div>
              <div className="mt-9 flex items-center gap-2.5 text-xs text-[#796052]"></div>
            </div>
            <div className="relative min-w-0 self-stretch">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_closest-side_at_center,#edddc4_0%,#f6ead5_45%,#FFFFF0_100%)]" />
              <Photo src="/images/bolo-caseiro.png" alt="Bolo caseiro dourado com cobertura de chocolate sobre um suporte de cerâmica" className="relative h-full max-h-[650px] min-h-[370px] w-full object-cover [mask-image:radial-gradient(ellipse_closest-side_at_center,black_45%,transparent_100%)]" />
              <div className="absolute right-4 bottom-10 -rotate-6 font-script text-3xl text-[#a33542] lg:right-8 lg:bottom-16">tem gosto de casa.</div>
            </div>
          </div>
          <a href="#historia" className="mx-auto mt-5 flex min-h-11 w-fit items-center gap-3 text-xs tracking-[0.16em] text-[#806456]">TEM UMA HISTÓRIA EM CADA FATIA <Icon type="down" className="h-4 w-4 text-[#DC143C]" /></a>
        </section>

        <div className="flex min-h-20 flex-wrap items-center justify-center gap-x-10 gap-y-4 border-y border-[#DC143C]/15 bg-[#f7efe2] px-6 py-5 text-xs tracking-[0.15em] text-[#9d3446] md:gap-x-16">
          {['INGREDIENTES SELECIONADOS', 'RECEITAS COM MEMÓRIA', 'CARINHO EM CADA DETALHE'].map(text => <span key={text} className="flex items-center gap-5"><Icon type="spark" className="h-4 w-4" />{text}</span>)}
        </div>

        <section id="historia" className="scroll-mt-10 px-6 py-20 md:px-12 md:py-28">
          <div className="mx-auto max-w-[1120px]">
            <div className="text-center">
              <span className="text-xs font-medium tracking-[0.22em] text-[#a52740]">DA NOSSA FAMÍLIA PARA A SUA</span>
              <h2 className="mt-5 font-serif text-4xl leading-tight tracking-[-0.035em] md:text-[56px]">O que é a MariCake <em className="text-[#DC143C]">de verdade?</em></h2>
              <div className="mx-auto mt-6 flex max-w-xs items-center gap-5"><span className="h-px flex-1 bg-[#DC143C]/25" /><Icon type="heart" className="h-4 w-4 text-[#DC143C]" /><span className="h-px flex-1 bg-[#DC143C]/25" /></div>
            </div>
            <div className="mt-14 grid items-start gap-12 md:grid-cols-[0.72fr_1.28fr] lg:gap-20">
              <aside className="md:sticky md:top-12">
                <div className="rounded-t-[180px] rounded-b-3xl border border-[#d5b9a0]/50 bg-[#f8f0df] px-10 pt-10 pb-12 text-center">
                  <Photo src="/images/maricake-logo-transparent.png" alt="Logo original MariCake — um bolo feito com amor" className="mx-auto aspect-square w-full max-w-[280px] object-contain" />
                  <div className="mx-auto mb-6 h-10 w-px bg-[#DC143C]/35" />
                  <blockquote className="font-serif text-3xl leading-snug italic text-[#a52740]">“Algumas receitas<br />não estão nos livros.<br />Estão no coração.”</blockquote>
                  <p className="mt-5 text-xs tracking-[0.14em] text-[#806052]">COM AMOR, MARI</p>
                </div>
              </aside>
              <div className="space-y-6 text-[15px] leading-[1.95] text-[#70594b]">
                {story.map((paragraph, i) => <p key={i} className={i === 0 ? 'first-letter:float-left first-letter:mr-3 first-letter:font-serif first-letter:text-6xl first-letter:leading-none first-letter:text-[#DC143C]' : ''}>{paragraph}</p>)}
                <div className="flex items-center gap-3 pt-2 font-script text-3xl text-[#DC143C]">Com carinho, Mari <Icon type="heart" /></div>
              </div>
            </div>
          </div>
        </section>

        <section id="bolos" className="scroll-mt-5 bg-[#f5eddf] px-6 py-20 md:px-12 md:py-24">
          <div className="mx-auto max-w-[1200px]">
            <div className="text-center">
              <span className="text-xs tracking-[0.22em] text-[#a52740]">SIMPLES, CASEIROS E CHEIOS DE AFETO</span>
              <h2 className="mt-5 font-serif text-4xl tracking-[-0.035em] md:text-[56px]">Qual lembrança vamos <em className="text-[#DC143C]">saborear?</em></h2>
              <p className="mt-5 text-sm leading-7 text-[#70594b]">Oito sabores, muitas histórias. Um carinho diferente em cada receita.</p>
            </div>
            <div className="mx-auto mt-12 grid max-w-[1080px] grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {cakes.map(cake => <CakeCard key={cake.name} cake={cake} />)}
            </div>
            <p className="mt-10 text-center font-serif text-xl italic text-[#886353]">O ingrediente que nunca falta? Amor.</p>
          </div>
        </section>
        <section className="relative bg-[#DC143C] px-6 py-16 text-center text-[#FFFFF0]">
          <Icon type="heart" className="mx-auto mb-5 h-8 w-8" />
          <h2 className="font-serif text-4xl leading-tight md:text-5xl">Os melhores momentos<br />começam com <em>uma fatia.</em></h2>
          <p className="mx-auto mt-5 max-w-lg text-sm leading-7">Prepare o café, reúna quem você ama e deixe que a MariCake<br className="hidden md:block" /> leve um pouquinho de carinho para a sua mesa.</p>
          <a href="#bolos" className={`${linkStyle} mt-7 border border-[#FFFFF0]/70 hover:bg-[#FFFFF0] hover:text-[#DC143C] focus-visible:ring-[#FFFFF0]`}>Encontre seu sabor favorito <Icon type="arrow" /></a>
        </section>
      </main>
      <footer className="mx-auto flex max-w-[1280px] flex-col items-center justify-between gap-5 px-6 py-8 md:flex-row md:px-12">
        <a href="#inicio" aria-label="MariCake — voltar ao início"><Photo src="/images/maricake-logo-transparent.png" alt="MariCake" className="h-24 w-28 object-contain" /></a>
        <p className="text-center text-xs text-[#795e50]">© {new Date().getFullYear()} MariCake. Feito de histórias, sabores e afeto.</p>
        <a href="#inicio" className="flex min-h-11 items-center gap-3 text-sm text-[#a52740]">Voltar ao topo <span className="rotate-180"><Icon type="down" className="h-4 w-4" /></span></a>
      </footer>
    </div>
  );
}
