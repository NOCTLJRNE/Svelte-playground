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
  Draw I SandyBrown
</button>
<button on:click={toggleVisible}>Erase I SandyBrown</button>
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
    <mask id="mask14013" maskUnits="userSpaceOnUse">
      {#if visible1}
        <path
          in:draw={{ easing: linear, speed: inSpeed }}
          out:blur={{ radius: 20, duration: 1500 }}
          on:introend={() => {
            console.log('finished I !');
          }}
          id="path14015"
          d="M 104.64166,73.724807 65.103765,235.44374 30.322301,200.95956
          123.37015,187.87935 47.564395,115.34365 147.15234,100.77706"
          style="fill:none;stroke:#f4a460;stroke-width:20.69999886;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
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
      mask="url(#mask14013)"
      transform="scale(0.26458333)"
      aria-label="I">
      {#if visible1}
        <path
          in:draw={{ easing: linear, speed: inSpeed }}
          out:blur={{ radius: 20, duration: 1500 }}
          id="path14017"
          style="fill:#f4a460;fill-opacity:1"
          d="m 70.877578,119.98914 q -3.2,-1.12 -4.96,-3.36 -1.6,-2.4 -1.6,-5.6
          0,-4.64 6.24,-7.36 22.88,-4.639999 46.080002,-6.559999 6.24,2.72
          6.24,7.359999 0,2.88 -2.88,5.6 -2.88,2.72 -6.56,3.84 l -8.8,1.12 q
          -2.72,12 -12.480002,51.68 l -4.48,17.92 12.32,-1.28 q 6.240002,2.72
          6.240002,7.36 0,2.88 -2.88,5.6 -2.88,2.72 -6.560002,3.84 l -6.4,0.8 q
          -23.52,2.56 -36.16,5.28 -3.2,-1.12 -4.8,-3.36 -1.76,-2.4 -1.76,-5.6
          0,-4.64 6.24,-7.36 8,-1.6 12.16,-2.24 l 17.6,-69.92 q -6.56,0.96
          -12.8,2.24 z" />
      {/if}
    </g>
  </g>
</svg>
