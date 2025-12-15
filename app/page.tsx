import CaseStudies from "@/components/caseStudies/CaseStudies";
import { Header } from "@/components/header/Header";


export default function Home() {
  return (
    <div className="flex min-h-screen bg-black justify-center">
      <CaseStudies />
    </div>
  );
}
