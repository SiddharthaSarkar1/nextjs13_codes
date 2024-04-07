import LearnCSSModule from "@/components/LearnCSSModule";
import LearnImages from "@/components/LearnImages";
import LearnLink from "@/components/LearnLink";
import LearnUseRouter from "@/components/LearnUseRouter";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1>Hello NextJS</h1>
      <LearnLink />
      <LearnUseRouter />
      <LearnCSSModule />
      <LearnImages />
    </main>
  );
}
