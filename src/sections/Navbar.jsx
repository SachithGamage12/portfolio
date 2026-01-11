import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

function Navigation({ mobile = false, closeMenu }) {
  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Experiences", href: "#experiences" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <ul className={mobile ? "flex flex-col space-y-6" : "flex items-center space-x-1"}>
      {navItems.map((item, index) => (
        <motion.li
          key={item.name}
          initial={mobile ? { opacity: 0, x: -20 } : false}
          animate={mobile ? { opacity: 1, x: 0 } : false}
          transition={mobile ? { delay: index * 0.1 } : false}
        >
          <a
            href={item.href}
            onClick={mobile ? closeMenu : undefined}
            className={
              mobile
                ? "block text-3xl font-semibold text-white hover:text-blue-400 transition-colors"
                : "relative px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors group"
            }
          >
            {item.name}
            {!mobile && (
              <motion.span
                className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 origin-left"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            )}
          </a>
        </motion.li>
      ))}
    </ul>
  );
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Main Navbar */}
      <nav className="relative mx-auto mt-4 max-w-7xl">
        <motion.div
          className="relative px-6 py-4 mx-4 border shadow-lg backdrop-blur-md bg-black/60 border-white/10 rounded-2xl"
          whileHover={{ boxShadow: "0 0 30px rgba(59, 130, 246, 0.3)" }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.a
              href="/"
              className="relative text-2xl font-bold text-white group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">SG</span>
              <motion.span
                className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 blur-lg opacity-0 group-hover:opacity-50"
                transition={{ duration: 0.3 }}
              />
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <Navigation />
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={toggleMenu}
              className="relative z-50 flex flex-col items-center justify-center w-10 h-10 md:hidden focus:outline-none"
              whileTap={{ scale: 0.9 }}
            >
              <motion.span
                className="block w-6 h-0.5 bg-white mb-1.5 rounded-full"
                animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="block w-6 h-0.5 bg-white mb-1.5 rounded-full"
                animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="block w-6 h-0.5 bg-white rounded-full"
                animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          </div>
        </motion.div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="fixed inset-0 z-40 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {/* Backdrop */}
              <motion.div
                className="absolute inset-0 bg-black/80 backdrop-blur-xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={closeMenu}
              />

              {/* Menu Content */}
              <motion.div
                className="relative z-50 flex items-center justify-center h-full"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <nav className="text-center">
                  <Navigation mobile closeMenu={closeMenu} />
                  
                  {/* Decorative Element */}
                  <motion.div
                    className="w-20 h-1 mx-auto mt-12 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                  />
                </nav>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
};

export default Navbar;