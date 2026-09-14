import { Container } from "@/components/ui/Container";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="flex flex-col w-full pt-48 pb-48 bg-[#F7F8FC] min-h-[85vh]">
      <Container className="max-w-3xl mx-auto text-center flex flex-col items-center">
         <h1 className="text-6xl md:text-8xl font-bold tracking-tight text-primary-deep/20 mb-6 font-mono">404</h1>
         <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Page not found</h2>
         <p className="text-lg text-muted-foreground font-light mb-10 max-w-sm">
           The page you are looking for does not exist or has been moved.
         </p>
         <Link href="/">
           <Button>Return to Home</Button>
         </Link>
      </Container>
    </div>
  );
}
