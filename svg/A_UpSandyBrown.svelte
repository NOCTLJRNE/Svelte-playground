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
  Draw A SandyBrown
</button>
<button on:click={toggleVisible}>Erase A SandyBrown</button>
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
  sodipodi:docname="A_up_120_sandyBrown_path3_plain.svg"
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
    inkscape:cx="78.221554"
    inkscape:cy="961.97742"
    inkscape:window-x="-9"
    inkscape:window-y="-9"
    inkscape:window-maximized="1"
    inkscape:current-layer="layer1" />
  <defs id="defs1491">
    <mask maskUnits="userSpaceOnUse" id="mask6009">
      {#if visible1}
        <path
          in:draw={{ easing: linear, speed: inSpeed }}
          out:blur={{ radius: 20, duration: 1500 }}
          on:introend={() => {
            visible1 = true;
            console.log('finished A !');
          }}
          sodipodi:nodetypes="cccccccccccc"
          inkscape:connector-curvature="0"
          id="path6011"
          d="m 54.233383,207.27881 59.278347,-85.344 14.71448,-13.03283
          8.40828,-2.10207 -2.52248,15.97572 -3.73272,64.99 1.28237,21.66625
          -61.452554,30.21879 -43.723036,-27.32689 31.531036,-40.78014
          12.192,-4.20414 98.488034,-7.69059"
          style="fill:none;stroke:#f4a460;stroke-width:21.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
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
      aria-label="A"
      transform="scale(0.26458333)"
      mask="url(#mask6009)"
      style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:160px;line-height:1.25;font-family:Sriracha;-inkscape-font-specification:Sriracha;letter-spacing:0px;word-spacing:0px;fill:#000000;fill-opacity:1;stroke:none"
      id="flowRoot2042">
      {#if visible1}
        <path
          in:draw={{ easing: linear, speed: inSpeed }}
          out:blur={{ radius: 20, duration: 1500 }}
          d="m 121.43758,167.34914 q -20.96,3.52 -33.440002,6.4 -3.84,6.08
          -4.96,8.16 -3.36,5.92 -6.08,9.92 -2.56,3.84 -5.6,6.88 -3.36,3.36
          -5.6,4.8 -2.08,1.44 -4.96,1.44 -4.8,0 -8.48,-2.08 -3.52,-2.24
          -3.52,-4.48 0.32,-0.32 3.52,-7.04 3.2,-6.88 11.84,-17.12 0,-1.28
          -0.8,-3.2 -0.8,-1.92 -0.8,-2.24 0,-4.64 14.56,-11.2 8.16,-12.16
          17.12,-24 9.120002,-11.84 22.240002,-28 3.2,-4 8.16,-6.559999
          4.96,-2.56 9.92,-2.56 5.12,0 7.68,0.96 2.56,0.96 3.2,2.56 0.8,1.599999
          0.8,4.479999 -0.64,4.8 -0.8,7.2 -2.4,19.36 -3.68,33.28 -1.12,13.76
          -1.12,27.52 0,12.64 1.12,23.2 -0.48,3.84 -3.36,7.04 -2.88,3.04
          -6.72,3.04 -7.36,0 -9.76,-3.68 -2.24,-3.68 -2.24,-12.48 0,-6.4
          1.76,-22.24 z m -20.8,-12 q 2.88,-0.64 8.8,-1.44 l 12.8,-1.92 q
          1.44,-22.24 3.36,-32 -6.24,7.36 -24.96,35.36 z"
          style="fill:#f4a460;fill-opacity:1"
          id="path5449" />
      {/if}
    </g>
  </g>
</svg>
