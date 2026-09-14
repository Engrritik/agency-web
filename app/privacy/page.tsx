import { Container } from "@/components/ui/Container";

export default function PrivacyPage() {
  return (
    <div className="flex flex-col w-full pt-48 pb-48 bg-white min-h-[85vh]">
      <Container className="max-w-3xl mx-auto text-center">
         <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 border-b pb-8 border-border">Privacy Policy</h1>
         <p className="text-muted-foreground mt-8 text-left leading-relaxed">
           Your privacy and data security are our top priority. We comply with all relevant healthcare data protection guidelines to ensure patient and clinic information is fully encrypted and secure.
         </p>
      </Container>
    </div>
  );
}
