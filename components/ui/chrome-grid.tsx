'use client';

import React, { useEffect, useRef, useMemo } from 'react';

interface ChromeGridProps {
  className?: string;
}

export const ChromeGrid: React.FC<ChromeGridProps> = ({ className = '' }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const animationRef = useRef<number>();

  const gridConfig = useMemo(() => ({
    rows: 20,
    cols: 30,
    cellSize: 40,
    maxDistance: 150,
    baseHeight: 0.3,
    maxHeight: 0.8,
    perspective: 800,
    rotationX: -15,
    rotationY: 0,
  }), []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    const drawGrid = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      
      // Create gradient background
      const gradient = ctx.createRadialGradient(
        centerX, centerY, 0,
        centerX, centerY, Math.max(canvas.width, canvas.height) / 2
      );
      gradient.addColorStop(0, 'rgba(0, 20, 40, 0.9)');
      gradient.addColorStop(0.5, 'rgba(0, 10, 30, 0.95)');
      gradient.addColorStop(1, 'rgba(0, 0, 0, 1)');
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const { rows, cols, cellSize, maxDistance, baseHeight, maxHeight } = gridConfig;
      
      // Calculate grid offset to center it
      const gridWidth = cols * cellSize;
      const gridHeight = rows * cellSize;
      const offsetX = centerX - gridWidth / 2;
      const offsetY = centerY - gridHeight / 2 + 100; // Slight downward offset

      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          const x = offsetX + col * cellSize;
          const y = offsetY + row * cellSize;
          
          // Calculate distance from mouse
          const dx = mouseRef.current.x - x;
          const dy = mouseRef.current.y - y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          // Calculate height based on distance
          const normalizedDistance = Math.min(distance / maxDistance, 1);
          const height = baseHeight + (maxHeight - baseHeight) * (1 - normalizedDistance);
          
          // Calculate 3D position
          const perspective = gridConfig.perspective;
          const rotX = (gridConfig.rotationX * Math.PI) / 180;
          
          // Apply perspective transformation
          const z = height * 100;
          const scale = perspective / (perspective + z);
          const projectedX = x * scale;
          const projectedY = y * scale * Math.cos(rotX) - z * Math.sin(rotX);
          
          // Calculate color based on height and distance
          const intensity = height * 255;
          const hue = 200 + (1 - normalizedDistance) * 60; // Blue to cyan
          const saturation = 70 + (1 - normalizedDistance) * 30;
          const lightness = 30 + height * 50;
          
          // Draw the grid cell
          ctx.save();
          ctx.translate(projectedX, projectedY);
          
          // Create cell gradient
          const cellGradient = ctx.createRadialGradient(0, 0, 0, 0, 0, cellSize / 2);
          cellGradient.addColorStop(0, `hsla(${hue}, ${saturation}%, ${lightness}%, ${height})`);
          cellGradient.addColorStop(1, `hsla(${hue}, ${saturation}%, ${lightness * 0.3}%, ${height * 0.3})`);
          
          ctx.fillStyle = cellGradient;
          ctx.strokeStyle = `hsla(${hue}, ${saturation}%, ${lightness}%, ${height * 0.8})`;
          ctx.lineWidth = 1;
          
          // Draw diamond shape for more futuristic look
          ctx.beginPath();
          ctx.moveTo(0, -cellSize / 4);
          ctx.lineTo(cellSize / 4, 0);
          ctx.lineTo(0, cellSize / 4);
          ctx.lineTo(-cellSize / 4, 0);
          ctx.closePath();
          
          ctx.fill();
          ctx.stroke();
          
          // Add glow effect for nearby cells
          if (normalizedDistance < 0.5) {
            ctx.shadowColor = `hsla(${hue}, ${saturation}%, ${lightness}%, ${(1 - normalizedDistance) * 0.8})`;
            ctx.shadowBlur = 10 * (1 - normalizedDistance);
            ctx.fill();
          }
          
          ctx.restore();
        }
      }
      
      // Add connecting lines for enhanced effect
      ctx.strokeStyle = 'rgba(0, 150, 255, 0.1)';
      ctx.lineWidth = 0.5;
      
      for (let row = 0; row < rows - 1; row++) {
        for (let col = 0; col < cols - 1; col++) {
          const x1 = offsetX + col * cellSize;
          const y1 = offsetY + row * cellSize;
          const x2 = offsetX + (col + 1) * cellSize;
          const y2 = offsetY + (row + 1) * cellSize;
          
          // Calculate distances for both points
          const dx1 = mouseRef.current.x - x1;
          const dy1 = mouseRef.current.y - y1;
          const distance1 = Math.sqrt(dx1 * dx1 + dy1 * dy1);
          
          const dx2 = mouseRef.current.x - x2;
          const dy2 = mouseRef.current.y - y2;
          const distance2 = Math.sqrt(dx2 * dx2 + dy2 * dy2);
          
          if (distance1 < maxDistance || distance2 < maxDistance) {
            ctx.beginPath();
            ctx.moveTo(x1, y1);
            ctx.lineTo(x2, y2);
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      drawGrid();
      animationRef.current = requestAnimationFrame(animate);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    canvas.addEventListener('mousemove', handleMouseMove);
    
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      canvas.removeEventListener('mousemove', handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [gridConfig]);

  return (
    <canvas
      ref={canvasRef}
      className={`fixed inset-0 w-full h-full pointer-events-none ${className}`}
      style={{ zIndex: -1 }}
    />
  );
};