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
  Draw Y SandyBrown
</button>
<button on:click={toggleVisible}>Erase Y SandyBrown</button>
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
  sodipodi:docname="Y_up_120_sandyBrown_path_plain.svg"
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
    inkscape:cx="46.307583"
    inkscape:cy="968.50615"
    inkscape:window-x="-9"
    inkscape:window-y="-9"
    inkscape:window-maximized="1"
    inkscape:current-layer="layer1" />
  <defs id="defs1491">
    <mask maskUnits="userSpaceOnUse" id="mask11111">
      {#if visible1}
        <path
          in:draw={{ easing: linear, speed: inSpeed }}
          out:blur={{ radius: 20, duration: 1500 }}
          on:introend={() => {
            visible1 = true;
            console.log('finished Y !');
          }}
          style="fill:none;stroke:#f4a460;stroke-width:21.89999962;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
          d="m 71.890765,87.671079 3.363307,69.998901 14.714483,1.47145 L
          148.40608,89.142528 97.115589,102.38556 66.004967,222.6239"
          id="path11113"
          inkscape:connector-curvature="0"
          sodipodi:nodetypes="cccccc" />
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
      aria-label="Y"
      transform="scale(0.26458333)"
      mask="url(#mask11111)"
      style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:160px;line-height:1.25;font-family:Sriracha;-inkscape-font-specification:Sriracha;letter-spacing:0px;word-spacing:0px;fill:#000000;fill-opacity:1;stroke:none"
      id="flowRoot2042">
      {#if visible1}
        <path
          in:draw={{ easing: linear, speed: inSpeed }}
          out:blur={{ radius: 20, duration: 1500 }}
          d="m 133.91758,97.269141 q 6.08,0 10.08,1.76 4,1.759999 4.16,3.999999
          -1.28,1.92 -8.64,10.4 l -6.72,7.52 q -16.16,19.2 -25.44,29.28
          -9.120002,9.92 -14.080002,13.44 -0.96,0.64 -2.88,1.44 -0.8,5.92
          -5.28,24.16 l -1.76,7.04 q -1.12,4.64 -3.36,6.24 -2.08,1.6 -8.48,1.6
          -4.8,0 -6.88,-1.6 -2.08,-1.6 -2.08,-5.76 0,-1.76 0.48,-3.36 l
          6.4,-25.6 q 0.32,-0.8 0.64,-2.72 -2.72,-0.96 -3.52,-2.56 -0.64,-1.76
          -0.96,-5.76 -0.96,-12.16 -1.6,-19.04 -0.16,-2.24 -1.12,-13.28
          -0.96,-11.2 -0.96,-21.28 0,-2.4 3.36,-3.999999 3.52,-1.76 8.8,-1.76
          4.8,0 7.04,1.76 2.24,1.599999 2.24,5.119999 l 0.16,40.8 v 10.08 q
          12.96,-18.24 29.280002,-38.08 16.48,-19.839999 21.12,-19.839999 z"
          style="fill:#f4a460;fill-opacity:1"
          id="path11115" />
      {/if}
    </g>
  </g>
</svg>
