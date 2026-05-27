'use client';

import React, { Suspense } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Factory, Award, CheckCircle2, Layers, GitBranch, Gauge, Wrench } from 'lucide-react';
import { products, categories } from '@/data/products';
import { FadeIn } from '@/components/ui/FadeIn';
import { StaggerContainer, StaggerItem } from '@/components/ui/StaggerContainer';
import { PipeShowcase3D } from '@/components/ui/PipeShowcase3D';
import { ContainerScroll } from '@/components/ui/container-scroll-animation';
import { InteractiveProductModel } from '@/components/ui/InteractiveProductModel';

const featuredProductModelMap: Record<string, { type: string; color: string; metalness: number; roughness: number }> = {
  'di-double-flange-pipe':  { type: 'flanged-pipe', color: '#1a2535', metalness: 0.95, roughness: 0.28 },
  'di-spun-pipe-ss':        { type: 'ss-pipe',      color: '#1a2535', metalness: 0.95, roughness: 0.28 },
  'ci-double-flange-pipe':  { type: 'flanged-pipe', color: '#2d2d2d', metalness: 0.72, roughness: 0.65 },
  'ci-spun-pipe-ss':        { type: 'ss-pipe',      color: '#2d2d2d', metalness: 0.72, roughness: 0.65 },
};

