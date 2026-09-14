import { Container } from "@/components/ui/Container";

export default function DemoPage() {
  return (
    <div className="flex flex-col w-full pt-48 pb-48 bg-white min-h-[80vh]">
      <Container className="max-w-3xl mx-auto text-center">
         <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6 bg-gradient-to-r from-primary to-violet bg-clip-text text-transparent inline-block pb-2">See Nexus in Action</h1>
         <p className="text-lg text-muted-foreground mb-12">Book a live demonstration tailored to your dental practice.</p>
         
         <div className="bg-slate-50 border border-border shadow-inner rounded-3xl p-12 text-center h-[500px] flex items-center justify-center">
            <p className="text-slate-400 font-medium">Demo Scheduling Interface Loading...</p>
         </div>
      </Container>
    </div>
  );
}
