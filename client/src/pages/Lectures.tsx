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
    if (newTitle.trim() && newUrl.trim()) {
      const newLecture: Lecture = {
        id: Date.now().toString(),
        title: newTitle,
        youtubeUrl: newUrl,
      };
      setLectures([...lectures, newLecture]);
      setNewTitle("");
      setNewUrl("");
    }
  };

  const deleteLecture = (id: string) => {
    setLectures(lectures.filter((lecture) => lecture.id !== id));
    if (selectedLecture?.id === id) {
      setSelectedLecture(null);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        <div className="container py-12">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-2">المحاضرات</h1>
            <p className="text-muted-foreground">
              استمع إلى محاضرات فضيلة الدكتور شاكر العاروري القيمة
            </p>
          </div>

          {/* Add Lecture Form */}
          <div className="bg-card border border-border rounded-lg p-6 mb-8">
            <h2 className="text-xl font-semibold mb-4">إضافة محاضرة جديدة</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">عنوان المحاضرة</label>
                <Input
                  placeholder="أدخل عنوان المحاضرة"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && addLecture()}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">رابط اليوتيوب</label>
                <Input
                  placeholder="https://www.youtube.com/watch?v=... أو معرف الفيديو"
                  value={newUrl}
                  onChange={(e) => setNewUrl(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && addLecture()}
                />
              </div>
              <Button onClick={addLecture} className="gap-2">
                <Plus className="w-4 h-4" />
                إضافة محاضرة
              </Button>
            </div>
          </div>

          {/* Lectures Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Lectures List */}
            <div className="lg:col-span-1">
              <div className="bg-card border border-border rounded-lg overflow-hidden">
                <div className="p-4 border-b border-border bg-accent/5">
                  <h3 className="font-semibold">المحاضرات ({lectures.length})</h3>
                </div>
                <div className="divide-y divide-border max-h-96 overflow-y-auto">
                  {lectures.length === 0 ? (
                    <div className="p-4 text-center text-muted-foreground">
                      لا توجد محاضرات بعد. أضف محاضرة جديدة!
                    </div>
                  ) : (
                    lectures.map((lecture) => (
                      <div
                        key={lecture.id}
                        className={`p-4 cursor-pointer transition-colors ${
                          selectedLecture?.id === lecture.id
                            ? "bg-primary/10 border-l-4 border-primary"
                            : "hover:bg-accent/5"
                        }`}
                      >
                        <div
                          onClick={() => setSelectedLecture(lecture)}
                          className="flex items-start gap-3 mb-2"
                        >
                          <Play className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                          <div className="flex-1 min-w-0">
                            <p className="font-medium text-sm line-clamp-2">{lecture.title}</p>
                          </div>
                        </div>
                        <button
                          onClick={() => deleteLecture(lecture.id)}
                          className="text-xs text-destructive hover:text-destructive/80 flex items-center gap-1"
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
                <div className="aspect-video bg-card border border-border rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <Play className="w-16 h-16 text-muted-foreground/30 mx-auto mb-4" />
                    <p className="text-muted-foreground">اختر محاضرة لتشغيلها</p>
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

