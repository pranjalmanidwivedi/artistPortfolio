import HeroSection from "@/components/HeroSection";
import WritingSection from "@/components/WritingSection";


export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white">
      <HeroSection />
      <WritingSection />
    </main> 
  );
}
