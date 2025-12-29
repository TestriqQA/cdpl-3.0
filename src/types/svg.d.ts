declare namespace React {
    namespace JSX {
        interface IntrinsicElements {
            svg: React.SVGProps<SVGSVGElement>;
            path: React.SVGProps<SVGPathElement>;
            circle: React.SVGProps<SVGCircleElement>;
            rect: React.SVGProps<SVGRectElement>;
            g: React.SVGProps<SVGGElement>;
            defs: React.SVGProps<SVGDefsElement>;
            linearGradient: React.SVGProps<SVGLinearGradientElement>;
            radialGradient: React.SVGProps<SVGRadialGradientElement>;
            stop: React.SVGProps<SVGStopElement>;
            animate: React.SVGProps<SVGAnimateElement>;
            animateTransform: React.SVGProps<SVGAnimateTransformElement>;
            ul: React.DetailedHTMLProps<React.HTMLAttributes<HTMLUListElement>, HTMLUListElement>;
        }
    }
}

export { };
