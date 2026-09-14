import { Container } from "@/components/ui/Container";

export default function TermsPage() {
  return (
    <div className="flex flex-col w-full pt-48 pb-48 bg-white min-h-[85vh]">
      <Container className="max-w-3xl mx-auto text-center">
         <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 border-b pb-8 border-border">Terms of Service</h1>
         <p className="text-muted-foreground mt-8 text-left leading-relaxed">
           By using Nexus AI services, you agree to our terms and conditions. The service is provided to automate phone answering via AI. 
         </p>
      </Container>
    </div>
  );
}
