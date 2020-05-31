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
  width="210mm"
  height="297mm"
  viewBox="0 0 210 297"
  version="1.1"
  id="svg1497">
  <defs id="defs1491">
    <mask id="mask4323" maskUnits="userSpaceOnUse">
      {#if visible1}
        <path
          in:draw={{ easing: linear, speed: inSpeed }}
          out:blur={{ radius: 20, duration: 1500 }}
          on:introend={() => {
            visible1 = true;
            console.log('finished a !');
          }}
          id="path4325"
          d="m 110.58721,209.58061 -2.67549,-17.2421 10.99926,-46.52392
          -3.27005,-1.04047 -1.78366,-3.56733 -7.13466,-4.75644
          -5.64827,-2.08094 -9.215605,1.18911 -14.269319,6.24283
          -8.323767,10.10743 -5.945549,16.35026 v 14.5666 l 4.459163,8.91832
          7.431934,3.27005 7.729213,0.59456 7.13466,-2.97278 c 0,0
          12.48565,-8.02649 12.48565,-9.2156 0,-1.18911 3.86461,-3.27005
          3.86461,-3.27005"
          style="fill:none;stroke:#f4a460;stroke-width:19.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
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
      mask="url(#mask4323)"
      transform="scale(0.26458333)"
      aria-label="a">
      {#if visible1}
        <path
          in:draw={{ easing: linear, speed: inSpeed }}
          out:blur={{ radius: 20, duration: 1500 }}
          id="path4327"
          style="fill:#f4a460;fill-opacity:1"
          d="m 115.83758,194.54914 q 0.32,4.16 1.12,7.52 -0.32,0.96 -2.88,1.92
          -2.4,0.96 -4.16,0.96 -5.76,0 -8.32,-1.76 -2.400002,-1.6
          -2.400002,-4.96 0,-3.2 0.64,-6.4 -3.52,4.8 -10.4,8 -6.72,3.04
          -10.88,3.04 -10.72,0 -17.92,-6.24 -7.04,-6.24 -7.04,-20 0,-12.96
          6.08,-24.32 6.24,-11.52 17.12,-18.4 10.88,-7.04 24.160002,-7.04 2.56,0
          6.72,1.44 4.16,1.28 8.32,4.64 4.32,3.2 7.2,8.32 1.28,0 3.04,1.28
          1.76,1.28 1.76,2.56 0,1.44 -0.48,2.88 z m -7.2,-44.8 q -0.96,-3.52
          -3.84,-5.92 -2.72,-2.4 -4.960002,-2.4 -7.36,0 -13.92,5.28 -6.4,5.12
          -10.4,12.8 -4,7.68 -4,14.56 0,6.72 1.6,11.04 1.6,4.32 6.24,4.32 4,0
          9.12,-2.4 5.28,-2.4 9.28,-6.4 4.160002,-4.16 5.440002,-8.64 z" />
      {/if}
    </g>
  </g>
</svg>
