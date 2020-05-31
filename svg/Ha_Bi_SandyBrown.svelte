<script>
  import { blur, draw } from "svelte/transition";
  import { linear } from "svelte/easing";
  let visible1 = false;
  let visible2 = false;
  let visible3 = false;
  let visible4 = false;
  let inSpeed = 1;
  let testSpeed = 0.1;
  let testDuration = 10;
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
  Draw Ha_Bi SandyBrown
</button>
<button on:click={toggleVisible}>Erase Ha_Bi SandyBrown</button>
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
  id="svg8"
  inkscape:version="0.92.5 (2060ec1f9f, 2020-04-08)"
  sodipodi:docname="Ha_Bi_144_masked.svg">
  <defs id="defs2">
    {#if visible1}
      <mask id="mask5667" maskUnits="userSpaceOnUse">
        <g
          transform="scale(0.26458333)"
          id="g5671"
          style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:192px;line-height:1.25;font-family:Sriracha;-inkscape-font-specification:Sriracha;letter-spacing:0px;word-spacing:0px;fill:#f4a460;fill-opacity:1;stroke:none"
          aria-label="H">
          <path
            in:draw={{ easing: linear, speed: inSpeed }}
            out:blur={{ radius: 20, duration: 1500 }}
            on:introend={() => (visible2 = true)}
            inkscape:connector-curvature="0"
            id="path5669"
            style="font-size:192px;fill:#f4a460;fill-opacity:1"
            d="m 134.54773,154.45553 q -37.823996,4.608 -53.567996,8.064 l
            -10.368,41.088 q -1.344,5.568 -4.032,7.488 -2.496,1.92 -10.176,1.92
            -5.952,0 -8.832,-2.112 -2.688,-1.92 -2.688,-6.72 0,-2.112
            0.576,-4.032 l 26.304,-103.871999 q 2.112,-8.448 4.416,-11.136
            2.496,-2.88 8.832,-2.88 5.184,0 9.408,1.152 4.416,1.152 4.608,3.456
            0,0.384 -2.496,10.368 -3.84,14.783999 -10.944,44.927999
            28.415996,-5.76 53.951996,-7.872 l 8.832,-35.711999 q 1.92,-7.68
            5.184,-11.328 3.456,-3.84 9.216,-4.992 7.104,1.344 9.216,2.304
            2.304,0.768 3.072,2.496 -2.496,7.104 -3.84,13.247999 -1.152,5.952
            -1.344,7.104 -2.496,13.44 -5.952,27.456 7.488,3.264 7.488,8.832
            0,5.568 -11.904,9.408 -2.112,7.68 -7.872,33.408 -1.344,7.104
            -3.84,17.664 -2.688,10.56 -8.448,10.56 -17.664,0 -17.664,-8.256
            0,-1.728 12.864,-52.032 z" />
        </g>
      </mask>
    {/if}
    {#if visible2}
      <mask id="mask7728" maskUnits="userSpaceOnUse">
        <g
          transform="scale(0.26458333)"
          id="g7732"
          style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:192px;line-height:1.25;font-family:Sriracha;-inkscape-font-specification:Sriracha;letter-spacing:0px;word-spacing:0px;fill:#f4a460;fill-opacity:1;stroke:none"
          aria-label="a">
          <path
            in:draw={{ easing: linear, speed: inSpeed }}
            out:blur={{ radius: 20, duration: 1500 }}
            on:introend={() => (visible3 = true)}
            inkscape:connector-curvature="0"
            id="path7730"
            style="font-size:192px;fill:#f4a460;fill-opacity:1"
            d="m 118.61173,200.53553 q 0.384,4.992 1.344,9.024 -0.384,1.152
            -3.456,2.304 -2.88,1.152 -4.992,1.152 -6.912,0 -9.984,-2.112
            -2.879996,-1.92 -2.879996,-5.952 0,-3.84 0.768,-7.68 -4.224,5.76
            -12.48,9.6 -8.064,3.648 -13.056,3.648 -12.864,0 -21.504,-7.488
            -8.448,-7.488 -8.448,-24 0,-15.552 7.296,-29.184 7.488,-13.824
            20.544,-22.08 13.056,-8.448 28.991996,-8.448 3.072,0 8.064,1.728
            4.992,1.536 9.984,5.568 5.184,3.84 8.64,9.984 1.536,0 3.648,1.536
            2.112,1.536 2.112,3.072 0,1.728 -0.576,3.456 z m -8.64,-53.76 q
            -1.152,-4.224 -4.608,-7.104 -3.264,-2.88 -5.951996,-2.88 -8.832,0
            -16.704,6.336 -7.68,6.144 -12.48,15.36 -4.8,9.216 -4.8,17.472
            0,8.064 1.92,13.248 1.92,5.184 7.488,5.184 4.8,0 10.944,-2.88
            6.336,-2.88 11.136,-7.68 4.991996,-4.992 6.527996,-10.368 z" />
        </g>
      </mask>
    {/if}
    {#if visible3}
      <mask id="mask8291" maskUnits="userSpaceOnUse">
        <g
          transform="scale(0.26458333)"
          id="g8295"
          style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:192px;line-height:1.25;font-family:Sriracha;-inkscape-font-specification:Sriracha;letter-spacing:0px;word-spacing:0px;fill:#f4a460;fill-opacity:1;stroke:none"
          aria-label="B">
          <path
            in:draw={{ easing: linear, speed: testSpeed }}
            out:blur={{ radius: 20, duration: 1500 }}
            on:introend={() => (visible4 = true)}
            inkscape:connector-curvature="0"
            id="path8293"
            style="font-size:192px;fill:#f4a460;fill-opacity:1"
            d="m 128.59573,144.66353 q 12.864,2.112 17.088,9.024 4.416,6.72
            4.416,15.936 0,1.92 -0.192,2.88 -3.648,23.424 -19.584,33.408
            -15.936,9.792 -37.631996,9.792 -5.568,0 -12.096,-1.344 -6.336,-1.152
            -10.368,-3.456 -2.88,2.112 -10.752,2.112 -5.184,0 -7.296,-4.032
            -2.112,-4.224 -2.112,-10.176 0,-2.112 0.576,-4.032 l 21.504,-86.016
            q -13.632,4.608 -16.896,9.6 -5.952,-6.336 -5.952,-11.712 0,-4.224
            3.264,-8.639999 7.68,-4.992 24.96,-9.408 1.536,-4.032 3.84,-5.568
            2.496,-1.536 7.296,-1.536 4.032,0 7.488,0.768 3.648,0.768
            5.183996,2.304 9.216,-1.152 18.624,-1.152 19.584,0 28.8,7.872
            9.216,7.68 9.216,21.503999 0,11.712 -8.256,20.16 -8.256,8.256
            -21.12,11.712 z m -38.975996,-4.992 q 42.047996,-3.456
            42.047996,-24.576 0,-5.952 -3.648,-9.216 -3.648,-3.456 -12.48,-3.456
            -7.872,0 -17.471996,0.96 z m 0.576,57.408 q 8.64,0 16.703996,-3.072
            8.256,-3.264 13.44,-9.024 5.184,-5.952 5.184,-13.824 0,-6.528
            -4.608,-11.136 -4.416,-4.8 -12.48,-4.8 -15.167996,0 -21.887996,1.152
            -3.072,10.368 -10.176,38.4 6.144,2.304 13.824,2.304 z" />
        </g>
      </mask>
    {/if}
    {#if visible4}
      <mask id="mask9404" maskUnits="userSpaceOnUse">
        <g
          transform="scale(0.26458333)"
          id="g9408"
          style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:192px;line-height:1.25;font-family:Sriracha;-inkscape-font-specification:Sriracha;letter-spacing:0px;word-spacing:0px;fill:#f4a460;fill-opacity:1;stroke:none"
          aria-label="i">
          <path
            in:draw={{ easing: linear, speed: inSpeed }}
            out:blur={{ radius: 20, duration: 1500 }}
            inkscape:connector-curvature="0"
            id="path9406"
            style="font-size:192px;fill:#f4a460;fill-opacity:1"
            d="m 67.347734,96.471531 q 0,-5.952 3.648,-10.56 3.84,-4.608
            10.56,-4.608 7.104,0 12.288,4.416 5.376,4.416 5.376,9.984 0,5.567999
            -5.376,9.599999 -5.376,4.032 -12.48,4.032 -6.912,0 -10.56,-3.456
            -3.456,-3.648 -3.456,-9.407999 z m 20.16,33.983999 q -10.176,41.472
            -15.552,62.4 -0.768,3.072 -0.768,6.72 l 0.192,5.376 q 0,3.264
            -2.112,4.608 -1.92,1.344 -8.448,1.536 -6.336,0 -9.6,-1.344
            -3.264,-1.344 -3.264,-5.76 0,-2.112 4.8,-22.464 4.992,-20.352
            13.44,-52.992 l -4.416,-5.76 q -0.576,-0.576 -0.576,-1.344 0,-1.92
            4.224,-3.072 4.224,-1.344 11.712,-1.344 6.528,0 8.256,3.84
            1.92,3.648 2.112,9.6 z" />
        </g>
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
    inkscape:zoom="1.4"
    inkscape:cx="222.30625"
    inkscape:cy="904.16343"
    inkscape:document-units="mm"
    inkscape:current-layer="layer1"
    showgrid="false"
    inkscape:window-width="1920"
    inkscape:window-height="1001"
    inkscape:window-x="-9"
    inkscape:window-y="-9"
    inkscape:window-maximized="1" />
  <metadata id="metadata5">
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
        id="layer1-2"
        inkscape:label="Layer 1"
        transform="translate(9.0254576,2.5309645)">
        <path
          in:draw={{ easing: linear, speed: inSpeed }}
          out:blur={{ radius: 20, duration: 1500 }}
          mask="url(#mask5667)"
          sodipodi:nodetypes="cccsccccccccccccc"
          inkscape:connector-curvature="0"
          id="path5651"
          d="m 23.625676,20.235687 -9.510996,38.311256 -2.586406,2.595912 c 0,0
          -1.511905,-2.173364 -1.8898811,-2.645833 C 9.2604166,58.024553
          8.5044641,49.047616 8.5044641,49.047616 l 4.9258299,-7.156381
          9.087163,-1.870887 5.946748,-0.935445 4.476764,-0.668173
          4.276312,-0.46772 4.142679,-0.133636 3.80859,0.133636
          7.283095,-13.697564 -5.011304,-5.61266 -3.474505,1.00226
          -1.202711,4.810852 -8.178303,34.517593"
          style="fill:none;stroke:#f4a460;stroke-width:6.86499977;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
      </g>
    {/if}
    {#if visible2}
      <g
        id="layer1-8"
        inkscape:label="Layer 1"
        transform="translate(46.122553,2.208288)">
        <path
          in:draw={{ easing: linear, speed: inSpeed }}
          out:blur={{ radius: 20, duration: 1500 }}
          mask="url(#mask7728)"
          inkscape:connector-curvature="0"
          id="path7711"
          d="m 27.025298,49.520088 -2.929316,2.83482 -1.889881,0.755954
          -2.645833,0.377976 -2.078869,-0.755952 -1.984375,-0.94494
          -0.661459,-1.417413 -0.283482,-2.267855 0.283482,-3.496281
          1.417411,-3.685267 1.700893,-2.456847 2.078869,-1.984375
          2.362351,-1.41741 2.645834,-0.755951 2.267858,-0.0945
          1.889879,0.377978 1.417412,1.41741 1.228421,1.889882 2.645833,5.480653
          c 0,0 1.889882,2.740329 2.362351,1.700892 0.472472,-1.039434
          2.55134,-7.087052 2.55134,-7.087052 0,0 -1.322917,-3.874257
          -1.700892,-4.063243 -0.377976,-0.188989 -3.496281,-0.661459
          -3.496281,-0.661459 l -1.889879,4.913689 -1.13393,4.441221
          -2.267858,9.260417 0.0945,6.614583"
          style="fill:none;stroke:#f4a460;stroke-width:6.16499996;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
      </g>
    {/if}
    {#if visible3}
      <g
        id="layer1-5"
        inkscape:label="Layer 1"
        transform="translate(86.847742,1.9831987)">
        <path
          in:draw={{ easing: linear, speed: testSpeed }}
          out:blur={{ radius: 20, duration: 1500 }}
          mask="url(#mask8291)"
          inkscape:connector-curvature="0"
          id="path8289"
          d="m 24.254709,20.376037 -0.06682,0.734992 -0.534539,2.405426
          -8.619442,34.945489 -4.07586,-1.870885 -1.5368003,-21.515197
          3.2740513,-6.013566 4.34313,-2.071338 4.276313,-1.135895
          6.414469,-1.26953 3.340867,-0.133635 3.274052,0.400904
          2.138156,0.935444 0.935445,0.734992 0.534538,1.069078
          0.334087,1.403165 v 1.269529 l -0.334087,1.469982 -0.801809,1.336347
          -1.069078,1.536801 -1.269529,0.935442 -2.405425,1.33635
          -2.806332,1.202711 -6.34765,0.734991 7.951268,0.400905
          3.073598,1.202714 1.135896,0.868624 0.935445,1.469983
          0.267269,1.870887 -0.53454,2.33861 -0.734992,2.472242
          -1.269529,1.202712 -2.204974,1.870887 -2.405424,1.00226
          -2.405425,0.801809 H 25.19015 l -5.61266,-0.601355"
          style="fill:none;stroke:#f4a460;stroke-width:7.16499996;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
      </g>
    {/if}
    {#if visible4}
      <g
        id="layer1-1"
        inkscape:label="Layer 1"
        transform="translate(119.91371,3.2884388)">
        <path
          in:draw={{ easing: linear, speed: inSpeed }}
          out:blur={{ radius: 20, duration: 1500 }}
          mask="url(#mask9404)"
          sodipodi:nodetypes="cccccccc"
          inkscape:connector-curvature="0"
          id="path9399"
          d="m 18.976136,21.912837 5.011304,3.608139 -7.216277,2.271791
          1.870886,2.405426 1.002261,2.53906 0.734991,1.870887
          -4.677217,18.37478 0.26727,2.939966"
          style="fill:none;stroke:#f4a460;stroke-width:6.36499977;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
      </g>
    {/if}
  </g>
</svg>
