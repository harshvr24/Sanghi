'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Target, Users, CheckCircle2 } from 'lucide-react';
import { FadeIn } from '@/components/ui/FadeIn';
import { StaggerContainer, StaggerItem } from '@/components/ui/StaggerContainer';

export default function AboutPage() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <FadeIn>
          <div className="max-w-3xl mb-6">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="text-primary font-bold tracking-[0.3em] uppercase text-xs mb-4 block"
            >
              Our Story
            </motion.span>
            <h1 className="text-5xl font-bold mb-8">
              Engineering Excellence for over a decade.
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              M/s Sanghi Pipes & Tubes, based in Kanpur, Uttar Pradesh, is a pioneer in the manufacturing
              and supply of high-grade industrial piping solutions.
            </p>
          </div>
        </FadeIn>

        {/* Animated divider */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.21, 0.47, 0.32, 0.98] }}
          style={{ originX: 0 }}
          className="h-px bg-gradient-to-r from-primary via-primary/40 to-transparent mb-20"
        />

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
          <FadeIn direction="right">
            <div className="relative">
              <div className="absolute -inset-4 bg-primary/20 rounded-3xl blur-3xl" />
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 200, damping: 22 }}
                className="relative overflow-hidden rounded-[2rem] shadow-2xl"
              >
                <motion.img
                  initial={{ scale: 1.08 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: [0.21, 0.47, 0.32, 0.98] }}
                  src="https://images.unsplash.com/photo-1531973576160-7125cd663d86?auto=format&fit=crop&q=80"
                  alt="Our Facility"
                  className="w-full"
                />
              </motion.div>
            </div>
          </FadeIn>

          <FadeIn direction="left">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Journey</h2>
              <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
                <p>
                  We have developed our cutting-edge Centrifugally Cast Ductile Iron Double Flange Pipes
                  manufacturing at Kanpur. Our facility is equipped with modern machinery to ensure the
                  highest standards of precision and durability.
                </p>
                <p>
                  As a recipient of the prestigious BIS Licence from the Bureau of Indian Standards, we
                  have established ourselves as a benchmark for quality in the country.
                </p>
                <StaggerContainer className="pt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {[
                    'Bureau of Indian Standards (BIS)',
                    'ISO 9001:2015 Certified',
                    'Govt. Approved Supplier',
                    'Quality Assured Materials',
                  ].map((cert) => (
                    <StaggerItem key={cert}>
                      <motion.div
                        whileHover={{ x: 4 }}
                        transition={{ type: 'spring', stiffness: 400, damping: 22 }}
                        className="flex items-center gap-3 text-foreground font-bold"
                      >
                        <motion.div
                          whileHover={{ scale: 1.2, rotate: 10 }}
                          transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                        >
                          <CheckCircle2 className="text-primary" size={20} />
                        </motion.div>
                        <span>{cert}</span>
                      </motion.div>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Values */}
        <FadeIn>
          <div className="text-center mb-16">
            <span className="text-primary font-bold tracking-[0.3em] uppercase text-xs mb-4 block">
              What We Stand For
            </span>
            <h2 className="text-4xl font-bold">Our Core Values</h2>
          </div>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            {
              icon: <Target className="text-primary" size={40} />,
              title: 'Our Mission',
              desc: 'To provide innovative and sustainable infrastructure solutions that empower communities and industries across the nation.',
            },
            {
              icon: <Shield className="text-primary" size={40} />,
              title: 'Our Quality',
              desc: 'Every component fulfills universal requirements. We control and test every stage from raw material selection to final inspection.',
            },
            {
              icon: <Users className="text-primary" size={40} />,
              title: 'Customer-Centric',
              desc: 'We focus on understanding individual needs, ensuring timely deliveries at competitive prices with outstanding service.',
            },
          ].map((v, i) => (
            <StaggerItem key={i}>
              <motion.div
                whileHover={{ y: -10, boxShadow: '0 24px 60px -12px rgba(0,0,0,0.2)' }}
                transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                className="p-10 bg-card border border-border rounded-3xl h-full shadow-sm transition-colors hover:border-primary/30"
              >
                <motion.div
                  whileHover={{ scale: 1.15, rotate: 6 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                  className="mb-6 inline-block"
                >
                  {v.icon}
                </motion.div>
                <h3 className="text-2xl font-bold mb-4">{v.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{v.desc}</p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </div>
  );
}
