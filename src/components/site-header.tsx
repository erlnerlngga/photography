import { PaddingContainer } from "@/components/padding-container";
import { MainNav } from "@/components/main-nav";
import { ModeToggle } from "@/components/mode-toggle";

export function SiteHeader() {
  return (
    <header className="sticky z-10 top-0 left-0 right-0 bg-background/50 backdrop-blur-md border-b">
      <PaddingContainer>
        <div className="h-14 flex items-center justify-center space-x-10">
          <MainNav />
          <ModeToggle />
        </div>
      </PaddingContainer>
    </header>
  );
}
