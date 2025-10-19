import { Link } from "wouter";
import { APP_TITLE, APP_LOGO } from "@/const";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <img src={APP_LOGO} alt={APP_TITLE} className="w-10 h-10 rounded-lg" />
          <span className="hidden sm:inline font-bold text-lg text-foreground">{APP_TITLE}</span>
        </Link>
        
        <nav className="flex items-center gap-1 sm:gap-2">
          <Link href="/" className="px-3 py-2 text-sm font-medium text-foreground hover:bg-accent rounded-md transition-colors">
            الرئيسية
          </Link>
          <Link href="/lectures" className="px-3 py-2 text-sm font-medium text-foreground hover:bg-accent rounded-md transition-colors">
            المحاضرات
          </Link>
          <Link href="/fatwas" className="px-3 py-2 text-sm font-medium text-foreground hover:bg-accent rounded-md transition-colors">
            الفتاوى
          </Link>
          <Link href="/books" className="px-3 py-2 text-sm font-medium text-foreground hover:bg-accent rounded-md transition-colors">
            الكتب
          </Link>
        </nav>
      </div>
    </header>
  );
}

