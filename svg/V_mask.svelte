<script>
  import { blur, draw } from "svelte/transition";
  import { linear } from "svelte/easing";
  let visible1 = false;
  let visible2 = false;
  let visible3 = false;
  let visible4 = false;
  let inSpeed = 0.2;
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
  Draw Habi
</button>
<button on:click={toggleVisible}>Erase HaBi</button>
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
  id="svg4551"
  inkscape:version="0.92.5 (2060ec1f9f, 2020-04-08)"
  sodipodi:docname="HaBi.svg">
  <defs id="defs4545">
    {#if visible1}
      <mask maskUnits="userSpaceOnUse" id="mask864">
        <path
          in:draw={{ easing: linear, speed: inSpeed }}
          out:blur={{ radius: 20, duration: 1500 }}
          on:introend={() => (visible2 = true)}
          style="fill:none;stroke:{color};stroke-width:5.21296024;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
          d="m 46.469674,36.552593 -6.649319,27.066992 c 0,0 -6.154155,-2.893145
          -6.083418,-3.214608 0.07074,-0.321461 3.253921,-9.322361
          3.253921,-9.322361 l 11.317989,-1.735887 15.208546,-2.057346
          6.01268,-8.293688 -4.810147,-6.172045 -2.40507,3.986112
          -6.01268,24.752474"
          id="path866"
          inkscape:connector-curvature="0"
          sodipodi:nodetypes="cccccccccc" />
      </mask>
    {/if}
    {#if visible2}
      <mask maskUnits="userSpaceOnUse" id="mask4541">
        <path
          in:draw={{ easing: linear, speed: inSpeed }}
          out:blur={{ radius: 20, duration: 1500 }}
          on:introend={() => (visible3 = true)}
          style="fill:none;stroke:{color};stroke-width:4.80924606;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
          d="m 51.492029,61.433651 -0.141473,-2.957437 0.919585,-4.629035
          1.41475,-4.50045 c 0,0 0.565898,-1.607303 -0.282952,-2.443099
          -0.848846,-0.835799 -2.263597,-2.121641 -3.466134,-2.121641
          -1.202533,0 -3.395396,0.257167 -3.395396,0.257167 l -3.183183,2.121641
          -2.051386,2.70027 c 0,0 -0.353686,0.642921 -0.919585,2.507394
          -0.5659,1.864471 0,5.143371 0,5.143371 l 0.848848,1.671595
          2.122123,0.771507 2.192861,0.0643 11.600935,-7.45789"
          id="path4543"
          inkscape:connector-curvature="0"
          sodipodi:nodetypes="cccccscccsccccc" />
      </mask>
    {/if}
    {#if visible3}
      <mask maskUnits="userSpaceOnUse" id="mask824">
        <path
          in:draw={{ easing: linear, speed: inSpeed }}
          out:blur={{ radius: 20, duration: 1500 }}
          on:introend={() => (visible4 = true)}
          style="fill:none;stroke:{color};stroke-width:5.51574612;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
          d="m 48.051077,32.741012 -7.852971,31.686602 -6.252364,-2.90953
          3.7014,-20.093944 c 0,0 1.600604,-1.772995 5.001891,-2.727684
          3.401286,-0.95469 7.102684,-1.636611 8.803327,-1.682072
          1.700644,-0.04547 5.201967,0.409152 5.952251,1.318381
          0.750283,0.909228 1.200455,2.000302 1.200455,2.000302 0,0
          0.650246,3.091376 -0.800304,4.227912 -1.450548,1.136534
          -4.351644,2.682222 -4.351644,2.682222 l -6.152328,1.545688
          5.852214,0.363691 c 0,0 3.318409,0.802706 3.868618,2.62116
          0.550209,1.818457 -0.51735,6.10743 -1.667787,6.652967
          -1.150434,0.545538 -4.601739,2.318531 -5.95225,2.318531 -1.350508,0
          -7.352779,-0.36369 -7.352779,-0.36369"
          id="path826"
          inkscape:connector-curvature="0"
          sodipodi:nodetypes="ccccscscscccsssc" />
      </mask>
    {/if}
    {#if visible4}
      <mask maskUnits="userSpaceOnUse" id="mask824-0">
        <path
          in:draw={{ easing: linear, speed: inSpeed }}
          out:blur={{ radius: 20, duration: 1500 }}
          style="fill:none;stroke:{color};stroke-width:4.70831776;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
          d="m 43.003539,34.495245 4.951618,3.728944 -6.861529,1.671596
          3.466134,4.821911 -3.749083,15.108652 1.131799,3.150316"
          id="path826-4"
          inkscape:connector-curvature="0"
          sodipodi:nodetypes="cccccc" />
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
    inkscape:cx="107.1746"
    inkscape:cy="867.80686"
    inkscape:document-units="mm"
    inkscape:current-layer="layer1"
    showgrid="false"
    inkscape:window-width="1920"
    inkscape:window-height="1001"
    inkscape:window-x="-9"
    inkscape:window-y="-9"
    inkscape:window-maximized="1" />
  <metadata id="metadata4548">
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
        aria-label="H"
        transform="matrix(0.94458322,0,0,1.0392776,-17.689168,-17.994451)"
        style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:40px;line-height:1.25;font-family:Sriracha;-inkscape-font-specification:Sriracha;letter-spacing:0px;word-spacing:0px;fill:#000000;fill-opacity:1;stroke:none"
        id="flowRoot10"
        mask="url(#mask864)">
        <path
          in:draw={{ easing: linear, speed: inSpeed }}
          out:blur={{ radius: 20, duration: 1500 }}
          inkscape:connector-curvature="0"
          d="m 56.542578,50.124687 q -7.88,0.96 -11.16,1.68 l -2.16,8.560001 q
          -0.28,1.159999 -0.84,1.559999 -0.52,0.400001 -2.12,0.400001 -1.24,0
          -1.84,-0.440001 -0.56,-0.4 -0.56,-1.4 0,-0.439999 0.12,-0.839999 l
          5.48,-21.64 q 0.44,-1.760001 0.92,-2.320001 0.52,-0.6 1.84,-0.6 1.08,0
          1.96,0.24 0.92,0.24 0.96,0.72 0,0.08 -0.52,2.160001 -0.8,3.08
          -2.28,9.36 5.92,-1.2 11.24,-1.640001 l 1.84,-7.44 q 0.4,-1.6
          1.08,-2.36 0.72,-0.8 1.92,-1.04 1.48,0.280001 1.92,0.48 0.48,0.160001
          0.64,0.52 -0.52,1.480001 -0.8,2.76 -0.24,1.24 -0.28,1.48 -0.52,2.8
          -1.24,5.72 1.56,0.680001 1.56,1.84 0,1.160001 -2.48,1.96 -0.44,1.6
          -1.64,6.96 -0.28,1.480001 -0.8,3.68 -0.56,2.200001 -1.76,2.200001
          -3.68,0 -3.68,-1.720001 0,-0.36 2.68,-10.84 z"
          id="path54" />
      </g>
    {/if}
    {#if visible2}
      <g
        aria-label="a"
        transform="matrix(0.94458322,0,0,1.0392776,10.038223,-17.620311)"
        style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:40px;line-height:1.25;font-family:Sriracha;-inkscape-font-specification:Sriracha;letter-spacing:0px;word-spacing:0px;fill:#000000;fill-opacity:1;stroke:none"
        id="flowRoot10-3"
        mask="url(#mask4541)">
        <path
          in:draw={{ easing: linear, speed: inSpeed }}
          out:blur={{ radius: 20, duration: 1500 }}
          d="m 53.222578,59.724688 q 0.08,1.039999 0.28,1.879999 -0.08,0.24
          -0.72,0.48 -0.6,0.240001 -1.04,0.240001 -1.44,0 -2.08,-0.440001
          -0.6,-0.4 -0.6,-1.239999 0,-0.800001 0.16,-1.6 -0.88,1.199999 -2.6,2
          -1.68,0.759999 -2.72,0.759999 -2.68,0 -4.48,-1.56 -1.76,-1.559999
          -1.76,-5 0,-3.239999 1.52,-6.08 1.56,-2.879999 4.28,-4.599999
          2.72,-1.760001 6.04,-1.760001 0.64,0 1.68,0.36 1.04,0.32 2.08,1.16
          1.08,0.8 1.8,2.080001 0.32,0 0.76,0.32 0.44,0.32 0.44,0.64 0,0.36
          -0.12,0.719999 z m -1.8,-11.200001 q -0.24,-0.879999 -0.96,-1.479999
          -0.68,-0.600001 -1.24,-0.600001 -1.84,0 -3.48,1.32 -1.6,1.280001
          -2.6,3.2 -1,1.92 -1,3.64 0,1.68 0.4,2.760001 0.4,1.079999
          1.56,1.079999 1,0 2.28,-0.6 1.32,-0.6 2.32,-1.6 1.04,-1.04 1.36,-2.16
          z"
          id="path3733"
          inkscape:connector-curvature="0" />
      </g>
    {/if}
    {#if visible3}
      <g
        aria-label="B"
        transform="matrix(0.94458322,0,0,1.0392776,40.909726,-18.202305)"
        style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:40px;line-height:1.25;font-family:Sriracha;-inkscape-font-specification:Sriracha;letter-spacing:0px;word-spacing:0px;fill:#000000;fill-opacity:1;stroke:none"
        id="flowRoot10-4"
        mask="url(#mask824)">
        <path
          in:draw={{ easing: linear, speed: inSpeed }}
          out:blur={{ radius: 20, duration: 1500 }}
          inkscape:connector-curvature="0"
          d="m 55.302578,48.084687 q 2.68,0.44 3.56,1.88 0.92,1.400001
          0.92,3.320001 0,0.399999 -0.04,0.599999 -0.76,4.88 -4.08,6.96
          -3.32,2.04 -7.84,2.04 -1.16,0 -2.52,-0.28 -1.32,-0.239999 -2.16,-0.72
          -0.6,0.440001 -2.24,0.440001 -1.08,0 -1.52,-0.840001 -0.44,-0.88
          -0.44,-2.119999 0,-0.440001 0.12,-0.840001 l 4.48,-17.92 q -2.84,0.96
          -3.52,2 -1.24,-1.319999 -1.24,-2.44 0,-0.88 0.68,-1.799999
          1.6,-1.040001 5.2,-1.96 0.32,-0.840001 0.8,-1.160001 0.52,-0.32
          1.52,-0.32 0.84,0 1.56,0.16 0.76,0.16 1.08,0.48 1.92,-0.24 3.88,-0.24
          4.08,0 6,1.64 1.92,1.600001 1.92,4.48 0,2.44 -1.72,4.200001 -1.72,1.72
          -4.4,2.439999 z m -8.12,-1.039999 q 8.76,-0.720001 8.76,-5.12
          0,-1.240001 -0.76,-1.92 -0.76,-0.720001 -2.6,-0.720001 -1.64,0
          -3.64,0.2 z m 0.12,11.96 q 1.8,0 3.48,-0.64 1.72,-0.68 2.8,-1.880001
          1.08,-1.24 1.08,-2.88 0,-1.36 -0.96,-2.319999 -0.92,-1.000001
          -2.6,-1.000001 -3.16,0 -4.56,0.24 -0.64,2.16 -2.12,8 1.28,0.480001
          2.88,0.480001 z"
          id="path819" />
      </g>
    {/if}
    {#if visible4}
      <g
        aria-label="i"
        transform="matrix(0.94458322,0,0,1.0392776,64.51038,-17.204599)"
        style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:40px;line-height:1.25;font-family:Sriracha;-inkscape-font-specification:Sriracha;letter-spacing:0px;word-spacing:0px;fill:#000000;fill-opacity:1;stroke:none"
        id="flowRoot10-6"
        mask="url(#mask824-0)">
        <path
          in:draw={{ easing: linear, speed: inSpeed }}
          out:blur={{ radius: 20, duration: 1500 }}
          inkscape:connector-curvature="0"
          d="m 42.542578,38.044688 q 0,-1.240001 0.76,-2.200001 0.8,-0.96
          2.2,-0.96 1.48,0 2.56,0.92 1.12,0.920001 1.12,2.08 0,1.16 -1.12,2
          -1.12,0.840001 -2.6,0.840001 -1.44,0 -2.2,-0.72 -0.72,-0.760001
          -0.72,-1.96 z m 4.2,7.079999 q -2.12,8.64 -3.24,13 -0.16,0.64
          -0.16,1.4 l 0.04,1.120001 q 0,0.68 -0.44,0.959999 -0.4,0.28 -1.76,0.32
          -1.32,0 -2,-0.279999 -0.68,-0.28 -0.68,-1.200001 0,-0.439999 1,-4.68
          1.04,-4.24 2.8,-11.039999 l -0.92,-1.200001 q -0.12,-0.12 -0.12,-0.28
          0,-0.4 0.88,-0.64 0.88,-0.28 2.44,-0.28 1.36,0 1.72,0.8 0.4,0.76
          0.44,2 z"
          id="path819-7" />
      </g>
    {/if}
  </g>
</svg>
