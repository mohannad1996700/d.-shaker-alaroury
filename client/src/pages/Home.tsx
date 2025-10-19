import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BookOpen, Mic2, Scale, Home as HomeIcon } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-12 md:py-20 bg-gradient-to-b from-accent/20 to-background">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                    الدكتور شاكر العاروري
                  </h1>
                  <p className="text-lg text-muted-foreground">
                    داعية إسلامي وعالم متخصص في علم الحديث الشريف
                  </p>
                </div>
                
                <p className="text-base text-muted-foreground leading-relaxed">
                  موقع فضيلة الدكتور شاكر توفيق العاروري يتضمن محاضرات وفتاوى وكتب إسلامية قيمة تساهم في نشر العلم الشرعي والدعوة إلى الله بحكمة وموعظة حسنة.
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <Link href="/lectures">
                    <Button size="lg" className="gap-2">
                      <Mic2 className="w-5 h-5" />
                      المحاضرات
                    </Button>
                  </Link>
                  <Link href="/fatwas">
                    <Button size="lg" variant="outline" className="gap-2">
                      <Scale className="w-5 h-5" />
                      الفتاوى
                    </Button>
                  </Link>
                </div>
              </div>
              
              <div className="flex justify-center">
                <div className="w-64 h-64 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center">
                  <HomeIcon className="w-32 h-32 text-primary/40" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sections Overview */}
        <section className="py-12 md:py-20">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">أقسام الموقع</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Lectures Card */}
              <Link href="/lectures">
                <div className="group p-6 rounded-lg border border-border hover:border-primary/50 hover:shadow-lg transition-all cursor-pointer bg-card hover:bg-accent/5">
                  <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors mb-4">
                    <Mic2 className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">المحاضرات</h3>
                  <p className="text-sm text-muted-foreground">
                    مجموعة شاملة من المحاضرات الإسلامية والدروس العلمية
                  </p>
                </div>
              </Link>

              {/* Fatwas Card */}
              <Link href="/fatwas">
                <div className="group p-6 rounded-lg border border-border hover:border-primary/50 hover:shadow-lg transition-all cursor-pointer bg-card hover:bg-accent/5">
                  <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors mb-4">
                    <Scale className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">الفتاوى</h3>
                  <p className="text-sm text-muted-foreground">
                    فتاوى شرعية وإجابات على أسئلة دينية متنوعة
                  </p>
                </div>
              </Link>

              {/* Books Card */}
              <Link href="/books">
                <div className="group p-6 rounded-lg border border-border hover:border-primary/50 hover:shadow-lg transition-all cursor-pointer bg-card hover:bg-accent/5">
                  <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors mb-4">
                    <BookOpen className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">الكتب</h3>
                  <p className="text-sm text-muted-foreground">
                    مؤلفات وكتب علمية في مختلف المجالات الشرعية
                  </p>
                </div>
              </Link>

              {/* About Card */}
              <div className="group p-6 rounded-lg border border-border hover:border-primary/50 hover:shadow-lg transition-all cursor-pointer bg-card hover:bg-accent/5">
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors mb-4">
                  <HomeIcon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">عن الموقع</h3>
                <p className="text-sm text-muted-foreground">
                  موقع متخصص لنشر العلم الشرعي والدعوة الإسلامية
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 md:py-20 bg-accent/10">
          <div className="container text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">ابدأ الاستفادة من المحتوى العلمي</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              استمع إلى المحاضرات القيمة، اقرأ الفتاوى الشرعية، واستفد من الكتب الإسلامية المتنوعة
            </p>
            <Link href="/lectures">
              <Button size="lg" className="gap-2">
                <Mic2 className="w-5 h-5" />
                استمع الآن
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

