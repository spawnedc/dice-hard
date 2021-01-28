import React, { useEffect, useRef } from 'react'
import RPGUI from '../../utils/RPGUI'

interface HealthBarProps {
  value: number
}

const HealthBar = ({ value }: HealthBarProps) => {
  const healthBarRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    RPGUI.set_value(healthBarRef.current, value)
  }, [value])

  return (
    <div
      ref={healthBarRef}
      className="rpgui-progress red"
      data-value={value}
    ></div>
  )
}

export default HealthBar
