import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import YouTubePlayer from "@/components/YouTubePlayer";
import { Button } from "@/components/ui/button";
import { Trash2, Scale } from "lucide-react";

interface Fatwa {
  id: string;
  title: string;
  youtubeUrl: string;
  category?: string;
}

export default function Fatwas() {
  const [fatwas, setFatwas] = useState<Fatwa[]>([]);
  const [selectedFatwa, setSelectedFatwa] = useState<Fatwa | null>(null);

  const deleteFatwa = (id: string) => {
    setFatwas(fatwas.filter((fatwa) => fatwa.id !== id));
    if (selectedFatwa?.id === id) {
      setSelectedFatwa(null);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-1">
        <div className="container py-12">
          {/* Page Header */}
          <div className="mb-12 text-center">
            <h1 className="text-5xl font-bold text-teal-900 mb-4">الفتاوى</h1>
            <p className="text-xl text-gray-700">
              فتاوى شرعية من فضيلة الدكتور شاكر العاروري
            </p>
          </div>

          {/* Fatwas Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Fatwas List */}
            <div className="lg:col-span-1">
              <div className="bg-white border-2 border-teal-300 rounded-2xl overflow-hidden shadow-lg">
                <div className="bg-gradient-to-r from-teal-600 to-teal-700 p-6">
                  <h2 className="text-2xl font-bold text-white">الفتاوى</h2>
                </div>
                <div className="divide-y divide-teal-200 max-h-96 overflow-y-auto">
                  {fatwas.length === 0 ? (
                    <div className="p-6 text-center text-gray-500">
                      <p>لا توجد فتاوى حالياً</p>
                      <p className="text-sm mt-2">تابع الموقع للمزيد من الفتاوى</p>
                    </div>
                  ) : (
                    fatwas.map((fatwa) => (
                      <div
                        key={fatwa.id}
                        onClick={() => setSelectedFatwa(fatwa)}
                        className={`p-4 cursor-pointer transition-colors ${
                          selectedFatwa?.id === fatwa.id
                            ? "bg-teal-100 border-l-4 border-teal-600"
                            : "hover:bg-teal-50"
                        }`}
                      >
                        <div className="flex items-start gap-3">
                          <Scale className="w-4 h-4 text-teal-600 mt-1 flex-shrink-0" />
                          <div className="flex-1 min-w-0">
                            <p className="font-semibold text-gray-800 line-clamp-2">
                              {fatwa.title}
                            </p>
                            {fatwa.category && (
                              <p className="text-xs text-gray-500 mt-1">{fatwa.category}</p>
                            )}
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
              {selectedFatwa ? (
                <div className="bg-white border-2 border-teal-300 rounded-2xl overflow-hidden shadow-lg">
                  <div className="bg-gradient-to-r from-teal-600 to-teal-700 p-6">
                    <h2 className="text-2xl font-bold text-white">{selectedFatwa.title}</h2>
                  </div>
                  <div className="p-6">
                    <YouTubePlayer videoId={selectedFatwa.youtubeUrl} title={selectedFatwa.title} />
                    <div className="mt-6 flex gap-2">
                      <Button
                        onClick={() => deleteFatwa(selectedFatwa.id)}
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
                <div className="bg-gradient-to-br from-teal-50 to-teal-100 border-2 border-teal-300 rounded-2xl p-12 text-center">
                  <Scale className="w-16 h-16 text-teal-300 mx-auto mb-4" />
                  <p className="text-xl text-gray-600">اختر فتوى لتشغيلها</p>
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

