import React from "react"

const Item = ({categories}) => {
  return (
    <ul>
        {categories.map((category)=>(
          <li className="ml-[30%]">{category.text}</li>
        ))}
    </ul>
  )
}

export default Item