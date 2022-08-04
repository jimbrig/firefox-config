// Search for text when start typing
user_pref("accessibility.typeaheadfind", true);

// Turn on notifications to show in Windows Action Center
user_pref("alerts.useSystemBackend", true);

// Allow Firefox to install and run studies
user_pref("app.shield.optoutstudies.enabled", true);

// Do not show about:config warning message
user_pref("browser.aboutConfig.showWarning", false);

// Enable Backspace to go back to a previous web page
user_pref("browser.backspace_action", 0);

// Prevent bookmark menu and toolbar folder menu from closing when opening bookmark in a new tab
user_pref("browser.bookmarks.openInTabClosesMenu", false);

// Hide mobile bookmarks folder
user_pref("browser.bookmarks.showMobileBookmarks", false);

// Show the Compact option under Density in the customize menu
user_pref("browser.compactmode.show", true);

// Turn off Content Blocker notification
user_pref("browser.contentblocking.introCount", 20);

// Do not allow Firefox to make prezonalized extension recommendations
user_pref("browser.discovery.enabled", false);

// Do not auto-hide Downloads button in toolbar
user_pref("browser.download.autohideButton", false);

// Ask what to do for each file before downloading
user_pref("browser.download.useDownloadDir", false);

// Turn off counting URIs in private browsing mode
user_pref("browser.engagement.total_uri_count.pbm", false);

// Turn off Library Highlights
user_pref("browser.library.activity-stream.enabled", false);

// Do not notify about new features
user_pref("browser.messaging-system.whatsNewPanel.enabled", false);

// Add "View Image Info" to the image context menu
user_pref("browser.menu.showViewImageInfo", true);

// Turn off recommended extensions
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr", false);

// Do not recommend extensions as you browse
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.addons", false);

// Do not recommend features as you browse
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.features", false);

// Turn off Snippets (Updates from Mozilla and Firefox)
user_pref("browser.newtabpage.activity-stream.feeds.snippets", false);

// Unpin Top Sites search shortcuts
user_pref("browser.newtabpage.activity-stream.improvesearch.topSiteSearchShortcuts", false);

// Does not offer import bookmarks, history and passwords from other browsers
user_pref("browser.newtabpage.activity-stream.migrationExpired", true);

// Show Highlights in 4 rows
user_pref("browser.newtabpage.activity-stream.section.highlights.rows", 4);

// Hide sponsored top sites in Firefox Home screen
user_pref("browser.newtabpage.activity-stream.showSponsoredTopSites", false);

// Show Top Sites in 4 rows
user_pref("browser.newtabpage.activity-stream.topSitesRows", 4);

// Turn on "Firefox Experiments" settings page
user_pref("browser.preferences.experimental", true);

// Show search suggestions in Private Windows
user_pref("browser.search.suggest.enabled.private", true);

// Set number of saved closed tabs on 20
user_pref("browser.sessionstore.max_tabs_undo", 20);

// Restore previous session
// user_pref("browser.startup.page", 3);

// Double-сlick to close tabs feature
user_pref("browser.tabs.closeTabByDblclick", true);

// The last tab does not close the browser
user_pref("browser.tabs.closeWindowWithLastTab", false);

// Show Title Bar
user_pref("browser.tabs.inTitlebar", 0);

// Show Drag Space
user_pref("browser.tabs.extraDragSpace", true);

// Open new tabs on the right
user_pref("browser.tabs.insertRelatedAfterCurrent", false);

// Open bookmarks in a background tab
user_pref("browser.tabs.loadBookmarksInBackground", true);

// Unload tabs when Firefox detects the system is running on low memory
user_pref("browser.tabs.unloadOnLowMemory", true);

// Do not warn when attempt to close multiple tabs
user_pref("browser.tabs.warnOnClose", false);

// Show tab previews in the Windows taskbar
user_pref("browser.taskbar.previews.enable", true);

// Set the "Bookmarks menu" as default bookmark folder
user_pref("browser.toolbars.bookmarks.2h2020", true);
user_pref("browser.bookmarks.defaultLocation", "menu________");

// Use touch density in toolbar
user_pref("browser.uidensity", 2);

// Decode copied URLs, containing UTF8 symbols
user_pref("browser.urlbar.decodeURLsOnCopy", true);

// Do not send search term via ISP's DNS server
user_pref("browser.urlbar.dnsResolveSingleWordsAfterSearch", 0);

// Enable Quick Actions (104)
user_pref("browser.urlbar.quickactions.enabled", true);
user_pref("browser.urlbar.shortcuts.quickactions", true);

// When using the address bar, do not suggest search engines
user_pref("browser.urlbar.suggest.engines", false);

