import React from 'react'

import './AdCard.css'

const AdCard = ({
  title,
  slug,
  subtitle,
  leitura,
  ...props
}) => (
  <div className={`ad-card-content ${leitura}`}>
      {title && 
        <p className="ad-titulo">
          {title}
        </p>
      }
      {subtitle && 
        <strong className="ad-titulo">
          {subtitle}
        </strong>
      }
      <button>
        <a href={slug}>VER MAIS</a>
      </button>
  </div>
)

export default AdCard
