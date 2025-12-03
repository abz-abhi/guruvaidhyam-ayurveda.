import Hero from "@/components/hero";
import ProductPage from "@/components/product";
import Features from "@/components/features";
import Pricing from "@/components/pricing";
export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <ProductPage />
      <Features />
      <Pricing />
    </main>
  );
}
