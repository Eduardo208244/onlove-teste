import Link from "next/link";

export default function Page() {
  return (
    <main className="w-full m-0 flex flex-col">
      <section className="w-full bg-red-700 h-150 p-4 flex flex-col items-center">
        <div className="bg-white rounded-3xl w-[80%] p-4 m-auto flex flex-row justify-between items-center">
          <div>
            <h2>
              OnLoveYou
            </h2>
          </div>
          <div className="gap-5 flex flex-row">
            <a href="#">Exemplo</a>
            <a href="#">Preços</a>
            <a href="#">Perguntas</a>
          </div>
          <div>
            <Link href="/create">Criar Agora</Link>
          </div>
        </div>
       <div>
         <h1 className="text-5xl">Arte do Romance</h1>
        <p>"Diga 'eu te amo' de um jeito diferente. ✨" Crie um site personalizado para o seu relacionamento. Adicione sua música favorita, fotos e uma carta de amor. O presente que cabe no seu bolso e no coração de quem você ama.</p>
        <div>
          <Link href="">Crie sua Lovepage</Link>
          <Link href="">Exemplo</Link>
        </div>
        </div>
      </section>      
      <section></section>
      <section></section>
      <section></section>
    </main>
  );
}