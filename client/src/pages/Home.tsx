import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BookOpen, Mic2, Scale, Sparkles, ArrowLeft } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-background via-background to-accent/5">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section - Enhanced */}
        <section className="relative py-16 md:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-accent/10 pointer-events-none" />
          
          <div className="container relative">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full">
                    <Sparkles className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium text-primary">مرحبا بك في موقعنا</span>
                  </div>
                  
                  <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
                    الدكتور شاكر
                    <span className="block text-primary">العاروري</span>
                  </h1>
                  
                  <p className="text-xl text-muted-foreground">
                    داعية إسلامي وعالم متخصص في علم الحديث الشريف
                  </p>
                </div>
                
                <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
                  موقع متخصص يجمع محاضرات وفتاوى وكتب إسلامية قيمة تساهم في نشر العلم الشرعي والدعوة إلى الله بحكمة وموعظة حسنة.
                </p>
                
                <div className="flex flex-wrap gap-4 pt-4">
                  <Link href="/lectures">
                    <Button size="lg" className="gap-2 text-base">
                      <Mic2 className="w-5 h-5" />
                      استمع للمحاضرات
                    </Button>
                  </Link>
                  <Link href="/fatwas">
                    <Button size="lg" variant="outline" className="gap-2 text-base">
                      <Scale className="w-5 h-5" />
                      اقرأ الفتاوى
                    </Button>
                  </Link>
                </div>
              </div>
              
              <div className="relative hidden md:block">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-3xl" />
                <div className="relative bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl p-12 flex items-center justify-center h-96 border border-primary/20">
                  <div className="text-center">
                    <div className="w-32 h-32 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                      <Mic2 className="w-16 h-16 text-white" />
                    </div>
                    <p className="text-foreground font-semibold">محاضرات وفتاوى وكتب</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 border-y border-border bg-card/50">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">100+</div>
                <p className="text-muted-foreground">محاضرة إسلامية</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">50+</div>
                <p className="text-muted-foreground">فتوى شرعية</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">20+</div>
                <p className="text-muted-foreground">كتاب علمي</p>
              </div>
            </div>
          </div>
        </section>

        {/* Sections Overview - Enhanced */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">أقسام الموقع</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                استكشف مجموعة شاملة من المحاضرات والفتاوى والكتب الإسلامية
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Home Card */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity blur-xl" />
                <Link href="/">
                  <div className="relative p-8 rounded-2xl border border-border hover:border-primary/50 hover:shadow-xl transition-all cursor-pointer bg-card hover:bg-accent/5 h-full flex flex-col">
                    <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors mb-6">
                      <Sparkles className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="font-bold text-xl mb-3">الصفحة الرئيسية</h3>
                    <p className="text-sm text-muted-foreground flex-1">
                      تعريف بالدكتور والموقع مع روابط سريعة للأقسام
                    </p>
                    <div className="flex items-center gap-2 text-primary mt-4 group-hover:translate-x-2 transition-transform">
                      <span className="text-sm font-medium">اكتشف المزيد</span>
                      <ArrowLeft className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              </div>

              {/* Lectures Card */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity blur-xl" />
                <Link href="/lectures">
                  <div className="relative p-8 rounded-2xl border border-border hover:border-primary/50 hover:shadow-xl transition-all cursor-pointer bg-card hover:bg-accent/5 h-full flex flex-col">
                    <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors mb-6">
                      <Mic2 className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="font-bold text-xl mb-3">المحاضرات</h3>
                    <p className="text-sm text-muted-foreground flex-1">
                      مجموعة شاملة من المحاضرات الإسلامية والدروس العلمية
                    </p>
                    <div className="flex items-center gap-2 text-primary mt-4 group-hover:translate-x-2 transition-transform">
                      <span className="text-sm font-medium">استمع الآن</span>
                      <ArrowLeft className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              </div>

              {/* Fatwas Card */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity blur-xl" />
                <Link href="/fatwas">
                  <div className="relative p-8 rounded-2xl border border-border hover:border-primary/50 hover:shadow-xl transition-all cursor-pointer bg-card hover:bg-accent/5 h-full flex flex-col">
                    <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors mb-6">
                      <Scale className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="font-bold text-xl mb-3">الفتاوى</h3>
                    <p className="text-sm text-muted-foreground flex-1">
                      فتاوى شرعية وإجابات على أسئلة دينية متنوعة
                    </p>
                    <div className="flex items-center gap-2 text-primary mt-4 group-hover:translate-x-2 transition-transform">
                      <span className="text-sm font-medium">اقرأ الفتاوى</span>
                      <ArrowLeft className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              </div>

              {/* Books Card */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity blur-xl" />
                <Link href="/books">
                  <div className="relative p-8 rounded-2xl border border-border hover:border-primary/50 hover:shadow-xl transition-all cursor-pointer bg-card hover:bg-accent/5 h-full flex flex-col">
                    <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors mb-6">
                      <BookOpen className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="font-bold text-xl mb-3">الكتب</h3>
                    <p className="text-sm text-muted-foreground flex-1">
                      مؤلفات وكتب علمية في مختلف المجالات الشرعية
                    </p>
                    <div className="flex items-center gap-2 text-primary mt-4 group-hover:translate-x-2 transition-transform">
                      <span className="text-sm font-medium">اقرأ الكتب</span>
                      <ArrowLeft className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section - Enhanced */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10">
          <div className="container text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">ابدأ رحلتك العلمية اليوم</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              استمع إلى المحاضرات القيمة، اقرأ الفتاوى الشرعية، واستفد من الكتب الإسلامية المتنوعة
            </p>
            <Link href="/lectures">
              <Button size="lg" className="gap-2 text-base">
                <Mic2 className="w-5 h-5" />
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

