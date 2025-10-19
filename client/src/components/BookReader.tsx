import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  ChevronLeft,
  ChevronRight,
  X,
  ZoomIn,
  ZoomOut,
  Settings,
  BookOpen,
} from "lucide-react";

interface BookReaderProps {
  bookId: string;
  bookTitle: string;
  onClose: () => void;
}

interface BookPage {
  pageNumber: number;
  content: string;
}

export default function BookReader({
  bookId,
  bookTitle,
  onClose,
}: BookReaderProps) {
  const [pages, setPages] = useState<BookPage[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [fontSize, setFontSize] = useState(16);
  const [lineHeight, setLineHeight] = useState(1.8);
  const [showSettings, setShowSettings] = useState(false);
  const [goToPageInput, setGoToPageInput] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  // Load book pages from localStorage
  useEffect(() => {
    const savedPages = localStorage.getItem(`book_${bookId}`);
    if (savedPages) {
      setPages(JSON.parse(savedPages));
      setIsLoading(false);
    } else {
      // Create sample pages if no saved pages
      const samplePages: BookPage[] = [
        {
          pageNumber: 1,
          content: `${bookTitle}\n\nهذا هو الغلاف الأول للكتاب. يمكنك إضافة محتوى الكتاب من خلال لوحة التحكم.`,
        },
        {
          pageNumber: 2,
          content: `الفهرس\n\n1. المقدمة\n2. الفصل الأول\n3. الفصل الثاني\n4. الفصل الثالث\n5. الخاتمة`,
        },
        {
          pageNumber: 3,
          content: `المقدمة\n\nبسم الله الرحمن الرحيم\n\nهذا الكتاب يتناول موضوعات مهمة في الشريعة الإسلامية. نرجو أن ينفع الله به القارئ الكريم.`,
        },
      ];
      setPages(samplePages);
      localStorage.setItem(`book_${bookId}`, JSON.stringify(samplePages));
      setIsLoading(false);
    }
  }, [bookId, bookTitle]);

  const totalPages = pages.length;
  const currentPageData = pages.find((p) => p.pageNumber === currentPage);

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goToPage = () => {
    const pageNum = parseInt(goToPageInput);
    if (pageNum >= 1 && pageNum <= totalPages) {
      setCurrentPage(pageNum);
      setGoToPageInput("");
    }
  };

  const increaseFontSize = () => {
    if (fontSize < 24) setFontSize(fontSize + 2);
  };

  const decreaseFontSize = () => {
    if (fontSize > 12) setFontSize(fontSize - 2);
  };

  const increaseLineHeight = () => {
    if (lineHeight < 2.5) setLineHeight(parseFloat((lineHeight + 0.2).toFixed(1)));
  };

  const decreaseLineHeight = () => {
    if (lineHeight > 1.2) setLineHeight(parseFloat((lineHeight - 0.2).toFixed(1)));
  };

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
        <div className="bg-card rounded-lg p-8 text-center">
          <BookOpen className="w-12 h-12 text-primary mx-auto mb-4 animate-pulse" />
          <p className="text-foreground">جاري تحميل الكتاب...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-background rounded-lg shadow-2xl flex flex-col h-[90vh] w-full max-w-4xl">
        {/* Header */}
        <div className="border-b border-border p-4 flex items-center justify-between">
          <div className="flex-1">
            <h2 className="text-xl font-bold text-foreground">{bookTitle}</h2>
            <p className="text-sm text-muted-foreground">
              الصفحة {currentPage} من {totalPages}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Button
              onClick={() => setShowSettings(!showSettings)}
              variant="outline"
              size="sm"
              className="gap-2"
            >
              <Settings className="w-4 h-4" />
              الإعدادات
            </Button>
            <Button
              onClick={onClose}
              variant="outline"
              size="sm"
              className="gap-2"
            >
              <X className="w-4 h-4" />
              إغلاق
            </Button>
          </div>
        </div>

        {/* Settings Panel */}
        {showSettings && (
          <div className="border-b border-border p-4 bg-accent/5 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-3">
                  حجم الخط: {fontSize}px
                </label>
                <div className="flex items-center gap-2">
                  <Button
                    onClick={decreaseFontSize}
                    variant="outline"
                    size="sm"
                  >
                    <ZoomOut className="w-4 h-4" />
                  </Button>
                  <input
                    type="range"
                    min="12"
                    max="24"
                    value={fontSize}
                    onChange={(e) => setFontSize(parseInt(e.target.value))}
                    className="flex-1"
                  />
                  <Button
                    onClick={increaseFontSize}
                    variant="outline"
                    size="sm"
                  >
                    <ZoomIn className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-3">
                  ارتفاع السطر: {lineHeight.toFixed(1)}
                </label>
                <div className="flex items-center gap-2">
                  <Button
                    onClick={decreaseLineHeight}
                    variant="outline"
                    size="sm"
                  >
                    −
                  </Button>
                  <input
                    type="range"
                    min="1.2"
                    max="2.5"
                    step="0.1"
                    value={lineHeight}
                    onChange={(e) => setLineHeight(parseFloat(e.target.value))}
                    className="flex-1"
                  />
                  <Button
                    onClick={increaseLineHeight}
                    variant="outline"
                    size="sm"
                  >
                    +
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto p-8 bg-card">
          {currentPageData ? (
            <div
              style={{
                fontSize: `${fontSize}px`,
                lineHeight: lineHeight,
                direction: "rtl",
                textAlign: "right",
              }}
              className="max-w-2xl mx-auto text-foreground whitespace-pre-wrap leading-relaxed"
            >
              {currentPageData.content}
            </div>
          ) : (
            <div className="flex items-center justify-center h-full">
              <p className="text-muted-foreground">لم يتم العثور على محتوى الصفحة</p>
            </div>
          )}
        </div>

        {/* Navigation */}
        <div className="border-t border-border p-4 bg-accent/5 space-y-4">
          {/* Go to page input */}
          <div className="flex items-center gap-2">
            <Input
              type="number"
              placeholder="اذهب إلى الصفحة..."
              value={goToPageInput}
              onChange={(e) => setGoToPageInput(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && goToPage()}
              min="1"
              max={totalPages}
              className="w-32"
            />
            <Button onClick={goToPage} size="sm" variant="outline">
              اذهب
            </Button>
          </div>

          {/* Page navigation buttons */}
          <div className="flex items-center justify-between">
            <Button
              onClick={goToPreviousPage}
              disabled={currentPage === 1}
              className="gap-2"
            >
              <ChevronRight className="w-4 h-4" />
              الصفحة السابقة
            </Button>

            <div className="text-center">
              <p className="text-sm font-medium">
                الصفحة {currentPage} من {totalPages}
              </p>
              <div className="w-64 h-2 bg-border rounded-full mt-2">
                <div
                  className="h-full bg-primary rounded-full transition-all"
                  style={{
                    width: `${(currentPage / totalPages) * 100}%`,
                  }}
                />
              </div>
            </div>

            <Button
              onClick={goToNextPage}
              disabled={currentPage === totalPages}
              className="gap-2"
            >
              الصفحة التالية
              <ChevronLeft className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

