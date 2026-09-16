// Custom WebGL Globe implementation based on Cobe with bug-fixed VAO/attribute state management

export interface Marker {
  location: [number, number];
  size: number;
  color?: [number, number, number];
  id?: string;
}

export interface Arc {
  from: [number, number];
  to: [number, number];
  color?: [number, number, number];
  id?: string;
}

export interface COBEOptions {
  width: number;
  height: number;
  phi: number;
  theta: number;
  psi?: number; // 3D roll angle around Z-axis
  mapSamples: number;
  mapBrightness: number;
  mapBaseBrightness?: number;
  baseColor: [number, number, number];
  markerColor: [number, number, number];
  glowColor: [number, number, number];
  markers?: Marker[];
  diffuse: number;
  devicePixelRatio: number;
  dark: number;
  opacity?: number;
  offset?: [number, number];
  scale?: number;
  context?: WebGLContextAttributes;
  arcs?: Arc[];
  arcColor?: [number, number, number];
  arcWidth?: number;
  arcHeight?: number;
  markerElevation?: number;
}

export interface Globe {
  update: (state: Partial<COBEOptions>) => void;
  destroy: () => void;
}

const { PI, sin, cos } = Math;

const baseVS = `
  attribute vec2 a;
  void main() {
    gl_Position = vec4(a, 0.0, 1.0);
  }
`;

const baseFS = `
  precision highp float;
  uniform vec2 t, v;
  uniform vec3 s;
  uniform vec3 F, w;
  uniform vec4 n;
  uniform float k, x, y;
  uniform sampler2D z;
  float u;
  
  mat3 A(float a, float b) {
    float c = cos(a), d = cos(b), e = sin(a), f = sin(b);
    return mat3(d, f*e, -f*c, 0.0, c, e, f, d*-e, d*c);
  }
  
  vec3 B(vec3 c, out float G) {
    c = c.xzy;
    float q = max(2.0, floor(log2(2.236068 * k * 3.141593 * (1.0 - c.z * c.z)) * 0.72021));
    vec2 g = floor(pow(1.618034, q) / 2.236068 * vec2(1.0, 1.618034) + 0.5);
    vec2 d = fract((g + 1.0) * 0.618034) * 6.283185 - 3.883222;
    vec2 e = -2.0 * g;
    vec2 f = vec2(atan(c.y, c.x), c.z - 1.0);
    vec2 r = floor(vec2(e.y * f.x - d.y * (f.y * k + 1.0), -e.x * f.x + d.x * (f.y * k + 1.0)) / (d.x * e.y - e.x * d.y));
    float o = 3.141593;
    vec3 C;
    for (float h = 0.0; h < 4.0; h += 1.0) {
      vec2 D = vec2(mod(h, 2.0), floor(h * 0.5));
      float j = dot(g, r + D);
      if (j > k) continue;
      float a = j, b = 0.0;
      if (a >= 16384.0) { a -= 16384.0; b += 0.868872; }
      if (a >= 8192.0) { a -= 8192.0; b += 0.934436; }
      if (a >= 4096.0) { a -= 4096.0; b += 0.467218; }
      if (a >= 2048.0) { a -= 2048.0; b += 0.733609; }
      if (a >= 1024.0) { a -= 1024.0; b += 0.866804; }
      if (a >= 512.0) { a -= 512.0; b += 0.433402; }
      if (a >= 256.0) { a -= 256.0; b += 0.216701; }
      if (a >= 128.0) { a -= 128.0; b += 0.108351; }
      if (a >= 64.0) { a -= 64.0; b += 0.554175; }
      if (a >= 32.0) { a -= 32.0; b += 0.777088; }
      if (a >= 16.0) { a -= 16.0; b += 0.888544; }
      if (a >= 8.0) { a -= 8.0; b += 0.944272; }
      if (a >= 4.0) { a -= 4.0; b += 0.472136; }
      if (a >= 2.0) { a -= 2.0; b += 0.236068; }
      if (a >= 1.0) { a -= 1.0; b += 0.618034; }
      float l = fract(b) * 6.283185;
      float i = 1.0 - 2.0 * j * u;
      float m = sqrt(1.0 - i * i);
      vec3 p = vec3(cos(l) * m, sin(l) * m, i);
      float E = length(c - p);
      if (E < o) { o = E; C = p; }
    }
    G = o;
    return C.xzy;
  }
  
  void main() {
    u = 1.0 / k;
    vec2 c = 1.0 / t;
    vec2 b = (gl_FragCoord.xy * c * 2.0 - 1.0) / x - v * vec2(1.0, -1.0) * c;
    b.x *= t.x * c.y;
    // 3D Roll rotation around Z-axis:
    float cp = cos(s.z), sp = sin(s.z);
    b = vec2(cp * b.x + sp * b.y, -sp * b.x + cp * b.y);
    float a = dot(b, b);
    float f = 0.0;
    vec4 l = vec4(0.0);
    if (a <= 0.64) {
      float g;
      vec4 m = vec4(0.0);
      vec3 h = normalize(vec3(b, sqrt(0.64 - a)));
      mat3 o = A(s.y, s.x);
      float i = h.z;
      vec3 d = B(h * o, g);
      float j = asin(d.y);
      float e = acos(-d.x / cos(j));
      e = d.z < 0.0 ? -e : e;
      float p = max(texture2D(z, vec2(e * 0.5 / 3.141593, -(j / 3.141593 + 0.5))).x, y);
      float q = p * smoothstep(0.008, 0.0, g) * pow(i, n.y) * n.x;
      m += vec4(F * (mix((1.0 - q) * pow(i, 0.4), q, n.z) + 0.1) + pow(1.0 - i, 4.0) * w, 1.0);
      l += m * (1.0 + n.w) * 0.5;
      f = (1.0 - a) * (1.0 - a) * smoothstep(0.0, 1.0, 0.2 / (a - 0.64));
    } else {
      float r = sqrt(0.2 / (a - 0.64));
      f = smoothstep(0.5, 1.0, r / (r + 1.0));
    }
    gl_FragColor = l + vec4(f * w, f);
  }
`;

