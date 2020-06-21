<script>
  import { blur, draw } from "svelte/transition";
  import { linear } from "svelte/easing";
  import { createEventDispatcher } from "svelte";

  const strokeColor = "#ffffff";
  let visible1 = false;
  let visible2 = false;
  let visible3 = false;
  let visible4 = false;
  let visible5 = false;
  let inSpeed = 0.75;
  let HinSpeed = 1;
  let maskOutSpeed = 0.1;
  let strokeOutSpeed = 0.12;
  let color = "rgb(200, 200, 200)";
  export let startHAPPY = false;
  const dispatch = createEventDispatcher();
  function toggleVisible() {
    visible1 = false;
    visible2 = false;
    visible3 = false;
    visible4 = false;
    visible5 = false;
  }
</script>

<style>
  #svg11124 {
    position: absolute;
    top: -5vh;
    left: -15vw;
    z-index: 2;
  }
</style>

<div>

  <!-- <button
  on:click={() => {
    visible1 = true;
  }}>
  Draw HAPPY
</button>
<button on:click={toggleVisible}>Erase HAPPY</button> -->
  <!-- <br /> -->
  <svg
    xmlns:dc="http://purl.org/dc/elements/1.1/"
    xmlns:cc="http://creativecommons.org/ns#"
    xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
    xmlns:svg="http://www.w3.org/2000/svg"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
    xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
    width="100%"
    height="100%"
    viewBox="0 0 210 200"
    version="1.1"
    id="svg11124"
    inkscape:version="0.92.5 (2060ec1f9f, 2020-04-08)"
    sodipodi:docname="HAPPY_120_path_plain_center.svg">
    <defs id="defs11118">
      <mask id="mask2052" maskUnits="userSpaceOnUse">
        {#if startHAPPY}
          <path
            in:draw={{ easing: linear, speed: HinSpeed }}
            out:blur={{ radius: 20, duration: 1500 }}
            on:introend={() => {
              visible2 = true;
            }}
            inkscape:connector-curvature="0"
            id="path2054"
            d="M 94.285713,79.66254 C 91.785714,84.305398 59.642858,217.51968
            59.642858,217.51968 l 91.428572,2.14286 32.85714,-124.285715
            -17.85714,-10.357141 -11.78572,9.285713 -28.57142,119.642863 c 0,0
            -78.571433,13.57142 -78.571433,11.78571 0,-1.78571
            10.357141,-64.64286 10.357141,-64.64286 l 37.5,-8.21428
            38.928572,-5.71429 23.92857,-0.35713"
            style="fill:none;stroke:{strokeColor};stroke-width:21.78897667;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
        {/if}
      </mask>
      <mask id="mask6009" maskUnits="userSpaceOnUse">
        {#if visible2}
          <path
            in:draw={{ easing: linear, speed: inSpeed }}
            out:blur={{ radius: 20, duration: 1500 }}
            on:introend={() => {
              visible3 = true;
            }}
            style="fill:none;stroke:{strokeColor};stroke-width:21.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
            d="m 54.233383,207.27881 59.278347,-85.344 14.71448,-13.03283
            8.40828,-2.10207 -2.52248,15.97572 -3.73272,64.99 1.28237,21.66625
            -61.452554,30.21879 -43.723036,-27.32689 31.531036,-40.78014
            12.192,-4.20414 98.488034,-7.69059"
            id="path6011"
            inkscape:connector-curvature="0"
            sodipodi:nodetypes="cccccccccccc" />
        {/if}
      </mask>
      <mask id="mask4884" maskUnits="userSpaceOnUse">
        {#if visible4}
          <path
            in:draw={{ easing: linear, speed: inSpeed }}
            out:blur={{ radius: 20, duration: 1500 }}
            on:introend={() => {
              visible5 = true;
            }}
            inkscape:connector-curvature="0"
            id="path4886"
            d="M 93.542076,88.722105 62.851866,212.74418 c 0,0
            -16.396139,3.57352 -16.606344,2.10207 -0.21021,-1.47145
            6.516411,-91.86042 6.516411,-91.86042 l 24.804416,-11.98179
            25.855451,-5.04497 10.51034,-1.47145 9.66952,1.68166 c 0,0
            2.31228,0.42041 5.25518,3.1531 2.94289,2.73269 6.72662,6.72662
            7.77765,9.0389 1.05104,2.31228 1.05104,10.51035 1.05104,10.51035 l
            -1.05104,8.82869 c 0,0 -1.47145,5.46538 -2.10207,6.93682
            -0.63062,1.47145 -2.73269,4.83476 -3.78372,6.30621 -1.05104,1.47145
            -5.25518,5.88579 -5.25518,5.88579 0,0 -2.52248,2.10207
            -5.67558,3.15311 -3.15311,1.05103 -8.40828,3.36331 -8.40828,3.36331
            l -9.2491,1.26124 H 86.605248"
            style="fill:none;stroke:{strokeColor};stroke-width:20.89999962;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
        {/if}
      </mask>
      <mask id="mask4884-3" maskUnits="userSpaceOnUse">
        {#if visible3}
          <path
            in:draw={{ easing: linear, speed: inSpeed }}
            out:blur={{ radius: 20, duration: 1500 }}
            on:introend={() => {
              visible4 = true;
            }}
            inkscape:connector-curvature="0"
            id="path4886-7"
            d="M 93.542076,88.722105 62.851866,212.74418 c 0,0
            -16.396139,3.57352 -16.606344,2.10207 -0.21021,-1.47145
            6.516411,-91.86042 6.516411,-91.86042 l 24.804416,-11.98179
            25.855451,-5.04497 10.51034,-1.47145 9.66952,1.68166 c 0,0
            2.31228,0.42041 5.25518,3.1531 2.94289,2.73269 6.72662,6.72662
            7.77765,9.0389 1.05104,2.31228 1.05104,10.51035 1.05104,10.51035 l
            -1.05104,8.82869 c 0,0 -1.47145,5.46538 -2.10207,6.93682
            -0.63062,1.47145 -2.73269,4.83476 -3.78372,6.30621 -1.05104,1.47145
            -5.25518,5.88579 -5.25518,5.88579 0,0 -2.52248,2.10207
            -5.67558,3.15311 -3.15311,1.05103 -8.40828,3.36331 -8.40828,3.36331
            l -9.2491,1.26124 H 86.605248"
            style="fill:none;stroke:{strokeColor};stroke-width:20.89999962;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
        {/if}
      </mask>
      <mask id="mask11111" maskUnits="userSpaceOnUse">
        {#if visible5}
          <path
            in:draw={{ easing: linear, speed: inSpeed }}
            out:blur={{ radius: 20, duration: 1500 }}
            on:introend={() => {
              dispatch('finishedHAPPY', { text: 'HAPPY finished !' });
              console.log('finished HAPPY !');
            }}
            sodipodi:nodetypes="cccccc"
            inkscape:connector-curvature="0"
            id="path11113"
            d="m 71.890765,87.671079 3.363307,69.998901 14.714483,1.47145 L
            148.40608,89.142528 97.115589,102.38556 66.004967,222.6239"
            style="fill:none;stroke:{strokeColor};stroke-width:21.89999962;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
        {/if}
      </mask>
    </defs>
    <sodipodi:namedview
      id="base"
      pagecolor="#ffffff"
      bordercolor="#666666"
      borderopacity="1.0"
      inkscape:pageopacity="0.0"
      inkscape:pageshadow="2"
      inkscape:zoom="0.98994949"
      inkscape:cx="161.44767"
      inkscape:cy="575.43979"
      inkscape:document-units="mm"
      inkscape:current-layer="layer1"
      showgrid="false"
      inkscape:window-width="1920"
      inkscape:window-height="1001"
      inkscape:window-x="-9"
      inkscape:window-y="-9"
      inkscape:window-maximized="1" />
    <metadata id="metadata11121">
      <rdf:RDF>
        <cc:Work rdf:about="">
          <dc:format>image/svg+xml</dc:format>
          <dc:type rdf:resource="http://purl.org/dc/dcmitype/StillImage" />
          <dc:title />
        </cc:Work>
      </rdf:RDF>
    </metadata>
    <g
      inkscape:label="Layer 1"
      inkscape:groupmode="layer"
      id="layer1"
      transform="translate(0,-97)">
      <g
        id="layer1-6"
        inkscape:label="Layer 1"
        transform="translate(19.887622,100.27917)">
        <g
          id="flowRoot2042"
          style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:160px;line-height:1.25;font-family:Sriracha;-inkscape-font-specification:Sriracha;letter-spacing:0px;word-spacing:0px;fill:#000000;fill-opacity:1;stroke:none"
          mask="url(#mask2052)"
          transform="scale(0.26458333)"
          aria-label="H">
          {#if startHAPPY}
            <path
              in:draw={{ easing: linear, speed: HinSpeed }}
              out:blur={{ radius: 20, duration: 1500 }}
              id="path2056"
              style="fill:#f4a460;fill-opacity:1"
              d="m 129.11758,156.14914 q -31.520002,3.84 -44.640002,6.72 l
              -8.64,34.24 q -1.12,4.64 -3.36,6.24 -2.08,1.6 -8.48,1.6 -4.96,0
              -7.36,-1.76 -2.24,-1.6 -2.24,-5.6 0,-1.76 0.48,-3.36 l
              21.92,-86.56 q 1.76,-7.04 3.68,-9.279999 2.08,-2.4 7.36,-2.4
              4.32,0 7.84,0.96 3.68,0.96 3.84,2.88 0,0.319999 -2.08,8.639999
              -3.2,12.32 -9.12,37.44 23.680002,-4.8 44.960002,-6.56 l
              7.36,-29.76 q 1.6,-6.4 4.32,-9.44 2.88,-3.199999 7.68,-4.159999
              5.92,1.12 7.68,1.92 1.92,0.64 2.56,2.08 -2.08,5.919999
              -3.2,11.039999 -0.96,4.96 -1.12,5.92 -2.08,11.2 -4.96,22.88
              6.24,2.72 6.24,7.36 0,4.64 -9.92,7.84 -1.76,6.4 -6.56,27.84
              -1.12,5.92 -3.2,14.72 -2.24,8.8 -7.04,8.8 -14.72,0 -14.72,-6.88
              0,-1.44 10.72,-43.36 z"
              inkscape:connector-curvature="0" />
          {/if}
        </g>
      </g>
      <g id="layer1-8" transform="translate(50.923521,100.44851)">
        <g
          id="flowRoot2042-0"
          style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:160px;line-height:1.25;font-family:Sriracha;-inkscape-font-specification:Sriracha;letter-spacing:0px;word-spacing:0px;fill:#000000;fill-opacity:1;stroke:none"
          mask="url(#mask6009)"
          transform="scale(0.26458333)"
          aria-label="A">
          {#if visible2}
            <path
              in:draw={{ easing: linear, speed: inSpeed }}
              out:blur={{ radius: 20, duration: 1500 }}
              id="path5449"
              style="fill:#f4a460;fill-opacity:1"
              d="m 121.43758,167.34914 q -20.96,3.52 -33.440002,6.4 -3.84,6.08
              -4.96,8.16 -3.36,5.92 -6.08,9.92 -2.56,3.84 -5.6,6.88 -3.36,3.36
              -5.6,4.8 -2.08,1.44 -4.96,1.44 -4.8,0 -8.48,-2.08 -3.52,-2.24
              -3.52,-4.48 0.32,-0.32 3.52,-7.04 3.2,-6.88 11.84,-17.12 0,-1.28
              -0.8,-3.2 -0.8,-1.92 -0.8,-2.24 0,-4.64 14.56,-11.2 8.16,-12.16
              17.12,-24 9.120002,-11.84 22.240002,-28 3.2,-4 8.16,-6.559999
              4.96,-2.56 9.92,-2.56 5.12,0 7.68,0.96 2.56,0.96 3.2,2.56
              0.8,1.599999 0.8,4.479999 -0.64,4.8 -0.8,7.2 -2.4,19.36
              -3.68,33.28 -1.12,13.76 -1.12,27.52 0,12.64 1.12,23.2 -0.48,3.84
              -3.36,7.04 -2.88,3.04 -6.72,3.04 -7.36,0 -9.76,-3.68 -2.24,-3.68
              -2.24,-12.48 0,-6.4 1.76,-22.24 z m -20.8,-12 q 2.88,-0.64
              8.8,-1.44 l 12.8,-1.92 q 1.44,-22.24 3.36,-32 -6.24,7.36
              -24.96,35.36 z"
              inkscape:connector-curvature="0" />
          {/if}
        </g>
      </g>
      <g id="layer1-0" transform="translate(109.14298,100.66018)">
        <g
          id="flowRoot2042-7"
          style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:160px;line-height:1.25;font-family:Sriracha;-inkscape-font-specification:Sriracha;letter-spacing:0px;word-spacing:0px;fill:#000000;fill-opacity:1;stroke:none"
          mask="url(#mask4884)"
          transform="scale(0.26458333)"
          aria-label="P">
          {#if visible4}
            <path
              in:draw={{ easing: linear, speed: inSpeed }}
              out:blur={{ radius: 20, duration: 1500 }}
              id="path4888"
              style="fill:#f4a460;fill-opacity:1"
              d="m 59.517578,114.86914 q 0,-2.24 1.28,-3.52 1.44,-1.44
              3.84,-2.56 0.8,-0.48 5.76,-2.88 5.12,-2.4 9.76,-3.68
              1.44,-3.199999 4.32,-5.279999 3.04,-2.08 7.68,-2.08 2.72,0
              4.48,1.12 1.76,0.96 2.4,2.56 5.920002,-1.92 14.240002,-1.92 10.4,0
              17.92,4.479999 7.68,4.32 11.52,12 4,7.68 4,17.28 0,1.92 -0.48,5.28
              -6.56,37.44 -56.000002,37.44 -4.48,0 -6.56,-0.16 l -2.08,7.68 q
              -3.36,12.32 -3.36,12.64 -1.28,5.6 -4,8.64 -2.56,3.04 -8.48,3.04
              -4.96,0 -7.36,-1.76 -2.24,-1.6 -2.24,-5.6 0,-1.76 0.48,-3.36 l
              19.36,-74.72 q -8.32,2.4 -12.64,6.56 -1.76,-1.92 -2.88,-4.96
              -0.96,-3.2 -0.96,-6.24 z m 27.52,43.2 q 1.92,0.16 5.44,0.16
              15.200002,0 24.000002,-5.76 8.96,-5.76 11.52,-17.76 0.48,-2.72
              0.48,-4 0,-8.96 -4.96,-13.28 -4.96,-4.48 -13.92,-4.48 -4.8,0
              -12.320002,2.24 -6.24,24.8 -10.24,42.88 z"
              inkscape:connector-curvature="0" />
          {/if}
        </g>
      </g>
      <g id="layer1-9" transform="translate(80.647091,100.66018)">
        <g
          id="flowRoot2042-2"
          style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:160px;line-height:1.25;font-family:Sriracha;-inkscape-font-specification:Sriracha;letter-spacing:0px;word-spacing:0px;fill:#000000;fill-opacity:1;stroke:none"
          mask="url(#mask4884-3)"
          transform="scale(0.26458333)"
          aria-label="P">
          {#if visible3}
            <path
              in:draw={{ easing: linear, speed: inSpeed }}
              out:blur={{ radius: 20, duration: 1500 }}
              id="path4888-9"
              style="fill:#f4a460;fill-opacity:1"
              d="m 59.517578,114.86914 q 0,-2.24 1.28,-3.52 1.44,-1.44
              3.84,-2.56 0.8,-0.48 5.76,-2.88 5.12,-2.4 9.76,-3.68
              1.44,-3.199999 4.32,-5.279999 3.04,-2.08 7.68,-2.08 2.72,0
              4.48,1.12 1.76,0.96 2.4,2.56 5.920002,-1.92 14.240002,-1.92 10.4,0
              17.92,4.479999 7.68,4.32 11.52,12 4,7.68 4,17.28 0,1.92 -0.48,5.28
              -6.56,37.44 -56.000002,37.44 -4.48,0 -6.56,-0.16 l -2.08,7.68 q
              -3.36,12.32 -3.36,12.64 -1.28,5.6 -4,8.64 -2.56,3.04 -8.48,3.04
              -4.96,0 -7.36,-1.76 -2.24,-1.6 -2.24,-5.6 0,-1.76 0.48,-3.36 l
              19.36,-74.72 q -8.32,2.4 -12.64,6.56 -1.76,-1.92 -2.88,-4.96
              -0.96,-3.2 -0.96,-6.24 z m 27.52,43.2 q 1.92,0.16 5.44,0.16
              15.200002,0 24.000002,-5.76 8.96,-5.76 11.52,-17.76 0.48,-2.72
              0.48,-4 0,-8.96 -4.96,-13.28 -4.96,-4.48 -13.92,-4.48 -4.8,0
              -12.320002,2.24 -6.24,24.8 -10.24,42.88 z"
              inkscape:connector-curvature="0" />
          {/if}
        </g>
      </g>
      <g id="layer1-65" transform="translate(138.23151,100.87184)">
        <g
          id="flowRoot2042-6"
          style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:160px;line-height:1.25;font-family:Sriracha;-inkscape-font-specification:Sriracha;letter-spacing:0px;word-spacing:0px;fill:#000000;fill-opacity:1;stroke:none"
          mask="url(#mask11111)"
          transform="scale(0.26458333)"
          aria-label="Y">
          {#if visible5}
            <path
              in:draw={{ easing: linear, speed: inSpeed }}
              out:blur={{ radius: 20, duration: 1500 }}
              id="path11115"
              style="fill:#f4a460;fill-opacity:1"
              d="m 133.91758,97.269141 q 6.08,0 10.08,1.76 4,1.759999
              4.16,3.999999 -1.28,1.92 -8.64,10.4 l -6.72,7.52 q -16.16,19.2
              -25.44,29.28 -9.120002,9.92 -14.080002,13.44 -0.96,0.64 -2.88,1.44
              -0.8,5.92 -5.28,24.16 l -1.76,7.04 q -1.12,4.64 -3.36,6.24
              -2.08,1.6 -8.48,1.6 -4.8,0 -6.88,-1.6 -2.08,-1.6 -2.08,-5.76
              0,-1.76 0.48,-3.36 l 6.4,-25.6 q 0.32,-0.8 0.64,-2.72 -2.72,-0.96
              -3.52,-2.56 -0.64,-1.76 -0.96,-5.76 -0.96,-12.16 -1.6,-19.04
              -0.16,-2.24 -1.12,-13.28 -0.96,-11.2 -0.96,-21.28 0,-2.4
              3.36,-3.999999 3.52,-1.76 8.8,-1.76 4.8,0 7.04,1.76 2.24,1.599999
              2.24,5.119999 l 0.16,40.8 v 10.08 q 12.96,-18.24 29.280002,-38.08
              16.48,-19.839999 21.12,-19.839999 z"
              inkscape:connector-curvature="0" />
          {/if}
        </g>
      </g>
    </g>
  </svg>
</div>
