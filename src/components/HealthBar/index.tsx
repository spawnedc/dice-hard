import { CSSProperties } from 'react'
import cn from 'classnames'

interface HealthBarProps {
  className?: string
  value: number
}

const HealthBar = ({ className, value }: HealthBarProps) => {
  const style: CSSProperties = {
    width: `${value * 100}%`,
  }

  return (
    <>
      <div className={cn('rpgui-progress', 'red', className)}>
        <div className=" rpgui-progress-track">
          <div className="rpgui-progress-fill red" style={style}></div>
        </div>
        <div className="rpgui-progress-left-edge"></div>
        <div className="rpgui-progress-right-edge"></div>
      </div>
    </>
  )
}

export default HealthBar
