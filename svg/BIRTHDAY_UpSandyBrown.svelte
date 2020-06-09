<script>
  import { blur, draw } from "svelte/transition";
  import { linear } from "svelte/easing";
  import { createEventDispatcher } from "svelte";
  let visible1 = false;
  let visible2 = false;
  let visible3 = false;
  let visible4 = false;
  let visible5 = false;
  let visible6 = false;
  let visible7 = false;
  let visible8 = false;
  let inSpeed = 0.75;
  let HinSpeed = 1;
  let maskOutSpeed = 0.1;
  let strokeOutSpeed = 0.12;
  let color = "rgb(200, 200, 200)";
  export let startBIRTHDAY = false;
  const dispatch = createEventDispatcher();
  function toggleVisible() {
    visible1 = false;
    visible2 = false;
    visible3 = false;
    visible4 = false;
    visible5 = false;
    visible6 = false;
    visible7 = false;
    visible8 = false;
    startBIRTHDAY = false;
  }
</script>

<style>
  #svg15148 {
    position: absolute;
    top: 65vh;
    z-index: 2;
  }
</style>

<div>
  <!-- <button
  on:click={() => {
    visible1 = true;
  }}>
  Draw BIRTHDAY
</button> -->
  <!-- <button on:click={toggleVisible}>Erase BIRTHDAY</button>
