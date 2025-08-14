import React from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Users, MessageCircle, Shield, Calendar, Bot, MapPin, Clock } from "lucide-react";

export const LandingPage = (): JSX.Element => {
  const features = [
    {
      icon: <Users className="w-8 h-8 text-temucita-primary" />,
      title: "Ruang Aman Offline",
      description: "Terhubung dengan sesama dalam lokasi fisik yang aman dan terpilih, dirancang khusus untuk penyembuhan dan pertumbuhan."
    },
    {
      icon: <Bot className="w-8 h-8 text-temucita-secondary" />,
      title: "Psikolog Virtual AI",
      description: "Akses 24/7 ke chatbot AI yang empatik, dilatih dengan teknik terapi berbasis bukti ilmiah."
    },
    {
      icon: <Shield className="w-8 h-8 text-temucita-primary" />,
      title: "Privasi Terjamin",
      description: "Perjalanan kesehatan mental Anda sepenuhnya privat. Kami menggunakan enkripsi end-to-end dan tidak pernah membagikan data Anda."
    }
  ];

  const testimonials = [
    {
      quote: "Menemukan ruang aman untuk berbagi perjuangan saya mengubah segalanya. Komunitas di sini benar-benar memahami.",
      name: "Sarah M.",
      role: "Anggota Komunitas",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
    },
    {
      quote: "Chatbot AI seperti memiliki terapis yang tersedia kapan pun saya butuh dukungan. Ini mengubah hidup saya.",
      name: "David K.",
      role: "Pengguna Aplikasi",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    {
      quote: "Awalnya saya ragu dengan pertemuan kelompok, tapi lingkungan yang aman membuat perbedaan besar dalam penyembuhan saya.",
      name: "Maria L.",
      role: "Anggota Support Group",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    }
  ];

  const stats = [
    { number: "10K+", label: "Jiwa Tersentuh" },
    { number: "50+", label: "Lokasi Aman" },
    { number: "24/7", label: "Dukungan AI" },
    { number: "98%", label: "Tingkat Kepuasan" }
  ];

  return (
    <main className="bg-gradient-to-b from-temucita-cream to-white min-h-screen">
      {/* Navigation */}
      <nav className="bg-white/90 backdrop-blur-md border-b border-temucita-cream sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img 
                src="https://c.animaapp.com/me9ikgocpkiBve/img/image.png" 
                alt="Temucita Logo" 
                className="w-12 h-12"
              />
              <div>
                <span className="text-2xl font-bold text-temucita-text-dark">Temucita</span>
                <p className="text-xs text-temucita-text-medium -mt-1">SEBUAH RUANG UNTUK ASA DAN CITA</p>
              </div>
            </div>
            
            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-temucita-text-dark hover:text-temucita-primary transition-colors font-medium">Fitur</a>
              <a href="#community" className="text-temucita-text-dark hover:text-temucita-primary transition-colors font-medium">Komunitas</a>
              <a href="#support" className="text-temucita-text-dark hover:text-temucita-primary transition-colors font-medium">Dukungan</a>
              <Button className="bg-temucita-primary hover:bg-temucita-primary-hover text-white px-6 py-2 rounded-full font-medium">
                Mulai Sekarang
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-display-lg md:text-display-xl font-bold text-temucita-text-dark mb-6 leading-tight">
            Perjalanan Kesehatan Mental
            <span className="text-temucita-primary block">Dimulai dari Sini</span>
          </h1>
          
          <p className="text-body-lg text-temucita-text-medium mb-8 leading-relaxed max-w-3xl mx-auto">
            Terhubung dengan sesama di ruang aman offline dan dapatkan dukungan 24/7 dari psikolog virtual AI kami. 
            Karena penyembuhan terjadi dengan lebih baik ketika Anda tidak sendirian.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button className="bg-temucita-primary hover:bg-temucita-primary-hover text-white px-8 py-4 text-lg rounded-full font-medium shadow-medium">
              <Users className="w-5 h-5 mr-2" />
              Temukan Ruang Aman
            </Button>
            <Button variant="outline" className="border-temucita-primary text-temucita-primary hover:bg-temucita-cream px-8 py-4 text-lg rounded-full font-medium">
              <MessageCircle className="w-5 h-5 mr-2" />
              Chat dengan AI
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-display-sm font-bold text-temucita-primary mb-2">{stat.number}</div>
                <div className="text-body-md text-temucita-text-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-display-md font-bold text-temucita-text-dark mb-4">
              Dua Cara Menemukan Dukungan
            </h2>
            <p className="text-body-lg text-temucita-text-medium max-w-3xl mx-auto">
              Baik Anda lebih suka koneksi tatap muka atau dukungan digital, kami hadir untuk Anda di setiap langkah perjalanan.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-0 shadow-medium hover:shadow-strong transition-shadow duration-300 bg-temucita-off-white">
                <CardContent className="p-8 text-center">
                  <div className="mb-6 flex justify-center">
                    {feature.icon}
                  </div>
                  <h3 className="text-heading-lg font-semibold text-temucita-text-dark mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-body-md text-temucita-text-medium leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Offline Spaces Section */}
      <section className="bg-gradient-to-r from-temucita-primary to-temucita-secondary py-20 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-display-md font-bold mb-6">
                Ruang Aman Offline
              </h2>
              <p className="text-body-lg mb-8 opacity-90">
                Bertemu dengan sesama yang memahami perjalanan Anda di lokasi yang dipilih dengan hati-hati dan aman. 
                Ruang kami dirancang untuk memupuk koneksi sejati dan penyembuhan.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5" />
                  <span className="text-body-md">Lokasi di 50+ kota di seluruh Indonesia</span>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5" />
                  <span className="text-body-md">Sesi yang dimoderasi secara profesional</span>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5" />
                  <span className="text-body-md">Opsi penjadwalan yang fleksibel</span>
                </div>
              </div>
              
              <Button className="bg-white text-temucita-primary hover:bg-gray-100 px-8 py-3 rounded-full font-medium shadow-medium">
                Temukan Lokasi Terdekat
              </Button>
            </div>
            
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=400&fit=crop" 
                  alt="Pertemuan ruang aman" 
                  className="rounded-xl w-full h-64 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Chatbot Section */}
      <section className="bg-temucita-cream py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="bg-white rounded-2xl p-8 shadow-medium">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-temucita-secondary rounded-full flex items-center justify-center">
                      <Bot className="w-4 h-4 text-white" />
                    </div>
                    <div className="bg-temucita-cream rounded-lg p-3 max-w-xs">
                      <p className="text-body-sm text-temucita-text-dark">Halo! Saya di sini untuk mendengarkan dan mendukung Anda. Bagaimana perasaan Anda hari ini?</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 justify-end">
                    <div className="bg-temucita-primary text-white rounded-lg p-3 max-w-xs">
                      <p className="text-body-sm">Akhir-akhir ini saya merasa cemas dengan pekerjaan...</p>
                    </div>
                    <div className="w-8 h-8 bg-temucita-primary rounded-full"></div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-temucita-secondary rounded-full flex items-center justify-center">
                      <Bot className="w-4 h-4 text-white" />
                    </div>
                    <div className="bg-temucita-cream rounded-lg p-3 max-w-xs">
                      <p className="text-body-sm text-temucita-text-dark">Saya memahami bahwa kecemasan kerja bisa sangat mengganggu. Mari kita jelajahi beberapa strategi coping bersama...</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-display-md font-bold text-temucita-text-dark mb-6">
                Psikolog Virtual AI
              </h2>
              <p className="text-body-lg text-temucita-text-medium mb-8">
                Dapatkan dukungan yang empatik dan instan kapan pun Anda membutuhkannya. AI kami dilatih dengan 
                teknik terapi berbasis bukti dan tersedia 24/7.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-temucita-secondary" />
                  <span className="text-body-md text-temucita-text-dark">Tersedia 24/7, tanpa perlu janji temu</span>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-temucita-secondary" />
                  <span className="text-body-md text-temucita-text-dark">Sepenuhnya privat dan rahasia</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="w-5 h-5 text-temucita-secondary" />
                  <span className="text-body-md text-temucita-text-dark">Dilatih dengan teknik CBT, DBT, dan mindfulness</span>
                </div>
              </div>
              
              <Button className="bg-temucita-secondary hover:bg-temucita-secondary-hover text-white px-8 py-3 rounded-full font-medium shadow-medium">
                Mulai Chat Sekarang
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="community" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-display-md font-bold text-temucita-text-dark mb-4">
              Cerita Penyembuhan
            </h2>
            <p className="text-body-lg text-temucita-text-medium">
              Pengalaman nyata dari anggota komunitas kami
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-medium bg-temucita-off-white">
                <CardContent className="p-8">
                  <blockquote className="text-body-md text-temucita-text-dark mb-6 italic">
                    "{testimonial.quote}"
                  </blockquote>
                  
                  <div className="flex items-center gap-4">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-semibold text-temucita-text-dark text-body-md">{testimonial.name}</div>
                      <div className="text-body-sm text-temucita-text-medium">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-temucita-primary to-temucita-secondary py-20 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-display-md font-bold mb-6">
            Siap Memulai Perjalanan Penyembuhan Anda?
          </h2>
          <p className="text-body-lg mb-8 opacity-90">
            Bergabunglah dengan ribuan orang yang telah menemukan dukungan, koneksi, dan penyembuhan melalui platform kami.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-temucita-primary hover:bg-gray-100 px-8 py-4 text-lg rounded-full font-medium shadow-medium">
              Bergabung dengan Komunitas
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-4 text-lg rounded-full font-medium">
              Pelajari Lebih Lanjut
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-temucita-text-dark text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img 
                  src="https://c.animaapp.com/me9ikgocpkiBve/img/image.png" 
                  alt="Temucita Logo" 
                  className="w-8 h-8"
                />
                <div>
                  <span className="text-heading-md font-bold">Temucita</span>
                  <p className="text-caption text-gray-400 -mt-1">SEBUAH RUANG UNTUK ASA DAN CITA</p>
                </div>
              </div>
              <p className="text-body-md text-gray-400 mb-4">
                Mendukung kesehatan mental melalui komunitas dan teknologi.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4 text-body-md">Dukungan</h3>
              <div className="space-y-2 text-gray-400 text-body-sm">
                <div>Hotline Krisis: 119</div>
                <div>Darurat: 112</div>
                <div>Dukungan: help@temucita.id</div>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4 text-body-md">Sumber Daya</h3>
              <div className="space-y-2 text-gray-400 text-body-sm">
                <div>Temukan Lokasi</div>
                <div>Sumber Kesehatan Mental</div>
                <div>Panduan Komunitas</div>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4 text-body-md">Perusahaan</h3>
              <div className="space-y-2 text-gray-400 text-body-sm">
                <div>Tentang Kami</div>
                <div>Kebijakan Privasi</div>
                <div>Syarat Layanan</div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-600 mt-12 pt-8 text-center text-gray-400">
            <p className="text-body-sm">&copy; 2024 Temucita. Hak cipta dilindungi. Kesehatan mental Anda penting.</p>
          </div>
        </div>
      </footer>
    </main>
  );
};
