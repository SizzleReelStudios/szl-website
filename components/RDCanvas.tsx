"use client";

import { useEffect, useRef } from "react";

const F = 0.0545;
const K = 0.062;
const DA = 1.0;
const DB = 0.5;
const DT = 1.0;
const STEPS_PER_FRAME = 8;

export default function RDCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const W = Math.floor(window.innerWidth / 2);
    const H = Math.floor(window.innerHeight / 2);
    canvas.width = W;
    canvas.height = H;

    const ctx = canvas.getContext("2d")!;
    const size = W * H;

    let A = new Float32Array(size).fill(1);
    let B = new Float32Array(size).fill(0);
    let nextA = new Float32Array(size);
    let nextB = new Float32Array(size);

    // seed a few spots
    const seed = (x: number, y: number, r: number) => {
      for (let dy = -r; dy <= r; dy++) {
        for (let dx = -r; dx <= r; dx++) {
          if (dx * dx + dy * dy <= r * r) {
            const idx = (y + dy) * W + (x + dx);
            if (idx >= 0 && idx < size) B[idx] = 1;
          }
        }
      }
    };
    seed(Math.floor(W * 0.5), Math.floor(H * 0.5), 6);
    seed(Math.floor(W * 0.3), Math.floor(H * 0.3), 4);
    seed(Math.floor(W * 0.7), Math.floor(H * 0.6), 5);

    const imageData = ctx.createImageData(W, H);

    let raf: number;

    function step() {
      for (let s = 0; s < STEPS_PER_FRAME; s++) {
        for (let y = 1; y < H - 1; y++) {
          for (let x = 1; x < W - 1; x++) {
            const i = y * W + x;
            const a = A[i];
            const b = B[i];

            const lapA =
              A[i - W] + A[i + W] + A[i - 1] + A[i + 1] - 4 * a;
            const lapB =
              B[i - W] + B[i + W] + B[i - 1] + B[i + 1] - 4 * b;

            const abb = a * b * b;
            nextA[i] = Math.max(0, Math.min(1, a + DT * (DA * lapA - abb + F * (1 - a))));
            nextB[i] = Math.max(0, Math.min(1, b + DT * (DB * lapB + abb - (K + F) * b)));
          }
        }
        [A, nextA] = [nextA, A];
        [B, nextB] = [nextB, B];
      }

      const d = imageData.data;
      for (let i = 0; i < size; i++) {
        const v = Math.floor(B[i] * 180);
        d[i * 4] = v;
        d[i * 4 + 1] = v;
        d[i * 4 + 2] = v;
        d[i * 4 + 3] = 255;
      }
      ctx.putImageData(imageData, 0, 0);
      raf = requestAnimationFrame(step);
    }

    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        inset: 0,
        width: "100%",
        height: "100%",
        imageRendering: "pixelated",
        opacity: 0.5,
      }}
    />
  );
}
