import { useState } from "react";
import backgroundImage from "@assets/sky-background.jpg";
import logoImage from "@assets/wb-logo.png";
import { Facebook, Instagram, Twitter, Phone, Linkedin, Youtube, Calendar } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

export default function Home() {
  const [showWarnerDialog, setShowWarnerDialog] = useState(false);

  const handleScheduleClick = () => {
    window.open('https://calendly.live', '_blank', 'noopener,noreferrer');
  };

  const handleLogoClick = () => {
    setShowWarnerDialog(true);
  };

  const handleGoToWarnerBros = () => {
    window.open('https://www.warnerbros.com', '_blank', 'noopener,noreferrer');
    setShowWarnerDialog(false);
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat backdrop-blur-sm"
        style={{ 
          backgroundImage: `url(${backgroundImage})`,
          filter: 'blur(3px)'
        }}
      />
      
      <div className="absolute inset-0 bg-blue-950/75" />
      
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <div className="max-w-4xl space-y-12">
          <div className="space-y-4">
            <img
              src={logoImage}
              alt="Warner Bros Logo"
              className="mx-auto w-64 cursor-pointer drop-shadow-2xl transition-transform hover:scale-105 md:w-80"
              data-testid="img-logo"
              onClick={handleLogoClick}
            />
            <h2 
              className="text-4xl font-bold tracking-wide text-white drop-shadow-lg md:text-5xl"
              data-testid="text-brand"
            >
              Warner Bros
            </h2>
          </div>

          <AlertDialog open={showWarnerDialog} onOpenChange={setShowWarnerDialog}>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Visit Warner Bros Official Website</AlertDialogTitle>
                <AlertDialogDescription>
                  You are about to be redirected to the official Warner Bros website. Would you like to continue?
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel data-testid="button-discard">Discard</AlertDialogCancel>
                <AlertDialogAction onClick={handleGoToWarnerBros} data-testid="button-go">
                  Go
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
          
          <h1 
            className="text-2xl font-semibold tracking-wide text-white drop-shadow-lg md:text-3xl lg:text-4xl"
            data-testid="text-headline"
          >
            Schedule a Consultation with Our Recruiting Agent
          </h1>
          
          <button
            onClick={handleScheduleClick}
            className="inline-flex items-center justify-center gap-3 rounded-full bg-[#006BFF] px-10 py-4 text-lg font-semibold text-white shadow-2xl transition-all hover:bg-[#0058D6] hover:shadow-[0_8px_30px_rgb(0,107,255,0.4)] active:scale-95"
            data-testid="button-schedule"
          >
            <Calendar className="h-5 w-5" />
            Schedule with Calendly
          </button>

          <div className="mt-16 space-y-8 border-t border-white/20 pt-8">
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="https://www.facebook.com/warnerbros"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
                data-testid="link-facebook"
                aria-label="Facebook"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm transition-all hover:bg-white/20 hover:scale-110">
                  <Facebook className="h-6 w-6 text-white" />
                </div>
              </a>

              <a
                href="https://www.instagram.com/warnerbros"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
                data-testid="link-instagram"
                aria-label="Instagram"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm transition-all hover:bg-white/20 hover:scale-110">
                  <Instagram className="h-6 w-6 text-white" />
                </div>
              </a>

              <a
                href="https://www.youtube.com/user/WarnerBrosPictures"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
                data-testid="link-youtube"
                aria-label="YouTube"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm transition-all hover:bg-white/20 hover:scale-110">
                  <Youtube className="h-6 w-6 text-white" />
                </div>
              </a>

              <a
                href="https://twitter.com/warnerbros"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
                data-testid="link-twitter"
                aria-label="Twitter"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm transition-all hover:bg-white/20 hover:scale-110">
                  <Twitter className="h-6 w-6 text-white" />
                </div>
              </a>

              <a
                href="https://www.linkedin.com/company/warner-bros--entertainment"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
                data-testid="link-linkedin"
                aria-label="LinkedIn"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm transition-all hover:bg-white/20 hover:scale-110">
                  <Linkedin className="h-6 w-6 text-white" />
                </div>
              </a>
            </div>

            <div className="flex items-center justify-center gap-2 text-white">
              <Phone className="h-5 w-5" />
              <a 
                href="tel:+18189545000" 
                className="text-base font-medium hover:text-cyan-300 transition-colors md:text-lg"
                data-testid="link-phone"
              >
                +1 (818) 954-5000
              </a>
            </div>

            <p className="text-xs text-white/60 md:text-sm">
              © 2025 Warner Bros. Entertainment Inc. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
