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
        },
        {
            id:"minimal-image",
            name:"Minimal Image",
            preview: "Minimal design with a single image and clean typography"
        },
        {
            id: "minimal",
            name: "Minimal",
            preview: "Ultra-clean design that puts your content front and center"
        }
    ]
  return (
    <div>

    </div>
  )
}

export default TemplateSelector