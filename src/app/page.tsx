"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Brain,
  FlaskConical,
  Leaf,
  Settings,
  TrendingUp,
  Box,
  Network,
  Zap,
  BookOpenText,
  Workflow,
  BarChart3,
  Rocket,
  Code2,
} from "lucide-react";

// Minimal in-file UI primitives (so this runs without extra component deps)
function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`rounded-2xl shadow-sm border border-white/10 bg-white/5 backdrop-blur-md p-5 ${className}`}>{children}</div>
  );
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-[10px] tracking-wide font-semibold px-2 py-1 rounded-md border border-white/10 bg-white/10">
      {children}
    </span>
  );
}

const tiles = [
  {
    label: "CroweCode IDE",
    href: "/ide",
    icon: Code2,
    desc: "Proprietary AI-powered development environment with CroweCode Intelligence.",
    tags: ["[AI_CODING]", "[PROPRIETARY]"]
  },
  {
    label: "CLX Extracts",
    href: "/clx",
    icon: FlaskConical,
    desc: "Dual-phase extract tracker, LBR™ scoring, tiering.",
    tags: ["[EXTRACT_TIER]", "[PHASE]"]
  },
  {
    label: "Substrate Matrix",
    href: "/substrate",
    icon: Box,
    desc: "Species-tuned recipes, hydration + gypsum autopilot.",
    tags: ["[SUBSTRATE]", "[YIELD]"]
  },
  {
    label: "Grow Ops (Sprint)",
    href: "/sprint",
    icon: Workflow,
    desc: "Weekly block schedule, lab→sterilization→shipping.",
    tags: ["[PHASE]", "[CONSISTENCY]"]
  },
  {
    label: "EI Simulator",
    href: "/ei",
    icon: Network,
    desc: "Mycelium EI site-fit & remediation planner.",
    tags: ["[EQUIPMENT]", "[ROI_FACTOR]"]
  },
  {
    label: "ELN / Lab Notebook",
    href: "/eln",
    icon: BookOpenText,
    desc: "Cultures, plates, LC runs, batch notes.",
    tags: ["[MUSHROOM]", "[PROBLEM]"]
  },
  {
    label: "Analytics",
    href: "/analytics",
    icon: BarChart3,
    desc: "Yields, contamination rate, setpoint drift.",
    tags: ["[IMPROVE]", "[SCALE]"]
  },
  {
    label: "Agriculture Intelligence",
    href: "/agriculture",
    icon: Leaf,
    desc: "IoT sensors, voice entry, crop tracking, ML predictions.",
    tags: ["[IOT]", "[VOICE]"]
  },
  {
    label: "ML Lab",
    href: "/ml-lab",
    icon: Brain,
    desc: "Machine learning development, Jupyter notebooks, model training.",
    tags: ["[ML]", "[DATA_SCIENCE]"]
  },
  {
    label: "Automations",
    href: "/automations",
    icon: Zap,
    desc: "HVAC, humidifiers, CO₂ exchange, alerts.",
    tags: ["[AUTOMATION]", "[SAFETY]"]
  },
  {
    label: "Settings",
    href: "/settings",
    icon: Settings,
    desc: "Keys, models, orgs, roles, data retention.",
    tags: ["[PRIVACY]", "[PROVENANCE]"]
  },
];

