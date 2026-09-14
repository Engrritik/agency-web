import { Container } from "@/components/ui/Container";

export default function AnsweringPage() {
  return (
    <div className="flex flex-col w-full pt-48 pb-48 bg-[#F7F8FC] min-h-[85vh]">
      <Container className="max-w-3xl mx-auto text-center">
         <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6">Dental Answering Service</h1>
         <p className="text-xl text-muted-foreground font-light mb-10">
           Discover how our AI receptionist system modernizes front-desk workflows.
         </p>
      </Container>
    </div>
  );
}
