import { useState, useRef, useEffect, MouseEvent } from 'react';
import { FaArrowRight } from 'react-icons/fa';

interface Node {
  id: number;
  x: number;
  y: number;
}

interface Line {
  start: Node;
  end: Node;
}

const NodeConnector = () => {
  const [isDrawing, setIsDrawing] = useState<boolean>(false);
  const [connected, setConnected] = useState<boolean>(false);
  const [startNode, setStartNode] = useState<Node | null>(null);
  const svgRef = useRef<SVGSVGElement | null>(null);

  // Define two static nodes
  const staticNodes: Node[] = [
    { id: 0, x: 40, y: 50 }, // Positions as percentage of the viewBox dimensions
    { id: 1, x: 90, y: 50 },
  ];

  const handleMouseDownBackground = () => {
    setIsDrawing(false);
  };

  const handleMouseDown = (node: Node) => {
    if (isDrawing && startNode && node.id !== startNode.id) {
      const svg = svgRef.current;
      const line = svg?.querySelector('.temp-line') as SVGLineElement | null;
      if (line) {
        const x2 = node.x;
        const y2 = node.y;
        line.setAttribute('x2', `${x2}%`);
        line.setAttribute('y2', `${y2}%`);
        setConnected(true);
      }
      setIsDrawing(false);
      setStartNode(null);
    } else {
      setIsDrawing(true);
      setStartNode(node);
    }
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDrawing && startNode) {
        const svg = svgRef.current;
        const line = svg?.querySelector('.temp-line') as SVGLineElement | null;
        if (line) {
          const rect = svg?.getBoundingClientRect();
          const x2 = rect ? ((e.clientX - rect.left) / rect.width) * 100 : 0;
          const y2 = rect ? ((e.clientY - rect.top) / rect.height) * 100 : 0;
          line.setAttribute('x2', `${x2}%`);
          line.setAttribute('y2', `${y2}%`);
        }
      }
    };

    window.addEventListener('mousemove', handleMouseMove as any);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove as any);
    };
  }, [isDrawing, startNode]);

  return (
    <div className='relative w-full  h-full pb-[25%]' onMouseDown={handleMouseDownBackground}>
      <div className='absolute inset-0 flex items-center gap-6 pl-8 text-sm lg:text-xl'>
        {connected ? (
          <div className='text-blue-300'>Simple as that!</div>
        ) : (
          <>
            Try it yourself
            <FaArrowRight className='-top-14 animate-moveHorizontalNoY' />
          </>
        )}
      </div>
      <svg ref={svgRef} className='absolute inset-0 w-full h-full' viewBox="0 0 100 25" preserveAspectRatio="xMinYMin meet">
        {connected && <AnimatedGradientLine staticNodes={staticNodes} />}
        {isDrawing && startNode && (
          <line
            className="temp-line"
            x1={`${startNode.x}%`}
            y1={`${startNode.y}%`}
            x2={`${startNode.x}%`}
            y2={`${startNode.y}%`}
            stroke="white"
            strokeWidth="0.6"
          />
        )}
      </svg>
      {staticNodes.map((node) => (
        <div
          key={node.id}
          onMouseDown={(e) => {
            e.stopPropagation(); // Prevent triggering the background mouse down
            handleMouseDown(node);
          }}
          className='absolute lg:w-4 lg:h-4 md:w-2 md:h-2 bg-white border border-black cursor-pointer'
          style={{
            top: `${node.y}%`,
            left: `${node.x}%`,
            transform: 'translate(-50%, -50%)',
          }}
        />
      ))}
    </div>
  );
};

const AnimatedGradientLine = ({ staticNodes }: { staticNodes: Node[] }) => {
  useEffect(() => {
    const animateGradient = () => {
      const gradient = document.querySelector('#animated-gradient');
      let gradientOffset = 0;

      const animate = () => {
        gradientOffset += 0.01;

        if (gradient) {
          gradient.setAttribute('x1', `${gradientOffset * 100}%`);
          gradient.setAttribute('x2', `${(gradientOffset + 0.5) * 100}%`);
        }

        requestAnimationFrame(animate);
      };

      animate();
    };

    animateGradient();
  }, []);

  return (
    <svg width="100%" height="100%">
      <defs>
        <linearGradient id="animated-gradient" gradientUnits="userSpaceOnUse" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#ff00ff">
            <animate attributeName="stop-color" values="#ff00ff;#00ffff;#ff00ff" dur="5s" repeatCount="indefinite" />
          </stop>
          <stop offset="100%" stopColor="#00ffff">
            <animate attributeName="stop-color" values="#00ffff;#ff00ff;#00ffff" dur="5s" repeatCount="indefinite" />
          </stop>
        </linearGradient>
      </defs>
      <line
        x1={`${staticNodes[0].x}%`}
        y1={`${staticNodes[0].y}%`}
        x2={`${staticNodes[1].x}%`}
        y2={`${staticNodes[1].y}%`}
        stroke="url(#animated-gradient)"
        strokeWidth="0.6"
      />
    </svg>
  );
};

export default NodeConnector;