<br /> -->
  <svg
    xmlns:dc="http://purl.org/dc/elements/1.1/"
    xmlns:cc="http://creativecommons.org/ns#"
    xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
    xmlns:svg="http://www.w3.org/2000/svg"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
    xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
    width="230mm"
    height="200mm"
    viewBox="0 0 230 200"
    version="1.1"
    id="svg15148"
    inkscape:version="0.92.5 (2060ec1f9f, 2020-04-08)"
    sodipodi:docname="BIRTHDAY_120_path_plain_center.svg">
    <defs id="defs15142">
      <mask id="mask12338" maskUnits="userSpaceOnUse">
        {#if startBIRTHDAY}
          <path
            in:draw={{ easing: linear, speed: inSpeed }}
            out:blur={{ radius: 20, duration: 1500 }}
            on:introend={() => {
              visible2 = true;
            }}
            inkscape:connector-curvature="0"
            id="path12340"
            d="M 94.236953,88.885959 62.428268,218.79621 40.132457,198.87862 l
            11.891097,-76.10303 19.620313,-10.40471 21.701254,-5.94555
            27.646809,-2.08094 9.51287,3.27005 3.86461,3.56733 c 0,0
            2.37822,1.78366 2.97278,6.5401 0.59455,4.75644 -0.29726,10.40471
            -0.29726,10.40471 l -2.6755,4.45916 -4.16188,5.351 -10.40471,5.94555
            -10.40471,3.56733 -17.836655,2.67549 27.944085,1.78367 c 0,0
            3.86461,0 6.83738,3.56733 2.97277,3.56733 6.24283,7.72921
            5.94555,12.18837 -0.29726,4.45917 -0.59456,8.91833 -3.27005,13.37749
            -2.6755,4.45916 -6.54011,8.62105 -11.59382,11.29654 -5.05372,2.6755
            -16.94482,6.24283 -16.94482,6.24283 L 89.777791,199.1759
            37.159682,188.47391"
            style="fill:none;stroke:#f4a460;stroke-width:22.20000076;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
        {/if}
      </mask>
      <mask id="mask14013" maskUnits="userSpaceOnUse">
        {#if visible2}
          <path
            in:draw={{ easing: linear, speed: inSpeed }}
            out:blur={{ radius: 20, duration: 1500 }}
            on:introend={() => {
              visible3 = true;
            }}
            sodipodi:nodetypes="cccccc"
            inkscape:connector-curvature="0"
            id="path14015"
            d="M 104.64166,73.724807 65.103765,235.44374 30.322301,200.95956
            123.37015,187.87935 47.564395,115.34365 147.15234,100.77706"
            style="fill:none;stroke:#f4a460;stroke-width:20.69999886;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
        {/if}
      </mask>
      <mask id="mask14574" maskUnits="userSpaceOnUse">
        {#if visible3}
          <path
            in:draw={{ easing: linear, speed: inSpeed }}
            out:blur={{ radius: 20, duration: 1500 }}
            on:introend={() => {
              visible4 = true;
            }}
            sodipodi:nodetypes="ccccccccscccsccccccccc"
            inkscape:connector-curvature="0"
            id="path14576"
            d="M 91.440005,86.409835 58.227312,217.99936 44.14345,206.43798 l
            5.885794,-83.66235 27.326899,-13.24303 26.696277,-4.62455
            6.30621,-0.42042 c 0,0 4.20413,-0.42041 7.77765,1.26124
            3.57352,1.68166 6.30621,1.05104 8.40828,3.78373 2.10207,2.73269
            4.62455,5.46538 6.51641,10.51034 1.89186,5.04497 1.68166,6.72662
            1.26124,10.08993 -0.42041,3.36331 -3.99393,9.45932 -5.25517,10.51035
            -1.26124,1.05103 -4.20414,4.62455 -7.77765,6.51641 -3.57352,1.89187
            -9.66952,5.04497 -14.29407,6.096 -4.62456,1.05104 -22.281937,1.05104
            -22.281937,1.05104 l 11.981794,-7.77766 3.993933,14.71449 c 0,0
            0.84083,2.94289 2.9429,6.3062 2.10206,3.36331 7.77765,10.08994
            7.77765,10.08994 l 9.0389,10.51034 9.87972,8.19807 30.69021,-2.73269"
            style="fill:none;stroke:#f4a460;stroke-width:20.80000114;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
        {/if}
      </mask>
      <mask id="mask15135" maskUnits="userSpaceOnUse">
        {#if visible4}
          <path
            in:draw={{ easing: linear, speed: inSpeed }}
            out:blur={{ radius: 20, duration: 1500 }}
            on:introend={() => {
              visible5 = true;
            }}
            sodipodi:nodetypes="cccc"
            inkscape:connector-curvature="0"
            id="path15137"
            d="M 109.72801,91.034389 78.617383,217.57895 48.768005,112.26529
            167.53491,102.38556"
            style="fill:none;stroke:#f4a460;stroke-width:21;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
        {/if}
      </mask>
      <mask id="mask2052H2" maskUnits="userSpaceOnUse">
        {#if visible5}
          <path
            in:draw={{ easing: linear, speed: HinSpeed }}
            out:blur={{ radius: 20, duration: 1500 }}
            on:introend={() => {
              visible6 = true;
              console.log('finished H !');
            }}
            inkscape:connector-curvature="0"
            id="path2054"
            d="M 94.285713,79.66254 C 91.785714,84.305398 59.642858,217.51968
            59.642858,217.51968 l 91.428572,2.14286 32.85714,-124.285715
            -17.85714,-10.357141 -11.78572,9.285713 -28.57142,119.642863 c 0,0
            -78.571433,13.57142 -78.571433,11.78571 0,-1.78571
            10.357141,-64.64286 10.357141,-64.64286 l 37.5,-8.21428
            38.928572,-5.71429 23.92857,-0.35713"
            style="fill:none;stroke:#f4a460;stroke-width:21.78897667;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
        {/if}
      </mask>
      <mask id="mask13452" maskUnits="userSpaceOnUse">
        {#if visible6}
          <path
            in:draw={{ easing: linear, speed: inSpeed }}
            out:blur={{ radius: 20, duration: 1500 }}
            on:introend={() => {
              visible7 = true;
            }}
            inkscape:connector-curvature="0"
            id="path13454"
            d="M 98.101562,78.183969 68.076538,193.52762 83.832243,196.5004 c
            0,0 8.621045,1.18911 14.566594,-0.89183 5.945553,-2.08095
            15.458433,-5.94555 17.242093,-7.72922 1.78367,-1.78366
            5.05372,-4.45916 9.51288,-11.29654 4.45916,-6.83738
            8.91832,-16.35026 9.81016,-20.51215 0.89183,-4.16188
            3.27005,-9.51287 2.37822,-16.05298 -0.89184,-6.5401
            -2.37822,-13.97204 -2.37822,-13.97204 0,0 -0.2973,-6.83738
            -5.05372,-10.99927 -4.75644,-4.16188 -12.18838,-8.02649
            -12.18838,-8.02649 0,0 -2.37822,-1.48638 -8.62104,-2.08094
            -6.24283,-0.59455 -19.620314,2.37822 -27.052252,4.16189
            -7.431935,1.78366 -43.105232,19.02575 -43.105232,19.02575"
            style="fill:none;stroke:#f4a460;stroke-width:21.10000038;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
        {/if}
      </mask>
      <mask id="mask5445" maskUnits="userSpaceOnUse">
        {#if visible7}
          <path
            in:draw={{ easing: linear, speed: inSpeed }}
            out:blur={{ radius: 20, duration: 1500 }}
            on:introend={() => {
              visible8 = true;
            }}
            sodipodi:nodetypes="cccccccccccc"
            inkscape:connector-curvature="0"
            id="path5447"
            d="m 54.233383,207.27881 59.278347,-85.344 14.71448,-13.03283
            8.40828,-2.10207 -2.52248,15.97572 -3.73272,64.99 1.28237,21.66625
            -61.452554,30.21879 -43.723036,-27.32689 31.531036,-40.78014
            12.192,-4.20414 98.488034,-7.69059"
            style="fill:none;stroke:#f4a460;stroke-width:21.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
        {/if}
      </mask>
      <mask id="mask11111Y2" maskUnits="userSpaceOnUse">
        {#if visible8}
          <path
            in:draw={{ easing: linear, speed: inSpeed }}
            out:blur={{ radius: 20, duration: 1500 }}
            on:introend={() => {
              dispatch('finishedBIRTHDAY', { text: 'BIRTHDAY finished !' });
            }}
            sodipodi:nodetypes="cccccc"
            inkscape:connector-curvature="0"
            id="path11113"
            d="m 71.890765,87.671079 3.363307,69.998901 14.714483,1.47145 L
            148.40608,89.142528 97.115589,102.38556 66.004967,222.6239"
            style="fill:none;stroke:#f4a460;stroke-width:21.89999962;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
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
      inkscape:cx="553.34136"
      inkscape:cy="372.65316"
      inkscape:document-units="mm"
      inkscape:current-layer="layer1"
      showgrid="false"
      inkscape:window-width="1920"
      inkscape:window-height="1001"
      inkscape:window-x="-9"
      inkscape:window-y="-9"
      inkscape:window-maximized="1" />
    <metadata id="metadata15145">
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
      <g id="layer1-0" transform="translate(-10.994902,100.75701)">
        <g
          id="flowRoot2042"
          style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:160px;line-height:1.25;font-family:Sriracha;-inkscape-font-specification:Sriracha;letter-spacing:0px;word-spacing:0px;fill:#000000;fill-opacity:1;stroke:none"
          mask="url(#mask12338)"
          transform="scale(0.26458333)"
          aria-label="B">
          {#if startBIRTHDAY}
            <path
              in:draw={{ easing: linear, speed: inSpeed }}
              out:blur={{ radius: 20, duration: 1500 }}
              id="path12342"
              style="fill:#f4a460;fill-opacity:1"
              d="m 124.15758,147.98914 q 10.72,1.76 14.24,7.52 3.68,5.6
              3.68,13.28 0,1.6 -0.16,2.4 -3.04,19.52 -16.32,27.84 -13.28,8.16
              -31.360002,8.16 -4.64,0 -10.08,-1.12 -5.28,-0.96 -8.64,-2.88
              -2.4,1.76 -8.96,1.76 -4.32,0 -6.08,-3.36 -1.76,-3.52 -1.76,-8.48
              0,-1.76 0.48,-3.36 l 17.92,-71.68 q -11.36,3.84 -14.08,8
              -4.96,-5.28 -4.96,-9.76 0,-3.52 2.72,-7.2 6.4,-4.16 20.8,-7.84
              1.28,-3.359999 3.2,-4.639999 2.08,-1.28 6.08,-1.28 3.36,0
              6.24,0.64 3.040002,0.64 4.320002,1.92 7.68,-0.96 15.52,-0.96
              16.32,0 24,6.559999 7.68,6.4 7.68,17.92 0,9.76 -6.88,16.8
              -6.88,6.88 -17.6,9.76 z m -32.480002,-4.16 q 35.040002,-2.88
              35.040002,-20.48 0,-4.96 -3.04,-7.68 -3.04,-2.88 -10.4,-2.88
              -6.56,0 -14.560002,0.8 z m 0.48,47.84 q 7.2,0 13.920002,-2.56
              6.88,-2.72 11.2,-7.52 4.32,-4.96 4.32,-11.52 0,-5.44 -3.84,-9.28
              -3.68,-4 -10.4,-4 -12.640002,0 -18.240002,0.96 -2.56,8.64 -8.48,32
              5.12,1.92 11.52,1.92 z"
              inkscape:connector-curvature="0" />
          {/if}
        </g>
      </g>
      <g id="layer1-4" transform="translate(19.596213,101.01101)">
        <g
          id="flowRoot2042-4"
          style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:160px;line-height:1.25;font-family:Sriracha;-inkscape-font-specification:Sriracha;letter-spacing:0px;word-spacing:0px;fill:#000000;fill-opacity:1;stroke:none"
          mask="url(#mask14013)"
          transform="scale(0.26458333)"
          aria-label="I">
          {#if visible2}
            <path
              in:draw={{ easing: linear, speed: inSpeed }}
              out:blur={{ radius: 20, duration: 1500 }}
              id="path14017"
              style="fill:#f4a460;fill-opacity:1"
              d="m 70.877578,119.98914 q -3.2,-1.12 -4.96,-3.36 -1.6,-2.4
              -1.6,-5.6 0,-4.64 6.24,-7.36 22.88,-4.639999 46.080002,-6.559999
              6.24,2.72 6.24,7.359999 0,2.88 -2.88,5.6 -2.88,2.72 -6.56,3.84 l
              -8.8,1.12 q -2.72,12 -12.480002,51.68 l -4.48,17.92 12.32,-1.28 q
              6.240002,2.72 6.240002,7.36 0,2.88 -2.88,5.6 -2.88,2.72
              -6.560002,3.84 l -6.4,0.8 q -23.52,2.56 -36.16,5.28 -3.2,-1.12
              -4.8,-3.36 -1.76,-2.4 -1.76,-5.6 0,-4.64 6.24,-7.36 8,-1.6
              12.16,-2.24 l 17.6,-69.92 q -6.56,0.96 -12.8,2.24 z"
              inkscape:connector-curvature="0" />
          {/if}
        </g>
      </g>
      <g id="layer1-00" transform="translate(42.503829,101.30734)">
        <g
          id="flowRoot2042-8"
          style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:160px;line-height:1.25;font-family:Sriracha;-inkscape-font-specification:Sriracha;letter-spacing:0px;word-spacing:0px;fill:#000000;fill-opacity:1;stroke:none"
          mask="url(#mask14574)"
          transform="scale(0.26458333)"
          aria-label="R">
          {#if visible3}
            <path
              in:draw={{ easing: linear, speed: inSpeed }}
              out:blur={{ radius: 20, duration: 1500 }}
              id="path14578"
              style="fill:#f4a460;fill-opacity:1"
              d="m 137.91758,190.22914 q 1.92,0.32 4.48,3.52 2.56,3.2 2.56,5.92
              0,1.76 -2.72,2.72 -0.96,0.32 -3.2,1.12 -2.08,0.96 -3.84,1.28
              -1.76,0.32 -4,0.32 -3.36,0 -5.12,-0.8 -4.48,-1.92 -11.68,-8.96
              -7.2,-7.04 -13.92,-16 -6.720002,-9.12 -9.920002,-16.96 h -0.96 q
              -4.48,0 -6.56,-0.16 -4.8,17.76 -8,31.04 -1.28,5.6 -4,8.64
              -2.56,3.04 -8.48,3.04 -4.96,0 -7.36,-1.76 -2.24,-1.6 -2.24,-5.6
              0,-1.76 0.48,-3.36 l 19.36,-74.72 q -8.32,2.4 -12.64,6.56
              -1.76,-1.92 -2.88,-4.96 -0.96,-3.2 -0.96,-6.24 0,-2.24 1.28,-3.52
              1.44,-1.44 3.84,-2.56 0.8,-0.48 5.76,-2.88 5.12,-2.4 9.76,-3.68
              1.44,-3.199999 4.32,-5.279999 3.04,-2.08 7.68,-2.08 2.72,0
              4.48,1.12 1.76,0.96 2.4,2.56 5.920002,-1.92 14.240002,-1.92
              10.24,0 17.76,4.159999 7.68,4 11.68,10.4 4,6.4 4,12.96 0,14.56
              -9.44,23.36 -9.28,8.64 -24,12.32 3.36,5.76 8.96,12.96 5.6,7.2
              10.56,12.32 5.12,4.96 6.72,4.96 z m -43.840002,-75.04 q
              -4.64,18.56 -7.68,32.16 1.92,0.16 5.44,0.16 7.68,0 15.360002,-2.24
              7.68,-2.4 12.8,-7.04 5.28,-4.64 5.28,-11.52 0,-6.24 -5.12,-9.92
              -5.12,-3.84 -13.76,-3.84 -4.8,0 -12.320002,2.24 z"
              inkscape:connector-curvature="0" />
          {/if}
        </g>
      </g>
      <g id="layer1-8" transform="translate(69.750606,101.34968)">
        <g
          id="flowRoot2042-3"
          style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:160px;line-height:1.25;font-family:Sriracha;-inkscape-font-specification:Sriracha;letter-spacing:0px;word-spacing:0px;fill:#000000;fill-opacity:1;stroke:none"
          mask="url(#mask15135)"
          transform="scale(0.26458333)"
          aria-label="T">
          {#if visible4}
            <path
              in:draw={{ easing: linear, speed: inSpeed }}
              out:blur={{ radius: 20, duration: 1500 }}
              id="path15139"
              style="fill:#f4a460;fill-opacity:1"
              d="m 95.037578,193.26914 q -1.28,5.6 -4,8.64 -2.56,3.04 -8.48,3.04
              -4.96,0 -7.36,-1.76 -2.24,-1.6 -2.24,-5.6 0,-1.76 0.48,-3.36 l
              19.52,-77.44 q -0.16,0 -10.4,1.12 -12.32,0.96 -15.36,1.6
              -3.2,-1.12 -4.96,-3.36 -1.6,-2.4 -1.6,-5.6 0,-2.56 1.76,-4.8
              1.92,-2.4 4.48,-3.52 8,-1.6 22.4,-2.719999 14.400002,-1.12
              36.960002,-2.4 11.52,-0.48 15.52,-0.96 2.56,1.12 4.32,3.52
              1.92,2.239999 1.92,4.799999 0,2.88 -2.88,5.6 -2.88,2.72 -6.56,3.84
              l -28,1.44 q 1.76,0.64 1.76,4.32 0,1.92 -0.32,2.88 -2.72,12.16
              -7.52,31.52 -4.640002,19.36 -6.240002,26.24 -0.96,4 -1.76,7.2
              -0.8,3.2 -1.44,5.76 z"
              inkscape:connector-curvature="0" />
          {/if}
        </g>
      </g>
      <g
        id="layer1-08"
        inkscape:label="Layer 1"
        transform="translate(95.748552,100.96868)">
        <g
          id="flowRoot2042-9"
          style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:160px;line-height:1.25;font-family:Sriracha;-inkscape-font-specification:Sriracha;letter-spacing:0px;word-spacing:0px;fill:#000000;fill-opacity:1;stroke:none"
          mask="url(#mask2052H2)"
          transform="scale(0.26458333)"
          aria-label="H">
          {#if visible5}
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
      <g id="layer1-3" transform="translate(127.92716,101.22268)">
        <g
          id="flowRoot2042-37"
          style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:160px;line-height:1.25;font-family:Sriracha;-inkscape-font-specification:Sriracha;letter-spacing:0px;word-spacing:0px;fill:#000000;fill-opacity:1;stroke:none"
          mask="url(#mask13452)"
          transform="scale(0.26458333)"
          aria-label="D">
          {#if visible6}
            <path
              in:draw={{ easing: linear, speed: inSpeed }}
              out:blur={{ radius: 20, duration: 1500 }}
              id="path13456"
              style="fill:#f4a460;fill-opacity:1"
              d="m 91.517578,93.109141 q 4.64,0 7.04,1.28 2.400002,1.28
              2.400002,3.36 3.04,-0.48 5.28,-0.64 2.4,-0.16 5.28,-0.16 11.52,0
              19.36,5.599999 8,5.6 11.84,14.72 4,9.12 4,19.68 0,2.72 -0.16,4
              -1.44,19.2 -9.6,33.92 -8.16,14.56 -21.6,22.56 -13.28,8
              -29.920002,8 -4.64,0 -11.36,-1.12 -2.56,-0.48 -6.08,-3.36
              -3.36,-3.04 -5.76,-6.88 -2.4,-3.84 -2.4,-6.88 0,-1.76 0.48,-3.36 l
              16.8,-64.8 q -9.12,2.72 -15.36,7.04 -1.92,-1.92 -2.88,-4.8
              -0.96,-2.88 -0.96,-5.92 0,-3.52 2.88,-6.24 7.52,-4.8 20.8,-8.16
              3.04,-7.839999 9.92,-7.839999 z m -11.2,94.559999 q 3.84,0.96
              8.32,0.96 11.2,0 19.200002,-6.08 8,-6.24 12.48,-15.68 4.64,-9.44
              6.08,-19.52 0.64,-4 0.64,-8.96 0,-11.2 -4.96,-17.6 -4.96,-6.56
              -15.36,-6.56 -4.48,0 -8.160002,0.64 -2.88,12.48 -12.16,48.8
              -4.96,19.52 -6.08,24 z"
              inkscape:connector-curvature="0" />
          {/if}
        </g>
      </g>
      <g id="layer1-7" transform="translate(155.0681,101.13801)">
        <g
          id="flowRoot2042-1"
          style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:160px;line-height:1.25;font-family:Sriracha;-inkscape-font-specification:Sriracha;letter-spacing:0px;word-spacing:0px;fill:#000000;fill-opacity:1;stroke:none"
          mask="url(#mask5445)"
          transform="scale(0.26458333)"
          aria-label="A">
          {#if visible7}
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
      <g id="layer1-5" transform="translate(186.01908,101.56134)">
        <g
          id="flowRoot2042-94"
          style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:160px;line-height:1.25;font-family:Sriracha;-inkscape-font-specification:Sriracha;letter-spacing:0px;word-spacing:0px;fill:#000000;fill-opacity:1;stroke:none"
          mask="url(#mask11111Y2)"
          transform="scale(0.26458333)"
          aria-label="Y">
          {#if visible8}
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
