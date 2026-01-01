import MainContent from "@/src/components/MainContent";
import Experience from "@/src/components/Experience";

export default function Home() {
  return (
    <div className="">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-center w-full h-full p-12">
        <MainContent />
        <Experience />
      </main>
    </div>
  );
}
