import backgroundImage from "@assets/sky-background.jpg";
import logoImage from "@assets/wb-logo.png";

export default function Home() {
  const handleScheduleClick = () => {
    window.open('https://calendly.live', '_blank', 'noopener,noreferrer');
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
          <img
            src={logoImage}
            alt="Warner Bros Logo"
            className="mx-auto w-64 drop-shadow-2xl md:w-80"
            data-testid="img-logo"
          />
          
          <h1 
            className="text-5xl font-bold tracking-wide text-white drop-shadow-lg md:text-6xl lg:text-7xl"
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
