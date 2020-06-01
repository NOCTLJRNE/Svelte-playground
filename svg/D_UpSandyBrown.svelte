<script>
  import { blur, draw } from "svelte/transition";
  import { linear } from "svelte/easing";
  let visible1 = false;
  let visible2 = false;
  let visible3 = false;
  let visible4 = false;
  let inSpeed = 0.3;
  let maskOutSpeed = 0.1;
  let strokeOutSpeed = 0.12;
  let color = "rgb(200, 200, 200)";
  function toggleVisible() {
    visible1 = false;
    visible2 = false;
    visible3 = false;
    visible4 = false;
  }
</script>

<button
  on:click={() => {
    visible1 = true;
  }}>
  Draw D SandyBrown
</button>
<button on:click={toggleVisible}>Erase D SandyBrown</button>
<br />
<svg
  xmlns:dc="http://purl.org/dc/elements/1.1/"
  xmlns:cc="http://creativecommons.org/ns#"
  xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
  xmlns:svg="http://www.w3.org/2000/svg"
  xmlns="http://www.w3.org/2000/svg"
  width="210mm"
  height="297mm"
  viewBox="0 0 210 297"
  version="1.1"
  id="svg1497">
  <defs id="defs1491">
    <mask id="mask13452" maskUnits="userSpaceOnUse">
      {#if visible1}
        <path
          in:draw={{ easing: linear, speed: inSpeed }}
          out:blur={{ radius: 20, duration: 1500 }}
          on:introend={() => {
            console.log('finished D !');
          }}
          id="path13454"
          d="M 98.101562,78.183969 68.076538,193.52762 83.832243,196.5004 c 0,0
          8.621045,1.18911 14.566594,-0.89183 5.945553,-2.08095
          15.458433,-5.94555 17.242093,-7.72922 1.78367,-1.78366
          5.05372,-4.45916 9.51288,-11.29654 4.45916,-6.83738 8.91832,-16.35026
          9.81016,-20.51215 0.89183,-4.16188 3.27005,-9.51287 2.37822,-16.05298
          -0.89184,-6.5401 -2.37822,-13.97204 -2.37822,-13.97204 0,0
          -0.2973,-6.83738 -5.05372,-10.99927 -4.75644,-4.16188
          -12.18838,-8.02649 -12.18838,-8.02649 0,0 -2.37822,-1.48638
          -8.62104,-2.08094 -6.24283,-0.59455 -19.620314,2.37822
          -27.052252,4.16189 -7.431935,1.78366 -43.105232,19.02575
          -43.105232,19.02575"
          style="fill:none;stroke:#f4a460;stroke-width:21.10000038;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
      {/if}
    </mask>
  </defs>
  <metadata id="metadata1494">
    <rdf:RDF>
      <cc:Work rdf:about="">
        <dc:format>image/svg+xml</dc:format>
        <dc:type rdf:resource="http://purl.org/dc/dcmitype/StillImage" />
        <dc:title />
      </cc:Work>
    </rdf:RDF>
  </metadata>
  <g id="layer1">
    <g
      id="flowRoot2042"
      style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:160px;line-height:1.25;font-family:Sriracha;-inkscape-font-specification:Sriracha;letter-spacing:0px;word-spacing:0px;fill:#000000;fill-opacity:1;stroke:none"
      mask="url(#mask13452)"
      transform="scale(0.26458333)"
      aria-label="D">
      {#if visible1}
        <path
          in:draw={{ easing: linear, speed: inSpeed }}
          out:blur={{ radius: 20, duration: 1500 }}
          id="path13456"
          style="fill:#f4a460;fill-opacity:1"
          d="m 91.517578,93.109141 q 4.64,0 7.04,1.28 2.400002,1.28
          2.400002,3.36 3.04,-0.48 5.28,-0.64 2.4,-0.16 5.28,-0.16 11.52,0
          19.36,5.599999 8,5.6 11.84,14.72 4,9.12 4,19.68 0,2.72 -0.16,4
          -1.44,19.2 -9.6,33.92 -8.16,14.56 -21.6,22.56 -13.28,8 -29.920002,8
          -4.64,0 -11.36,-1.12 -2.56,-0.48 -6.08,-3.36 -3.36,-3.04 -5.76,-6.88
          -2.4,-3.84 -2.4,-6.88 0,-1.76 0.48,-3.36 l 16.8,-64.8 q -9.12,2.72
          -15.36,7.04 -1.92,-1.92 -2.88,-4.8 -0.96,-2.88 -0.96,-5.92 0,-3.52
          2.88,-6.24 7.52,-4.8 20.8,-8.16 3.04,-7.839999 9.92,-7.839999 z m
          -11.2,94.559999 q 3.84,0.96 8.32,0.96 11.2,0 19.200002,-6.08 8,-6.24
          12.48,-15.68 4.64,-9.44 6.08,-19.52 0.64,-4 0.64,-8.96 0,-11.2
          -4.96,-17.6 -4.96,-6.56 -15.36,-6.56 -4.48,0 -8.160002,0.64
          -2.88,12.48 -12.16,48.8 -4.96,19.52 -6.08,24 z" />
      {/if}
    </g>
  </g>
</svg>
