import { useEffect, useState } from 'react'
import { X } from 'lucide-react'
import { gallery, type GalleryCategory } from './content'

const filters: Array<{ label: string; value: 'all' | GalleryCategory }> = [
  { label: 'All work', value: 'all' },
  { label: 'Nails', value: 'nails' },
  { label: 'Braids', value: 'braids' },
  { label: 'Locs', value: 'locs' },
]

export default function Gallery() {
  const [filter, setFilter] = useState<'all' | GalleryCategory>('all')
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const visibleItems = filter === 'all' ? gallery : gallery.filter((item) => item.category === filter)
  const activeItem = activeIndex === null ? null : visibleItems[activeIndex]

  useEffect(() => {
    if (!activeItem) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setActiveIndex(null)
      if (event.key === 'ArrowRight') setActiveIndex((index) => index === null ? 0 : (index + 1) % visibleItems.length)
      if (event.key === 'ArrowLeft') setActiveIndex((index) => index === null ? 0 : (index - 1 + visibleItems.length) % visibleItems.length)
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [activeItem, visibleItems.length])

  return (
    <section id="work" className="section section-dark" aria-labelledby="work-title">
      <div className="shell">
        <div className="section-heading section-heading-light">
          <p className="eyebrow">Selected work</p>
          <h2 id="work-title">Made to be noticed.</h2>
          <p>Browse Chellah’s existing nail, braid and loc portfolio.</p>
        </div>
        <div className="filters" aria-label="Filter gallery">
          {filters.map((item) => (
            <button key={item.value} className={filter === item.value ? 'filter active' : 'filter'} onClick={() => { setFilter(item.value); setActiveIndex(null) }} aria-pressed={filter === item.value}>
              {item.label}
            </button>
          ))}
        </div>
        <div className="gallery-grid">
          {visibleItems.map((item, index) => (
            <button key={item.src} className="gallery-item" onClick={() => setActiveIndex(index)} aria-label={`Open image: ${item.alt}`}>
              <img src={item.src} alt={item.alt} loading="lazy" decoding="async" />
              <span>{item.category}</span>
            </button>
          ))}
        </div>
      </div>
      {activeItem ? (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label="Gallery preview" onClick={() => setActiveIndex(null)}>
          <button className="lightbox-close" onClick={() => setActiveIndex(null)} aria-label="Close image"><X /></button>
          <img src={activeItem.src} alt={activeItem.alt} onClick={(event) => event.stopPropagation()} />
          <p>{activeItem.alt}</p>
        </div>
      ) : null}
    </section>
  )
}
