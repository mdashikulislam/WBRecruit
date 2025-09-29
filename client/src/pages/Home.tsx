import { useState } from "react";
import backgroundImage from "@assets/sky-background.jpg";
import logoImage from "@assets/wb-logo.png";
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
      
      <div className="absolute inset-0 bg-blue-950/60" />
      
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
            Schedule a call with one recruiting members from Warner Bros
          </h1>
          
          <button
            onClick={handleScheduleClick}
            className="inline-flex items-center justify-center rounded-lg bg-white px-12 py-5 text-lg font-semibold text-cyan-500 shadow-xl transition-all hover:scale-105 hover:shadow-2xl active:scale-100"
            data-testid="button-schedule"
          >
            Schedule with Calendly
          </button>
        </div>
      </div>
    </div>
  );
}
