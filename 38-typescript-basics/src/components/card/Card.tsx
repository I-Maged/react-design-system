// import type { ReactNode } from "react"
import type { PropsWithChildren } from "react"
import "./style.css"

// type CardProps = { children: ReactNode  }
type CardProps = {
  color?: "green" | "blue" | "crimson"
}

const Card = ({ children, color = "blue" }: PropsWithChildren<CardProps>) => {
  return (
    <section className="m-4 card-container" style={{ color }}>
      {children}
    </section>
  )
}

export default Card
