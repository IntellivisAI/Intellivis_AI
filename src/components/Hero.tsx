const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-64 h-64 bg-blue-100 dark:bg-blue-900/30 rounded-full opacity-30 blur-3xl"></div>
        <div className="absolute bottom-32 right-32 w-96 h-96 bg-purple-100 dark:bg-purple-900/30 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-blue-50/50 to-purple-50/50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-full opacity-60 blur-3xl"></div>
      </div>

      {/* Hero Content */}
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* Left Content */}
        <div className="text-left space-y-8">
          <div className="space-y-2">
            <p className="text-blue-600 dark:text-blue-400 font-semibold text-sm uppercase tracking-wider">Welcome to Intellivis.AI</p>
            <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white leading-tight">
              Smarter Software.
              <br />
              <span className="text-blue-600 dark:text-blue-400">Faster Solutions.</span>
            </h1>
          </div>
          
          <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
            We combine AI power with open-source innovation to help developers build smarter, solve faster, and create real-time impact.
          </p>

          <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
            Build the future with Intellivis.AI — where intelligence meets innovation.
          </p>

          {/* Reviews */}
          <div className="flex items-center gap-2 pt-4">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-xl">★</span>
              ))}
            </div>
            <span className="text-slate-900 dark:text-white font-semibold">4.9/5</span>
            <span className="text-slate-600 dark:text-slate-400">from over 100 reviews</span>
          </div>
        </div>

        {/* Right Content - Dashboard Preview */}
        <div className="relative">
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-700 overflow-hidden transform rotate-2 hover:rotate-0 transition-transform duration-500">
            {/* Dashboard Header */}
            <div className="bg-slate-50 dark:bg-slate-900 px-6 py-4 border-b border-slate-200 dark:border-slate-700 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">📊</span>
                </div>
                <span className="font-semibold text-slate-900 dark:text-white">AI Dashboard</span>
              </div>
              <div className="flex gap-2">
                <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
              </div>
            </div>

            {/* Dashboard Content */}
            <div className="p-6 space-y-6">
              {/* Metrics */}
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
                  <div className="w-12 h-12 bg-blue-600 rounded-full mx-auto mb-2 flex items-center justify-center">
                    <span className="text-white font-bold">M</span>
                  </div>
                  <div className="text-xs text-slate-600 dark:text-slate-400">MySQL</div>
                </div>
                <div className="text-center p-4 bg-purple-50 dark:bg-purple-900/30 rounded-lg">
                  <div className="w-12 h-12 bg-purple-600 rounded-full mx-auto mb-2 flex items-center justify-center">
                    <span className="text-white font-bold">P</span>
                  </div>
                  <div className="text-xs text-slate-600 dark:text-slate-400">PostgreSQL</div>
                </div>
                <div className="text-center p-4 bg-green-50 dark:bg-green-900/30 rounded-lg">
                  <div className="w-12 h-12 bg-green-600 rounded-full mx-auto mb-2 flex items-center justify-center">
                    <span className="text-white font-bold">M</span>
                  </div>
                  <div className="text-xs text-slate-600 dark:text-slate-400">MongoDB</div>
                </div>
              </div>

              {/* Chart Area */}
              <div className="h-32 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/50 dark:to-purple-900/50 rounded-lg relative overflow-hidden">
                <svg className="w-full h-full" viewBox="0 0 300 100">
                  <path
                    d="M0,80 Q75,20 150,40 T300,30"
                    stroke="#3b82f6"
                    strokeWidth="3"
                    fill="none"
                    className="animate-pulse"
                  />
                </svg>
              </div>

              {/* Key Insight */}
              <div className="bg-slate-50 dark:bg-slate-700 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-100 dark:bg-blue-900/50 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-blue-600 dark:text-blue-400 text-xs">💡</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white text-sm">Key Insight</h4>
                    <p className="text-slate-600 dark:text-slate-400 text-xs mt-1">
                      Development efficiency increased by 40% using AI-powered tools
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Elements */}
          <div className="absolute -top-4 -right-4 w-16 h-16 bg-blue-100 dark:bg-blue-900/50 rounded-full flex items-center justify-center animate-float">
            <span className="text-2xl">🚀</span>
          </div>
          <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-purple-100 dark:bg-purple-900/50 rounded-full flex items-center justify-center animate-float-delayed">
            <span className="text-xl">⚡</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
