"use client";

import { useEffect, useRef } from "react";

const CHARS = [" ", "·", ".", ":", ";", "+", "x", "#"];
const FONT_SIZE = 14;
const DAMPING = 0.985;
const MOUSE_RADIUS = 3;

export default function RDCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const ctx = canvas.getContext("2d")!;
    ctx.font = `${FONT_SIZE}px monospace`;
    ctx.textBaseline = "top";

    const cols = () => Math.floor(canvas.width / (FONT_SIZE * 0.6));
    const rows = () => Math.floor(canvas.height / FONT_SIZE);

    let C = cols();
    let R = rows();
    let cur = new Float32Array(C * R);
    let prev = new Float32Array(C * R);

    let mouseX = -1;
    let mouseY = -1;
    let mouseVel = 0;
    let lastMouseX = -1;
    let lastMouseY = -1;

    const onMouseMove = (e: MouseEvent) => {
      const cellW = canvas.width / C;
      const cellH = canvas.height / R;
      const cx = Math.floor(e.clientX / cellW);
      const cy = Math.floor(e.clientY / cellH);

      const dx = e.clientX - (lastMouseX < 0 ? e.clientX : lastMouseX);
      const dy = e.clientY - (lastMouseY < 0 ? e.clientY : lastMouseY);
      mouseVel = Math.min(Math.sqrt(dx * dx + dy * dy), 40);

      lastMouseX = e.clientX;
      lastMouseY = e.clientY;
      mouseX = cx;
      mouseY = cy;

      const strength = mouseVel * 0.15;
      for (let dy2 = -MOUSE_RADIUS; dy2 <= MOUSE_RADIUS; dy2++) {
        for (let dx2 = -MOUSE_RADIUS; dx2 <= MOUSE_RADIUS; dx2++) {
          const dist = Math.sqrt(dx2 * dx2 + dy2 * dy2);
          if (dist > MOUSE_RADIUS) continue;
          const nx = cx + dx2;
          const ny = cy + dy2;
          if (nx < 0 || nx >= C || ny < 0 || ny >= R) continue;
          prev[ny * C + nx] += strength * (1 - dist / MOUSE_RADIUS);
        }
      }
    };

    window.addEventListener("mousemove", onMouseMove);

    let raf: number;

    const step = () => {
      C = cols();
      R = rows();

      // wave propagation
      for (let y = 1; y < R - 1; y++) {
        for (let x = 1; x < C - 1; x++) {
          const i = y * C + x;
          cur[i] = (
            prev[(y - 1) * C + x] +
            prev[(y + 1) * C + x] +
            prev[y * C + (x - 1)] +
            prev[y * C + (x + 1)]
          ) / 2 - cur[i];
          cur[i] *= DAMPING;
        }
      }

      // clear borders to prevent edge accumulation
      for (let x = 0; x < C; x++) { cur[x] = 0; cur[(R - 1) * C + x] = 0; }
      for (let y = 0; y < R; y++) { cur[y * C] = 0; cur[y * C + C - 1] = 0; }

      // draw
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const cellW = canvas.width / C;
      const cellH = canvas.height / R;

      for (let y = 0; y < R; y++) {
        for (let x = 0; x < C; x++) {
          const v = cur[y * C + x];
          const abs = Math.abs(v);
          if (abs < 0.01) continue;
          const idx = Math.min(Math.floor(abs * 6), CHARS.length - 1);
          const ch = CHARS[idx];
          if (!ch || ch === " ") continue;
          const brightness = Math.min(Math.floor(abs * 400 + 40), 180);
          ctx.fillStyle = `rgb(${brightness},${brightness},${brightness})`;
          ctx.fillText(ch, x * cellW, y * cellH);
        }
      }

      // swap buffers
      const tmp = prev;
      prev = cur;
      cur = tmp;

      raf = requestAnimationFrame(step);
    };

    raf = requestAnimationFrame(step);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        inset: 0,
        width: "100%",
        height: "100%",
      }}
    />
  );
}
