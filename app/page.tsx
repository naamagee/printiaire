import Image from "next/image";
import CheckoutWithUsernames from "@/components/CheckoutWithUsernames"

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center  min-h-screen  pb-20   font-[family-name:var(--font-geist-sans)] bg-[#8C8274]">

      <section>
        <div className="relative flex justify-center font-[family-name:var(--font-instr-serif)] text-[#5B410E]">
          <Image src="/gradient2.png" alt="Next.js logo"
            width={786}
            height={743} />
          <div className="absolute top-1/4 max-w-[300px] text-center  text-2xl md:text-5xl ">CURATED PRINTS
            <span className="font-[family-name:var(--font-parisienne)]"> only</span> FOR YOU</div>
          <div className="font-[family-name:var(--font-instr-serif)] absolute bottom-1/4 text-center text-3xl md:text-6xl">
            PRINTIAIRE.
          </div>
        </div>

      </section>
      <section className="bg-[#EBE6D2] flex flex-col py-20 px-16 text-center w-full text-xl md:text-3xl items-center gap-4">
        <div className="font-[family-name:var(--font-instr-serif)]">connect</div>
        <div className="font-[family-name:var(--font-parisienne)]">connect your pinterest & substack accounts and receive personalized publications</div>


      </section>
      <section className="font-[family-name:var(--font-instr-serif)] text-xl md:text-3xl text-white text-center py-8 gap-4">
        <div className="px-10">purchase</div>
        <div className="font-[family-name:var(--font-parisienne)] pb-8 px-10">connect your accounts and receive personalized publications</div>
        <Image src="/mockup.png" alt="magazine preview" width="1000" height="750" />
        <p>Price: $29.99</p>
        <CheckoutWithUsernames price={19.199} />
      </section>
      <footer className="row-start-3 flex gap-6 flex-col items-center justify-center">

        <Image
          aria-hidden
          src="/print.png"
          alt="File icon"
          width={120}
          height={120}
          className="mix-blend-color-burn"
        />
        <p className="-mt-12 text-xl md:text-3xl font-[family-name:var(--font-instr-serif)]">PRINTIAIRE</p>

        hello@printiaire.com

      </footer>
    </div>
  );
}