// Alway show bookmarks toolbar
user_pref("browser.toolbars.bookmarks.visibility", "always");

// Turn off "Firefox Default Browser Agent"
user_pref("default-browser-agent.enabled", false);

// Turn off protection for downloading files over insecure connections
user_pref("dom.block_download_insecure", false);

// Turn on lazy loading for images
user_pref("dom.dom.image-lazy-loading.enabled", true);

// Enable HTTPS-Only Mode in all windows
// user_pref("dom.security.https_only_mode", true);

// Run extensions in Private browsing mode
user_pref("extensions.allowPrivateBrowsingByDefault", true);

// Turn off Extension Recommendations on the Add-ons Manager
user_pref("extensions.htmlaboutaddons.recommendations.enabled", false);

// Turn off Pocket
user_pref("extensions.pocket.enabled", false);

// Highlight all occurrences of the phrase when searching
user_pref("findbar.highlightAll", true);

// Enable site isolation (Project Fission)
user_pref("fission.autostart", true);

// Use smooth scrolling
user_pref("general.autoScroll", false);

// Do not select when double-clicking text the space following the text
user_pref("layout.word_select.eat_space_to_next_word", false);

// Turn on media control
user_pref("media.hardwaremediakeys.enabled", true);

// Turn on MMB for openning link a new tab
user_pref("middlemouse.openNewWindow", true);

// Enable Encrypted Client Hello (ECH)
user_pref("network.dns.echconfig.enabled", true);
user_pref("network.dns.use_https_rr_as_altsvc", true);

// Allow Windows single sign-on for Microsoft, work, and school accounts
user_pref("network.http.windows-sso.enabled", true);

// https://wiki.mozilla.org/Trusted_Recursive_Resolver
// Make DoH the browser's first choice but use regular DNS as a fallback
user_pref("network.trr.mode", 2);

// The URI for DoH server
user_pref("network.trr.uri", "https://mozilla.cloudflare-dns.com/dns-query");

// Set the IP address of the host name used in "network.trr.uri", to bypass using the system native resolver for it
user_pref("network.trr.bootstrapAddress", "1.1.1.1");

// Enable PDF editing feature and tools (104)
user_pref("pdfjs.annotationEditorMode", 1);

// Per <https://www.boxaid.com/blog/make-firefox-faster-by-editing-the-config-file/>
user_pref("network.http.pipelining", true);
user_pref("network.http.proxy.pipelining", true);
user_pref("network.http.pipelining.maxrequests", 8);
user_pref("network.http.max-connections", 900);
user_pref("network.http.max-persistent-connections-per-proxy", 96);
user_pref("network.http.max-persistent-connections-per-server", 32);
user_pref("nglayout.initialpaint.delay", 0);
user_pref("network.dns.disableIPv6", false);
user_pref("plugin.expose_full_path", true);

// Enables some extra Extension System Logging (can reduce performance)
user_pref("extensions.logging.enabled", false);

// Disables strict compatibility, making addons compatible-by-default.
pref("extensions.strictCompatibility", false);

// Block new requests asking to allow notifications
user_pref("permissions.default.desktop-notification", 2);

// Send websites a "Do Not Track" signal always
user_pref("privacy.donottrackheader.enabled", true);

// Strips known tracking query parameters from URLs
user_pref("privacy.query_stripping.enabled.pbmode", true);

// Total Cookie Protection contains cookies to the site you’re on, so trackers can’t use them to follow you between sites.
user_pref("privacy.restrict3rdpartystorage.rollout.enabledByDefault", true);

// Set time range to clear to "Everything"
user_pref("privacy.sanitize.timeSpan", 0);

// Prompts should be window modal by default
user_pref("prompts.defaultModalType", 3);

// Turn on UI customizations sync
user_pref("services.sync.prefs.sync.browser.uiCustomization.state", true);

// Enable the import of passwords as a CSV file on the about:logins page
user_pref("signon.management.page.fileImport.enabled", true);

// Enable urlbar built-in calculator
user_pref("suggest.calculator", true);

// Show indicators on saved logins that are re-using those breached passwords
user_pref("signon.management.page.vulnerable-passwords.enabled", true);

// Turn on userChrome.css and userContent.css support
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true);

// Turn off Firefox starting automatically after Windows 10 restart
user_pref("toolkit.winRegisterApplicationRestart", false);

// Show matches next on top of scrollbar
user_pref("ui.textHighlightBackground", "Fireprick");

// Turn on Video Acceleration API (VA-API). For desktop environment based on Wayland
// user_pref("widget.wayland-dmabuf-vaapi.enabled", true);

// Turn on FFmpegDataDecoder. For display server based on Wayland
// user_pref("widget.wayland-dmabuf-webgl.enabled", true);