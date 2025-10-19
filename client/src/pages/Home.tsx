import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BookOpen, Mic2, Scale, Play } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section - Doctor Profile */}
        <section className="bg-gradient-to-b from-blue-50 to-white py-12 md:py-20">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              {/* Doctor Image */}
              <div className="flex justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full blur-3xl opacity-40" />
                  <div className="relative w-96 h-96 rounded-full bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 p-2 shadow-2xl">
                    <img
                      src="/doctor-shaker.jpg"
                      alt="الدكتور شاكر العاروري"
                      className="w-full h-full rounded-full object-cover border-4 border-white"
                    />
                  </div>
                </div>
              </div>

              {/* Doctor Info */}
              <div className="space-y-6">
                <div>
                  <h1 className="text-5xl md:text-6xl font-bold text-blue-900 mb-4">
                    الدكتور شاكر العاروري
                  </h1>
                  <p className="text-2xl text-blue-700 font-semibold mb-4">
                    داعية إسلامي وعالم متخصص في علم الحديث الشريف
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    موقع متخصص يجمع محاضرات وفتاوى وكتب إسلامية قيمة تساهم في نشر العلم الشرعي والدعوة إلى الله بحكمة وموعظة حسنة.
                  </p>
                </div>

                <div className="flex flex-wrap gap-4 pt-4">
                  <Link href="/lectures">
                    <Button size="lg" className="gap-2 bg-blue-600 hover:bg-blue-700 text-white">
                      <Mic2 className="w-5 h-5" />
                      المحاضرات
                    </Button>
                  </Link>
                  <Link href="/fatwas">
                    <Button size="lg" variant="outline" className="gap-2 border-blue-600 text-blue-600 hover:bg-blue-50">
                      <Scale className="w-5 h-5" />
                      الفتاوى
                    </Button>
                  </Link>
                  <Link href="/books">
                    <Button size="lg" variant="outline" className="gap-2 border-blue-600 text-blue-600 hover:bg-blue-50">
                      <BookOpen className="w-5 h-5" />
                      الكتب
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sections Overview */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container">
            <h2 className="text-4xl md:text-5xl font-bold text-center text-blue-900 mb-16">
              أقسام الموقع
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Home Card */}
              <Link href="/">
                <div className="bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl p-8 text-white shadow-lg hover:shadow-xl transition-shadow cursor-pointer h-full flex flex-col">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-white/20 mb-6">
                    <span className="text-3xl">🏠</span>
                  </div>
                  <h3 className="font-bold text-2xl mb-3">الصفحة الرئيسية</h3>
                  <p className="text-sm text-white/90 flex-1">
                    تعريف بالدكتور والموقع مع روابط سريعة للأقسام
                  </p>
                </div>
              </Link>

              {/* Lectures Card */}
              <Link href="/lectures">
                <div className="bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl p-8 text-white shadow-lg hover:shadow-xl transition-shadow cursor-pointer h-full flex flex-col">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-white/20 mb-6">
                    <Mic2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-bold text-2xl mb-3">المحاضرات</h3>
                  <p className="text-sm text-white/90 flex-1">
                    مجموعة شاملة من المحاضرات الإسلامية والدروس العلمية
                  </p>
                </div>
              </Link>

              {/* Fatwas Card */}
              <Link href="/fatwas">
                <div className="bg-gradient-to-br from-teal-400 to-teal-600 rounded-2xl p-8 text-white shadow-lg hover:shadow-xl transition-shadow cursor-pointer h-full flex flex-col">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-white/20 mb-6">
                    <Scale className="w-8 h-8" />
                  </div>
                  <h3 className="font-bold text-2xl mb-3">الفتاوى</h3>
                  <p className="text-sm text-white/90 flex-1">
                    فتاوى شرعية وإجابات على أسئلة دينية متنوعة
                  </p>
                </div>
              </Link>

              {/* Books Card */}
              <Link href="/books">
                <div className="bg-gradient-to-br from-amber-400 to-amber-600 rounded-2xl p-8 text-white shadow-lg hover:shadow-xl transition-shadow cursor-pointer h-full flex flex-col">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-white/20 mb-6">
                    <BookOpen className="w-8 h-8" />
                  </div>
                  <h3 className="font-bold text-2xl mb-3">الكتب</h3>
                  <p className="text-sm text-white/90 flex-1">
                    مؤلفات وكتب علمية في مختلف المجالات الشرعية
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-blue-900 text-white">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-5xl font-bold mb-2">100+</div>
                <p className="text-lg">محاضرة إسلامية</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold mb-2">50+</div>
                <p className="text-lg">فتوى شرعية</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold mb-2">20+</div>
                <p className="text-lg">كتاب علمي</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-blue-50 to-teal-50">
          <div className="container text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
              ابدأ رحلتك العلمية اليوم
            </h2>
            <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
              استمع إلى المحاضرات القيمة، اقرأ الفتاوى الشرعية، واستفد من الكتب الإسلامية المتنوعة
            </p>
            <Link href="/lectures">
              <Button size="lg" className="gap-2 bg-blue-600 hover:bg-blue-700 text-white">
                <Play className="w-5 h-5" />
                ابدأ الآن
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

