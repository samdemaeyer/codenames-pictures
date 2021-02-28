import { RefObject, useEffect } from 'react'

const useOutsideClickListener: (ref: RefObject<HTMLElement>, action: () => void) => void = (ref, action) => {
  const onClick = (e: MouseEvent) => {
    if (!!ref && ref.current && !ref.current.contains(e.target as HTMLDivElement)) {
      action()
    }
  }

  useEffect(() => {
    window.addEventListener('mousedown', onClick)
    return () => {
      window.removeEventListener('mousedown', onClick)
    }
  }, [])
}

export default useOutsideClickListener
