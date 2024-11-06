"use client";

import { MainNav } from "@/components/main-nav";
import { ModeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { 
  Sheet, 
  SheetContent, 
  SheetTrigger,
  SheetHeader,
  SheetTitle 
} from "@/components/ui/sheet";
import { Code2, Menu } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center space-x-2">
            <Code2 className="h-6 w-6" />
            <span className="font-bold text-xl">Elvio Scaravelli</span>
          </Link>
          <div className="hidden md:flex">
            <MainNav />
          </div>
        </div>

        <div className="flex items-center gap-4">
          <ModeToggle />
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                aria-label="Toggle Menu"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] p-6">
              <SheetHeader>
                <SheetTitle>
                  <Link 
                    href="/" 
                    className="flex items-center space-x-2"
                    onClick={() => setOpen(false)}
                  >
                    <Code2 className="h-6 w-6" />
                    <span className="font-bold text-xl">Elvio Scaravelli</span>
                  </Link>
                </SheetTitle>
              </SheetHeader>
              <div className="mt-6">
                <MainNav isMobile />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}