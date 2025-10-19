import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BookReader from "@/components/BookReader";
import { Button } from "@/components/ui/button";
import { Trash2, BookOpen, ExternalLink } from "lucide-react";

interface Book {
  id: string;
  title: string;
  author?: string;
  description?: string;
  url?: string;
  category?: string;
  hasInternalReader?: boolean;
}

export default function Books() {
  const [books, setBooks] = useState<Book[]>([]);
  const [selectedBookForReading, setSelectedBookForReading] = useState<Book | null>(null);

  const deleteBook = (id: string) => {
    setBooks(books.filter((book) => book.id !== id));
    if (selectedBookForReading?.id === id) {
      setSelectedBookForReading(null);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-1">
        <div className="container py-12">
          {/* Page Header */}
          <div className="mb-12 text-center">
            <h1 className="text-5xl font-bold text-amber-900 mb-4">الكتب</h1>
            <p className="text-xl text-gray-700">
              مؤلفات وكتب قيمة من فضيلة الدكتور شاكر العاروري
            </p>
          </div>

          {/* Books Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-12">
            {books.length === 0 ? (
              <div className="lg:col-span-4 text-center py-12">
                <BookOpen className="w-16 h-16 text-amber-300 mx-auto mb-4" />
                <p className="text-xl text-gray-600">لا توجد كتب حالياً</p>
                <p className="text-gray-500 mt-2">تابع الموقع للمزيد من الكتب</p>
              </div>
            ) : (
              books.map((book) => (
                <div
                  key={book.id}
                  className="bg-white border-2 border-amber-300 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                >
                  {/* Book Cover */}
                  <div className="bg-gradient-to-br from-amber-400 to-amber-600 h-48 flex items-center justify-center">
                    <BookOpen className="w-20 h-20 text-white opacity-50" />
                  </div>

                  {/* Book Info */}
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-amber-900 mb-2 line-clamp-2">
                      {book.title}
                    </h3>
                    {book.author && (
                      <p className="text-sm text-gray-600 mb-3">{book.author}</p>
                    )}
                    {book.category && (
                      <p className="text-xs bg-amber-100 text-amber-800 px-3 py-1 rounded-full inline-block mb-4">
                        {book.category}
                      </p>
                    )}
                    {book.description && (
                      <p className="text-sm text-gray-700 mb-4 line-clamp-3">
                        {book.description}
                      </p>
                    )}

                    {/* Actions */}
                    <div className="flex gap-2 flex-wrap">
                      {book.hasInternalReader && (
                        <Button
                          onClick={() => setSelectedBookForReading(book)}
                          size="sm"
                          className="gap-2 bg-amber-600 hover:bg-amber-700 text-white flex-1"
                        >
                          <BookOpen className="w-4 h-4" />
                          اقرأ
                        </Button>
                      )}
                      {book.url && (
                        <a href={book.url} target="_blank" rel="noopener noreferrer">
                          <Button
                            size="sm"
                            variant="outline"
                            className="gap-2 border-amber-300 text-amber-600 hover:bg-amber-50"
                          >
                            <ExternalLink className="w-4 h-4" />
                            تحميل
                          </Button>
                        </a>
                      )}
                      <Button
                        onClick={() => deleteBook(book.id)}
                        size="sm"
                        variant="ghost"
                        className="text-red-600 hover:bg-red-50"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Book Reader */}
          {selectedBookForReading && (
            <div className="bg-white border-2 border-amber-300 rounded-2xl overflow-hidden shadow-lg">
              <div className="bg-gradient-to-r from-amber-600 to-amber-700 p-6 flex justify-between items-center">
                <h2 className="text-2xl font-bold text-white">
                  {selectedBookForReading.title}
                </h2>
                <Button
                  onClick={() => setSelectedBookForReading(null)}
                  variant="ghost"
                  className="text-white hover:bg-amber-700"
                >
                  إغلاق
                </Button>
              </div>
              <div className="p-6">
                <BookReader 
                  bookId={selectedBookForReading.id}
                  bookTitle={selectedBookForReading.title}
                  onClose={() => setSelectedBookForReading(null)}
                />
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}

