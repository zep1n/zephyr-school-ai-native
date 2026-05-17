import React, { useRef, ReactNode, useState } from "react";
import { motion, useScroll, useTransform, useInView, AnimatePresence } from "motion/react";
import { 
  Mail, Phone, Globe, MessageCircle, BookOpen, 
  Cpu, Target, Award, Rocket, Users, Shield, 
  Zap, Brain, Code, Presentation, Star,
  ChevronRight, ExternalLink, Sparkles,
  CheckCircle2, Layers, Lightbulb, Workflow
} from "lucide-react";

function FadeInWhenVisible({ children, delay = 0 }: { children: ReactNode, delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
      viewport={{ once: true }}
      className="min-w-[320px] md:min-w-[420px] p-10 rounded-[3.5rem] liquid-glass border border-white/5 flex flex-col justify-between hover:bg-white/[0.07] transition-all duration-700 group cursor-default h-[460px] shadow-2xl hover:shadow-white/[0.05] snap-center"
    >
      <div>
        <div className="flex justify-between items-start mb-10">
          <span className="text-[10px] uppercase tracking-[0.3em] text-white/20 font-bold">教育阶段 Phase {idx + 1}</span>
          <div className="w-14 h-14 rounded-3xl bg-white/5 flex items-center justify-center text-white/30 group-hover:scale-110 group-hover:bg-white/10 group-hover:text-blue-400 transition-all duration-700">
            {item.icon}
          </div>
        </div>
        <div className="text-[10px] uppercase tracking-widest text-blue-500/60 mb-3 font-black">{item.day}</div>
        <h4 className="text-3xl text-white font-medium mb-6 leading-tight tracking-tight">{item.title}</h4>
      </div>
      <div className="pt-10 border-t border-white/10">
        <div className="flex items-center gap-3 mb-5">
           <div className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.8)]" />
           <span className="text-[10px] uppercase tracking-[0.3em] text-white/30 font-bold">核心成果 · KEY DELIVERABLE</span>
        </div>
        <p className="text-sm text-white/40 font-light leading-relaxed group-hover:text-white/60 transition-colors duration-700">
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
    { day: "Day 1", title: "破冰与兴趣激发", output: "小组项目初步选题卡", icon: <Zap className="w-5 h-5" /> },
    { day: "Day 2", title: "AI 协作方法训练", output: "项目需求清单、AI 协作记录", icon: <Brain className="w-5 h-5" /> },
    { day: "Day 3", title: "项目立项与角色分工", output: "项目立项计划、任务分解", icon: <Users className="w-5 h-5" /> },
    { day: "Day 4", title: "核心功能开发", output: "MVP 原型可演示", icon: <Code className="w-5 h-5" /> },
    { day: "Day 5", title: "场景扩展与交互优化", output: "进阶版项目原型", icon: <Sparkles className="w-5 h-5" /> },
    { day: "Day 6", title: "成果包装与答辩演练", output: "项目展示文档、答辩演示", icon: <Presentation className="w-5 h-5" /> },
    { day: "Day 7", title: "成果展示与总结", output: "最终展示、个人数字存档", icon: <Award className="w-5 h-5" /> },
  ];

  const outcomes = [
    {
      title: "国际权威认证",
      desc: "对接 Google, Hour of Code, Schoolhouse 等国际认证，提升留学背景加分。",
      icon: <Award className="text-yellow-400" />,
      tag: "International"
    },
    {
      title: "数字存档 (AI Agent)",
      desc: "全程数字笔记，AI 协助生成结构化文档，孩子可持续复盘的个人数字存档。",
      icon: <Cpu className="text-blue-400" />,
      tag: "Technology"
    },
    {
      title: "项目 Demo",
      desc: "亲手制作的游戏、网页或动画原型，展示功能实现与创意内容。",
      icon: <Rocket className="text-purple-400" />,
      tag: "Outcome"
    }
  ];

  const interactives = [
    { 
      title: "AI 项目协作模块", 
      desc: "体验国际大厂 Builder / Leader 架构，AI 辅助生成提示词与任务拆解。", 
      icon: <Workflow />,
      role: "AI 项目导师 - 协助学生进行任务拆解、进度管理及创意启发，模拟真实的工业级项目协作流。"
    },
    { 
      title: "实时数字记录", 
      desc: "操作与思路实时转化为数字笔记，教师随时查看进度并干预。", 
      icon: <Layers />,
      role: "AI 记录官 - 实时捕捉课堂交互数据，通过自然语言处理自动摘录核心洞察，为教师提供即时的学情分析。"
    },
    { 
      title: "Token 奖励机制", 
      desc: "课堂内部激励，鼓励有效使用 AI 推进项目，颁发专属荣誉。", 
      icon: <Star />,
      role: "AI 评估专家 - 基于多维度的交互活跃度与逻辑产出，自动算法匹配 Token 奖励，公正、客观地发现每个孩子的闪光点。"
    }
  ];

  const [activeAgent, setActiveAgent] = useState<typeof interactives[0] | null>(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <main 
      ref={containerRef}
      className="relative w-full min-h-screen overflow-x-hidden flex flex-col items-center font-sans selection:bg-white/20 selection:text-white bg-black"
    >
      {/* Preloader */}
      <AnimatePresence>
        {!isVideoLoaded && (
          <motion.div 
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="fixed inset-0 z-[200] bg-black flex flex-col items-center justify-center gap-8"
          >
            <div className="w-24 h-[1px] bg-white/10 relative overflow-hidden">
              <motion.div 
                className="absolute inset-0 bg-white"
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              />
            </div>
            <div className="text-[10px] uppercase tracking-[0.3em] text-white/40 font-bold animate-pulse">
              正在初始化 AI 教学空间 ...
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Background Layer (Fixed) */}
      <motion.div style={{ y: backgroundY }} className="fixed inset-0 z-0 h-[120vh] bg-black">
        <video
          ref={videoRef}
          className="w-full h-full object-cover opacity-80 mix-blend-normal contrast-110"
          autoPlay
          loop
          muted
          playsInline
          onCanPlayThrough={() => setIsVideoLoaded(true)}
          poster="/images/ai-native-poster.jpg"
          preload="auto"
        >
          <source src="/videos/ai-native-bg.mp4" type="video/mp4" />
        </video>
        
        {/* Darkening Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/90" />
        
        {/* Decorative Blurred Blobs (Sunlight Rays) */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[100vw] h-[60vh] bg-white/10 rounded-full blur-[200px]" />
        <div className="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] bg-orange-400/10 rounded-full blur-[160px] animate-pulse" />
      </motion.div>

      {/* Hero Section */}
      <section className="relative z-10 w-full min-h-screen flex flex-col items-center justify-center px-4 text-center">
        <FadeInWhenVisible>
          <div className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-white/60 border border-white/20 rounded-full px-6 py-2 mb-8 inline-block liquid-glass backdrop-blur-3xl shadow-2xl">
            AI 原生思维 · 沉浸式教育解决方案
          </div>
        </FadeInWhenVisible>
        
        <motion.h1 
          className="text-6xl md:text-9xl font-semibold text-white leading-tight mb-8 tracking-tighter text-glass text-glow"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          AI 原生<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/80 to-white/40 drop-shadow-2xl">教学创新计划</span>
        </motion.h1>

        <motion.p 
          className="text-lg md:text-2xl text-white/70 max-w-2xl mx-auto mb-16 font-normal leading-relaxed px-4 text-glass"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        >
          从零基础上手到项目落地 · 赋能学校课程体系<br />
          国际权威资源支撑<br />
          助力学校培养具备全球竞争力的未来人才。
        </motion.p>

        <motion.div 
          className="flex flex-col sm:flex-row gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <button className="liquid-glass text-white px-12 py-5 rounded-full text-lg font-medium hover:scale-105 transition-all group flex items-center gap-3 cursor-pointer">
            立即咨询合作方案 <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="text-white/60 px-12 py-5 rounded-full text-lg hover:text-white transition cursor-pointer flex items-center gap-2">
            下载项目大纲 <ExternalLink size={16} />
          </button>
        </motion.div>
      </section>

      {/* Stats / Concept Row */}
      <section className="relative z-10 w-full max-w-7xl mx-auto px-4 py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
           {[
             { label: "项目时长", val: "7 Days" },
             { label: "认证机构", val: "Google / Hour of Code" },
             { label: "学习模式", val: "PBL / Leader-Builder" },
             { label: "输出成果", val: "Digital Archives" }
           ].map((item, i) => (
             <div key={i} className="p-8 rounded-3xl liquid-glass border border-white/5 text-center">
               <div className="text-[10px] uppercase tracking-widest text-white/30 mb-2">{item.label}</div>
               <div className="text-xl text-white font-medium">{item.val}</div>
             </div>
           ))}
        </div>
      </section>

      {/* School Values Section */}
      <section id="values-section" className="relative z-10 w-full max-w-7xl mx-auto px-4 py-32">
        <FadeInWhenVisible>
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-6xl font-medium text-white mb-8">赋能校方：共同定义教育边界</h2>
            <p className="text-white/40 max-w-2xl mx-auto">我们不仅仅提供课程，更致力于成为学校在 AI 时代转型过程中的思维伙伴与专业支座。</p>
          </div>
        </FadeInWhenVisible>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
              title: "办学声誉增益", 
              desc: "基于国际顶级教育标准设计，支持学生未来升学背景。助力学校在数字化教育转型中走在行业前列。", 
              icon: <Globe className="text-emerald-400" /> 
            }
          ].map((item, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -10, scale: 1.02 }}
              className="p-10 rounded-[3rem] liquid-glass border border-white/5 flex flex-col gap-8 transition-all group shadow-2xl h-full"
            >
              <div className="w-16 h-16 bg-white/5 rounded-[1.5rem] flex items-center justify-center text-3xl group-hover:bg-white/10 transition-colors">
                {item.icon}
              </div>
              <div>
                <h3 className="text-2xl text-white font-medium mb-4">{item.title}</h3>
                <p className="text-white/40 leading-relaxed text-sm font-light">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 7-Day Journey (Horizontal Manual Scroll with Style) */}
      <section id="journey-section" className="relative z-10 w-full py-40 bg-white/[0.02] border-y border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 mb-20 text-center md:text-left">
          <h2 className="text-4xl md:text-6xl font-medium text-white mb-6 tracking-tight">七天。见证质变。</h2>
          <p className="text-white/40">每一天都有明确的核心活动与实物输出，让成长清晰可见。</p>
        </div>

        {/* Scrollable Container */}
        <div className="w-full overflow-x-auto custom-scrollbar pb-12 cursor-grab active:cursor-grabbing snap-x snap-mandatory scroll-smooth">
          <div className="flex gap-6 px-4 md:px-[calc((100vw-1280px)/2)]">
            {schedule.map((item, idx) => (
              <ProjectCard key={idx} item={item} idx={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* Core Outcomes Section */}
      <section className="relative z-10 w-full max-w-7xl mx-auto px-4 py-40 grid grid-cols-1 md:grid-cols-2 gap-32 items-center">
        <div>
          <FadeInWhenVisible>
            <h2 className="text-4xl md:text-6xl font-medium text-white mb-10 leading-tight">核心成果体系</h2>
            <p className="text-white/40 mb-16 text-lg">从国际认证到数字资产，我们认证每一阶段的卓越成长。</p>
          </FadeInWhenVisible>
          
          <div className="space-y-8">
            {outcomes.map((item, idx) => (
              <motion.div 
                key={idx} 
                whileHover={{ x: 10 }}
                className="flex gap-8 p-8 rounded-[2.5rem] hover:bg-white/[0.03] transition group border border-transparent hover:border-white/5"
              >
                <div className="shrink-0 w-16 h-16 bg-white/5 rounded-[1.5rem] flex items-center justify-center text-3xl">
                  {item.icon}
                </div>
                <div>
                  <div className="flex items-center gap-4 mb-3">
                    <h4 className="text-xl text-white font-medium">{item.title}</h4>
                    <span className="text-[10px] border border-white/20 px-3 py-1 rounded-full text-white/40 uppercase tracking-widest">{item.tag}</span>
                  </div>
                  <p className="text-sm text-white/40 leading-relaxed font-light">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="relative">
          <motion.div 
            initial={{ rotate: -2 }}
            whileInView={{ rotate: 0 }}
            className="aspect-[4/5] rounded-[4rem] liquid-glass p-12 flex flex-col justify-between border border-white/10 shadow-[0_0_100px_rgba(255,255,255,0.05)]"
          >
             <div>
                <h3 className="text-3xl text-white mb-6">专项荣誉</h3>
                <p className="text-base text-white/40">认可多元能力，定义的不仅是成绩，更是态度。</p>
             </div>
             
             <div className="grid grid-cols-1 gap-4">
                {["卓越创意", "卓越领航", "卓越建造", "卓越协同", "卓越表达"].map((award, i) => (
                  <div key={award} className="flex items-center justify-between p-5 rounded-3xl bg-white/5 border border-white/5 group hover:bg-white/10 transition-colors">
                    <div className="flex items-center gap-4">
                      <span className="text-white/20 text-xs font-mono">0{i+1}</span>
                      <span className="text-white/80">{award}</span>
                    </div>
                    <Star className="text-white/20 group-hover:text-yellow-400/40 transition-colors" size={16} />
                  </div>
                ))}
             </div>
             
             {/* Robot Tech Illustration (SVG) */}
             <div className="absolute -right-20 -bottom-20 opacity-10 rotate-12 pointer-events-none scale-150">
                <Cpu size={320} strokeWidth={0.5} className="text-white" />
             </div>
          </motion.div>
        </div>
      </section>

      {/* Campus Interactive Section */}
      <section id="interactive-section" className="relative z-10 w-full bg-white/[0.02] py-40">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-6xl font-medium text-white mb-8 tracking-tight">课堂互动生态</h2>
            <p className="text-white/40">AI 深度介入教学全过程，打造高效、透明、互动的学习场景。</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {interactives.map((item, i) => (
              <div key={i} className="p-12 rounded-[3.5rem] bg-black/40 border border-white/5 hover:border-white/20 transition-all text-center flex flex-col items-center justify-between gap-8 group min-h-[520px] shadow-2xl">
                <div className="flex flex-col items-center gap-8 w-full">
                  <div className="w-20 h-20 bg-white/5 rounded-[2rem] flex items-center justify-center group-hover:bg-blue-600/20 transition-all shadow-inner">
                    <div className="text-white/60 group-hover:text-blue-400 transition-colors scale-150">
                      {item.icon}
                    </div>
                  </div>
                  <div className="w-full">
                    <div className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-[10px] uppercase tracking-[0.2em] text-blue-400 mb-4 font-black shadow-sm">
                      AGENT: {item.role.split(' - ')[0]}
                    </div>
                    <h4 className="text-2xl text-white font-medium mb-4">{item.title}</h4>
                    <p className="text-sm text-white/40 font-light leading-7 px-2">{item.desc}</p>
                  </div>
                </div>
                
                <button 
                  onClick={() => setActiveAgent(item)}
                  className="w-full py-4 rounded-2xl border border-white/10 text-white/60 text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-all font-bold flex items-center justify-center gap-2 group/btn"
                >
                  启动 AI 代理 <Sparkles size={14} className="group-hover/btn:rotate-12 transition-transform" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* AI Agent Modal */}
        <AnimatePresence>
          {activeAgent && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setActiveAgent(null)}
                className="absolute inset-0 bg-black/80 backdrop-blur-xl"
              />
              <motion.div 
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                className="relative w-full max-w-lg p-12 rounded-[4rem] liquid-glass border border-white/10 shadow-2xl overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 via-purple-500 to-orange-500" />
                
                <div className="mb-10 flex justify-between items-start">
                  <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center text-blue-400 text-2xl">
                    {activeAgent.icon}
                  </div>
                  <button 
                    onClick={() => setActiveAgent(null)}
                    className="text-white/20 hover:text-white transition-colors"
                  >
                    <Users size={24} />
                  </button>
                </div>
                
                <h3 className="text-3xl text-white font-medium mb-6">已识别 AI 代理角色</h3>
                <div className="p-8 rounded-3xl bg-white/5 border border-white/10 mb-8">
                  <p className="text-lg text-white/80 leading-relaxed font-light italic">
                    “{activeAgent.role}”
                  </p>
                </div>
                
                <div className="flex items-center gap-3 mb-10">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-[10px] uppercase tracking-widest text-white/40 font-bold">代理状态：运行中 · ACTIVE</span>
                </div>
                
                <button 
                  onClick={() => setActiveAgent(null)}
                  className="w-full py-5 rounded-full bg-white text-black font-bold text-sm tracking-widest uppercase hover:scale-[1.02] transition-transform"
                >
                  确认并继续协同
                </button>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </section>

      {/* Call to Action Section */}
      <section className="relative z-10 w-full py-60 flex flex-col items-center text-center px-4">
        <FadeInWhenVisible>
          <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mb-12 animate-bounce">
            <Rocket className="text-white/60" />
          </div>
          <h2 className="text-5xl md:text-8xl font-medium text-white mb-10 tracking-tighter">赋能学校，定义未来</h2>
          <p className="text-xl text-white/40 mb-16 max-w-xl">
            与我们合作，为您的学生引入最前沿的 AI 原生教育体系。现已开放暑期及秋季学期合作预约。
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <button className="bg-white text-black px-16 py-6 rounded-full text-xl font-bold hover:scale-105 active:scale-95 transition-all shadow-[0_0_50px_rgba(255,255,255,0.3)]">
              预约合作咨询
            </button>
            <button className="liquid-glass text-white px-16 py-6 rounded-full text-xl font-medium border border-white/20">
              了解课程详情
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
        className="liquid-glass w-full rounded-t-[5rem] p-12 md:p-32 text-white/70 relative z-10 overflow-hidden"
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-20 mb-32">
          <div className="md:col-span-5">
            <div className="flex items-center mb-10">
              <div className="bg-white/10 p-3 rounded-2xl">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 256 256" fill="white">
                  <path d="M 4.688 136 C 68.373 136 120 187.627 120 251.312 C 120 252.883 119.967 254.445 119.905 256 L 0 256 L 0 136.096 C 1.555 136.034 3.117 136 4.688 136 Z M 251.312 136 C 252.883 136 254.445 136.034 256 136.096 L 256 256 L 136.095 256 C 136.032 254.438 136.001 252.875 136 251.312 C 136 187.627 187.627 136 251.312 136 Z M 119.905 0 C 119.967 1.555 120 3.117 120 4.688 C 120 68.373 68.373 120 4.687 120 C 3.117 120 1.555 119.967 0 119.905 L 0 0 Z M 256 119.905 C 254.445 119.967 252.883 120 251.312 120 C 187.627 120 136 68.373 136 4.687 C 136 3.117 136.033 1.555 136.095 0 L 256 0 Z" />
                </svg>
              </div>
              <span className="text-3xl font-medium text-white ml-6 tracking-tighter">AI 教学创新中心</span>
            </div>
            <p className="text-base leading-8 text-white/40 mb-12 max-w-sm font-light">
              致力于为学校提供 AI 原生教育全栈解决方案。通过沉浸式课程，助力培养具备未来核心竞争力的顶尖人才。
            </p>
            <div className="flex gap-6">
               {[Mail, Phone, Globe, MessageCircle, BookOpen].map((Icon, i) => (
                 <a key={i} href="#" className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all group shadow-xl">
                   <Icon size={20} className="hover:scale-110 transition-transform" />
                 </a>
               ))}
            </div>
          </div>

          <div className="md:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-16">
            <div>
              <h3 className="text-sm uppercase tracking-[0.2em] text-white font-bold mb-10">项目详情</h3>
              <ul className="space-y-6">
                {["AI原生思维", "项目驱动学习", "Leader-Builder制", "七天沉浸营", "国际标准设计"].map((l) => (
                  <li key={l}><a href="#" className="text-sm text-white/30 hover:text-white transition-colors flex items-center gap-2 group"><ChevronRight size={10} className="opacity-0 group-hover:opacity-100 transition-all -ml-3 group-hover:ml-0" /> {l}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm uppercase tracking-[0.2em] text-white font-bold mb-10">认证与合作</h3>
              <ul className="space-y-6">
                {["AI创造营认证", "数字存档", "项目Demo展示", "国际权威证书", "校方合作方案"].map((l) => (
                  <li key={l}><a href="#" className="text-sm text-white/30 hover:text-white transition-colors flex items-center gap-2 group"><ChevronRight size={10} className="opacity-0 group-hover:opacity-100 transition-all -ml-3 group-hover:ml-0" /> {l}</a></li>
                ))}
              </ul>
            </div>
            <div className="col-span-2 md:col-span-1">
              <h3 className="text-sm uppercase tracking-[0.2em] text-white font-bold mb-10">专项荣誉</h3>
              <div className="flex flex-wrap gap-2">
                {["卓越创意", "卓越领航", "卓越建造", "卓越表达"].map((l) => (
                  <span key={l} className="text-[10px] uppercase border border-white/10 px-3 py-1.5 rounded-full text-white/30">{l}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-6">
            <p className="text-[10px] uppercase tracking-[0.4em] text-white/20 whitespace-nowrap">
              © 2026 AI NATIVE CREATOR CAMP
            </p>
            <div className="hidden md:block w-px h-4 bg-white/10" />
            <p className="text-[10px] uppercase tracking-[0.4em] text-white/20">
              XIAMEN · CHINA
            </p>
          </div>
          <div className="flex gap-12 items-center text-[10px] uppercase tracking-[0.4em] text-white/20">
             <a href="#" className="hover:text-white transition-colors">Privacy</a>
             <a href="#" className="hover:text-white transition-colors">Terms</a>
             <div className="w-12 h-1 bg-white/5 rounded-full" />
          </div>
        </div>
      </motion.footer>
    </main>
  );
}

