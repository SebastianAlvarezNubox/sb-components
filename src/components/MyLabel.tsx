import './mylabel.css'

export interface Props {
    label: string;
    /**
     * This is the size
     */
    size: 'normal' | 'h1' | 'h2' | 'h3';

    /**
     * Capitalizacion de toda la frase
     */
    allCaps?: boolean;

    /**
     * Colores basicos del boton
     */
    color?: 'primary'|'secondary'|'tertiary'

    /**
     * Colores personalizados
     */
     fontColor?: string;
}

export const MyLabel = ({
    label = 'No Label', 
    size = 'normal',
    allCaps = false,
    color = 'primary',
    fontColor
  }: Props) => {
  return (
    <div className={` label ${size} text-${color}`} style={{color: fontColor}} >
        { allCaps ? label.toUpperCase() : label}
    </div>
  )
}
