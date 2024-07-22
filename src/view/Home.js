import './styles/HomeStyles.css';

var bioHidden = true;
function execBio() {
    if (bioHidden === true) {
        document.getElementById("portfolio-background").style.height = "600px";
        document.getElementById("bio").innerHTML = "Hide Bio &#8593;";
        document.getElementById("bio-text").style.marginTop = '600px';
        document.getElementById("bio-text").style.height = "250px";
        document.getElementById("bio-text").style.opacity = 1;
        bioHidden = false;
    } else {
        document.getElementById("portfolio-background").style.height = "300px";
        document.getElementById("bio").innerHTML = "Read Bio &#8595;";
        document.getElementById("bio-text").style.height = "0px";
        document.getElementById("bio-text").style.marginTop = '200px';
        document.getElementById("bio-text").style.opacity = 0;
        bioHidden = true;
    }
}

export function ReturnPortfolio() {

    var returnPortfolio = <div id='portfolio-background'>
        <div id='userimg' />
        <div id='userdetails'>
            <div id='user'>
            {/* <iframe width="425" height="350" src="https://www.openstreetmap.org/export/embed.html?bbox=79.85719442367555%2C6.92614727042938%2C79.85944747924806%2C6.927936557998646&amp;layer=mapnik&amp;marker=6.927043200002656%2C79.85832049999999"></iframe><br/> */}

                <h2>Artist</h2>
                <h1>Alanna Glenn</h1>
                <h3 id='bio' onClick={() => execBio()}>Read Bio &#8595;</h3>
                <div id='bio-text'>
                    <text>vitae justo eget magna fermentum iaculis eu non diam phasellus vestibulum lorem sed risus ultricies tristique
                        nulla aliquet enim tortor at auctor urna nunc id cursus metus aliquam eleifend mi in nulla posuere sollicitudin aliquam
                        ultrices sagittis orci a scelerisque purus semper eget duis at tellus at urna condimentum mattis pellentesque id nibh tortor
                        id aliquet lectus proin nibh nisl condimentum id venenatis a condimentum vitae sapien pellentesque habitant morbi tristique
                        senectus et netus et malesuada fames ac turpis egestas sed tempus urna et pharetra pharetra massa massa ultricies mi quis hendrerit
                        dolor magna eget est lorem ipsum dolor sit amet consectetur adipiscing elit pellentesque habitant morbi tristique senectus et
                        netus et malesuada fames ac turpis egestas integer eget aliquet nibh praesent tristique magna sit amet purus gravida quis
                        blandit turpis cursus in hac habitasse platea dictumst quisque sagittis purus sit amet volutpat consequat mauris nunc congue
                        nisi vitae suscipit tellus mauris a diam maecenas sed enim ut sem viverra aliquet eget sit amet tellus cras adipiscing enim eu
                        turpis egestas pretium aenean pharetra magna ac placerat vestibulum lectus mauris ultrices eros in cursus turpis massa tincidunt
                        dui ut ornare lectus sit amet est placerat in egestas erat imperdiet sed euismod nisi porta lorem mollis aliquam ut porttitor vitae justo eget magna fermentum iaculis eu non diam phasellus vestibulum lorem sed risus ultricies tristique
                        nulla aliquet enim tortor at auctor urna nunc id cursus metus aliquam eleifend mi in nulla posuere sollicitudin aliquam
                        ultrices sagittis orci a scelerisque purus semper eget duis at tellus at urna condimentum mattis pellentesque id nibh tortor
                        id aliquet lectus proin nibh nisl condimentum id venenatis a condimentum vitae sapien pellentesque habitant morbi tristique
                        senectus et netus et malesuada fames ac turpis egestas sed tempus urna et pharetra pharetra massa massa ultricies mi quis hendrerit
                        dolor magna eget est lorem ipsum dolor sit amet consectetur adipiscing elit pellentesque habitant morbi tristique senectus et
                        netus et malesuada fames ac turpis egestas integer eget aliquet nibh praesent tristique magna sit amet purus gravida quis
                        blandit turpis cursus in hac habitasse platea dictumst quisque sagittis purus sit amet volutpat consequat mauris nunc congue
                        nisi vitae suscipit tellus mauris a diam maecenas sed enim ut sem viverra aliquet eget sit amet tellus cras adipiscing enim eu
                        turpis egestas pretium aenean pharetra magna ac placerat vestibulum lectus mauris ultrices eros in cursus turpis massa tincidunt
                        dui ut ornare lectus sit amet est placerat in egestas erat imperdiet sed euismod nisi porta lorem mollis aliquam ut porttitor
                    </text>
                </div>
            </div>
        </div>
    </div>
    return returnPortfolio;
}