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
  Draw p SandyBrown
</button>
<button on:click={toggleVisible}>Erase p SandyBrown</button>
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
  sodipodi:docname="p_120_red_altpath_clip.svg"
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
    id="namedview2067"
    showgrid="false"
    inkscape:zoom="3.3638608"
    inkscape:cx="59.933876"
    inkscape:cy="943.20127"
    inkscape:window-x="-9"
    inkscape:window-y="-9"
    inkscape:window-maximized="1"
    inkscape:current-layer="layer1" />
  <defs id="defs1491">

    <mask maskUnits="userSpaceOnUse" id="mask3762">
      <g
        aria-label="p"
        style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:160px;line-height:1.25;font-family:Sriracha;-inkscape-font-specification:Sriracha;letter-spacing:0px;word-spacing:0px;fill:#000000;fill-opacity:1;stroke:none"
        id="g3766"
        transform="scale(0.26458333)">
        {#if visible1}
          <path
            in:draw={{ easing: linear, speed: inSpeed }}
            out:blur={{ radius: 20, duration: 1500 }}
            on:introend={() => {
              visible1 = true;
              console.log('finished !');
            }}
            d="m 72.477578,195.82914 q -0.16,0.96 -4.32,17.44 -4,16.64
            -5.6,20.96 -0.64,1.76 -3.84,2.56 -3.2,0.96 -4.64,0.96 -3.52,0
            -5.76,-2.24 -2.4,-2.24 -2.56,-6.72 l 11.2,-45.92 q 6.4,-25.12
            10.56,-42.88 0,-0.96 -1.12,-5.12 -0.48,-2.56 -0.96,-4.8 -0.48,-2.24
            -0.64,-3.36 0.32,-2.08 3.2,-3.36 3.04,-1.28 5.6,-1.28 3.84,0
            7.52,2.72 3.84,2.72 4.32,6.56 l -0.48,4.16 q 7.2,-8.96
            18.400002,-8.96 9.12,0 15.68,4.48 6.72,4.32 10.24,11.84 3.52,7.36
            3.52,16.32 0,12 -4.64,22.56 -4.64,10.56 -13.92,17.12 -9.28,6.4
            -22.400002,6.4 -4.16,0 -10.72,-2.72 -6.56,-2.88 -8.64,-6.72 z m
            4.96,-20.32 q -0.32,1.92 -0.32,2.72 0.16,4 2.56,7.04 2.56,3.04
            5.92,4.8 3.36,1.6 5.6,1.6 7.04,0 12.320002,-5.28 5.44,-5.44
            8.32,-13.28 2.88,-8 2.88,-15.2 0,-6.72 -3.68,-11.84 -3.52,-5.28
            -8.96,-5.28 -6.080002,0 -10.080002,2.72 -3.84,2.56 -8.8,8 z"
            style="fill:#f4a460;fill-opacity:1"
            id="path3764"
            inkscape:connector-curvature="0" />
        {/if}
      </g>
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
    {#if visible1}
      <path
        in:draw={{ easing: linear, speed: inSpeed }}
        out:blur={{ radius: 20, duration: 1500 }}
        style="fill:none;stroke:#f40000;stroke-width:5.34458335;stroke-linecap:round;stroke-linejoin:round;stroke-opacity:1;stroke-miterlimit:4;stroke-dasharray:none"
        d="m 19.427701,49.277142 1.219148,1.691074 1.927039,1.179822
        2.123675,0.314619 1.887712,-0.235966 2.280986,-1.140492
        1.415783,-1.415783 0.943856,-1.573093 0.825875,-1.730404
        0.550582,-2.556275 0.196636,-2.005695 -0.314619,-2.084347
        -0.983183,-2.123676 -1.573094,-1.612421 -1.376455,-0.629237 h -1.573093
        l -2.516949,0.707892 -1.76973,1.258472 -0.74722,-5.112551
        -2.831567,0.511254 1.101165,4.758608 -6.410355,26.388639"
        id="path3730"
        inkscape:connector-curvature="0"
        mask="url(#mask3762)" />
    {/if}
  </g>
</svg>
