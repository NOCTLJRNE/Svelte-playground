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
  Draw R SandyBrown
</button>
<button on:click={toggleVisible}>Erase R SandyBrown</button>
<br />
<svg
  xmlns:dc="http://purl.org/dc/elements/1.1/"
  xmlns:cc="http://creativecommons.org/ns#"
  xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
  xmlns:svg="http://www.w3.org/2000/svg"
  xmlns="http://www.w3.org/2000/svg"
  width="210mm"
  height="297mm"
  viewBox="0 0 210 297"
  version="1.1"
  id="svg1497">
  <defs id="defs1491">
    <mask id="mask14574" maskUnits="userSpaceOnUse">
      {#if visible1}
        <path
          in:draw={{ easing: linear, speed: inSpeed }}
          out:blur={{ radius: 20, duration: 1500 }}
          on:introend={() => {
            console.log('finished R !');
          }}
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
      id="flowRoot2042"
      style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:160px;line-height:1.25;font-family:Sriracha;-inkscape-font-specification:Sriracha;letter-spacing:0px;word-spacing:0px;fill:#000000;fill-opacity:1;stroke:none"
      mask="url(#mask14574)"
      transform="scale(0.26458333)"
      aria-label="R">
      {#if visible1}
        <path
          in:draw={{ easing: linear, speed: inSpeed }}
          out:blur={{ radius: 20, duration: 1500 }}
          id="path14578"
          style="fill:#f4a460;fill-opacity:1"
          d="m 137.91758,190.22914 q 1.92,0.32 4.48,3.52 2.56,3.2 2.56,5.92
          0,1.76 -2.72,2.72 -0.96,0.32 -3.2,1.12 -2.08,0.96 -3.84,1.28
          -1.76,0.32 -4,0.32 -3.36,0 -5.12,-0.8 -4.48,-1.92 -11.68,-8.96
          -7.2,-7.04 -13.92,-16 -6.720002,-9.12 -9.920002,-16.96 h -0.96 q
          -4.48,0 -6.56,-0.16 -4.8,17.76 -8,31.04 -1.28,5.6 -4,8.64 -2.56,3.04
          -8.48,3.04 -4.96,0 -7.36,-1.76 -2.24,-1.6 -2.24,-5.6 0,-1.76
          0.48,-3.36 l 19.36,-74.72 q -8.32,2.4 -12.64,6.56 -1.76,-1.92
          -2.88,-4.96 -0.96,-3.2 -0.96,-6.24 0,-2.24 1.28,-3.52 1.44,-1.44
          3.84,-2.56 0.8,-0.48 5.76,-2.88 5.12,-2.4 9.76,-3.68 1.44,-3.199999
          4.32,-5.279999 3.04,-2.08 7.68,-2.08 2.72,0 4.48,1.12 1.76,0.96
          2.4,2.56 5.920002,-1.92 14.240002,-1.92 10.24,0 17.76,4.159999 7.68,4
          11.68,10.4 4,6.4 4,12.96 0,14.56 -9.44,23.36 -9.28,8.64 -24,12.32
          3.36,5.76 8.96,12.96 5.6,7.2 10.56,12.32 5.12,4.96 6.72,4.96 z m
          -43.840002,-75.04 q -4.64,18.56 -7.68,32.16 1.92,0.16 5.44,0.16 7.68,0
          15.360002,-2.24 7.68,-2.4 12.8,-7.04 5.28,-4.64 5.28,-11.52 0,-6.24
          -5.12,-9.92 -5.12,-3.84 -13.76,-3.84 -4.8,0 -12.320002,2.24 z" />
      {/if}
    </g>
  </g>
</svg>