export default function CroweLogicDashboard() {
  return (
    <div className="min-h-dvh bg-gradient-to-b from-zinc-900 via-zinc-950 to-black text-zinc-100">
      {/* Top Bar */}
      <header className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-black/20 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-5 py-4 flex items-center gap-3">
          <div className="flex items-center gap-3">
            <div className="relative h-10 w-10 rounded-xl overflow-hidden bg-white/10">
              <Image
                src="/crowe-avatar.png"
                alt="Crowe Logic Avatar"
                width={40}
                height={40}
                className="object-cover"
                priority
              />
            </div>
            <div>
              <h1 className="text-lg font-semibold leading-tight">CroweCode™ Platform</h1>
              <p className="text-xs text-white/70">Proprietary AI Development System • Next-Gen Intelligence</p>
            </div>
          </div>
          <div className="ml-auto flex items-center gap-3">
            <Link
              href="/quick-start"
              className="rounded-xl px-4 py-2 text-sm bg-white/10 hover:bg-white/15 border border-white/10"
            >
              Quick Start
            </Link>
            <Link
              href="/deploy"
              className="rounded-xl px-4 py-2 text-sm bg-emerald-500/90 hover:bg-emerald-500 text-black font-medium"
            >
              Deploy
            </Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-5 pt-10">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
        >
          <Card className="p-6 bg-white/[0.04]">
            <div className="flex flex-col md:flex-row md:items-center gap-5">
              <div className="flex-1">
                <h2 className="text-2xl md:text-3xl font-semibold">MVP Dashboard</h2>
                <p className="text-sm md:text-base text-white/80 mt-2">
                  Operate cultivation, extraction, and environmental intelligence from one pane of glass. 
                  Built for speed, scale, and trust‑by‑design.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <Badge>[CONSISTENCY]</Badge>
                  <Badge>[ADAPTABILITY]</Badge>
                  <Badge>[RESOURCEFULNESS]</Badge>
                  <Badge>[GRIT]</Badge>
                  <Badge>[LONG_TERM_VISION]</Badge>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-3 text-center text-xs">
                <div className="rounded-xl p-3 bg-white/5 border border-white/10">
                  <p className="text-white/70">Active Batches</p>
                  <p className="text-xl font-semibold">12</p>
                </div>
                <div className="rounded-xl p-3 bg-white/5 border border-white/10">
                  <p className="text-white/70">Contam Rate</p>
                  <p className="text-xl font-semibold">1.8%</p>
                </div>
                <div className="rounded-xl p-3 bg-white/5 border border-white/10">
                  <p className="text-white/70">Avg Yield / Block</p>
                  <p className="text-xl font-semibold">3.1 lb</p>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </section>

      {/* Tiles */}
      <section className="max-w-7xl mx-auto px-5 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {tiles.map((t, i) => (
            <motion.div
              key={t.label}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: i * 0.03 }}
            >
              <Link href={t.href} className="block">
                <Card className="h-full group hover:border-white/20 hover:bg-white/10 transition-colors">
                  <div className="flex items-start gap-3">
                    <div className="h-10 w-10 rounded-xl bg-white/10 grid place-items-center group-hover:bg-white/15 transition-colors">
                      <t.icon className="h-5 w-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold leading-tight truncate">{t.label}</h3>
                      <p className="text-xs text-white/75 mt-1 line-clamp-2">{t.desc}</p>
                    </div>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {t.tags.map(tag => (
                      <Badge key={tag}>{tag}</Badge>
                    ))}
                  </div>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Quick Actions */}
      <section className="max-w-7xl mx-auto px-5 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card>
            <div className="flex items-center gap-3">
              <TrendingUp className="h-5 w-5" />
              <h4 className="font-semibold">Add Batch</h4>
            </div>
            <p className="text-sm text-white/75 mt-2">Start a new cultivation or extraction run with guided SOPs.</p>
            <div className="mt-3 flex gap-2">
              <Link href="/new/cultivation" className="text-sm rounded-lg px-3 py-1.5 bg-white/10 border border-white/10 hover:bg-white/15">Cultivation</Link>
              <Link href="/new/extract" className="text-sm rounded-lg px-3 py-1.5 bg-white/10 border border-white/10 hover:bg-white/15">Extract</Link>
            </div>
          </Card>
          <Card>
            <div className="flex items-center gap-3">
              <Leaf className="h-5 w-5" />
              <h4 className="font-semibold">Substrate Builder</h4>
            </div>
            <p className="text-sm text-white/75 mt-2">Generate species‑tuned blocks with hydration & gypsum hints.</p>
            <div className="mt-3">
              <Link href="/substrate/builder" className="text-sm rounded-lg px-3 py-1.5 bg-white/10 border border-white/10 hover:bg-white/15">Open Builder</Link>
            </div>
          </Card>
          <Card>
            <div className="flex items-center gap-3">
              <Rocket className="h-5 w-5" />
              <h4 className="font-semibold">OKR Sprint</h4>
            </div>
            <p className="text-sm text-white/75 mt-2">Plan 30/60/90 with cleaning routinés and weekly blocks.</p>
            <div className="mt-3">
              <Link href="/sprint" className="text-sm rounded-lg px-3 py-1.5 bg-white/10 border border-white/10 hover:bg-white/15">Open Sprint</Link>
            </div>
          </Card>
        </div>
      </section>

      <footer className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-5 py-6 text-xs text-white/60 flex items-center gap-2">
          <span>© {new Date().getFullYear()} Crowe Logic™</span>
          <span>•</span>
          <span>Trust‑by‑Design • Privacy • Provenance • Sustainability</span>
        </div>
      </footer>
    </div>
  );
}