const markerVS = `
  varying vec2 m;
  varying vec3 g;
  varying float h;
  attribute vec2 n;
  attribute vec3 p, w;
  attribute float q, x;
  uniform vec2 b, r;
  uniform float i, j, k, s, u_psi;
  
  void main() {
    float c = cos(j), d = sin(j), e = cos(i), f = sin(i);
    vec3 a = p * (0.8 + s);
    vec3 l = vec3(
      e * a.x + f * a.z,
      f * d * a.x + c * a.y - e * d * a.z,
      -f * c * a.x + d * a.y + e * c * a.z
    );
    // 3D Roll rotation around Z-axis:
    float cp = cos(u_psi), sp = sin(u_psi);
    l.xy = vec2(cp * l.x - sp * l.y, sp * l.x + cp * l.y);

    if (l.z < 0.0 && length(l.xy) < 0.8) {
      gl_Position = vec4(2.0, 2.0, 0.0, 1.0);
      return;
    }
    float t = b.y / b.x;
    vec2 y = (l.xy + n * q * 2.0) * vec2(t, 1.0) * k + r * vec2(1.0, -1.0) * k / b;
    gl_Position = vec4(y, 0.0, 1.0);
    m = n;
    g = w;
    h = x;
  }
`;

const markerFS = `
  precision highp float;
  varying vec2 m;
  varying vec3 g;
  varying float h;
  uniform vec3 v;
  
  void main() {
    float dist = length(m);
    if (dist > 0.5) discard;
    vec3 a = h > 0.5 ? g : v;
    float alpha = smoothstep(0.5, 0.1, dist);
    gl_FragColor = vec4(a, alpha);
  }
`;

