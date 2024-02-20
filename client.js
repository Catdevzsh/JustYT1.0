
Tampermonkey® by Jan Biniok
v5.0.1
	
Remove Adblock Thing
by JoelMatic
1
// ==UserScript==
2
// @name         Remove Adblock Thing
3
// @namespace    http://tampermonkey.net/
4
// @version      4.0
5
// @description  Removes Adblock Thing
6
// @author       JoelMatic
7
// @match        https://www.youtube.com/*
8
// @icon         https://www.google.com/s2/favicons?sz=64&domain=youtube.com
9
// @updateURL    https://github.com/TheRealJoelmatic/RemoveAdblockThing/raw/main/Youtube-Ad-blocker-Reminder-Remover.user.js
10
// @downloadURL  https://github.com/TheRealJoelmatic/RemoveAdblockThing/raw/main/Youtube-Ad-blocker-Reminder-Remover.user.js
11
// @grant        none
12
// ==/UserScript==
13
​
14
(function()
15
 {
16
    //
17
    //      Config
18
    //
19
​
20
    // Enable The Undetected Adblocker
21
    const adblocker = true;
22
​
23
    // Enable The Popup remover (pointless if you have the Undetected Adblocker)
24
    const removePopup = false;
25
​
26
    // Checks for updates (Removes the popup)
27
    const updateCheck = true;
28
​
29
    // Enable debug messages into the console
30
    const debugMessages = true;
31
​
32
    // Enable custom modal
33
    // Uses SweetAlert2 library (https://cdn.jsdelivr.net/npm/sweetalert2@11) for the update version modal.
34
    // When set to false, the default window popup will be used. And the library will not be loaded.
35
    const updateModal = {
36
        enable: true, // if true, replaces default window popup with a custom modal
37
        timer: 5000, // timer: number | false
38
    };
39
​
Tam - Your service bot

Do you need help viewing and editing values stored by a userscript?
Disable
Tampermonkey Bot
