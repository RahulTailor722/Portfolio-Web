import React from "react"

export const Reveal = ({ children, delay = 0, y = 32, className, as: Tag = "div" }) => {
  return (
    <Tag
      className={`reveal ${className || ""}`}
      style={{
        opacity: 1,
        transform: "none",
      }}
    >
      {children}
    </Tag>
  )
}

export default Reveal
