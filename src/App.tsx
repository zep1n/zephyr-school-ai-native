import React, { useRef, ReactNode, useState } from "react";
import { 
  motion, 
  useScroll, 
  useTransform, 
  useInView, 
  AnimatePresence 
} from "motion/react";
import { 
  Mail, Phone, Globe, MessageCircle, BookOpen, 
  Cpu, Target, Award, Rocket, Users, Shield, 
  Zap, Brain, Code, Presentation, Star,
  ChevronRight, ExternalLink, Sparkles, ShieldCheck,
  CheckCircle2, Layers, Lightbulb, Workflow
} from "lucide-react";

function FadeInWhenVisible({ children, delay = 0 }: { children: ReactNode, delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.8, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      {children}
    </motion.div>
  );
}

const ProjectCard = ({ item, idx }: { item: any; idx: number; key?: React.Key }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      className="relative min-w-[85vw] sm:min-w-[340px] md:min-w-[420px] p-8 md:p-10 rounded-[2.5rem] md:rounded-[3rem] liquid-glass border border-white/5 flex flex-col justify-between hover:bg-white/[0.03] transition-all duration-700 group cursor-default h-[380px] md:h-[460px] shadow-2xl hover:shadow-blue-500/10 snap-center overflow-hidden bg-black/10"
    >
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <img 
          src={item.bgImage} 
          alt={item.title}
          className="w-full h-full object-cover opacity-[0.25] group-hover:opacity-[0.45] group-hover:scale-105 transition-all duration-1000 grayscale group-hover:grayscale-0"
        />
        {/* Soft protection overlay - slightly deeper to handle increased image opacity */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/20 to-black/80" />
      </div>

      <div className="relative z-10">
        <div className="flex justify-between items-start mb-6 md:mb-10">
          <span className="text-[9px] md:text-[10px] uppercase tracking-[0.3em] text-white/20 font-bold">Phase {idx + 1}</span>
          <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl md:rounded-3xl bg-white/5 flex items-center justify-center text-white/30 group-hover:scale-110 group-hover:bg-white/10 group-hover:text-blue-400 transition-all duration-700">
            {item.icon}
          </div>
        </div>
        <div className="text-[9px] md:text-[10px] uppercase tracking-widest text-blue-500/60 mb-2 md:mb-3 font-black">{item.day}</div>
        <h4 className="text-2xl md:text-3xl text-white font-medium mb-4 md:mb-6 leading-tight tracking-tight break-words">{item.title}</h4>
      </div>
      <div className="relative z-10 pt-6 md:pt-10 border-t border-white/10">
        <div className="flex items-center gap-3 mb-5">
           <div className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.8)]" />
           <span className="text-[10px] uppercase tracking-[0.3em] text-white/30 font-bold">核心成果 · KEY DELIVERABLE</span>
        </div>
        <p className="text-sm text-white/40 font-light leading-relaxed group-hover:text-white/80 transition-colors duration-700">
          {item.output}
        </p>
      </div>
    </motion.div>
  );
};

