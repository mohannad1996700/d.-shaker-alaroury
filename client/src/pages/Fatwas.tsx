import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import YouTubePlayer from "@/components/YouTubePlayer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, Trash2, Play } from "lucide-react";

interface Fatwa {
  id: string;
  title: string;
  youtubeUrl: string;
  category?: string;
}

export default function Fatwas() {
  const [fatwas, setFatwas] = useState<Fatwa[]>([]);
  const [selectedFatwa, setSelectedFatwa] = useState<Fatwa | null>(null);
  const [newTitle, setNewTitle] = useState("");
  const [newUrl, setNewUrl] = useState("");
  const [newCategory, setNewCategory] = useState("");

  const addFatwa = () => {
    if (newTitle.trim() && newUrl.trim()) {
      const newFatwa: Fatwa = {
        id: Date.now().toString(),
        title: newTitle,
        youtubeUrl: newUrl,
        category: newCategory || "عام",
      };
      setFatwas([...fatwas, newFatwa]);
      setNewTitle("");
      setNewUrl("");
      setNewCategory("");
    }
  };

  const deleteFatwa = (id: string) => {
    setFatwas(fatwas.filter((fatwa) => fatwa.id !== id));
    if (selectedFatwa?.id === id) {
      setSelectedFatwa(null);
    }
  };

  const categories = Array.from(new Set(fatwas.map((f) => f.category || "عام")));

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        <div className="container py-12">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-2">الفتاوى</h1>
            <p className="text-muted-foreground">
              فتاوى شرعية وإجابات على أسئلة دينية متنوعة
            </p>
          </div>

          {/* Add Fatwa Form */}
          <div className="bg-card border border-border rounded-lg p-6 mb-8">
            <h2 className="text-xl font-semibold mb-4">إضافة فتوى جديدة</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">عنوان الفتوى</label>
                <Input
                  placeholder="أدخل عنوان الفتوى"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && addFatwa()}
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">رابط اليوتيوب</label>
                  <Input
                    placeholder="https://www.youtube.com/watch?v=... أو معرف الفيديو"
                    value={newUrl}
                    onChange={(e) => setNewUrl(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && addFatwa()}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">الفئة</label>
                  <Input
                    placeholder="مثال: العبادات، المعاملات"
                    value={newCategory}
                    onChange={(e) => setNewCategory(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && addFatwa()}
                  />
                </div>
              </div>
              <Button onClick={addFatwa} className="gap-2">
                <Plus className="w-4 h-4" />
                إضافة فتوى
              </Button>
            </div>
          </div>

          {/* Fatwas Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Fatwas List */}
            <div className="lg:col-span-1">
              <div className="bg-card border border-border rounded-lg overflow-hidden">
                <div className="p-4 border-b border-border bg-accent/5">
                  <h3 className="font-semibold">الفتاوى ({fatwas.length})</h3>
                </div>
                
                {fatwas.length === 0 ? (
                  <div className="p-4 text-center text-muted-foreground">
                    لا توجد فتاوى بعد. أضف فتوى جديدة!
                  </div>
                ) : (
                  <div className="divide-y divide-border max-h-96 overflow-y-auto">
                    {categories.map((category) => (
                      <div key={category}>
                        <div className="px-4 py-2 bg-accent/5 text-xs font-semibold text-muted-foreground sticky top-0">
                          {category}
                        </div>
                        {fatwas
                          .filter((f) => (f.category || "عام") === category)
                          .map((fatwa) => (
                            <div
                              key={fatwa.id}
                              className={`p-4 cursor-pointer transition-colors ${
                                selectedFatwa?.id === fatwa.id
                                  ? "bg-primary/10 border-l-4 border-primary"
                                  : "hover:bg-accent/5"
                              }`}
                            >
                              <div
                                onClick={() => setSelectedFatwa(fatwa)}
                                className="flex items-start gap-3 mb-2"
                              >
                                <Play className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                                <div className="flex-1 min-w-0">
                                  <p className="font-medium text-sm line-clamp-2">{fatwa.title}</p>
                                </div>
                              </div>
                              <button
                                onClick={() => deleteFatwa(fatwa.id)}
                                className="text-xs text-destructive hover:text-destructive/80 flex items-center gap-1"
                              >
                                <Trash2 className="w-3 h-3" />
                                حذف
                              </button>
                            </div>
                          ))}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Player */}
            <div className="lg:col-span-2">
              {selectedFatwa ? (
                <YouTubePlayer
                  videoId={selectedFatwa.youtubeUrl}
                  title={selectedFatwa.title}
                  onClose={() => setSelectedFatwa(null)}
                />
              ) : (
                <div className="aspect-video bg-card border border-border rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <Play className="w-16 h-16 text-muted-foreground/30 mx-auto mb-4" />
                    <p className="text-muted-foreground">اختر فتوى لتشغيلها</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

