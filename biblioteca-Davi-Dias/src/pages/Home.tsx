import CardsLivros from "../components/CardLivros";
 
export default function Home() {
    return(
        <div>
      <header className="bg-[#0F172A] border-b border-[#1E293B] py-6 px-8">
        <div className="max-w-[1200px] mx-auto flex justify-between items-center flex-wrap gap-4">
          <div>
            <h1 className="text-white text-[26px] font-extrabold m-0 tracking-tight">Biblioteca</h1>
            <p className="text-[#94A3B8] text-sm mt-1 m-0">Seu conhecimento começa aqui.</p>
          </div>
          <div className="flex gap-6 text-white">
            <a href="/login" className="py-2 px-5 bg-blue-500 rounded-xl border text-sm font-semibold no-underline shadow-sm hover:bg-[#1d4ed8] transition-colors">Entrar</a>
            <a href="/cadastrar" className="py-2 px-5 bg-[#0F172A] rounded-xl border text-sm font-semibold no-underline shadow-sm hover:bg-[#1e293b] transition-colors">Cadastrar</a>
            <a href="/chat" className="py-2 px-5 bg-[#0F172A] rounded-xl border text-sm font-semibold no-underline shadow-sm hover:bg-[#1e293b] transition-colors">Chat</a>
          </div>
        </div>
      </header>
 
      <main className="max-w-[1200px] w-full mx-auto py-10 px-6 flex-1 box-border">
        <section className="py-10 bg-gradient-to-br from-[#FEF3C7] to-[#FDE68A] border-l-4 border-[#D97706] rounded-2xl px-5">
          <div className="p-1 bg-[#D97706] text-white inline-block text-[11px] rounded-full mb-3">Destaque do dia</div>
          <p className="text-[#78350F] mb-3 italic text-lg font-medium">"Um bom livro pode levar você para lugares que nunca imaginou conhecer."</p>
          <p className="text-[#92400E] text-[13px] font-semibold">— Reflexão diária</p>
        </section>
      </main>
 
      <section className="text-center mb-12">
        <h2 className="font-extrabold text-[32px] text-[#0F172A] tracking-tight mb-3">Bem vindo a nossa biblioteca</h2>
        <p className="max-w-[700px] mx-auto text-base text-[#64748B] leading-[26px]">
          Estamos construindo um espaço para você explorar e descobrir novos livros. Fique à vontade para navegar pelo nosso catálogo e encontrar sua próxima leitura favorita!
        </p>
      </section>
 
      <section className="mb-12 mx-5">
        <h3 className="text-xl font-bold text-[#0F172A] mb-5">Navegação rápida</h3>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-5">
 
          <a href="./Estudos" className="bg-white p-6 rounded-2xl no-underline shadow-sm border border-[#E2E8F0] flex items-start gap-4 box-border hover:border-[#2563EB] transition-colors">
            <div className="bg-[#EFF6FF] text-[#2563EB] w-11 h-11 rounded-xl flex items-center justify-center text-xl shrink-0">📖</div>
            <div>
              <h4 className="text-base font-bold text-[#1E293B] mb-1 mt-0">Cantinho de Estudos</h4>
              <p className="text-[13px] text-[#64748B] m-0">Pomodoro, tarefas e dicas</p>
            </div>
          </a>
 
          <a href="" className="bg-white p-6 rounded-2xl no-underline shadow-sm border border-[#E2E8F0] flex items-start gap-4 box-border hover:border-[#2563EB] transition-colors">
            <div className="bg-[#EFF6FF] text-[#2563EB] w-11 h-11 rounded-xl flex items-center justify-center text-xl shrink-0">★</div>
            <div>
              <h4 className="text-base font-bold text-[#1E293B] mb-1 mt-0">Recomendações</h4>
              <p className="text-[13px] text-[#64748B] m-0">Descubra novos livros</p>
            </div>
          </a>
 
          <a href="" className="bg-white p-6 rounded-2xl no-underline shadow-sm border border-[#E2E8F0] flex items-start gap-4 box-border hover:border-[#2563EB] transition-colors">
            <div className="bg-[#EFF6FF] text-[#2563EB] w-11 h-11 rounded-xl flex items-center justify-center text-xl shrink-0">▣</div>
            <div>
              <h4 className="text-base font-bold text-[#1E293B] mb-1 mt-0">Acervo</h4>
              <p className="text-[13px] text-[#64748B] m-0">Explore nossa coleção</p>
            </div>
          </a>

          <a href="/desenvolvedor" className="bg-white p-6 rounded-2xl no-underline shadow-sm border border-[#E2E8F0] flex items-start gap-4 box-border hover:border-[#2563EB] transition-colors">
            <div className="bg-[#EFF6FF] text-[#2563EB] w-11 h-11 rounded-xl flex items-center justify-center text-xl shrink-0">▣</div>
            <div>
              <h4 className="text-base font-bold text-[#1E293B] mb-1 mt-0">Desenvolvedor</h4>
              <p className="text-[13px] text-[#64748B] m-0">Explore nossa coleção</p>
            </div>
          </a>
 
          <a href="/aulas" className="bg-white p-6 rounded-2xl no-underline shadow-sm border border-[#E2E8F0] flex items-start gap-4 box-border hover:border-[#2563EB] transition-colors">
            <div className="bg-[#EFF6FF] text-[#2563EB] w-11 h-11 rounded-xl flex items-center justify-center text-xl shrink-0">▸</div>
            <div>
              <h4 className="text-base font-bold text-[#1E293B] mb-1 mt-0">Aulas Mobile</h4>
              <p className="text-[13px] text-[#64748B] m-0">Aprenda desenvolvimento</p>
            </div>
          </a>
 
          <a href="" className="bg-white p-6 rounded-2xl no-underline shadow-sm border border-[#E2E8F0] flex items-start gap-4 box-border hover:border-[#2563EB] transition-colors">
            <div className="bg-[#EFF6FF] text-[#2563EB] w-11 h-11 rounded-xl flex items-center justify-center text-xl shrink-0">▸</div>
            <div>
              <h4 className="text-base font-bold text-[#1E293B] mb-1 mt-0">Aulas Web</h4>
              <p className="text-[13px] text-[#64748B] m-0">Aprenda a desenvolver Sites</p>
            </div>
          </a>
        </div>
      </section>
 
      <section className="mb-12 mx-5">
        <div className="flex justify-between items-center mb-5">
          <h3 className="text-xl font-bold text-[#0F172A] m-0">Livros em destaque</h3>
          <a href="/acervo" className="text-[#2563EB] text-sm font-semibold no-underline hover:underline">Ver todos →</a>
        </div>
 
        <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-5">
          <CardsLivros
            titulo="Dom Casmurro"
            autor="Machado de Assis"
            categoria="Romance"
            // imagem="https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=400&auto=format&fit=crop"
            />
          <CardsLivros
            titulo="O cortiço"
            autor="Aluísio Azevedo"
            categoria="Romance"/>
          <CardsLivros
            titulo="O Pequeno Príncipe"
            autor="Antonie de Saint-Exupéry"
            categoria="Literatura"/>
        </div>
      </section>
    </div>
  );
}