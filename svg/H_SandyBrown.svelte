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
  Draw H SandyBrown
</button>
<button on:click={toggleVisible}>Erase H SandyBrown</button>
<br />
<svg
  xmlns:dc="http://purl.org/dc/elements/1.1/"
  xmlns:cc="http://creativecommons.org/ns#"
  xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
  xmlns:svg="http://www.w3.org/2000/svg"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
  xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
  width="210mm"
  height="297mm"
  viewBox="0 0 210 297"
  version="1.1"
  id="svg1497"
  inkscape:version="0.92.5 (2060ec1f9f, 2020-04-08)"
  sodipodi:docname="H_120_sandyBrown_path.svg">
  <defs id="defs1491">
    {#if visible1}
      <mask maskUnits="userSpaceOnUse" id="mask2052">
        <path
          in:draw={{ easing: linear, speed: inSpeed }}
          out:blur={{ radius: 20, duration: 1500 }}
          on:introend={() => {
            visible1 = true;
            console.log('finished !');
          }}
          style="fill:none;stroke:#f4a460;stroke-width:21.78897667;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
          d="M 94.285713,79.66254 C 91.785714,84.305398 59.642858,217.51968
          59.642858,217.51968 l 91.428572,2.14286 32.85714,-124.285715
          -17.85714,-10.357141 -11.78572,9.285713 -28.57142,119.642863 c 0,0
          -78.571433,13.57142 -78.571433,11.78571 0,-1.78571 10.357141,-64.64286
          10.357141,-64.64286 l 37.5,-8.21428 38.928572,-5.71429
          23.92857,-0.35713"
          id="path2054"
          inkscape:connector-curvature="0" />
      </mask>
    {/if}
  </defs>
  <sodipodi:namedview
    id="base"
    pagecolor="#ffffff"
    bordercolor="#666666"
    borderopacity="1.0"
    inkscape:pageopacity="0.0"
    inkscape:pageshadow="2"
    inkscape:zoom="2.8"
    inkscape:cx="220.16532"
    inkscape:cy="968.30044"
    inkscape:document-units="mm"
    inkscape:current-layer="layer1"
    showgrid="false"
    inkscape:window-width="1920"
    inkscape:window-height="1001"
    inkscape:window-x="-9"
    inkscape:window-y="-9"
    inkscape:window-maximized="1" />
  <metadata id="metadata1494">
    <rdf:RDF>
      <cc:Work rdf:about="">
        <dc:format>image/svg+xml</dc:format>
        <dc:type rdf:resource="http://purl.org/dc/dcmitype/StillImage" />
        <dc:title />
      </cc:Work>
    </rdf:RDF>
  </metadata>
  <g inkscape:label="Layer 1" inkscape:groupmode="layer" id="layer1">
    {#if visible1}
      <g
        aria-label="H"
        transform="scale(0.26458333)"
        mask="url(#mask2052)"
        style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:160px;line-height:1.25;font-family:Sriracha;-inkscape-font-specification:Sriracha;letter-spacing:0px;word-spacing:0px;fill:#000000;fill-opacity:1;stroke:none"
        id="flowRoot2042">
        <path
          in:draw={{ easing: linear, speed: inSpeed }}
          out:blur={{ radius: 20, duration: 1500 }}
          d="m 129.11758,156.14914 q -31.520002,3.84 -44.640002,6.72 l
          -8.64,34.24 q -1.12,4.64 -3.36,6.24 -2.08,1.6 -8.48,1.6 -4.96,0
          -7.36,-1.76 -2.24,-1.6 -2.24,-5.6 0,-1.76 0.48,-3.36 l 21.92,-86.56 q
          1.76,-7.04 3.68,-9.279999 2.08,-2.4 7.36,-2.4 4.32,0 7.84,0.96
          3.68,0.96 3.84,2.88 0,0.319999 -2.08,8.639999 -3.2,12.32 -9.12,37.44
          23.680002,-4.8 44.960002,-6.56 l 7.36,-29.76 q 1.6,-6.4 4.32,-9.44
          2.88,-3.199999 7.68,-4.159999 5.92,1.12 7.68,1.92 1.92,0.64 2.56,2.08
          -2.08,5.919999 -3.2,11.039999 -0.96,4.96 -1.12,5.92 -2.08,11.2
          -4.96,22.88 6.24,2.72 6.24,7.36 0,4.64 -9.92,7.84 -1.76,6.4
          -6.56,27.84 -1.12,5.92 -3.2,14.72 -2.24,8.8 -7.04,8.8 -14.72,0
          -14.72,-6.88 0,-1.44 10.72,-43.36 z"
          style="fill:#f4a460;fill-opacity:1"
          id="path2056" />
      </g>
    {/if}
  </g>
</svg>
