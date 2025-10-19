import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Plus, Trash2, Edit2, Save, X, LogOut } from "lucide-react";

interface Lecture {
  id: string;
  title: string;
  youtubeUrl: string;
}

interface Fatwa {
  id: string;
  title: string;
  youtubeUrl: string;
  category?: string;
}

interface Book {
  id: string;
  title: string;
  author?: string;
  description?: string;
  url?: string;
  category?: string;
}

const ADMIN_PASSWORD = "Mohannad1996$";

export default function Admin() {
  const [, setLocation] = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");

  const [lectures, setLectures] = useState<Lecture[]>([]);
  const [fatwas, setFatwas] = useState<Fatwa[]>([]);
  const [books, setBooks] = useState<Book[]>([]);

  const [editingLecture, setEditingLecture] = useState<Lecture | null>(null);
  const [editingFatwa, setEditingFatwa] = useState<Fatwa | null>(null);
  const [editingBook, setEditingBook] = useState<Book | null>(null);

  const [newLectureTitle, setNewLectureTitle] = useState("");
  const [newLectureUrl, setNewLectureUrl] = useState("");

  const [newFatwaTitle, setNewFatwaTitle] = useState("");
  const [newFatwaUrl, setNewFatwaUrl] = useState("");
  const [newFatwaCategory, setNewFatwaCategory] = useState("");

  const [newBookTitle, setNewBookTitle] = useState("");
  const [newBookAuthor, setNewBookAuthor] = useState("");
  const [newBookDescription, setNewBookDescription] = useState("");
  const [newBookUrl, setNewBookUrl] = useState("");
  const [newBookCategory, setNewBookCategory] = useState("");

  // Check login status on mount
  useEffect(() => {
    const loggedIn = localStorage.getItem("adminLoggedIn");
    if (loggedIn) {
      setIsLoggedIn(true);
    }
  }, []);

  // Load data from localStorage
  useEffect(() => {
    if (!isLoggedIn) return;
    
    const savedLectures = localStorage.getItem("lectures");
    const savedFatwas = localStorage.getItem("fatwas");
    const savedBooks = localStorage.getItem("books");

    if (savedLectures) setLectures(JSON.parse(savedLectures));
    if (savedFatwas) setFatwas(JSON.parse(savedFatwas));
    if (savedBooks) setBooks(JSON.parse(savedBooks));
  }, [isLoggedIn]);

  // Save data to localStorage
  useEffect(() => {
    if (isLoggedIn) {
      localStorage.setItem("lectures", JSON.stringify(lectures));
    }
  }, [lectures, isLoggedIn]);

  useEffect(() => {
    if (isLoggedIn) {
      localStorage.setItem("fatwas", JSON.stringify(fatwas));
    }
  }, [fatwas, isLoggedIn]);

  useEffect(() => {
    if (isLoggedIn) {
      localStorage.setItem("books", JSON.stringify(books));
    }
  }, [books, isLoggedIn]);

  // Login handler
  const handleLogin = () => {
    if (password === ADMIN_PASSWORD) {
      localStorage.setItem("adminLoggedIn", "true");
      setIsLoggedIn(true);
      setPassword("");
      setLoginError("");
    } else {
      setLoginError("كلمة المرور غير صحيحة");
      setPassword("");
    }
  };

  // Logout handler
  const handleLogout = () => {
    localStorage.removeItem("adminLoggedIn");
    setIsLoggedIn(false);
    setPassword("");
  };

  // Lectures functions
  const addLecture = () => {
    if (newLectureTitle.trim() && newLectureUrl.trim()) {
      setLectures([
        ...lectures,
        {
          id: Date.now().toString(),
          title: newLectureTitle,
          youtubeUrl: newLectureUrl,
        },
      ]);
      setNewLectureTitle("");
      setNewLectureUrl("");
      alert("تمت إضافة المحاضرة بنجاح!");
    }
  };

  const updateLecture = (id: string, title: string, url: string) => {
    setLectures(
      lectures.map((l) =>
        l.id === id ? { ...l, title, youtubeUrl: url } : l
      )
    );
    setEditingLecture(null);
    alert("تم تحديث المحاضرة بنجاح!");
  };

  const deleteLecture = (id: string) => {
    setLectures(lectures.filter((l) => l.id !== id));
    alert("تم حذف المحاضرة بنجاح!");
  };

  // Fatwas functions
  const addFatwa = () => {
    if (newFatwaTitle.trim() && newFatwaUrl.trim()) {
      setFatwas([
        ...fatwas,
        {
          id: Date.now().toString(),
          title: newFatwaTitle,
          youtubeUrl: newFatwaUrl,
          category: newFatwaCategory || "عام",
        },
      ]);
      setNewFatwaTitle("");
      setNewFatwaUrl("");
      setNewFatwaCategory("");
      alert("تمت إضافة الفتوى بنجاح!");
    }
  };

  const updateFatwa = (
    id: string,
    title: string,
    url: string,
    category: string
  ) => {
    setFatwas(
      fatwas.map((f) =>
        f.id === id ? { ...f, title, youtubeUrl: url, category } : f
      )
    );
    setEditingFatwa(null);
    alert("تم تحديث الفتوى بنجاح!");
  };

  const deleteFatwa = (id: string) => {
    setFatwas(fatwas.filter((f) => f.id !== id));
    alert("تم حذف الفتوى بنجاح!");
  };

  // Books functions
  const addBook = () => {
    if (newBookTitle.trim()) {
      setBooks([
        ...books,
        {
          id: Date.now().toString(),
          title: newBookTitle,
          author: newBookAuthor || "الدكتور شاكر العاروري",
          description: newBookDescription,
          url: newBookUrl,
          category: newBookCategory || "عام",
        },
      ]);
      setNewBookTitle("");
      setNewBookAuthor("");
      setNewBookDescription("");
      setNewBookUrl("");
      setNewBookCategory("");
      alert("تمت إضافة الكتاب بنجاح!");
    }
  };

  const updateBook = (
    id: string,
    title: string,
    author: string,
    description: string,
    url: string,
    category: string
  ) => {
    setBooks(
      books.map((b) =>
        b.id === id
          ? { ...b, title, author, description, url, category }
          : b
      )
    );
    setEditingBook(null);
    alert("تم تحديث الكتاب بنجاح!");
  };

  const deleteBook = (id: string) => {
    setBooks(books.filter((b) => b.id !== id));
    alert("تم حذف الكتاب بنجاح!");
  };

  // Login Page
  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-900 to-blue-700 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md">
          <div className="flex justify-center mb-6">
            <div className="bg-blue-600 p-4 rounded-full">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
          </div>

          <h1 className="text-3xl font-bold text-center text-blue-900 mb-2">
            لوحة التحكم
          </h1>
          <p className="text-center text-gray-600 mb-8">
            أدخل كلمة المرور للوصول إلى لوحة التحكم
          </p>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                كلمة المرور
              </label>
              <Input
                type="password"
                placeholder="أدخل كلمة المرور"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setLoginError("");
                }}
                onKeyPress={(e) => e.key === "Enter" && handleLogin()}
                className="border-2 border-blue-300 focus:border-blue-500"
              />
            </div>

            {loginError && (
              <div className="bg-red-50 border-2 border-red-300 text-red-700 px-4 py-3 rounded-lg text-sm">
                {loginError}
              </div>
            )}

            <Button
              onClick={handleLogin}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3"
            >
              دخول
            </Button>
          </div>

          <div className="mt-6 pt-6 border-t border-gray-200">
            <p className="text-xs text-gray-500 text-center">
              تم تعيين كلمة المرور الخاصة بك
            </p>
          </div>
        </div>
      </div>
    );
  }

  // Admin Dashboard
  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold mb-2">لوحة التحكم</h1>
            <p className="text-gray-600">
              إدارة محاضرات وفتاوى وكتب الدكتور شاكر العاروري
            </p>
          </div>
          <Button
            onClick={handleLogout}
            variant="outline"
            className="gap-2 border-red-300 text-red-600 hover:bg-red-50"
          >
            <LogOut className="w-4 h-4" />
            تسجيل الخروج
          </Button>
        </div>

        <Tabs defaultValue="lectures" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="lectures">المحاضرات ({lectures.length})</TabsTrigger>
            <TabsTrigger value="fatwas">الفتاوى ({fatwas.length})</TabsTrigger>
            <TabsTrigger value="books">الكتب ({books.length})</TabsTrigger>
          </TabsList>

          {/* Lectures Tab */}
          <TabsContent value="lectures" className="space-y-6">
            <div className="bg-white border-2 border-blue-300 rounded-lg p-6">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900">إضافة محاضرة جديدة</h2>
              <div className="space-y-4">
                <Input
                  placeholder="عنوان المحاضرة"
                  value={newLectureTitle}
                  onChange={(e) => setNewLectureTitle(e.target.value)}
                  className="border-2 border-blue-300"
                />
                <Input
                  placeholder="رابط اليوتيوب"
                  value={newLectureUrl}
                  onChange={(e) => setNewLectureUrl(e.target.value)}
                  className="border-2 border-blue-300"
                />
                <Button onClick={addLecture} className="gap-2 bg-blue-600 hover:bg-blue-700">
                  <Plus className="w-4 h-4" />
                  إضافة محاضرة
                </Button>
              </div>
            </div>

            <div className="space-y-4">
              {lectures.length === 0 ? (
                <p className="text-center text-gray-500 py-8">
                  لا توجد محاضرات بعد
                </p>
              ) : (
                lectures.map((lecture) => (
                  <div
                    key={lecture.id}
                    className="bg-white border-2 border-blue-200 rounded-lg p-4"
                  >
                    {editingLecture?.id === lecture.id ? (
                      <div className="space-y-4">
                        <Input
                          value={editingLecture.title}
                          onChange={(e) =>
                            setEditingLecture({
                              ...editingLecture,
                              title: e.target.value,
                            })
                          }
                          className="border-2 border-blue-300"
                        />
                        <Input
                          value={editingLecture.youtubeUrl}
                          onChange={(e) =>
                            setEditingLecture({
                              ...editingLecture,
                              youtubeUrl: e.target.value,
                            })
                          }
                          className="border-2 border-blue-300"
                        />
                        <div className="flex gap-2">
                          <Button
                            onClick={() =>
                              updateLecture(
                                lecture.id,
                                editingLecture.title,
                                editingLecture.youtubeUrl
                              )
                            }
                            className="gap-2 bg-green-600 hover:bg-green-700"
                            size="sm"
                          >
                            <Save className="w-4 h-4" />
                            حفظ
                          </Button>
                          <Button
                            onClick={() => setEditingLecture(null)}
                            variant="outline"
                            size="sm"
                            className="gap-2"
                          >
                            <X className="w-4 h-4" />
                            إلغاء
                          </Button>
                        </div>
                      </div>
                    ) : (
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="font-semibold text-blue-900">{lecture.title}</h3>
                          <p className="text-sm text-gray-600">
                            {lecture.youtubeUrl}
                          </p>
                        </div>
                        <div className="flex gap-2">
                          <Button
                            onClick={() => setEditingLecture(lecture)}
                            variant="outline"
                            size="sm"
                            className="gap-2"
                          >
                            <Edit2 className="w-4 h-4" />
                          </Button>
                          <Button
                            onClick={() => deleteLecture(lecture.id)}
                            variant="destructive"
                            size="sm"
                            className="gap-2"
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    )}
                  </div>
                ))
              )}
            </div>
          </TabsContent>

          {/* Fatwas Tab */}
          <TabsContent value="fatwas" className="space-y-6">
            <div className="bg-white border-2 border-teal-300 rounded-lg p-6">
              <h2 className="text-2xl font-semibold mb-4 text-teal-900">إضافة فتوى جديدة</h2>
              <div className="space-y-4">
                <Input
                  placeholder="عنوان الفتوى"
                  value={newFatwaTitle}
                  onChange={(e) => setNewFatwaTitle(e.target.value)}
                  className="border-2 border-teal-300"
                />
                <Input
                  placeholder="رابط اليوتيوب"
                  value={newFatwaUrl}
                  onChange={(e) => setNewFatwaUrl(e.target.value)}
                  className="border-2 border-teal-300"
                />
                <Input
                  placeholder="الفئة (مثال: العبادات)"
                  value={newFatwaCategory}
                  onChange={(e) => setNewFatwaCategory(e.target.value)}
                  className="border-2 border-teal-300"
                />
                <Button onClick={addFatwa} className="gap-2 bg-teal-600 hover:bg-teal-700">
                  <Plus className="w-4 h-4" />
                  إضافة فتوى
                </Button>
              </div>
            </div>

            <div className="space-y-4">
              {fatwas.length === 0 ? (
                <p className="text-center text-gray-500 py-8">
                  لا توجد فتاوى بعد
                </p>
              ) : (
                fatwas.map((fatwa) => (
                  <div
                    key={fatwa.id}
                    className="bg-white border-2 border-teal-200 rounded-lg p-4"
                  >
                    {editingFatwa?.id === fatwa.id ? (
                      <div className="space-y-4">
                        <Input
                          value={editingFatwa.title}
                          onChange={(e) =>
                            setEditingFatwa({
                              ...editingFatwa,
                              title: e.target.value,
                            })
                          }
                          className="border-2 border-teal-300"
                        />
                        <Input
                          value={editingFatwa.youtubeUrl}
                          onChange={(e) =>
                            setEditingFatwa({
                              ...editingFatwa,
                              youtubeUrl: e.target.value,
                            })
                          }
                          className="border-2 border-teal-300"
                        />
                        <Input
                          value={editingFatwa.category || ""}
                          onChange={(e) =>
                            setEditingFatwa({
                              ...editingFatwa,
                              category: e.target.value,
                            })
                          }
                          className="border-2 border-teal-300"
                        />
                        <div className="flex gap-2">
                          <Button
                            onClick={() =>
                              updateFatwa(
                                fatwa.id,
                                editingFatwa.title,
                                editingFatwa.youtubeUrl,
                                editingFatwa.category || "عام"
                              )
                            }
                            className="gap-2 bg-green-600 hover:bg-green-700"
                            size="sm"
                          >
                            <Save className="w-4 h-4" />
                            حفظ
                          </Button>
                          <Button
                            onClick={() => setEditingFatwa(null)}
                            variant="outline"
                            size="sm"
                            className="gap-2"
                          >
                            <X className="w-4 h-4" />
                            إلغاء
                          </Button>
                        </div>
                      </div>
                    ) : (
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="font-semibold text-teal-900">{fatwa.title}</h3>
                          <p className="text-sm text-gray-600">
                            {fatwa.youtubeUrl}
                          </p>
                          <p className="text-xs text-gray-500 mt-1">
                            الفئة: {fatwa.category || "عام"}
                          </p>
                        </div>
                        <div className="flex gap-2">
                          <Button
                            onClick={() => setEditingFatwa(fatwa)}
                            variant="outline"
                            size="sm"
                            className="gap-2"
                          >
                            <Edit2 className="w-4 h-4" />
                          </Button>
                          <Button
                            onClick={() => deleteFatwa(fatwa.id)}
                            variant="destructive"
                            size="sm"
                            className="gap-2"
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    )}
                  </div>
                ))
              )}
            </div>
          </TabsContent>

          {/* Books Tab */}
          <TabsContent value="books" className="space-y-6">
            <div className="bg-white border-2 border-amber-300 rounded-lg p-6">
              <h2 className="text-2xl font-semibold mb-4 text-amber-900">إضافة كتاب جديد</h2>
              <div className="space-y-4">
                <Input
                  placeholder="عنوان الكتاب"
                  value={newBookTitle}
                  onChange={(e) => setNewBookTitle(e.target.value)}
                  className="border-2 border-amber-300"
                />
                <Input
                  placeholder="المؤلف"
                  value={newBookAuthor}
                  onChange={(e) => setNewBookAuthor(e.target.value)}
                  className="border-2 border-amber-300"
                />
                <Input
                  placeholder="الفئة"
                  value={newBookCategory}
                  onChange={(e) => setNewBookCategory(e.target.value)}
                  className="border-2 border-amber-300"
                />
                <textarea
                  placeholder="الوصف"
                  value={newBookDescription}
                  onChange={(e) => setNewBookDescription(e.target.value)}
                  className="w-full px-3 py-2 border-2 border-amber-300 rounded-lg"
                  rows={3}
                />
                <Input
                  placeholder="رابط التحميل (اختياري)"
                  value={newBookUrl}
                  onChange={(e) => setNewBookUrl(e.target.value)}
                  className="border-2 border-amber-300"
                />
                <Button onClick={addBook} className="gap-2 bg-amber-600 hover:bg-amber-700">
                  <Plus className="w-4 h-4" />
                  إضافة كتاب
                </Button>
              </div>
            </div>

            <div className="space-y-4">
              {books.length === 0 ? (
                <p className="text-center text-gray-500 py-8">
                  لا توجد كتب بعد
                </p>
              ) : (
                books.map((book) => (
                  <div
                    key={book.id}
                    className="bg-white border-2 border-amber-200 rounded-lg p-4"
                  >
                    {editingBook?.id === book.id ? (
                      <div className="space-y-4">
                        <Input
                          value={editingBook.title}
                          onChange={(e) =>
                            setEditingBook({
                              ...editingBook,
                              title: e.target.value,
                            })
                          }
                          className="border-2 border-amber-300"
                        />
                        <Input
                          value={editingBook.author || ""}
                          onChange={(e) =>
                            setEditingBook({
                              ...editingBook,
                              author: e.target.value,
                            })
                          }
                          className="border-2 border-amber-300"
                        />
                        <Input
                          value={editingBook.category || ""}
                          onChange={(e) =>
                            setEditingBook({
                              ...editingBook,
                              category: e.target.value,
                            })
                          }
                          className="border-2 border-amber-300"
                        />
                        <textarea
                          value={editingBook.description || ""}
                          onChange={(e) =>
                            setEditingBook({
                              ...editingBook,
                              description: e.target.value,
                            })
                          }
                          className="w-full px-3 py-2 border-2 border-amber-300 rounded-lg"
                          rows={3}
                        />
                        <Input
                          value={editingBook.url || ""}
                          onChange={(e) =>
                            setEditingBook({
                              ...editingBook,
                              url: e.target.value,
                            })
                          }
                          className="border-2 border-amber-300"
                        />
                        <div className="flex gap-2">
                          <Button
                            onClick={() =>
                              updateBook(
                                book.id,
                                editingBook.title,
                                editingBook.author || "",
                                editingBook.description || "",
                                editingBook.url || "",
                                editingBook.category || "عام"
                              )
                            }
                            className="gap-2 bg-green-600 hover:bg-green-700"
                            size="sm"
                          >
                            <Save className="w-4 h-4" />
                            حفظ
                          </Button>
                          <Button
                            onClick={() => setEditingBook(null)}
                            variant="outline"
                            size="sm"
                            className="gap-2"
                          >
                            <X className="w-4 h-4" />
                            إلغاء
                          </Button>
                        </div>
                      </div>
                    ) : (
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="font-semibold text-amber-900">{book.title}</h3>
                          <p className="text-sm text-gray-600">
                            {book.author}
                          </p>
                          <p className="text-xs text-gray-500 mt-1">
                            الفئة: {book.category || "عام"}
                          </p>
                        </div>
                        <div className="flex gap-2">
                          <Button
                            onClick={() => setEditingBook(book)}
                            variant="outline"
                            size="sm"
                            className="gap-2"
                          >
                            <Edit2 className="w-4 h-4" />
                          </Button>
                          <Button
                            onClick={() => deleteBook(book.id)}
                            variant="destructive"
                            size="sm"
                            className="gap-2"
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    )}
                  </div>
                ))
              )}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

