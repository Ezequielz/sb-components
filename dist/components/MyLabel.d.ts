/// <reference types="react" />
import './myLabel.css';
export interface MyLabelProps {
    /**
     * Este es el texto que se va a mostrar en la etqieuta
     */
    label: string;
    /**
     * Este es el tamaño de la etiqueta
     */
    size: 'normal' | 'h1' | 'h2' | 'h3';
    /**
     * Cambia el color del texto de la etiqueta
     */
    color?: 'primary' | 'secondary' | 'tertiary';
    /**
     * Texto a mayusculas
     */
    allCaps?: boolean;
    /**
     * color personalizado de la fuente
     */
    fontColor?: string;
    /**
     * color personalizado de fondo
     */
    backgroundColor?: string;
}
export declare const MyLabel: ({ allCaps, color, label, size, fontColor, backgroundColor }: MyLabelProps) => JSX.Element;
