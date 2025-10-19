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
    if (!newTitle.trim()) {
      alert("الرجاء إدخال عنوان الفتوى");
      return;
    }
    if (!newUrl.trim()) {
      alert("الرجاء إدخال رابط اليوتيوب");
      return;
    }
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
    alert("تمت إضافة الفتوى بنجاح!");
  };

  const deleteFatwa = (id: string) => {
    setFatwas(fatwas.filter((fatwa) => fatwa.id !== id));
    if (selectedFatwa?.id === id) {
      setSelectedFatwa(null);
    }
  };

  const categories = Array.from(new Set(fatwas.map((f) => f.category || "عام")));

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-1">
        <div className="container py-12">
          {/* Page Header */}
          <div className="mb-12 text-center">
            <h1 className="text-5xl font-bold text-teal-900 mb-4">الفتاوى</h1>
            <p className="text-xl text-gray-700">
              فتاوى شرعية وإجابات على أسئلة دينية متنوعة
            </p>
          </div>

          {/* Add Fatwa Form */}
          <div className="bg-gradient-to-br from-teal-50 to-teal-100 border-2 border-teal-300 rounded-2xl p-8 mb-12">
            <h2 className="text-2xl font-bold text-teal-900 mb-6">إضافة فتوى جديدة</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-teal-900 mb-2">عنوان الفتوى</label>
                <Input
                  placeholder="أدخل عنوان الفتوى"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && addFatwa()}
                  className="border-2 border-teal-300 focus:border-teal-500"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-teal-900 mb-2">رابط اليوتيوب</label>
                  <Input
                    placeholder="https://www.youtube.com/watch?v=..."
                    value={newUrl}
                    onChange={(e) => setNewUrl(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && addFatwa()}
                    className="border-2 border-teal-300 focus:border-teal-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-teal-900 mb-2">الفئة</label>
                  <Input
                    placeholder="مثال: العبادات، المعاملات"
                    value={newCategory}
                    onChange={(e) => setNewCategory(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && addFatwa()}
                    className="border-2 border-teal-300 focus:border-teal-500"
                  />
                </div>
              </div>
              <Button 
                onClick={addFatwa} 
                className="gap-2 bg-teal-600 hover:bg-teal-700 text-white font-semibold"
              >
                <Plus className="w-4 h-4" />
                إضافة فتوى
              </Button>
            </div>
          </div>

          {/* Fatwas Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Fatwas List */}
            <div className="lg:col-span-1">
              <div className="bg-white border-2 border-teal-300 rounded-2xl overflow-hidden shadow-lg">
                <div className="p-6 bg-gradient-to-r from-teal-600 to-teal-700 text-white">
                  <h3 className="font-bold text-xl">الفتاوى ({fatwas.length})</h3>
                </div>
                
                {fatwas.length === 0 ? (
                  <div className="p-6 text-center text-gray-500">
                    لا توجد فتاوى بعد. أضف فتوى جديدة!
                  </div>
                ) : (
                  <div className="divide-y divide-teal-200 max-h-96 overflow-y-auto">
                    {categories.map((category) => (
                      <div key={category}>
                        <div className="px-4 py-3 bg-teal-50 text-xs font-bold text-teal-700 sticky top-0">
                          {category}
                        </div>
                        {fatwas
                          .filter((f) => (f.category || "عام") === category)
                          .map((fatwa) => (
                            <div
                              key={fatwa.id}
                              className={`p-4 cursor-pointer transition-colors ${
                                selectedFatwa?.id === fatwa.id
                                  ? "bg-teal-100 border-l-4 border-teal-600"
                                  : "hover:bg-teal-50"
                              }`}
                            >
                              <div
                                onClick={() => setSelectedFatwa(fatwa)}
                                className="flex items-start gap-3 mb-2"
                              >
                                <Play className="w-4 h-4 text-teal-600 mt-1 flex-shrink-0" />
                                <div className="flex-1 min-w-0">
                                  <p className="font-semibold text-sm text-gray-900 line-clamp-2">{fatwa.title}</p>
                                </div>
                              </div>
                              <button
                                onClick={() => deleteFatwa(fatwa.id)}
                                className="text-xs text-red-600 hover:text-red-800 flex items-center gap-1"
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
                <div className="aspect-video bg-gradient-to-br from-teal-100 to-teal-50 border-2 border-teal-300 rounded-2xl flex items-center justify-center shadow-lg">
                  <div className="text-center">
                    <Play className="w-16 h-16 text-teal-300 mx-auto mb-4" />
                    <p className="text-teal-700 font-semibold">اختر فتوى لتشغيلها</p>
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

