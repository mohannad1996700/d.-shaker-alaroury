import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BookReader from "@/components/BookReader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, Trash2, BookOpen, ExternalLink, Eye } from "lucide-react";

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
  const [newTitle, setNewTitle] = useState("");
  const [newAuthor, setNewAuthor] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [newUrl, setNewUrl] = useState("");
  const [newCategory, setNewCategory] = useState("");
  const [selectedBookForReading, setSelectedBookForReading] = useState<Book | null>(null);

  const addBook = () => {
    if (newTitle.trim()) {
      const newBook: Book = {
        id: Date.now().toString(),
        title: newTitle,
        author: newAuthor || "الدكتور شاكر العاروري",
        description: newDescription,
        url: newUrl,
        category: newCategory || "عام",
        hasInternalReader: true,
      };
      setBooks([...books, newBook]);
      setNewTitle("");
      setNewAuthor("");
      setNewDescription("");
      setNewUrl("");
      setNewCategory("");
    }
  };

  const deleteBook = (id: string) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  const categories = Array.from(new Set(books.map((b) => b.category || "عام")));

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-1">
        <div className="container py-12">
          {/* Page Header */}
          <div className="mb-12 text-center">
            <h1 className="text-5xl font-bold text-amber-900 mb-4">الكتب</h1>
            <p className="text-xl text-gray-700">
              مؤلفات وكتب علمية في مختلف المجالات الشرعية
            </p>
          </div>

          {/* Add Book Form */}
          <div className="bg-gradient-to-br from-amber-50 to-amber-100 border-2 border-amber-300 rounded-2xl p-8 mb-12">
            <h2 className="text-2xl font-bold text-amber-900 mb-6">إضافة كتاب جديد</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-amber-900 mb-2">عنوان الكتاب</label>
                <Input
                  placeholder="أدخل عنوان الكتاب"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  className="border-2 border-amber-300 focus:border-amber-500"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-amber-900 mb-2">المؤلف</label>
                  <Input
                    placeholder="الدكتور شاكر العاروري"
                    value={newAuthor}
                    onChange={(e) => setNewAuthor(e.target.value)}
                    className="border-2 border-amber-300 focus:border-amber-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-amber-900 mb-2">الفئة</label>
                  <Input
                    placeholder="مثال: الحديث، الفقه"
                    value={newCategory}
                    onChange={(e) => setNewCategory(e.target.value)}
                    className="border-2 border-amber-300 focus:border-amber-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-amber-900 mb-2">الوصف</label>
                <textarea
                  placeholder="وصف الكتاب"
                  value={newDescription}
                  onChange={(e) => setNewDescription(e.target.value)}
                  className="w-full px-3 py-2 border-2 border-amber-300 rounded-lg bg-white text-gray-900 placeholder:text-gray-500 focus:outline-none focus:border-amber-500"
                  rows={3}
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-amber-900 mb-2">رابط الكتاب (اختياري)</label>
                <Input
                  placeholder="https://example.com/book"
                  value={newUrl}
                  onChange={(e) => setNewUrl(e.target.value)}
                  className="border-2 border-amber-300 focus:border-amber-500"
                />
              </div>

              <Button 
                onClick={addBook} 
                className="gap-2 bg-amber-600 hover:bg-amber-700 text-white font-semibold"
              >
                <Plus className="w-4 h-4" />
                إضافة كتاب
              </Button>
            </div>
          </div>

          {/* Books Display */}
          {books.length === 0 ? (
            <div className="text-center py-12">
              <BookOpen className="w-16 h-16 text-amber-300 mx-auto mb-4" />
              <p className="text-gray-500 text-lg">لا توجد كتب بعد. أضف كتاب جديد!</p>
            </div>
          ) : (
            <div className="space-y-12">
              {categories.map((category) => (
                <div key={category}>
                  <h3 className="text-3xl font-bold text-amber-900 mb-6 pb-3 border-b-4 border-amber-300">
                    {category}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {books
                      .filter((b) => (b.category || "عام") === category)
                      .map((book) => (
                        <div
                          key={book.id}
                          className="bg-white border-2 border-amber-200 rounded-2xl p-6 hover:shadow-xl transition-shadow flex flex-col"
                        >
                          <div className="flex items-start justify-between mb-4">
                            <div className="flex items-start gap-3 flex-1">
                              <BookOpen className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                              <div className="flex-1 min-w-0">
                                <h4 className="font-bold text-lg text-gray-900 line-clamp-2 mb-1">
                                  {book.title}
                                </h4>
                                {book.author && (
                                  <p className="text-sm text-gray-600">{book.author}</p>
                                )}
                              </div>
                            </div>
                            <button
                              onClick={() => deleteBook(book.id)}
                              className="text-red-600 hover:text-red-800 transition-colors flex-shrink-0"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>

                          {book.description && (
                            <p className="text-sm text-gray-600 mb-4 line-clamp-3 flex-1">
                              {book.description}
                            </p>
                          )}

                          <div className="flex gap-2 mt-auto">
                            {book.hasInternalReader && (
                              <Button
                                onClick={() => setSelectedBookForReading(book)}
                                className="gap-2 flex-1 bg-amber-600 hover:bg-amber-700 text-white font-semibold"
                                size="sm"
                              >
                                <Eye className="w-4 h-4" />
                                اقرأ الآن
                              </Button>
                            )}
                            {book.url && (
                              <a
                                href={book.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1"
                              >
                                <Button
                                  variant="outline"
                                  size="sm"
                                  className="gap-2 w-full border-2 border-amber-300 text-amber-700 hover:bg-amber-50"
                                >
                                  <ExternalLink className="w-4 h-4" />
                                  تحميل
                                </Button>
                              </a>
                            )}
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>

      {/* Book Reader Modal */}
      {selectedBookForReading && (
        <BookReader
          bookId={selectedBookForReading.id}
          bookTitle={selectedBookForReading.title}
          onClose={() => setSelectedBookForReading(null)}
        />
      )}

      <Footer />
    </div>
  );
}

