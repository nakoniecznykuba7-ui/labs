import { ShoppingCart, Sparkles, Briefcase, TrendingUp, CheckCircle2 } from 'lucide-react';

export default function DashboardMockup() {
  return (
    <div className="relative">
      {/* Main Dashboard Card */}
      <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-6 shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-white">Twój plan w EarningLab</h3>
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-500/30">
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
            <span className="text-xs font-medium text-emerald-300">Plan aktywny</span>
          </div>
        </div>

        {/* Three Path Cards */}
        <div className="space-y-3 mb-6">
          {/* EcomLab */}
          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-xl p-4 hover:border-cyan-500/40 transition-all cursor-pointer group">
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-cyan-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <ShoppingCart className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">EcomLab</h4>
                  <p className="text-xs text-gray-400">E-commerce & Dropshipping</p>
                  <div className="flex items-center gap-2 mt-2">
                    <div className="h-1.5 bg-cyan-500/20 rounded-full w-24">
                      <div className="h-full bg-cyan-500 rounded-full w-1/3"></div>
                    </div>
                    <span className="text-xs text-cyan-400">Krok 2/7</span>
                  </div>
                </div>
              </div>
              <CheckCircle2 className="w-5 h-5 text-gray-600" />
            </div>
          </div>

          {/* AI Skill Lab */}
          <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-xl p-4 hover:border-purple-500/40 transition-all cursor-pointer group">
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Sparkles className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">AI Skill Lab</h4>
                  <p className="text-xs text-gray-400">Umiejętności + AI</p>
                  <div className="flex items-center gap-2 mt-2">
                    <div className="h-1.5 bg-purple-500/20 rounded-full w-24">
                      <div className="h-full bg-purple-500 rounded-full w-0"></div>
                    </div>
                    <span className="text-xs text-purple-400">Gotowe do startu</span>
                  </div>
                </div>
              </div>
              <CheckCircle2 className="w-5 h-5 text-gray-600" />
            </div>
          </div>

          {/* Service Growth Lab */}
          <div className="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border border-blue-500/20 rounded-xl p-4 hover:border-blue-500/40 transition-all cursor-pointer group">
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Briefcase className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Service Growth Lab</h4>
                  <p className="text-xs text-gray-400">Freelance & Skalowanie usług</p>
                  <div className="flex items-center gap-2 mt-2">
                    <div className="h-1.5 bg-blue-500/20 rounded-full w-24">
                      <div className="h-full bg-blue-500 rounded-full w-0"></div>
                    </div>
                    <span className="text-xs text-blue-400">Gotowe do startu</span>
                  </div>
                </div>
              </div>
              <CheckCircle2 className="w-5 h-5 text-gray-600" />
            </div>
          </div>
        </div>

        {/* Progress Chart */}
        <div className="bg-white/5 rounded-xl p-4 border border-white/5">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-medium text-gray-300">Twoje kroki → Twoje wyniki</span>
            <TrendingUp className="w-4 h-4 text-emerald-400" />
          </div>

          {/* Simple Bar Chart */}
          <div className="flex items-end justify-between gap-2 h-24">
            <div className="flex-1 flex flex-col justify-end">
              <div className="bg-gradient-to-t from-cyan-500 to-cyan-400 rounded-t h-8 hover:h-10 transition-all"></div>
              <span className="text-xs text-gray-500 text-center mt-1">Dzień 1</span>
            </div>
            <div className="flex-1 flex flex-col justify-end">
              <div className="bg-gradient-to-t from-cyan-500 to-cyan-400 rounded-t h-12 hover:h-14 transition-all"></div>
              <span className="text-xs text-gray-500 text-center mt-1">Dzień 3</span>
            </div>
            <div className="flex-1 flex flex-col justify-end">
              <div className="bg-gradient-to-t from-cyan-500 to-cyan-400 rounded-t h-20 hover:h-24 transition-all"></div>
              <span className="text-xs text-gray-500 text-center mt-1">Dzień 5</span>
            </div>
            <div className="flex-1 flex flex-col justify-end">
              <div className="bg-gradient-to-t from-emerald-500 to-emerald-400 rounded-t h-24 hover:h-28 transition-all relative">
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-emerald-500 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                  Przełomowy Tydzień!
                </div>
              </div>
              <span className="text-xs text-emerald-400 text-center mt-1 font-medium">Dzień 7</span>
            </div>
          </div>
        </div>

        {/* Status Footer */}
        <div className="mt-4 flex items-center justify-between text-xs">
          <span className="text-gray-500">Ostatnia aktualizacja: dziś</span>
          <span className="text-cyan-400 font-medium">Krok 2/7 ukończony</span>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute -top-4 -right-4 w-24 h-24 bg-cyan-500/20 rounded-full blur-2xl"></div>
      <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl"></div>
    </div>
  );
}
