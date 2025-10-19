import { APP_TITLE, APP_DESCRIPTION } from "@/const";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background mt-12">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-lg mb-2">{APP_TITLE}</h3>
            <p className="text-sm text-muted-foreground">{APP_DESCRIPTION}</p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">الأقسام</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="text-muted-foreground hover:text-foreground transition-colors">الرئيسية</a></li>
              <li><a href="/lectures" className="text-muted-foreground hover:text-foreground transition-colors">المحاضرات</a></li>
              <li><a href="/fatwas" className="text-muted-foreground hover:text-foreground transition-colors">الفتاوى</a></li>
              <li><a href="/books" className="text-muted-foreground hover:text-foreground transition-colors">الكتب</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">تابعنا</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">YouTube</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Facebook</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Instagram</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border pt-8">
          <p className="text-center text-sm text-muted-foreground">
            © {currentYear} {APP_TITLE}. جميع الحقوق محفوظة.
          </p>
        </div>
      </div>
    </footer>
  );
}

