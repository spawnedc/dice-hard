import { useEffect, useRef, useState } from 'react'
import cn from 'classnames'
import RPGUI from '../../utils/RPGUI'

interface HealthBarProps {
  className?: string
  value: number
}

const HealthBar = ({ className, value }: HealthBarProps) => {
  const healthBarRef = useRef<HTMLDivElement>(null)
  const [init, setInit] = useState(false)

  useEffect(() => {
    RPGUI.set_value(healthBarRef.current, value < 0 ? 0 : value)
  }, [value])

  useEffect(() => {
    if (!init) {
      RPGUI.create(healthBarRef.current, 'progress')
      setInit(true)
    }
  }, [init])

  return (
    <div
      ref={healthBarRef}
      className={cn('rpgui-progress', 'red', className)}
      data-value={value}
    ></div>
  )
}

export default HealthBar
