import 'astro/jsx-runtime'
import React from "react"
import PortfolioSegment from "./PortfolioSegment";
import {useEffect, useState, useRef, MutableRefObject} from "react";

const testProject = [
  {
    title: "ezRoute",
    desc: "Company car tracking and accounting made easy",
    tech: ["hugo"],
    url: "https://ezroute.dev"
  },
  {
    title: "digiBlink",
    desc: "A web agency that covers all your bases",
    tech: ["hugo", "sass"],
    url: "https://digiblink.vercel.app"
  }
]

export default function Portfolio ()  {
  const [active, setActive] = useState(false)
  const portfolio = useRef() as MutableRefObject<HTMLDivElement>

  useEffect(() => {
    function isInViewportOver(element: any) {
      if (element === null) return false
      const rect = element.getBoundingClientRect();
      return (
          rect.top <= (window.innerHeight || document.documentElement.clientHeight) / 3 &&
          rect.left >= 0 &&
          rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) / 3 &&
          rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }

    window.addEventListener("scroll", () => {
      (portfolio.current && setActive(isInViewportOver(portfolio.current)))
    })
  }, [])

  return (
      <section id={"portfolio"} class={"portfolio"} ref={portfolio}>
        <h2>Works</h2>
        {testProject.map((v, i) => (
            <PortfolioSegment {...v} animDelay={i} key={i} active={active} />
        ))}
      </section>
  )
}