import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  LinkedinIcon,
  GithubIcon,
  MailIcon,
  DownloadIcon,
  ArrowRightIcon,
  BriefcaseIcon,
  RocketIcon,
  ChevronDownIcon } from
'lucide-react';
import { MagneticButton } from '../ui/MagneticButton';
import { CountUp } from '../ui/CountUp';
import { HERO_STATS } from '../../data/portfolio';
const ROLES = ['Business Analyst', 'Project Manager', 'IT Graduate'];
export function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setRoleIdx((i) => (i + 1) % ROLES.length), 2600);
    return () => clearInterval(t);
  }, []);
  const ease = [0.22, 1, 0.36, 1] as const;
  return (
    <section
      id="hero"
      className="relative flex min-h-screen w-full items-center px-6 pt-28 pb-16 lg:px-10">
      
      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
        {/* LEFT */}
        <div>
          <motion.div
            initial={{
              opacity: 0,
              y: 20
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.6,
              ease
            }}
            className="mb-7 inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-xs text-text-secondary">
            
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#FF3E7A] opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#FF3E7A]" />
            </span>
            Available for Internships &amp; Graduate Roles
          </motion.div>

          <h1 className="font-heading text-hero font-bold">
            <motion.span
              className="block text-white"
              initial={{
                opacity: 0,
                y: 30
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              transition={{
                duration: 0.7,
                ease,
                delay: 0.1
              }}>
              
              ILMA
            </motion.span>
            <motion.span
              className="block text-gradient"
              initial={{
                opacity: 0,
                y: 30
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              transition={{
                duration: 0.7,
                ease,
                delay: 0.2
              }}>
              
              NIYAS
            </motion.span>
          </h1>

          <motion.div
            initial={{
              opacity: 0
            }}
            animate={{
              opacity: 1
            }}
            transition={{
              duration: 0.6,
              ease,
              delay: 0.35
            }}
            className="mt-5 flex h-8 items-center font-num text-lg font-semibold tracking-wide text-soft-pink">
            
            <motion.span
              key={roleIdx}
              initial={{
                opacity: 0,
                y: 14
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              exit={{
                opacity: 0,
                y: -14
              }}
              transition={{
                duration: 0.4,
                ease
              }}>
              
              {ROLES[roleIdx]}
            </motion.span>
            <span className="ml-2 text-mid-dark">· IT Graduate</span>
          </motion.div>

          <motion.p
            initial={{
              opacity: 0,
              y: 20
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.6,
              ease,
              delay: 0.45
            }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-text-secondary">
            
            Transforming business challenges into technology-driven solutions
            through analytical thinking, strategic planning, and digital
            innovation.
          </motion.p>

          <motion.div
            initial={{
              opacity: 0,
              y: 20
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.6,
              ease,
              delay: 0.55
            }}
            className="mt-9 flex flex-wrap items-center gap-4">
            
            <MagneticButton variant="primary" href="#contact">
              <DownloadIcon size={16} /> Download CV
            </MagneticButton>
            <MagneticButton variant="secondary" href="#contact">
              Let's Connect <ArrowRightIcon size={16} />
            </MagneticButton>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0
            }}
            animate={{
              opacity: 1
            }}
            transition={{
              duration: 0.6,
              ease,
              delay: 0.7
            }}
            className="mt-9 flex items-center gap-3">
            
            {[
            {
              icon: LinkedinIcon,
              label: 'LinkedIn',
              href: 'https://linkedin.com/in/ilmaniyas'
            },
            {
              icon: GithubIcon,
              label: 'GitHub',
              href: 'https://github.com/ilmaniyas'
            },
            {
              icon: MailIcon,
              label: 'Email',
              href: 'mailto:your.email@example.com'
            }].
            map((s) =>
            <a
              key={s.label}
              href={s.href}
              aria-label={s.label}
              className="flex h-11 w-11 items-center justify-center rounded-full glass text-text-secondary transition-all duration-300 hover:text-[#FF3E7A] hover:border-[#FF3E7A]/40">
              
                <s.icon size={18} />
              </a>
            )}
          </motion.div>
        </div>

        {/* RIGHT - profile card */}
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.92,
            y: 30
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0
          }}
          transition={{
            duration: 0.8,
            ease,
            delay: 0.4
          }}
          className="relative mx-auto w-full max-w-sm">
          
          <div className="animate-float">
            <div className="relative overflow-hidden rounded-3xl glass-strong p-3">
              <div className="relative overflow-hidden rounded-2xl">
                <img
                  src="/profile.jpg"
                  alt="Ilma Niyas portrait"
                  className="h-80 w-full object-cover" />
                
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <p className="font-heading text-lg font-semibold text-white">
                    Ilma Niyas
                  </p>
                  <p className="text-sm text-text-secondary">
                    BSc (Hons) IT · RUSL
                  </p>
                </div>
              </div>

              <div className="mt-3 grid grid-cols-3 gap-2">
                {HERO_STATS.map((s) =>
                <div
                  key={s.label}
                  className="rounded-xl bg-white/5 p-3 text-center">
                  
                    <div className="font-num text-xl font-extrabold text-[#FF3E7A]">
                      <CountUp to={s.value} suffix={s.suffix} />
                    </div>
                    <div className="mt-1 text-[11px] leading-tight text-text-secondary">
                      {s.label}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* floating badges */}
          <motion.div
            className="absolute -left-6 top-10 flex items-center gap-2 rounded-2xl glass-strong px-4 py-3"
            animate={{
              y: [0, -10, 0]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: 'easeInOut'
            }}>
            
            <BriefcaseIcon size={16} className="text-[#FF3E7A]" />
            <span className="text-xs text-white">Business Analyst</span>
          </motion.div>
          <motion.div
            className="absolute -right-4 bottom-16 flex items-center gap-2 rounded-2xl glass-strong px-4 py-3"
            animate={{
              y: [0, 12, 0]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 1
            }}>
            
            <RocketIcon size={16} className="text-soft-pink" />
            <span className="text-xs text-white">Project Manager</span>
          </motion.div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        aria-label="Scroll to about"
        className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1 text-text-secondary lg:flex"
        animate={{
          y: [0, 8, 0]
        }}
        transition={{
          duration: 1.8,
          repeat: Infinity,
          ease: 'easeInOut'
        }}>
        
        <span className="text-[11px] uppercase tracking-[0.3em]">Scroll</span>
        <ChevronDownIcon size={18} />
      </motion.a>
    </section>);

}