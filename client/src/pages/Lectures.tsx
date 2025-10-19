import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import YouTubePlayer from "@/components/YouTubePlayer";
import { Button } from "@/components/ui/button";
import { Trash2, Play } from "lucide-react";

interface Lecture {
  id: string;
  title: string;
  youtubeUrl: string;
}

export default function Lectures() {
  const [lectures, setLectures] = useState<Lecture[]>([]);
  const [selectedLecture, setSelectedLecture] = useState<Lecture | null>(null);

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

          {/* Lectures Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Lectures List */}
            <div className="lg:col-span-1">
              <div className="bg-white border-2 border-blue-300 rounded-2xl overflow-hidden shadow-lg">
                <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6">
                  <h2 className="text-2xl font-bold text-white">المحاضرات</h2>
                </div>
                <div className="divide-y divide-blue-200 max-h-96 overflow-y-auto">
                  {lectures.length === 0 ? (
                    <div className="p-6 text-center text-gray-500">
                      <p>لا توجد محاضرات حالياً</p>
                      <p className="text-sm mt-2">تابع الموقع للمزيد من المحاضرات</p>
                    </div>
                  ) : (
                    lectures.map((lecture) => (
                      <div
                        key={lecture.id}
                        onClick={() => setSelectedLecture(lecture)}
                        className={`p-4 cursor-pointer transition-colors ${
                          selectedLecture?.id === lecture.id
                            ? "bg-blue-100 border-l-4 border-blue-600"
                            : "hover:bg-blue-50"
                        }`}
                      >
                        <div className="flex items-start gap-3">
                          <Play className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
                          <div className="flex-1 min-w-0">
                            <p className="font-semibold text-gray-800 line-clamp-2">
                              {lecture.title}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>

            {/* Player */}
            <div className="lg:col-span-2">
              {selectedLecture ? (
                <div className="bg-white border-2 border-blue-300 rounded-2xl overflow-hidden shadow-lg">
                  <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6">
                    <h2 className="text-2xl font-bold text-white">{selectedLecture.title}</h2>
                  </div>
                  <div className="p-6">
                    <YouTubePlayer videoId={selectedLecture.youtubeUrl} title={selectedLecture.title} />
                    <div className="mt-6 flex gap-2">
                      <Button
                        onClick={() => deleteLecture(selectedLecture.id)}
                        variant="destructive"
                        className="gap-2"
                      >
                        <Trash2 className="w-4 h-4" />
                        حذف
                      </Button>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-300 rounded-2xl p-12 text-center">
                  <Play className="w-16 h-16 text-blue-300 mx-auto mb-4" />
                  <p className="text-xl text-gray-600">اختر محاضرة لتشغيلها</p>
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

