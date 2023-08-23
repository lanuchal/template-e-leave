import React, { useState, useRef } from "react";
import { Stage, Layer, Line, Rect } from "react-konva";

function DrawingBoard() {
  const [lines, setLines] = useState([]);
  const [isDrawing, setIsDrawing] = useState(false);
  const stageRef = useRef(null);

  const handleMouseDown = (e) => {
    setIsDrawing(true);
    const pos = e.target.getStage().getPointerPosition();
    setLines([...lines, { points: [pos.x, pos.y] }]);
  };

  const handleMouseMove = (e) => {
    if (!isDrawing) return;

    const stage = e.target.getStage();
    const point = stage.getPointerPosition();

    const lastLine = lines[lines.length - 1];
    lastLine.points = lastLine.points.concat([point.x, point.y]);

    setLines([...lines.slice(0, lines.length - 1), lastLine]);
  };

  const handleMouseUp = () => {
    setIsDrawing(false);
  };

  const handleClear = () => {
    setLines([]);
  };

  const handleSaveImage = () => {
    const lineLayer = stageRef.current.findOne('.line-layer');
    const dataURL = lineLayer.toDataURL();
    console.log(dataURL);
  };

  return (
    <div>
      <button onClick={handleClear}>Clear</button>
      <button onClick={handleSaveImage}>Save Image</button>
      <div className="card w-50 mx-auto">
        <Stage
        className="mx-auto my-2 border border-dark"
          width={600}
          height={600}
          onMouseDown={handleMouseDown}
          onMousemove={handleMouseMove}
          onMouseup={handleMouseUp}
          ref={stageRef}
        >
          <Layer name="line-layer">
            <Rect width={600} height={600} cornerRadius={10} />
            {lines.map((line, index) => (
              <Line
                key={index}
                points={line.points}
                stroke="black"
                strokeWidth={5}
                tension={0.5}
                lineCap="round"
                globalCompositeOperation="source-over"
              />
            ))}
          </Layer>
        </Stage>
      </div>
    </div>
  );
}

export default DrawingBoard;
