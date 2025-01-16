'use client'

import { motion, useAnimation, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import { FaDumbbell, FaWheelchair, FaHandHoldingMedical } from 'react-icons/fa'
import { GiMedicalThermometer, GiWeightLiftingUp, GiMuscleUp } from 'react-icons/gi'
import styles from './Preloader.module.css'

const equipmentIcons = [
  FaDumbbell,
  FaWheelchair,
  FaHandHoldingMedical,
  GiMedicalThermometer,
  GiWeightLiftingUp,
  GiMuscleUp
]

export default function Preloader() {
  const [loading, setLoading] = useState(true)
  const controls = useAnimation()

  useEffect(() => {
    controls.start("visible")
    const timer = setTimeout(() => {
      controls.start("hidden")
      setTimeout(() => setLoading(false), 800)
    }, 5000) // Increased loading time to 5 seconds

    return () => clearTimeout(timer)
  }, [controls])

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial="hidden"
          animate={controls}
          exit="exit"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
            exit: { opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }
          }}
          transition={{ duration: 0.5 }}
          className={styles.preloader}
        >
          <div className={styles.container}>
            <motion.div
              className={styles.logoWrapper}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <motion.img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-vpzXuxdG5fyGycupFbvo7pd8fbpWrR.png"
                alt="Loading..."
                className={styles.logo}
                animate={{
                  filter: ["drop-shadow(0 0 8px rgba(46, 125, 50, 0.3))", "drop-shadow(0 0 16px rgba(46, 125, 50, 0.5))", "drop-shadow(0 0 8px rgba(46, 125, 50, 0.3))"],
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.div>
            {equipmentIcons.map((Icon, index) => (
              <motion.div
                key={index}
                className={styles.iconWrapper}
                initial={{ rotate: (index / equipmentIcons.length) * 360, opacity: 0 }}
                animate={{
                  rotate: [(index / equipmentIcons.length) * 360, ((index + 1) / equipmentIcons.length) * 360],
                  opacity: 1,
                }}
                transition={{
                  rotate: {
                    repeat: Infinity,
                    duration: 6,
                    ease: "linear",
                  },
                  opacity: {
                    duration: 0.5,
                    delay: index * 0.1,
                  },
                }}
              >
                <motion.div
                  className={styles.icon}
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 360, 0],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 4,
                    ease: "easeInOut",
                    delay: index * 0.2,
                  }}
                >
                  <Icon />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

