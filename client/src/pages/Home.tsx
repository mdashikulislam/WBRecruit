import { useState, useEffect } from "react";
import image1 from "@assets/1_1759181092855.jpg";
import image2 from "@assets/2_1759181092856.jpg";
import image3 from "@assets/3_1759181092856.jpg";
import image4 from "@assets/4_1759181092856.jpg";
import image5 from "@assets/5_1759181092856.jpg";
import logoImage from "@assets/wb-logo.png";
import { Facebook, Instagram, Twitter, Linkedin, Youtube, Calendar, Briefcase } from "lucide-react";
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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function Home() {
  const [showWarnerDialog, setShowWarnerDialog] = useState(false);
  const [showPositionsDialog, setShowPositionsDialog] = useState(false);
  const [activeJobDialog, setActiveJobDialog] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const backgroundImages = [image1, image2, image3, image4, image5];
  const overlayColors = [
    'bg-red-950/75',
    'bg-blue-950/75',
    'bg-green-950/75',
    'bg-yellow-950/75',
    'bg-purple-950/75'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  const handleScheduleClick = () => {
    window.open('https://calendly.live', '_blank', 'noopener,noreferrer');
  };

  const handleOpenJob = (jobId: string) => {
    setShowPositionsDialog(false);
    setActiveJobDialog(jobId);
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
      {backgroundImages.map((image, index) => (
        <div
          key={index}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000"
          style={{ 
            backgroundImage: `url(${image})`,
            filter: 'blur(5px)',
            opacity: currentImageIndex === index ? 1 : 0
          }}
        />
      ))}
      
      {overlayColors.map((color, index) => (
        <div
          key={index}
          className={`absolute inset-0 ${color} transition-opacity duration-1000`}
          style={{ opacity: currentImageIndex === index ? 1 : 0 }}
        />
      ))}


      <Dialog open={showPositionsDialog} onOpenChange={setShowPositionsDialog}>
        <DialogContent className="max-w-2xl bg-black/50 backdrop-blur-2xl border-white/20">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-white">Available Positions</DialogTitle>
            <DialogDescription className="text-base text-white/80">
              Explore career opportunities at Warner Bros Entertainment Inc.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-3 py-4">
            <button
              onClick={() => handleOpenJob('social-media-manager')}
              className="w-full rounded-lg bg-white/10 backdrop-blur-md p-6 text-left transition-all hover:bg-white/20 hover:scale-[1.02]"
              data-testid="position-social-media-manager"
            >
              <div className="flex items-start gap-4">
                <Briefcase className="h-6 w-6 mt-1 text-white" />
                <div>
                  <h3 className="text-lg font-semibold text-white">Social Media Manager</h3>
                </div>
              </div>
            </button>

            <button
              onClick={() => handleOpenJob('social-media-director')}
              className="w-full rounded-lg bg-white/10 backdrop-blur-md p-6 text-left transition-all hover:bg-white/20 hover:scale-[1.02]"
              data-testid="position-social-media-director"
            >
              <div className="flex items-start gap-4">
                <Briefcase className="h-6 w-6 mt-1 text-white" />
                <div>
                  <h3 className="text-lg font-semibold text-white">Social Media Director</h3>
                </div>
              </div>
            </button>

            <button
              onClick={() => handleOpenJob('digital-marketing-manager')}
              className="w-full rounded-lg bg-white/10 backdrop-blur-md p-6 text-left transition-all hover:bg-white/20 hover:scale-[1.02]"
              data-testid="position-digital-marketing-manager"
            >
              <div className="flex items-start gap-4">
                <Briefcase className="h-6 w-6 mt-1 text-white" />
                <div>
                  <h3 className="text-lg font-semibold text-white">Digital Marketing Manager</h3>
                </div>
              </div>
            </button>
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={activeJobDialog === 'social-media-manager'} onOpenChange={(open) => !open && setActiveJobDialog(null)}>
        <DialogContent className="max-w-3xl bg-black/50 backdrop-blur-2xl border-white/20">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-white">Social Media Manager</DialogTitle>
            <DialogDescription className="text-base text-white/80">
              Warner Bros Entertainment Inc.
            </DialogDescription>
          </DialogHeader>
          <ScrollArea className="max-h-[60vh] pr-4">
            <div className="space-y-6 text-sm leading-relaxed text-white/90">
              <p>
                Thank you for your interest in the Social Media Manager position at Warner Bros. This is an exciting opportunity to shape the brand's social presence and drive meaningful engagement across global markets.
              </p>

              <div>
                <h3 className="mb-3 text-lg font-semibold">Role Highlights</h3>
                <ul className="space-y-3">
                  <li>
                    <strong>Global Social Strategy:</strong> Develop and implement innovative strategies to grow Warner Bros' voice and engagement across diverse international audiences.
                  </li>
                  <li>
                    <strong>Content & Creative Direction:</strong> Lead content planning and oversee creative execution across major platforms, ensuring cultural relevance and brand consistency.
                  </li>
                  <li>
                    <strong>Analytics & Growth:</strong> Leverage insights and data to optimize campaigns, maximize ROI, and scale initiatives that deliver measurable impact.
                  </li>
                  <li>
                    <strong>Cross-Functional Collaboration:</strong> Partner with world-class marketing, creative, product, and regional teams to ensure alignment with Warner Bros' broader business goals.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="mb-3 text-lg font-semibold">Compensation & Benefits</h3>
                <ul className="space-y-3">
                  <li>
                    <strong>Base Salary:</strong> $140,000 – $180,000 USD annually for remote roles, with adjustments for experience and global location.
                  </li>
                  <li>
                    <strong>Bonus & Incentives:</strong> Eligible for performance-based bonuses and additional compensation programs.
                  </li>
                  <li>
                    <strong>Global Flexibility:</strong> Fully remote worldwide, with strong support for collaboration, professional growth, and work-life balance.
                  </li>
                </ul>
              </div>

              <div className="pt-6 border-t">
                <button
                  onClick={handleScheduleClick}
                  className="w-full inline-flex items-center justify-center gap-3 rounded-full bg-[#006BFF] px-10 py-4 text-lg font-semibold text-white shadow-2xl transition-all hover:bg-[#0058D6] hover:shadow-[0_8px_30px_rgb(0,107,255,0.4)] active:scale-95"
                  data-testid="button-schedule-job"
                >
                  <Calendar className="h-5 w-5" />
                  Schedule with Calendly
                </button>
              </div>
            </div>
          </ScrollArea>
        </DialogContent>
      </Dialog>

      <Dialog open={activeJobDialog === 'social-media-director'} onOpenChange={(open) => !open && setActiveJobDialog(null)}>
        <DialogContent className="max-w-3xl bg-black/50 backdrop-blur-2xl border-white/20">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-white">Social Media Director</DialogTitle>
            <DialogDescription className="text-base text-white/80">
              Warner Bros Entertainment Inc.
            </DialogDescription>
          </DialogHeader>
          <ScrollArea className="max-h-[60vh] pr-4">
            <div className="space-y-6 text-sm leading-relaxed text-white/90">
              <p>
                We are seeking an exceptional Social Media Director to lead Warner Bros' global social media presence. This senior leadership role offers the opportunity to define strategy, drive innovation, and build world-class teams across international markets.
              </p>

              <div>
                <h3 className="mb-3 text-lg font-semibold">Strategic Responsibilities</h3>
                <ul className="space-y-3">
                  <li>
                    <strong>Executive Leadership:</strong> Define and execute comprehensive social media strategies that align with Warner Bros' global business objectives and brand vision.
                  </li>
                  <li>
                    <strong>Team Development:</strong> Build, mentor, and lead high-performing social media teams across multiple regions, fostering innovation and excellence.
                  </li>
                  <li>
                    <strong>Platform Innovation:</strong> Pioneer emerging platform strategies, leverage cutting-edge technologies, and establish Warner Bros as an industry leader in digital engagement.
                  </li>
                  <li>
                    <strong>Stakeholder Management:</strong> Collaborate with C-suite executives, creative leadership, and global business units to drive integrated marketing initiatives at scale.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="mb-3 text-lg font-semibold">Compensation & Benefits</h3>
                <ul className="space-y-3">
                  <li>
                    <strong>Base Salary:</strong> $220,000 – $280,000 USD annually for remote roles, commensurate with experience and market positioning.
                  </li>
                  <li>
                    <strong>Executive Benefits:</strong> Comprehensive bonus structure, equity opportunities, and executive compensation packages.
                  </li>
                  <li>
                    <strong>Leadership Perks:</strong> Global remote flexibility, professional development budget, and access to industry-leading resources and networks.
                  </li>
                </ul>
              </div>

              <div className="pt-6 border-t">
                <button
                  onClick={handleScheduleClick}
                  className="w-full inline-flex items-center justify-center gap-3 rounded-full bg-[#006BFF] px-10 py-4 text-lg font-semibold text-white shadow-2xl transition-all hover:bg-[#0058D6] hover:shadow-[0_8px_30px_rgb(0,107,255,0.4)] active:scale-95"
                  data-testid="button-schedule-job"
                >
                  <Calendar className="h-5 w-5" />
                  Schedule with Calendly
                </button>
              </div>
            </div>
          </ScrollArea>
        </DialogContent>
      </Dialog>

      <Dialog open={activeJobDialog === 'digital-marketing-manager'} onOpenChange={(open) => !open && setActiveJobDialog(null)}>
        <DialogContent className="max-w-3xl bg-black/50 backdrop-blur-2xl border-white/20">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-white">Digital Marketing Manager</DialogTitle>
            <DialogDescription className="text-base text-white/80">
              Warner Bros Entertainment Inc.
            </DialogDescription>
          </DialogHeader>
          <ScrollArea className="max-h-[60vh] pr-4">
            <div className="space-y-6 text-sm leading-relaxed text-white/90">
              <p>
                Join Warner Bros as a Digital Marketing Manager and drive transformative digital campaigns that captivate global audiences. This role combines strategic thinking with hands-on execution to deliver exceptional marketing results.
              </p>

              <div>
                <h3 className="mb-3 text-lg font-semibold">Core Responsibilities</h3>
                <ul className="space-y-3">
                  <li>
                    <strong>Campaign Management:</strong> Design and execute integrated digital marketing campaigns across multiple channels, optimizing for performance and brand impact.
                  </li>
                  <li>
                    <strong>Performance Marketing:</strong> Drive measurable results through data-driven strategies, including SEM, programmatic advertising, email marketing, and conversion optimization.
                  </li>
                  <li>
                    <strong>Analytics & Insights:</strong> Utilize advanced analytics tools to track campaign performance, derive actionable insights, and continuously improve marketing effectiveness.
                  </li>
                  <li>
                    <strong>Cross-Channel Integration:</strong> Collaborate with content, creative, and product teams to ensure seamless brand experiences across all digital touchpoints.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="mb-3 text-lg font-semibold">Compensation & Benefits</h3>
                <ul className="space-y-3">
                  <li>
                    <strong>Base Salary:</strong> $130,000 – $170,000 USD annually for remote positions, adjusted for expertise and geographic market.
                  </li>
                  <li>
                    <strong>Performance Incentives:</strong> Quarterly bonus opportunities tied to campaign performance and business impact metrics.
                  </li>
                  <li>
                    <strong>Professional Growth:</strong> Remote-first culture with comprehensive benefits, learning opportunities, and clear advancement pathways.
                  </li>
                </ul>
              </div>

              <div className="pt-6 border-t">
                <button
                  onClick={handleScheduleClick}
                  className="w-full inline-flex items-center justify-center gap-3 rounded-full bg-[#006BFF] px-10 py-4 text-lg font-semibold text-white shadow-2xl transition-all hover:bg-[#0058D6] hover:shadow-[0_8px_30px_rgb(0,107,255,0.4)] active:scale-95"
                  data-testid="button-schedule-job"
                >
                  <Calendar className="h-5 w-5" />
                  Schedule with Calendly
                </button>
              </div>
            </div>
          </ScrollArea>
        </DialogContent>
      </Dialog>

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
              Warner Bros Hiring
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
          
          <button
            onClick={() => setShowPositionsDialog(true)}
            className="inline-flex items-center justify-center gap-3 rounded-lg bg-white/10 px-12 py-5 text-xl font-semibold text-white backdrop-blur-md transition-all hover:bg-white/20 hover:scale-105"
            data-testid="button-open-positions"
          >
            Open Positions
          </button>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-20 pb-4">
        <div className="flex flex-wrap items-center justify-center gap-4 mb-4">
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

        <p className="text-center text-sm text-white/60 md:text-base">
          © 2025 Warner Bros. Entertainment Inc. All rights reserved.
        </p>
      </div>
    </div>
  );
}
