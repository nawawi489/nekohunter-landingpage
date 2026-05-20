import { motion } from 'motion/react';
import { 
  CheckCircle2, 
  ShieldCheck, 
  Users, 
  Clock, 
  ChevronRight, 
  Play,
  Mail,
  Smartphone
} from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-brand-dark font-sans text-white selection:bg-brand-accent/30 relative">
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15rem] sm:text-[30rem] font-black opacity-[0.02] pointer-events-none whitespace-nowrap z-0 select-none">NEKO</div>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 sm:px-14 py-8 bg-brand-dark/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-[1024px] mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 bg-brand-accent flex items-center justify-center">
              <Play className="w-5 h-5 text-brand-dark fill-current" />
            </div>
            <span className="font-title font-black text-2xl uppercase tracking-tighter">Neko<span className="text-brand-accent">hunter</span></span>
          </div>
          <a href="#pricing" className="hidden sm:inline-flex items-center justify-center px-8 py-3 bg-white text-black font-black text-xs uppercase tracking-[2px] transition-colors hover:bg-gray-200">
            Lihat Paket
          </a>
        </div>
      </nav>

      <main className="relative z-10 w-full max-w-[1440px] mx-auto">
        {/* Hero Section */}
        <section className="pt-40 pb-20 px-6 sm:px-14 sm:pt-48 sm:pb-32 relative flex flex-col justify-center">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-accent/10 rounded-full blur-[120px] opacity-50 pointer-events-none" />
          
          <div className="max-w-[1024px] mx-auto relative z-10 flex flex-col justify-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-6 py-2 border border-white/10 text-white text-[11px] font-bold uppercase tracking-widest mb-8 w-fit bg-brand-dark"
            >
              <ShieldCheck className="w-4 h-4 text-brand-accent" />
              <span>Garansi 100% Uang Kembali Jika Gagal Rilis</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-6xl sm:text-8xl md:text-[110px] font-title font-black tracking-tighter text-white mb-8 leading-[0.85] uppercase"
            >
              Loloskan Aplikasi Anda ke <span className="text-brand-accent">PlayStore</span> Tanpa Drama
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-white opacity-80 mb-12 max-w-xl leading-relaxed"
            >
              Aturan baru Google mewajibkan 12 tester selama 14 hari berturut-turut. Serahkan proses pengujian tertutup aplikasi Anda kepada Nekohunter. Kami tangani semuanya.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center gap-4"
            >
              <a href="#pricing" className="w-fit inline-flex items-center justify-center px-10 py-5 bg-white hover:bg-gray-200 text-black font-black text-sm uppercase tracking-widest transition-colors group">
                Mulai Pengujian
                <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#how-it-works" className="w-fit inline-flex items-center justify-center px-10 py-5 bg-brand-dark text-white font-black text-sm uppercase tracking-widest transition-colors border border-white/10 hover:bg-white/10">
                Pelajari Cara Kerjanya
              </a>
            </motion.div>

            {/* Guarantee Badge (Absolute) */}
            <motion.div 
              initial={{ scale: 0, rotate: 0 }}
              animate={{ scale: 1, rotate: 15 }}
              transition={{ duration: 0.6, type: "spring" }}
              className="hidden lg:flex absolute bottom-[-40px] right-20 w-60 h-60 bg-brand-accent rounded-full flex-col items-center justify-center text-center text-white shadow-[0_0_50px_rgba(168,85,247,0.3)] z-20 pointer-events-none"
            >
              <div className="text-sm font-extrabold uppercase">Garansi</div>
              <div className="text-5xl font-black leading-none my-1">100%</div>
              <div className="text-[11px] font-bold max-w-[120px] uppercase mt-1">Uang Kembali Jika Gagal Publish</div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24 px-6 sm:px-14 border-t border-white/10 bg-brand-dark">
          <div className="max-w-[1024px] mx-auto">
            <div className="mb-16 max-w-xl">
              <h2 className="text-4xl sm:text-6xl font-title font-black uppercase tracking-tighter mb-4 leading-none">Mengapa Memilih <span className="text-brand-accent">Nekohunter?</span></h2>
              <p className="text-white opacity-80 text-lg">Kami merancang layanan ini untuk kreator, developer, dan studio indie.</p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-[2px] bg-white/10 border border-white/10 mt-16">
              {[
                {
                  icon: Users,
                  title: "15 Real Testers",
                  desc: "Kami menyediakan 15 pengguna asli menggunakan perangkat berbeda untuk memenuhi syarat Google."
                },
                {
                  icon: Clock,
                  title: "14 Hari Penuh",
                  desc: "Pengujian aktif selama 14 hari berturut-turut. Tester kami akan membuka dan mencoba aplikasi Anda."
                },
                {
                  icon: ShieldCheck,
                  title: "100% Uang Kembali",
                  desc: "Jika aplikasi Anda gagal memenuhi syarat Closed Testing, kami kembalikan uang Anda sepenuhnya tanpa syarat rumit."
                },
                {
                  icon: Smartphone,
                  title: "Perangkat Beragam",
                  desc: "Mulai dari smartphone entry-level hingga flagship terbaru dengan berbagai versi OS Android."
                },
                {
                  icon: CheckCircle2,
                  title: "Laporan Aktivitas",
                  desc: "Anda akan mendapatkan laporan kemajuan secara berkala mengenai aktivitas pengujian aplikasi Anda."
                },
                {
                  icon: Play,
                  title: "Siap Rilis",
                  desc: "Setelah 14 hari, Production Access aplikasi Anda akan terbuka dan siap dipublikasikan ke publik."
                }
              ].map((feature, idx) => (
                <div key={idx} className="p-10 bg-brand-dark hover:bg-[#111] transition-colors flex flex-col gap-2">
                  <div className="w-12 h-12 bg-white/5 flex items-center justify-center mb-6">
                    <feature.icon className="w-6 h-6 text-brand-accent" />
                  </div>
                  <h3 className="text-2xl font-black uppercase tracking-tight">{feature.title}</h3>
                  <p className="text-[13px] uppercase tracking-wider text-white/50 leading-relaxed font-bold mt-2">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section id="how-it-works" className="py-24 px-6 sm:px-14 border-t border-white/10 bg-[#0A0A0A]">
          <div className="max-w-[1024px] mx-auto">
            <div className="mb-16 max-w-xl">
              <h2 className="text-4xl sm:text-6xl font-title font-black uppercase tracking-tighter mb-4 leading-none">Proses Sederhana</h2>
              <p className="text-white opacity-80 text-lg">Dari draf hingga rilis di Play Store hanya dalam 3 langkah.</p>
            </div>
            
            <div className="space-y-12 relative before:absolute before:inset-0 before:ml-6 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-[1px] before:bg-white/10">
              {[
                {
                  step: "01",
                  title: "Daftar & Undang",
                  desc: "Pilih paket, selesaikan pembayaran, lalu undang email tim penguji kami ke dalam daftar Closed Testing di Google Play Console Anda."
                },
                {
                  step: "02",
                  title: "Pengujian Berjalan (14 Hari)",
                  desc: "Tim Nekohunter yang terdiri dari 20 orang akan mengunduh dan secara aktif menguji aplikasi Anda setiap hari selama 14 hari sesuai syarat Google."
                },
                {
                  step: "03",
                  title: "Akses Produksi Dibuka",
                  desc: "Setelah 14 hari selesai, Anda dapat mengajukan permohonan akses produksi (Production Track) ke Google. Jika ditolak karena syarat tester, 100% uang Anda kembali."
                }
              ].map((item, idx) => (
                <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-12 h-12 bg-white text-black font-black uppercase text-sm z-10 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-[0_0_0_8px_#0A0A0A]">
                    {item.step}
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] p-8 bg-brand-dark border border-white/10 hover:border-brand-accent transition-colors">
                    <h3 className="text-2xl font-black uppercase tracking-tight mb-3">{item.title}</h3>
                    <p className="text-[13px] uppercase tracking-wider text-white/50 leading-relaxed font-bold">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="py-24 px-6 sm:px-14 border-t border-white/10 bg-brand-dark">
          <div className="max-w-[1024px] mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="max-w-xl md:w-1/2 mb-16 md:mb-0 text-left">
              <h2 className="text-4xl sm:text-6xl font-title font-black uppercase tracking-tighter mb-4 leading-none">Investasi Rilis Aplikasi Anda</h2>
              <p className="text-white opacity-80 text-lg mt-6">Pilih layanan transparan tanpa biaya tersembunyi. Fokus saja pada coding, kami yang urus testing.</p>
            </div>
            
            <div className="max-w-xl md:w-1/2 w-full p-[2px] bg-white/10">
              <div className="bg-[#0A0A0A] p-8 sm:p-14 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-[0.05]">
                  <ShieldCheck className="w-48 h-48 text-white" />
                </div>
                
                <h3 className="text-3xl font-black uppercase tracking-tight mb-2">Paket Hunter</h3>
                <p className="text-[13px] uppercase tracking-wider text-white/50 font-bold mb-8">Solusi lengkap untuk lolos kebijakan baru Play Store.</p>
                
                <div className="flex items-baseline gap-2 mb-10 text-brand-accent">
                  <span className="text-6xl font-title font-black tracking-tighter">Rp499k</span>
                  <span className="uppercase text-sm tracking-widest font-bold">/ app</span>
                </div>
                
                <ul className="space-y-5 mb-12 relative z-10">
                  {[
                    "20 Real Testers",
                    "14 Hari Pengujian Aktif",
                    "Akses dashboard laporan",
                    "Tes di berbagai versi Android",
                    "Bantuan setup Play Console",
                    "100% Garansi Uang Kembali"
                  ].map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-4">
                      <div className="w-6 h-6 bg-brand-accent/20 flex items-center justify-center shrink-0">
                        <CheckCircle2 className="w-4 h-4 text-brand-accent" />
                      </div>
                      <span className="text-white font-bold uppercase tracking-wider text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button className="relative z-10 w-full py-6 px-8 bg-white hover:bg-gray-200 text-black font-black text-sm uppercase tracking-[2px] transition-colors flex items-center justify-center gap-2">
                  Daftarkan Aplikasi Saya
                  <ChevronRight className="w-5 h-5" />
                </button>
                <p className="text-center text-white/40 text-xs font-bold uppercase tracking-widest mt-6">Pengerjaan dimulai maksimal 1x24 jam setelah pembayaran.</p>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12 px-6 sm:px-14 bg-brand-dark">
        <div className="max-w-[1024px] mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 bg-brand-accent flex items-center justify-center">
              <Play className="w-5 h-5 text-brand-dark fill-current" />
            </div>
            <span className="font-title font-black text-2xl uppercase tracking-tighter">Neko<span className="text-brand-accent">hunter</span></span>
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
            <a href="#" className="text-[11px] font-bold uppercase tracking-widest text-white/50 hover:text-white transition-colors">Syarat & Ketentuan</a>
            <a href="#" className="text-[11px] font-bold uppercase tracking-widest text-white/50 hover:text-white transition-colors">Kebijakan Privasi</a>
            <a href="mailto:hello@nekohunter.com" className="text-[11px] font-bold uppercase tracking-widest text-white/50 hover:text-white transition-colors flex items-center gap-2">
              <Mail className="w-4 h-4 text-brand-accent" />
              Kontak
            </a>
          </div>
          
          <div className="text-[11px] font-bold uppercase tracking-widest text-white/30">
            © {new Date().getFullYear()} Nekohunter. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
