import { listItem } from "../ui/Header";
import { AnimatePresence, motion } from "motion/react";

export const MenuItems = ({
  isOpen,
  toggleMenu,
  activeSection,
}: {
  isOpen: boolean;
  toggleMenu: () => void;
  activeSection: string;
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "0" }}
            exit={{ x: "-100%" }}
            transition={{ type: "tween", duration: 0.3, ease: "easeOut" }}
            className="fixed inset-0 w-full h-screen bg-black/30  z-50 md:hidden "
          >
            <nav className="flex flex-col items-center gap-6 py-8 my-12 border-b border-gold-900">
              {listItem.map((item) => {
                const isActive = activeSection === item.href.replace("#", "");

                return (
                  <a
                    href={item.href}
                    key={item.id}
                    onClick={toggleMenu}
                    className={` text-lg font-medium text-gold-500 ${isActive ? "text-gold-500 underline underline-offset-4" : ""}` }
                  >
                    {item.text}
                  </a>
                )
              })}
            </nav>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