export default function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  
  const schedule = [
    { 
      day: "Day 1", 
      title: "破冰与兴趣激发", 
      output: "小组项目初步选题卡", 
      icon: <Zap className="w-5 h-5" />,
      bgImage: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1000&auto=format&fit=crop"
    },
    { 
      day: "Day 2", 
      title: "AI 协作方法训练", 
      output: "项目需求清单、AI 协作记录", 
      icon: <Brain className="w-5 h-5" />,
      bgImage: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1000&auto=format&fit=crop"
    },
    { 
      day: "Day 3", 
      title: "项目立项与角色分工", 
      output: "项目立项计划、任务分解", 
      icon: <Users className="w-5 h-5" />,
      bgImage: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1000&auto=format&fit=crop"
    },
    { 
      day: "Day 4", 
      title: "核心功能开发", 
      output: "MVP 原型可演示", 
      icon: <Code className="w-5 h-5" />,
      bgImage: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=1000&auto=format&fit=crop"
    },
    { 
      day: "Day 5", 
      title: "场景扩展与交互优化", 
      output: "进阶版项目原型", 
      icon: <Sparkles className="w-5 h-5" />,
      bgImage: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000&auto=format&fit=crop"
    },
    { 
      day: "Day 6", 
      title: "成果应用与答辩演练", 
      output: "项目展示文档、答辩演示", 
      icon: <Presentation className="w-5 h-5" />,
      bgImage: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1000&auto=format&fit=crop"
    },
    { 
      day: "Day 7", 
      title: "成果展示与总结", 
      output: "最终展示、个人数字存档", 
      icon: <Award className="w-5 h-5" />,
      bgImage: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=1000&auto=format&fit=crop"
    },
  ];

  const outcomes = [
    {
      title: "国际权威认证",
      desc: "对接 Google AI, Hour of Code, Khan Academy 及 Schoolhouse Dialogues 等权威认证，为国际化升学背景强效背书。",
      icon: <Award className="text-yellow-400" />,
      tag: "Certificates",
      bgImage: "https://images.unsplash.com/photo-1523050338392-7ecad544a055?q=80&w=1000&auto=format=format&fit=crop"
    },
    {
      title: "个人数字存档",
      desc: "基于营地全过程记录的专属 AI Agent。生成结构化数字档案，支持长期的自我复盘与项目迭代。",
      icon: <Cpu className="text-blue-400" />,
      tag: "Technology",
      bgImage: "https://images.unsplash.com/photo-1510511459019-5deeee712161?q=80&w=1000&auto=format=format&fit=crop"
    },
    {
      title: "项目成果展示",
      desc: "小组完成的 AI 原生应用原型。通过专项答辩形式，全方位展示学生在真实业务场景下的解决问题能力。",
      icon: <Layers className="text-purple-400" />,
      tag: "Practices",
      bgImage: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1000&auto=format=format&fit=crop"
    }
  ];

  const interactives = [
    { 
      title: "Seele AI 全栈赋能", 
      desc: "获得 Seele AI 深度官方背书。通过专属教育版软件权限，学生可直接调用先进的 AI 基础设施，在真实生产环境中实践创见。", 
      icon: <Workflow />,
      role: "Seele 官方赋能 - 提供底层模型能力与教育专用套件支持。学生不仅是 AI 的使用者，更是基于 Seele 生态的高阶构建者。"
    },
    { 
      title: "超级个体加速器", 
      desc: "AI 辅助极大降低技术门槛，让每一个学生都能在课堂中跨越专业壁垒，体验一人即全能开发者的创造力释放。", 
      icon: <Zap />,
      role: "AI 创意引擎 - 提供跨领域的逻辑补齐与技术支持。无论是编写代码逻辑还是生成视觉 UI，AI 都是学生实时调用的最强外脑。"
    },
    { 
      title: "AI 互动课堂闭环", 
      desc: "从实时的数字笔记存档到成果应用环节的答辩演练，AI 全程参与交互，为学生提供客观的多维度成长反馈。", 
      icon: <Brain />,
      role: "AI 答辩专家 - 为成果应用环节提供多场景模拟。通过深度学习算法分析学生存档，辅助进行针对性的答辩复盘与思路迭代。",
    }
  ];

  const testimonials = [
    {
      name: "教育机构负责人",
      role: "全球教育伙伴",
      content: "该项目成功将工业级 AI 协作标准引入校园，重塑了师生的数字化素养，是教育创新的极佳样板。"
    },
    {
      name: "STEM 教研专家",
      role: "课程体系顾问",
      content: "Leader-Builder 架构让学生在实战中理解 AI Agent 协作流，这种前瞻性的教学设计为未来教育揭示了新路径。"
    },
    {
      name: "营地先行学员",
      role: "AI 创想家",
      content: "从 AI 的使用者进化为构建者，这种思维的跃迁远比学习工具本身更重要。7 天的沉浸让我对未来职业充满信心。"
    }
  ];

  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [activeContact, setActiveContact] = useState<string | null>(null);
  const [copyStatus, setCopyStatus] = useState("一键复制");
  
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseMove = () => {
    // Interaction disabled for performance
  };

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopyStatus("已复制!");
    setTimeout(() => setCopyStatus("一键复制"), 2000);
  };

  // Failsafe: hide preloader after 5s regardless of video status
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsVideoLoaded(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative z-10 w-full min-h-screen flex flex-col items-center font-sans selection:bg-white/20 selection:text-white"
    >
      {/* Preloader */}
      <AnimatePresence>
        {!isVideoLoaded && (
          <motion.div 
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[200] bg-black flex flex-col items-center justify-center p-8 overflow-hidden"
          >
            {/* Background SVG Grid & Neural Pattern */}
            <div className="absolute inset-0 z-0">
              <svg width="100%" height="100%" className="opacity-[0.15]">
                <defs>
                  <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" strokeOpacity="0.1" />
                  </pattern>
                  <radialGradient id="glow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="rgba(59, 130, 246, 0.3)" />
                    <stop offset="100%" stopColor="transparent" />
                  </radialGradient>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
                
                {/* Random Pulsing Nodes */}
                {[...Array(12)].map((_, i) => (
                  <motion.circle
                    key={i}
                    r={Math.random() * 2 + 1}
                    fill="white"
                    initial={{ opacity: 0.1 }}
                    animate={{ 
                      opacity: [0.1, 0.6, 0.1],
                      cx: [`${Math.random() * 100}%`],
                      cy: [`${Math.random() * 100}%`],
                    }}
                    transition={{ 
                      duration: Math.random() * 3 + 2, 
                      repeat: Infinity, 
                      ease: "easeInOut",
                      delay: Math.random() * 2
                    }}
                  />
                ))}
              </svg>
              
              {/* Central Flowing Light Orbit */}
              <motion.div 
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] md:w-[40vw] md:h-[40vw] rounded-full blur-[120px]"
                animate={{
                  background: [
                    "radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, transparent 70%)",
                    "radial-gradient(circle, rgba(168, 85, 247, 0.15) 0%, transparent 70%)",
                    "radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, transparent 70%)",
                  ],
                  scale: [1, 1.2, 1]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>

            {/* Content Segment */}
            <div className="relative z-10 flex flex-col items-center gap-12 max-w-md w-full">
              {/* Central Icon Animation */}
              <div className="relative">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 1 }}
                  className="w-24 h-24 md:w-32 md:h-32 rounded-[2rem] bg-white/[0.03] border border-white/10 backdrop-blur-3xl flex items-center justify-center relative shadow-2xl"
                >
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 border border-t-blue-500 border-r-transparent border-b-purple-500 border-l-transparent rounded-[2.5rem] scale-110 opacity-40 blur-sm"
                  />
                  <Brain className="w-10 h-10 md:w-14 md:h-14 text-white/80" />
                </motion.div>
                
                {/* Floating Particles */}
                <motion.div 
                  animate={{ y: [0, -10, 0], opacity: [0, 1, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                  className="absolute -top-4 -right-2 w-2 h-2 rounded-full bg-blue-400 blur-[2px]" 
                />
                <motion.div 
                  animate={{ y: [0, 15, 0], opacity: [0, 0.8, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity, delay: 1 }}
                  className="absolute top-1/2 -left-6 w-1 h-1 rounded-full bg-purple-400 blur-[1px]" 
                />
              </div>

              {/* Progress Tracking */}
              <div className="w-full flex flex-col items-center gap-6">
                <div className="w-full h-[2px] bg-white/5 rounded-full relative overflow-hidden">
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500 to-transparent"
                    initial={{ x: "-100%" }}
                    animate={{ x: "100%" }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: [0.65, 0, 0.35, 1] }}
                  />
                </div>
                
                <div className="flex flex-col gap-3 text-center">
                  <motion.span 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-[10px] md:text-xs uppercase tracking-[0.5em] text-white/50 font-medium font-mono"
                  >
                    System Initializing
                  </motion.span>
                  <h3 className="text-sm md:text-base text-white/80 font-light tracking-wide animate-pulse">
                    正在构建 AI 沉浸式数字空间 ...
                  </h3>
                </div>
              </div>
            </div>

            {/* Bottom Footer Info */}
            <div className="absolute bottom-12 flex flex-col items-center gap-2">
              <div className="text-[9px] uppercase tracking-[0.3em] font-black text-white/10">
                Experience the Future of Education
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Background Layer (Fixed) */}
      <div className="fixed inset-0 z-0 bg-transparent overflow-hidden pointer-events-none">
        {/* Native Video Background - Aliyun OSS Optimized */}
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          onCanPlayThrough={() => setIsVideoLoaded(true)}
          className="w-full h-full object-cover opacity-100"
        >
          <source 
            src="https://bg1-mp4.oss-cn-shanghai.aliyuncs.com/aischool.mp4" 
            type="video/mp4" 
          />
        </video>
        
        {/* Readability Overlay - Balanced contrast */}
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/70" />
        
        {/* Atmosphere & Texture */}
        <div className="absolute inset-0 bg-blue-500/5 mix-blend-color" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.04] mix-blend-overlay" />
        
        {/* Subtle Static Bloom */}
        <div className="absolute w-[80vw] h-[80vw] rounded-full bg-blue-500/5 blur-[150px] pointer-events-none left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
      </div>

      {/* Hero Section */}
      <section className="relative z-10 w-full min-h-screen flex flex-col items-center justify-center px-4 text-center overflow-hidden">
        {/* Decorative Floating Elements */}
        <div className="absolute top-1/4 left-10 w-32 h-32 bg-blue-400/5 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-1/4 right-10 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl opacity-50" />

        <FadeInWhenVisible>
          <div className="text-[9px] md:text-xs uppercase tracking-[0.3em] md:tracking-[0.4em] text-white/70 border border-white/10 rounded-full px-5 md:px-8 py-2 md:py-2.5 mb-6 md:mb-10 inline-block liquid-glass backdrop-blur-3xl shadow-[0_0_20px_rgba(255,255,255,0.05)] bg-white/[0.02]">
            AI 原生思维 · 沉浸式教育解决方案
          </div>
        </FadeInWhenVisible>
        
        <motion.h1 
          className="text-[2.5rem] xs:text-5xl sm:text-7xl md:text-8xl lg:text-[11rem] font-bold leading-[1.1] md:leading-[0.85] mb-6 md:mb-14 tracking-tighter"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="inline-block hover:scale-[1.02] transition-transform duration-700 cursor-default text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-white to-purple-400 drop-shadow-[0_0_20px_rgba(59,130,246,0.3)]">AI 原生</span><br className="block md:hidden" />
          <span className="text-transparent bg-clip-text bg-gradient-to-br from-white via-white/80 to-white/10 filter drop-shadow-[0_10px_40px_rgba(255,255,255,0.15)] md:ml-4">教学创新计划</span>
        </motion.h1>

        <motion.div
          className="relative max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <p className="text-sm md:text-2xl lg:text-3xl text-white/40 mb-10 md:mb-20 font-light leading-relaxed px-6 tracking-normal">
          从 <span className="text-white/90 font-medium">零基础</span> 到 <span className="text-white/90 font-medium">项目落地</span><br className="md:hidden" /> 赋能学校课程体系建设<br />
          接轨国际顶尖教育资源，助力培养具备 <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 font-bold animate-pulse">全球竞争力</span> 的创新型人才
        </p>
        </motion.div>

        {/* Google Certifications Badge Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 md:gap-6 mb-16 md:mb-24 relative z-20 px-4"
        >
          {[
            { id: "cert-1", title: "Google AI 专业教育认证", color: "from-blue-500/20 to-blue-600/5", glow: "shadow-blue-500/20" },
            { id: "cert-2", title: "美国Khan学院 AI 官方证书", color: "from-red-500/20 to-orange-600/5", glow: "shadow-orange-500/20" },
            { id: "cert-3", title: "英国权威 STEM 项目证书", color: "from-indigo-500/20 to-purple-600/5", glow: "shadow-purple-500/20" }
          ].map((cert) => (
            <div 
              key={cert.id}
              className={`flex items-center gap-3 md:gap-4 px-5 md:px-8 py-3 md:py-5 rounded-2xl md:rounded-[2rem] bg-gradient-to-br ${cert.color} border border-white/10 backdrop-blur-3xl shadow-xl ${cert.glow} group hover:border-white/40 transition-all duration-500 transform hover:-translate-y-1 w-full sm:w-auto min-w-0 md:min-w-[320px]`}
            >
              <div className="shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-xl md:rounded-2xl bg-white/10 flex items-center justify-center backdrop-blur-3xl border border-white/10 group-hover:scale-110 transition-transform duration-500">
                <ShieldCheck className="w-4 h-4 md:w-5 md:h-5 text-white/90" />
              </div>
              <span className="text-xs md:text-base font-semibold text-white/90 tracking-tight group-hover:text-white transition-colors truncate whitespace-nowrap">{cert.title}</span>
            </div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-4 md:gap-6 relative z-20 w-full sm:w-auto px-6 sm:px-0"
        >
          <button 
            onClick={() => setActiveContact('wechat')}
            className="liquid-glass text-white px-8 md:px-12 py-4 md:py-6 rounded-full text-base md:text-xl font-medium hover:scale-105 transition-all group flex items-center justify-center gap-3 cursor-pointer shadow-xl shadow-blue-500/10 hover:shadow-blue-500/20 w-full sm:w-auto"
          >
            获取定制教学方案 <ChevronRight className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
        >
          <span className="text-[10px] uppercase tracking-[0.4em] text-white/20 font-bold">Discover</span>
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-px h-12 bg-gradient-to-b from-white/20 to-transparent"
          />
        </motion.div>
      </section>

      {/* Stats / Concept Row */}
      <section className="relative z-10 w-full max-w-7xl mx-auto px-4 py-8 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 px-2 sm:px-0">
           {[
             { label: "项目时长", lines: ["7天", "定制时长"] },
             { label: "认证机构", lines: ["Google", "Khan", "CREST"] },
             { label: "学习模式", lines: ["超级个体", "AI课堂", "Agent协作"] },
             { label: "输出成果", lines: ["数字存档", "项目展示", "荣誉奖项"] }
           ].map((item, i) => (
             <div key={i} className="p-6 md:p-8 rounded-[2rem] liquid-glass border border-white/5 text-center flex flex-col justify-center min-h-[140px] md:min-h-[180px] bg-gradient-to-br from-white/[0.02] to-black/20">
               <div className="text-[9px] md:text-[10px] uppercase tracking-[0.3em] text-white/20 mb-4 font-bold">{item.label}</div>
               <div className="flex flex-col gap-1 md:gap-2">
                 {item.lines.map((text, idx) => (
                   <div key={idx} className="text-white text-base md:text-xl font-medium tracking-tight">
                     {text}
                   </div>
                 ))}
               </div>
             </div>
           ))}
        </div>
      </section>

      {/* School Values Section */}
      <section id="values-section" className="relative z-10 w-full max-w-7xl mx-auto px-4 py-12 md:py-20">
        <FadeInWhenVisible>
          <div className="text-center mb-12 md:mb-16 px-4">
            <h2 className="text-3xl md:text-6xl font-medium text-white mb-6 md:mb-8 leading-tight break-words text-balance">协同共创：<br className="md:hidden" />数字化AI教育课堂</h2>
            <p className="text-white/40 max-w-2xl mx-auto text-xs md:text-sm leading-relaxed text-balance">我们致力于成为学校在 AI 时代转型过程中的价值共创伙伴，将前沿的工业协作标准深度整合入校本教学体系。</p>
          </div>
        </FadeInWhenVisible>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {[
            { 
              title: "提升课程创新力", 
              desc: "快速丰富学校的校本课程体系。作为特色课后活动或 STEM 实践课，展现国际前沿教育特色。", 
              icon: <Lightbulb className="text-blue-400" /> 
            },
            { 
              title: "全过程数字化成果", 
              desc: "提供项目 Demo、个人数字存档、多维能力评估报告。所有成果均为可量化、可展示的教学档案。", 
              icon: <Target className="text-purple-400" /> 
            },
            { 
              title: "Leader-Builder 协作架构", 
              desc: "引入硅谷标准的项目协作流，实战模拟职业化团队，助力学校在数字化教育转型中打造独特的行业名片。", 
              icon: <Workflow className="text-emerald-400" /> 
            }
          ].map((item, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -10, scale: 1.02 }}
              className={`p-6 md:p-8 rounded-[2rem] md:rounded-[2.5rem] liquid-glass border border-white/5 flex flex-col gap-4 md:gap-6 transition-all group shadow-2xl h-full bg-gradient-to-br from-white/[0.02] to-black/40 ${idx === 2 ? 'sm:col-span-2 lg:col-span-1' : ''}`}
            >
              <div className="w-10 h-10 md:w-14 md:h-14 bg-white/5 rounded-lg md:rounded-[1.2rem] flex items-center justify-center text-xl md:text-2xl group-hover:bg-white/10 transition-colors">
                {item.icon}
              </div>
              <div>
                <h3 className="text-base md:text-xl text-white font-medium mb-1 md:mb-3">{item.title}</h3>
                <p className="text-white/40 leading-relaxed text-[10px] md:text-xs font-light">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Journey Section (Reduced vertical padding for mobile) */}
      <section id="journey-section" className="relative z-10 w-full py-20 md:py-40 bg-white/[0.02] border-y border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 mb-12 md:mb-20 text-center md:text-left">
          <h2 className="text-4xl md:text-6xl font-medium text-white mb-6 tracking-tight">七天。见证质变。</h2>
          <p className="text-white/40">每一天都有明确的核心活动与实物输出，让成长清晰可见。</p>
        </div>

        {/* Scrollable Container */}
        <div className="w-full overflow-x-auto custom-scrollbar pb-8 cursor-grab active:cursor-grabbing snap-x snap-mandatory scroll-smooth">
          <div className="flex gap-4 md:gap-6 px-4 md:px-[calc((100vw-1280px)/2)]">
            {schedule.map((item, idx) => (
              <ProjectCard key={idx} item={item} idx={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* Core Outcomes Section */}
      <section className="relative z-10 w-full max-w-7xl mx-auto px-4 py-12 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
        <div>
          <FadeInWhenVisible>
            <h2 className="text-3xl md:text-5xl font-medium text-white mb-4 md:mb-8 leading-tight break-words text-balance">核心成果体系</h2>
            <p className="text-white/40 mb-8 md:mb-12 text-sm md:text-base text-balance">从国际认证到数字资产，我们认证每一阶段的卓越成长。</p>
          </FadeInWhenVisible>
          
          <div className="space-y-4 md:space-y-6">
            {outcomes.map((item, idx) => (
              <motion.div 
                key={idx} 
                whileHover={{ x: 10 }}
                className="relative flex flex-col sm:flex-row gap-4 md:gap-6 p-4 md:p-6 rounded-[1.5rem] md:rounded-[2rem] bg-gradient-to-br from-white/[0.03] to-black/40 hover:bg-white/[0.05] transition group border border-white/5 hover:border-white/10 overflow-hidden"
              >
                {/* Certificate/Outcome Background Image */}
                <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                  <img 
                    src={item.bgImage} 
                    alt="" 
                    className="w-full h-full object-cover opacity-[0.08] group-hover:opacity-[0.2] transition-opacity duration-700 md:group-hover:scale-110 transition-transform duration-1000 grayscale group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-black/60 to-transparent" />
                </div>

                <div className="relative z-10 shrink-0 w-12 h-12 md:w-14 md:h-14 bg-white/5 rounded-xl md:rounded-[1.2rem] flex items-center justify-center text-xl md:text-2xl group-hover:bg-blue-500/20 transition-colors">
                  {item.icon}
                </div>
                <div className="relative z-10">
                  <div className="flex flex-wrap items-center gap-2 md:gap-3 mb-1 md:mb-2">
                    <h4 className="text-base md:text-lg text-white font-medium">{item.title}</h4>
                    <span className="text-[8px] md:text-[9px] border border-white/20 px-2 py-0.5 rounded-full text-white/40 uppercase tracking-widest">{item.tag}</span>
                  </div>
                  <p className="text-xs text-white/40 leading-relaxed font-light">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="relative mt-8 md:mt-0">
          <motion.div 
            initial={{ rotate: -2, opacity: 0 }}
            whileInView={{ rotate: 0, opacity: 1 }}
            className="relative aspect-[5/4] sm:aspect-[4/5] rounded-[2rem] md:rounded-[3rem] liquid-glass p-8 md:p-12 flex flex-col justify-between border-2 border-white/10 shadow-[0_0_100px_rgba(255,255,255,0.05)] overflow-hidden group"
          >
             {/* Background Image for Honors */}
             <div className="absolute inset-0 z-0 opacity-20 group-hover:opacity-30 transition-opacity">
               <img 
                 src="https://images.unsplash.com/photo-1578574577315-3fbe0eebea28?q=80&w=1000&auto=format=format&fit=crop" 
                 alt="Honors" 
                 className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
               />
               <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/40 to-black/90" />
             </div>

             <div className="relative z-10">
                <div className="w-12 h-12 bg-yellow-500/20 rounded-2xl flex items-center justify-center mb-6 border border-yellow-500/30">
                  <Star className="text-yellow-400 w-6 h-6" />
                </div>
                <h3 className="text-2xl md:text-3xl text-white mb-4 font-medium">专项荣誉 & 独家奖章</h3>
                <p className="text-sm text-white/50 leading-relaxed mb-8">
                  认可是努力最好的反馈。获得国际认证的学生，将额外获颁中心<span className="text-white font-bold">独家定制的实物荣誉勋章</span>，作为个人数字成长档案的实体见证。
                </p>
             </div>
             
             <div className="relative z-10">
               <div className="text-[10px] uppercase tracking-[0.3em] text-white/20 mb-4 font-bold">五大核心能力奖项</div>
               <div className="flex flex-wrap gap-2">
                  {[
                    { label: "卓越创意", color: "from-pink-500/20 to-rose-500/20" },
                    { label: "卓越领航", color: "from-blue-500/20 to-cyan-500/20" },
                    { label: "卓越建造", color: "from-amber-500/20 to-orange-500/20" },
                    { label: "卓越协同", color: "from-emerald-500/20 to-teal-500/20" },
                    { label: "卓越表达", color: "from-purple-500/20 to-indigo-500/20" }
                  ].map(award => (
                    <span key={award.label} className={`px-4 py-2 rounded-xl border border-white/10 bg-gradient-to-br ${award.color} text-[10px] md:text-xs text-white/60 font-medium`}>
                      {award.label}
                    </span>
                  ))}
               </div>
             </div>
          </motion.div>
        </div>
      </section>
      <section id="interactive-section" className="relative z-10 w-full bg-white/[0.02] py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-medium text-white mb-4 md:mb-6 tracking-tight break-words">课堂互动生态</h2>
            <p className="text-white/40 max-w-2xl mx-auto text-xs md:text-sm">AI 原生环境下的沉浸式交互，让教学过程从“单向输出”转向“智能协同”。</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {interactives.map((item, i) => (
              <div key={i} className={`p-6 md:p-8 rounded-[2rem] md:rounded-[2.5rem] bg-gradient-to-br from-white/[0.02] to-black/60 backdrop-blur-2xl border border-white/5 hover:border-white/20 transition-all text-center flex flex-col items-center gap-4 md:gap-6 group min-h-auto md:min-h-[380px] shadow-2xl relative overflow-hidden ${i === 2 ? 'sm:col-span-2 lg:col-span-1' : ''}`}>
                {/* Visual Accent */}
                <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="w-10 h-10 md:w-16 md:h-16 bg-white/5 rounded-lg md:rounded-[1.5rem] flex items-center justify-center group-hover:bg-blue-600/20 transition-all shadow-inner relative z-10">
                  <div className="text-white/60 group-hover:text-blue-400 transition-colors scale-100 md:scale-125">
                    {item.icon}
                  </div>
                </div>
                <div className="w-full relative z-10 text-balance px-1">
                  <h4 className="text-base md:text-xl text-white font-medium mb-1 md:mb-3">{item.title}</h4>
                  <p className="text-[10px] md:text-xs text-white/40 font-light leading-4 md:leading-6">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials-section" className="relative z-10 w-full py-12 md:py-20 max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-12 gap-4">
          <div className="text-left">
            <h2 className="text-xl md:text-3xl font-bold text-white mb-2 tracking-tighter">全球伙伴回响</h2>
            <p className="text-white/40 text-[10px] md:text-xs tracking-widest uppercase">Voicing the Future of Education</p>
          </div>
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => <Star key={i} size={12} className="fill-blue-500/30 text-blue-500/30" />)}
          </div>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {testimonials.map((t, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="break-inside-avoid p-5 md:p-6 rounded-2xl bg-gradient-to-br from-white/[0.04] to-black/60 backdrop-blur-3xl border border-white/5 hover:border-white/20 transition-all group flex flex-col gap-4 shadow-xl mb-4"
            >
              <div className="text-blue-500/40">
                <MessageCircle size={20} />
              </div>
              
              <p className="text-white/80 text-xs md:text-sm leading-relaxed font-light">
                “{t.content}”
              </p>

              <div className="pt-4 border-t border-white/5">
                <div className="text-white font-semibold text-xs md:text-sm">{t.name}</div>
                <div className="text-white/30 text-[9px] md:text-[10px] uppercase tracking-wider mt-0.5">{t.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="relative z-10 w-full py-16 md:py-32 flex flex-col items-center text-center px-4">
        <FadeInWhenVisible>
          <div className="w-12 h-12 md:w-16 md:h-16 bg-white/10 rounded-full flex items-center justify-center mb-6 md:mb-8 animate-bounce mx-auto">
            <Rocket className="text-white/60 w-6 h-6 md:w-8 md:h-8" />
          </div>
          <h2 className="text-3xl md:text-6xl font-medium text-white mb-6 md:mb-8 tracking-tighter break-words leading-tight text-balance">赋能学校，定义未来</h2>
          <p className="text-sm md:text-lg text-white/40 mb-10 md:mb-12 max-w-xl mx-auto leading-relaxed text-balance">
            与我们合作，为您的学生引入最前沿的 AI 原生教育体系。现已开放暑期及秋季学期合作预约。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center">
            <button 
              onClick={() => setActiveContact('wechat')}
              className="bg-white text-black px-8 md:px-12 py-3 md:py-5 rounded-full text-sm md:text-lg font-bold hover:scale-105 active:scale-95 transition-all shadow-[0_0_50px_rgba(255,255,255,0.3)] cursor-pointer"
            >
              立刻预约，制作方案
            </button>
            <button className="liquid-glass text-white px-8 md:px-12 py-3 md:py-5 rounded-full text-sm md:text-lg font-medium border border-white/20 hover:bg-white/10 transition-all cursor-pointer">
              下载完整课程详情
            </button>
          </div>
        </FadeInWhenVisible>
      </section>

      {/* Footer */}
      <motion.footer
        id="main-footer"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
        className="liquid-glass w-full rounded-t-[2.5rem] md:rounded-t-[5rem] px-6 py-16 md:px-32 md:py-32 text-white/70 relative z-10 overflow-hidden"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 md:gap-16 lg:gap-20 mb-16 md:mb-32">
          <div className="md:col-span-2 lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="flex items-center mb-8 md:mb-10">
              <div className="bg-white/10 p-2 md:p-3 rounded-xl md:rounded-2xl shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256" fill="white" className="w-8 h-8 md:w-10 md:h-10">
                  <path d="M 4.688 136 C 68.373 136 120 187.627 120 251.312 C 120 252.883 119.967 254.445 119.905 256 L 0 256 L 0 136.096 C 1.555 136.034 3.117 136 4.688 136 Z M 251.312 136 C 252.883 136 254.445 136.034 256 136.096 L 256 256 L 136.095 256 C 136.032 254.438 136.001 252.875 136 251.312 C 136 187.627 187.627 136 251.312 136 Z M 119.905 0 C 119.967 1.555 120 3.117 120 4.688 C 120 68.373 68.373 120 4.687 120 C 3.117 120 1.555 119.967 0 119.905 L 0 0 Z M 256 119.905 C 254.445 119.967 252.883 120 251.312 120 C 187.627 120 136 68.373 136 4.687 C 136 3.117 136.033 1.555 136.095 0 L 256 0 Z" />
                </svg>
              </div>
              <span className="text-xl md:text-3xl font-medium text-white ml-4 md:ml-6 tracking-tighter">AI 教学创新中心</span>
            </div>
            <p className="text-sm md:text-base leading-relaxed md:leading-8 text-white/40 mb-8 md:mb-12 max-w-sm lg:max-w-md font-light mx-auto lg:mx-0">
              致力于为学校提供 AI 原生教育全栈解决方案。通过沉浸式课程，助力培养具备未来核心竞争力的顶尖人才。
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
               {[
                 { Icon: Mail, type: 'email' },
                 { Icon: Phone, type: 'phone' },
                 { Icon: Globe, type: 'web' },
                 { Icon: MessageCircle, type: 'wechat' },
                 { Icon: BookOpen, type: 'book' }
               ].map(({ Icon, type }, i) => (
                 <button 
                   key={i} 
                   onClick={() => setActiveContact(type)}
                   className="w-10 h-10 md:w-14 md:h-14 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all group shadow-xl cursor-pointer"
                 >
                   <Icon size={16} className="md:w-5 md:h-5 hover:scale-110 transition-transform" />
                 </button>
               ))}
            </div>
          </div>

          <div className="md:col-span-2 lg:col-span-7 grid grid-cols-2 gap-x-8 md:gap-x-16 gap-y-12">
            <div className="flex flex-col items-start px-2 sm:px-0">
              <h3 className="text-xs uppercase tracking-[0.2em] text-white font-bold mb-8 md:mb-10 opacity-30">项目详情</h3>
              <ul className="space-y-4 md:space-y-6">
                {["AI 原生思维", "项目驱动学习", "Leader-Builder 制", "七天沉浸营", "国际标准设计"].map((l) => (
                  <li key={l}><a href="#" className="text-sm text-white/30 hover:text-white transition-colors">{l}</a></li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col items-start">
              <h3 className="text-xs uppercase tracking-[0.2em] text-white font-bold mb-8 md:mb-10 opacity-30">认证与合作</h3>
              <ul className="space-y-4 md:space-y-6">
                {["AI 创造营认证", "数字存档", "项目 Demo 展示", "国际权威证书", "校方合作方案"].map((l) => (
                  <li key={l}><a href="#" className="text-sm text-white/30 hover:text-white transition-colors">{l}</a></li>
                ))}
              </ul>
            </div>
            <div className="col-span-2 flex flex-col items-center border-t border-white/5 pt-10">
              <h3 className="text-xs uppercase tracking-[0.2em] text-white font-bold mb-6 opacity-30">专项荣誉</h3>
              <div className="flex flex-wrap justify-center gap-2">
                {["卓越创意", "卓越领航", "卓越建造", "卓越表达"].map((l) => (
                  <span key={l} className="text-[10px] uppercase border border-white/10 px-3 py-1.5 rounded-full text-white/20 font-bold">{l}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
            <p className="text-[9px] md:text-[10px] uppercase tracking-[0.4em] text-white/20 text-center">
              © 2026 AI NATIVE CREATOR CAMP
            </p>
            <div className="hidden md:block w-px h-4 bg-white/10" />
            <p className="text-[9px] md:text-[10px] uppercase tracking-[0.4em] text-white/20">
              XIAMEN · CHINA
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-8 md:gap-12 items-center text-[9px] md:text-[10px] uppercase tracking-[0.4em] text-white/20 font-bold">
             <a href="#" className="hover:text-white transition-colors">Privacy</a>
             <a href="#" className="hover:text-white transition-colors">Terms</a>
             <div className="hidden sm:block w-12 h-1 bg-white/5 rounded-full" />
          </div>
        </div>
      </motion.footer>
      {/* Contact Modal */}
      <AnimatePresence>
        {activeContact && (
          <div className="fixed inset-0 z-[300] flex items-center justify-center px-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveContact(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-[440px] liquid-glass p-8 md:p-10 rounded-[2.5rem] border border-white/10 shadow-2xl flex flex-col items-center text-center gap-8 overflow-hidden"
            >
              {/* Decorative accent */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-white/50 to-purple-500" />
              
              <div className="w-16 h-16 bg-gradient-to-br from-white/5 to-white/10 rounded-2xl flex items-center justify-center border border-white/10 shrink-0">
                {activeContact === 'email' && <Mail className="w-8 h-8 text-yellow-400" />}
                {activeContact === 'phone' && <Phone className="w-8 h-8 text-emerald-400" />}
                {activeContact === 'wechat' && <MessageCircle className="w-8 h-8 text-blue-400" />}
                {activeContact === 'web' && <Globe className="w-8 h-8 text-pink-400" />}
                {activeContact === 'book' && <BookOpen className="w-8 h-8 text-orange-400" />}
              </div>
              
              <div className="flex flex-col gap-2">
                <h3 className="text-2xl font-medium text-white">
                  {activeContact === 'email' && "联系邮件"}
                  {activeContact === 'phone' && "联系电话"}
                  {activeContact === 'wechat' && "微信咨询"}
                  {activeContact === 'web' && "官方网站"}
                  {activeContact === 'book' && "课程手册"}
                </h3>
                <p className="text-white/40 text-sm">
                  {activeContact === 'email' && "发送邮件获取更多技术细节"}
                  {activeContact === 'phone' && "直接与项目负责人沟通"}
                  {activeContact === 'wechat' && "添加微信，获取定制化 AI 进校方案"}
                  {activeContact === 'web' && "更多关于中心的在线动态"}
                  {activeContact === 'book' && "下载项目详细大纲与教学目标"}
                </p>
              </div>
              
              <div className="w-full space-y-4">
                {activeContact === 'web' ? (
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-white/30 text-sm italic">
                    网络链接暂时不适配，即将上线
                  </div>
                ) : (
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-5 flex items-center justify-between group">
                    <div className="text-left overflow-hidden">
                      <div className="text-[10px] uppercase tracking-widest text-white/20 mb-1 font-bold">
                        {activeContact === 'email' && "Email Address"}
                        {activeContact === 'phone' && "Phone Number"}
                        {activeContact === 'wechat' && "WeChat ID"}
                        {activeContact === 'book' && "Download Link"}
                      </div>
                      <div className="text-lg md:text-xl text-white font-mono tracking-tight truncate">
                        {activeContact === 'email' && "zephyr@hotmail.com"}
                        {activeContact === 'phone' && "18500902086"}
                        {activeContact === 'wechat' && "roy0505"}
                        {activeContact === 'book' && "CREATOR_CAMP_2026.pdf"}
                      </div>
                    </div>
                    {activeContact !== 'book' && (
                      <button 
                        onClick={() => handleCopy(
                          activeContact === 'email' ? "zephyr@hotmail.com" :
                          activeContact === 'phone' ? "18500902086" : "roy0505"
                        )}
                        className="bg-white/10 hover:bg-white text-white hover:text-black px-4 py-2 rounded-xl text-xs font-bold transition-all shrink-0"
                      >
                        {copyStatus}
                      </button>
                    )}
                  </div>
                )}
                
                <button 
                  onClick={() => setActiveContact(null)}
                  className="w-full bg-white text-black py-4 rounded-2xl font-bold hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl"
                >
                  确认返回
                </button>
              </div>
              
              <p className="text-[10px] uppercase tracking-[0.2em] text-white/10 font-bold">AI Native Education · Intelligence First</p>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </main>
  );
}

