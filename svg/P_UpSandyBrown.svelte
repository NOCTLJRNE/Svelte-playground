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
  Draw P SandyBrown
</button>
<button on:click={toggleVisible}>Erase P SandyBrown</button>
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
  sodipodi:docname="P_up_120_sandyBrown_path_plain.svg"
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
    inkscape:zoom="4.7572176"
    inkscape:cx="101.96408"
    inkscape:cy="970.87598"
    inkscape:window-x="-9"
    inkscape:window-y="-9"
    inkscape:window-maximized="1"
    inkscape:current-layer="layer1" />
  <defs id="defs1491">
    <mask maskUnits="userSpaceOnUse" id="mask4884">
      {#if visible1}
        <path
          in:draw={{ easing: linear, speed: inSpeed }}
          out:blur={{ radius: 20, duration: 1500 }}
          on:introend={() => {
            visible1 = true;
            console.log('finished P !');
          }}
          style="fill:none;stroke:#f4a460;stroke-width:20.89999962;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
          d="M 93.542076,88.722105 62.851866,212.74418 c 0,0 -16.396139,3.57352
          -16.606344,2.10207 -0.21021,-1.47145 6.516411,-91.86042
          6.516411,-91.86042 l 24.804416,-11.98179 25.855451,-5.04497
          10.51034,-1.47145 9.66952,1.68166 c 0,0 2.31228,0.42041 5.25518,3.1531
          2.94289,2.73269 6.72662,6.72662 7.77765,9.0389 1.05104,2.31228
          1.05104,10.51035 1.05104,10.51035 l -1.05104,8.82869 c 0,0
          -1.47145,5.46538 -2.10207,6.93682 -0.63062,1.47145 -2.73269,4.83476
          -3.78372,6.30621 -1.05104,1.47145 -5.25518,5.88579 -5.25518,5.88579
          0,0 -2.52248,2.10207 -5.67558,3.15311 -3.15311,1.05103
          -8.40828,3.36331 -8.40828,3.36331 l -9.2491,1.26124 H 86.605248"
          id="path4886"
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
      aria-label="P"
      transform="scale(0.26458333)"
      mask="url(#mask4884)"
      style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:160px;line-height:1.25;font-family:Sriracha;-inkscape-font-specification:Sriracha;letter-spacing:0px;word-spacing:0px;fill:#000000;fill-opacity:1;stroke:none"
      id="flowRoot2042">
      {#if visible1}
        <path
          in:draw={{ easing: linear, speed: inSpeed }}
          out:blur={{ radius: 20, duration: 1500 }}
          d="m 59.517578,114.86914 q 0,-2.24 1.28,-3.52 1.44,-1.44 3.84,-2.56
          0.8,-0.48 5.76,-2.88 5.12,-2.4 9.76,-3.68 1.44,-3.199999
          4.32,-5.279999 3.04,-2.08 7.68,-2.08 2.72,0 4.48,1.12 1.76,0.96
          2.4,2.56 5.920002,-1.92 14.240002,-1.92 10.4,0 17.92,4.479999
          7.68,4.32 11.52,12 4,7.68 4,17.28 0,1.92 -0.48,5.28 -6.56,37.44
          -56.000002,37.44 -4.48,0 -6.56,-0.16 l -2.08,7.68 q -3.36,12.32
          -3.36,12.64 -1.28,5.6 -4,8.64 -2.56,3.04 -8.48,3.04 -4.96,0
          -7.36,-1.76 -2.24,-1.6 -2.24,-5.6 0,-1.76 0.48,-3.36 l 19.36,-74.72 q
          -8.32,2.4 -12.64,6.56 -1.76,-1.92 -2.88,-4.96 -0.96,-3.2 -0.96,-6.24 z
          m 27.52,43.2 q 1.92,0.16 5.44,0.16 15.200002,0 24.000002,-5.76
          8.96,-5.76 11.52,-17.76 0.48,-2.72 0.48,-4 0,-8.96 -4.96,-13.28
          -4.96,-4.48 -13.92,-4.48 -4.8,0 -12.320002,2.24 -6.24,24.8
          -10.24,42.88 z"
          style="fill:#f4a460;fill-opacity:1"
          id="path4888" />
      {/if}
    </g>
  </g>
</svg>
