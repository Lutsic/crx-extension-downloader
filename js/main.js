const search = document.getElementById("search");
const results = document.getElementById("results");
const statusEl = document.getElementById("status");

const EXTENSIONS_DATA = [
    { id: "iginnfkhmmfhlkagcmpgofnjhanpmklb", title: "Boxel Rebound", desc: "Play over 50 levels of box-jumping madness!", img: "img/1.png", category: "games" },
    { id: "mjjgmlmpeaikcaajghilhnioimmaibon", title: "Boxel 3D", desc: "Boxel 3D is a speedrunning game packed with challenging levels.", img: "img/2.png", category: "games" },
    { id: "mmgjkfjlmdkmoipndaeombfnomjfgeff", title: "Boxel Golf", desc: "Boxel Golf is a multiplayer golf game packed with challenging courses.", img: "img/3.png", category: "games" },
    { id: "jhegmncopobmnnmcdaobcepcamekoomb", title: "Helix Fruit Jump", desc: "In Helix Fruit Jump game, you have to take the ball to the finish line and complete the level.", img: "img/4.png", category: "games" },
    { id: "bnlofglpdlboacepdieejiecfbfpmhlb", title: "Turbo VPN", desc: "Secure Free VPN Proxy.", img: "img/5.png", category: "vpn" },
    { id: "omghfjlpggmjjaagoclmmobgdodcjboh", title: "Browsec VPN", desc: "Free VPN for Chrome", img: "img/6.png", category: "vpn" },
    { id: "majdfhpaihoncoakbjgbdhglocklcgno", title: "VeePN VPN Proxy", desc: "Fast, ultra secure, and easy to use VPN service to protect your privacy online.", img: "img/7.png", category: "vpn" },
    { id: "ddkjiahejlhfcafbddmgiahcphecmpfh", title: "UBlockOrigin Lite", desc: "Blocks ads, trackers, miners, and more immediately upon installation.", img: "img/8.png", category: "utils" },
    { id: "bnchicpgbdgahiecgofdabidjihblaff", title: "Stacker", desc: "Stack falling tetra blocks without hitting the ceiling!", img: "img/9.png", category: "games" },
    { id: "kfemlcmefehdnnnfjplhckdndgaglnhc", title: "Trixel", desc: "Tetris Falling Blocks Stacker.", img: "img/10.png", category: "games" },
    { id: "iibmocmonpccjkjpdgngimgdgpaeheje", title: "Table Tennis", desc: "A classic table tennis game that plays in a popup.", img: "img/11.png", category: "games" },
    { id: "gkahkdehbcjlbdnbjcgndhakhdaogjoa", title: "Table Tennis Workout", desc: "Catch as many falling balls as you can within the time limit!", img: "img/12.png", category: "games" },
    { id: "jbnboceikbdhfinjlebidbhhlplagahc", title: "Level Maze", desc: "A level up maze game that plays in a popup.", img: "img/13.png", category: "games" },
    { id: "bamdkjfjhhnjcgcjmmjdnncpglihepoi", title: "Tiny Tycoon", desc: "Build a tiny tycoon on a tiny planet.", img: "img/14.png", category: "games" },
    { id: "gokcmhknbfbkchaljcbjloaebnoblcnd", title: "Arcade Classics", desc: "A free browser extension with 9 games to play!", img: "img/15.png", category: "games" },
    { id: "joginlggdlgfofmhnfbebafafbmddbpe", title: "Watermelon Game", desc: "Merge, Stack & Grow Big!", img: "img/16.png", category: "games" },
    { id: "oiaejidbmkiecgbjeifoejpgmdaleoha", title: "Stylebot", desc: "Change the appearance of the web instantly with CSS.", img: "img/17.png", category: "utils" },
    { id: "difoiogjjojoaoomphldepapgpbgkhkb", title: "Sider: Chat with all AI!", desc: "GPT-5, Claude, DeepSeek, Gemini, Grok.", img: "img/18.png", category: "utils" },
    { id: "ammjkodgmmoknidbanneddgankgfejfh", title: "7TV", desc: "Improve your viewing experience on Twitch & YouTube with new features.", img: "img/19.png", category: "utils" },
    { id: "dhdgffkkebhmkfjojejmpbldmpobfkfo", title: "Tampermonkey", desc: "Change the web at will with userscripts", img: "img/20.png", category: "utils" },
    { id: "aomkpefnllinimbhddlfhelelngakbbn", title: "Ultimate Car Driving", desc: "Enjoy car driving simulator in a big and fascinating city.", img: "img/21.png", category: "games" },
    { id: "lkkhkpnodkflpecmnbkaceebgejjfhhl", title: "Toy Car Driving", desc: "Choose the toy car you want to play with and enjoy the cities.", img: "img/22.png", category: "games" },
    { id: "ghnhfbiidbbolhkiaheaflffnddkmbno", title: "Extreme Car Traffic Racing", desc: "If you like car racing games, you must make high scores on highway.", img: "img/23.png", category: "games" },
    { id: "kdlfddjhmdfcdepdagbjlcodpolmmkki", title: "Arcade Car Racing", desc: "Choose your car and reach the finish line before your opponents by drift racing.", img: "img/24.png", category: "games" },
    { id: "icdhilhfkbabomhmfcgoejcfhpalhdfd", title: "Sniper Gun Shooting", desc: "With your sniper rifle, you have to eliminate all the enemies without being noticed.", img: "img/25.png", category: "games" },
    { id: "ijkmjnaahlnmdjjlbhbjbhlnmadmmlgg", title: "2048", desc: "Play original 2048 puzzle game in popup anytime you want!", img: "img/26.png", category: "games" },
    { id: "gnblbpbepfbfmoobegdogkglpbhcjofh", title: "Beyond 20", desc: "Integrates the D&D Beyond Character Sheets with Roll20 and Foundry VTT.", img: "img/27.png", category: "utils" },
    { id: "gnblbpbepfbfmoobegdogkglpbhcjofh", title: "Flappy Basketball", desc: "All you have to do is toss the ball into the basket and score as high as you can.", img: "img/28.png", category: "games" },
    { id: "jobnghcjlacpahmhpjgamjgemgdalolh", title: "Sci Fi Flight Simulator", desc: "In this flight simulator game, try to complete the levels by collecting the spheres on the stage.", img: "img/29.png", category: "games" },
    { id: "nhkhnfcomlemdgplceegnangmahdfomg", title: "Classic Uno Game", desc: "When playing uno against your opponent, you must first run out of cards in your hand.", img: "img/30.png", category: "games" },
    { id: "hpgaehmokjbdfkbgkeifbfogjalkpfgb", title: "NTL MOD for Slither.io", desc: "Advanced slither.io mod for pro players", img: "img/31.png", category: "games" },
    { id: "hpgaehmokjbdfkbgkeifbfogjalkpfgb", title: "Better Lyrics", desc: "Enhance YouTube Music with beautiful time-synced lyrics, multilingual support, real-time translations and more", img: "img/32.png", category: "utils" },
    { id: "pjafcgbpdclmdeiipolenjgkikeldljl", title: "Chrome Piano", desc: "Play the piano in your browser", img: "img/33.png", category: "games" },
    { id: "gebbhagfogifgggkldgodflihgfeippi", title: "Return YouTube Dislike", desc: "Return YouTube Dislike restores the ability to see dislikes on YouTube.", img: "img/34.png", category: "utils" },
    { id: "jiaopdjbehhjgokpphdfgmapkobbnmjp", title: "Youtube-shorts block", desc: "Play the Youtube shorts video as if it were a normal video.", img: "img/35.png", category: "utils" },
    { id: "mpkkcddegpblmobincjkbpgfcbejjbcp", title: "FACEIT FORECAST", desc: "A convenient extension for detailed statistics on Faceit.", img: "img/36.png", category: "utils" },
    { id: "bgehnoihoklmofgehcefiaicdcdgppck", title: "Spotify Playback Speed", desc: "Adds a button and menu to manipulate playback speed on Spotify Web.", img: "img/37.png", category: "utils" },
    { id: "kdbmhfkmnlmbkgbabkdealhhbfhlmmon", title: "SteamDB", desc: "Adds SteamDB links and new features on the Steam store and community. View lowest game prices and stats.", img: "img/38.png", category: "utils" },
    { id: "andgibkjiikabclfdkecpmdkfanpdapf", title: "GIPHY for Gmail", desc: "Search and discover the best GIFs for your every email need quickly and easily.", img: "img/39.png", category: "utils" },
    { id: "nkabooldphfdjcbhcodblkfmigmpchhi", title: "Pinterest Love", desc: "Save screenshots and other images to Pinterest, visually search pins and list pinnable images on a page.", img: "img/40.png", category: "utils" },
    { id: "gnemoflnihonmkiacnagnbnlppkamfgo", title: "Word Replacer Max", desc: "Seamlessly replace text on any web page.", img: "img/41.png", category: "utils" },
    { id: "eppiocemhmnlbhjplcgkofciiegomcon", title: "Urban VPN Proxy", desc: "Get the best secured Free VPN access to any website, and unblock content with Urban VPN", img: "img/42.png", category: "vpn" },
    { id: "fjoaledfpmneenckfbpdfhkmimnjocfa", title: "NordVPN proxy protection", desc: "Connect to the fastest VPN out there — NordVPN.", img: "img/43.png", category: "vpn" },
    { id: "immngomjofcbflgcckkfddnbpmjokbjh", title: "ZoogVPN", desc: "Simple and reliable VPN for Chrome that connects instantly.", img: "img/44.png", category: "vpn" }
];

