function LinkPage({ children }: { children: any }) {
    return (
        <svg id="LINK_CONTENT"
            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1170 2362">
            <defs>
                <style>
                    {".cls-1{stroke:#fff;stroke-miterlimit:10;stroke-width:5px;}.cls-2{font-size:115px;}.cls-2,.cls-3,.cls-4,.cls-5,.cls-6,.cls-7{fill:#fff;font-family:BOOTLE;}.cls-3{font-size:114px;}.cls-4{font-size:112px;}.cls-5{font-size:119px;}.cls-6{font-size:113px;}.cls-7{font-size:74px;}"}
                </style>
            </defs>
            <g id="LINK">
                <g id="INSTAGRAM" onClick={() => goTo()}>
                    <rect id="CADRE" className="cls-1" x="227.5" y="807.5" width="732" height="175" />
                    <g id="TEXTE">
                        <text className="cls-2" transform="translate(794.33 934.97)">M</text>
                        <text className="cls-2" transform="translate(727.33 934.97)">a</text>
                        <text className="cls-3" transform="translate(664.33 934.6)">R</text>
                        <text className="cls-4" transform="translate(598.33 934.85)">g</text>
                        <text className="cls-2" transform="translate(538.33 934.97)">a</text>
                        <text className="cls-2" transform="translate(485.33 934.97)">t</text>
                        <text className="cls-5" transform="translate(431.33 936.8)">S</text>
                        <text className="cls-2" transform="translate(370.33 934.97)">N</text>
                        <text className="cls-2" transform="translate(335.33 934.97)">i</text>
                    </g>
                </g>
                <g id="SPOTIFY" onClick={() => goTo()}>
                    <rect className="cls-1" x="226.5" y="1028.5" width="732" height="175" />
                    <g id="TEXTE-2" data-name="TEXTE">
                        <text className="cls-2" transform="translate(735.33 1153.97)">y</text>
                        <text className="cls-2" transform="translate(681.33 1153.97)">f</text>
                        <text className="cls-2" transform="translate(644.33 1153.97)">i</text>
                        <text className="cls-2" transform="translate(583.33 1153.97)">t</text>
                        <text className="cls-2" transform="translate(520.33 1154.3)">o</text>
                        <text className="cls-2" transform="translate(466.33 1153.97)">p</text>
                        <text className="cls-5" transform="translate(407.33 1156.8)">S</text>
                    </g>
                </g>
                <g id="YOUTUBE" onClick={() => goTo()}>
                    <rect className="cls-1" x="226.5" y="1250.5" width="732" height="175" />
                    <g id="TEXTE-3" data-name="TEXTE">
                        <text className="cls-2" transform="translate(410.33 1377.97)">y</text>
                        <text className="cls-6" transform="translate(460.33 1377.89)">o</text>
                        <text className="cls-3" transform="translate(520.33 1377.26)">u</text>
                        <text className="cls-3" transform="translate(579.33 1377.26)">t</text>
                        <text className="cls-2" transform="translate(636.33 1377.97)">u</text>
                        <text className="cls-7" transform="translate(696.33 1377.98)">b</text>
                        <text className="cls-2" transform="translate(745.33 1377.97)">e</text>
                    </g>
                </g>
            </g>
        </svg>
    )

    function goTo() {
        console.log("kilkou");
    }
}

export default LinkPage;