import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 px-6 py-12">
      <section className="flex w-full max-w-md flex-col items-center text-center">
        <Image
          src="/cityzen.jpg"
          alt="Lenny Kioko"
          width={144}
          height={144}
          priority
          className="h-36 w-36 rounded-full object-cover shadow-md ring-4 ring-white"
        />

        <h1 className="mt-6 text-3xl font-semibold text-slate-900 sm:text-4xl">
          Lenny Kioko
        </h1>
        <p className="mt-3 text-base text-slate-600">
          Software Engineer · Financial Technology · Nairobi, Kenya
        </p>

        <Link
          href="https://lennykioko.com"
          className="mt-10 inline-flex items-center justify-center rounded-full bg-slate-900 px-8 py-4 text-base font-medium text-white shadow-lg transition hover:bg-slate-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900"
        >
          Visit lennykioko.com
        </Link>
      </section>
    </main>
  );
}
