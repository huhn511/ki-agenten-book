// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded affix "><a href="cover.html">Cover</a></li><li class="chapter-item expanded affix "><a href="inhaltsverzeichnis.html">Inhaltsverzeichnis</a></li><li class="chapter-item expanded affix "><li class="spacer"></li><li class="chapter-item expanded "><a href="prolog/intro.html"><strong aria-hidden="true">1.</strong> Prolog: Die Entstehung eines neuen Bewusstseins</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="prolog/outro.html"><strong aria-hidden="true">1.1.</strong> Prolog - Fazit</a></li></ol></li><li class="chapter-item expanded "><a href="kapitel_1/intro.html"><strong aria-hidden="true">2.</strong> Kapitel 1: Die Evolution der Intelligenz</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="kapitel_1/evolution.html"><strong aria-hidden="true">2.1.</strong> Von den Anfängen bis Deep Learning</a></li><li class="chapter-item expanded "><a href="kapitel_1/ki_winter.html"><strong aria-hidden="true">2.2.</strong> Die KI-Winter und ihre Lehren</a></li><li class="chapter-item expanded "><a href="kapitel_1/transformer.html"><strong aria-hidden="true">2.3.</strong> Transformer-Revolution</a></li><li class="chapter-item expanded "><a href="kapitel_1/reasoning_breakthrough.html"><strong aria-hidden="true">2.4.</strong> Durchbrüche im Reasoning</a></li><li class="chapter-item expanded "><a href="kapitel_1/outro.html"><strong aria-hidden="true">2.5.</strong> Kapitel 1 - Fazit</a></li></ol></li><li class="chapter-item expanded "><a href="kapitel_2/intro.html"><strong aria-hidden="true">3.</strong> Kapitel 2: Architektur der modernen KI</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="kapitel_2/neuronale_netze.html"><strong aria-hidden="true">3.1.</strong> Neuronale Netze</a></li><li class="chapter-item expanded "><a href="kapitel_2/sprachmodelle.html"><strong aria-hidden="true">3.2.</strong> Sprachmodelle und Emergenz</a></li><li class="chapter-item expanded "><a href="kapitel_2/multimodal.html"><strong aria-hidden="true">3.3.</strong> Multimodale Systeme</a></li><li class="chapter-item expanded "><a href="kapitel_2/memory.html"><strong aria-hidden="true">3.4.</strong> Kontextuelle Intelligenz</a></li><li class="chapter-item expanded "><a href="kapitel_2/outro.html"><strong aria-hidden="true">3.5.</strong> Kapitel 2 - Fazit</a></li></ol></li><li class="chapter-item expanded "><a href="kapitel_3/intro.html"><strong aria-hidden="true">4.</strong> Kapitel 3: Autonome Agenten - Von Werkzeugen zu Partnern</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="kapitel_3/definition.html"><strong aria-hidden="true">4.1.</strong> Definition und Prinzipien</a></li><li class="chapter-item expanded "><a href="kapitel_3/computer_interaction.html"><strong aria-hidden="true">4.2.</strong> Computer-Interaktion und Automatisierung</a></li><li class="chapter-item expanded "><a href="kapitel_3/ecosystems.html"><strong aria-hidden="true">4.3.</strong> Agent-Ökosysteme</a></li><li class="chapter-item expanded "><a href="kapitel_3/benchmarks.html"><strong aria-hidden="true">4.4.</strong> Performance und Grenzen</a></li><li class="chapter-item expanded "><a href="kapitel_3/multi_agent.html"><strong aria-hidden="true">4.5.</strong> Multi-Agent-Systeme</a></li><li class="chapter-item expanded "><a href="kapitel_3/mcp_und_a2a.html"><strong aria-hidden="true">4.6.</strong> Wie Agenten miteinander sprechen lernen</a></li><li class="chapter-item expanded "><a href="kapitel_3/outro.html"><strong aria-hidden="true">4.7.</strong> Kapitel 3 - Fazit</a></li></ol></li><li class="chapter-item expanded "><a href="kapitel_4/intro.html"><strong aria-hidden="true">5.</strong> Kapitel 4: Infrastruktur und Skalierung</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="kapitel_4/energiekrise.html"><strong aria-hidden="true">5.1.</strong> Energieherausforderungen</a></li><li class="chapter-item expanded "><a href="kapitel_4/loesungen.html"><strong aria-hidden="true">5.2.</strong> Technische Lösungsansätze</a></li><li class="chapter-item expanded "><a href="kapitel_4/mega_infrastructure.html"><strong aria-hidden="true">5.3.</strong> Mega-Infrastrukturen</a></li><li class="chapter-item expanded "><a href="kapitel_4/nachhaltigkeit.html"><strong aria-hidden="true">5.4.</strong> Nachhaltige KI-Entwicklung</a></li><li class="chapter-item expanded "><a href="kapitel_4/outro.html"><strong aria-hidden="true">5.5.</strong> Kapitel 4 - Fazit</a></li></ol></li><li class="chapter-item expanded "><a href="kapitel_5/intro.html"><strong aria-hidden="true">6.</strong> Kapitel 5: Das vernetzte Zeitalter</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="kapitel_5/web_evolution.html"><strong aria-hidden="true">6.1.</strong> Evolution des digitalen Raums</a></li><li class="chapter-item expanded "><a href="kapitel_5/agenten_netzwerk.html"><strong aria-hidden="true">6.2.</strong> Autonome Netzwerke</a></li><li class="chapter-item expanded "><a href="kapitel_5/information_service.html"><strong aria-hidden="true">6.3.</strong> Information als Service</a></li><li class="chapter-item expanded "><a href="kapitel_5/roboter.html"><strong aria-hidden="true">6.4.</strong> Physische Integration</a></li><li class="chapter-item expanded "><a href="kapitel_5/outro.html"><strong aria-hidden="true">6.5.</strong> Kapitel 5 - Fazit</a></li></ol></li><li class="chapter-item expanded "><a href="kapitel_6/intro.html"><strong aria-hidden="true">7.</strong> Kapitel 6: Transformation der Arbeit</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="kapitel_6/globale_auswirkungen.html"><strong aria-hidden="true">7.1.</strong> Globale Auswirkungen</a></li><li class="chapter-item expanded "><a href="kapitel_6/it_transformation.html"><strong aria-hidden="true">7.2.</strong> IT und Wissensarbeit</a></li><li class="chapter-item expanded "><a href="kapitel_6/erfolg_cases.html"><strong aria-hidden="true">7.3.</strong> Erfolgreiche Adaptionen</a></li><li class="chapter-item expanded "><a href="kapitel_6/neue_berufe.html"><strong aria-hidden="true">7.4.</strong> Neue Rollenbilder</a></li><li class="chapter-item expanded "><a href="kapitel_6/outro.html"><strong aria-hidden="true">7.5.</strong> Kapitel 6 - Fazit</a></li></ol></li><li class="chapter-item expanded "><a href="kapitel_7/intro.html"><strong aria-hidden="true">8.</strong> Kapitel 7: Regulierung und gesellschaftlicher Konsens</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="kapitel_7/legal_frameworks.html"><strong aria-hidden="true">8.1.</strong> Rechtliche Rahmenwerke</a></li><li class="chapter-item expanded "><a href="kapitel_7/dsgvo.html"><strong aria-hidden="true">8.2.</strong> Datenschutz und Transparenz</a></li><li class="chapter-item expanded "><a href="kapitel_7/international.html"><strong aria-hidden="true">8.3.</strong> Internationale Ansätze</a></li><li class="chapter-item expanded "><a href="kapitel_7/europa_souveraenitaet.html"><strong aria-hidden="true">8.4.</strong> Europas KI-Souveränität</a></li><li class="chapter-item expanded "><a href="kapitel_7/alignment.html"><strong aria-hidden="true">8.5.</strong> Ethische Ausrichtung</a></li><li class="chapter-item expanded "><a href="kapitel_7/outro.html"><strong aria-hidden="true">8.6.</strong> Kapitel 7 - Fazit</a></li></ol></li><li class="chapter-item expanded "><a href="kapitel_8/intro.html"><strong aria-hidden="true">9.</strong> Kapitel 8: Szenarien der Zukunft</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="kapitel_8/development_paths.html"><strong aria-hidden="true">9.1.</strong> Entwicklungslinien</a></li><li class="chapter-item expanded "><a href="kapitel_8/agi_prognosen.html"><strong aria-hidden="true">9.2.</strong> AGI-Prognosen</a></li><li class="chapter-item expanded "><a href="kapitel_8/szenarien.html"><strong aria-hidden="true">9.3.</strong> Mögliche Welten</a></li><li class="chapter-item expanded "><a href="kapitel_8/matrix_parallelen.html"><strong aria-hidden="true">9.4.</strong> Philosophische Reflexion</a></li><li class="chapter-item expanded "><a href="kapitel_8/post_knappheit.html"><strong aria-hidden="true">9.5.</strong> Post-Knappheits-Gesellschaft</a></li><li class="chapter-item expanded "><a href="kapitel_8/outro.html"><strong aria-hidden="true">9.6.</strong> Kapitel 8 - Fazit</a></li></ol></li><li class="chapter-item expanded "><a href="epilog/intro.html"><strong aria-hidden="true">10.</strong> Epilog: Die Reise beginnt jetzt</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="epilog/outro.html"><strong aria-hidden="true">10.1.</strong> Epilog - Fazit</a></li></ol></li><li class="chapter-item expanded "><li class="spacer"></li><li class="chapter-item expanded "><a href="glossar/intro.html"><strong aria-hidden="true">11.</strong> Glossar</a></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString().split("#")[0].split("?")[0];
        if (current_page.endsWith("/")) {
            current_page += "index.html";
        }
        var links = Array.prototype.slice.call(this.querySelectorAll("a"));
        var l = links.length;
        for (var i = 0; i < l; ++i) {
            var link = links[i];
            var href = link.getAttribute("href");
            if (href && !href.startsWith("#") && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The "index" page is supposed to alias the first chapter in the book.
            if (link.href === current_page || (i === 0 && path_to_root === "" && current_page.endsWith("/index.html"))) {
                link.classList.add("active");
                var parent = link.parentElement;
                if (parent && parent.classList.contains("chapter-item")) {
                    parent.classList.add("expanded");
                }
                while (parent) {
                    if (parent.tagName === "LI" && parent.previousElementSibling) {
                        if (parent.previousElementSibling.classList.contains("chapter-item")) {
                            parent.previousElementSibling.classList.add("expanded");
                        }
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') {
                sessionStorage.setItem('sidebar-scroll', this.scrollTop);
            }
        }, { passive: true });
        var sidebarScrollTop = sessionStorage.getItem('sidebar-scroll');
        sessionStorage.removeItem('sidebar-scroll');
        if (sidebarScrollTop) {
            // preserve sidebar scroll position when navigating via links within sidebar
            this.scrollTop = sidebarScrollTop;
        } else {
            // scroll sidebar to current active section when navigating via "next/previous chapter" buttons
            var activeSection = document.querySelector('#sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        var sidebarAnchorToggles = document.querySelectorAll('#sidebar a.toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(function (el) {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define("mdbook-sidebar-scrollbox", MDBookSidebarScrollbox);