const arcVS = `
  varying vec3 i;
  varying float j, s, t;
  attribute vec2 k;
  attribute vec3 l, m, N;
  attribute float v, w, O;
  uniform vec2 g, x;
  uniform float y, z, h, A, u_psi;
  
  mat3 B(float a, float b) {
    float c = cos(a), d = cos(b), e = sin(a), f = sin(b);
    return mat3(d, f*e, -f*c, 0.0, c, e, f, d*-e, d*c);
  }
  
  vec3 C(vec3 c, vec3 d, vec3 e, float a) {
    float b = 1.0 - a;
    return b*b*c + 2.0*b*a*d + a*a*e;
  }
  
  vec3 D(vec3 c, vec3 b, vec3 d, float a) {
    float e = 1.0 - a;
    return 2.0*e*(b - c) + 2.0*a*(d - b);
  }
  
  void main() {
    mat3 b = B(z, y);
    float c = 0.8 + A;
    vec3 d = l * c, e = m * c, f = l + m;
    float n = length(f);
    vec3 E = n > 1e-3 ? f / n : vec3(0.0, 1.0, 0.0);
    vec3 o = E * (0.8 + v);
    float p = k.x;
    vec3 F = C(d, o, e, p);
    vec3 q = b * F;
    vec3 G = D(d, o, e, p);
    vec3 H = b * G;

    // 3D Roll rotation around Z-axis:
    float cp = cos(u_psi), sp = sin(u_psi);
    q.xy = vec2(cp * q.x - sp * q.y, sp * q.x + cp * q.y);
    H.xy = vec2(cp * H.x - sp * H.y, sp * H.x + cp * H.y);

    vec2 a = H.xy;
    float r = length(a);
    vec2 I = r > 1e-3 ? vec2(-a.y, a.x) / r : vec2(1.0, 0.0);
    float J = g.x / g.y;
    vec2 K = q.xy * vec2(1.0 / J, 1.0) * h + x * vec2(1.0, -1.0) * h / g;
    vec2 P = K + I * w * k.y * h;
    gl_Position = vec4(P, 0.0, 1.0);
    i = N;
    j = O;
    s = q.z;
    t = length(q.xy);
  }
`;

const arcFS = `
  precision highp float;
  varying vec3 i;
  varying float j, s, t;
  uniform vec3 M;
  
  void main() {
    if (s < 0.0 && t < 0.8) discard;
    vec3 a = j > 0.5 ? i : M;
    gl_FragColor = vec4(a, 0.85);
  }
`;

function toCartesian([lat, lng]: [number, number]): [number, number, number] {
  const r = lat * PI / 180;
  const a = lng * PI / 180 - PI;
  const o = cos(r);
  return [-o * cos(a), sin(r), o * sin(a)];
}

function compileShader(gl: WebGLRenderingContext | WebGL2RenderingContext, type: number, src: string) {
  const s = gl.createShader(type)!;
  gl.shaderSource(s, src);
  gl.compileShader(s);
  if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) {
    console.error(gl.getShaderInfoLog(s));
    gl.deleteShader(s);
    return null;
  }
  return s;
}

function createProgram(gl: WebGLRenderingContext | WebGL2RenderingContext, vsSrc: string, fsSrc: string) {
  const vs = compileShader(gl, gl.VERTEX_SHADER, vsSrc);
  const fs = compileShader(gl, gl.FRAGMENT_SHADER, fsSrc);
  if (!vs || !fs) return null;
  const pr = gl.createProgram()!;
  gl.attachShader(pr, vs);
  gl.attachShader(pr, fs);
  gl.linkProgram(pr);
  if (!gl.getProgramParameter(pr, gl.LINK_STATUS)) {
    console.error(gl.getProgramInfoLog(pr));
    gl.deleteProgram(pr);
    return null;
  }
  gl.deleteShader(vs);
  gl.deleteShader(fs);
  return pr;
}

