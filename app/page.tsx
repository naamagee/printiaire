import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center  min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-[#8C8274]">

      <section>
        <div className="relative flex justify-center font-[family-name:var(--font-instr-serif)] text-[#5B410E]">
          <Image src="/gradient2.png" alt="Next.js logo"
            width={786}
            height={743} />
          <div className="absolute top-1/4 max-w-[300px] text-center text-5xl ">CURATED PRINTS
            <span className="font-[family-name:var(--font-parisienne)]"> only</span> FOR YOU</div>
          <div className="font-[family-name:var(--font-instr-serif)] absolute bottom-1/4 text-center text-6xl">
            PRINTIAIRE.
          </div>
        </div>

      </section>
      <section className="bg-[#EBE6D2] flex flex-col p-8 text-center w-full text-3xl">
        <div>connect</div>
        <div className="font-[family-name:var(--font-parisienne)]">connect your accounts and receive personalized publications</div>
        <div className="text-left flex items-start text-2xl">
          <p>pinterest</p>
          <div className="border-dashed border-[#5B410E] border-2 border-t-0 border-l-0 border-r-0 w-full pt-5"></div>
        </div>
        <div className="text-left flex items-start text-2xl"> <p>substack</p>
        <div className="border-dashed border-[#5B410E] border-2 border-t-0 border-l-0 border-r-0 w-full pt-5"></div></div>

      </section>
      <section className="font-[family-name:var(--font-instr-serif)] text-3xl text-white text-center ">
        <div>purchase</div>
        <div className="font-[family-name:var(--font-parisienne)] pb-8">connect your accounts and receive personalized publications</div>
        <Image src="/mockup.png" alt="magazine preview" width="1000" height="750" />
      </section>
      <footer className="row-start-3 flex gap-6 flex-col items-center justify-center">

        <Image
          aria-hidden
          src="/print.png"
          alt="File icon"
          width={240}
          height={240}
          className="mix-blend-color-burn"
        />
        <p className="-mt-16 text-3xl font-[family-name:var(--font-instr-serif)]">PRINTIAIRE</p>

        hello@printiaire.com

      </footer>
    </div>
  );
}