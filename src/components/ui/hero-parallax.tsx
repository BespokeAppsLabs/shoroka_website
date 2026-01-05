"use client";
import {
  type MotionValue,
  motion,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import React from "react";

export const HeroParallax = ({
  products,
  title = "The Ultimate development studio",
  description = "We build beautiful products with the latest technologies and frameworks. We are a team of passionate developers and designers that love to build amazing products.",
  logo,
}: {
  products: {
    title: string;
    link: string;
    thumbnail: string;
  }[];
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  logo?: React.ReactNode;
}) => {
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig,
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig,
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig,
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig,
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig,
  );
  const headerTranslateY = useTransform(scrollYProgress, [0, 0.2], [0, 250]);
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
    springConfig,
  );

  return (
    <div className="relative">
      <div
        ref={ref}
        className="h-[300vh] py-40 overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d] bg-transparent"
      >
        <motion.div style={{ translateY: headerTranslateY }}>
          <Header title={title} description={description} logo={logo} />
        </motion.div>
        <motion.div
          style={{
            rotateX,
            rotateZ,
            translateY,
            opacity,
          }}
          className=""
        >
          <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
            {firstRow.map((product) => (
              <ProductCard
                product={product}
                translate={translateX}
                key={product.title}
              />
            ))}
          </motion.div>
          <motion.div className="flex flex-row mb-20 space-x-20 ">
            {secondRow.map((product) => (
              <ProductCard
                product={product}
                translate={translateXReverse}
                key={product.title}
              />
            ))}
          </motion.div>
          <motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
            {thirdRow.map((product) => (
              <ProductCard
                product={product}
                translate={translateX}
                key={product.title}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>
      {/* Bottom Fade Mask */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent z-20 pointer-events-none" />
    </div>
  );
};

export const Header = ({
  title,
  description,
  logo,
}: {
  title: string | React.ReactNode;
  description: string | React.ReactNode;
  logo?: React.ReactNode;
}) => {
  return (
    <div className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full left-0 top-0">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Text Section */}
        <div>
          <h1 className="text-2xl md:text-7xl font-bold text-foreground">
            {title}
          </h1>
          <div className="max-w-2xl text-base md:text-xl mt-8 text-muted-foreground">
            {description}
          </div>
        </div>
        {/* Logo Section */}
        {logo && (
          <div className="flex items-center justify-center md:justify-end">
            {logo}
          </div>
        )}
      </div>
    </div>
  );
};

export const ProductCard = ({
  product,
  translate,
}: {
  product: {
    title: string;
    link: string;
    thumbnail: string;
  };
  translate: MotionValue<number>;
}) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      key={product.title}
      className="group/product h-96 w-[30rem] relative shrink-0"
    >
      <a href={product.link} className="block group-hover/product:shadow-2xl ">
        <img
          src={product.thumbnail}
          height="600"
          width="600"
          className="object-cover object-left-top absolute h-full w-full inset-0"
          alt={product.title}
        />
      </a>
      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none"></div>
      <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white">
        {product.title}
      </h2>
    </motion.div>
  );
};