export function createCobeGlobe(canvas: HTMLCanvasElement, opts: COBEOptions): Globe {
  const gl2 = canvas.getContext('webgl2', {
    alpha: true,
    stencil: false,
    antialias: true,
    depth: false,
    preserveDrawingBuffer: false,
    ...opts.context,
  });

  const gl1 = !gl2 ? canvas.getContext('webgl', opts.context) : null;
  const gl: any = gl2 || gl1;
  if (!gl) return { update: () => {}, destroy: () => {} };
  const extInst = !gl2 && gl1 ? gl1.getExtension('ANGLE_instanced_arrays') : null;

  const dpr = opts.devicePixelRatio || 1;
  canvas.width = opts.width * dpr;
  canvas.height = opts.height * dpr;

  let phi = opts.phi || 0;
  let theta = opts.theta || 0;
  let psi = opts.psi || 0;
  let markers = opts.markers || [];
  let arcs = opts.arcs || [];
  let mapSamples = opts.mapSamples || 16000;
  let mapBrightness = opts.mapBrightness || 5.5;
  let mapBaseBrightness = opts.mapBaseBrightness || 0;
  let baseColor = opts.baseColor || [0.26, 0.35, 0.31];
  let markerColor = opts.markerColor || [0.55, 0.98, 0.85];
  let glowColor = opts.glowColor || [0.38, 0.80, 0.68];
  let arcColor = opts.arcColor || [0.45, 0.88, 0.74];
  let arcWidth = opts.arcWidth ?? 1.5;
  let arcHeight = opts.arcHeight ?? 0.32;
  let diffuse = opts.diffuse || 1.25;
  let dark = opts.dark || 1;
  let opacity = opts.opacity ?? 1;
  let offset = opts.offset || [0, 0];
  let scale = opts.scale || 1;
  let markerElevation = opts.markerElevation ?? 0.05;

  const basePrg = createProgram(gl, baseVS, baseFS)!;
  const markerPrg = createProgram(gl, markerVS, markerFS)!;
  const arcPrg = createProgram(gl, arcVS, arcFS)!;

  if (!basePrg || !markerPrg || !arcPrg) {
    return { update: () => {}, destroy: () => {} };
  }

  // Buffers
  const quadBuf = gl.createBuffer()!;
  gl.bindBuffer(gl.ARRAY_BUFFER, quadBuf);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]), gl.STATIC_DRAW);

  const arcStripBuf = gl.createBuffer()!;
  gl.bindBuffer(gl.ARRAY_BUFFER, arcStripBuf);
  const arcPoints: number[] = [];
  for (let i = 0; i <= 32; i++) {
    const t = i / 32;
    arcPoints.push(t, -1, t, 1);
  }
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(arcPoints), gl.STATIC_DRAW);

  const markerDataBuf = gl.createBuffer()!;
  const arcDataBuf = gl.createBuffer()!;

  // Textures
  const mapTex = gl.createTexture()!;
  gl.bindTexture(gl.TEXTURE_2D, mapTex);
  gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGB, 1, 1, 0, gl.RGB, gl.UNSIGNED_BYTE, new Uint8Array([0, 0, 0]));

  const mapImg = new Image();
  mapImg.onload = () => {
    if (!gl) return;
    gl.bindTexture(gl.TEXTURE_2D, mapTex);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGB, gl.RGB, gl.UNSIGNED_BYTE, mapImg);
    gl.generateMipmap(gl.TEXTURE_2D);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, mapTex);
  };
  mapImg.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAACAAQAAAADMzoqnAAAECklEQVR42u3VsW4jRRzH8d94gzfF4Q0VQaC4vBLTRTp0mze4ggfAPAE5XQEFsGNAVIjwBrmW7h7gJE+giKjyABTZE4g06LKJETdRJvtD65kdz6yduKABiW+TVfzRf2bXYxtcE/59YJCz6YdbgQF6ACSRrwYKYImmh5PbwOewlV3wlQNbAN6SEExjUOO+BU0aCSnxReHABUlK4YFQeJeUT3da8IIkZ6NGoSnFY5KsMoVzMKfECUnqxgPYRArarmUCndHwzIEaQEpg5xVdBXROl8mpAQx5dUgPiHoYAAkg5w3JABR06byGAVgcRGAz5bznj6phBQNRFwyqgdxebH6gshJAesWoFhgYpApAFoG8BIZ/fEhSox5jDjQXmV0Ar5XJfAIrALi3URVs09gHIL4XJCkLC5LH9JWiArABFCSrQjdgkBzRJ0WJeUOSNyQAfJJwUSWUBRlJQ8oGHATACGlBynnzy2kEYLNjrxouigD8BZcgOeVPqh12RtufaCN5wCPVDpvQ9lsIrqndsJtDcWqBCpf4hWN7OdWHBw58FwIaNOU/n1TpMW2DFaD48cmr4185T8NHkpUFX749pQPVdgRKC/DGoQPVeAEKv+WHvY8OOWNTPRp5kHuwSf8wzXtVBKR7YwEH9H3lQUaypUfSATOALyVNu5vZJW31Bnx98nkLfDUWJaz6ixvm+RIQRdl3kmRxxiaDoGnZW4CpPfkaQadlcPim1xOSvETQo7Lv75enVAXJ3xGUlony4KQBBWUM1NiDc6qhyS8RgQs18OCMMtPDaAUIyg0PZkRWDqs+wnKJBTDI1Js6BolegOsKmUxNDBAAKqQyMQmidhegBlLZ+wwKYdv5M/8x1khkb1cgKqP2H+MKyV5vS+whrE8DQDgAlUAoRBX056EElJCjJVACeJBZgNfVp+iCCm4RBWCgKsRxASSA9KgDhDtCiTuMyfHsKXzhC6wNAIjjWb8LKAOA2ctk3FmCOlgKFy8f1N0JJtgsxinYnVAHt4t3gPzZXSCTyCWCQmBT91QE3B5yarSN40dNHYPka4TlDhTUI8zLvl0JSL3vZn6DsCFZOeB2yROEpR68sECQQA++xIGCR2X7DwlEoLRgUrZrqlUg50S1uy43YqDcN6UFBVkhAjWiCV2Q0jgQPdplMKxvBXodcOfAwJYvgdL+1etA1YJJfBcZlQV7sO1i2gHoNiyxtQ5sBsCgWyoxCHiFFd2L5nUTCqMAqGUgsQ9f5kCcCiZgRYkMgMTd5WsB1rTzj0Em14BE4r+QxN1lCEsVur2PoF5Wbg8RJXR4djgvBgauhLywoEZQrt1KKRdVS4CdlJ8qafyP+9KIj/nE/d7kKwH9jgS72e9DV+kvfTWgct4ZyP8Byb8BPG7MaaIIkAQAAAAASUVORK5CYII=";

  const setDivisor = (loc: number, div: number) => {
    if (gl instanceof WebGL2RenderingContext) {
      gl.vertexAttribDivisor(loc, div);
    } else if (extInst) {
      extInst.vertexAttribDivisorANGLE(loc, div);
    }
  };

  const drawInstanced = (mode: number, first: number, count: number, primcount: number) => {
    if (gl instanceof WebGL2RenderingContext) {
      gl.drawArraysInstanced(mode, first, count, primcount);
    } else if (extInst) {
      extInst.drawArraysInstancedANGLE(mode, first, count, primcount);
    }
  };

  const resetAllAttribs = () => {
    for (let i = 0; i < 8; i++) {
      gl.disableVertexAttribArray(i);
      setDivisor(i, 0);
    }
  };

  function updateBuffers() {
    if (markers.length > 0) {
      const data = new Float32Array(8 * markers.length);
      markers.forEach((m, idx) => {
        data.set([...toCartesian(m.location), m.size, ...m.color || [0, 0, 0], m.color ? 1 : 0], 8 * idx);
      });
      gl.bindBuffer(gl.ARRAY_BUFFER, markerDataBuf);
      gl.bufferData(gl.ARRAY_BUFFER, data, gl.DYNAMIC_DRAW);
    }

    if (arcs.length > 0) {
      const data = new Float32Array(12 * arcs.length);
      arcs.forEach((a, idx) => {
        data.set([...toCartesian(a.from), ...toCartesian(a.to), arcHeight + markerElevation, 0.005 * arcWidth, ...a.color || [0, 0, 0], a.color ? 1 : 0], 12 * idx);
      });
      gl.bindBuffer(gl.ARRAY_BUFFER, arcDataBuf);
      gl.bufferData(gl.ARRAY_BUFFER, data, gl.DYNAMIC_DRAW);
    }
  }

  updateBuffers();

  function render(state: Partial<COBEOptions>) {
    if (state.phi !== undefined) phi = state.phi;
    if (state.theta !== undefined) theta = state.theta;
    if (state.psi !== undefined) psi = state.psi;
    if (state.scale !== undefined) scale = state.scale;
    if (state.offset !== undefined) offset = state.offset;
    if (state.markers) {
      markers = state.markers;
      updateBuffers();
    }
    if (state.arcs) {
      arcs = state.arcs;
      updateBuffers();
    }
    if (state.width && state.height) {
      canvas.width = state.width * dpr;
      canvas.height = state.height * dpr;
    }

    gl.viewport(0, 0, canvas.width, canvas.height);
    gl.clearColor(0, 0, 0, 0);
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.enable(gl.BLEND);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);

    // 1. BASE GLOBE PASS
    resetAllAttribs();
    gl.useProgram(basePrg);
    gl.bindBuffer(gl.ARRAY_BUFFER, quadBuf);
    const baseA = gl.getAttribLocation(basePrg, 'a');
    gl.enableVertexAttribArray(baseA);
    gl.vertexAttribPointer(baseA, 2, gl.FLOAT, false, 0, 0);
    setDivisor(baseA, 0);

    gl.uniform2f(gl.getUniformLocation(basePrg, 't'), canvas.width, canvas.height);
    gl.uniform3f(gl.getUniformLocation(basePrg, 's'), phi, theta, psi);
    gl.uniform1f(gl.getUniformLocation(basePrg, 'k'), mapSamples);
    gl.uniform1f(gl.getUniformLocation(basePrg, 'x'), scale);
    gl.uniform2f(gl.getUniformLocation(basePrg, 'v'), offset[0] * dpr, offset[1] * dpr);
    gl.uniform3fv(gl.getUniformLocation(basePrg, 'F'), baseColor);
    gl.uniform3fv(gl.getUniformLocation(basePrg, 'w'), glowColor);
    gl.uniform4f(gl.getUniformLocation(basePrg, 'n'), mapBrightness, diffuse, dark, opacity);
    gl.uniform1f(gl.getUniformLocation(basePrg, 'y'), mapBaseBrightness);
    gl.uniform1i(gl.getUniformLocation(basePrg, 'z'), 0);

    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, mapTex);
    gl.drawArrays(gl.TRIANGLES, 0, 6);

    // 2. ARCS PASS
    if (arcs.length > 0) {
      resetAllAttribs();
      gl.useProgram(arcPrg);
      gl.bindBuffer(gl.ARRAY_BUFFER, arcStripBuf);
      const kLoc = gl.getAttribLocation(arcPrg, 'k');
      gl.enableVertexAttribArray(kLoc);
      gl.vertexAttribPointer(kLoc, 2, gl.FLOAT, false, 0, 0);
      setDivisor(kLoc, 0);

      gl.bindBuffer(gl.ARRAY_BUFFER, arcDataBuf);
      const lLoc = gl.getAttribLocation(arcPrg, 'l');
      const mLoc = gl.getAttribLocation(arcPrg, 'm');
      const vLoc = gl.getAttribLocation(arcPrg, 'v');
      const wLoc = gl.getAttribLocation(arcPrg, 'w');
      const NLoc = gl.getAttribLocation(arcPrg, 'N');
      const OLoc = gl.getAttribLocation(arcPrg, 'O');

      const stride = 48;
      const bindInst = (loc: number, size: number, off: number) => {
        if (loc >= 0) {
          gl.enableVertexAttribArray(loc);
          gl.vertexAttribPointer(loc, size, gl.FLOAT, false, stride, off);
          setDivisor(loc, 1);
        }
      };

      bindInst(lLoc, 3, 0);
      bindInst(mLoc, 3, 12);
      bindInst(vLoc, 1, 24);
      bindInst(wLoc, 1, 28);
      bindInst(NLoc, 3, 32);
      bindInst(OLoc, 1, 44);

      gl.uniform1f(gl.getUniformLocation(arcPrg, 'y'), phi);
      gl.uniform1f(gl.getUniformLocation(arcPrg, 'z'), theta);
      gl.uniform1f(gl.getUniformLocation(arcPrg, 'u_psi'), psi);
      gl.uniform2f(gl.getUniformLocation(arcPrg, 'g'), canvas.width, canvas.height);
      gl.uniform1f(gl.getUniformLocation(arcPrg, 'h'), scale);
      gl.uniform2f(gl.getUniformLocation(arcPrg, 'x'), offset[0] * dpr, offset[1] * dpr);
      gl.uniform3fv(gl.getUniformLocation(arcPrg, 'M'), arcColor);
      gl.uniform1f(gl.getUniformLocation(arcPrg, 'A'), markerElevation);

      drawInstanced(gl.TRIANGLE_STRIP, 0, 66, arcs.length);
    }

    // 3. MARKERS PASS
    if (markers.length > 0) {
      resetAllAttribs();
      gl.useProgram(markerPrg);
      gl.bindBuffer(gl.ARRAY_BUFFER, quadBuf);
      const nLoc = gl.getAttribLocation(markerPrg, 'n');
      if (nLoc >= 0) {
        gl.enableVertexAttribArray(nLoc);
        gl.vertexAttribPointer(nLoc, 2, gl.FLOAT, false, 0, 0);
        setDivisor(nLoc, 0);
      }

      gl.bindBuffer(gl.ARRAY_BUFFER, markerDataBuf);
      const pLoc = gl.getAttribLocation(markerPrg, 'p');
      const qLoc = gl.getAttribLocation(markerPrg, 'q');
      const wLoc = gl.getAttribLocation(markerPrg, 'w');
      const xLoc = gl.getAttribLocation(markerPrg, 'x');

      const stride = 32;
      const bindInst = (loc: number, size: number, off: number) => {
        if (loc >= 0) {
          gl.enableVertexAttribArray(loc);
          gl.vertexAttribPointer(loc, size, gl.FLOAT, false, stride, off);
          setDivisor(loc, 1);
        }
      };

      bindInst(pLoc, 3, 0);
      bindInst(qLoc, 1, 12);
      bindInst(wLoc, 3, 16);
      bindInst(xLoc, 1, 28);

      gl.uniform1f(gl.getUniformLocation(markerPrg, 'i'), phi);
      gl.uniform1f(gl.getUniformLocation(markerPrg, 'j'), theta);
      gl.uniform1f(gl.getUniformLocation(markerPrg, 'u_psi'), psi);
      gl.uniform2f(gl.getUniformLocation(markerPrg, 'b'), canvas.width, canvas.height);
      gl.uniform1f(gl.getUniformLocation(markerPrg, 'k'), scale);
      gl.uniform2f(gl.getUniformLocation(markerPrg, 'r'), offset[0] * dpr, offset[1] * dpr);
      gl.uniform3fv(gl.getUniformLocation(markerPrg, 'v'), markerColor);
      gl.uniform1f(gl.getUniformLocation(markerPrg, 's'), markerElevation);

      drawInstanced(gl.TRIANGLES, 0, 6, markers.length);
    }

    resetAllAttribs();
  }

  render({});

  return {
    update: (st) => render(st),
    destroy: () => {
      gl.deleteBuffer(quadBuf);
      gl.deleteBuffer(arcStripBuf);
      gl.deleteBuffer(markerDataBuf);
      gl.deleteBuffer(arcDataBuf);
      gl.deleteProgram(basePrg);
      gl.deleteProgram(markerPrg);
      gl.deleteProgram(arcPrg);
    },
  };
}
