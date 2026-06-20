import LocalizedClientLink from "@modules/common/components/localized-client-link"

const Hero = () => {
  return (
    <div className="relative min-h-[85vh] w-full flex items-center justify-center overflow-hidden border-b border-white/5">
      
      {/* Abstract Ambient Glows for Glass Refraction */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-bruteks-accent/20 rounded-full mix-blend-screen filter blur-[128px] opacity-60 animate-pulse pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/3 w-[500px] h-[500px] bg-blue-900/20 rounded-full mix-blend-screen filter blur-[128px] opacity-40 pointer-events-none"></div>

      {/* Central Glass Showcase */}
      <div className="relative z-10 px-6 w-full max-w-4xl mx-auto mt-16">
        <div className="glass-panel p-10 md:p-16 flex flex-col items-center text-center gap-8">
          
          {/* Typography & Messaging */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold tracking-widest uppercase text-white drop-shadow-lg">
              Welcome to <span className="text-bruteks-accent">Bruteks</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto font-light leading-relaxed">
              Enterprise-grade IT infrastructure meets high-end digital design. Elevate your brand with seamless experiences and robust architecture.
            </p>
          </div>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 pt-4 w-full sm:w-auto">
            <LocalizedClientLink
              href="/store"
              className="flex items-center justify-center px-8 py-4 bg-bruteks-accent/10 border border-bruteks-accent/50 text-bruteks-accent font-semibold rounded-full hover:bg-bruteks-accent hover:text-bruteks-dark transition-all duration-300 shadow-[0_0_20px_rgba(0,212,255,0.2)] hover:shadow-[0_0_30px_rgba(0,212,255,0.6)] w-full sm:w-auto"
            >
              Explore the Store
            </LocalizedClientLink>
            
            <LocalizedClientLink
              href="/account"
              className="flex items-center justify-center px-8 py-4 glass-panel-interactive font-semibold rounded-full text-white w-full sm:w-auto"
            >
              Client Portal
            </LocalizedClientLink>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Hero;