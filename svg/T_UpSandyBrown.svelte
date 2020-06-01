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
  Draw T SandyBrown
</button>
<button on:click={toggleVisible}>Erase T SandyBrown</button>
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
    <mask id="mask15135" maskUnits="userSpaceOnUse">
      {#if visible1}
        <path
          in:draw={{ easing: linear, speed: inSpeed }}
          out:blur={{ radius: 20, duration: 1500 }}
          on:introend={() => {
            console.log('finished T !');
          }}
          id="path15137"
          d="M 109.72801,91.034389 78.617383,217.57895 48.768005,112.26529
          167.53491,102.38556"
          style="fill:none;stroke:#f4a460;stroke-width:21;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
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
      mask="url(#mask15135)"
      transform="scale(0.26458333)"
      aria-label="T">
      {#if visible1}
        <path
          in:draw={{ easing: linear, speed: inSpeed }}
          out:blur={{ radius: 20, duration: 1500 }}
          id="path15139"
          style="fill:#f4a460;fill-opacity:1"
          d="m 95.037578,193.26914 q -1.28,5.6 -4,8.64 -2.56,3.04 -8.48,3.04
          -4.96,0 -7.36,-1.76 -2.24,-1.6 -2.24,-5.6 0,-1.76 0.48,-3.36 l
          19.52,-77.44 q -0.16,0 -10.4,1.12 -12.32,0.96 -15.36,1.6 -3.2,-1.12
          -4.96,-3.36 -1.6,-2.4 -1.6,-5.6 0,-2.56 1.76,-4.8 1.92,-2.4 4.48,-3.52
          8,-1.6 22.4,-2.719999 14.400002,-1.12 36.960002,-2.4 11.52,-0.48
          15.52,-0.96 2.56,1.12 4.32,3.52 1.92,2.239999 1.92,4.799999 0,2.88
          -2.88,5.6 -2.88,2.72 -6.56,3.84 l -28,1.44 q 1.76,0.64 1.76,4.32
          0,1.92 -0.32,2.88 -2.72,12.16 -7.52,31.52 -4.640002,19.36
          -6.240002,26.24 -0.96,4 -1.76,7.2 -0.8,3.2 -1.44,5.76 z" />
      {/if}
    </g>
  </g>
</svg>
