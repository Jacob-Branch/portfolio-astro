import 'astro/jsx-runtime'
import React from "react"
import {MutableRefObject, useEffect, useRef} from "react";

interface HeaderProps {
  title: string,
  desc: string,
  tech: string[],
  key: number,
  url: string,
  animDelay: number,
  active: boolean
}

const PortfolioSegment = ({title, desc, tech, key, url, animDelay, active}: HeaderProps) => {
  const elem = useRef() as MutableRefObject<HTMLDivElement>
  useEffect(() => {
    if (active) {
      elem.current.classList.remove("active")
      void elem.current.offsetWidth
      elem.current.classList.add("active")
    } else {
      elem.current.classList.add("active")
      void elem.current.offsetWidth
      elem.current.classList.remove("active")
    }
  }, [active]);
  return (
      <div class={"portfolioSegment"} ref={elem} style={{animationDelay: `${(animDelay + 1) / 3}s`}}>
        <h6 onClick={() => window.open(url, "_blank")}>{title}</h6>
        <p>{desc}</p>
        <div>
          {tech.map((v, i) => (
              <img key={i} src={`tech-icons/${v}.svg`} alt={v}/>
          ))}
        </div>
      </div>
  )
}

export default PortfolioSegment