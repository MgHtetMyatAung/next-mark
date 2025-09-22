"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";

type CardType = {
  url: string;
  title: string;
  id: number;
};

export default function ScrollSlider() {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const [containerWidth, setContainerWidth] = useState(0);
  const [containerPaddingLeft, setContainerPaddingLeft] = useState(0);
  const [carouselWidth, setCarouselWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current && scrollRef.current) {
        // Get the container's width and padding
        const containerRect = containerRef.current.getBoundingClientRect();
        setContainerWidth(containerRect.width);
        const style = window.getComputedStyle(containerRef.current);
        setContainerPaddingLeft(parseFloat(style.paddingLeft));

        // Get the total width of the inner carousel
        setCarouselWidth(scrollRef.current.scrollWidth);
      }
    };

    handleResize(); // Initial calculation
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Calculate the final x position to align the end with the container's right edge
  const finalX =
    -1 * (carouselWidth + containerPaddingLeft * 2 - containerWidth);
  console.log(containerPaddingLeft, "padding");

  // The animation starts at the container's left padding and ends at the calculated finalX
  const x = useTransform(scrollYProgress, [0, 1], [`${0}px`, `${finalX}px`]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-neutral-900">
      <div className="sticky top-0 flex min-h-screen items-center overflow-hidden">
        <div ref={containerRef} className="container mx-auto py-10">
          <div className="relative z-10 text-white text-center md:text-left mb-6 space-y-2">
            <h2 className="">Our Creative Showcase</h2>
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto md:mx-0">
              Explore our latest projects and designs in this interactive
              horizontal gallery.
            </p>
          </div>
          <motion.div style={{ x }} ref={scrollRef} className="flex gap-4">
            {cards.map((card) => (
              <Card card={card} key={card.id} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

const Card = ({ card }: { card: CardType }) => {
  return (
    <div
      key={card.id}
      className="group relative h-[550px] w-[348px] flex-shrink-0 overflow-hidden bg-neutral-200"
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      ></div>
      <div className="absolute inset-0 z-10 grid place-content-center">
        <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-6xl font-black uppercase text-white backdrop-blur-lg">
          {card.title}
        </p>
      </div>
    </div>
  );
};

const cards: CardType[] = [
  {
    url: "/imgs/scroll-slide-phone.jpg",
    title: "Title 1",
    id: 1,
  },
  {
    url: "/imgs/scroll-slide-phone.jpg",
    title: "Title 2",
    id: 2,
  },
  {
    url: "/imgs/scroll-slide-phone.jpg",
    title: "Title 3",
    id: 3,
  },
  {
    url: "/imgs/scroll-slide-phone.jpg",
    title: "Title 4",
    id: 4,
  },
  {
    url: "/imgs/scroll-slide-phone.jpg",
    title: "Title 5",
    id: 5,
  },
  {
    url: "/imgs/scroll-slide-phone.jpg",
    title: "Title 6",
    id: 6,
  },
  {
    url: "/imgs/scroll-slide-phone.jpg",
    title: "Title 7",
    id: 7,
  },
];
