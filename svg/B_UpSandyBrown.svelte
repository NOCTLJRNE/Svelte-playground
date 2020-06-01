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
  Draw B SandyBrown
</button>
<button on:click={toggleVisible}>Erase B SandyBrown</button>
<br />
<svg
  xmlns:dc="http://purl.org/dc/elements/1.1/"
  xmlns:cc="http://creativecommons.org/ns#"
  xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
  xmlns:svg="http://www.w3.org/2000/svg"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
  xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
  id="svg1497"
  version="1.1"
  viewBox="0 0 210 297"
  height="297mm"
  width="210mm"
  sodipodi:docname="B_up_120_sandyBrown_path_plain.svg"
  inkscape:version="0.92.5 (2060ec1f9f, 2020-04-08)">
  <sodipodi:namedview
    pagecolor="#ffffff"
    bordercolor="#666666"
    borderopacity="1"
    objecttolerance="10"
    gridtolerance="10"
    guidetolerance="10"
    inkscape:pageopacity="0"
    inkscape:pageshadow="2"
    inkscape:window-width="1920"
    inkscape:window-height="1001"
    id="namedview3776"
    showgrid="false"
    inkscape:zoom="3.3638608"
    inkscape:cx="125.83129"
    inkscape:cy="975.06615"
    inkscape:window-x="-9"
    inkscape:window-y="-9"
    inkscape:window-maximized="1"
    inkscape:current-layer="layer1" />
  <defs id="defs1491">
    <mask maskUnits="userSpaceOnUse" id="mask12338">
      {#if visible1}
        <path
          in:draw={{ easing: linear, speed: inSpeed }}
          out:blur={{ radius: 20, duration: 1500 }}
          on:introend={() => {
            visible2 = true;
            console.log('finished B !');
          }}
          style="fill:none;stroke:#f4a460;stroke-width:22.20000076;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
          d="M 94.236953,88.885959 62.428268,218.79621 40.132457,198.87862 l
          11.891097,-76.10303 19.620313,-10.40471 21.701254,-5.94555
          27.646809,-2.08094 9.51287,3.27005 3.86461,3.56733 c 0,0
          2.37822,1.78366 2.97278,6.5401 0.59455,4.75644 -0.29726,10.40471
          -0.29726,10.40471 l -2.6755,4.45916 -4.16188,5.351 -10.40471,5.94555
          -10.40471,3.56733 -17.836655,2.67549 27.944085,1.78367 c 0,0 3.86461,0
          6.83738,3.56733 2.97277,3.56733 6.24283,7.72921 5.94555,12.18837
          -0.29726,4.45917 -0.59456,8.91833 -3.27005,13.37749 -2.6755,4.45916
          -6.54011,8.62105 -11.59382,11.29654 -5.05372,2.6755 -16.94482,6.24283
          -16.94482,6.24283 L 89.777791,199.1759 37.159682,188.47391"
          id="path12340"
          inkscape:connector-curvature="0" />
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
      aria-label="B"
      transform="scale(0.26458333)"
      mask="url(#mask12338)"
      style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:160px;line-height:1.25;font-family:Sriracha;-inkscape-font-specification:Sriracha;letter-spacing:0px;word-spacing:0px;fill:#000000;fill-opacity:1;stroke:none"
      id="flowRoot2042">
      {#if visible1}
        <path
          in:draw={{ easing: linear, speed: inSpeed }}
          out:blur={{ radius: 20, duration: 1500 }}
          d="m 124.15758,147.98914 q 10.72,1.76 14.24,7.52 3.68,5.6 3.68,13.28
          0,1.6 -0.16,2.4 -3.04,19.52 -16.32,27.84 -13.28,8.16 -31.360002,8.16
          -4.64,0 -10.08,-1.12 -5.28,-0.96 -8.64,-2.88 -2.4,1.76 -8.96,1.76
          -4.32,0 -6.08,-3.36 -1.76,-3.52 -1.76,-8.48 0,-1.76 0.48,-3.36 l
          17.92,-71.68 q -11.36,3.84 -14.08,8 -4.96,-5.28 -4.96,-9.76 0,-3.52
          2.72,-7.2 6.4,-4.16 20.8,-7.84 1.28,-3.359999 3.2,-4.639999 2.08,-1.28
          6.08,-1.28 3.36,0 6.24,0.64 3.040002,0.64 4.320002,1.92 7.68,-0.96
          15.52,-0.96 16.32,0 24,6.559999 7.68,6.4 7.68,17.92 0,9.76 -6.88,16.8
          -6.88,6.88 -17.6,9.76 z m -32.480002,-4.16 q 35.040002,-2.88
          35.040002,-20.48 0,-4.96 -3.04,-7.68 -3.04,-2.88 -10.4,-2.88 -6.56,0
          -14.560002,0.8 z m 0.48,47.84 q 7.2,0 13.920002,-2.56 6.88,-2.72
          11.2,-7.52 4.32,-4.96 4.32,-11.52 0,-5.44 -3.84,-9.28 -3.68,-4
          -10.4,-4 -12.640002,0 -18.240002,0.96 -2.56,8.64 -8.48,32 5.12,1.92
          11.52,1.92 z"
          style="fill:#f4a460;fill-opacity:1"
          id="path12342" />
      {/if}
    </g>
  </g>
</svg>
