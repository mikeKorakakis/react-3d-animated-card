import React from 'react';
declare class AnimatedCard extends React.Component<AnimatedCardProps, AnimatedCardState> {
    private card;
    private figureIcon;
    private title;
    private body;
    private button;
    constructor(props: AnimatedCardProps);
    componentDidMount(): void;
    _onMouseMove: (e: any) => void;
    _onMouseLeave: () => void;
    _onMouseEnter: () => void;
    render(): JSX.Element;
}
interface transitionProps {
    duration: number;
    timingMode?: 'ease' | 'ease-out' | 'ease-in' | 'ease-in-out';
}
interface transformProps {
    figureIcon?: {
        rotation?: number;
        translateZ?: number;
    };
    titleTranslateZ?: number;
    buttonTranslateZ?: number;
    bodyTextTranslateZ?: number;
}
interface ObjectProps {
    transition?: transitionProps;
    rotation?: number;
    transform?: transformProps;
}
interface AnimatedCardProps {
    config?: ObjectProps;
    className?: string;
    [key: string]: any;
}
interface AnimatedCardState {
    mainClass: string;
}
export default AnimatedCard;