function renderExtensions(category = "all") {
    const grid = document.getElementById("extensions-grid");
    grid.innerHTML = "";

    const filtered = category === "all" 
        ? EXTENSIONS_DATA 
        : EXTENSIONS_DATA.filter(item => item.category === category);

    filtered.forEach(item => {
        const a = document.createElement("a");
        a.href = `https://clients2.google.com/service/update2/crx?response=redirect&prodversion=122.0&acceptformat=crx2,crx3&x=id%3D${item.id}%26installsource%3Dondemand%26uc`;
        a.className = "tile-link";
        a.innerHTML = `
            <div class="tile ${item.category}">
                <img src="${item.img}" alt="${item.title}">
                <div class="text">
                    <div class="title">${item.title}</div>
                    <div class="desc">${item.desc}</div>
                </div>
            </div>
        `;
        grid.appendChild(a);
    });

    if (filtered.length === 0) {
        grid.innerHTML = `<p style="color: #fff; grid-column: 1 / -1; text-align: center; padding: 40px;">uwu</p>`;
    }
}

function initFilters() {
    const buttons = document.querySelectorAll('.filter-btn');
    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            buttons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderExtensions(btn.dataset.category);
        });
    });
}

function openTab(index) {
    let tabs = document.querySelectorAll('.content');
    tabs.forEach(tab => tab.classList.remove('active'));
    tabs[index].classList.add('active');
}

function loadScript(url) {
    return new Promise((resolve, reject) => {
        const s = document.createElement("script");
        s.src = url;
        s.onload = resolve;
        s.onerror = () => reject(new Error("Error during loading script"));
        document.body.appendChild(s);
    });
}

window.addEventListener('load', () => {
    renderExtensions("all");
    initFilters();


    loadScript("https://github.com/Lutsic/crx-extension-downloader/releases/download/release/data.js")
        .then(() => {
            statusEl.textContent = "All data loaded correctly";
        })
        .catch(err => {
            console.error(err);
            statusEl.textContent = "Error during data loading: " + err.message;
        });

    search.oninput = () => {
        const q = search.value.toLowerCase();
        results.innerHTML = "";
        if (typeof DATA === "undefined" || !q) return;

        let count = 0;
        for (const name in DATA) {
            if (name.toLowerCase().includes(q)) {
                const li = document.createElement("li");
                const a = document.createElement("a");
                a.textContent = name;
                a.href = DATA[name];
                a.target = "_blank";
                li.appendChild(a);
                results.appendChild(li);
                if (++count >= 100) break;
            }
        }
    };
});
