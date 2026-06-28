"use client";

import { useId, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/cn";
import { useReducedMotion } from "@/lib/use-reduced-motion";

interface AccordionItemData {
  question: string;
  answer: string;
}

/**
 * Accessible accordion, built on the standard ARIA disclosure
 * pattern rather than a styled <details> or a plain toggled <div>:
 *
 * - Each trigger is a real <button>, not a clickable <div>, so it's
 *   reachable and operable by keyboard with no extra wiring.
 * - aria-expanded on the trigger and a matching aria-labelledby /
 *   id pair between trigger and panel is what lets a screen reader
 *   announce "collapsed" / "expanded" state and associate the
 *   answer with its question — this is the part that's invisible to
 *   a sighted user testing only with a mouse, and the most commonly
 *   skipped piece of a "looks like an accordion" component.
 * - Independent panels (not single-open-only) — there's no
 *   instruction to restrict to one open item at a time, and forcing
 *   that without being asked would mean closing an answer a user is
 *   still reading the moment they open another one.
 */
export function FaqAccordion({ items }: { items: AccordionItemData[] }) {
  return (
    <div className="divide-y divide-ink-800 [html:not(.dark)_&]:divide-paper-200">
      {items.map((item) => (
        <AccordionItem key={item.question} {...item} />
      ))}
    </div>
  );
}

function AccordionItem({ question, answer }: AccordionItemData) {
  const [isOpen, setIsOpen] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  const baseId = useId();
  const triggerId = `${baseId}-trigger`;
  const panelId = `${baseId}-panel`;

  return (
    <div>
      <h3>
        <button
          id={triggerId}
          type="button"
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={() => setIsOpen((open) => !open)}
          className={cn(
            "flex w-full items-center justify-between gap-4 py-5 text-left",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal-500 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950",
          )}
        >
          <span className="text-base font-medium text-ink-100 [html:not(.dark)_&]:text-paper-900">
            {question}
          </span>
          <span
            aria-hidden="true"
            className={cn(
              "flex-shrink-0 text-signal-400 transition-transform duration-200",
              isOpen && "rotate-45",
            )}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 5v14M5 12h14"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </span>
        </button>
      </h3>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={panelId}
            role="region"
            aria-labelledby={triggerId}
            initial={prefersReducedMotion ? { height: "auto" } : { height: 0 }}
            animate={{ height: "auto" }}
            exit={prefersReducedMotion ? { height: "auto" } : { height: 0 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.2, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-5 max-w-prose text-base leading-relaxed text-ink-400 [html:not(.dark)_&]:text-paper-400">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
