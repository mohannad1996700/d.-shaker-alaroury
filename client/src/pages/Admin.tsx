import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Plus, Trash2, Edit2, Save, X } from "lucide-react";

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

export default function Admin() {
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

  // Load data from localStorage
  useEffect(() => {
    const savedLectures = localStorage.getItem("lectures");
    const savedFatwas = localStorage.getItem("fatwas");
    const savedBooks = localStorage.getItem("books");

    if (savedLectures) setLectures(JSON.parse(savedLectures));
    if (savedFatwas) setFatwas(JSON.parse(savedFatwas));
    if (savedBooks) setBooks(JSON.parse(savedBooks));
  }, []);

  // Save data to localStorage
  useEffect(() => {
    localStorage.setItem("lectures", JSON.stringify(lectures));
  }, [lectures]);

  useEffect(() => {
    localStorage.setItem("fatwas", JSON.stringify(fatwas));
  }, [fatwas]);

  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books));
  }, [books]);

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
    }
  };

  const updateLecture = (id: string, title: string, url: string) => {
    setLectures(
      lectures.map((l) =>
        l.id === id ? { ...l, title, youtubeUrl: url } : l
      )
    );
    setEditingLecture(null);
  };

  const deleteLecture = (id: string) => {
    setLectures(lectures.filter((l) => l.id !== id));
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
  };

  const deleteFatwa = (id: string) => {
    setFatwas(fatwas.filter((f) => f.id !== id));
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
  };

  const deleteBook = (id: string) => {
    setBooks(books.filter((b) => b.id !== id));
  };

  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">لوحة التحكم</h1>
          <p className="text-muted-foreground">
            إدارة محاضرات وفتاوى وكتب الدكتور شاكر العاروري
          </p>
        </div>

        <Tabs defaultValue="lectures" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="lectures">المحاضرات</TabsTrigger>
            <TabsTrigger value="fatwas">الفتاوى</TabsTrigger>
            <TabsTrigger value="books">الكتب</TabsTrigger>
          </TabsList>

          {/* Lectures Tab */}
          <TabsContent value="lectures" className="space-y-6">
            <div className="bg-card border border-border rounded-lg p-6">
              <h2 className="text-2xl font-semibold mb-4">إضافة محاضرة جديدة</h2>
              <div className="space-y-4">
                <Input
                  placeholder="عنوان المحاضرة"
                  value={newLectureTitle}
                  onChange={(e) => setNewLectureTitle(e.target.value)}
                />
                <Input
                  placeholder="رابط اليوتيوب"
                  value={newLectureUrl}
                  onChange={(e) => setNewLectureUrl(e.target.value)}
                />
                <Button onClick={addLecture} className="gap-2">
                  <Plus className="w-4 h-4" />
                  إضافة محاضرة
                </Button>
              </div>
            </div>

            <div className="space-y-4">
              {lectures.length === 0 ? (
                <p className="text-center text-muted-foreground py-8">
                  لا توجد محاضرات بعد
                </p>
              ) : (
                lectures.map((lecture) => (
                  <div
                    key={lecture.id}
                    className="bg-card border border-border rounded-lg p-4"
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
                        />
                        <Input
                          value={editingLecture.youtubeUrl}
                          onChange={(e) =>
                            setEditingLecture({
                              ...editingLecture,
                              youtubeUrl: e.target.value,
                            })
                          }
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
                            className="gap-2"
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
                          <h3 className="font-semibold">{lecture.title}</h3>
                          <p className="text-sm text-muted-foreground">
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
            <div className="bg-card border border-border rounded-lg p-6">
              <h2 className="text-2xl font-semibold mb-4">إضافة فتوى جديدة</h2>
              <div className="space-y-4">
                <Input
                  placeholder="عنوان الفتوى"
                  value={newFatwaTitle}
                  onChange={(e) => setNewFatwaTitle(e.target.value)}
                />
                <Input
                  placeholder="رابط اليوتيوب"
                  value={newFatwaUrl}
                  onChange={(e) => setNewFatwaUrl(e.target.value)}
                />
                <Input
                  placeholder="الفئة (مثال: العبادات)"
                  value={newFatwaCategory}
                  onChange={(e) => setNewFatwaCategory(e.target.value)}
                />
                <Button onClick={addFatwa} className="gap-2">
                  <Plus className="w-4 h-4" />
                  إضافة فتوى
                </Button>
              </div>
            </div>

            <div className="space-y-4">
              {fatwas.length === 0 ? (
                <p className="text-center text-muted-foreground py-8">
                  لا توجد فتاوى بعد
                </p>
              ) : (
                fatwas.map((fatwa) => (
                  <div
                    key={fatwa.id}
                    className="bg-card border border-border rounded-lg p-4"
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
                        />
                        <Input
                          value={editingFatwa.youtubeUrl}
                          onChange={(e) =>
                            setEditingFatwa({
                              ...editingFatwa,
                              youtubeUrl: e.target.value,
                            })
                          }
                        />
                        <Input
                          value={editingFatwa.category || ""}
                          onChange={(e) =>
                            setEditingFatwa({
                              ...editingFatwa,
                              category: e.target.value,
                            })
                          }
                        />
                        <div className="flex gap-2">
                          <Button
                            onClick={() =>
                              updateFatwa(
                                fatwa.id,
                                editingFatwa.title,
                                editingFatwa.youtubeUrl,
                                editingFatwa.category || ""
                              )
                            }
                            className="gap-2"
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
                          <h3 className="font-semibold">{fatwa.title}</h3>
                          <p className="text-sm text-muted-foreground">
                            {fatwa.category}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {fatwa.youtubeUrl}
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
            <div className="bg-card border border-border rounded-lg p-6">
              <h2 className="text-2xl font-semibold mb-4">إضافة كتاب جديد</h2>
              <div className="space-y-4">
                <Input
                  placeholder="عنوان الكتاب"
                  value={newBookTitle}
                  onChange={(e) => setNewBookTitle(e.target.value)}
                />
                <Input
                  placeholder="المؤلف"
                  value={newBookAuthor}
                  onChange={(e) => setNewBookAuthor(e.target.value)}
                />
                <textarea
                  placeholder="الوصف"
                  value={newBookDescription}
                  onChange={(e) => setNewBookDescription(e.target.value)}
                  className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background"
                  rows={3}
                />
                <Input
                  placeholder="الفئة"
                  value={newBookCategory}
                  onChange={(e) => setNewBookCategory(e.target.value)}
                />
                <Input
                  placeholder="رابط الكتاب (اختياري)"
                  value={newBookUrl}
                  onChange={(e) => setNewBookUrl(e.target.value)}
                />
                <Button onClick={addBook} className="gap-2">
                  <Plus className="w-4 h-4" />
                  إضافة كتاب
                </Button>
              </div>
            </div>

            <div className="space-y-4">
              {books.length === 0 ? (
                <p className="text-center text-muted-foreground py-8">
                  لا توجد كتب بعد
                </p>
              ) : (
                books.map((book) => (
                  <div
                    key={book.id}
                    className="bg-card border border-border rounded-lg p-4"
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
                        />
                        <Input
                          value={editingBook.author || ""}
                          onChange={(e) =>
                            setEditingBook({
                              ...editingBook,
                              author: e.target.value,
                            })
                          }
                        />
                        <textarea
                          value={editingBook.description || ""}
                          onChange={(e) =>
                            setEditingBook({
                              ...editingBook,
                              description: e.target.value,
                            })
                          }
                          className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background"
                          rows={3}
                        />
                        <Input
                          value={editingBook.category || ""}
                          onChange={(e) =>
                            setEditingBook({
                              ...editingBook,
                              category: e.target.value,
                            })
                          }
                        />
                        <Input
                          value={editingBook.url || ""}
                          onChange={(e) =>
                            setEditingBook({
                              ...editingBook,
                              url: e.target.value,
                            })
                          }
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
                                editingBook.category || ""
                              )
                            }
                            className="gap-2"
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
                          <h3 className="font-semibold">{book.title}</h3>
                          <p className="text-sm text-muted-foreground">
                            {book.author}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {book.category}
                          </p>
                          {book.description && (
                            <p className="text-sm text-muted-foreground line-clamp-2">
                              {book.description}
                            </p>
                          )}
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

