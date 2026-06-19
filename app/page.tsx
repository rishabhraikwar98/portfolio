import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-center pt-20">
        <h1 className="font-display text-6xl font-bold gradient-text">
          Hello, Portfolio
        </h1>
      </main>
      <Footer />
    </>
  );
}
