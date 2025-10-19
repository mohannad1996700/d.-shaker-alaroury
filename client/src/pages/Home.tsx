import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BookOpen, Mic2, Scale, ArrowRight, Sparkles, TrendingUp } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section - Doctor Profile */}
        <section className="relative overflow-hidden py-16 md:py-24">
          {/* Animated Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-purple-600/5 to-teal-600/5" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl animate-pulse delay-1000" />
          
          <div className="container relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Doctor Image */}
              <div className="flex justify-center order-2 lg:order-1">
                <div className="relative group">
                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-400 via-yellow-500 to-orange-500 rounded-full blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500" />
                  
                  {/* Main Image Container */}
                  <div className="relative">
                    <div className="w-80 h-80 md:w-96 md:h-96 rounded-full bg-gradient-to-br from-amber-400 via-yellow-500 to-orange-500 p-1.5 shadow-2xl transform group-hover:scale-105 transition-transform duration-500">
                      <div className="w-full h-full rounded-full bg-white p-2">
                        <img
                          src="/doctor-shaker.jpg"
                          alt="الدكتور شاكر العاروري"
                          className="w-full h-full rounded-full object-cover"
                        />
                      </div>
                    </div>
                    
                    {/* Decorative Elements */}
                    <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full opacity-20 animate-bounce" />
                    <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-teal-500 to-blue-600 rounded-full opacity-20 animate-bounce delay-500" />
                  </div>
                </div>
              </div>

              {/* Doctor Info */}
              <div className="space-y-8 order-1 lg:order-2">
                <div className="space-y-6">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-full border border-blue-200">
                    <Sparkles className="w-4 h-4 text-blue-600" />
                    <span className="text-sm font-semibold text-blue-900">مرحباً بكم في الموقع الرسمي</span>
                  </div>
                  
                  <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-900 via-purple-900 to-blue-900 bg-clip-text text-transparent leading-tight">
                    الدكتور شاكر العاروري
                  </h1>
                  
                  <p className="text-2xl md:text-3xl font-semibold text-transparent bg-gradient-to-r from-blue-700 to-purple-700 bg-clip-text">
                    داعية إسلامي وعالم متخصص في علم الحديث الشريف
                  </p>
                  
                  <p className="text-lg text-gray-700 leading-relaxed max-w-2xl">
                    موقع متخصص يجمع محاضرات وفتاوى وكتب إسلامية قيمة تساهم في نشر العلم الشرعي والدعوة إلى الله بحكمة وموعظة حسنة.
                  </p>
                </div>

                <div className="flex flex-wrap gap-4">
                  <Link href="/lectures">
                    <Button size="lg" className="gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg hover:shadow-xl transition-all duration-300 group">
                      <Mic2 className="w-5 h-5 group-hover:scale-110 transition-transform" />
                      المحاضرات
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                  <Link href="/fatwas">
                    <Button size="lg" className="gap-2 bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white shadow-lg hover:shadow-xl transition-all duration-300 group">
                      <Scale className="w-5 h-5 group-hover:scale-110 transition-transform" />
                      الفتاوى
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                  <Link href="/books">
                    <Button size="lg" className="gap-2 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white shadow-lg hover:shadow-xl transition-all duration-300 group">
                      <BookOpen className="w-5 h-5 group-hover:scale-110 transition-transform" />
                      الكتب
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sections Overview */}
        <section className="py-20 md:py-32 relative">
          <div className="container">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-900 via-purple-900 to-blue-900 bg-clip-text text-transparent">
                أقسام الموقع
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                استكشف مجموعة متنوعة من المحتوى الإسلامي القيم
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Home Card */}
              <Link href="/">
                <div className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer h-full border border-purple-100 hover:border-purple-300 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative z-10 space-y-6">
                    <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-600 shadow-lg group-hover:scale-110 transition-transform duration-500">
                      <span className="text-3xl">🏠</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-2xl mb-3 text-gray-900 group-hover:text-purple-700 transition-colors">
                        الصفحة الرئيسية
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        تعريف بالدكتور والموقع مع روابط سريعة للأقسام
                      </p>
                    </div>
                  </div>
                </div>
              </Link>

              {/* Lectures Card */}
              <Link href="/lectures">
                <div className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer h-full border border-blue-100 hover:border-blue-300 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative z-10 space-y-6">
                    <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-600 shadow-lg group-hover:scale-110 transition-transform duration-500">
                      <Mic2 className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-2xl mb-3 text-gray-900 group-hover:text-blue-700 transition-colors">
                        المحاضرات
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        مجموعة شاملة من المحاضرات الإسلامية والدروس العلمية
                      </p>
                    </div>
                  </div>
                </div>
              </Link>

              {/* Fatwas Card */}
              <Link href="/fatwas">
                <div className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer h-full border border-teal-100 hover:border-teal-300 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative z-10 space-y-6">
                    <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-teal-500 to-emerald-600 shadow-lg group-hover:scale-110 transition-transform duration-500">
                      <Scale className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-2xl mb-3 text-gray-900 group-hover:text-teal-700 transition-colors">
                        الفتاوى
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        فتاوى شرعية وإجابات على أسئلة دينية متنوعة
                      </p>
                    </div>
                  </div>
                </div>
              </Link>

              {/* Books Card */}
              <Link href="/books">
                <div className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer h-full border border-amber-100 hover:border-amber-300 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative z-10 space-y-6">
                    <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 shadow-lg group-hover:scale-110 transition-transform duration-500">
                      <BookOpen className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-2xl mb-3 text-gray-900 group-hover:text-amber-700 transition-colors">
                        الكتب
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        مؤلفات وكتب علمية في مختلف المجالات الشرعية
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-gradient-to-r from-blue-900 via-purple-900 to-blue-900 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE0YzAtMy4zMTQgMi42ODYtNiA2LTZzNiAyLjY4NiA2IDYtMi42ODYgNi02IDYtNi0yLjY4Ni02LTZ6TTEyIDM2YzAtMy4zMTQgMi42ODYtNiA2LTZzNiAyLjY4NiA2IDYtMi42ODYgNi02IDYtNi0yLjY4Ni02LTZ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-50" />
          
          <div className="container relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
              <div className="space-y-4 group">
                <div className="flex items-center justify-center">
                  <TrendingUp className="w-12 h-12 text-blue-300 group-hover:scale-110 transition-transform" />
                </div>
                <div className="text-5xl md:text-6xl font-bold text-white">100+</div>
                <div className="text-xl text-blue-200">محاضرة إسلامية</div>
              </div>
              
              <div className="space-y-4 group">
                <div className="flex items-center justify-center">
                  <Scale className="w-12 h-12 text-purple-300 group-hover:scale-110 transition-transform" />
                </div>
                <div className="text-5xl md:text-6xl font-bold text-white">50+</div>
                <div className="text-xl text-purple-200">فتوى شرعية</div>
              </div>
              
              <div className="space-y-4 group">
                <div className="flex items-center justify-center">
                  <BookOpen className="w-12 h-12 text-teal-300 group-hover:scale-110 transition-transform" />
                </div>
                <div className="text-5xl md:text-6xl font-bold text-white">20+</div>
                <div className="text-xl text-teal-200">كتاب علمي</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 md:py-32 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-900 via-purple-900 to-blue-900 bg-clip-text text-transparent">
                ابدأ رحلتك العلمية اليوم
              </h2>
              <p className="text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
                استمع إلى المحاضرات القيمة، اقرأ الفتاوى الشرعية، واستفد من الكتب الإسلامية المتنوعة
              </p>
              <div className="flex flex-wrap gap-4 justify-center pt-4">
                <Link href="/lectures">
                  <Button size="lg" className="gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-xl hover:shadow-2xl transition-all duration-300 px-8 py-6 text-lg group">
                    ابدأ الآن
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

