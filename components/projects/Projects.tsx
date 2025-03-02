"use client";
import React from "react";
import { useEffect, useState, useRef } from "react";
import classes from "./Carousel.module.css";
import Image from "next/image";
import { useInView } from "framer-motion";
import { ArrowTopRightOnSquareIcon, CodeBracketIcon } from "@heroicons/react/24/solid";
import { ProjectsData, Project } from "@/public/types";

type Props = {
  data: ProjectsData;
};

const Projects = (props: Props) => {
  const [title, setTitle] = useState("Hover/click a project to see details");
  const [description, setDescription] = useState("");
  const [duration, setDuration] = useState("");
  const [Projectlink, setProjectLink] = useState("");
  const [GithubLink, setGithubLink] = useState("");
  const [techStack, setTechStack] = useState<{ name: string; url: string }[]>([{ name: "", url: "" }]);
  
  const dragRef = useRef({ startX: 0, startY: 0, lastX: 0, lastY: 0 });
  const transformRef = useRef({ tX: 0, tY: 10 });
  const isPointerDown = useRef(false);
  const odragRef = useRef<HTMLDivElement | null>(null);
  const ospinRef = useRef<HTMLDivElement | null>(null);
  
  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (!isInView) return;

    const radius = window.innerWidth < 768 ? 200 : 300;
    const autoRotate = true;
    const rotateSpeed = 35;
    const imgWidth = window.innerWidth < 768 ? 200 : 300;
    const imgHeight = window.innerWidth < 768 ? 130 : 200;

    const odrag = document.getElementById("drag-container") as HTMLDivElement;
    const ospin = document.getElementById("spin-container") as HTMLDivElement;
    if (!ospin || !odrag) return;

    odragRef.current = odrag;
    ospinRef.current = ospin;

    const aImg = ospin.getElementsByTagName("img");
    const aVid = ospin.getElementsByTagName("video");
    const aEle = [...aImg, ...aVid];

    ospin.style.width = imgWidth + "px";
    ospin.style.height = imgHeight + "px";

    const ground = document.getElementById("ground");
    if (ground) {
      ground.style.width = radius * 3 + "px";
      ground.style.height = radius * 3 + "px";
    }

    function init() {
      for (let i = 0; i < aEle.length; i++) {
        const element = aEle[i] as HTMLElement;
        element.style.transform = `rotateY(${i * (360 / aEle.length)}deg) translateZ(${radius}px)`;
        element.style.transition = "transform 1s";
        element.style.transitionDelay = ((aEle.length - i) / 8).toString() + "s";
      }
    }


  

    function applyTransform(tX: number, tY: number): void {
      if (!odragRef.current) return;
      
      if (tY > 30) tY = 30;
      if (tY < 5) tY = 5;
      odragRef.current.style.transform = `rotateX(${-tY}deg) rotateY(${tX}deg)`;
    }

    function playSpin(yes: boolean): void {
      if (!ospinRef.current) return;
      ospinRef.current.style.animationPlayState = yes ? "running" : "paused";
    }

    if (autoRotate && ospinRef.current) {
      const animationName = rotateSpeed > 0 ? classes.spin : classes.spinRevert;
      ospinRef.current.style.animation = `${animationName} ${Math.abs(rotateSpeed)}s infinite linear`;
    }

    const handlePointerDown = (e: PointerEvent) => {
      isPointerDown.current = true;
      dragRef.current.startX = e.clientX;
      dragRef.current.startY = e.clientY;
      dragRef.current.lastX = e.clientX;
      dragRef.current.lastY = e.clientY;
      playSpin(false);
    };

    const handlePointerMove = (e: PointerEvent) => {
      if (!isPointerDown.current) return;

      const deltaX = e.clientX - dragRef.current.lastX;
      const deltaY = e.clientY - dragRef.current.lastY;

      transformRef.current.tX += deltaX * 0.1;
      transformRef.current.tY += deltaY * 0.1;

      applyTransform(transformRef.current.tX, transformRef.current.tY);

      dragRef.current.lastX = e.clientX;
      dragRef.current.lastY = e.clientY;
    };

    const handlePointerUp = () => {
      if (!isPointerDown.current) return;
      
      isPointerDown.current = false;
      const momentum = {
        x: (dragRef.current.lastX - dragRef.current.startX) * 0.05,
        y: (dragRef.current.lastY - dragRef.current.startY) * 0.05
      };

      const momentumTimer = setInterval(() => {
        momentum.x *= 0.95;
        momentum.y *= 0.95;

        transformRef.current.tX += momentum.x;
        transformRef.current.tY += momentum.y;

        applyTransform(transformRef.current.tX, transformRef.current.tY);

        if (Math.abs(momentum.x) < 0.1 && Math.abs(momentum.y) < 0.1) {
          clearInterval(momentumTimer);
          playSpin(true);
        }
      }, 16);
    };

    if (odragRef.current) {
      odragRef.current.addEventListener('pointerdown', handlePointerDown);
      document.addEventListener('pointermove', handlePointerMove);
      document.addEventListener('pointerup', handlePointerUp);
      document.addEventListener('pointerleave', handlePointerUp);
    }

    init();

    return () => {
      if (odragRef.current) {
       odragRef.current.removeEventListener('pointerdown', handlePointerDown);
      
      }
      document.removeEventListener('pointermove', handlePointerMove);
      document.removeEventListener('pointerup', handlePointerUp);
      document.removeEventListener('pointerleave', handlePointerUp);
    };
  }, [isInView]);

  return (
    <div
      ref={ref}
      className={`${classes.body} h-screen relative overflow-hidden flex flex-col-reverse gap-y-0 text-left md:flex-row justify-center mx-auto items-center z-0 max-w-full`}
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl cursor-default">
        Projects
      </h3>
      <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm cursor-default">
        Drag to explore
      </h3>

      <>
        <div className="lg:absolute flex flex-col pl-10 items-center scale-75 lg:scale-100 justify-center lg:flex-none w-full lg:w-auto bottom-2 lg:bottom-auto left-4 transition-all ease-in-out duration-300">
          <h2 className="text-4xl top-40 w-[450px] text-center lg:text tracking-[10px] text-[#6B7280]">
            {title}
          </h2>
          <p className="text-lg top-52 w-[450px] text-center tracking-[10px] text-[#10b981]/80">
            {duration}
          </p>
          <p className="top-[15rem] text-md w-[450px] text-center lg:text-left tracking-widest text-[#6B7280]">
            {description}
          </p>
          <div className="flex space-x-4 p-4">
            <p className="text-[#6B7280] lg:text-left font-semibold text-xl">TechStack: </p>
            {techStack.map((tech, index) => (
              <div key={index} className="relative group">
                <Image
                  src={tech.url}
                  alt={tech.name}
                  width={32}
                  height={32}
                  title={tech.name}
                  className="object-contain rounded-full border-s-2 border-emerald-400 cursor-pointer"
                  priority
                />
                <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block bg-gray-800 text-white text-xs rounded py-1 px-2">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>

          {title !== "Click a project to see details" && (
            <div className="flex space-x-4 p-4 justify-end">
              <button
                onClick={() => window.open(GithubLink, "_blank")}
                className="border text-[#6B7280] border-[#10b981] mt-2 p-3 rounded-full font-bold transition duration-200 ease-in-out hover:bg-[#10b981] hover:text-black"
              >
                Source Code <CodeBracketIcon className="h-5 w-5 inline ml-2" />
              </button>

              <button
                onClick={() => window.open(Projectlink, "_blank")}
                className="border text-[#6B7280] border-[#10b981] mt-2 p-3 rounded-full font-bold transition duration-200 ease-in-out hover:bg-[#10b981] hover:text-black"
              >
                Live<ArrowTopRightOnSquareIcon className="h-5 w-5 inline ml-2" />
              </button>
            </div>
          )}
        </div>

        {isInView && (
          <div
            id="drag-container"
            className={`${classes.dragContainer} lg:absolute lg:-right-40 top-20 lg:top-auto scale-75 lg:scale-100`}
          >
            <div id="spin-container" className={classes.spinContainer}>
              {props.data.projectsData.map((item: Project, index: number) => (
                <Image
                  src={item.projectImage}
                  alt="project Image"
                  fill
                  quality={100}
                  key={index}
                  
                  onMouseEnter={() => {
                    setTitle(item.projectName);
                    setDescription(item.projectDesc);
                    setDuration(item.projectDuration);
                    setProjectLink(item.projectLink);
                    setTechStack(item.techStack);
                    setGithubLink(item.githubLink);
                  }}
                  onDoubleClick={() => window.open(item.projectLink, "_blank")}
                  className={`${classes.project} cursor-pointer rounded-lg`}
                  priority={true}
                />
              ))}
            </div>
            <div id="ground" className={classes.ground} />
          </div>
        )}
      </>
    </div>
  );
};

export default Projects;

