import { Container } from "@/components/ui/Container";

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full pt-48 pb-48 bg-[#F7F8FC] min-h-[85vh]">
      <Container className="max-w-3xl mx-auto text-center">
         <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-10">About Nexus AI</h1>
         <p className="text-xl text-muted-foreground leading-relaxed font-light">
           We engineer intelligent voice systems designed specifically for modern clinics. 
           Nexus AI replaces the traditional front desk bottleneck with a reliable, scalable 24/7 
           automated receptionist that truly understands patient needs and secures more appointments.
         </p>
      </Container>
    </div>
  );
}
