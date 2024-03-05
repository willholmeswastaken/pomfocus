import { unstable_noStore as noStore } from "next/cache";

export default async function Home() {
  noStore();
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b">
      <div className="mx-auto mb-10 mt-12 max-w-md px-2.5 text-center sm:max-w-xl sm:px-0">
        <h1 className="font-display mt-5 text-4xl font-extrabold leading-[1.15] text-black sm:text-5xl sm:leading-[1.15]">
          Hardcore Focus Like{" "}
          <span className="bg-gradient-to-r from-amber-500 via-orange-600 to-yellow-500 bg-clip-text text-transparent">
            Never Before.
          </span>
        </h1>
        <h2 className="mt-5 text-gray-600 sm:text-xl">
          Pomfocus is the open-source pomodoro timer for modern working
          individuals.
        </h2>
      </div>
    </main>
  );
}
