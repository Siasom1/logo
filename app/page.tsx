import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div className="flex flex-col items-center gap-4">
          <Image
            src="/logo.png"
            alt="Logo"
            width={200}
            height={200}
            priority
            className="rounded-lg shadow-lg"
          />
          <h1 className="text-4xl font-bold text-center">Welcome</h1>
          <p className="text-lg text-gray-600 text-center max-w-md">
          </p>
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
       
      </footer>
    </div>
  );
}
