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
  Draw i SandyBrown
</button>
<button on:click={toggleVisible}>Erase i SandyBrown</button>
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
  id="svg825"
  sodipodi:docname="i_120_sandyBrown_path.svg"
  inkscape:version="0.92.5 (2060ec1f9f, 2020-04-08)">
  <defs id="defs819">
    {#if visible1}
      <mask maskUnits="userSpaceOnUse" id="mask1475">
        <path
          in:draw={{ easing: linear, speed: inSpeed }}
          out:blur={{ radius: 20, duration: 1500 }}
          on:introend={() => (visible1 = true)}
          style="fill:none;stroke:#f4a460;stroke-width:20.27716446;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
          d="m 156.74096,205.68215 23.92857,13.39286 -23.75,6.96429
          12.67857,20.17857 -15.17857,61.96428 0.35713,14.46429"
          id="path1477"
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
    inkscape:zoom="3.959798"
    inkscape:cx="112.50636"
    inkscape:cy="966.57544"
    inkscape:document-units="mm"
    inkscape:current-layer="layer1"
    showgrid="false"
    inkscape:window-width="1920"
    inkscape:window-height="1001"
    inkscape:window-x="-9"
    inkscape:window-y="-9"
    inkscape:window-maximized="1" />
  <metadata id="metadata822">
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
        aria-label="i"
        transform="matrix(0.26458333,0,0,0.26458333,-20.446119,-30.602361)"
        mask="url(#mask1475)"
        style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:160px;line-height:1.25;font-family:Sriracha;-inkscape-font-specification:'Sriracha,
        Normal';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-feature-settings:normal;text-align:start;letter-spacing:0px;word-spacing:0px;writing-mode:lr-tb;text-anchor:start;fill:#f4a460;fill-opacity:1;stroke:none"
        id="flowRoot1370">
        <path
          in:draw={{ easing: linear, speed: inSpeed }}
          out:blur={{ radius: 20, duration: 1500 }}
          d="m 161.00039,219.95609 q 0,-4.96 3.04,-8.8 3.2,-3.84 8.8,-3.84
          5.92,0 10.24,3.68 4.48,3.68 4.48,8.32 0,4.64 -4.48,8 -4.48,3.36
          -10.4,3.36 -5.76,0 -8.8,-2.88 -2.88,-3.04 -2.88,-7.84 z m 16.8,28.32 q
          -8.48,34.56 -12.96,52 -0.64,2.56 -0.64,5.6 l 0.16,4.48 q 0,2.72
          -1.76,3.84 -1.6,1.12 -7.04,1.28 -5.28,0 -8,-1.12 -2.72,-1.12
          -2.72,-4.8 0,-1.76 4,-18.72 4.16,-16.96 11.2,-44.16 l -3.68,-4.8 q
          -0.48,-0.48 -0.48,-1.12 0,-1.6 3.52,-2.56 3.52,-1.12 9.76,-1.12 5.44,0
          6.88,3.2 1.6,3.04 1.76,8 z"
          style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:160px;font-family:Sriracha;-inkscape-font-specification:'Sriracha,
          Normal';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-feature-settings:normal;text-align:start;writing-mode:lr-tb;text-anchor:start;fill:#f4a460;fill-opacity:1"
          id="path1479" />
      </g>
    {/if}
  </g>
</svg>
