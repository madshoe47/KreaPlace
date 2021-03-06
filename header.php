<header id="mobil-header">
            <img class="logo" src="images/logo_lyserd.png" alt="Kreaplace Logo">
            <div>
                <i id="mobil-nav-btn" class="fas fa-bars"></i>
                <nav id="mobil-nav">
                    <div class="profil">
                        <button id="mobil-loginbtn" class="btn" data-mobil>Login</button>
                        <div class="profilstatus">
                            <img src="images/profil.jpg" alt="Anna Profil billede">
                            <button class="btn">Nyt Opslag</button>
                        </div>
                    </div>

                    <ul>
                        <li class="menu-active"><a href="/index.html">Udforsk</a></li>
                        <li id="mobil-dropdown-btn" class="connect-dropdown" data-mobil>
                            <a href="#">Opskrifter <span class="menu-dropdown"></span></a>
                        </li>
                        <li class="onlyLogin"><a href="/minside.html">Min side</a></li>
                        <li><a href="/forum.html">Forum</a></li>
                    </ul>
                </nav>
            </div>
        </header>
        <header id="desktop-header">
            <img class="logo" src="images/logo_lyserd.png" alt="Kreaplace Logo">
            <nav>
                <ul>
                    <li class="menu-active"><a href="/index.html">Udforsk</a></li>
                    <li id="dropdown-btn" class="connect-dropdown">
                        <a href="#">Opskrifter <span class="menu-dropdown"></span></a>
                    </li>
                    <li class="onlyLogin"><a href="/minside.html">Min side</a></li>
                    <li><a href="/forum.html">Forum</a></li>
                </ul>
            </nav>

            <div class="profil">
                <button id="loginbtn" class="btn">Login</button>
                <div class="profilstatus">
                    <img src="images/profil.jpg" alt="Anna Profil billede">
                    <button class="btn">Nyt Opslag</button>
                </div>
            </div>

        </header>

        <div id="dropdownMenu" class="dropdown-menu">
            <div class="menu-grid">
                <h2>Gratis Opskrifter</h2>
                <ul>
                    <li><a href="#">Damer</a></li>
                    <li><a href="#">Fodtøj</a> </li>
                    <li><a href="#">Børn</a></li>
                    <li><a href="#">Interiør</a></li>
                    <li><a href="#">Poncho & Sjal</a></li>
                    <li><a href="#">Højtider & Mærkedage</a></li>
                    <li><a href="#">Dyr & Legetøj</a></li>
                    <li><a href="#">Tasker</a></li>
                    <li><a href="#">Kæledyr</a></li>
                </ul>
            </div>
            <div class="menu-grid">
                <h2>Betalte Opskrifter</h2>
                <ul>
                    <li><a href="#">Damer</a></li>
                    <li><a href="#">Fodtøj</a> </li>
                    <li><a href="#">Børn</a></li>
                    <li><a href="#">Interiør</a></li>
                    <li><a href="#">Poncho & Sjal</a></li>
                    <li><a href="#">Højtider & Mærkedage</a></li>
                    <li><a href="#">Dyr & Legetøj</a></li>
                    <li><a href="#">Tasker</a></li>
                    <li><a href="#">Kæledyr</a></li>
                </ul>
            </div>
            <div class="menu-grid">
                <h2>Betalte Mærker</h2>
                <ul>
                    <li><a href="#">Holme</a> </li>
                    <li><a href="#">LillteHappyCrochet</a> </li>
                    <li><a href="#">KniteByTrineP</a> </li>
                    <li><a href="#">Rico</a></li>
                    <li><a href="#">Oj Hæklerier</a></li>
                    <li><a href="#">ByCVig</a></li>
                    <li><a href="#">BC GARN</a></li>
                    <li><a href="#">Du Store Apakka</a></li>
                    <li><a href="#">Strikkeopskrifter</a> </li>
                    <li><a href="#">Hækleopskrifter</a> </li>
                </ul>
            </div>
            <div class="menu-grid">
                <h2>Mærker</h2>
                <ul>
                    <li><a href="#">DROPS</a></li>
                    <li><a href="#">MayFlower</a></li>
                    <li><a href="#">Dale Garn</a></li>
                    <li><a href="#">Go Handmade</a></li>
                    <li><a href="#">Monos Del Urguay</a> </li>
                    <li><a href="#">Jârbo</a></li>
                    <li><a href="#">Istex</a></li>
                </ul>
            </div>
            <div class="menu-grid">
                <h2>Årstider</h2>
                <ul>
                    <li><a href="#">Forår</a></li>
                    <li><a href="#">Sommer</a></li>
                    <li><a href="#">Efterår</a></li>
                    <li><a href="#">Vinter</a></li>
                </ul>
            </div>
        </div>

        <div id="blur" class="blur"></div>

        <div id="loginmodal" class="modal">

            <div class="login">
                <img class="logo" src="images/logo_lyserd.png" alt="Kreaplace Logo">
                <form id="loginform">
                    <label for="email">Brugernavn eller E-mail</label>
                    <input type="text" id="email" placeholder="Eks. kreaplace@krea.nu" required>
                    <label for="password">Adgangskode</label>
                    <input type="password" id="password" placeholder="Eks. H3B8pIT3Nsk3" autocomplete="off" required>
                    <p id="loginerror"></p>
                    <input class="btn" type="submit" value="Login">
                </form>
                <p class="eller">ELLER</p>
                <hr>
                <button id="facebook-btn">Log in Med Facebook</button>
            </div>
            <hr>
            <p class="registrep">Har du ikke en Konto? <span><Button id="opret">Opret Profil</Button></span></p>

        </div>

        <div id="registremodal" class="modal">

            <div class="registre">
                <img class="logo" src="images/logo_lyserd.png" alt="Kreaplace Logo">
                <form id="registreform">
                    <label for="regusername">Brugernavn</label>
                    <input type="text" id="regusername" placeholder="Eks. Anne Mikkelsen" title="Dit Navn" required>
                    <label for="regemail">E-mail</label>
                    <input type="email" id="regemail" placeholder="Eks. anne-mikkelsen@gmail.com" title="Din Email"
                        required>
                    <label for="regpassword">Adgangskode</label>
                    <input type="password" id="regpassword" placeholder="Eks. anne123" title="Din Adgangskode"
                        autocomplete="off" required>
                    <label for="reregpassword">Gentaste Adgangskode</label>
                    <input type="password" id="reregpassword" placeholder="Eks. anne123"
                        title="Gentast venligts din adgangskode" autocomplete="off" required>
                    <p id="registreerror"></p>
                    <input class="btn" type="submit" value="Opret">
                </form>
                <hr>
                <button class="btn changetologin" id="skiftlogin">Login</button>
            </div>
        </div>