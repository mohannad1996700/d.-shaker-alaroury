import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import YouTubePlayer from "@/components/YouTubePlayer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, Trash2, Play } from "lucide-react";

interface Lecture {
  id: string;
  title: string;
  youtubeUrl: string;
}

export default function Lectures() {
  const [lectures, setLectures] = useState<Lecture[]>([]);
  const [selectedLecture, setSelectedLecture] = useState<Lecture | null>(null);
  const [newTitle, setNewTitle] = useState("");
  const [newUrl, setNewUrl] = useState("");

  const addLecture = () => {
    if (!newTitle.trim()) {
      alert("الرجاء إدخال عنوان المحاضرة");
      return;
    }
    if (!newUrl.trim()) {
      alert("الرجاء إدخال رابط اليوتيوب");
      return;
    }
    const newLecture: Lecture = {
      id: Date.now().toString(),
      title: newTitle,
      youtubeUrl: newUrl,
    };
    setLectures([...lectures, newLecture]);
    setNewTitle("");
    setNewUrl("");
    alert("تمت إضافة المحاضرة بنجاح!");
  };

  const deleteLecture = (id: string) => {
    setLectures(lectures.filter((lecture) => lecture.id !== id));
    if (selectedLecture?.id === id) {
      setSelectedLecture(null);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-1">
        <div className="container py-12">
          {/* Page Header */}
          <div className="mb-12 text-center">
            <h1 className="text-5xl font-bold text-blue-900 mb-4">المحاضرات</h1>
            <p className="text-xl text-gray-700">
              استمع إلى محاضرات فضيلة الدكتور شاكر العاروري القيمة
            </p>
          </div>

          {/* Add Lecture Form */}
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-300 rounded-2xl p-8 mb-12">
            <h2 className="text-2xl font-bold text-blue-900 mb-6">إضافة محاضرة جديدة</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-blue-900 mb-2">عنوان المحاضرة</label>
                <Input
                  placeholder="أدخل عنوان المحاضرة"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && addLecture()}
                  className="border-2 border-blue-300 focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-blue-900 mb-2">رابط اليوتيوب</label>
                <Input
                  placeholder="https://www.youtube.com/watch?v=... أو معرف الفيديو"
                  value={newUrl}
                  onChange={(e) => setNewUrl(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && addLecture()}
                  className="border-2 border-blue-300 focus:border-blue-500"
                />
              </div>
              <Button 
                onClick={addLecture} 
                className="gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold"
              >
                <Plus className="w-4 h-4" />
                إضافة محاضرة
              </Button>
            </div>
          </div>

          {/* Lectures Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Lectures List */}
            <div className="lg:col-span-1">
              <div className="bg-white border-2 border-blue-300 rounded-2xl overflow-hidden shadow-lg">
                <div className="p-6 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
                  <h3 className="font-bold text-xl">المحاضرات ({lectures.length})</h3>
                </div>
                <div className="divide-y divide-blue-200 max-h-96 overflow-y-auto">
                  {lectures.length === 0 ? (
                    <div className="p-6 text-center text-gray-500">
                      لا توجد محاضرات بعد. أضف محاضرة جديدة!
                    </div>
                  ) : (
                    lectures.map((lecture) => (
                      <div
                        key={lecture.id}
                        className={`p-4 cursor-pointer transition-colors ${
                          selectedLecture?.id === lecture.id
                            ? "bg-blue-100 border-l-4 border-blue-600"
                            : "hover:bg-blue-50"
                        }`}
                      >
                        <div
                          onClick={() => setSelectedLecture(lecture)}
                          className="flex items-start gap-3 mb-2"
                        >
                          <Play className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
                          <div className="flex-1 min-w-0">
                            <p className="font-semibold text-sm text-gray-900 line-clamp-2">{lecture.title}</p>
                          </div>
                        </div>
                        <button
                          onClick={() => deleteLecture(lecture.id)}
                          className="text-xs text-red-600 hover:text-red-800 flex items-center gap-1"
                        >
                          <Trash2 className="w-3 h-3" />
                          حذف
                        </button>
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>

            {/* Player */}
            <div className="lg:col-span-2">
              {selectedLecture ? (
                <YouTubePlayer
                  videoId={selectedLecture.youtubeUrl}
                  title={selectedLecture.title}
                  onClose={() => setSelectedLecture(null)}
                />
              ) : (
                <div className="aspect-video bg-gradient-to-br from-blue-100 to-blue-50 border-2 border-blue-300 rounded-2xl flex items-center justify-center shadow-lg">
                  <div className="text-center">
                    <Play className="w-16 h-16 text-blue-300 mx-auto mb-4" />
                    <p className="text-blue-700 font-semibold">اختر محاضرة لتشغيلها</p>
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

