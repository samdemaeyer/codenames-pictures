import * as React from 'react'

const useOutsideClickListener: (ref: React.RefObject<HTMLElement>, action: () => void) => void = (ref, action) => {
  const onClick = (e: MouseEvent) => {
    if (!!ref && ref.current && !ref.current.contains(e.target as HTMLDivElement)) {
      action()
    }
  }

  React.useEffect(() => {
    window.addEventListener('mousedown', onClick)
    return () => {
      window.removeEventListener('mousedown', onClick)
    }
  }, [])
}

export default useOutsideClickListener
