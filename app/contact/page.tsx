import { Container } from "@/components/ui/Container";

export default function ContactPage() {
  return (
    <div className="flex flex-col w-full pt-48 pb-48 bg-[#F7F8FC] min-h-[85vh]">
      <Container className="max-w-3xl mx-auto text-center">
         <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Contact Us</h1>
         <p className="text-xl text-muted-foreground font-light mb-10">
           Have questions about Nexus AI? Reach out to our team at
           <br/>
           <a href="mailto:ritik@buildwithnexusai.com" className="text-primary font-medium mt-2 inline-block hover:underline">ritik@buildwithnexusai.com</a>
         </p>
      </Container>
    </div>
  );
}
