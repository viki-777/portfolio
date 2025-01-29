
"use client";
import React from "react";
import { useEffect, useState, useRef } from "react";
import classes from "./Carousel.module.css";
// import "./Carousel.module.css"
import Image from "next/image";

import {  useInView } from "framer-motion";
import { ArrowTopRightOnSquareIcon, CodeBracketIcon} from "@heroicons/react/24/solid";
import { ProjectsData ,Project} from "@/public/types";


type Props = {
  data: ProjectsData;
};

const Projects = (props: Props) => {
  
  const [title, setTitle] = useState("Hover/click a project to see details");
  const [description, setDescription] = useState("");
  const [duration, setDuration] = useState("");
  const [Projectlink, setProjectLink] = useState("");
  const [GithubLink, setGithubLink] = useState("");
  const [techStack,setTechStack] = useState<{ name: string; url: string }[]>([{name:"",url:""}]);


  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {

    if(isInView){

    const radius = 300; // how big of the radius
    const autoRotate = true; // auto rotate or not
    const rotateSpeed = 20; // unit: seconds/360 degrees
    const imgWidth = 300; // width of images (unit: px)
    const imgHeight = 200; // height of images (unit: px)


   
    // animation start after 1000 miliseconds
    setTimeout(init, 200);

    const odrag = document.getElementById("drag-container");
    const ospin = document.getElementById("spin-container");
    if (!ospin) return;
    const aImg = ospin.getElementsByTagName("img");
    const aVid = ospin.getElementsByTagName("video");

    const aEle = [...aImg, ...aVid]; // combine 2 arrays

    // Size of images
    ospin.style.width = imgWidth + "px";
    ospin.style.height = imgHeight + "px";

    // Size of ground - depend on radius
    const ground = document.getElementById("ground");
    if (ground) {
      ground.style.width = radius * 3 + "px";
      ground.style.height = radius * 3 + "px";
    }

    interface ElementStyle extends HTMLElement {
      style: CSSStyleDeclaration;
    }

    function init(delayTime?: number) {
      for (let i: number = 0; i < aEle.length; i++) {
        const element = aEle[i] as ElementStyle;
        element.style.transform =
          "rotateY(" +
          i * (360 / aEle.length) +
          "deg) translateZ(" +
          radius +
          "px)";
        element.style.transition = "transform 1s";
        element.style.transitionDelay =
          // adjust the number to set the duration of initial animation
          (delayTime || ((aEle.length - i) / 8).toString() + "s").toString();
      }
    }

    interface TransformableElement extends HTMLElement {
      style: CSSStyleDeclaration;
    }

    interface DragContainer extends HTMLElement {
      timer?: NodeJS.Timeout;
    }

    const odragElement = odrag as DragContainer;

    function applyTranform(obj: TransformableElement): void {
      // Constrain the angle of camera (between 0 and 180)
      
      if (tY > 30) tY = 30;
      if (tY < 5) tY = 5;

      // Apply the angle
      obj.style.transform = "rotateX(" + -tY + "deg) rotateY(" + tX + "deg)";
    }

    interface SpinContainer extends HTMLElement {
      style: CSSStyleDeclaration;
    }

    function playSpin(yes: boolean): void {
      const ospin = document.getElementById('spin-container') as SpinContainer;
      ospin.style.animationPlayState = yes ? "running" : "paused";
    }
    let
      desX = 0,
      desY = 0,
      tX = 0,
      tY = 10;

    // auto spin
    if (autoRotate) {
      const animationName = rotateSpeed > 0 ? `${classes.spin}`: `${classes.spinRevert}`;
      ospin.style.animation = `${animationName} ${Math.abs(
        rotateSpeed
      )}s infinite linear`;
    }

    // setup events
    document.onpointerdown = function (e) {
     
      e = e || window.event;
      let sX = e.clientX,
        sY = e.clientY;

      this.onpointermove = function (e) {
        e = e || window.event;
        const nX = e.clientX,
          nY = e.clientY;
        desX = nX - sX;
        desY = nY - sY;
        tX += desX * 0.1;
        tY += desY * 0.1;
        if (odrag) applyTranform(odrag as TransformableElement);
        sX = nX;
        sY = nY;
      };

        odragElement.timer = setInterval(function () {
        if(!odrag) return;
        (odrag as DragContainer).timer = setInterval(function () {
          desX *= 0.95;
          desY *= 0.95;
          tX += desX * 0.1;
          tY += desY * 0.1;
         
          playSpin(false);
          if (Math.abs(desX) < 0.5 && Math.abs(desY) < 0.5) {
            
            playSpin(true);
          }
        }, 17);
        
      });

      return false;
    };
   
  }
  }, [isInView]);

  return (
    <div
      ref={ref}
      className={`${classes.body} h-screen relative overflow-hidden flex flex-col-reverse gap-y-0 text-left md:flex-row  justify-center mx-auto items-center z-0 max-w-full `}
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl cursor-default ">
        Projects
      </h3>
      <h3  className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm cursor-default ">
        Drag to explore
      </h3>

      <>
        <div className="lg:absolute flex flex-col items-center scale-75 lg:scale-100 justify-center lg:flex-none w-full lg:w-auto  bottom-2 lg:bottom-auto left-4 transition-all ease-in-out duration-300 ">
          <h2 className=" text-4xl top-40 w-[450px] text-center lg:text tracking-[10px] text-[#6B7280]">
            {title}
          </h2>
          <p className=" text-lg top-52 w-[450px] text-center tracking-[10px] text-[#10b981]/80">
            {duration}
          </p>
          <p className=" top-[15rem] text-md w-[450px] text-center lg:text-left tracking-widest text-[#6B7280]">
            {description}
          </p>
          <div className="flex space-x-4 p-4">
           <p className="text-[#6B7280] lg:text-left font-semibold text-xl"> TechStack: </p>
           {techStack.map((tech, index) => (
            <div key={index} className="relative group">
              <Image
                src={tech.url}
                alt={tech.name}
                width={32}
                height={32}
                title={tech.name} // Shows name on hover
                className="object-contain rounded-full border-s-2 border-emerald-400 cursor-pointer"
                priority
              />
              <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block bg-gray-800 text-white text-xs rounded py-1 px-2">
                {tech.name}
              </span>
            </div>
          ))}

    </div>
          {title !== "Hover/click a project to see details" ? (

            <div className="flex space-x-4 p-4 justify-end"> 
              
            <button
              onClick={() => window.open(GithubLink, "_blank")}
              className="border text-[#6B7280] border-[#10b981] mt-2 p-3 rounded-full font-bold transition duration-200  ease-in-out hover:bg-[#10b981] hover:text-black "
            >
              Source Code <CodeBracketIcon className="h-5 w-5 inline ml-2" />
              
            </button>
            

            <button
              onClick={() => window.open(Projectlink, "_blank")}
              className="border text-[#6B7280] border-[#10b981] mt-2 p-3 rounded-full font-bold transition duration-200  ease-in-out hover:bg-[#10b981] hover:text-black "
            >
              
              Live<ArrowTopRightOnSquareIcon className="h-5 w-5 inline ml-2" />
            </button>


            {/* <Link href={link}>
              <a
                className="border text-[#6B7280] border-[#10b981] mt-2 py-2 px-10 rounded-md font-bold transition duration-200  ease-in-out hover:bg-[#10b981] hover:text-black lg:w-full w-[300px] text-center"
              >
                Check it out !
              </a>
              </Link> */}

            </div>
          ) : null}
        </div>

        {isInView?<div
          id="drag-container"
          className={`${classes.dragContainer} lg:absolute lg:-right-40 top-20 lg:top-auto scale-75 lg:scale-100`}
        >
          <div
            id="spin-container"
            className={`${classes.spinContainer}`}
          >
            {/* Add your images (or video) here */}
            {props.data.projectsData.map((item:Project, index:number) => {
              return (
                <Image
                  src={item.projectImage}
                  alt=""
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
                  // onMouseLeave={() => {
                  //   setTitle("Hover a project to see details");
                  //   setDescription("");
                  //   setDuration("");
                  // }}
                  onDoubleClick={() => window.open(item.projectLink, "_blank")}
                  className={`${classes.project} cursor-pointer rounded-lg`}
                  priority={true}
                />
              );
            })}
          </div>
          <div id="ground" className={classes.ground} />
        </div>:null}
      </>
    </div>
  );
};

export default Projects;