export default function Home() {
  const featuredProducts = products.slice(0, 4);

  return (
    <div className="bg-slate-950">
      {/* 3D Hero Section */}
      <Suspense
        fallback={
          <div className="h-[450vh] w-full bg-slate-950 relative">
            <div className="sticky top-0 h-screen w-full overflow-hidden">
              <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(59,130,246,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.055)_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_78%)]" />
              <div className="absolute inset-0 flex items-start pt-28 justify-center px-8">
                <div className="text-center relative z-10">
                  <span className="text-primary font-black tracking-[1em] uppercase text-xs md:text-sm mb-4 block">
                    Precision // Resilience // Quality
                  </span>
                  <h1 className="text-[3rem] md:text-[6rem] font-black text-white tracking-[-0.05em] uppercase italic leading-[0.85]">
                    SANGHI
                    <br />
                    <span className="stroke-text text-transparent not-italic block mt-2">
                      INDUSTRIES
                    </span>
                  </h1>
                  <div className="flex items-center justify-center gap-8 mt-5">
                    <div className="h-px w-24 bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
                    <p className="text-sm text-slate-500 font-light tracking-[0.8em] uppercase">EST. 2008</p>
                    <div className="h-px w-24 bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
                  </div>
                  <div className="mt-10 flex items-center justify-center gap-2">
                    {[0, 150, 300].map((delay) => (
                      <div
                        key={delay}
                        className="w-1.5 h-1.5 rounded-full bg-primary animate-bounce"
                        style={{ animationDelay: `${delay}ms` }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        }
      >
        <PipeShowcase3D />
      </Suspense>

      {/* Transition Section: Seamless blend from 3D into Content */}
      <section className="relative z-30 bg-slate-950">
        <div className="max-w-6xl mx-auto px-4 -mt-32 pb-32">
          <StaggerContainer
            className="py-16 bg-primary text-primary-foreground rounded-[3rem] shadow-[0_0_100px_rgba(59,130,246,0.3)] overflow-hidden relative"
            staggerChildren={0.15}
          >
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 relative z-10 px-12">
              {[
                { label: 'Years Experience', value: '15+' },
                { label: 'Products In Range', value: '500+' },
                { label: 'Clients Globally', value: '1200+' },
                { label: 'Quality Standards', value: 'BIS/ISO' }
              ].map((stat, i) => (
                <StaggerItem key={i} className="text-center">
                  <div className="text-5xl font-black mb-2 italic tracking-tighter">{stat.value}</div>
                  <div className="text-[10px] uppercase tracking-[0.3em] opacity-80 font-black">{stat.label}</div>
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>
        </div>
      </section>

      <div className="bg-slate-950 text-white">
        {/* Featured Categories */}
        <section className="py-32 max-w-7xl mx-auto px-6 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-primary to-transparent" />
          <FadeIn>
            <div className="text-center mb-20">
              <span className="text-primary font-bold tracking-[0.3em] uppercase text-xs mb-4 block">Product Categories</span>
              <h2 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter uppercase italic">Our Core <span className="text-primary not-italic">Expertise</span></h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We specialize in providing end-to-end solutions for fluid transportation and industrial infrastructure.
              </p>
            </div>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {categories.slice(0, 3).map((cat) => (
              <StaggerItem key={cat}>
                <motion.div
                  whileHover="hovered"
                  initial="idle"
                  className="group relative h-[500px] rounded-[3rem] overflow-hidden cursor-pointer shadow-2xl border border-white/5 hover:border-primary/20 transition-colors duration-500"
                >
                  <motion.div
                    variants={{ idle: { opacity: 0.4 }, hovered: { opacity: 0.15 } }}
                    transition={{ duration: 0.4 }}
                    className="absolute inset-0 bg-slate-900 z-10"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent z-20" />
                  <motion.div
                    variants={{ idle: { scale: 1 }, hovered: { scale: 1.1 } }}
                    transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
                    className="absolute inset-0"
                  >
                    <Image
                      src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800"
                      alt={cat}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover"
                    />
                  </motion.div>
                  <div className="absolute bottom-0 left-0 p-8 z-30">
                    <motion.h3
                      variants={{ idle: { y: 0 }, hovered: { y: -4 } }}
                      transition={{ duration: 0.3 }}
                      className="text-2xl font-bold text-white mb-2"
                    >
                      {cat}
                    </motion.h3>
                    <Link
                      href={`/products?cat=${cat}`}
                      className="text-primary-foreground/80 font-semibold flex items-center gap-2"
                    >
                      View Range
                      <motion.div
                        variants={{ idle: { x: 0 }, hovered: { x: 5 } }}
                        transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                      >
                        <ArrowRight size={18} />
                      </motion.div>
                    </Link>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </section>

        {/* Trust Section */}
        <section className="py-32 bg-slate-900/30 overflow-hidden relative">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20" />
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center relative z-10">
            <FadeIn direction="right">
              <div>
                <span className="text-primary font-bold tracking-[0.3em] uppercase text-xs mb-6 block">Legacy of Excellence</span>
                <h2 className="text-5xl font-black mb-8 italic tracking-tighter uppercase leading-[0.9]">Built on <span className="text-primary not-italic">Trust</span> and Quality</h2>
                <p className="text-slate-400 mb-12 leading-relaxed text-xl font-medium">
                  Sanghi Pipes & Tubes has received the prestigious BIS License from the Bureau of Indian Standards (BIS). We are recognized as one of the most reliable manufacturers of Centrifugally Cast Ductile Iron Double Flange Pipes in the country.
                </p>

                <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {[
                    { icon: <ShieldCheck className="text-primary" size={32} />, title: "Certified Quality", desc: "BIS and ISO certified products" },
                    { icon: <Factory className="text-primary" size={32} />, title: "Modern Facility", desc: "State-of-the-art manufacturing" },
                    { icon: <Award className="text-primary" size={32} />, title: "Industry Leader", desc: "Over 15 years of market presence" },
                    { icon: <CheckCircle2 className="text-primary" size={32} />, title: "Govt. Approved", desc: "Trusted by Indian Govt. departments" }
                  ].map((feature, i) => (
                    <StaggerItem key={i} className="flex gap-6 group">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className="p-4 bg-slate-950 rounded-2xl shadow-xl border border-white/5 h-fit group-hover:border-primary/50 transition-colors"
                      >
                        {feature.icon}
                      </motion.div>
                      <div>
                        <h4 className="font-bold text-lg mb-1">{feature.title}</h4>
                        <p className="text-sm text-slate-500 font-medium">{feature.desc}</p>
                      </div>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </div>
            </FadeIn>

            <FadeIn direction="left" className="relative">
              <div className="absolute -inset-4 bg-primary/20 rounded-3xl blur-3xl" />
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl"
              >
                <Image
                  src="https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&q=80"
                  alt="Factory"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </motion.div>
            </FadeIn>
          </div>
        </section>

        {/* Catalog Scroll Showcase */}
        <section className="bg-slate-950 overflow-hidden">
          <ContainerScroll
            titleComponent={
              <div className="space-y-4">
                <motion.span
                  initial={{ opacity: 0, y: 16, filter: 'blur(6px)' }}
                  whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
                  className="text-primary font-bold tracking-[0.3em] uppercase text-xs block"
                >
                  Interactive Product Catalog
                </motion.span>
                <motion.h2
                  initial={{ opacity: 0, y: 28, filter: 'blur(8px)' }}
                  whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.75, delay: 0.08, ease: [0.21, 0.47, 0.32, 0.98] }}
                  className="text-5xl md:text-7xl font-black text-white italic tracking-tighter uppercase leading-[0.85]"
                >
                  500+ Parts. <br />
                  <span className="text-primary not-italic">One Trusted</span> <br />
                  Source.
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20, filter: 'blur(4px)' }}
                  whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.65, delay: 0.18, ease: [0.21, 0.47, 0.32, 0.98] }}
                  className="text-slate-400 text-lg mt-2 max-w-2xl mx-auto leading-relaxed"
                >
                  From ductile iron pipes to precision-engineered valves — every component is BIS-certified and built for India&apos;s toughest infrastructure demands.
                </motion.p>
              </div>
            }
          >
            {/* Card interior — styled as a product dashboard */}
            <div className="h-full flex flex-col p-4 md:p-6 gap-3 md:gap-4 select-none">

              {/* Chrome bar */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex items-center justify-between shrink-0"
              >
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                  <span className="text-slate-600 text-[10px] font-mono ml-3 hidden md:block">
                    sanghi-catalog · 500+ products · BIS/ISO certified
                  </span>
                </div>
                <div className="flex gap-2">
                  <span className="px-2.5 py-1 bg-primary/15 text-primary text-[9px] font-black rounded-full uppercase tracking-widest border border-primary/20">
                    BIS Licensed
                  </span>
                  <span className="px-2.5 py-1 bg-green-500/10 text-green-400 text-[9px] font-black rounded-full uppercase tracking-widest border border-green-500/20">
                    ISO 9001
                  </span>
                </div>
              </motion.div>

              {/* Category cards */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3 flex-1 min-h-0">
                {[
                  {
                    Icon: Layers,
                    cat: 'Ductile Iron Pipes',
                    spec: 'DN 80 – 1200 mm',
                    skus: '15+',
                    fill: 78,
                    gradient: 'from-blue-900/40 to-slate-900/0',
                    accent: 'text-blue-400',
                    accentBg: 'bg-blue-400/10',
                    accentGlow: 'rgba(59,130,246,0.4)',
                    bar: 'bg-blue-500',
                  },
                  {
                    Icon: GitBranch,
                    cat: 'Cast Iron Pipes',
                    spec: 'Class LA – D',
                    skus: '12+',
                    fill: 62,
                    gradient: 'from-slate-800/60 to-slate-900/0',
                    accent: 'text-slate-300',
                    accentBg: 'bg-slate-300/10',
                    accentGlow: 'rgba(203,213,225,0.3)',
                    bar: 'bg-slate-400',
                  },
                  {
                    Icon: Wrench,
                    cat: 'DI Fittings',
                    spec: 'K9 / K7 Grade',
                    skus: '20+',
                    fill: 88,
                    gradient: 'from-indigo-900/40 to-slate-900/0',
                    accent: 'text-indigo-400',
                    accentBg: 'bg-indigo-400/10',
                    accentGlow: 'rgba(129,140,248,0.4)',
                    bar: 'bg-indigo-500',
                  },
                  {
                    Icon: Gauge,
                    cat: 'Industrial Valves',
                    spec: 'PN 10 – PN 25',
                    skus: '8+',
                    fill: 55,
                    gradient: 'from-violet-900/30 to-slate-900/0',
                    accent: 'text-violet-400',
                    accentBg: 'bg-violet-400/10',
                    accentGlow: 'rgba(167,139,250,0.4)',
                    bar: 'bg-violet-500',
                  },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20, filter: 'blur(4px)' }}
                    whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.35 + i * 0.07, duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
                    whileHover={{ scale: 1.03, borderColor: 'rgba(59,130,246,0.3)' }}
                    className={`rounded-xl md:rounded-2xl bg-gradient-to-br ${item.gradient}
                                border border-white/5 flex flex-col
                                transition-colors cursor-default overflow-hidden relative`}
                  >
                    <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500 bg-primary/5 pointer-events-none" />

                    {/* Top: icon + SKU label + category name */}
                    <div className="relative z-10 p-3 md:p-4">
                      <div className="flex items-center gap-1.5 mb-1.5">
                        <item.Icon size={12} className={`${item.accent} opacity-70`} />
                        <span className="text-[9px] text-primary font-black uppercase tracking-[0.2em]">
                          {item.skus} SKUs
                        </span>
                      </div>
                      <h4 className="text-white font-bold text-xs md:text-sm leading-tight">
                        {item.cat}
                      </h4>
                    </div>

                    {/* Center: large glowing icon */}
                    <div className="relative z-10 flex-1 flex items-center justify-center py-2">
                      <div
                        className={`p-4 md:p-5 rounded-2xl ${item.accentBg} border border-white/5`}
                        style={{ filter: `drop-shadow(0 0 18px ${item.accentGlow})` }}
                      >
                        <item.Icon size={32} className={item.accent} />
                      </div>
                    </div>

                    {/* Bottom: spec + fill bar */}
                    <div className="relative z-10 p-3 md:p-4">
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-[9px] md:text-[10px] text-slate-500 font-mono">{item.spec}</span>
                        <span className="text-[9px] text-slate-500 font-black">{item.fill}%</span>
                      </div>
                      <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${item.fill}%` }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.55 + i * 0.1, duration: 0.9, ease: [0.21, 0.47, 0.32, 0.98] }}
                          className={`h-full ${item.bar} rounded-full`}
                        />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Stats row */}
              <div className="grid grid-cols-3 md:grid-cols-6 gap-2 shrink-0">
                {[
                  { label: 'Experience', value: '15+ Yrs' },
                  { label: 'Products', value: '500+' },
                  { label: 'Clients', value: '1,200+' },
                  { label: 'Standard', value: 'BIS/ISO' },
                  { label: 'Lead Time', value: '7–14 Days' },
                  { label: 'Support', value: 'Mon–Sat' },
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.88 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + i * 0.045, duration: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}
                    className="bg-white/[0.03] border border-white/5 rounded-xl p-2 md:p-3 text-center"
                  >
                    <div className="text-white font-black text-xs md:text-sm">{stat.value}</div>
                    <div className="text-slate-600 text-[8px] md:text-[9px] uppercase tracking-widest mt-0.5">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>

            </div>
          </ContainerScroll>
        </section>

        {/* Featured Products */}
        <section className="py-32 max-w-7xl mx-auto px-6">
          <FadeIn>
            <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
              <div className="max-w-2xl">
                <span className="text-primary font-bold tracking-[0.3em] uppercase text-xs mb-4 block">Product Selection</span>
                <h2 className="text-5xl md:text-7xl font-black mb-6 italic tracking-tighter uppercase leading-[0.8]">The <span className="text-primary not-italic">Standard</span> Of Quality</h2>
                <p className="text-slate-400 text-xl font-medium leading-relaxed">Premium products engineered for the world&apos;s most demanding infrastructure projects.</p>
              </div>
              <Link href="/products" className="group flex items-center gap-4 bg-primary text-white px-8 py-4 rounded-full font-bold hover:scale-105 transition-all">
                View Catalog <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <StaggerItem key={product.id}>
                <motion.div
                  whileHover={{ y: -15 }}
                  className="bg-slate-900/50 border border-white/5 rounded-[2.5rem] p-8 shadow-2xl hover:border-primary/30 transition-all h-full flex flex-col group"
                >
                  <div className="aspect-square bg-slate-950 rounded-[2rem] mb-8 overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10 pointer-events-none" />
                    <InteractiveProductModel
                      {...(featuredProductModelMap[product.id] ?? { type: 'ss-pipe', color: '#cbd5e1', metalness: 1, roughness: 0.1 })}
                    />
                  </div>
                  <div className="text-[10px] font-black text-primary mb-2 uppercase tracking-[0.2em]">{product.category}</div>
                  <h3 className="font-black text-xl mb-6 text-white uppercase italic tracking-tight">{product.name}</h3>
                  <div className="mt-auto">
                    <Link
                      href={`/products?id=${product.id}`}
                      className="w-full py-4 bg-white/5 border border-white/10 text-white font-bold rounded-2xl hover:bg-primary hover:border-primary transition-all text-center block text-sm uppercase tracking-widest"
                    >
                      View Details
                    </Link>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-4">
          <FadeIn>
            <motion.div
              whileHover="hovered"
              initial="idle"
              className="max-w-7xl mx-auto bg-slate-950 rounded-[2rem] p-12 md:p-20 relative overflow-hidden text-center md:text-left border border-white/5 hover:border-primary/20 transition-colors duration-500"
            >
              <motion.div
                variants={{
                  idle: { opacity: 0.6, scale: 1 },
                  hovered: { opacity: 1, scale: 1.3 },
                }}
                transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
                className="absolute top-0 right-0 w-1/2 h-full bg-primary/20 blur-[120px] pointer-events-none"
              />
              <motion.div
                variants={{
                  idle: { opacity: 0 },
                  hovered: { opacity: 0.4 },
                }}
                transition={{ duration: 0.5 }}
                className="absolute bottom-0 left-0 w-1/3 h-2/3 bg-secondary/15 blur-[100px] pointer-events-none"
              />
              <div className="relative z-10">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                  Ready to start your next <br /> infrastructure project?
                </h2>
                <p className="text-slate-400 text-lg mb-10 max-w-xl">
                  Get in touch with our technical experts for customized solutions and competitive pricing.
                </p>
                <div className="flex flex-wrap justify-center md:justify-start gap-4">
                  <motion.div
                    whileHover={{ scale: 1.06, boxShadow: '0 16px 40px -8px rgba(249,115,22,0.5)' }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                  >
                    <Link
                      href="/contact"
                      className="bg-secondary text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg shadow-secondary/20 block"
                    >
                      Get a Quote
                    </Link>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.06, backgroundColor: 'rgba(255,255,255,0.2)' }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                  >
                    <a
                      href="tel:+917971549587"
                      className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-xl font-bold text-lg block"
                    >
                      Call Us
                    </a>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </FadeIn>
        </section>
      </div>
    </div>
  );
}
