import type { SVGProps, DetailedHTMLProps, HTMLAttributes } from 'react';

declare global {
    namespace JSX {
        interface IntrinsicElements {
            svg: SVGProps<SVGSVGElement>;
            path: SVGProps<SVGPathElement>;
            circle: SVGProps<SVGCircleElement>;
            rect: SVGProps<SVGRectElement>;
            g: SVGProps<SVGGElement>;
            defs: SVGProps<SVGDefsElement>;
            linearGradient: SVGProps<SVGLinearGradientElement>;
            radialGradient: SVGProps<SVGRadialGradientElement>;
            stop: SVGProps<SVGStopElement>;
            animate: SVGProps<SVGAnimateElement>;
            animateTransform: SVGProps<SVGAnimateTransformElement>;
            ul: DetailedHTMLProps<HTMLAttributes<HTMLUListElement>, HTMLUListElement>;
        }
    }
}

export { };
