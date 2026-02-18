import React, { useState } from 'react'

const TemplateSelector = ({ selectedTemplate, onChange}) => {
    const [isOpen, setIsOpen] = useState(false);

    const templates = [
        {
            id: "clasic",
            name: "Classic",
            preview: "Traditional Resume Format"
        },
        {
            id: "modern",
            name: "Modern",
            preview: "Modern Resume format"
        }
    ]
  return (
    <div>

    </div>
  )
}

export default TemplateSelector